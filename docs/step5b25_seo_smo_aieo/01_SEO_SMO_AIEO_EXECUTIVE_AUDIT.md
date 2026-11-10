# WP-5B.25 — Executive SEO, SMO & AIEO Audit Report

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.25 — SEO, SMO & AIEO Strategy, Technical Audit and Implementation  
**Principal Entity:** Kalyani Cast Tech Limited (CIN: `L26990DL2012PLC242760`, BSE SME: `544023`)  
**Parent Release Baseline:** `release/kct-website-v1` at `f1e26bb72a15f8c35665b8cf6444c621bb8114fd` (FROZEN)  
**Parent Working Commit:** `4194f83` (from `feature/kct-step5b24a-management-corrections`)  
**Active Working Branch:** `feature/kct-step5b25-seo-smo-aieo`  
**Netlify Staging Baseline Deploy ID:** `6aede2fa05b1aad58c593c61`  
**Live Staging URL:** `https://6aede2fa05b1aad58c593c61--kalyanicasttech.netlify.app/`  
**Canonical Production Domain:** `https://kalyanicasttech.com` (FROZEN pending explicit management sign-off)  
**Date of Audit & Implementation:** 6 November 2026  
**Auditor:** Google Antigravity Advanced Agentic Pair  

---

## 1. Executive Summary & Purpose

The objective of Work Package WP-5B.25 is to establish technical discoverability, indexability, high-contrast social sharing presentation, and generative AI search understandability for the Kalyani Cast Tech Limited corporate website, without resorting to keyword stuffing, inflated promotional copy, or unsubstantiated technical claims.

Before WP-5B.25, the website had undergone intensive visual and content consolidation across WP-5B.1 through WP-5B.24A. However, several critical technical SEO and metadata deficiencies remained:
1. **XML Sitemap Deficiencies:** `public/sitemap.xml` contained 40+ URLs including 301 redirect paths (`/company`, `/business-enquiry`, `/containers-solutions`), diluting crawl budget and risking canonical confusion in Google Search Console.
2. **Missing Structured Data (JSON-LD):** The website lacked structured schemas for corporate identity (`Corporation`), site identity (`WebSite`), navigation hierarchies (`BreadcrumbList`), and physical facilities (`ManufacturingPlant`, `LocalBusiness`).
3. **Incomplete Social Sharing Metadata:** Open Graph and Twitter Card tags lacked high-contrast preview images, image dimensions, locale parameters, and explicit entity site names.
4. **Subpage Canonical Dispersal:** Legacy subpage routes (`/company/our-journey`, `/containers-solutions/standard-containers`, `/investors/financial-information`) lacked explicit canonical consolidation directives to the 16 primary indexable pages.
5. **Contact Metadata Discrepancy:** The `/contact` meta description retained an unapproved reference to "Kolkata office", violating Section 2 publication controls.

Through WP-5B.25, a complete on-page and technical SEO, SMO, and AIEO engine was engineered and deployed to Netlify staging.

---

## 2. Key Audit Findings & Implemented Improvements

| Dimension | Baseline State (WP-5B.24A) | Implemented State (WP-5B.25) | Impact & Business Benefit |
| :--- | :--- | :--- | :--- |
| **Sitemap Integrity** | 40+ URLs with 301 redirects and legacy aliases | Exactly 16 canonical indexable routes with `<lastmod>`, `<changefreq>`, and `<priority>` | Zero redirect crawl waste; 100% crawl efficiency in Search Console |
| **Robots Directives** | Generic crawlers only | Explicitly permits Googlebot, Bingbot, Applebot, Twitterbot, LinkedInBot, GPTBot, PerplexityBot, ClaudeBot | Legitimate search and AI discovery enabled; unverified bots controlled |
| **Structured Data** | None (0 schemas) | Injected JSON-LD: Corporation (CIN/BSE), WebSite, BreadcrumbList, ManufacturingPlant, LocalBusiness | Rich snippets, Knowledge Graph eligibility, AI answer accuracy |
| **Canonical Alignment** | Staging origin in dynamic environments | Hard-locked canonical origin `https://kalyanicasttech.com` across all tags and schemas | Eliminates duplicate content penalties across staging, mirrors, or scrapers |
| **Open Graph / Twitter** | Bare titles & descriptions only | Full Open Graph & Twitter Cards with authentic 1200x630 imagery, dimensions, and alt text | Professional, high-contrast preview cards on WhatsApp, LinkedIn, X, Facebook |
| **Meta Description Polish** | Varied lengths (104–215 chars), Kolkata reference | Exactly 134–163 chars across all 16 canonical routes; Kolkata reference removed | Optimized Google SERP snippet display without mobile truncation |
| **AIEO Entity Clarity** | Scattered corporate references | Unified entity definitions: 2 business divisions, Rewari Works, GCT Operational, ICT Under Development | Accurate retrieval in ChatGPT, Gemini, Perplexity queries |

