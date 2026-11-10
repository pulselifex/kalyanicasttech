# KALYANI CAST TECH LIMITED — DEPLOYMENT READINESS CHECKLIST

## Pre-Flight Technical, Content, Regulatory & Security Verification

- **Date**: 2026-10-16
- **Target Repository**: `pixel-perfect-painter-750`
- **Current Status**: **TEST-READY (STAGING CANDIDATE)**
- **Production Status**: **NOT PRODUCTION-READY** (Pending Statutory & Enquiry Inbox Approvals)

---

### 1. Verification Gate Summary

|   Gate   | Category                     | Requirement                                                                      | Verified Result                                                                          |    Gate Status    |
| :------: | :--------------------------- | :------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------- | :---------------: |
| **G-01** | **Build & Compilation**      | Clean production build without TypeScript errors or bundle warnings.             | `npm run build` exits 0 (2,065 modules transformed in 2.31s).                            |     **PASS**      |
| **G-02** | **Automated Testing**        | Unit, routing, search, and server enquiry tests pass 100%.                       | `npm test` passes 7/7 tests across 3 suites in 5.36s.                                    |     **PASS**      |
| **G-03** | **Lint & Formatting**        | Prettier and ESLint rules pass without formatting errors.                        | `npm run lint` exits 0 with 0 errors (6 component fast-refresh warnings).                |     **PASS**      |
| **G-04** | **Enquiry Server Endpoint**  | Server-side validation, rate limiting, and size boundaries active.               | `POST /api/enquiries` implemented in `server.ts` with rate limiting & error handling.    |     **PASS**      |
| **G-05** | **Live Enquiry Delivery**    | Verified message delivery to official corporate inbox.                           | Safe preview mode active until client designates recipient email & API key.              |    **BLOCKED**    |
| **G-06** | **Information Architecture** | 34 routes resolve cleanly without orphan links or 404s.                          | All 34 routes verified in live browser audit. 404 boundary verified.                     |     **PASS**      |
| **G-07** | **Visual Authenticity**      | Real photography used; zero synthetic AI imagery.                                | 61 authentic DSLR masters transferred from client records; logo local.                   |     **PASS**      |
| **G-08** | **Content Compliance**       | No hallucinated certifications, capacities, or timelines.                        | Strict adherence to approved copy. Shivlakha marked Under Development.                   |     **PASS**      |
| **G-09** | **Document Access**          | Corporate brochures, RDSO certificates, and investor presentations downloadable. | Integrated direct downloads for Brochure 1 & 2, RDSO cert, and PPTX.                     |     **PASS**      |
| **G-10** | **SEO & Crawl Controls**     | Configurable canonical URLs, sitemap.xml, robots.txt.                            | `public/sitemap.xml` generated (34 URLs); `site-config.ts` controls canonicals.          |     **PASS**      |
| **G-11** | **Statutory Contact**        | Registered office address, phone, and Compliance Officer verified.               | Awaiting Company Secretary confirmation (DEP-01 & DEP-02). Handled via compliant notice. |    **BLOCKED**    |
| **G-12** | **Production Domain & DNS**  | Official production domain configured with HTTPS.                                | Configured via `VITE_SITE_URL` defaulting to `https://kalyanicasttech.com`.              | **BLOCKED (DNS)** |

---

### 2. Readiness Classification Verdict

- **Development-Ready**: **YES (100%)** — The codebase is fully structured, modular, clean, and capable of immediate feature expansion.
- **Test-Ready**: **YES (100%)** — All 34 pages, routes, responsive viewports, and asset downloads are fully testable in staging or local environments.
- **Deployment-Ready (Production)**: **NO** — In strict compliance with Section 10 and Section 12 of the execution mandate, the website **cannot be labelled production-ready** until the project owner provides:
  1. The verified Statutory Registered Office address and Compliance Officer details.
  2. The approved recipient email inbox for commercial RFQs and enquiries (`ENQUIRY_RECIPIENT_EMAIL`).
  3. The final production domain name, DNS access, and hosting credentials.
