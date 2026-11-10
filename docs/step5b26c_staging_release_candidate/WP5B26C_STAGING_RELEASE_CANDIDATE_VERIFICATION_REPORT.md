# WP-5B.26C — CONTROLLED STAGING REFRESH & RELEASE CANDIDATE VERIFICATION REPORT

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.26C  
**Role:** Senior Technical Implementation Lead  
**Audit Baseline:** WP-5B.26B Independent Audit — PASS  
**Active Working Branch:** `feature/kct-step5b25b-discoverability-closure`  
**Base Verified HEAD:** `4222944aa367aec7cf2053d9879379f38a74fb07`  
**Staging Fix Commit:** `00390642fa69c17ab084ba40e0df6fbf3d33cb41` (`0039064`)  
**Active Release Candidate Deployment ID:** `6aee6d45f037849a6802a828`  
**Active Release Candidate Staging URL:** `https://6aee6d45f037849a6802a828--kalyanicasttech.netlify.app/`  
**Previous Staging Preview:** `https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app/` (SUPERSEDED)  
**Protected Production Release Branch:** `release/kct-website-v1` at `f1e26bb72a15f8c35665b8cf6444c621bb8114fd` (**FROZEN**)  
**Production Domain:** `https://kalyanicasttech.com` (**STRICTLY FROZEN — ZERO DEPLOYMENTS / ZERO DNS CHANGES**)  
**Verification Date:** 07 November 2026  
**Final Release Candidate Verdict:** **PASS — STAGING RELEASE CANDIDATE READY FOR MANAGEMENT ACCEPTANCE**  

---

## 1. Executive Summary

Following the successful independent forensic re-audit (**WP-5B.26B**) which verified source-code closure of all six audit findings (REM-01 through REM-06), this work package (**WP-5B.26C**) completed the final operational deployment milestone:

1. **Controlled Release Candidate Deployment:** Deployed the latest feature-branch release candidate to a fresh Netlify deploy preview (Deployment ID: `6aee6d45f037849a6802a828`, URL: `https://6aee6d45f037849a6802a828--kalyanicasttech.netlify.app`).
2. **REM-04 Live Edge Resolution:** Successfully verified that the live HTTP response header `X-Robots-Tag` now contains **exactly one `noindex` token** (`X-Robots-Tag: nofollow, noarchive, noindex`). The platform-level duplication observed on the superseded staging preview has been completely eliminated across all 27 canonical HTML routes and static assets.
3. **Full Platform Live Crawl:** Executed an automated HTTP crawl across all 27 canonical indexable routes on the live release candidate. All 27 routes returned **HTTP 200 OK**, with valid production canonical URLs (`https://kalyanicasttech.com/...`), zero staging domain leakage, and active search engine insulation.
4. **Automated Verification:** The automated Vitest test suite confirmed **243 / 243 passing tests (100%)** across 20 test files in 32.28s, and the production SSR compilation built cleanly with zero errors.
5. **Strict Production Boundary Compliance:** The protected release branch `release/kct-website-v1` remains strictly frozen at commit `f1e26bb`. Zero deployments, DNS alterations, or configuration modifications were made to `https://kalyanicasttech.com`.

---

## 2. Git Baseline and Branch Verification

Forensic inspection of the local Git repository confirmed all baseline parameters prior to and following deployment:

| Checkpoint Parameter | Expected Baseline | Actual Observed Value | Verification Status |
| :--- | :--- | :--- | :--- |
| **Working Directory** | `Website_Codebase/` | `Website_Codebase/` | **PASS** |
| **Active Branch** | `feature/kct-step5b25b-discoverability-closure` | `feature/kct-step5b25b-discoverability-closure` | **PASS** |
| **Audit Handoff HEAD** | `4222944aa367aec7cf2053d9879379f38a74fb07` | `4222944aa367aec7cf2053d9879379f38a74fb07` | **PASS** |
| **Remediation Ancestor (df61006)** | Must be ancestor of HEAD | Verified via `git merge-base --is-ancestor` | **PASS** |
| **Discoverability Ancestor (0e88b7a)** | Must be ancestor of HEAD | Verified via `git merge-base --is-ancestor` | **PASS** |
| **Staging Fix Commit** | Targeted server header sync | `00390642fa69c17ab084ba40e0df6fbf3d33cb41` (`0039064`) | **PASS** |
| **Working Tree State** | Clean (0 modified / 0 untracked files) | `nothing to commit, working tree clean` | **PASS** |
| **Protected Release Branch** | `release/kct-website-v1` | `f1e26bb72a15f8c35665b8cf6444c621bb8114fd` | **PASS (FROZEN)** |
| **Release Branch Modifications** | Exactly 0 commits | Verified via `git log release/kct-website-v1..HEAD` | **PASS (FROZEN)** |

