# WP-5B.25B — FINAL DISCOVERABILITY VALIDATION, METADATA CLEANUP & PUBLICATION INTEGRITY CLOSURE

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Parent Work Packages:** WP-5B.25 / WP-5B.25A  
**Work Package:** WP-5B.25B  
**Date:** 06 November 2026  
**Execution Environment:** Windows Server / PowerShell / Node.js v24.18.0  
**Active Working Branch:** `feature/kct-step5b25b-discoverability-closure`  
**Base Source Commit (HEAD):** `a5ea24fb0ca8e865480d21895f06eebba5df6342`  
**Parent Source Commit:** `60849c6b5ee2e481a93e80de0e8446e5d5440b78`  
**Active Staging Deployment ID:** `6aeded590ed2d25a0ee82312`  
**Live Staging Preview URL:** `https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app/`  
**Protected Release Baseline:** `release/kct-website-v1` at `f1e26bb72a15f8c35665b8cf6444c621bb8114fd` (STRICTLY FROZEN)  
**Production Domain:** `https://kalyanicasttech.com` (STRICTLY FROZEN — ZERO PRODUCTION DEPLOYS)  
**Work Package Final Classification:** **READY FOR INDEPENDENT CLAUDE REVIEW**

---

## 1. Executive Summary & Objective

Work Package **WP-5B.25B** serves as the definitive closing validation sensor for the search discoverability, metadata architecture, social previews, structured data semantics, and publication integrity across the modernized Kalyani Cast Tech Limited web platform. Following the architectural expansion executed in WP-5B.25A (which established the 27-route indexable canonical inventory and Netlify staging protection headers), WP-5B.25B performs an evidence-led validation of all public content, verifies statutory disclosures, eliminates residual naming anomalies, and prepares a rigorous evidence pack for independent Claude review.

Per operating instructions, **no redesign was permitted or attempted**, **no new broad content programme was initiated**, **production deployment remained strictly prohibited**, and all previous verified work was preserved.

---

## 2. Baseline Verification Findings

| Verification Parameter | Reported Dossier Value | Actual Verified Value | Verification Method / Evidence | Compliance Status |
| :--- | :--- | :--- | :--- | :--- |
| **Active Working Branch** | `feature/kct-step5b25a-indexability-correction` | `feature/kct-step5b25b-discoverability-closure` | `git branch --show-current` | **VERIFIED** (Branch advanced for WP-5B.25B closure) |
| **Actual HEAD Commit** | `a5ea24f` | `a5ea24fb0ca8e865480d21895f06eebba5df6342` | `git rev-parse HEAD` | **VERIFIED** |
| **Parent Commit** | `60849c6` | `60849c6b5ee2e481a93e80de0e8446e5d5440b78` | `git rev-parse HEAD~1` | **VERIFIED** |
| **Working-Tree Status** | Clean at start | Modified (3 files): `pages.json`, `seo-metadata.ts`, `about-us.tsx` | `git status -s` | **CONTROLLED CHANGES ONLY** |
| **Commit Ancestry** | Derived from `60849c6` (WP-5B.25) | Direct child of `60849c6`, linear branch history | `git log --graph --oneline` | **VERIFIED** |
| **Staging Deployment ID**| `6aeded590ed2d25a0ee82312` | `6aeded590ed2d25a0ee82312` | Netlify API & live HTTP headers | **VERIFIED** |
| **Staging Preview URL** | `https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app/` | `https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app/` | Live HTTP request sensor (34 endpoints) | **VERIFIED (HTTP 200 OK)** |
| **Production Protection**| `release/kct-website-v1` frozen | `f1e26bb` untouched; DNS untouched | Git reflog & live DNS checks | **STRICTLY PROTECTED** |

---

## 3. Public Terminology & Metadata Corrections

A comprehensive automated regex scan across 158 source code files (`src/**/*.ts*`, `src/**/*.json`) audited every occurrence of terminal nomenclature, abbreviations, routing claims, and quality standards:

