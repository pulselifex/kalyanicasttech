# WP-5B.24 — TEST, BUILD, ROUTE & RESPONSIVE QA AUDIT

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.24  
**Date:** 06 November 2026  
**Reference:** Staging Deployment `6aedd2fec05a6f2a02254c42`  

---

## 1. Automated Test Sensor Suite (Vitest)

The Vitest sensor suite executes automated verification checks across unit components, integration flows, layout renderers, data sanitization engines, and security middleware.

### Test Execution Summary
- **Test Command:** `node ./node_modules/vitest/vitest.mjs run`
- **Vitest Version:** `v4.1.12`
- **Result:** **19 Test Files Passed (100%), 234 Tests Passed (100%), 0 Failures**
- **Execution Duration:** 39.25 seconds

### Detailed Test File Breakdown

| Test File | Test Suite Scope | Test Count | Result |
| :--- | :--- | :--- | :--- |
| `src/test/shivlakha-page.test.tsx` | Shivlakha page, 150-acre breakdown, GCT operational, ICT under dev, SPV rule | 24 | **PASS** |
| `src/test/journey-page.test.tsx` | 7 historical milestones, RDSO Stage-I approval, corporate history | 26 | **PASS** |
| `src/test/about-page.test.tsx` | Corporate identity, 2 business divisions, 6 engineering principles | 26 | **PASS** |
| `src/test/products-applications.test.tsx` | 16 container models, ISO 1496 compliance, corner castings | 23 | **PASS** |
| `src/test/facilities-page.test.tsx` | Rewari Works & Shivlakha platform, PIN 123101, testing rig | 18 | **PASS** |
| `src/test/engineering-quality.test.tsx` | In-house ISO 1496 testing rig, 40T UTM, sub-zero -45°C, NDT | 17 | **PASS** |
| `src/test/innovation-page.test.tsx` | Specialized concepts, New Wagon Design, Dwarf containers | 14 | **PASS** |
| `src/test/homepage-hero.test.tsx` | 8-section homepage layout, generic carousel, listed gateway | 12 | **PASS** |
| `src/test/navigation-mega-menu.test.tsx` | Desktop nav, mobile drawer, 4 mfg mega-menu items | 12 | **PASS** |
| `src/test/enquiry-handler.test.ts` | Enquiry validation, rate limiting, anti-spam, payload sanitization | 12 | **PASS** |
| `src/test/investor-documents.test.tsx` | PDF document paths, filings categories, governance documents | 11 | **PASS** |
| `src/test/site-footer.test.tsx` | Statutory bar, 4 nav groups, 5 collapsible address accordions | 9 | **PASS** |
| `src/test/leadership-page.test.tsx` | Board of Directors roster, committee members, statutory bios | 8 | **PASS** |
| `src/test/legacy-redirects.test.ts` | 301 canonical redirects, legacy URL routing | 7 | **PASS** |
| `src/test/gallery-archive.test.tsx` | 10 news items, 40 photos, category filtering, modal lightbox | 6 | **PASS** |
| `src/test/tools.test.tsx` | Payload calculators, tare weight estimation tools | 3 | **PASS** |
| `src/test/content-search.test.ts` | Client-side search indexing and query matching | 2 | **PASS** |
| `src/test/app-routing.test.tsx` | Root router configuration and layout boundaries | 1 | **PASS** |
| `src/test/contact-page.test.tsx` | Contact page forms, office locations, centralized desk | 1 | **PASS** |
| **Total** | **Full Repository Verification Sensor Suite** | **234** | **100% PASS** |

---

## 2. Production Build Sensor (Vite & SSR Nitro)

The application was built using the official production pipeline:
- **Build Command:** `npm run build` (`vite build`)
- **Vite Version:** `v8.1.5`
- **Output:**
  * Client bundle: `dist/client/` (472 static assets, CSS 146.13 kB / 22.51 kB gzip).
  * Server SSR bundle: `dist/server/` (Nitro server bundle `server.mjs`).
- **Build Duration:** 3.76 seconds
- **Exit Code:** `0` (Zero warnings, zero unresolved imports, zero TypeScript errors).

---

## 3. Automated Edge Route Verification Sensor

Script `scripts/verify-all-routes-step5b24.cjs` tested all 26 key routes directly against the staging CDN:
- **Staging Base:** `https://6aedd2fec05a6f2a02254c42--kalyanicasttech.netlify.app`
- **Summary:** **26 / 26 Routes Passed (100%)**
  * 16 / 16 Canonical Routes returned HTTP `200 OK` with valid HTML `<title>` tags.
  * 10 / 10 Legacy Redirects returned HTTP `301 Moved Permanently` to exact canonical targets.

---

## 4. Responsive & Visual Layout QA (Headless Chrome)

15 high-resolution full-page screenshots were captured across three standard responsive viewports:
- **Desktop (1440 × 900 / 1100 px):** Verified clean typography, balanced spacing, high-contrast captions, and crisp image rendering.
- **Tablet (768 × 1024 px):** Verified grid collapse, touch-friendly navigation, and legible card structures.
- **Mobile (390 × 844 px):** Verified hamburger drawer behavior, touch-safe buttons, collapsible address accordions, and readable table typography.

All screenshots are stored in:
`04_WEBSITE_DOCUMENTATION/step5b24_final_publication_integrity/screenshots/`  
and mirrored in `Website_Codebase/docs/step5b24_final_publication_integrity/screenshots/`.