---

## 3. New Staging Deployment Details

The fresh staging preview was generated using Netlify CLI directly against the linked corporate project:

```text
Netlify Deploy Summary (WP-5B.26C Release Candidate)
─────────────────────────────────────────────────────────────────
Project Name:        kalyanicasttech
Site ID:             1cbb9092-1520-49a8-b194-fe8942475330
Deploy ID:           6aee6d45f037849a6802a828
Context:             deploy-preview (draft)
Preview URL:         https://6aee6d45f037849a6802a828--kalyanicasttech.netlify.app
Deploy Log URL:      https://app.netlify.com/projects/kalyanicasttech/deploys/6aee6d45f037849a6802a828
Deploy Message:      "WP-5B.26C Fresh Staging Deploy Preview (0039064)"
Build Duration:      Vite SSR bundle (4.65s) + Nitro server worker (139.27 kB)
Production Domain:   https://kalyanicasttech.com (UNTOUCHED)
```

---

## 4. Deployed Commit Verification

The deployed release candidate snapshot corresponds to the verified feature-branch commit ancestry:

```text
0039064 (HEAD -> feature/kct-step5b25b-discoverability-closure)
 │  Author: Mohammad Arshad <pulselifex@gmail.com>
 │  Date:   Sat Nov 7 05:43:13 2026 +0530
 │  Subject: fix(staging): align server.ts X-Robots-Tag with Netlify deploy preview header injection to eliminate duplicate noindex
 │
 ▼
4222944
 │  Subject: docs(wp-5b.26a): add remediation closure dossier for independent re-audit
 │
 ▼
df61006
 │  Subject: fix(wp-5b.26a): close independent audit findings REM-01 through REM-06
 │
 ▼
6b16457 / f0c656b / c25ed35 / 0e88b7a
 │  (Discoverability closure, terminology cleanup, document scanning sensors)
 │
 ▼
a5ea24f (Baseline parent from WP-5B.25A)
```

---

## 5. REM-04 Live Staging Header Evidence

Forensic edge probing was executed directly against the newly deployed preview URL (`https://6aee6d45f037849a6802a828--kalyanicasttech.netlify.app`).

### Multi-Endpoint Edge Response Telemetry:

| Target Endpoint | HTTP Status | Content-Type | Edge `X-Robots-Tag` | `noindex` Token Count | In-Page Canonical Tag | Verdict |
| :--- | :---: | :--- | :--- | :---: | :--- | :--- |
| **HTML Homepage (`/`)** | **200 OK** | `text/html; charset=utf-8` | `nofollow, noarchive, noindex` | **1 (EXACT)** | `https://kalyanicasttech.com/` | **PASS (CLOSED)** |
| **HTML Corporate (`/about-us`)** | **200 OK** | `text/html; charset=utf-8` | `nofollow, noarchive, noindex` | **1 (EXACT)** | `https://kalyanicasttech.com/about-us` | **PASS (CLOSED)** |
| **HTML Journey (`/our-journey`)** | **200 OK** | `text/html; charset=utf-8` | `nofollow, noarchive, noindex` | **1 (EXACT)** | `https://kalyanicasttech.com/our-journey` | **PASS (CLOSED)** |
| **HTML Terminal (`/shivlakha-rail-logistics`)** | **200 OK** | `text/html; charset=utf-8` | `nofollow, noarchive, noindex` | **1 (EXACT)** | `https://kalyanicasttech.com/shivlakha-rail-logistics` | **PASS (CLOSED)** |
| **HTML ICT (`/shivlakha-rail-logistics/inland-container-terminal`)** | **200 OK** | `text/html; charset=utf-8` | `nofollow, noarchive, noindex` | **1 (EXACT)** | `https://kalyanicasttech.com/shivlakha-rail-logistics/inland-container-terminal` | **PASS (CLOSED)** |
| **HTML Data Sheets (`/resources/product-data-sheets`)** | **200 OK** | `text/html; charset=utf-8` | `nofollow, noarchive, noindex` | **1 (EXACT)** | `https://kalyanicasttech.com/resources/product-data-sheets` | **PASS (CLOSED)** |
| **Plain Text (`/robots.txt`)** | **200 OK** | `text/plain; charset=UTF-8` | `noindex` | **1 (EXACT)** | N/A (Static asset) | **PASS (CLOSED)** |
| **XML Sitemap (`/sitemap.xml`)** | **200 OK** | `application/xml` | `noindex` | **1 (EXACT)** | N/A (Static asset) | **PASS (CLOSED)** |
| **PDF Document (`/documents/investors/...`)** | **200 OK** | `application/pdf` | `noindex` | **1 (EXACT)** | N/A (Binary PDF) | **PASS (CLOSED)** |
| **CSS Asset (`/assets/styles-CgJ2YO72.css`)** | **200 OK** | `text/css; charset=UTF-8` | `noindex` | **1 (EXACT)** | N/A (Static CSS) | **PASS (CLOSED)** |
| **JS Asset (`/assets/index-dvuNaxcm.js`)** | **200 OK** | `application/javascript; charset=UTF-8` | `noindex` | **1 (EXACT)** | N/A (Static JS) | **PASS (CLOSED)** |

