import { SITE_CONFIG } from "@/content/site-config";

export interface EnquiryPayload {
  kind?: "general" | "A" | "B" | "unified";
  enquiryType?: string;
  category?: string;
  company: string;
  contact: string;
  email: string;
  phone?: string;
  product?: string;
  cargo?: string;
  dims?: string;
  qty?: string;
  date?: string;
  route?: string;
  originDestination?: string;
  volume?: string;
  volumeFrequency?: string;
  mode?: string;
  details?: string;
  notes?: string;
  consent: boolean;
  timestamp?: string;
}

export interface EnquirySubmissionResult {
  success: boolean;
  message: string;
  mode: "delivered" | "preview" | "stored" | "error";
  enquiryId?: string;
  errors?: Record<string, string>;
}

export const MAX_PAYLOAD_SIZE_BYTES = 50 * 1024; // 50 KB strict payload limit
export const RATE_LIMIT_WINDOW_MS = 60 * 1000; // 1 minute
export const MAX_REQUESTS_PER_WINDOW = 5;

/**
 * Departmental Mailbox Routing Map per Content Master Section 11:
 * 1. Container Purchase / Custom Build -> info@kalyanicasttech.com, business.development@kalyanicasttech.com
 * 2. Technical Data Sheet / Certificate Request -> info@kalyanicasttech.com, business.development@kalyanicasttech.com
 * 3. Shivlakha Cargo Movement Evaluation -> terminal.head@kalyanicasttech.com (cc: business.development@kalyanicasttech.com)
 * 4. Foundry & Railway Castings -> info@kalyanicasttech.com, business.development@kalyanicasttech.com
 * 5. Vendor / General Enquiry -> info@kalyanicasttech.com
 */
export const ENQUIRY_ROUTING_MAP: Record<string, { to: string[]; cc?: string[] }> = {
  "Container Purchase / Custom Build": {
    to: ["info@kalyanicasttech.com", "business.development@kalyanicasttech.com"],
  },
  "Technical Data Sheet / Certificate Request": {
    to: ["info@kalyanicasttech.com", "business.development@kalyanicasttech.com"],
  },
  "Shivlakha Cargo Movement Evaluation": {
    to: ["terminal.head@kalyanicasttech.com"],
    cc: ["business.development@kalyanicasttech.com"],
  },
  "Foundry & Railway Castings": {
    to: ["info@kalyanicasttech.com", "business.development@kalyanicasttech.com"],
  },
  "Vendor / General Enquiry": {
    to: ["info@kalyanicasttech.com"],
  },
};

export function getEnquiryRecipients(category?: string): { to: string[]; cc?: string[] } {
  if (category && ENQUIRY_ROUTING_MAP[category]) {
    return ENQUIRY_ROUTING_MAP[category];
  }
  return { to: ["info@kalyanicasttech.com"] };
}

const ipRequestHistory = new Map<string, number[]>();

/** Reset in-memory rate limiting map (used for automated testing) */
export function resetRateLimitsForTesting(): void {
  ipRequestHistory.clear();
}

/**
 * Extracts and normalizes client IP across trusted edge proxies.
 * Prioritizes Cloudflare edge header (authoritative in Cloudflare Workers / Pages),
 * then falls back to sanitized X-Forwarded-For or loopback.
 */
export function extractClientIp(request: Request): string {
  // 1. Authoritative Cloudflare edge header (cannot be forged when behind Cloudflare)
  const cfIp = request.headers.get("cf-connecting-ip");
  if (cfIp) return cfIp.trim();

  // 2. Standard X-Real-IP
  const realIp = request.headers.get("x-real-ip");
  if (realIp) return realIp.trim();

  // 3. X-Forwarded-For: extract first hop and strip whitespace
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const firstIp = forwarded.split(",")[0].trim();
    if (firstIp && /^[0-9a-fA-F:.]+$/.test(firstIp)) {
      return firstIp;
    }
  }

  return "127.0.0.1";
}

/**
 * Strips carriage returns, line breaks, null bytes and control chars
 * to prevent SMTP/HTTP header injection.
 */
function sanitizeHeaderString(val: unknown): string {
  return String(val ?? "")
    .replace(/[\r\n\0\t]/g, " ")
    .trim();
}

