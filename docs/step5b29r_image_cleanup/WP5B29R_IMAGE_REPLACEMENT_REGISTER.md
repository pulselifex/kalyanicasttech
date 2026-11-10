# WP-5B.29R — Image Replacement Register & Line-by-Line Changelog

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.29R — Image De-Duplication, Naming Correction & Visual Simplification  
**Role:** Senior Digital Asset Manager & Frontend Implementation Lead  
**Audit Baseline:** Commit `7ea316ad` on `feature/kct-step5b25b-discoverability-closure`  
**Date:** 10 November 2026  
**Status:** COMPLETE & COMMITTED  

---

## 1. Replacement Overview

This register documents every individual image reference replacement executed in the source code during WP-5B.29R. All changes were implemented using surgical AST/string replacements without breaking automated sensor suites or altering approved design geometry.

---

## 2. Line-by-Line Replacement Changelog

| # | Old Image Reference | New Canonical Image Reference | Primary Technical & Content Rationale | Modified File(s) & Line Ranges |
|---|---|---|---|---|
| 1 | `/assets/manufacturing/Rewari Factory.jpg` | `/assets/manufacturing/factory-rewari-facade-01.png` | Standardized web-safe kebab-case nomenclature; eliminated duplicate hash `57e80e76cf`. | `route-assets.ts` (L252, L300, L369, L394), `contact.tsx` (L153), `facilities.tsx` (L105, L421), `gallery.tsx` (L178, L222, L279), `ImageSlot.tsx` (L17), `ShivlakhaInteractiveMasterplan.tsx` (L209), `our-journey.tsx` (L27) |
| 2 | `/assets/manufacturing/hero_facade_kct.jpeg` | `/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg` | Eliminated identical image duplication in side-by-side facility cards and gallery. | `facilities.tsx` (L96, L407), `gallery.tsx` (L290) |
| 3 | `/assets/shivlakha/gct-shivlakha-rake-handling-ops.jpg` | `/assets/shivlakha/terminal-shivlakha-aerial-drone-01.jpg` | Eliminated intra-page repetition on `/shivlakha-rail-logistics` by using 8K drone aerial in Hero banner. | `shivlakha-rail-logistics.index.tsx` (L210), `route-assets.ts` (L264, L401) |
| 4 | `/assets/shivlakha/gct-shivlakha-rake-handling-ops.jpg` | `/assets/shivlakha/terminal-shivlakha-rake-handling-01.jpg` | Standardized nomenclature and retained ground-level rake handling in gallery and status components. | `shivlakha-rail-logistics.index.tsx` (L108), `gallery.tsx` (L73, L614), `ShivlakhaStatus.tsx` (L35), `our-journey.tsx` (L77), `route-assets.ts` (L408, L414) |
| 5 | `/assets/shivlakha/Admin Shivlakha.png` / `Admin Shivlakha.jpeg` / `admin.jpeg` | `/assets/shivlakha/terminal-shivlakha-admin-office-01.png` | Standardized kebab-case nomenclature and resolved hash duplicates. | `shivlakha-rail-logistics.index.tsx` (L113), `gallery.tsx` (L86, L579), `route-assets.ts` (L270), `our-journey.tsx` (L67), `ShivlakhaInteractiveMasterplan.tsx` (L283) |
| 6 | `/assets/shivlakha/Admin Shivlakha.jpeg` (at `ict-1`) | `/assets/shivlakha/Detailed Diagram of KTech Shivlakha Project.jpeg` | Eradicated misleading administration building photo from Inland Container Terminal card. | `gallery.tsx` (L649) |
| 7 | `/assets/castings/corner-castings-for-containers.png` | `/assets/castings/factory-rewari-corner-castings-01.jpg` | Replaced 250px low-resolution cutout with high-resolution authentic factory photograph of corner castings batch. | `route-assets.ts` (L57), `gallery.tsx` (L165, L542) |
| 8 | `/assets/manufacturing/Industrial Container Fabrication Workshop.png` (at Stage 4) | `/assets/manufacturing/manufacturing-container-mig-welding-01.jpg` | Provided distinct authentic photograph for Stage 4 (MIG Welding) instead of repeating general workshop shed. | `route-assets.ts` (L77), `gallery.tsx` (L314) |
| 9 | `/assets/manufacturing/Container Painting Process Infographic.png` (at Stage 5) | `/assets/manufacturing/manufacturing-container-paint-booth-01.jpg` | Replaced marketing diagram with authentic photograph of container paint booth and curing facility. | `route-assets.ts` (L87) |
| 10 | `/assets/manufacturing/Industrial Container Fabrication Workshop.png` (at Stage 6 & `eng-1`) | `/assets/manufacturing/manufacturing-container-qc-testing-01.jpg` | Provided dedicated authentic photograph of load testing and dimensional quality inspection bay. | `route-assets.ts` (L97, L312, L388), `gallery.tsx` (L555) |
| 11 | `/assets/manufacturing/Container Boxing Process.jpg` | `/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg` | Standardized container finishing and assembly image path. | `route-assets.ts` (L376) |
| 12 | `/assets/containers/Relink Logistics Cotton Loading Showcase.png` | `/assets/containers/product-40ft-hc-high-volume-01.png` | Decoupled Model 4 from raw cotton loading photo; assigned authentic 84 m³ high-cube container render. | `route-assets.ts` (L125), `gallery.tsx` (L360), `HomeHeroCarousel.tsx` (L75) |
| 13 | `/assets/containers/Dwarf Container.jpg` / `Dwarf Container.jpeg` | `/assets/containers/product-40ft-dwarf-side-access-01.png` | Standardized Model 5 dwarf container render; resolved hash duplicate `1eafe39da0`. | `route-assets.ts` (L131), `gallery.tsx` (L349), `HomePage.tsx` (L148), `manufacturing.index.tsx` (L45) |
| 14 | `/assets/containers/Salt  n multipurpose Containers.png` (at Model 8) | `/assets/containers/product-40ft-dwarf-open-top-coiltainer-01.png` | Decoupled Model 8 from salt container photo; mapped authentic dwarf open-top coiltainer render. | `route-assets.ts` (L149), `gallery.tsx` (L393) |
| 15 | `/assets/containers/Three-Tier Motorcycle Transport Container.png` (at Model 16 & CUBOID) | `/assets/containers/product-cuboid-modular-parcel-box-01.png` | Decoupled CUBOID 12.5 m³ modular box from 3-tier automotive rack per Policy POL-STEP5A5-PCI-01. | `route-assets.ts` (L197), `gallery.tsx` (L125, L371), `innovation.tsx` (L325, L572), `products-applications.tsx` (L312), `HomeHeroCarousel.tsx` (L207) |
| 16 | `/assets/manufacturing/Industrial Container Fabrication Workshop.png` (at `hist-5`) | `/assets/company/team-workforce-workforce-01.jpg` | Decoupled BSE SME public listing corporate milestone from fabrication workshop shed. | `gallery.tsx` (L99, L266) |
| 17 | `/assets/company/NK & Rly Minister.jpg` | `/assets/company/leadership-naresh-kumar-minister-01.jpg` | Standardized kebab-case nomenclature for national double-stack dwarf launch milestone. | `gallery.tsx` (L112, L244), `route-assets.ts` (L222) |
| 18 | `/assets/company/Kalyani Team.JPG` | `/assets/company/team-workforce-workforce-01.jpg` | Standardized kebab-case nomenclature for workforce team photograph. | `route-assets.ts` (L240, L288, L294, L324, L434), `gallery.tsx` (L662) |
| 19 | `/assets/shivlakha/Industrial Container Fabrication Workshop.jpeg` (at `ShivlakhaStatus`) | `/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg` | Attributed container manufacturing facility to Rewari Works rather than mislabeling as Shivlakha shed. | `ShivlakhaStatus.tsx` (L24) |
| 20 | `/assets/shivlakha/Special Wagon Design3.png` (at `ShivlakhaStatus`) | `/assets/wagons/Next-Generation Container Wagon Design.png` | Standardized wagon innovation asset path. | `ShivlakhaStatus.tsx` (L46) |
| 21 | `/assets/shivlakha/terminal-shivlakha-rail-siding-01.jpg` (duplicate key at item 3) | `/assets/shivlakha/terminal-shivlakha-rail-terminal-01.png` | Introduced authentic terminal platform photo (`Shivlakha_GCT_1.png`) to eliminate duplicate key warning. | `shivlakha-rail-logistics.index.tsx` (L118) |

---

## 3. Summary of Files Modified

1. `Website_Codebase/src/content/route-assets.ts`
2. `Website_Codebase/src/routes/shivlakha-rail-logistics.index.tsx`
3. `Website_Codebase/src/routes/gallery.tsx`
4. `Website_Codebase/src/components/site/ShivlakhaStatus.tsx`
5. `Website_Codebase/src/routes/facilities.tsx`
6. `Website_Codebase/src/routes/contact.tsx`
7. `Website_Codebase/src/routes/innovation.tsx`
8. `Website_Codebase/src/routes/products-applications.tsx`
9. `Website_Codebase/src/routes/our-journey.tsx`
10. `Website_Codebase/src/routes/manufacturing.index.tsx`
11. `Website_Codebase/src/components/site/HomeHeroCarousel.tsx`
12. `Website_Codebase/src/components/site/HomePage.tsx`
13. `Website_Codebase/src/components/site/ImageSlot.tsx`
14. `Website_Codebase/src/components/site/ShivlakhaInteractiveMasterplan.tsx`

Total modified files: **14 source files**. All changes verified clean with zero test regressions.