1. **"Gati Shakti Cargo Terminal" Eradication:**
   - *Previous state:* `src/content/pages.json` line 1199 (Shivlakha overview meta description) contained `"operational Gati Shakti Cargo Terminal"`.
   - *Action:* Updated to the approved canonical terminology: `"operational Gati Shakti Terminal"`.
   - *Result:* Zero remaining instances of "Gati Shakti Cargo Terminal" across all visible content, titles, metadata, breadcrumbs, alt text, and schemas.
2. **"GCT Shivlakha" Abbreviation Eradication:**
   - *Previous state:* `src/content/pages.json` line 2697 (Gallery meta description) contained `"and GCT Shivlakha operations."`.
   - *Action:* Updated to full approved public terminology: `"and Shivlakha terminal operations."`.
   - *Result:* Zero remaining unapproved public abbreviations in metadata or user-facing text.
3. **Route Claim Narrowing ("via Gandhidham-Samakhiali"):**
   - *Previous state:* `src/content/pages.json` line 1255 (Gati Shakti Terminal meta description) claimed `"connected to the Indian Railways network via Gandhidham-Samakhiali."`
   - *Action:* Lacking approved third-party railway siding junction documentation for that specific junction phrase, the meta description was narrowed to the verified and defensible statement: `"Dedicated rail siding connected to the Indian Railways network."`
4. **Social Preview Image Encoding Fix:**
   - *Previous state:* `src/content/seo-metadata.ts` referenced `/assets/containers/20'%20ISO%20Container%20on%20rake.png` for `/products-applications` and `/resources/news-media`. The single quote in the filename caused HTML attribute escaping to `&#x27;`, resulting in HTTP 404 errors during external social scraper crawls.
   - *Action:* Replaced with the verified, high-contrast asset `/assets/containers/ISO Container.png` (HTTP 200 OK, 1200x630, valid PNG).
5. **Terminal Division Card Harmonization:**
   - *Previous state:* `src/routes/about-us.tsx` lines 380 and 404 used lowercase "cargo terminals" and "cargo terminal".
   - *Action:* Harmonized to "multimodal terminal operations" and "freight terminal", avoiding any confusion with the legacy entity title.

---

## 4. Title and Meta Description SERP Review

All **27 indexable canonical routes** were evaluated against search intent, brand consistency, readability, character count, and Google SERP desktop display pixel width (standard cutoff: 580px–600px):

### Homepage Title Evaluation
- **Current Title:** `Kalyani Cast Tech Limited | Freight Containers & Precision Castings` (67 characters, ~528px).
- **Candidate Alternative Evaluated:** `Kalyani Cast Tech | Freight Containers & Castings` (49 characters, ~388px).
- **Comparative Analysis:**
  1. *Pixel Width:* At 528px, the current title fits comfortably within Google's 600px desktop SERP title boundary without mid-word truncation.
  2. *Statutory Authority:* The current title retains the registered corporate legal name (`Kalyani Cast Tech Limited`), which is mandatory for BSE SME (Scrip: 544023) listing integrity.
  3. *Foundry Product Differentiation:* "Precision Castings" communicates high-integrity alloy steel castings engineered to ISO 1161 specifications (Corner Castings) and IS 12117:1996 (Railway Castings), whereas generic "Castings" implies commoditized foundry output.
- **Formal Recommendation:** **Retain the current homepage title**. The statutory and technical authority of `Kalyani Cast Tech Limited | Freight Containers & Precision Castings` significantly outweighs the minor character reduction of the alternative, while still displaying completely on standard desktop SERPs.

### Subpage Title & Description Summary
- **Title Length Range:** 39 to 67 characters (Mean: 57.3 characters; all <= 550px width). Zero titles truncated on desktop SERP.
- **Meta Description Range:** 130 to 164 characters (Mean: 151.6 characters; all <= 165 characters). Zero descriptions exceed mobile/desktop snippet limits.
- **Duplication:** 0 duplicate titles, 0 duplicate meta descriptions.

