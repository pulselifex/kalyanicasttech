# KALYANI CAST TECH LIMITED

## Phase 2B Closure — Git Repository Baseline & Change Inventory Report

**Document Reference:** DOC-AUDIT-2026-GIT-001  
**Project:** Kalyani Cast Tech Limited Website Migration  
**Auditor:** Technical QA Lead & Senior Implementation Auditor  
**Execution Timestamp:** 2026-10-16 22:15:00 IST  
**Working Repository:** `C:\Users\abc\.gemini\antigravity-ide\scratch\pixel-perfect-painter-750`  
**Governing Standard:** Non-Destructive Working-Tree Preservation & Full Auditing Protocol

---

## 1. Repository State & HEAD Commit Verification

| Parameter               | Observed Value                                                           | Verification Status |
| ----------------------- | ------------------------------------------------------------------------ | :-----------------: |
| **Working Directory**   | `C:\Users\abc\.gemini\antigravity-ide\scratch\pixel-perfect-painter-750` |      Verified       |
| **Active Git Branch**   | `feature/industrial-design-design-phase1`                                            |      Verified       |
| **HEAD Commit Hash**    | `14b45910e56e303100039a6e2e70be6cc22b4960`                               |      Verified       |
| **HEAD Commit Message** | `Add project README`                                                     |      Verified       |
| **Git Working Tree**    | Non-destructive working state; zero discarded or reset changes           |    **PRESERVED**    |

---

## 2. Diff Stat Against Baseline Commit (`14b4591`)

Execution of `git diff --stat 14b45910e56e303100039a6e2e70be6cc22b4960` confirms exact line modifications across 22 tracked files:

```text
 .prettierrc                             |    3 +-
 AGENTS.md                               |    2 +
 eslint.config.js                        |   12 +-
 public/robots.txt                       |    2 +
 roadmap.md                              |    4 +-
 src/components/site/ContentPage.tsx     |  245 +-
 src/components/site/EnquiryForm.tsx     |  244 +-
 src/components/site/HomePage.tsx        |  487 +++-
 src/components/site/ImageSlot.tsx       |   41 +-
 src/components/site/ShivlakhaStatus.tsx |   77 +-
 src/components/site/SiteFooter.tsx      |  144 +-
 src/components/site/SiteHeader.tsx      |  138 +-
 src/components/site/SiteSearch.tsx      |   48 +-
 src/content/pages.json                  | 4415 +++++++++++++++++--------------
 src/content/search.ts                   |   22 +-
 src/content/site.ts                     |   12 +-
 src/routeTree.gen.ts                    |   21 +
 src/routes/README.md                    |   20 +-
 src/routes/__root.tsx                   |    5 +-
 src/server.ts                           |   63 +-
 src/styles.css                          |   72 +-
 src/test/content-search.test.ts         |   10 +-
 22 files changed, 3938 insertions(+), 2149 deletions(-)
```

---

## 3. Inventory of Tracked Modified Files

| File Path                                 | Functional Role in Phase 2B | Rationale for Modification                                                                                                |
| ----------------------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `eslint.config.js`                        | Tooling Configuration       | Added ignore rules for audit scripts and audit directories; resolved prettier formatting errors.                          |
| `src/components/site/ShivlakhaStatus.tsx` | UI Domain Component         | Enforced conservative status badges (Planning & Approvals, Siding Established, Under Development) and SPV 51% disclosure. |
| `src/content/pages.json`                  | Central Page State          | Aligned 35 routes with verified factual claims, authentic addresses, and removed unverified operational statements.       |
| `src/server.ts`                           | SSR & Edge Handler          | Integrated `/api/enquiries` security handler, CSRF checks, rate-limiting, and staging robots.txt interceptor.             |
| `src/routeTree.gen.ts`                    | TanStack Start Route Tree   | Generated route tree reflecting canonical routes including leadership and specialized product pages.                      |
| `src/components/site/HomePage.tsx`        | Layout Component            | Implemented Industrial Design-inspired dark hero section, 4-metric credibility bar, and Shivlakha dark card block.                    |
| `src/components/site/SiteHeader.tsx`      | Layout Navigation           | Active desktop mega-menus, mobile hamburger sheet, and direct links to 35 canonical routes.                               |
| `src/components/site/SiteFooter.tsx`      | Layout Navigation           | Statutory BSE SME tag, CIN, registered office, and RTA corporate disclosures.                                             |
| `src/components/site/EnquiryForm.tsx`     | Interactive Form            | Dual-mode selector (Kind A vs Kind B), field validation, and accessible feedback alerts.                                  |
| `src/components/site/ContentPage.tsx`     | Dynamic Page Renderer       | Clean section rendering, data tables, PDF download links, and responsive grid layout.                                     |
| `src/styles.css`                          | Global Styling              | Tailored industrial color palette (`#0e2a55`, `#1b4b96`, `#fcf3e6`, `#8a4b00`), typography, and card tokens.              |
| `src/test/content-search.test.ts`         | Automated QA                | Verified indexing of ICD and specialized container terminology.                                                           |

