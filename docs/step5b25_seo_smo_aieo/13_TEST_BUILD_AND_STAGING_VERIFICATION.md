# WP-5B.25 — Test, Build & Staging Verification Report

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.25 — SEO, SMO & AIEO Strategy, Technical Audit and Implementation  
**Execution Platform:** Google Antigravity Advanced Agentic Pair  
**Branch:** `feature/kct-step5b25-seo-smo-aieo`  
**Deploy ID:** `6aede2fa05b1aad58c593c61`  
**Staging Preview URL:** `https://6aede2fa05b1aad58c593c61--kalyanicasttech.netlify.app/`  
**Test Sensor Suite:** Vitest v4.1.12, Vite v8.1.5, Netlify Build CLI v37.6.1, Chrome 130 Headless  
**Date:** 6 November 2026  

---

## 1. Automated Test Sensor Suite Execution

The automated Vitest verification sensor suite was executed across all unit and integration test files:

```bash
cd Website_Codebase
node ./node_modules/vitest/vitest.mjs run
```

### Sensor Execution Log Summary
```text
 RUN  v4.1.12 D:/Kalyani Tech/Kalyani Records/Company Presentation & Brochure/Kalyani Website/Website Content n Working/Website_Codebase

 ✓ src/test/gallery-archive.test.tsx (6 tests)
 ✓ src/test/site-footer.test.tsx (9 tests)
 ✓ src/test/engineering-quality.test.tsx (17 tests)
 ✓ src/test/homepage-hero.test.tsx (12 tests)
 ✓ src/test/journey-page.test.tsx (26 tests)
 ✓ src/test/about-page.test.tsx (26 tests)
 ✓ src/test/products-applications.test.tsx (36 tests)
 ✓ src/test/shivlakha-masterplan.test.tsx (7 tests)
 ✓ src/test/facilities-page.test.tsx (11 tests)
 ✓ src/test/innovation-page.test.tsx (14 tests)
 ✓ src/test/hero-carousel.test.tsx (11 tests)
 ✓ src/test/navigation-mega-menu.test.tsx (12 tests)
 ✓ src/test/shivlakha-page.test.tsx (24 tests)
 ✓ src/test/enquiry-handler.test.ts (12 tests)
 ✓ src/test/legacy-redirects.test.ts (7 tests)
 ✓ src/test/investor-documents.test.tsx (11 tests)
 ✓ src/test/content-search.test.ts (2 tests)
 ✓ src/test/seo-metadata.test.ts (8 tests) [NEW SENSOR SUITE]
 ✓ src/test/tools.test.tsx (3 tests)
 ✓ src/test/app-routing.test.tsx (1 test)

 Test Files  20 passed (20)
      Tests  242 passed (242)
   Start at  19:52:30
   Duration  56.63s
```

**Result:** **100% Pass Rate** across 20 test files and 242 automated assertions.

---

## 2. Production SSR Build Verification

The full production SSR bundle build was executed:

```bash
cd Website_Codebase
npm run build
```

### Build Execution Metrics
- **Vite Client Transformation:** 2,066 modules transformed in 7.59s.
- **Client Output Directory:** `dist/client/`
  - Global CSS (`styles-CgJ2YO72.css`): 146.13 kB (22.51 kB gzip).
  - Main JavaScript (`index-BKlmBV3z.js`): 1,065.35 kB (277.27 kB gzip).
  - Core Router (`routes-BpUC-JFL.js`): 44.11 kB (10.21 kB gzip).
  - Route leaf chunks: 31 chunks averaging 0.16 kB – 0.20 kB gzip.
- **Vite SSR Transformation:** Built in 2.89s.
- **Nitro Server Bundle:** Built in 5.09s (`server.js`: 23.67 kB / 6.91 kB gzip).
- **Exit Code:** `0` (Success, zero fatal errors).

---

## 3. Staging Deployment Record

The build was deployed to Netlify staging as an isolated draft deployment:

```bash
cd Website_Codebase
npx netlify deploy
```

- **Deploy ID:** `6aede2fa05b1aad58c593c61`
- **Draft Preview URL:** `https://6aede2fa05b1aad58c593c61--kalyanicasttech.netlify.app/`
- **Asset Upload:** 31 updated files + 1 serverless function deployed cleanly.
- **Protected Baseline Status:** `release/kct-website-v1` (frozen at commit `f1e26bb72a15f8c35665b8cf6444c621bb8114fd`).
- **Production Domain:** `https://kalyanicasttech.com` (frozen, zero DNS modifications).

---

## 4. Live Edge Staging Verification Matrix

Executed via `scripts/verify-edge-staging.cjs` against `https://6aede2fa05b1aad58c593c61--kalyanicasttech.netlify.app/`:

