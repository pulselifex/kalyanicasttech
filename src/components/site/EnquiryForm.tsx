import { useState, useEffect, type FormEvent } from "react";
import { CheckCircle2, ShieldCheck, Train, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export const ENQUIRY_CATEGORIES = [
  "Container Purchase / Custom Build",
  "Shivlakha Cargo Movement Evaluation",
  "Gati Shakti Terminal / Rail Logistics Enquiry",
  "Rolling Stock / Railway Wagon Enquiry",
  "Technical Data Sheet / Certificate Request",
  "Foundry & Railway Castings",
  "Vendor / General Enquiry",
] as const;

export type EnquiryCategory = (typeof ENQUIRY_CATEGORIES)[number];

interface EnquiryFormProps {
  initialKind?: string;
  initialCategory?: string;
}

export function EnquiryForm({ initialKind, initialCategory }: EnquiryFormProps) {
  // Map legacy initialKind if provided
  const defaultCategory =
    initialCategory ||
    (initialKind === "B"
      ? "Shivlakha Cargo Movement Evaluation"
      : initialKind === "A"
        ? "Container Purchase / Custom Build"
        : "");

  const [enquiryType, setEnquiryType] = useState<string>(defaultCategory);
  const [cargo, setCargo] = useState<string>("");
  const [originDestination, setOriginDestination] = useState<string>("");
  const [volumeFrequency, setVolumeFrequency] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverFeedback, setServerFeedback] = useState<{
    mode: string;
    message: string;
    id?: string;
    category?: string;
  } | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const queryType = params.get("type")?.toLowerCase();
    const querySubject = params.get("subject");
    const queryProduct = params.get("product");
    const queryCargo = params.get("cargo");

    if (queryProduct) {
      setCargo(queryProduct);
      setEnquiryType("Container Purchase / Custom Build");
    }

    if (queryCargo) {
      setCargo(queryCargo);
    }

    if (querySubject) {
      const sub = querySubject.trim();
      if (!queryCargo && !queryProduct) {
        setCargo(sub.replace(/^(Commercial Enquiry:\s*|Rolling Stock Enquiry\s*-\s*)/i, ""));
      }
      const lower = sub.toLowerCase();
      if (lower.includes("shivlakha") || lower.includes("rail logistics") || lower.includes("gct")) {
        setEnquiryType("Shivlakha Cargo Movement Evaluation");
      } else if (lower.includes("rolling stock") || lower.includes("wagon")) {
        setEnquiryType("Rolling Stock / Railway Wagon Enquiry");
      } else if (lower.includes("container") || lower.includes("model")) {
        setEnquiryType("Container Purchase / Custom Build");
      } else if (lower.includes("casting") || lower.includes("foundry")) {
        setEnquiryType("Foundry & Railway Castings");
      }
    }

    if (queryType) {
      if (queryType === "cargo" || queryType === "b") {
        setEnquiryType("Shivlakha Cargo Movement Evaluation");
      } else if (queryType === "gct" || queryType === "rail") {
        setEnquiryType("Gati Shakti Terminal / Rail Logistics Enquiry");
      } else if (queryType === "container" || queryType === "a") {
        setEnquiryType("Container Purchase / Custom Build");
      } else if (queryType === "wagon" || queryType === "rolling-stock") {
        setEnquiryType("Rolling Stock / Railway Wagon Enquiry");
      } else if (queryType === "foundry" || queryType === "casting") {
        setEnquiryType("Foundry & Railway Castings");
      } else if (queryType === "tds" || queryType === "certificate") {
        setEnquiryType("Technical Data Sheet / Certificate Request");
      } else if (queryType === "vendor" || queryType === "general") {
        setEnquiryType("Vendor / General Enquiry");
      }
    }
  }, []);

  const isRailMovement =
    enquiryType === "Shivlakha Cargo Movement Evaluation" ||
    enquiryType === "Gati Shakti Terminal / Rail Logistics Enquiry";

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const next: Record<string, string> = {};

    const typeVal = String(data.get("enquiryType") ?? "").trim();
    const company = String(data.get("company") ?? "").trim();
    const contact = String(data.get("contact") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const cargoVal = String(data.get("cargo") ?? "").trim();
    const originDestVal = String(data.get("originDestination") ?? "").trim();
    const volumeVal = String(data.get("volumeFrequency") ?? "").trim();
    const notesVal = String(data.get("notes") ?? "").trim();
    const hasConsent = !!data.get("consent");

    // 1. Enquiry type (Required)
    if (!typeVal) {
      next["enquiryType"] = "Please select an enquiry type.";
    }

    // 2. Company name (Required)
    if (!company) {
      next["company"] = "Company name is required.";
    }

    // 3. Contact person and designation (Required)
    if (!contact) {
      next["contact"] = "Contact person and designation is required.";
    }

    // 4. Business email (Required)
    if (!email) {
      next["email"] = "Business email is required.";
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      next["email"] = "Enter a valid business email address.";
    }

    // 5. Telephone number with country code (Required)
    if (!phone) {
      next["phone"] = "Telephone number with country code is required.";
    } else if (!/^[+]?[\d\s\-().]{8,20}$/.test(phone)) {
      next["phone"] = "Enter a valid telephone number (8–20 digits/characters).";
    }

    // 6. Cargo type, container model or casting part (Required)
    if (!cargoVal) {
      next["cargo"] = "Cargo type, container model or casting part is required.";
    }

    // 7. Origin and destination (Required for rail movements)
    if (isRailMovement && !originDestVal) {
      next["originDestination"] =
        "Origin & Destination corridor is required for rail logistics and siding placement evaluations.";
    }

    // 8. Approximate monthly cargo volume (Required for rail movements)
    if (isRailMovement && !volumeVal) {
      next["volumeFrequency"] =
        "Approximate monthly cargo volume (MT / TEUs) is required for rake planning and siding capacity assessment.";
    }

    // 10. Consent (Required)
    if (!hasConsent) {
      next["consent"] = "Please confirm consent to review and reply to your enquiry.";
    }

    setErrors(next);
    if (Object.keys(next).length > 0) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }

    setIsSubmitting(true);
    setServerFeedback(null);

    const payload = {
      kind: "unified",
      enquiryType: typeVal,
      company,
      contact,
      email,
      phone,
      cargo: cargoVal,
      originDestination: originDestVal,
      volumeFrequency: volumeVal,
      notes: notesVal,
      consent: hasConsent,
    };

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (res.ok && result.success) {
        setSent(true);
        setServerFeedback({
          mode: result.mode ?? "preview",
          message:
            result.message ??
            "Your enquiry details have been verified and submitted for commercial review.",
          id: result.enquiryId,
          category: typeVal,
        });
      } else {
        setSent(false);
        if (result.errors) {
          setErrors(result.errors);
        }
        setServerFeedback({
          mode: "error",
          message:
            result.message ??
            "Submission could not be completed. Please contact our commercial desk directly at info@kalyanicasttech.com or telephone +91 11 28084541 / +91 1274 256789.",
        });
      }
    } catch {
      setSent(false);
      setServerFeedback({
        mode: "error",
        message:
          "Network transmission error: Unable to route your enquiry to the server. Please contact our commercial desk directly at info@kalyanicasttech.com or telephone +91 11 28084541 / +91 1274 256789.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="border border-border bg-card">
      {sent ? (
        <div className="p-8 sm:p-10" role="status">
          <div className="inline-flex items-center gap-2 border border-emerald-600 bg-emerald-50 px-3 py-1 font-mono text-xs font-semibold uppercase text-emerald-800">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            {serverFeedback?.mode === "delivered" ? "Enquiry Delivered" : "Enquiry Verified & Queued"}
          </div>
          <p className="mt-4 font-display text-2xl font-bold text-foreground">
            Thank you for reaching out to Kalyani Cast Tech.
          </p>
          {serverFeedback?.id && (
            <p className="mt-2 font-mono text-xs text-muted-foreground">
              Reference ID: <span className="font-semibold text-foreground">{serverFeedback.id}</span>
            </p>
          )}
          {serverFeedback?.category && (
            <p className="mt-1 text-xs text-muted-foreground">
              Department Classification:{" "}
              <span className="font-medium text-foreground">{serverFeedback.category}</span>
            </p>
          )}
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {serverFeedback?.message}
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Button
              variant="outline"
              className="rounded-none border-primary text-primary hover:bg-primary/5"
              onClick={() => {
                setSent(false);
                setServerFeedback(null);
                setEnquiryType("");
              }}
            >
              Submit another business enquiry
            </Button>
          </div>
        </div>
      ) : (
        <form method="POST" action="/api/enquiries" noValidate onSubmit={onSubmit} className="p-6 sm:p-8">
          {serverFeedback?.mode === "error" && (
            <div className="mb-6 border-l-4 border-destructive bg-destructive/10 p-4 text-xs text-destructive" role="alert">
              <p className="font-semibold">{serverFeedback.message}</p>
              <p className="mt-2 text-[11px] text-foreground">
                Alternative direct contacts:{" "}
                <a href="mailto:info@kalyanicasttech.com" className="font-mono font-medium underline">
                  info@kalyanicasttech.com
                </a>{" "}
                &middot; Rewari Plant:{" "}
                <a href="tel:+911274256789" className="font-mono font-medium underline">
                  +91 1274 256789
                </a>{" "}
                &middot; Delhi Corporate:{" "}
                <a href="tel:+911128084541" className="font-mono font-medium underline">
                  +91 11 28084541
                </a>
              </p>
            </div>
          )}
          <div className="grid gap-6 sm:grid-cols-2">
            {/* Field 1: Enquiry type (Required) */}
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="enquiryType" className="font-semibold text-foreground">
                1. Enquiry type <span className="text-destructive">*</span>
              </Label>
              <select
                id="enquiryType"
                name="enquiryType"
                value={enquiryType}
                onChange={(e) => {
                  setEnquiryType(e.target.value);
                  if (errors["enquiryType"]) {
                    setErrors((prev) => {
                      const copy = { ...prev };
                      delete copy["enquiryType"];
                      return copy;
                    });
                  }
                }}
                aria-required="true"
                aria-invalid={!!errors["enquiryType"]}
                aria-describedby={errors["enquiryType"] ? "enquiryType-error" : undefined}
                className="flex h-11 w-full border border-input bg-background px-3 text-sm focus:border-primary focus:outline-none"
              >
                <option value="" disabled>
                  Select an enquiry type...
                </option>
                {ENQUIRY_CATEGORIES.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
              {errors["enquiryType"] && (
                <p id="enquiryType-error" className="text-xs text-destructive">
                  {errors["enquiryType"]}
                </p>
              )}
            </div>

            {/* Field 2: Company name (Required) */}
            <div className="space-y-2">
              <Label htmlFor="company" className="font-semibold text-foreground">
                2. Company name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="e.g. ABC Logistics Private Limited"
                className="h-11 rounded-none"
                aria-required="true"
                aria-invalid={!!errors["company"]}
                aria-describedby={errors["company"] ? "company-error" : undefined}
              />
              {errors["company"] && (
                <p id="company-error" className="text-xs text-destructive">
                  {errors["company"]}
                </p>
              )}
            </div>

            {/* Field 3: Contact person and designation (Required) */}
            <div className="space-y-2">
              <Label htmlFor="contact" className="font-semibold text-foreground">
                3. Contact person and designation <span className="text-destructive">*</span>
              </Label>
              <Input
                id="contact"
                name="contact"
                type="text"
                placeholder="e.g. Rajesh Sharma, General Manager Logistics"
                className="h-11 rounded-none"
                aria-required="true"
                aria-invalid={!!errors["contact"]}
                aria-describedby={errors["contact"] ? "contact-error" : undefined}
              />
              {errors["contact"] && (
                <p id="contact-error" className="text-xs text-destructive">
                  {errors["contact"]}
                </p>
              )}
            </div>

            {/* Field 4: Business email (Required) */}
            <div className="space-y-2">
              <Label htmlFor="email" className="font-semibold text-foreground">
                4. Business email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@company.com"
                className="h-11 rounded-none"
                aria-required="true"
                aria-invalid={!!errors["email"]}
                aria-describedby={errors["email"] ? "email-error" : undefined}
              />
              {errors["email"] && (
                <p id="email-error" className="text-xs text-destructive">
                  {errors["email"]}
                </p>
              )}
            </div>

            {/* Field 5: Telephone number with country code (Required) */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="font-semibold text-foreground">
                5. Telephone number (with country code) <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                className="h-11 rounded-none"
                aria-required="true"
                aria-invalid={!!errors["phone"]}
                aria-describedby={errors["phone"] ? "phone-error" : undefined}
              />
              {errors["phone"] && (
                <p id="phone-error" className="text-xs text-destructive">
                  {errors["phone"]}
                </p>
              )}
            </div>

            {/* Field 6: Cargo type, container model or casting part (Required) */}
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="cargo" className="font-semibold text-foreground">
                6. Cargo type, container model or casting part <span className="text-destructive">*</span>
              </Label>
              <Input
                id="cargo"
                name="cargo"
                type="text"
                value={cargo}
                onChange={(e) => {
                  setCargo(e.target.value);
                  if (errors["cargo"]) {
                    setErrors((prev) => {
                      const copy = { ...prev };
                      delete copy["cargo"];
                      return copy;
                    });
                  }
                }}
                placeholder="e.g. Steel Coils / Dwarf Open Top Coiltainer / Side Bearer Casting"
                className="h-11 rounded-none"
                aria-required="true"
                aria-invalid={!!errors["cargo"]}
                aria-describedby={errors["cargo"] ? "cargo-error" : undefined}
              />
              {errors["cargo"] && (
                <p id="cargo-error" className="text-xs text-destructive">
                  {errors["cargo"]}
                </p>
              )}
            </div>

            {/* Field 7: Origin and destination (Required for rail movements, optional otherwise) */}
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="originDestination" className="font-semibold text-foreground">
                7. Origin &amp; Destination Corridor{" "}
                {isRailMovement ? (
                  <span className="text-destructive font-medium">* (Required for rail terminal &amp; movement evaluation)</span>
                ) : (
                  <span className="text-xs font-normal text-muted-foreground">(optional)</span>
                )}
              </Label>
              <Input
                id="originDestination"
                name="originDestination"
                type="text"
                value={originDestination}
                onChange={(e) => {
                  setOriginDestination(e.target.value);
                  if (errors["originDestination"]) {
                    setErrors((prev) => {
                      const copy = { ...prev };
                      delete copy["originDestination"];
                      return copy;
                    });
                  }
                }}
                placeholder="e.g. Mundra Port / Gandhidham to Rewari (or route constraints)"
                className={cn("h-11 rounded-none", isRailMovement && "border-primary/60 bg-blue-50/20")}
                aria-required={isRailMovement}
                aria-invalid={!!errors["originDestination"]}
                aria-describedby={errors["originDestination"] ? "originDestination-error" : undefined}
              />
              {errors["originDestination"] && (
                <p id="originDestination-error" className="text-xs text-destructive">
                  {errors["originDestination"]}
                </p>
              )}
            </div>

            {/* Field 8: Approximate Monthly Cargo Volume (Required for rail movements, optional otherwise) */}
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="volumeFrequency" className="font-semibold text-foreground">
                8. Approximate Monthly Cargo Volume (MT / TEUs){" "}
                {isRailMovement ? (
                  <span className="text-destructive font-medium">* (Required for siding &amp; rake capacity planning)</span>
                ) : (
                  <span className="text-xs font-normal text-muted-foreground">(optional)</span>
                )}
              </Label>
              <Input
                id="volumeFrequency"
                name="volumeFrequency"
                type="text"
                value={volumeFrequency}
                onChange={(e) => {
                  setVolumeFrequency(e.target.value);
                  if (errors["volumeFrequency"]) {
                    setErrors((prev) => {
                      const copy = { ...prev };
                      delete copy["volumeFrequency"];
                      return copy;
                    });
                  }
                }}
                placeholder="e.g. 50 container units / 3 train rakes per month / 5,000 MT bulk minerals"
                className={cn("h-11 rounded-none", isRailMovement && "border-primary/60 bg-blue-50/20")}
                aria-required={isRailMovement}
                aria-invalid={!!errors["volumeFrequency"]}
                aria-describedby={errors["volumeFrequency"] ? "volumeFrequency-error" : undefined}
              />
              {errors["volumeFrequency"] && (
                <p id="volumeFrequency-error" className="text-xs text-destructive">
                  {errors["volumeFrequency"]}
                </p>
              )}
            </div>

            {/* Direct Shivlakha Terminal Head Routing Callout */}
            {isRailMovement && (
              <div className="sm:col-span-2 rounded-lg border border-emerald-300 bg-emerald-50/90 p-4 text-xs text-emerald-950 flex items-start gap-2.5 shadow-xs">
                <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0 mt-0.5" />
                <div>
                  <strong className="font-semibold text-emerald-900">Direct Terminal Routing Protocol:</strong>
                  <p className="mt-0.5 text-emerald-800 leading-relaxed">
                    This rail movement enquiry is directly routed to the <strong>Shivlakha Terminal Head</strong> (<code>terminal.head@kalyanicasttech.com</code>) for technical siding placement, rake slot scheduling, and corridor feasibility review.
                  </p>
                </div>
              </div>
            )}

            {/* Field 9: Loading method, dimensions and technical notes (Optional, with file attachment input) */}
            <div className="space-y-3 sm:col-span-2">
              <Label htmlFor="notes" className="font-semibold text-foreground">
                9. Loading method, dimensions and technical notes{" "}
                <span className="text-xs font-normal text-muted-foreground">(optional)</span>
              </Label>
              <Textarea
                id="notes"
                name="notes"
                rows={4}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Detail any special loading arrangements (overhead crane, forklift roll-in, tippler discharge), payload dimensions, rail schedule requirements, or technical tolerances..."
                className="rounded-none resize-y"
              />
              <div className="border border-dashed border-border bg-muted/30 p-3.5">
                <Label htmlFor="attachment" className="text-xs font-medium text-foreground block">
                  Attach technical specification, cargo drawing, or RFP document (optional)
                </Label>
                <input
                  id="attachment"
                  name="attachment"
                  type="file"
                  className="mt-2 block w-full text-xs text-muted-foreground file:mr-4 file:rounded-none file:border-0 file:bg-primary file:px-4 file:py-1.5 file:text-xs file:font-semibold file:text-white hover:file:bg-primary/90"
                />
                <span className="mt-1 block text-[11px] text-muted-foreground">
                  Supported formats: PDF, DWG, DXF, PNG, JPG (maximum 10 MB).
                </span>
              </div>
            </div>

            {/* Field 10: Consent (Required) */}
            <div className="sm:col-span-2 pt-2">
              <label className="flex items-start gap-3 text-sm text-foreground cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  aria-required="true"
                  aria-invalid={!!errors["consent"]}
                  aria-describedby={errors["consent"] ? "consent-error" : undefined}
                  className="mt-1 h-4 w-4 rounded-none accent-primary"
                />
                <span className="leading-relaxed">
                  I agree that Kalyani Cast Tech Limited may use these details to review and reply to my enquiry. <span className="text-destructive">*</span>
                </span>
              </label>
              {errors["consent"] && (
                <p id="consent-error" className="mt-1 text-xs text-destructive">
                  {errors["consent"]}
                </p>
              )}
            </div>

            {/* Submit Action */}
            <div className="sm:col-span-2 pt-2 flex flex-wrap items-center gap-4">
              <Button
                type="submit"
                size="lg"
                className="h-12 rounded-none bg-[#1b4b96] px-8 text-sm font-bold uppercase tracking-wider text-white hover:bg-[#143a75]"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting enquiry..." : "Submit enquiry"}
              </Button>
              <p className="text-xs text-muted-foreground">
                Submissions are processed through our encrypted commercial dispatch API and routed directly to the designated department.
              </p>
            </div>
          </div>
        </form>
      )}

      {/* Mandatory Statutory Notice for Investor Grievances per Section 10 & 11 */}
      <div className="border-t border-border bg-amber-50/70 p-5 text-xs text-amber-950 border-l-4 border-l-amber-600">
        <p className="font-bold flex items-center gap-1.5 text-amber-950">
          <span>⚠️</span> Statutory Notice &middot; Investor Grievance Route
        </p>
        <p className="mt-1 leading-relaxed">
          Investor grievances are handled through the dedicated Company Secretary channel and not
          through the commercial enquiry route.
        </p>
        <p className="mt-1.5 font-medium">
          <strong>Direct Contact:</strong> Mr. Pankaj Kumar, Company Secretary &amp; Compliance
          Officer &middot;{" "}
          <a
            href="mailto:cs@kalyanicasttech.com"
            className="font-semibold underline hover:text-amber-950"
          >
            cs@kalyanicasttech.com
          </a>{" "}
          &middot; Tel:{" "}
          <a href="tel:+919711735302" className="font-semibold underline hover:text-amber-950">
            +91-9711735302
          </a>{" "}
          &middot; SEBI SCORES Portal:{" "}
          <a
            href="https://scores.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:text-amber-950"
          >
            scores.gov.in
          </a>
        </p>
      </div>
    </div>
  );
}