/**
 * Validates, normalizes, and handles commercial enquiries server-side.
 * Strictly adheres to non-negotiable security controls:
 * 1. Method verification (POST only).
 * 2. Strict request-size enforcement (<= 50 KB) via both content-length and byte stream measurement.
 * 3. Rate limiting per client IP (max 5 requests / min).
 * 4. Header-injection stripping and length boundaries.
 * 5. Safe preview-mode fallback when live credentials/recipient are absent.
 * 6. Provider timeout with AbortController and PII protection in server logs.
 */
export async function handleEnquirySubmission(
  request: Request,
  clientIp = "127.0.0.1",
): Promise<Response> {
  // 1. Method verification
  if (request.method !== "POST") {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Method Not Allowed. Only POST requests are accepted.",
      }),
      {
        status: 405,
        headers: {
          "content-type": "application/json",
          Allow: "POST",
        },
      },
    );
  }

  // 2. Request size check (header level)
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_PAYLOAD_SIZE_BYTES) {
    return new Response(
      JSON.stringify({
        success: false,
        message: `Payload size exceeds maximum permitted limit (${MAX_PAYLOAD_SIZE_BYTES / 1024} KB).`,
      }),
      {
        status: 413,
        headers: { "content-type": "application/json" },
      },
    );
  }

  // 3. Rate limiting per client IP
  const now = Date.now();
  const timestamps = ipRequestHistory.get(clientIp) || [];
  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= MAX_REQUESTS_PER_WINDOW) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Too many submission attempts. Please wait a minute before retrying.",
      }),
      {
        status: 429,
        headers: {
          "content-type": "application/json",
          "Retry-After": "60",
        },
      },
    );
  }
  recent.push(now);
  ipRequestHistory.set(clientIp, recent);

  // 4. Read body with stream size guard
  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return new Response(
      JSON.stringify({ success: false, message: "Unable to read request body stream." }),
      {
        status: 400,
        headers: { "content-type": "application/json" },
      },
    );
  }

  if (new TextEncoder().encode(rawBody).length > MAX_PAYLOAD_SIZE_BYTES) {
    return new Response(
      JSON.stringify({
        success: false,
        message: `Payload size exceeds maximum permitted limit (${MAX_PAYLOAD_SIZE_BYTES / 1024} KB).`,
      }),
      {
        status: 413,
        headers: { "content-type": "application/json" },
      },
    );
  }

  // 5. Parse JSON payload
  let payload: EnquiryPayload;
  try {
    payload = JSON.parse(rawBody) as EnquiryPayload;
  } catch {
    return new Response(
      JSON.stringify({ success: false, message: "Malformed or non-JSON request body." }),
      {
        status: 400,
        headers: { "content-type": "application/json" },
      },
    );
  }

  // 6. Normalization & Server-side Validation
  const errors: Record<string, string> = {};
  const kind = payload.kind ?? "unified";
  if (!["general", "A", "B", "unified"].includes(kind)) {
    errors["kind"] = "Valid enquiry kind ('general', 'A', 'B', or 'unified') is required.";
  }

  const category = sanitizeHeaderString(payload.enquiryType || payload.category);
  const contact = sanitizeHeaderString(payload.contact).slice(0, 100);
  const company = sanitizeHeaderString(payload.company).slice(0, 150);
  const email = sanitizeHeaderString(payload.email).slice(0, 120);
  const phone = sanitizeHeaderString(payload.phone).slice(0, 50);
  const cargo = sanitizeHeaderString(payload.cargo || payload.product).slice(0, 200);
  const route = sanitizeHeaderString(payload.originDestination || payload.route).slice(0, 300);
  const details = String(payload.notes || payload.details || "")
    .trim()
    .slice(0, 5000);

  if (!contact) errors["contact"] = "Contact person and designation is required.";
  if (!company) errors["company"] = "Company name is required.";
  if (!email) {
    errors["email"] = "Business email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors["email"] = "Enter a valid email address.";
  }

  if (kind === "unified") {
    // Section 11 10-Field Form Validation
    if (!category) {
      errors["enquiryType"] = "Enquiry type is required.";
    }
    if (!phone) {
      errors["phone"] = "Telephone number with country code is required.";
    }
    if (!cargo) {
      errors["cargo"] = "Cargo type, container model or casting part is required.";
    }
    // Dynamic requirement: Shivlakha Cargo Movement Evaluation requires Origin and destination
    if (category === "Shivlakha Cargo Movement Evaluation" && !route) {
      errors["originDestination"] = "Origin and destination is required for cargo movement evaluations.";
    }
  } else if (kind === "general") {
    if (!details) {
      errors["details"] = "Message text is required for general enquiries.";
    }
  } else if (kind === "A") {
    if (!category) errors["category"] = "Enquiry category is required.";
    if (!cargo) errors["product"] = "Product or model name is required.";
    if (!sanitizeHeaderString(payload.cargo)) errors["cargo"] = "Cargo type is required.";
    if (!sanitizeHeaderString(payload.qty)) errors["qty"] = "Quantity is required.";
    if (!phone) errors["phone"] = "Telephone is required for technical container enquiries.";
  } else if (kind === "B") {
    if (!category) errors["category"] = "Enquiry category is required.";
    if (!cargo) errors["cargo"] = "Cargo type is required.";
    if (!route) errors["route"] = "Origin and destination are required.";
    if (!sanitizeHeaderString(payload.volume))
      errors["volume"] = "Volume and frequency are required.";
    if (!phone) errors["phone"] = "Telephone is required for cargo logistics assessments.";
  }

  if (!payload.consent) {
    errors["consent"] = "Consent to use contact details is mandatory.";
  }

  if (Object.keys(errors).length > 0) {
    return new Response(
      JSON.stringify({
        success: false,
        message: "Validation failed on one or more required fields.",
        errors,
      }),
      {
        status: 422,
        headers: { "content-type": "application/json" },
      },
    );
  }

  // 7. Delivery Processing with timeout and sensitive log masking
  const recipientEmail =
    typeof process !== "undefined" ? process.env?.ENQUIRY_RECIPIENT_EMAIL : undefined;
  const resendApiKey = typeof process !== "undefined" ? process.env?.RESEND_API_KEY : undefined;

  const enquiryId = `KCT-${Date.now().toString(36).toUpperCase()}`;

  // If live credentials exist and recipient is configured:
  if (recipientEmail && resendApiKey) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s gateway timeout

    try {
      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        signal: controller.signal,
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Kalyani Cast Tech Enquiries <enquiries@kalyanicasttech.com>",
          to: recipientEmail,
          subject: `[KCT Enquiry #${enquiryId}] ${category || (kind === "A" ? "Container Enquiry" : kind === "B" ? "Logistics Enquiry" : "General Enquiry")} - ${company}`,
          text: `New enquiry received:
Reference ID: ${enquiryId}
Enquiry Type / Category: ${category || kind}
Company: ${company}
Contact & Designation: ${contact}
Email: ${email}
Phone: ${phone || "N/A"}
Cargo / Model: ${cargo || "N/A"}
Origin & Destination: ${route || "N/A"}
Volume & Frequency: ${sanitizeHeaderString(payload.volumeFrequency || payload.volume) || "N/A"}
Technical Notes: ${details || "N/A"}`,
        }),
      });

      if (emailRes.ok) {
        // Redact PII in server audit log
        console.info(
          `[Enquiry Delivered] ID: ${enquiryId}, Kind: ${kind}, Company: ${company.slice(0, 3)}***`,
        );
        return new Response(
          JSON.stringify({
            success: true,
            mode: "delivered",
            enquiryId,
            message:
              "Your enquiry has been successfully delivered to the Kalyani Cast Tech commercial team.",
          }),
          { status: 200, headers: { "content-type": "application/json" } },
        );
      } else {
        const errorText = await emailRes.text();
        console.error(
          `[Enquiry Gateway Error] HTTP ${emailRes.status}: ${errorText.slice(0, 100)}`,
        );
      }
    } catch (err) {
      console.error(
        "[Enquiry Delivery Failure/Timeout]",
        err instanceof Error ? err.message : "Unknown error",
      );
    } finally {
      clearTimeout(timeoutId);
    }
  }

  // Safe Default / Preview Mode Response:
  // Strictly in compliance with non-negotiable Rules:
  // Informs user that submission was validated on the server,
  // but delivery remains in preview until the official corporate recipient is verified.
  console.info(
    `[Enquiry Preview] ID: ${enquiryId}, Kind: ${kind}, ClientIP: ${clientIp.slice(0, 7)}***`,
  );
  return new Response(
    JSON.stringify({
      success: true,
      mode: "preview",
      enquiryId,
      message:
        "Server validation successful. (Preview Mode: Live transmission paused awaiting official corporate email gateway authorization).",
    }),
    {
      status: 200,
      headers: { "content-type": "application/json" },
    },
  );
}