| Route URL | HTTP Status | Canonical Tag Verified | Open Graph Tags Verified | JSON-LD Schemas Verified | Zero Kolkata Reference | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `/robots.txt` | 200 OK | N/A | N/A | N/A (MIME: text/plain) | Verified | PASS |
| `/sitemap.xml` | 200 OK | N/A | N/A | N/A (MIME: text/xml) | Verified | PASS |
| `/` | 200 OK | `https://kalyanicasttech.com/` | og:title, og:image, og:url | Corporation, WebSite, Breadcrumbs | Verified | PASS |
| `/about-us` | 200 OK | `https://kalyanicasttech.com/about-us` | og:title, og:image, og:url | Corporation, WebSite, Breadcrumbs, AboutPage | Verified | PASS |
| `/our-journey` | 200 OK | `https://kalyanicasttech.com/our-journey` | og:title, og:image, og:url | Corporation, WebSite, Breadcrumbs | Verified | PASS |
| `/leadership` | 200 OK | `https://kalyanicasttech.com/leadership` | og:title, og:image, og:url | Corporation, WebSite, Breadcrumbs | Verified | PASS |
| `/manufacturing` | 200 OK | `https://kalyanicasttech.com/manufacturing` | og:title, og:image, og:url | Corporation, WebSite, Breadcrumbs | Verified | PASS |
| `/facilities` | 200 OK | `https://kalyanicasttech.com/facilities` | og:title, og:image, og:url | Corporation, WebSite, Breadcrumbs, ManufacturingPlant | Verified | PASS |
| `/products-applications` | 200 OK | `https://kalyanicasttech.com/products-applications` | og:title, og:image, og:url | Corporation, WebSite, Breadcrumbs | Verified | PASS |
| `/innovation` | 200 OK | `https://kalyanicasttech.com/innovation` | og:title, og:image, og:url | Corporation, WebSite, Breadcrumbs | Verified | PASS |
| `/engineering-quality` | 200 OK | `https://kalyanicasttech.com/engineering-quality` | og:title, og:image, og:url | Corporation, WebSite, Breadcrumbs | Verified | PASS |
| `/investor-relations` | 200 OK | `https://kalyanicasttech.com/investor-relations` | og:title, og:image, og:url | Corporation, WebSite, Breadcrumbs | Verified | PASS |
| `/gallery` | 200 OK | `https://kalyanicasttech.com/gallery` | og:title, og:image, og:url | Corporation, WebSite, Breadcrumbs | Verified | PASS |
| `/shivlakha-rail-logistics` | 200 OK | `https://kalyanicasttech.com/shivlakha-rail-logistics` | og:title, og:image, og:url | Corporation, WebSite, Breadcrumbs | Verified | PASS |
| `/shivlakha-rail-logistics/gati-shakti-terminal` | 200 OK | `https://kalyanicasttech.com/.../gati-shakti-terminal` | og:title, og:image, og:url | Corporation, WebSite, Breadcrumbs, LocalBusiness | Verified | PASS |
| `/shivlakha-rail-logistics/inland-container-terminal` | 200 OK | `https://kalyanicasttech.com/.../inland-container-terminal` | og:title, og:image, og:url | Corporation, WebSite, Breadcrumbs | Verified | PASS |
| `/contact` | 200 OK | `https://kalyanicasttech.com/contact` | og:title, og:image, og:url | Corporation, WebSite, Breadcrumbs, ContactPage | **Verified (Zero Kolkata)** | PASS |
| `/resources` | 200 OK | `https://kalyanicasttech.com/resources` | og:title, og:image, og:url | Corporation, WebSite, Breadcrumbs | Verified | PASS |

---

## 5. Visual Evidence Archive

All 18 staging screenshots were captured via headless Chrome and archived in:
`04_WEBSITE_DOCUMENTATION/step5b25_seo_smo_aieo/screenshots/` (and mirrored in `Website_Codebase/docs/step5b25_seo_smo_aieo/screenshots/`):

1. `01_homepage_hero_and_seo_heading_desktop-1440.png` (571,047 bytes)
2. `02_manufacturing_division_overview_desktop-1440.png` (939,085 bytes)
3. `03_manufacturing_facilities_rewari_desktop-1440.png` (778,705 bytes)
4. `04_products_and_applications_catalogue_desktop-1440.png` (781,293 bytes)
5. `05_engineering_quality_testing_rig_desktop-1440.png` (150,766 bytes)
6. `06_innovation_and_new_wagon_design_desktop-1440.png` (413,186 bytes)
7. `07_shivlakha_multimodal_platform_desktop-1440.png` (442,528 bytes)
8. `08_gati_shakti_terminal_operational_desktop-1440.png` (501,749 bytes)
9. `09_inland_container_terminal_under_development_desktop-1440.png` (506,159 bytes)
10. `10_investor_relations_statutory_gateway_desktop-1440.png` (302,402 bytes)
11. `11_corporate_journey_milestones_desktop-1440.png` (529,249 bytes)
12. `12_board_and_management_leadership_desktop-1440.png` (243,016 bytes)
13. `13_contact_enquiry_and_footer_desktop-1440.png` (315,354 bytes)
14. `14_resources_and_technical_library_desktop-1440.png` (105,558 bytes)
15. `15_visual_gallery_plants_products_desktop-1440.png` (848,709 bytes)
16. `16_homepage_mobile-390.png` (166,961 bytes)
17. `17_products_catalogue_tablet-768.png` (560,735 bytes)
18. `18_shivlakha_terminal_mobile-390.png` (226,729 bytes)

**Overall Verification Status:** 100% SENSOR & STAGING COMPLIANCE ACHIEVED.
