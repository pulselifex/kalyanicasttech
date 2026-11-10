# WP-5B.25A — Git Change & Staging Deployment Record

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.25A — Search Indexability, Canonical Strategy, Metadata & Structured Data Correction  
**Parent Working Branch:** `feature/kct-step5b25-seo-smo-aieo`  
**Parent Working Commit:** `60849c6` (parent code commit `f1206fe`)  
**Active Working Branch:** `feature/kct-step5b25a-indexability-correction`  
**Protected Release Baseline:** `release/kct-website-v1` at `f1e26bb72a15f8c35665b8cf6444c621bb8114fd` (STRICTLY FROZEN)  
**Production Domain:** `https://kalyanicasttech.com` (STRICTLY FROZEN)  
**Netlify Staging Deploy ID:** `6aeded590ed2d25a0ee82312`  
**Live Staging URL:** `https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app/`  
**Date:** 6 November 2026  
**Status:** `READY FOR INDEPENDENT REVIEW`  

---

## 1. Branch Lineage & Governance Controls

```text
[release/kct-website-v1] @ f1e26bb (STRICTLY FROZEN - ZERO TOUCH)
       │
       └── [feature/kct-step5b25-seo-smo-aieo] @ f1206fe / 60849c6
              │
              └── [feature/kct-step5b25a-indexability-correction] (ACTIVE WORKING BRANCH)
                     │
                     ├── feat(seo): expand indexable canonical routes from 16 to 27
                     ├── fix(naming): exact Gati Shakti Terminal naming (no Cargo)
                     ├── fix(quality): refine certified NDT claim to non-destructive testing (NDT)
                     ├── feat(headers): add X-Robots-Tag staging anti-dilution context headers
                     ├── test(seo): add 9-sensor automated test suite (243/243 green)
                     └── docs(step5b25a): 11-part evidence pack & 18 staging screenshots
```

- **Protected Baseline Untouched:** `release/kct-website-v1` remains at `f1e26bb72a15f8c35665b8cf6444c621bb8114fd`.
- **Zero Production Deploys:** Executed only as draft preview on Netlify (`--prod` flag strictly excluded).
- **Zero DNS Alterations:** Authoritative DNS at `kalyanicasttech.com` remains completely untouched.

---

## 2. File Change Inventory

### Source Code Modifications
1. `Website_Codebase/src/content/seo-metadata.ts`
   - Expanded `PRIMARY_CANONICAL_ROUTES` to **27 indexable canonical routes**.
   - Removed 11 promoted routes from `CANONICAL_TARGET_MAP` to ensure self-referencing canonical URLs.
   - Refined `getRouteBreadcrumbs(path)` to support full hierarchical navigation for Investor Relations, Resources, and Cargo Evaluation.
   - Refined `getRouteSocialImage(path)` to map authentic high-contrast photography for all newly indexable subpages.
   - Corrected LocalBusiness schema to exact name: `Gati Shakti Terminal (Shivlakha)` (eradicated "Cargo").
   - Extended ContactPage schema to `/investors/investor-grievance-contact`.
2. `Website_Codebase/src/content/pages.json`
   - Homepage (`/`): Updated title to `Kalyani Cast Tech Limited | Freight Containers & Precision Castings`.
   - `/engineering-quality`: Updated meta description to replace "certified NDT inspection" with "non-destructive testing (NDT)".
   - `/shivlakha-rail-logistics/gati-shakti-terminal`: Updated `seoTitle` to `Gati Shakti Terminal | Kalyani Cast Tech Limited`.
   - Refined `seoTitle` and `meta` across all 11 promoted subpages with unique, character-balanced copy.
3. `Website_Codebase/src/routes/engineering-quality.tsx`
   - Updated line 249 banner from `Certified NDT` to `Non-Destructive Testing (NDT)`.
4. `Website_Codebase/public/sitemap.xml`
   - Regenerated to contain **exactly 27 canonical indexable URLs**, purging all legacy subpages, duplicates, and redirects.
5. `Website_Codebase/netlify.toml`
   - Added `[context.deploy-preview.headers]` and `[context.branch-deploy.headers]` configuring `X-Robots-Tag: noindex, nofollow, noarchive`.
6. `Website_Codebase/src/test/seo-metadata.test.ts`
   - Updated automated sensor suite to assert 27 indexable routes, self-referencing canonicals, breadcrumbs, exact Gati Shakti naming, and absence of certified NDT overclaims.

---

## 3. Netlify Staging Deployment Record

```text
Netlify Deploy Summary
────────────────────────────────────────────────────────────────
Deploy ID:          6aeded590ed2d25a0ee82312
Account ID:         68a6032224c12528cfd7cb7b
Context:            production (draft preview)
Draft URL:          https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app
Build Duration:     1m 3.8s
Asset Upload:       31 files + 1 function
SSR Worker:         server.js (23.67 kB / 6.91 kB gzip)
Edge Nodes:         Netlify Global CDN (Asia/Pacific active)
Build Status:       COMPLETE / SUCCESS (0 errors)
```

---

## 4. Work Package Acceptance Verdict

- **Automated Tests:** 243 / 243 PASSING (100%)
- **Production SSR Build:** PASS (Exit code 0)
- **Live Edge Staging:** 29 / 29 TARGETS PASSING (HTTP 200 OK)
- **Protected Release Baseline:** UNTOUCHED (`f1e26bb`)
- **Production Domain:** FROZEN (`https://kalyanicasttech.com`)

**Final Classification:** `READY FOR INDEPENDENT REVIEW`.
