# WP-5B.25 — Git Change & Deployment Record

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.25 — SEO, SMO & AIEO Strategy, Technical Audit and Implementation  
**Execution Platform:** Google Antigravity Advanced Agentic Pair  
**Parent Working Branch:** `feature/kct-step5b24a-management-corrections`  
**Parent Working Commit:** `4194f83`  
**Active Working Branch:** `feature/kct-step5b25-seo-smo-aieo`  
**Protected Release Baseline:** `release/kct-website-v1` at `f1e26bb72a15f8c35665b8cf6444c621bb8114fd` (STRICTLY FROZEN)  
**Production Domain:** `https://kalyanicasttech.com` (STRICTLY FROZEN)  
**Netlify Staging Deploy ID:** `6aede2fa05b1aad58c593c61`  
**Live Staging URL:** `https://6aede2fa05b1aad58c593c61--kalyanicasttech.netlify.app/`  
**Date:** 6 November 2026  

---

## 1. Branch Hierarchy & Governance Safeguards

```
[release/kct-website-v1] @ f1e26bb (STRICTLY FROZEN)
       │
       └── [feature/kct-step5b24a-management-corrections] @ 4194f83
              │
              └── [feature/kct-step5b25-seo-smo-aieo] (ACTIVE BRANCH)
                     │
                     ├── feat(seo): structured data (JSON-LD), robots, sitemap, Open Graph
                     ├── test(seo): add automated verification sensor suite
                     └── docs(step5b25): complete 14-part evidence dossier
```

- **Zero Merges into Production:** No pull requests or merges were executed against `release/kct-website-v1`.
- **Zero DNS Modifications:** Domain DNS records at `https://kalyanicasttech.com` were untouched.
- **Zero Production Deploys:** Netlify deployment was executed as an isolated staging preview draft without `--prod`.

---

## 2. Inventory of File Changes

### Source Code & Configuration
1. `Website_Codebase/src/content/seo-metadata.ts` (NEW)
   - Defines `CANONICAL_DOMAIN = "https://kalyanicasttech.com"`.
   - Defines `PRIMARY_CANONICAL_ROUTES` (16 primary routes).
   - Defines `CANONICAL_TARGET_MAP` (consolidating 21 secondary subpages to primary canonical routes).
   - Implements `resolveCanonicalUrl(path)`, `isRouteIndexable(path)`, `getRouteSocialImage(path)`, and `generateStructuredData(path)`.
2. `Website_Codebase/src/content/site.ts` (MODIFIED)
   - Enhanced `pageHead(url)` to inject `resolveCanonicalUrl`, `isRouteIndexable`, complete Open Graph & Twitter Cards, and JSON-LD structured schemas (`scripts: [{ type: "application/ld+json", children: ... }]`).
3. `Website_Codebase/src/content/site-config.ts` (MODIFIED)
   - Updated `getCanonicalUrl(path)` to hard-code canonical production origin `https://kalyanicasttech.com`.
4. `Website_Codebase/src/content/pages.json` (MODIFIED)
   - Refined `seoTitle` and `meta` across 15 pages: lengths standardized to 39–64 chars (titles) and 134–163 chars (meta).
   - Removed unapproved "Kolkata office" reference from `/contact.meta`.
   - Updated operating status descriptions for GCT (Operational) and ICT (Under development, CBIC approval 10 Sept 2026).
5. `Website_Codebase/public/robots.txt` (MODIFIED)
   - Explicitly configured access permissions for `Googlebot`, `Bingbot`, `Applebot`, `Twitterbot`, `LinkedInBot`, `facebookexternalhit`, `GPTBot`, `PerplexityBot`, and `ClaudeBot`.
   - Linked to canonical sitemap `https://kalyanicasttech.com/sitemap.xml`.
6. `Website_Codebase/public/sitemap.xml` (MODIFIED)
   - Purged 301 redirects and legacy aliases; regenerated with exactly 16 canonical indexable URLs, `<lastmod>`, `<changefreq>`, and `<priority>`.

### Test Sensors & Utility Scripts
7. `Website_Codebase/src/test/seo-metadata.test.ts` (NEW)
   - 8 automated Vitest assertions verifying canonical resolution, indexability logic, Open Graph tags, Twitter cards, and JSON-LD schemas.
8. `Website_Codebase/scripts/generate-clean-sitemap.cjs` (NEW)
   - Generates clean XML sitemap with zero redirects.
9. `Website_Codebase/scripts/update-seo-metadata.cjs` (NEW)
   - Programmatically applies approved SEO titles and meta descriptions.
