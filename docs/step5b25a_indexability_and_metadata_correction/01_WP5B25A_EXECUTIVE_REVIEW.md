# WP-5B.25A — Search Indexability, Canonical Strategy, Metadata & Structured Data Executive Review

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.25A — Search Indexability, Canonical Strategy, Metadata & Structured Data Correction  
**Parent Work Package:** WP-5B.25  
**Corporate Entity:** Kalyani Cast Tech Limited (CIN: `L26990DL2012PLC242760`, BSE SME: `544023`)  
**Parent Working Branch:** `feature/kct-step5b25-seo-smo-aieo` @ `f1206fe`  
**Active Working Branch:** `feature/kct-step5b25a-indexability-correction`  
**Protected Release Baseline:** `release/kct-website-v1` at `f1e26bb72a15f8c35665b8cf6444c621bb8114fd` (STRICTLY FROZEN)  
**Production Domain:** `https://kalyanicasttech.com` (STRICTLY FROZEN pending explicit management authorization)  
**Netlify Staging Deploy ID:** `6aeded590ed2d25a0ee82312`  
**Live Staging URL:** [https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app/](https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app/)  
**Date:** 6 November 2026  
**Status:** `READY FOR INDEPENDENT REVIEW`  

---

## 1. Executive Summary & Review Motivation

Work Package WP-5B.25 established a centralized SEO, social metadata, and Schema.org JSON-LD structured data engine. However, it implemented a blanket heuristic dividing the router into 16 primary indexable canonical routes and marking all 21 secondary routes as `noindex, follow` with parent canonical consolidation.

Under WP-5B.25A, this blanket strategy was subjected to a thorough, route-by-route content, search intent, and publication purpose audit. A secondary route must not be excluded from search indexing merely because it is nested or acts as a child page.

### Key Corrections Executed:
1. **Critical Route Re-assessment:**
   - 11 high-value, content-rich subpages—specifically statutory investor relations disclosures (financial statements, Regulation 30 filings, shareholding patterns, IPO filings, grievance contacts, meeting proceedings) and technical resource repositories (Lloyd's Register / IRS / ISO certifications, corporate brochures, historical railway trial archives, rail cargo evaluation desk)—have been promoted to **Indexable Canonical Pages** with self-referencing canonical URLs.
   - The total number of indexable canonical pages expands from **16 to 27**, strictly justified by authentic content, downloadable statutory filings, and distinct search intent.
2. **Strict Terminology & Governance Enforcement:**
   - **Gati Shakti Terminal:** Eradicated "Gati Shakti Cargo Terminal" from title tags, H1s, breadcrumbs, and JSON-LD schema across public interfaces. The exact approved public name is **Gati Shakti Terminal**.
   - **Homepage Identity:** Refined homepage title from brand slogan (`Kalyani Cast Tech Limited | Built for what India moves.`) to descriptive corporate manufacturing identity: `Kalyani Cast Tech Limited | Freight Containers & Precision Castings`.
   - **NDT Quality Claims:** Refined `/engineering-quality` meta description and route banner from "certified NDT inspection" to **"non-destructive testing (NDT)"**, strictly aligning with verified shopfloor capabilities (ASNT Level II personnel and in-house USFD/MPI/DPT equipment) without overclaiming unheld laboratory accreditations.
   - **Dual Business Divisions:** Preserved strict dual-division architecture (Manufacturing Division at Rewari Works, PIN 123101; Terminal Division at Shivlakha, Kachchh, Gujarat).
   - **CBIC Terminal Status:** Inland Container Terminal remains strictly identified as under development with CBIC approval received 10 September 2026; zero implication of active customs-bonded operations.
3. **Canonical Architecture:**
   - Completely abolished blanket parent canonicalisation for useful, unique child pages.
   - Self-referencing canonicals (`https://kalyanicasttech.com/...`) assigned to all 27 indexable routes.
   - Preserved canonical consolidation strictly for genuinely duplicate legacy subpages (`/containers-solutions/*`, `/manufacturing/container-manufacturing`, `/manufacturing/design-engineering`, `/company/our-journey`, `/company/our-business`).
   - Mapped `/resources/product-data-sheets` as a self-referencing `noindex, follow` utility route pending management publication of model-specific cutsheets.
4. **Sitemap & Robots Modernisation:**
   - `public/sitemap.xml` regenerated with **exactly 27 canonical indexable URLs** (0 redirects, 0 duplicate URLs, 0 noindex URLs).
   - `public/robots.txt` verified with explicit allowlists for search engines, social crawlers, and AI agents (`GPTBot`, `PerplexityBot`, `ClaudeBot`).
5. **Staging Indexing Protection:**
   - Verified that staging previews (`*.netlify.app`) will not compete with production via Netlify context headers (`X-Robots-Tag: noindex, nofollow, noarchive`), canonical production hard-locking, and zero staging exposure in sitemaps or schemas.
6. **Automated Verification:**
   - 20 test files, 243 tests passed (100% green).
   - Production SSR build completed in 4.96s with zero errors.
   - Live edge deployment verified across 29 targets (27 routes + robots + sitemap) with 100% HTTP 200 OK.
   - 18 high-resolution staging screenshots captured across desktop, tablet, and mobile.

---

## 2. Route Topology Summary

```text
Router Tree Partition (46 Total Routes)
├── 27 Indexable Canonical Pages (sitemap.xml, robots index, follow, self-canonical)
│    ├── 13 Corporate & Core Operational Hubs (/, /about-us, /our-journey, /leadership, etc.)
│    ├──  4 Shivlakha Multimodal Platform Routes (Platform, GCT, ICT, Cargo Evaluation)
│    ├──  3 Resources Verification Subpages (Quality Certs, Brochures, News & Media)
│    └──  7 Investor Relations Statutory Disclosures (Financials, Reg 30, Governance, etc.)
├──  9 Duplicate Pages Requiring Canonical Consolidation (noindex, follow -> parent canonical)
│    ├──  5 /containers-solutions/* subpages -> /products-applications
│    ├──  2 /manufacturing/* subpages -> /manufacturing, /engineering-quality
│    └──  2 /company/* subpages -> /about-us, /our-journey
├──  1 Utility / Content-Pending Route (noindex, follow, self-canonical)
│    └── /resources/product-data-sheets (Awaiting management model-specific cutsheets)
└──  9 HTTP 301 Server Redirects (Preserving external backlinks and bookmarks)
```

---

## 3. Work Package Acceptance Verdict

- **Automated Tests:** 243 / 243 PASSING (100%)
- **Production SSR Build:** PASS (Exit code 0, 4.96s)
- **Live Edge Staging:** 29 / 29 TARGETS PASSING (HTTP 200 OK)
- **Protected Release Baseline:** UNTOUCHED (`release/kct-website-v1` at `f1e26bb`)
- **Production Domain:** FROZEN (`https://kalyanicasttech.com`)

**Final Classification:** `READY FOR INDEPENDENT REVIEW`.