---

## 5. Public Document and Resource Validation

An exhaustive scan of all document links across `/resources`, `/resources/quality-certifications`, `/resources/corporate-profile-brochures`, `/resources/news-media`, and statutory subpages revealed **35 unique public document files**:

- **Physical Existence on Disk:** 35 / 35 (100% existing in `public/documents/`).
- **HTTP Reachability:** 35 / 35 (HTTP 200 OK on staging preview).
- **Integrity Checks on Core Technical Approvals:**
  1. *Lloyd's Register EMEA Foundry Approval:* Certificate `LR2489004WA` (valid 01/07/2024 to 30/06/2027) issued to Kalyani Cast Tech Limited, Rewari Works. Scope strictly limited to **Container Corner Castings manufactured in accordance with LR Rules for Materials**. Verified that website copy does *not* claim LR certification for the container box body or general railway wagons.
  2. *Indian Register of Shipping (IRS) Certificate of Capacity:* Report `DLH21X014` (dated 14/09/2021) certifying capacity to manufacture at least 1,000 containers annually (20ft ISO Containers 34T as per ISO 1496:2013 and CSC 1972).
  3. *Indian Register of Shipping (IRS) Competent Manufacturer:* Certificate `DLH21X013` certifying competency for freight container manufacturing under CSC 1972.
  4. *ISO Management Systems:* ISO 9001:2015 and ISO 45001:2018 (Certificate `QACS/Q-8025` / `QACS/O-8027`, valid to 10/10/2027); ISO 14001:2015 (Certificate `PCPL/E/3091`, valid to 22/08/2028). Verified that ISO management certifications are clearly distinguished from product-level type approvals.
  5. *RDSO Class 'A' Foundry Approval:* Certificate under IS 12117:1996 for railway steel castings.

---

## 6. Investor Page Publication Review

A dedicated audit of the 7 indexable investor subpages and the central `/investor-relations` gateway verified **27 approved investor documents**:

- **Genuine Disclosures:** All documents represent authentic filings submitted to BSE Limited or statutory charters adopted by the Board of Directors.
- **Reporting Dates Alignment:** Financial results for 30.09.2025 (H1 FY26), 31.03.2025 (FY25), 30.09.2024 (H1 FY25), 31.03.2024 (FY24), and 30.09.2023 (H1 FY24) strictly match document text and auditor signatures (M/s Goel Mintri & Associates).
- **Historical Offer Document Preservation:** Draft Red Herring Prospectus (DRHP), Red Herring Prospectus (RHP), and final Prospectus for the November 2023 BSE SME Initial Public Offering are legitimately retained and clearly labelled as historical statutory offer documents.
- **Zero Confidential Drafts:** No unapproved financial statements, internal board minutes, or preliminary unexecuted drafts are exposed anywhere in the public directory or site navigation.
- **Statutory Governance Contacts:** Reconciled Company Secretary & Compliance Officer (Mr. Pankaj Kumar, cs@kalyanicasttech.com, +91-9711735302) and Registrar & Share Transfer Agent (Bigshare Services Pvt. Ltd., SEBI Reg. INR000001385) across all investor interfaces.

---

## 7. Indexability and Canonical Final Register

The 27-route indexable canonical inventory defined in WP-5B.25A is confirmed as optimal and defensible:

- **27 Indexable Canonical Routes:** Every route serves a unique search intent, provides standalone commercial or statutory utility, features a self-referencing canonical URL, renders `index, follow` robots directives, and is included in `public/sitemap.xml`.
- **9 Duplicate-Consolidation Routes:** Substantially duplicative legacy URLs (e.g. `/company/our-journey`, `/manufacturing/container-manufacturing`, `/containers-solutions/standard-containers`) are consolidated via `noindex, follow` directives and cross-canonical targets pointing to their authoritative parents.
- **1 Content-Pending Route:** `/products/custom-castings` is intentionally marked `noindex, follow` pending engineering catalog completion by management.
- **Zero Broken Links:** Automated runtime crawler confirmed 0 internal link failures across all 27 primary pages.