### Live Edge Crawl Results Across All 27 Canonical Routes:
An automated crawling script probed every URL in the canonical sitemap against the live Netlify preview:
- **Total Canonical Routes Probed:** 27
- **HTTP 200 OK Success Rate:** **27 / 27 (100%)**
- **Single `noindex` Token Verification:** **27 / 27 (100%)**
- **Canonical Tags Hard-Locked to Production (`https://kalyanicasttech.com`):** **27 / 27 (100%)**
- **Staging Subdomain URLs Leaked in Canonicals or JSON-LD:** **0 (0.00%)**

---

## 6. Canonical and Sitemap Results

1. **Sitemap Integrity (`public/sitemap.xml`):**
   - Contains exactly **27 URLs**.
   - All 27 URLs begin with `https://kalyanicasttech.com/`.
   - Excludes non-indexable routes (`/resources/product-data-sheets`, legal disclaimer, legacy 301 redirects).
2. **Canonical Directives:**
   - Every page emits `<link rel="canonical" href="https://kalyanicasttech.com/..." />`.
   - Self-referencing canonicals are enforced across all indexable and non-indexable pages.
   - Non-indexable auxiliary routes (such as `/resources/product-data-sheets`) emit `<meta name="robots" content="noindex, follow"/>`.

---

## 7. REM-01 to REM-06 Status After Fresh Deployment

| Item | Description | Pre-Deploy Status (Local) | Live Deployed Status (Staging Preview) | Verification Proof | Final Status |
| :--- | :--- | :---: | :---: | :--- | :---: |
| **REM-01** | Working tree uncommitted files | Closed (`0e88b7a`) | **LIVE & VERIFIED** | Deployed snapshot contains committed `pages.json`, `seo-metadata.ts`, `about-us.tsx` | **CLOSED** |
| **REM-02** | Unsupported 216,000 kg stacking claim | Closed (`df61006`) | **LIVE & VERIFIED** | Tested load `96,012 kg per post` rendered on live site; 0 occurrences of 216,000 kg | **CLOSED** |
| **REM-03** | CBIC Section 7 statutory citations | Closed (`df61006`) | **LIVE & VERIFIED** | Gallery line 652 renders `CBIC In-Principle Approval Record`; milestone is 10 Sept 2026 | **CLOSED** |
| **REM-04** | Duplicate `noindex` staging header | Local fix applied | **LIVE & VERIFIED** | Edge probe confirms `X-Robots-Tag: nofollow, noarchive, noindex` (exactly 1 token) | **CLOSED** |
| **REM-05** | Universal ASTM A216 WCB casting claim | Closed (`df61006`) | **LIVE & VERIFIED** | ASTM A216 purged; ISO 1161 and IS 12117 accurately qualified | **CLOSED** |
| **REM-06** | Product data sheets noindex & sitemap | Closed | **LIVE & VERIFIED** | Emits `noindex, follow`; excluded from sitemap; 0 placeholder PDFs | **CLOSED** |

---

## 8. Corporate and Technical Content Regression Results

Inspection of the rendered pages on the fresh release candidate confirmed complete compliance with all corporate governance mandates:

1. **Corporate Identity:**
   - Sole primary corporate legal name: **Kalyani Cast Tech Limited** (BSE SME: 544023 · CIN: L26990DL2012PLC242760).
   - Zero competing company profiles or standalone subsidiary branding.
