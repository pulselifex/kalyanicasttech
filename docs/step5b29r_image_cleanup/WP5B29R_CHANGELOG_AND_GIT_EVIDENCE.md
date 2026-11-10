# WP-5B.29R — Changelog, Verification Evidence & Git Audit Pack

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.29R — Image De-Duplication, Naming Correction & Visual Simplification  
**Role:** Senior Digital Asset Manager & Frontend Implementation Lead  
**Audit Baseline:** Commit `7ea316ad` on `feature/kct-step5b25b-discoverability-closure`  
**Current HEAD Commit:** `1100615`  
**Date:** 10 November 2026  
**Status:** COMPLETE, TESTED & DEPLOYED TO STAGING  

---

## 1. Environment & Branch Integrity Baseline

- **Repository Root:** `Website_Codebase/`
- **Active Feature Branch:** `feature/kct-step5b25b-discoverability-closure`
- **Starting HEAD Commit:** `7ea316ad735772af83781392bc6d0d0b62822b8d`
- **Asset Harmonization Commit:** `b71e51f001fea0937c35ea1856571385f0d34579`
- **Canonical Standardization Commit:** `1100615a63fa54e5699c26beceea114fb42cb83d`
- **Protected Release Branch:** `release/kct-website-v1` at `f1e26bb72a15f8c35665b8cf6444c621bb8114fd` — **100% UNTOUCHED & FROZEN**
- **Production Domain:** `https://kalyanicasttech.com` — **100% UNTOUCHED & FROZEN**
- **Live Deployed Staging Candidate:** Deployment ID `6af2f21bd381edd9b5b64d58` at `https://6af2f21bd381edd9b5b64d58--kalyanicasttech.netlify.app/`
- **Live Edge Header Verification:**
  - `X-Robots-Tag: nofollow, noarchive, noindex` (Single verified token; HTTP 200 OK).

---

## 2. Automated Sensor Verification Suite (Proof of Work)

Automated test harness executed via `cmd /c "cd Website_Codebase && node ./node_modules/vitest/vitest.mjs run --testTimeout=30000"`:

```
Test Files  20 passed (20)
     Tests  243 passed (243)
  Duration  102.03s
```

### Breakdown of Test Suites Passing:
1. `gallery-archive.test.tsx` (6 tests) — PASS
2. `site-footer.test.tsx` (9 tests) — PASS
3. `homepage-hero.test.tsx` (12 tests) — PASS
4. `journey-page.test.tsx` (26 tests) — PASS
5. `engineering-quality.test.tsx` (17 tests) — PASS
6. `about-page.test.tsx` (26 tests) — PASS
7. `hero-carousel.test.tsx` (11 tests) — PASS
8. `products-applications.test.tsx` (23 tests) — PASS
9. `shivlakha-masterplan.test.tsx` (10 tests) — PASS
10. `navigation-mega-menu.test.tsx` (12 tests) — PASS
11. `innovation-page.test.tsx` (14 tests) — PASS
12. `facilities-page.test.tsx` (11 tests) — PASS
13. `shivlakha-page.test.tsx` (24 tests) — PASS
14. `enquiry-handler.test.ts` (12 tests) — PASS
15. `seo-metadata.test.ts` (9 tests) — PASS
16. `investor-documents.test.tsx` (11 tests) — PASS
17. `legacy-redirects.test.ts` (7 tests) — PASS
18. `content-search.test.ts` (2 tests) — PASS
19. `tools.test.tsx` (3 tests) — PASS
20. `app-routing.test.tsx` (1 test) — PASS

---

## 3. Production Build & Deployed Telemetry Sensor Verification

### Build Verification
- Command: `npm run build`
- Client environment: 2066 modules transformed, 0 errors.
- SSR environment: Generated clean server bundle.
- Netlify bundling: `@netlify/build 37.6.1` completed in 1m 49s.

### Live Edge Probe on Staging (`https://6af2f21bd381edd9b5b64d58--kalyanicasttech.netlify.app`):
- `GET /` : 200 OK (`X-Robots-Tag: nofollow, noarchive, noindex`)
- `GET /shivlakha-rail-logistics` : 200 OK (`X-Robots-Tag: nofollow, noarchive, noindex`)
- `GET /products-applications` : 200 OK (`X-Robots-Tag: nofollow, noarchive, noindex`)
- Intra-page rake handling duplication on `/shivlakha-rail-logistics`: **0 occurrences** (hero replaced by `terminal-shivlakha-aerial-drone-01.jpg`).
- Old rake hero on homepage: **0 occurrences** (replaced by `terminal-shivlakha-rake-handling-01.jpg`).
- Mislabeled shed on Shivlakha: **0 occurrences** (attributed to Rewari finishing bay).
- Mislabeled BSE listing card: **0 occurrences** (decoupled from manufacturing hall).
- Policy POL-STEP5A5-PCI-01 compliance:
  - Model 4 decoupled from cotton bales.
  - Model 8 decoupled from salt containers.
  - Model 16 CUBOID decoupled from 3-tier motorcycle racks (`product-cuboid-modular-parcel-box-01.png` assigned).
  - Model 17 maintained specifications-only with image pending notice.