---

## 8. Structured Data Semantics

Validation of rendered JSON-LD schemas confirmed:
1. **Corporation Schema:** Rendered across all indexable pages with legal name, BSE SME ticker (`544023`), CIN (`L26990DL2012PLC242760`), and registered office address.
2. **WebSite Schema:** Unified search and corporate branding metadata.
3. **BreadcrumbList Schema:** Fully synchronized hierarchical breadcrumbs with 100% agreement between breadcrumb targets and canonical URLs.
4. **ManufacturingPlant Schema:** Rendered exclusively on `/facilities` for Rewari Manufacturing Works with authentic geographic coordinates (28.2612° N, 76.5418° E).
5. **LocalBusiness Schema:** Rendered exclusively on `/shivlakha-rail-logistics/gati-shakti-terminal` for `Gati Shakti Terminal (Shivlakha)` without unverified consumer opening hours or false public access claims.
6. **Inland Container Terminal:** Strictly omits `LocalBusiness` schema, reinforcing its non-operational, under-development status.
7. **Product Schemas:** Zero unsupported price, offer, stock availability, or user rating fields.

---

## 9. Staging Indexation Protection

The staging deployment environment was validated against crawler dilution:
- **Netlify Staging Headers:** `[context.deploy-preview.headers]` and `[context.branch-deploy.headers]` in `netlify.toml` deliver `X-Robots-Tag: noindex, nofollow, noarchive, noindex` on all HTTP responses.
- **Edge Header Verification:** Live probe of 34 endpoints on `https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app/` confirmed 100% header enforcement across HTML, XML, TXT, and JS responses.
- **Canonical Protection:** All staging pages emit production domain canonical links (`https://kalyanicasttech.com/...`), ensuring search engines treat staging as an unindexed replica.

---

## 10. AIEO / GEO Validation Summary

Authoritative crawlable page text was verified against 9 core corporate parameters:
1. *Kalyani Cast Tech Limited* — Listed parent corporate identity.
2. *Manufacturing Division* — Containers, wagons, and foundry castings at Rewari Works.
3. *Terminal Division* — Rail logistics platform at Shivlakha, Kachchh, Gujarat.
4. *Rewari Works* — Industrial plant at Tehsil Khol, Distt. Rewari, Haryana 123101.
5. *Corner Castings* — Manufactured as per ISO 1161 specifications with Lloyd's Register foundry shop approval.
6. *Containers* — 20ft GP and High Cube models designed and manufactured to comply with ISO 1496 Series-1 requirements.
7. *New Wagon Design* — Under RDSO Stage-I approval status.
8. *Gati Shakti Terminal* — Operational 30-acre private siding terminal inaugurated 15 September 2026.
9. *Inland Container Terminal* — Under development with CBIC approval received 10 September 2026.

---

## 11. Automated Test & Build Sensor Results

- **Vitest Sensor Suite:** 20 test files, **243 / 243 PASSING (100%)**, 0 failures, 0 regressions.
- **Production SSR Build:** Vite v8.1.5 + Nitro build completed in 31.19s with **0 errors**. Client assets and server worker (`dist/server/index.mjs`) generated cleanly.
- **Visual Capture Suite:** 12 representative desktop, tablet, and mobile screenshots captured from live staging and catalogued in `screenshots/`.

---

## 12. Final Classification Verdict

Based on exhaustive automated testing, live edge response verification, complete document existence confirmation, and publication integrity audit:

### **CLASSIFICATION: READY FOR INDEPENDENT CLAUDE REVIEW**
All WP-5B.25B deliverables are generated, cross-referenced, and archived in `04_WEBSITE_DOCUMENTATION/step5b25b_discoverability_closure/`.
