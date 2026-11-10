import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { extractClientIp, handleEnquirySubmission } from "./lib/enquiry-handler";
import { handleLegacyRouting } from "./lib/legacy-redirects";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      const host = url.hostname.toLowerCase();
      const isProductionHost = host === "kalyanicasttech.com" || host === "www.kalyanicasttech.com";
      const isStagingEnv =
        (typeof process !== "undefined" && process.env?.STAGING === "true") ||
        (!isProductionHost && host !== "localhost" && host !== "127.0.0.1");

      // 1. Staging robots.txt interceptor to prevent accidental search engine indexation
      if (url.pathname === "/robots.txt" && isStagingEnv) {
        return new Response("User-agent: *\nDisallow: /\n", {
          status: 200,
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "X-Robots-Tag": "noindex, nofollow, noarchive",
          },
        });
      }

      // 2. Legacy URL redirects (301) and malicious spam purge (410 Gone)
      const legacyResponse = handleLegacyRouting(request.url);
      if (legacyResponse) {
        return legacyResponse;
      }

      // 3. Strict API route handling for commercial enquiries
      if (url.pathname === "/api/enquiries") {
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
        const clientIp = extractClientIp(request);
        return await handleEnquirySubmission(request, clientIp);
      }

      // 3. SSR & Page routing
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      const normalized = await normalizeCatastrophicSsrResponse(response);

      // 4. Inject X-Robots-Tag header on non-production/staging environments
      // Netlify automatically injects 'noindex' on deploy previews; setting 'nofollow, noarchive'
      // ensures the merged edge header has exactly one 'noindex' token.
      if (isStagingEnv) {
        const headers = new Headers(normalized.headers);
        headers.set("X-Robots-Tag", "nofollow, noarchive");
        return new Response(normalized.body, {
          status: normalized.status,
          statusText: normalized.statusText,
          headers,
        });
      }

      return normalized;
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