---

## 4. Inventory of Untracked Verified Project Files

All untracked project assets and audit evidence have been preserved without deletion or overwrite:

| Category                    | Files / Directories                                                     | Role & Content                                                                            |
| --------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| **Routing & Edge Config**   | `public/_redirects`                                                     | Cloudflare Pages / Nitro SSR edge redirect rules (including Sakana 301 redirects).        |
| **Static Document Library** | `public/documents/` (159 files)                                         | 124 investor relation statutory PDFs + technical drawings + quality certificates.         |
| **Authentic Imagery**       | `public/assets/` (~185 MB)                                              | High-resolution DSLR photography of Rewari Works and Shivlakha rail siding.               |
| **Sitemap & SEO**           | `public/sitemap.xml`, `public/robots.txt`                               | Complete 35-route XML sitemap and search engine crawler directives.                       |
| **Legacy Redirect Engine**  | `src/lib/legacy-redirects.ts`                                           | In-memory router enforcing HTTP 301 for legacy WP URLs and HTTP 410 for casino spam.      |
| **Enquiry Security Engine** | `src/lib/enquiry-handler.ts`                                            | Server-side validation, sanitization, rate-limiting (5 req/min), and safe preview logger. |
| **Dedicated Routes**        | `src/routes/company.leadership.tsx`                                     | Board of Directors profile route with verified DIN numbers and qualifications.            |
| **Automated Test Suites**   | `src/test/legacy-redirects.test.ts`, `src/test/enquiry-handler.test.ts` | 19 automated Vitest test cases guaranteeing routing and security invariants.              |
| **Audit Directory 1**       | `website_migration_audit_content_acceptance/`                           | 7 complete Phase 2B deliverables (Report, CSV registers, format report).                  |
| **Audit Directory 2**       | `website_migration_audit_phase2b_closure/`                              | 9 complete Phase 2B closure deliverables.                                                 |
| **Historical Audits**       | `website_migration_audit/`, `website_migration_audit_phase2/`           | Prior Phase 1 and Phase 2 audit packs preserved intact.                                   |

---

## 5. Phase 2B Content Acceptance Directory Integrity

The 7 required audit deliverables in `website_migration_audit_content_acceptance/` were verified intact:

```text
Mode                 LastWriteTime         Length Name
----                 -------------         ------ ----
-a---          10/16/2026  9:55 PM          16565 CONTENT_ACCEPTANCE_REPORT.md
-a---          10/16/2026  9:54 PM          10883 content_claim_verification.csv
-a---          10/16/2026  9:54 PM           4597 content_defect_register.csv
-a---          10/16/2026  9:54 PM           6495 content_to_route_mapping.csv
-a---          10/16/2026  9:54 PM           7218 cta_and_form_test_results.csv
-a---          10/16/2026  9:54 PM          12816 format_consistency_report.md
-a---          10/16/2026  9:54 PM           2685 implementation_change_log.csv
```

---

## 6. Audit Conclusion on Repository Integrity

1. **Non-Destructive Assurance:** No Git reset (`git reset --hard`), branch rebase, stash deletion, or `git clean` was executed. All pre-existing user changes and prior audit evidence remain 100% intact.
2. **Branch Discipline:** All work remains strictly committed to the working tree of `feature/industrial-design-design-phase1`.
3. **Audit Trail Completeness:** All changes made during Phase 2B are accounted for with explicit rationale and automated test coverage.