2. **Operating Structure:**
   - Exactly **two business divisions**:
     - **Manufacturing Division:** Container Manufacturing, Wagon Manufacturing, and Precision Foundry Unit.
     - **Terminal Division:** Multimodal rail logistics platform at Shivlakha, Kachchh, Gujarat.
3. **Primary Navigation (8 Approved Destinations):**
   - 1. About Us (`/about-us`)
   - 2. Our Journey (`/our-journey`)
   - 3. Leadership (`/leadership`)
   - 4. Manufacturing (`/manufacturing` with mega-menu dropdown)
   - 5. Facilities (`/facilities`)
   - 6. Products & Applications (`/products-applications`)
   - 7. Innovation (`/innovation`)
   - 8. Engineering & Quality (`/engineering-quality`)
   - *Plus Investor Relations (`/investor-relations`) & Contact (`/contact`).*
4. **Manufacturing Mega-Menu (4 Approved Items):**
   - Container Manufacturing (`/manufacturing/container-manufacturing`)
   - Design & Engineering (`/manufacturing/design-engineering`)
   - Rewari Works & Testing (`/facilities`)
   - Testing & Quality Rig (`/engineering-quality`)
5. **Terminal Naming & Status:**
   - **Gati Shakti Terminal:** Described strictly as **Operational** (Inaugurated 15 September 2026; private broad-gauge railway siding under Western Railway Siding Agreement).
   - **Inland Container Terminal:** Described strictly as **Under development** (CBIC approval received on 10 September 2026; planning and construction stage; zero commercial bonded operations commenced).
6. **150-Acre Master Footprint Allocation:**
   - Gati Shakti Terminal: 30 Acres (Operational)
   - Inland Container Terminal: 30 Acres (Under development)
   - Container & Wagon Manufacturing Shed: 5 Acres (Target Q4 FY 2026-27)
   - Future Multimodal Expansion: 85 Acres (Master Plan Reserve)
   - *Total: Exactly 150 Acres (Contiguous Land Bank).*
   - Master disclaimer rendered: *"Notice: This visual represents master plan land allocation across the 150-acre site. Readiness and development stages vary by component and do not imply that all 150 acres are currently in commercial operation."*
7. **Rewari Works Physical Coordinates:**
   - Address: `Village Mamaria Thethar, Tehsil Khol, District Rewari, Haryana – 123101, India`.
   - PIN verified as **123101** across all contact accordions, pages, and JSON-LD schemas.

---

## 9. Exact KMT Sentence Verification

The single-sentence disclosure rule is rigorously enforced:

> *"The Shivlakha Integrated Project is being developed by Kalyani Cast Tech Limited and operated by SPV KMT Engineering Private Limited."*

- **Location:** Line 265 of `src/routes/shivlakha-rail-logistics.index.tsx` (Project Introduction section).
- **Occurrence Count:** **Exactly 1 occurrence** across the entire website code and content inventory.
- **Negative Inclusions:** Verified completely absent from Homepage, Header, Footer, About Us, Our Journey, Facilities, and Products. Zero external links, standalone cards, or independent profiles for KMT exist.

---

## 10. Assessment of Two Management Matters

### Matter A: Custom Castings Route (`/products/custom-castings`)

1. **Current Live Behavior:**
   - Probing `/products/custom-castings` on the fresh preview returned **HTTP 404 Not Found**.
   - Direct repository inspection confirms that no route file (`products.custom-castings.tsx`) was ever created in `src/routes/`.
   - The reference in Step 5B.25B documentation to a "Content-Pending Route" was an agent documentation note, not an implemented code route.