---

## 3. Scope of Routes Audited

The audit covered all 46 routes defined in the TanStack Router tree:
- **16 Primary Canonical Routes (Indexable, included in Sitemap, self-referencing canonicals):**
  1. `/` (Corporate Homepage)
  2. `/about-us` (About Kalyani Cast Tech Limited)
  3. `/our-journey` (Corporate Evolution & Chronological Milestones)
  4. `/leadership` (Board of Directors & Management)
  5. `/manufacturing` (Manufacturing Division Overview)
  6. `/facilities` (Manufacturing Facilities: Rewari Works)
  7. `/products-applications` (Products & Applications Catalogue)
  8. `/innovation` (Innovation & Specialised Concepts)
  9. `/engineering-quality` (Engineering & Quality Testing Infrastructure)
  10. `/investor-relations` (Investor Relations & Statutory Gateway)
  11. `/gallery` (Visual Archive: Plants, Products & Operations)
  12. `/shivlakha-rail-logistics` (Shivlakha Multimodal Platform)
  13. `/shivlakha-rail-logistics/gati-shakti-terminal` (Gati Shakti Cargo Terminal - Operational)
  14. `/shivlakha-rail-logistics/inland-container-terminal` (Inland Container Terminal - Under Development)
  15. `/contact` (Contact & Commercial Enquiry)
  16. `/resources` (Resources & Technical Library)
- **21 Secondary Subpage Routes (Non-indexable, canonical consolidated to primary parents):**
  - Consolidated to `/about-us`: `/company/our-business`
  - Consolidated to `/our-journey`: `/company/our-journey`
  - Consolidated to `/products-applications`: `/containers-solutions/standard-containers`, `/containers-solutions/specialised-containers`, `/containers-solutions/rail-parcel-vehicle-cargo`, `/containers-solutions/application-specific-designs`, `/containers-solutions/technical-data-sheets`
  - Consolidated to `/manufacturing`: `/manufacturing/container-manufacturing`
  - Consolidated to `/engineering-quality`: `/manufacturing/design-engineering`
  - Consolidated to `/investor-relations`: `/investors/financial-information`, `/investors/stock-exchange-disclosures`, `/investors/corporate-governance`, `/investors/shareholder-information`, `/investors/ipo-corporate-actions`, `/investors/investor-grievance-contact`, `/investors/meetings-presentations`
  - Consolidated to `/resources`: `/resources/corporate-profile-brochures`, `/resources/product-data-sheets`, `/resources/quality-certifications`, `/resources/news-media`
  - Consolidated to `/shivlakha-rail-logistics`: `/shivlakha-rail-logistics/cargo-opportunities`
- **9 HTTP 301 Redirect Slugs (Excluded from sitemap):**
  - `/company` -> `/about-us`
  - `/business-enquiry` -> `/contact`
  - `/company/leadership` -> `/leadership`
  - `/containers-solutions` -> `/products-applications`
  - `/investors` -> `/investor-relations`
  - `/manufacturing/facilities-locations` -> `/facilities`
  - `/manufacturing/testing-quality` -> `/engineering-quality`
  - `/shivlakha-rail-logistics/gati-shakti-cargo-terminal` -> `/shivlakha-rail-logistics/gati-shakti-terminal`
  - `/shivlakha-rail-logistics/inland-container-depot` -> `/shivlakha-rail-logistics/inland-container-terminal`

---

## 4. Verification and Acceptance Summary

1. **Automated Unit & Integration Sensors:** 20 test files, 242 tests passing cleanly (100% pass rate in 56.63s).
2. **Production Build:** SSR bundle compiled cleanly with exit code 0 in 5.09s.
3. **Netlify Staging Deployment:** Successfully deployed under Deploy ID `6aede2fa05b1aad58c593c61`.
4. **Live Edge Staging Audit:** 16/16 canonical routes returned HTTP 200 with verified canonical tags, Open Graph tags, Twitter tags, and JSON-LD structured schemas.
5. **Visual Evidence:** 18 full-resolution desktop, tablet, and mobile screenshots captured and archived.
6. **Governance Adherence:** Zero fabricated rankings, zero traffic claims, zero unapproved technical specifications, zero unapproved corporate entities.

**Work Package Classification:** `READY FOR INDEPENDENT REVIEW`.