- KMT Single-Sentence Constraint:
  - Exact sentence present: `"The Shivlakha Integrated Project is being developed by Kalyani Cast Tech Limited and operated by SPV KMT Engineering Private Limited"`.
  - Occurrences: Exactly 1 (in `/shivlakha-rail-logistics` intro).
  - Occurrences of "wholly owned subsidiary": **0**.

### Deployed Asset Verification (All HTTP 200 OK with Verified Non-Zero Payloads):
1. `/assets/shivlakha/terminal-shivlakha-aerial-drone-01.jpg` : 200 (image/jpeg, length: 752128)
2. `/assets/manufacturing/factory-rewari-facade-01.png` : 200 (image/png, length: 3445954)
3. `/assets/containers/product-cuboid-modular-parcel-box-01.png` : 200 (image/png, length: 6215310)
4. `/assets/castings/factory-rewari-corner-castings-01.jpg` : 200 (image/jpeg, length: 102853)
5. `/assets/shivlakha/terminal-shivlakha-rail-terminal-01.png` : 200 (image/png, length: 2533900)
6. `/assets/manufacturing/manufacturing-container-mig-welding-01.jpg` : 200 (image/jpeg, length: 206127)
7. `/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg` : 200 (image/jpeg, length: 356051)
8. `/assets/containers/product-20ft-gp-container-01.png` : 200 (image/png, length: 3704269)
9. `/assets/containers/product-40ft-dwarf-side-access-01.png` : 200 (image/png, length: 2838009)

---

## 4. Itemized Summary of Changes Committed

1. **32 Canonical Web-Safe Assets Created & Verified:**
   - Standardized kebab-case format: `[subject]-[location]-[view]-[sequence].[ext]`.
   - Stored in `Website_Codebase/public/assets/` across `castings/`, `company/`, `containers/`, `manufacturing/`, and `shivlakha/`.
2. **16 Source Code Files Remediated & Cleaned:**
   - `route-assets.ts`: Process stages, container models, facility assets, and route bindings updated.
   - `shivlakha-rail-logistics.index.tsx`: Intra-page rake handling duplication eliminated via 8K drone aerial in hero; gallery de-duplicated.
   - `gallery.tsx`: All duplicate hash files removed; 40 unique cards verified; news updates canonicalized.
   - `facilities.tsx`: Side-by-side duplicate cards resolved to two distinct views (Finishing/Staging vs. Facade/Entrance).
   - `ShivlakhaStatus.tsx`: Attributed container fabrication to Rewari; assigned authentic GCT and master plan assets.
   - `contact.tsx`, `innovation.tsx`, `products-applications.tsx`, `our-journey.tsx`, `manufacturing.index.tsx`, `HomeHeroCarousel.tsx`, `HomePage.tsx`, `ImageSlot.tsx`, `ShivlakhaInteractiveMasterplan.tsx`, `EngineeringStandardsSection.tsx`, `seo-metadata.ts`, `about-us.tsx`, `engineering-quality.tsx`, `investor-relations.tsx`: All obsolete paths eliminated.
3. **8 Comprehensive Audit Deliverables Authored & Synced:**
   - `WP5B29R_MASTER_ASSET_REGISTER.md`
   - `WP5B29R_DUPLICATE_AND_REPETITION_AUDIT.md`
   - `WP5B29R_PRODUCT_IMAGE_VERIFICATION.md`
   - `WP5B29R_FACILITY_IMAGE_VERIFICATION.md`
   - `WP5B29R_IMAGE_REPLACEMENT_REGISTER.md`
   - `WP5B29R_VISUAL_QA_REPORT.md`
   - `WP5B29R_UNRESOLVED_ASSETS.md`
   - `WP5B29R_CHANGELOG_AND_GIT_EVIDENCE.md`
   - Mirrored to master strategy repository `04_WEBSITE_DOCUMENTATION/step5b29r_image_cleanup/`.