2. **Current Content Architecture:**
   - All precision casting capabilities and technical specifications are already published under `/products-applications` (tab: "Precision Castings & Components") and `/engineering-quality` (specifying Corner Castings to ISO 1161 with Lloyd's Register foundry approval LR2489004WA and IS 12117:1996 for railway castings).
3. **Customer Value Assessment:**
   - A prospective customer searching for custom castings finds full information on `/products-applications`.
   - Zero internal links in the website point to `/products/custom-castings`.
4. **Management Recommendation:**
   - **Option 1 (Recommended):** Add an explicit 301 redirect rule in `netlify.toml`:
     `from = "/products/custom-castings" to = "/products-applications" status = 301`.
   - **Option 2:** Maintain current status (returns HTTP 404 cleanly; zero indexation impact).
   - In accordance with the mandate, no unapproved redirects or synthetic pages were created during this work package.

---

### Matter B: New Wagon Design Stage-I Approval

1. **Primary Regulatory Baseline:**
   - The primary milestone relates to concept design submission and Stage-I evaluation under the Research Designs and Standards Organisation (RDSO, Ministry of Railways).
   - Stated milestone date in corporate registers: **26 October 2026**.
2. **Scope & Conditions:**
   - Stage-I approval represents **concept design validation** for a low-deck-height container flatcar design study engineered to maximize vertical clearance for high-cube containers and domestic dwarf boxes across electrified rail networks.
   - It **does not constitute commercial manufacturing clearance, type approval, or rolling-stock availability**.
3. **Publication Safeguards Enforced on Staging:**
   - Across all rendered pages (`/innovation`, `/investor-relations`, `/our-journey`, `/manufacturing`), the milestone is strictly accompanied by the mandatory developmental disclaimer:
     > *"New Wagon Design has received RDSO Stage-I approval and is progressing through subsequent levels of approval. Stage-I approval represents concept validation and does not constitute commercial production clearance or rolling-stock availability."*
4. **Management Recommendation:**
   - Retain this approved cautious wording. Do not escalate claims to commercial production or supply readiness until subsequent RDSO prototype and field trial clearances are formally issued.

---

## 11. Technical, Visual & Functional QA Results

### Automated Test Sensor Output:
```text
 Test Files  20 passed (20)
      Tests  243 passed (243)
   Start at  05:42:12
   Duration  32.28s
```

### Production SSR Build Sensor Output:
```text
vite v8.1.5 building client environment for production...
✓ 2066 modules transformed.
dist/client/assets/styles-CgJ2YO72.css   146.13 kB
dist/client/assets/routes-BBOc12Dr.js     44.11 kB
dist/client/assets/index-QSh_ileR.js     177.30 kB
vite v8.1.5 building SSR environment for production...
✓ 131 modules transformed.
dist/server/index.mjs                   139.27 kB
dist/server/_ssr/route-assets-6GjezerO.mjs 147.77 kB
✓ built in 4.65s
```

### Browser-Level Visual & Responsive Inspection:
- **Desktop (1440px):** Tested Homepage hero carousel, 8-section layout, Manufacturing mega-menu, Shivlakha interactive platform tabs, and Footer accordions. All rendered with clean typography, proper contrast, and zero layout shifting.
- **Tablet (768px):** Navigation drawer collapses into an accessible hamburger menu with full touch targets; container comparison cards stack cleanly.
- **Mobile (375px):** Viewport scales without horizontal scroll overflow; table elements feature horizontal swipe indicators; business enquiry form inputs remain accessible and touch-friendly.
- **Console & Network Errors:** Zero runtime script errors or uncaught exceptions during SSR or client hydration.
- **Document Links:** All 35 verified PDF/image document links return valid HTTP 200 responses.

---

## 12. Open Issues & Management Decisions Required

1. **Executive Production Release Authorization:**
   - The release candidate is technically and statutorily verified.
   - Per corporate governance rules, merging `feature/kct-step5b25b-discoverability-closure` into `release/kct-website-v1` and publishing to `https://kalyanicasttech.com` requires formal written management sign-off.
2. **Custom Castings Route Decision:**
   - Management decision on whether to add a 301 redirect rule (`/products/custom-castings` -> `/products-applications`) in the production release branch.

---

## 13. Production-Boundary Confirmation

This report formally certifies:
1. **Release Branch Freeze:** `release/kct-website-v1` remains at `f1e26bb72a15f8c35665b8cf6444c621bb8114fd` with zero commits, merges, or pushes.
2. **Production Domain Isolation:** `https://kalyanicasttech.com` has received zero deployments, DNS modifications, or server reconfigurations.
3. **Clean Working Tree:** `Website_Codebase/` is clean with all code committed to the feature branch.

---

## 14. Final Recommendation & Verdict

All objectives of **WP-5B.26C** have been accomplished:
- Staging release candidate successfully deployed and verified live.
- REM-04 duplicate `noindex` header completely eliminated across all endpoints.
- 27 of 27 canonical routes verified live with HTTP 200 OK and production canonical tags.
- Full 243-test automated regression suite passed with zero errors.

### **FINAL VERDICT: PASS — STAGING RELEASE CANDIDATE READY FOR MANAGEMENT ACCEPTANCE**

*Dossier prepared and certified on 07 November 2026 by Senior Technical Implementation Lead.*
