# WP-5B.25A — Unresolved Issues & Owner Decision Register

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.25A — Search Indexability, Canonical Strategy, Metadata & Structured Data Correction  
**Entity:** Kalyani Cast Tech Limited  
**Date:** 6 November 2026  
**Status:** `DOCUMENTED FOR GOVERNANCE REVIEW`  

---

## 1. Overview

While WP-5B.25A successfully resolves all programmatic indexability, canonicalisation, and structured data issues across the 46 router paths, certain operational and commercial decisions are reserved strictly for management authorization.

---

## 2. Issues & Owner Decision Matrix

| No | Topic | Current Implementation State | Technical Impact | Required Owner / Management Decision |
| :--- | :--- | :--- | :--- | :--- |
| 1 | **Model-Specific Product Data Sheets** (`/resources/product-data-sheets`) | Retained as a utility subpage with `noindex, follow` and self-referencing canonical. Content is a 79-word placeholder inviting users to contact engineering. | Excluded from `sitemap.xml` to prevent thin-content quality penalties from search engines. | Management to decide whether to: (A) Provide approved PDF data sheets for specific container models to justify full indexability, or (B) Permanently 301 redirect this route to `/products-applications`. |
| 2 | **Official LinkedIn Corporate Profile** | `SiteFooter.tsx` contains an inactive LinkedIn icon with an accessible disclaimer title: *"Official profile pending management URL"*. | Prevents broken links or unauthorized redirection to personal executive profiles. | Management to supply official company LinkedIn URL when created to add to footer and Schema.org `sameAs` array. |
| 3 | **Google Search Console (GSC) DNS TXT Verification** | `11_SEARCH_CONSOLE_AND_ANALYTICS_READINESS.md` provides the exact DNS verification steps for apex `kalyanicasttech.com`. | Pre-release staging on `*.netlify.app` cannot verify ownership of `kalyanicasttech.com`. | Management IT / Domain administrator to add the provided TXT verification record to the authoritative DNS registrar upon production launch. |
| 4 | **External Video Integration** | YouTube links on `/resources/news-media` and Schema.org `sameAs` point directly to external YouTube URLs. | Preserves Core Web Vitals (avoids heavy YouTube iframe layout thrash and third-party tracking cookies). | Management to confirm whether dedicated thumbnail posters or embedded video lightboxes are preferred in future releases. |
| 5 | **Search Indexation Timing Policy** | Staging preview environment is strictly protected from indexing. | Search engines will index pages only after DNS cutover and Google Search Console sitemap submission. | Explicit management acknowledgement that search indexation times (typically 3–14 days) and ranking positions cannot be guaranteed. |

---

## 3. Governance Sign-off Checklist

- [x] All 27 indexable canonical pages verified with unique titles (39–70 chars) and meta descriptions (130–165 chars).
- [x] "Gati Shakti Cargo Terminal" eradicated from all public metadata and schema; exact public name **Gati Shakti Terminal** active.
- [x] "Certified NDT inspection" wording refined to **"non-destructive testing (NDT)"** to strictly align with ASNT Level II personnel and equipment without overclaiming unheld accreditations.
- [x] Homepage title communicates core manufacturing and casting identity: `Kalyani Cast Tech Limited | Freight Containers & Precision Castings`.
- [x] Staging deployment confirmed isolated with zero canonical leakage.
- [ ] Management approval to merge `feature/kct-step5b25a-indexability-correction` into release baseline upon final review.
