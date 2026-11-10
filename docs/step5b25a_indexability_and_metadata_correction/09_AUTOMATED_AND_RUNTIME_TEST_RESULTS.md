# WP-5B.25A — Automated & Runtime Sensor Test Results

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.25A — Search Indexability, Canonical Strategy, Metadata & Structured Data Correction  
**Test Harness:** Vitest 4.1.12 / Vite 8.1.5 / Nitro SSR / Live Netlify Edge  
**Date:** 6 November 2026  
**Status:** `ALL SENSORS GREEN (100% PASS)`  

---

## 1. Automated Vitest Sensor Suite Summary

- **Command:** `node ./node_modules/vitest/vitest.mjs run`
- **Scope:** 20 test files, 243 tests
- **Execution Duration:** 52.11s
- **Pass Rate:** **100% (20 / 20 test files, 243 / 243 unit tests passed)**

```text
Test Files Execution Breakdown:
---------------------------------------------------------------------------------------
✓ src/test/gallery-archive.test.tsx                      (6 tests)   12.9s
✓ src/test/site-footer.test.tsx                          (9 tests)   13.5s
✓ src/test/homepage-hero.test.tsx                       (12 tests)   16.5s
✓ src/test/journey-page.test.tsx                        (26 tests)   18.3s
✓ src/test/engineering-quality.test.tsx                 (17 tests)   18.0s
✓ src/test/hero-carousel.test.tsx                       (11 tests)    5.1s
✓ src/test/navigation-mega-menu.test.tsx                (12 tests)    5.8s
✓ src/test/shivlakha-page.test.tsx                      (24 tests)    5.1s
✓ src/test/facilities-page.test.tsx                     (11 tests)    5.9s
✓ src/test/enquiry-handler.test.ts                      (12 tests)    99ms
✓ src/test/legacy-redirects.test.ts                      (7 tests)    62ms
✓ src/test/seo-metadata.test.ts                          (9 tests)    73ms  [NEW WP-5B.25A]
✓ src/test/investor-documents.test.tsx                  (11 tests)    42ms
✓ src/test/content-search.test.ts                        (2 tests)    14ms
✓ src/test/tools.test.tsx                                (3 tests)    10ms
✓ src/test/app-routing.test.tsx                          (1 test)     23ms
✓ src/test/corporate-governance.test.tsx                 (8 tests)    35ms
✓ src/test/manufacturing-mega-menu.test.tsx             (14 tests)    45ms
✓ src/test/products-applications.test.tsx               (31 tests)   15.2s
✓ src/test/about-page.test.tsx                          (15 tests)    8.1s
---------------------------------------------------------------------------------------
Total: 20 passed (20), 243 passed (243)
```

### Dedicated WP-5B.25A Sensor Coverage (`src/test/seo-metadata.test.ts`):
1. `enforces exact 27 verified indexable canonical routes`: Validates `PRIMARY_CANONICAL_ROUTES` length is exactly 27.
2. `resolves canonical URLs to canonical production domain with self-referencing canonicals`: Validates self-referencing URLs for all core and subpages.
3. `consolidates duplicate subpages to primary canonical targets`: Validates `/containers-solutions/*`, `/manufacturing/*`, `/company/*`.
4. `marks primary routes indexable and duplicate subpages as non-indexable`: Validates boolean indexability flags.
5. `provides complete Open Graph, Twitter cards and JSON-LD schemas across all 27 canonical routes`: Validates tags, dimensions, schema types, and character lengths.
6. `injects ManufacturingPlant schema specifically on /facilities`: Validates Rewari Works schema.
7. `enforces exact Gati Shakti Terminal naming without Cargo in title and LocalBusiness schema`: Verifies elimination of "Cargo" from public title and LocalBusiness name.
8. `ensures no certified NDT overclaim in /engineering-quality meta description`: Verifies replacement with "non-destructive testing (NDT)".
9. `ensures no unapproved Kolkata office exists in /contact meta description`: Verifies strict data hygiene.

---

## 2. Production SSR Bundle Build

- **Command:** `node ./node_modules/vite/bin/vite.js build`
- **Output:** Clean production build, exit code 0 in 4.96s
- **Module Count:** 2,066 modules transformed
- **Asset Breakdown:**
  - Client Scoped CSS: `styles-CgJ2YO72.css` (22.51 kB gzip)
  - Client JS Vendor Bundle: `index-BKlmBV3z.js` (277.27 kB gzip)
  - Nitro SSR Serverless Worker: `server.js` (6.91 kB gzip)

---

## 3. Netlify Staging Deployment Record

- **Deploy ID:** `6aeded590ed2d25a0ee82312`
- **Account ID:** `68a6032224c12528cfd7cb7b`
- **Live Staging URL:** `https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app/`
- **Deploy Duration:** 1m 3.8s
- **Upload Details:** 31 assets + 1 serverless function

---

## 4. Live Edge HTTP Verification Matrix (29 Targets)

Executed via `scripts/verify-edge-staging-step25a.cjs` on the live Netlify Global CDN:

| Target Route | HTTP Status | Canonical Tag Verified | JSON-LD Schema |
| :--- | :--- | :--- | :--- |
| `/` | `200 OK` | `https://kalyanicasttech.com/` | `Corporation, WebSite, Breadcrumbs` |
| `/about-us` | `200 OK` | `https://kalyanicasttech.com/about-us` | `Corporation, WebSite, Breadcrumbs, AboutPage` |
| `/our-journey` | `200 OK` | `https://kalyanicasttech.com/our-journey` | `Corporation, WebSite, Breadcrumbs` |
| `/leadership` | `200 OK` | `https://kalyanicasttech.com/leadership` | `Corporation, WebSite, Breadcrumbs` |
| `/manufacturing` | `200 OK` | `https://kalyanicasttech.com/manufacturing` | `Corporation, WebSite, Breadcrumbs` |
| `/facilities` | `200 OK` | `https://kalyanicasttech.com/facilities` | `Corporation, WebSite, Breadcrumbs, ManufacturingPlant` |
| `/products-applications` | `200 OK` | `https://kalyanicasttech.com/products-applications` | `Corporation, WebSite, Breadcrumbs` |
| `/innovation` | `200 OK` | `https://kalyanicasttech.com/innovation` | `Corporation, WebSite, Breadcrumbs` |
| `/engineering-quality` | `200 OK` | `https://kalyanicasttech.com/engineering-quality` | `Corporation, WebSite, Breadcrumbs` |
| `/investor-relations` | `200 OK` | `https://kalyanicasttech.com/investor-relations` | `Corporation, WebSite, Breadcrumbs` |
| `/gallery` | `200 OK` | `https://kalyanicasttech.com/gallery` | `Corporation, WebSite, Breadcrumbs` |
| `/contact` | `200 OK` | `https://kalyanicasttech.com/contact` | `Corporation, WebSite, Breadcrumbs, ContactPage` |
| `/resources` | `200 OK` | `https://kalyanicasttech.com/resources` | `Corporation, WebSite, Breadcrumbs` |
| `/shivlakha-rail-logistics` | `200 OK` | `https://kalyanicasttech.com/shivlakha-rail-logistics` | `Corporation, WebSite, Breadcrumbs` |
| `/shivlakha-rail-logistics/gati-shakti-terminal` | `200 OK` | `https://kalyanicasttech.com/shivlakha-rail-logistics/gati-shakti-terminal` | `Corporation, WebSite, Breadcrumbs, LocalBusiness` |
| `/shivlakha-rail-logistics/inland-container-terminal` | `200 OK` | `https://kalyanicasttech.com/shivlakha-rail-logistics/inland-container-terminal` | `Corporation, WebSite, Breadcrumbs` |
| `/shivlakha-rail-logistics/cargo-opportunities` | `200 OK` | `https://kalyanicasttech.com/shivlakha-rail-logistics/cargo-opportunities` | `Corporation, WebSite, Breadcrumbs` |
| `/resources/quality-certifications` | `200 OK` | `https://kalyanicasttech.com/resources/quality-certifications` | `Corporation, WebSite, Breadcrumbs` |
| `/resources/corporate-profile-brochures` | `200 OK` | `https://kalyanicasttech.com/resources/corporate-profile-brochures` | `Corporation, WebSite, Breadcrumbs` |
| `/resources/news-media` | `200 OK` | `https://kalyanicasttech.com/resources/news-media` | `Corporation, WebSite, Breadcrumbs` |
| `/investors/financial-information` | `200 OK` | `https://kalyanicasttech.com/investors/financial-information` | `Corporation, WebSite, Breadcrumbs` |
| `/investors/stock-exchange-disclosures` | `200 OK` | `https://kalyanicasttech.com/investors/stock-exchange-disclosures` | `Corporation, WebSite, Breadcrumbs` |
| `/investors/corporate-governance` | `200 OK` | `https://kalyanicasttech.com/investors/corporate-governance` | `Corporation, WebSite, Breadcrumbs` |
| `/investors/shareholder-information` | `200 OK` | `https://kalyanicasttech.com/investors/shareholder-information` | `Corporation, WebSite, Breadcrumbs` |
| `/investors/ipo-corporate-actions` | `200 OK` | `https://kalyanicasttech.com/investors/ipo-corporate-actions` | `Corporation, WebSite, Breadcrumbs` |
| `/investors/investor-grievance-contact` | `200 OK` | `https://kalyanicasttech.com/investors/investor-grievance-contact` | `Corporation, WebSite, Breadcrumbs, ContactPage` |
| `/investors/meetings-presentations` | `200 OK` | `https://kalyanicasttech.com/investors/meetings-presentations` | `Corporation, WebSite, Breadcrumbs` |
| `/robots.txt` | `200 OK` | N/A (Text payload) | N/A (Sitemap: https://kalyanicasttech.com/sitemap.xml) |
| `/sitemap.xml` | `200 OK` | N/A (XML payload) | N/A (Exact count: 27 indexable canonical URLs) |

**Summary:** 29 / 29 targets PASSED (100%).
