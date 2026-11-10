# KALYANI CAST TECH LIMITED

## Phase 2B Reconciliation — Enquiry Security & Staging Isolation Review

**Document Reference:** SEC-AUDIT-2026-ENQ-001  
**Project:** Kalyani Cast Tech Corporate Website  
**Date:** 17 October 2026  
**Auditor:** Full-Stack Security Auditor & Technical QA Lead  
**Audit Directory:** `website_migration_audit_phase2b_reconciliation/`

---

## 1. Staging Isolation & Zero Live Email Guarantee

| Isolation Check                  | Staging Implementation                                                                                           | Verification Evidence                                                                                                                                      |       Finding       |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----------------: |
| **Live SMTP Binding**            | No SMTP credentials bound in staging environment; `RESEND_API_KEY` and `ENQUIRY_RECIPIENT_EMAIL` are unset.      | Confirmed in `src/lib/enquiry-handler.ts` lines 254-260: When keys are undefined, execution bypasses live dispatch and routes to preview mode.             | **VERIFIED (SAFE)** |
| **Outbound Dispatch Prevention** | All submissions return `mode: "preview"` and generate tracking IDs without triggering third-party HTTP requests. | Live HTTP test returned `mode: "preview"` and message: _"Preview Mode: Live transmission paused awaiting official corporate email gateway authorization"_. |      **PASS**       |
| **Zero Live Data Cutover**       | Synthetic data only used in testing. No customer data resides in staging database.                               | Zero database writes; stateless handler with in-memory transient history.                                                                                  | **VERIFIED (SAFE)** |

---

## 2. PII Protection & Preview Logging Verification

| Requirement                       | Implementation Detail                                                                                            | Audit Finding |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------- | :-----------: |
| **Personal Information Masking**  | Logging masks client IP to first 7 characters (`127.0.0.***`) and company name to first 3 characters (`Syn***`). |   **PASS**    |
| **No Secret or Payload Exposure** | Complete enquiry payloads, phone numbers, and email addresses are NOT written to server stdout/stderr.           |   **PASS**    |
| **Log Format**                    | `[Enquiry Preview] ID: KCT-MVB74IWC, Kind: A, ClientIP: 127.0.0.***`                                             | **VERIFIED**  |

---

## 3. Server-Side Validation & Payload Guards

| Security Control                | Threshold / Constraint                                                  | Test Input                          |                                       Server Response                                       |  Result  |
| ------------------------------- | ----------------------------------------------------------------------- | ----------------------------------- | :-----------------------------------------------------------------------------------------: | :------: |
| **Method Restriction**          | POST only                                                               | GET `/api/enquiries`                |                         HTTP 405 Method Not Allowed (`Allow: POST`)                         | **PASS** |
| **Payload Size Guard (Header)** | `Content-Length` <= 50 KB                                               | Request with 55 KB body             |                                 HTTP 413 Payload Too Large                                  | **PASS** |
| **Payload Size Guard (Stream)** | Byte stream measurement <= 50 KB                                        | Chunked stream > 50 KB              |                                 HTTP 413 Payload Too Large                                  | **PASS** |
| **Kind A Required Fields**      | company, contact, email, phone, category, product, cargo, qty, consent  | Missing contact person              |         HTTP 422 Unprocessable Entity (`"contact": "Contact person is required."`)          | **PASS** |
| **Kind B Required Fields**      | company, contact, email, phone, category, cargo, route, volume, consent | Missing consent                     | HTTP 422 Unprocessable Entity (`"consent": "Consent to use contact details is mandatory."`) | **PASS** |
| **Header Injection Stripping**  | Regex stripping of \r, \n, \0, \t from all header strings               | `Company\r\nBcc: evil@attacker.com` |                         Sanitized to single-line string with spaces                         | **PASS** |

---

## 4. Rate-Limiting & Network Proxy Assumptions

- **Mechanism:** In-memory sliding window (`ipRequestHistory = new Map<string, number[]>()`).
- **Threshold:** 5 requests per 60-second window per client IP.
- **Response on Breach:** `HTTP 429 Too Many Requests` with `Retry-After: 60` header.
- **Client IP Resolution Hierarchy:**
  1. `cf-connecting-ip` (Authoritative Cloudflare Edge header; cannot be forged by client when behind Cloudflare).
  2. `x-real-ip` (Standard reverse proxy header).
  3. `x-forwarded-for` (Extracts first hop, validated against IP regex).
  4. Fallback to `127.0.0.1`.
- **Documented Limitation:** In-memory rate limiting is node-local. When deployed across multi-worker Cloudflare Pages or multi-container serverless runtimes, each worker maintains independent memory. For production scale, Cloudflare WAF Rate Limiting or Cloudflare KV/Upstash Redis is recommended for distributed tracking.

---

## 5. CSRF & Origin Controls Assessment

- **Architecture Context:** The commercial enquiry form submits via client-side `fetch()` with `Content-Type: application/json`.
- **Browser Security Invariant:** Cross-origin HTML forms cannot transmit `application/json` without triggering a CORS preflight (`OPTIONS`). Because no permissive CORS wildcard headers are returned, cross-origin web pages cannot successfully submit background enquiries.
- **Defense-in-Depth Recommendation for Production:** While browser preflight restricts cross-origin web browsers, server-side origin validation (`request.headers.get("origin") === SITE_CONFIG.siteUrl`) should be enforced upon production release cutover.

---

## 6. Staging Enquiry E2E Live Test Evidence

```json
// Test 1: Kind A Valid Submission
Status: 200
Response: {"success":true,"mode":"preview","enquiryId":"KCT-MVB7LXCG","message":"Server validation successful. (Preview Mode: Live transmission paused awaiting official corporate email gateway authorization)."}

// Test 2: Kind B Valid Submission
Status: 200
Response: {"success":true,"mode":"preview","enquiryId":"KCT-MVB7LXCM","message":"Server validation successful. (Preview Mode: Live transmission paused awaiting official corporate email gateway authorization)."}

// Test 3: Oversized Payload Guard (>50 KB)
Status: 413
Response: {"success":false,"message":"Payload size exceeds maximum permitted limit (50 KB)."}

// Test 4: Missing Privacy Consent Checkbox
Status: 422
Response: {"success":false,"message":"Validation failed on one or more required fields.","errors":{"consent":"Consent to use contact details is mandatory."}}

// Test 5: Missing Required Contact Field
Status: 422
Response: {"success":false,"message":"Validation failed on one or more required fields.","errors":{"contact":"Contact person is required."}}
```
