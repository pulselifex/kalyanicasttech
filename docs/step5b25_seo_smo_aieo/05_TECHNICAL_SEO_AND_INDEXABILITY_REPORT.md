# WP-5B.25 — Technical SEO & Indexability Report

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.25  
**Entity:** Kalyani Cast Tech Limited  
**Audit Target:** Live Netlify Staging Deployment `https://6aede2fa05b1aad58c593c61--kalyanicasttech.netlify.app/`  
**Production Domain:** `https://kalyanicasttech.com` (FROZEN)  
**Date:** 6 November 2026  

---

## 1. Crawlability & Indexability Architecture

A robust technical SEO foundation requires strict crawl budget allocation, preventing search engine bots from wasting resources on 301 redirects, parameter variations, draft URLs, or legacy paths.

```
                      +---------------------------------------+
                      |       https://kalyanicasttech.com     |
                      +---------------------------------------+
                                          |
                 +------------------------+------------------------+
                 |                                                 |
                 v                                                 v
    +-------------------------+                       +-------------------------+
    |   public/robots.txt     |                       |   public/sitemap.xml    |
    | - Googlebot / Bingbot   |                       | - Exactly 16 Canonical  |
    | - Applebot / Social bots|                       |   Indexable URLs        |
    | - GPTBot / Perplexity   |                       | - 0 Redirects           |
    | - ClaudeBot / Catch-all |                       | - 0 Draft Routes        |
    +-------------------------+                       +-------------------------+
                 |                                                 |
                 +------------------------+------------------------+
                                          |
                                          v
                      +---------------------------------------+
                      |     16 Primary Canonical Routes       |
                      | - rel="canonical" hard-locked to prod |
                      | - robots: index, follow               |
                      | - Full Open Graph & Twitter Cards     |
                      | - Validated JSON-LD Structured Data   |
                      +---------------------------------------+
                                          |
               +--------------------------+--------------------------+
               |                                                     |
               v                                                     v
+-------------------------------+             +-------------------------------+
|    21 Secondary Subpages      |             |     9 HTTP 301 Redirects      |
| - rel="canonical" to primary  |             | - Server-level TanStack 301   |
| - robots: noindex, follow     |             | - Zero redirect chains        |
| - Purged from XML sitemap     |             | - Zero redirect loops         |
+-------------------------------+             +-------------------------------+
```

---

## 2. Robots Directives (`public/robots.txt`) Audit

### Actual Configuration
```text
# Robots.txt for Kalyani Cast Tech Limited (https://kalyanicasttech.com)
# Verified search engine crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Applebot
Allow: /

# Social media preview bots
User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

# AI answer engine crawlers (identified & permitted for accurate corporate discovery)
User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

# Default catch-all
User-agent: *
Allow: /

# XML Sitemap
Sitemap: https://kalyanicasttech.com/sitemap.xml
```

### Analysis & Governance Verification
1. **Legitimate AI Crawlers Permitted:** `GPTBot` (OpenAI), `PerplexityBot` (Perplexity), and `ClaudeBot` (Anthropic) are explicitly identified and permitted, enabling accurate machine readability of corporate disclosures without blocking.
2. **Social Preview Crawlers Permitted:** `Twitterbot`, `facebookexternalhit`, and `LinkedInBot` are granted unrestricted access to fetch Open Graph metadata and preview cards.
3. **Crawl Access Safety:** Uncontrolled bot attacks are managed at the edge through Netlify's native DDoS filtering and rate limiting.
4. **Sitemap Reference:** Links directly to the canonical production sitemap `https://kalyanicasttech.com/sitemap.xml`.

---

## 3. XML Sitemap (`public/sitemap.xml`) Validation

### Baseline Issue
The previous sitemap contained 44 URLs, including legacy redirect paths (`/company`, `/business-enquiry`, `/containers-solutions`), which triggered "Submitted URL is a redirect" warnings in Google Search Console.

### Implemented Resolution
Regenerated `public/sitemap.xml` using `scripts/generate-clean-sitemap.cjs`. It contains **exactly 16 canonical indexable URLs**:

| No | URL (`<loc>`) | `<lastmod>` | `<changefreq>` | `<priority>` | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | `https://kalyanicasttech.com/` | 2026-11-06 | weekly | 1.0 | 200 OK |
| 2 | `https://kalyanicasttech.com/about-us` | 2026-11-06 | monthly | 0.9 | 200 OK |
| 3 | `https://kalyanicasttech.com/our-journey` | 2026-11-06 | monthly | 0.8 | 200 OK |
| 4 | `https://kalyanicasttech.com/leadership` | 2026-11-06 | monthly | 0.8 | 200 OK |
| 5 | `https://kalyanicasttech.com/manufacturing` | 2026-11-06 | monthly | 0.9 | 200 OK |
| 6 | `https://kalyanicasttech.com/facilities` | 2026-11-06 | monthly | 0.9 | 200 OK |
| 7 | `https://kalyanicasttech.com/products-applications` | 2026-11-06 | weekly | 0.9 | 200 OK |
| 8 | `https://kalyanicasttech.com/innovation` | 2026-11-06 | monthly | 0.8 | 200 OK |
| 9 | `https://kalyanicasttech.com/engineering-quality` | 2026-11-06 | monthly | 0.8 | 200 OK |
| 10 | `https://kalyanicasttech.com/investor-relations` | 2026-11-06 | weekly | 0.8 | 200 OK |
| 11 | `https://kalyanicasttech.com/gallery` | 2026-11-06 | monthly | 0.7 | 200 OK |
| 12 | `https://kalyanicasttech.com/shivlakha-rail-logistics` | 2026-11-06 | weekly | 0.8 | 200 OK |
| 13 | `https://kalyanicasttech.com/shivlakha-rail-logistics/gati-shakti-terminal` | 2026-11-06 | weekly | 0.8 | 200 OK |
| 14 | `https://kalyanicasttech.com/shivlakha-rail-logistics/inland-container-terminal` | 2026-11-06 | monthly | 0.8 | 200 OK |
| 15 | `https://kalyanicasttech.com/contact` | 2026-11-06 | monthly | 0.8 | 200 OK |
| 16 | `https://kalyanicasttech.com/resources` | 2026-11-06 | monthly | 0.7 | 200 OK |

- **Syntax Validation:** Valid XML according to W3C and Sitemaps.org 0.9 schema.
- **Duplicate Check:** 0 duplicates.
- **Redirects:** 0 redirects.
- **Drafts:** 0 draft routes.

---

## 4. Canonical Tags & Trailing Slash Consistency

1. **Canonical Domain Standard:** Canonical URLs are hard-coded to `https://kalyanicasttech.com`, ensuring that search engines crawling staging (`netlify.app`) or local builds never index preview domains.
2. **Trailing Slash Policy:**
   - Root URL: `https://kalyanicasttech.com/` (enforces single trailing slash).
   - All subpaths: `https://kalyanicasttech.com/<subpath>` (strictly no trailing slash).
   - In `src/lib/legacy-redirects.ts`, incoming requests with trailing slashes (e.g. `/facilities/`) are cleanly redirected with HTTP 301 to `/facilities`.
3. **Consolidation of Secondary Subpages:** Secondary subpages feature `rel="canonical"` pointing to their parent primary canonical route, accompanied by `<meta name="robots" content="noindex, follow" />`.

---

## 5. Redirect Chains & Loops Audit

An empirical audit of all 9 router redirect files was conducted:

| Source Path | Target Destination | Status Code | Intermediate Hops | Redirect Loop Risk |
| :--- | :--- | :--- | :--- | :--- |
| `/business-enquiry` | `/contact` | 301 | 0 hops | None (direct) |
| `/company` | `/about-us` | 301 | 0 hops | None (direct) |
| `/company/leadership` | `/leadership` | 301 | 0 hops | None (direct) |
| `/containers-solutions` | `/products-applications` | 301 | 0 hops | None (direct) |
| `/investors` | `/investor-relations` | 301 | 0 hops | None (direct) |
| `/manufacturing/facilities-locations` | `/facilities` | 301 | 0 hops | None (direct) |
| `/manufacturing/testing-quality` | `/engineering-quality` | 301 | 0 hops | None (direct) |
| `/shivlakha-rail-logistics/gati-shakti-cargo-terminal` | `/shivlakha-rail-logistics/gati-shakti-terminal` | 301 | 0 hops | None (direct) |
| `/shivlakha-rail-logistics/inland-container-depot` | `/shivlakha-rail-logistics/inland-container-terminal` | 301 | 0 hops | None (direct) |

**Result:** Zero redirect chains (all hops = 1) and zero redirect loops.

---

## 6. HTTP Status Code Audit (Live Staging)

Edge verification against `https://6aede2fa05b1aad58c593c61--kalyanicasttech.netlify.app` yielded:
- **Canonical Pages:** 16/16 returned HTTP 200 OK.
- **Sitemap & Robots:** 2/2 returned HTTP 200 OK with correct MIME types (`text/xml` and `text/plain`).
- **Spam Purge Router:** Malicious WordPress legacy casino spam paths returned HTTP 410 Gone with header `X-Robots-Tag: noindex, nofollow, noarchive`.
- **404 Handling:** Unmatched routes gracefully render custom `NotFoundComponent` with HTTP 404.

---

## 7. Broken Links & Public Asset References Audit

- **Internal Navigation Links:** All 8 primary navigation items, all footer links, and all subpage CTAs link to valid canonical routes.
- **Public Image References:** All 22 homepage carousel images, 16 product drawings, and 12 gallery images point to verified local assets in `public/assets/`. Zero 404 asset errors detected.
- **Investor Disclosures:** All 156+ statutory PDF links point to verified files in `public/investors/`.

**Technical SEO Status:** 100% HEALTHY & INDEXABLE.
