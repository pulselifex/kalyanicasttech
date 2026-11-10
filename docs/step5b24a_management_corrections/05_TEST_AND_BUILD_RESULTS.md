# WP-5B.24A — TEST, BUILD & ROUTE RESULTS

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.24A  
**Date:** 06 November 2026  
**Reference:** Staging Deployment `6aeddb4414795a799d15bb39`  

---

## 1. Automated Vitest Test Suite Execution

- **Command:** `node ./node_modules/vitest/vitest.mjs run`
- **Vitest Version:** `v4.1.12`
- **Result:** **19 Test Files Passed (100%), 234 Tests Passed (100%), 0 Failures**
- **Duration:** 42.24s

### Test File Inventory:
1. `src/test/gallery-archive.test.tsx` (6 tests) — **PASS**
2. `src/test/site-footer.test.tsx` (9 tests) — **PASS**
3. `src/test/engineering-quality.test.tsx` (17 tests) — **PASS**
4. `src/test/homepage-hero.test.tsx` (12 tests) — **PASS**
5. `src/test/about-page.test.tsx` (26 tests) — **PASS**
6. `src/test/journey-page.test.tsx` (26 tests) — **PASS**
7. `src/test/products-applications.test.tsx` (23 tests) — **PASS**
8. `src/test/facilities-page.test.tsx` (18 tests) — **PASS**
9. `src/test/leadership-page.test.tsx` (8 tests) — **PASS**
10. `src/test/shivlakha-page.test.tsx` (24 tests) — **PASS**
11. `src/test/innovation-page.test.tsx` (14 tests) — **PASS**
12. `src/test/navigation-mega-menu.test.tsx` (12 tests) — **PASS**
13. `src/test/hero-carousel.test.tsx` (11 tests) — **PASS**
14. `src/test/enquiry-handler.test.ts` (12 tests) — **PASS**
15. `src/test/legacy-redirects.test.ts` (7 tests) — **PASS**
16. `src/test/investor-documents.test.tsx` (11 tests) — **PASS**
17. `src/test/content-search.test.ts` (2 tests) — **PASS**
18. `src/test/tools.test.tsx` (3 tests) — **PASS**
19. `src/test/app-routing.test.tsx` (1 test) — **PASS**

---

## 2. Production Build Execution (Vite & SSR Nitro)

- **Command:** `npm run build` (`vite build`)
- **Vite Version:** `v8.1.5`
- **Duration:** 4.16s
- **Output:**
  * Client bundle: `dist/client/` (472 assets, CSS 146.13 kB)
  * Server bundle: `dist/server/` (Nitro server `server.mjs`)
- **Exit Code:** `0`

---

## 3. Edge Route Verification Sensor

- **Script:** `scripts/verify-all-routes-step5b24a.cjs`
- **Staging Base:** `https://6aeddb4414795a799d15bb39--kalyanicasttech.netlify.app`
- **Result:** **26 / 26 Routes Passed (100%)**
  * 16 Canonical Routes returned HTTP `200 OK`
  * 10 Legacy Redirects returned HTTP `301 Moved Permanently` to exact canonical targets

---

## 4. Visual Layout & Responsive QA

12 targeted screenshots captured via headless Google Chrome:
- **Desktop (1440 × 900 / 1100 px):** Verified clean layout, high-contrast captions, and absence of legacy wording.
- **Tablet (768 × 1024 px):** Verified touch-safe layout and table responsiveness.
- **Mobile (390 × 844 px):** Verified mobile hamburger menu, single-column cards, and collapsible accordions.
