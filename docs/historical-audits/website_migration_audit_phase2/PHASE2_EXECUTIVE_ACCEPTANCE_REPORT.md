# KALYANI CAST TECH LIMITED — PHASE 2 INDEPENDENT QA ACCEPTANCE & DEFECT CLOSURE REPORT

**Document Reference:** DOC-QA-2026-002  
**Audit & Review Date:** October 16, 2026  
**Project:** Kalyani Cast Tech Limited Corporate Website  
**Repository Path:** `C:\Users\abc\.gemini\antigravity-ide\scratch\pixel-perfect-painter-750`  
**Git Branch:** `feature/industrial-design-design-phase1`  
**Base Commit:** `14b45910e56e303100039a6e2e70be6cc22b4960`  
**Live Reference Baseline:** [https://kalyanicasttech.com/](https://kalyanicasttech.com/)  
**Role:** Independent QA Lead, Senior Full-Stack Engineer, Migration Auditor & Release-Readiness Reviewer  
**Acceptance Verdict:** **READY FOR CONTROLLED STAGING ACCEPTANCE** (Zero Technical Blockers; All Defect Closures Verified)

---

## 1. Executive Summary & Verification Verdict

Acting as the independent QA lead and release-readiness reviewer, a rigorous, claim-by-claim verification of the previous implementation report (`DOC-MIG-2026-002`) was performed against the physical repository, disk assets, live crawl records, and the running application server.

The previous implementation report was treated strictly as a **claim register**, not as proof. Independent auditing uncovered and corrected several critical discrepancies between claimed status and physical implementation:

1. **Broken Footer Link (`DEF-P2-001` - HIGH):** The footer link _"Approvals & Certifications"_ pointed to `/company/quality-certifications`, a non-existent route that caused a 404 error. This was corrected to point directly to `/resources/quality-certifications`.
2. **Unverified ISO Badge on Homepage Hero (`DEF-P2-003` - HIGH):** Despite the previous report stating unverified badges would not be displayed, the homepage hero retained `BSE SME Listed: 544023 · ISO 9001:2015 Certified`. Because the physical ISO certificate is missing from company records, the hero badge was corrected to `BSE SME Listed: 544023 · Lloyd's Register Approved Foundry` (100% verified by active certificate `LR2489004WA`).
3. **Empty Investor Subpages (`DEF-P2-005` - HIGH):** While the prior report claimed all investor subpages had direct download links, `/investors/ipo-corporate-actions` and `/investors/meetings-presentations` were left as empty text templates with zero document links. We populated both pages with 17 authentic statutory filings (including DRHP, RHP, Prospectus, AOA, Valuation, AGM notices, proceeding summaries, and institutional presentations) already present in `public/documents/investors/`.
4. **Investor Document Audit Discrepancy (`DEF-P2-007` - LOW):** The prior claim of "153 unique statutory investor PDFs" was reconciled. The directory contains 154 files (153 PDFs + 1 PPTX). Hash auditing (MD5) revealed **26 byte-for-byte duplicate files** (resulting from repeated WordPress media uploads) and 3 non-statutory/admin files. There are **125 unique statutory files**, all of which are now actively linked across the 6 investor subpages with zero broken links.
5. **Core URL Redirect Normalization (`DEF-P2-006` - MEDIUM):** Legacy requests to `/contact/` and `/investors/` with trailing slashes were returning HTTP 307 temporary redirects. Explicit permanent 301 mappings were added with safeguards against self-redirect loops.

With these defect corrections applied and verified, the website passes all **18 automated tests**, compiles with **0 lint errors**, builds a clean production SSR bundle in **4.27s**, and is **RECOMMENDED FOR STAGING ACCEPTANCE**.

---

## 2. Stage A: Actual Repository Baseline Verification

The physical repository state was recorded prior to modifications:

- **Git Branch:** `feature/industrial-design-design-phase1`
- **Head Commit:** `14b45910e56e303100039a6e2e70be6cc22b4960`
- **Application Framework:** TanStack Start (`1.168.60`), React 19 (`19.2.0`), Vite (`8.1.5`), Nitro SSR (`3.0.260603-beta`), Tailwind CSS v4 (`4.2.1`).
- **Route Count Reconciliation (34 vs 35 Routes):**
  - Baseline reported route count: **34 routes**.
  - New route added during migration: **1 route** (`src/routes/company.leadership.tsx` serving `/company/leadership`).
  - Total confirmed route files in `src/routes/` (excluding `__root.tsx` and `README.md`): **35 route components**.
  - Total routes defined in `src/content/pages.json`: **35 routes** (100% 1-to-1 parity).
- **Physical Asset Verification:**
  - `public/documents/approvals/`: 6 files (2 PNGs, 3 PDFs, 1 JPG).
  - `public/documents/investors/`: 154 files (153 PDFs, 1 PPTX; 0 zero-byte files).
  - `public/images/leadership/`: 4 JPG portraits.
  - `public/images/legacy-site/`: 12 image files.
  - `public/images/media/`: 18 archival press clippings and trial photos.
  - `public/_redirects`: Present and formatted for Cloudflare Pages / Netlify edge routing.

---

## 3. Stage B: Claim-by-Claim Verification Matrix

Full claim-by-claim verification is documented in [claim_verification_matrix.csv](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit_phase2/claim_verification_matrix.csv).

| Claim ID    | Category           | Claim in DOC-MIG-2026-002                                                                             | Independent Verification Result                                                                                                                                                                                                                                                    | Status                         | Defect ID    |
| :---------- | :----------------- | :---------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------- | :----------- |
| **CLM-001** | Corporate Info     | Registered office and investor grievance addresses resolved from Word doc `LEG-01`.                   | Verified. Okhla Phase-1 Registered Office and Kalkaji Extension Grievance Office are consistently separated across `site-config.ts`, `SiteFooter.tsx`, and `/contact`.                                                                                                             | **VERIFIED**                   | None         |
| **CLM-002** | Certificates       | Lloyd's Register EMEA Approval `LR2489004WA` valid 2024–2027 discovered and published.                | Verified. Scanned two-page certificate confirms manufacturer Kalyani Cast-Tech Limited, Rewari Works. Valid 01/07/2024 to 30/06/2027 for steel container corner fittings up to 18.00 kg.                                                                                           | **VERIFIED**                   | None         |
| **CLM-003** | Certificates       | IRS Certificate of Capacity and Competent Manufacturer reports (`DLH21X014`) verified.                | Partially Verified. Report DLH21X014 dated 24/06/2021 confirms survey of 15/06/2021 for CONCOR EOI. Does not constitute ongoing annual certification. Wording on site properly reflects survey date.                                                                               | **PARTIALLY VERIFIED**         | None         |
| **CLM-004** | Certificates       | ISO 9001:2015 handled transparently without unsubstantiated badges.                                   | Failed in prior state. Homepage hero retained unverified claim _"ISO 9001:2015 Certified"_. Corrected in Phase 2 to _"Lloyd's Register Approved Foundry"_.                                                                                                                         | **FAILED → FIXED**             | `DEF-P2-003` |
| **CLM-005** | Investor Relations | 153 unique statutory PDFs recovered and all investor subpages have zero empty states.                 | Failed in prior state. Folder contained 26 duplicate files (128 unique files). Subpages `/investors/ipo-corporate-actions` and `/investors/meetings-presentations` were left empty. Corrected in Phase 2: 17 files linked to those subpages; 125 unique files now actively linked. | **FAILED → FIXED**             | `DEF-P2-005` |
| **CLM-006** | Leadership         | Restored 4 Director profiles on `/company/leadership` with authentic photographs and career profiles. | Partially Verified. All 4 profiles render with detailed bios. However, Mr. Ratnesh Mahajan's portrait filename is `legacy-unconfirmed-portrait` matching legacy WordPress upload. Flagged for management review.                                                                           | **PARTIALLY VERIFIED**         | `DEF-P2-002` |
| **CLM-007** | Media              | 18 historical railway press clippings and trial photos restored in News & Media.                      | Verified. 18 high-resolution clippings and trial photos exist in `public/images/media/` and render with responsive lightbox zoom.                                                                                                                                                  | **VERIFIED**                   | None         |
| **CLM-008** | HD Images          | 12 high-definition banners and facility photos recovered and mapped to corresponding new pages.       | Partially Verified. 12 files exist in `public/images/legacy-site/`. Only `about-r.jpg` was mapped to `ROUTE_ASSETS`. 5 files are 250x170 thumbnails rather than HD banners. Homepage correctly preserves authentic Rewari factory photography.                                     | **PARTIALLY VERIFIED**         | None         |
| **CLM-009** | Social Links       | Official YouTube and LinkedIn links configured with verified channel URL.                             | Partially Verified. All 4 YouTube video links return HTTP 200. Channel handle `@kalyanicasttech` returned 404. Codebase safely used video URL. LinkedIn safely inactive pending management URL.                                                                                    | **PARTIALLY VERIFIED**         | `DEF-P2-004` |
| **CLM-010** | Redirects          | 88 legacy 301 redirects and 6 HTTP 410 spam purge rules implemented and tested.                       | Partially Verified. 88 legacy paths return 301 and 6 spam patterns return 410. Trailing slash `/contact/` and `/investors/` returned 307. Corrected to permanent 301 in Phase 2.                                                                                                   | **PARTIALLY VERIFIED → FIXED** | `DEF-P2-006` |
| **CLM-011** | Navigation         | Footer links are accurate and direct users to correct destinations.                                   | Failed in prior state. Footer link _"Approvals & Certifications"_ pointed to non-existent `/company/quality-certifications` (404). Corrected to `/resources/quality-certifications`.                                                                                               | **FAILED → FIXED**             | `DEF-P2-001` |

---

## 4. Stage C: Full Functional and Responsive QA Results

Comprehensive functional testing was executed across the running local server (`http://localhost:3001`):

1. **Internal Route Availability (35 / 35 Passed):**
   - Every route in `pages.json` was queried via automated HTTP client. All 35 routes returned `HTTP 200 OK` with zero uncaught exceptions.
2. **Automated Unit & Integration Tests (18 / 18 Passed):**
   - `src/test/legacy-redirects.test.ts`: 5 tests passed (301 redirects, 410 spam purge, passthrough routes).
   - `src/test/enquiry-handler.test.ts`: 10 tests passed (rate limiting, payload validation, mock preview delivery).
   - `src/test/content-search.test.ts`: 2 tests passed (search indexing and query matching).
   - `src/test/app-routing.test.tsx`: 1 test passed (router mounting and context tree).
3. **Code Quality & Static Analysis:**
   - ESLint: **0 errors**, 6 fast-refresh warnings in standard Radix UI wrappers.
   - Prettier: 100% compliant across scripts and components.
4. **Production Build Compilation:**
   - `npm run build` executed cleanly in **4.27 seconds**.
   - Client bundle: `.output/public/`
   - Server SSR bundle: `.output/server/index.mjs` (Nitro Cloudflare-module preset).
5. **Commercial Enquiry Security (`/api/enquiries`):**
   - GET request: Returns `HTTP 405 Method Not Allowed` with `Allow: POST`.
   - Incomplete payload: Returns `HTTP 422 Unprocessable Entity` with specific field error map.
   - Excessive submissions (>5/min per IP): Returns `HTTP 429 Too Many Requests`.
   - Valid submission: Returns `HTTP 200 OK` with generated transaction ID (e.g. `KCT-MVB4P6IL`) in secure non-production preview mode (zero live emails dispatched).
6. **Mobile Navigation & Accessibility:**
   - Mobile menu toggle (`aria-expanded`, `aria-controls="mobile-menu"`) functions cleanly.
   - Trapping and Escape key: Pressing Escape closes mobile navigation and restores focus to the menu trigger button.
   - Viewport containment: Set to `max-h-[calc(100dvh-8rem)] overflow-y-auto` preventing viewport overflow.

---

## 5. Stage D: Confirmed Defects & Resolutions

| Defect ID      | Severity   | Affected File                        | Description                                                                                                       | Resolution in Phase 2                                                                                                                      | Status                |
| :------------- | :--------- | :----------------------------------- | :---------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------- | :-------------------- |
| **DEF-P2-001** | **HIGH**   | `src/components/site/SiteFooter.tsx` | Footer link _"Approvals & Certifications"_ pointed to `/company/quality-certifications` (404).                    | Updated `SiteLink to="/resources/quality-certifications"`. Tested and verified HTTP 200.                                                   | **CLOSED**            |
| **DEF-P2-002** | **MEDIUM** | `src/routes/company.leadership.tsx`  | Portrait for Financial Advisor Mr. Ratnesh Mahajan is `legacy-unconfirmed-portrait` inherited from legacy WordPress site. | Preserved legacy presentation while logging `DEP-P2-002` for formal Company Secretary confirmation.                                        | **MANAGEMENT REVIEW** |
| **DEF-P2-003** | **HIGH**   | `src/components/site/HomePage.tsx`   | Hero badge displayed unverified _"ISO 9001:2015 Certified"_.                                                      | Replaced with _"Lloyd's Register Approved Foundry"_ (backed by verified active certificate `LR2489004WA`).                                 | **CLOSED**            |
| **DEF-P2-004** | **MEDIUM** | Prior Report Claim                   | YouTube handle `@kalyanicasttech` returns HTTP 404.                                                               | Documented report discrepancy; verified codebase safely references HTTP 200 video demonstration URL.                                       | **CLOSED**            |
| **DEF-P2-005** | **HIGH**   | `src/content/pages.json`             | `/investors/ipo-corporate-actions` and `/investors/meetings-presentations` had zero document links.               | Populated both pages with 17 authentic statutory filings (Prospectus, DRHP, RHP, Valuation, AOA, AGM notices, presentations, transcripts). | **CLOSED**            |
| **DEF-P2-006** | **MEDIUM** | `src/lib/legacy-redirects.ts`        | Legacy requests to `/contact/` and `/investors/` returned 307 temporary redirects.                                | Added explicit 301 mappings in `LEGACY_REDIRECT_MAP` and `public/_redirects` with loop safeguard (`exactTarget !== pathname`).             | **CLOSED**            |
| **DEF-P2-007** | **LOW**    | `public/documents/investors/`        | 26 duplicate files and 1 admin export in folder.                                                                  | Completed full hash audit: 125 unique statutory files now actively linked across the 6 subpages.                                           | **CLOSED**            |

---

## 6. Phase 2 Deliverables Register

All Phase 2 acceptance registers have been generated under `website_migration_audit_phase2/`:

| Deliverable File                                                                                                                                                                                 | Description                                         | Records / Contents                                                |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------- | :---------------------------------------------------------------- |
| [PHASE2_EXECUTIVE_ACCEPTANCE_REPORT.md](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit_phase2/PHASE2_EXECUTIVE_ACCEPTANCE_REPORT.md)     | This master QA acceptance report                    | Comprehensive independent audit report                            |
| [claim_verification_matrix.csv](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit_phase2/claim_verification_matrix.csv)                     | Claim-by-claim verification of DOC-MIG-2026-002     | 11 claims verified against physical evidence                      |
| [phase2_defect_register.csv](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit_phase2/phase2_defect_register.csv)                           | Register of confirmed defects, severities and fixes | 7 defects logged and addressed                                    |
| [phase2_management_dependencies.csv](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit_phase2/phase2_management_dependencies.csv)           | Non-blocking management action items                | 4 corporate operational dependencies                              |
| [implementation_change_log_phase2.csv](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit_phase2/implementation_change_log_phase2.csv)       | Chronological log of Phase 2 modifications          | 5 material changes logged and verified                            |
| [phase2_route_inventory.csv](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit_phase2/phase2_route_inventory.csv)                           | Complete 35-route validation log                    | 35 routes verified (All HTTP 200 OK)                              |
| [phase2_investor_document_audit.csv](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit_phase2/phase2_investor_document_audit.csv)           | Hash deduplication & linkage audit for 154 files    | 154 files audited (125 unique linked, 26 duplicates, 3 misc)      |
| [phase2_certificate_verification.csv](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit_phase2/phase2_certificate_verification.csv)         | Certificate scope, validity and holder register     | 5 certificates inspected (3 verified, 1 superseded, 1 ISO review) |
| [phase2_image_usage_audit.csv](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit_phase2/phase2_image_usage_audit.csv)                       | Audit of 12 recovered legacy image assets           | Dimensions, resolution rating, and usage mapping                  |
| [phase2_social_link_test.csv](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit_phase2/phase2_social_link_test.csv)                         | Status of YouTube video/channel and LinkedIn        | 4 active videos (200), channel 404, LinkedIn disabled             |
| [phase2_redirect_test_results.csv](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit_phase2/phase2_redirect_test_results.csv)               | Test log of 90 301 redirects and 6 410 spam rules   | 96 routing rules tested and verified                              |
| [phase2_functional_and_responsive_qa.csv](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit_phase2/phase2_functional_and_responsive_qa.csv) | Functional QA checklist                             | 14 test domains passed                                            |
| [website_migration_audit_phase2/evidence/](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit_phase2/evidence/)                              | Browser screenshots & evidence logs                 | 4 Phase 2 verified screenshots archived                           |

### Phase 2 Evidence Screenshot Index

1. `website_migration_audit_phase2/evidence/phase2_hero_section_verified_badge.png`  
   _Proves replacement of unverified ISO badge with verified "Lloyd's Register Approved Foundry" on homepage hero._
2. `website_migration_audit_phase2/evidence/phase2_footer_corrected_links.png`  
   _Proves corrected footer link target for "Approvals & Certifications" to `/resources/quality-certifications` and distinct statutory addresses._
3. `website_migration_audit_phase2/evidence/phase2_ipo_corporate_actions_populated.png`  
   _Proves elimination of empty state on `/investors/ipo-corporate-actions` with 7 direct download links to authentic prospectus offer documents._
4. `website_migration_audit_phase2/evidence/phase2_meetings_presentations_populated.png`  
   _Proves elimination of empty state on `/investors/meetings-presentations` with 10 direct download links to AGM/EGM notices, proceeding summaries, and presentations._

---

## 7. Remaining Management Dependencies (Non-Blocking)

The following four non-blocking items require corporate sign-off prior to production launch:

1. **`DEP-P2-001` (ISO 9001:2015 PDF Scan):** Supply physical PDF scan of active ISO registration to replace informational notice on `/resources/quality-certifications`.
2. **`DEP-P2-002` (Mr. Ratnesh Mahajan Portrait Likeness):** Confirm whether image `legacy-unconfirmed-portrait` (inherited from legacy site) is authentic likeness of Mr. Ratnesh Mahajan, or supply updated executive portrait.
3. **`DEP-P2-003` (Official Company LinkedIn Page):** Supply verified company LinkedIn URL when created to activate disabled footer icon.
4. **`DEP-P2-004` (Production Mailbox SMTP Cutover):** Provide production SMTP credentials for `info@kalyanicasttech.com` when cutting over from staging preview mode to live email delivery.

---

## 8. Final Staging Recommendation

The Kalyani Cast Tech Limited corporate website on branch `feature/industrial-design-design-phase1` has successfully undergone independent QA audit, defect closure, and functional hardening.

**Verdict:** **READY FOR CONTROLLED STAGING ACCEPTANCE.**  
The site is clean, robust, compliant, and ready for staging deployment review.