10. `Website_Codebase/scripts/verify-edge-staging.cjs` (NEW)
    - Performs end-to-end edge HTTP audits of all 16 canonical routes and system assets.
11. `Website_Codebase/scripts/capture-step5b25-screenshots.cjs` (NEW)
    - Captures 18 high-resolution desktop, tablet, and mobile staging screenshots.

### Deliverables & Documentation Pack
- `04_WEBSITE_DOCUMENTATION/step5b25_seo_smo_aieo/`:
  1. `01_SEO_SMO_AIEO_EXECUTIVE_AUDIT.md`
  2. `02_CANONICAL_ROUTE_AND_SEO_BASELINE.csv`
  3. `03_KEYWORD_AND_SEARCH_INTENT_MAP.csv`
  4. `04_PAGE_TITLE_META_DESCRIPTION_AND_HEADING_REGISTER.csv`
  5. `05_TECHNICAL_SEO_AND_INDEXABILITY_REPORT.md`
  6. `06_STRUCTURED_DATA_AND_SCHEMA_VALIDATION.md`
  7. `07_IMAGE_SEO_AND_ALT_TEXT_REGISTER.csv`
  8. `08_SOCIAL_METADATA_AND_PREVIEW_AUDIT.csv`
  9. `09_AIEO_ENTITY_AND_ANSWER_READINESS.md`
  10. `10_PERFORMANCE_AND_CORE_WEB_VITALS_REPORT.md`
  11. `11_SEARCH_CONSOLE_AND_ANALYTICS_READINESS.md`
  12. `12_ISSUE_AND_REMEDIATION_REGISTER.csv`
  13. `13_TEST_BUILD_AND_STAGING_VERIFICATION.md`
  14. `14_GIT_CHANGE_AND_DEPLOYMENT_RECORD.md`
  15. `screenshots/` (18 image files)
- Mirrored in `Website_Codebase/docs/step5b25_seo_smo_aieo/`.

---

## 3. Netlify Staging Deployment Record

```text
Netlify Deploy Summary
────────────────────────────────────────────────────────────────
Deploy ID:          6aede2fa05b1aad58c593c61
Account ID:         68a6032224c12528cfd7cb7b
Context:            production (draft preview)
Draft URL:          https://6aede2fa05b1aad58c593c61--kalyanicasttech.netlify.app
Build Duration:     58.6s
Asset Upload:       31 files + 1 function
SSR Worker:         server.js (23.67 kB / 6.91 kB gzip)
Edge Nodes:         Netlify Global CDN (Asia/Pacific active)
Build Status:       COMPLETE / SUCCESS (0 errors)
```

---

## 4. Executed Git Commit Record

```text
Commit Hash: f1206fe
Branch:      feature/kct-step5b25-seo-smo-aieo
Message:     feat(wp-5b.25): complete SEO, SMO & AIEO technical audit and implementation

- Implement centralised SEO/SMO/AIEO metadata engine in src/content/seo-metadata.ts
- Inject Corporation, WebSite, Breadcrumbs, ManufacturingPlant, and LocalBusiness JSON-LD schemas
- Hard-lock canonical URL resolution to https://kalyanicasttech.com across all tags and schemas
- Add comprehensive Open Graph and Twitter Cards with 1200x630 high-contrast authentic previews
- Standardize all 16 canonical SEO titles (39-64 chars) and meta descriptions (134-163 chars)
- Eradicate legacy Kolkata office reference from /contact meta description
- Update robots.txt to explicitly permit Googlebot, Bingbot, Applebot, GPTBot, PerplexityBot, ClaudeBot
- Regenerate public/sitemap.xml to strictly include 16 canonical indexable URLs (0 redirects)
- Add automated test sensor suite src/test/seo-metadata.test.ts (20 test files, 242 tests passing)
- Verify edge staging deployment 6aede2fa05b1aad58c593c61 (16/16 routes HTTP 200 OK)
- Archive 18 full-resolution staging screenshots and complete 14-part evidence documentation pack
```

---

## 5. Work Package Acceptance Verdict

- **Automated Tests:** 242 / 242 PASSING (100%)
- **Production SSR Build:** PASS (Exit code 0)
- **Live Edge Staging:** 16 / 16 ROUTES PASSING (HTTP 200 OK)
- **Protected Release Baseline:** UNTOUCHED (f1e26bb)
- **Production Domain:** FROZEN (https://kalyanicasttech.com)

**Final Classification:** `READY FOR INDEPENDENT REVIEW`.
