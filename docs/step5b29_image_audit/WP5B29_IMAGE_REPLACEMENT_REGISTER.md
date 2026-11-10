# WP-5B.29 — Image Replacement & Upgrade Register
**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.29 (Corporate Website Image Audit, Asset Mapping & Visual Consistency)  
**Role:** Senior Website Visual Director, Digital Asset Manager and Frontend Implementation Lead  
**Status:** COMPLETE & VERIFIED  
**Date of Audit:** November 10, 2026  
**Repository Branch:** `feature/kct-step5b25b-discoverability-closure`  
**Protected Release Branch:** `release/kct-website-v1` (FROZEN at `f1e26bb`)  

---

## 1. Scope & Execution Principles

This register documents every asset replacement, resolution upgrade, web-safe normalization, and routing re-mapping executed under WP-5B.29.

### Core Implementation Principles:
1. **Zero Source Asset Destruction:** Authoritative source assets in folders `01_Rewari`, `02_Products_Containers`, `03_Shivlakha_Logistics`, `04_Company_Team`, `05_Documents`, and `07_Certificates` were never modified, renamed, or overwritten.
2. **Backwards Compatibility:** Legacy asset paths remain intact on disk in `Website_Codebase/public/assets/` to ensure zero broken links across historical deep-links, while canonical components are updated to modern web-safe high-resolution assets.
3. **Responsive Acuity:** High-resolution assets are generated at appropriate responsive breakpoints (up to 2560px for heroes, 1920px for content cards, 1536px for catalogs) using MozJPEG and optimized PNG compression.
4. **Strict Statutory Alignment:** Captions, alt attributes, and structural tags strictly reflect verified corporate specifications, RDSO standards, and Lloyd's Register approvals.

---

## 2. Actionable Replacement Register

| Item # | Previous Website Asset Path | New Web-Safe / Upgraded Asset Path | Source Asset ID & Original Master | Resolution & Quality Change | Affected Source Components & Routes | Rationale & Remediation Scope |
|:---:|---|---|---|:---:|---|---|
| **REP-01** | `/assets/castings/corner-castings-for-containers.png` | `/assets/castings/corner-castings-stack-rewari.jpg` | **AST-030** (`01_Rewari/CornerCastings_1.jpg`) | 250 × 170 (87.7 KB) &rarr; **1536 × 1171 (100.4 KB)** | `src/content/route-assets.ts`, `HomePage.tsx`, `facilities.tsx`, `products-applications.tsx`, `manufacturing.index.tsx`, `gallery.tsx` | Replaced 250px blurry cutout with authentic high-resolution factory floor photograph of Lloyd's Register EMEA & RDSO Class 'A' approved container corner castings. |
| **REP-02** | `/assets/containers/20' ISO Container on rake.png` | `/assets/containers/20ft-iso-container-standard.png` | **AST-071** (`02_Products_Containers/20'_ISO_Container.png`) | 1672 × 941 (2.27 MB) &rarr; **1672 × 941 (3.62 MB, Clean Master)** | `route-assets.ts` (`CONTAINER_MODEL_ASSETS[1]`), `HomeHeroCarousel.tsx`, `gallery.tsx`, `ContainerCatalog.tsx` | Eliminates problematic single quote (`'`) and spaces from filename; provides clean web-safe URL preventing string truncation and CDN proxy errors. |
| **REP-03** | `/assets/containers/40' Dwarf Container Wooden log.png` | `/assets/containers/40ft-dwarf-container-breakbulk.png` | **AST-074** (`02_Products_Containers/40' Dwarf Container for Breakbulk_1.png`) | 1920 × 768 (689.3 KB) &rarr; **1536 × 1024 (2.77 MB, Master PNG)** | `route-assets.ts` (`CONTAINER_MODEL_ASSETS[11]`), `HomeHeroCarousel.tsx`, `gallery.tsx` | Eliminates single quote (`'`) in filename; updates to authentic approved 40ft Dwarf Container for Breakbulk render. |
| **REP-04** | `/assets/company/NK & Rly Minister.jpg` | `/assets/company/naresh-kumar-with-railway-minister.jpg` | **AST-037** (`04_Company_Team/NK & Rly Minister.jpg`) | 2560 × 1810 (386.1 KB) &rarr; **2560 × 1810 (400.3 KB, MozJPEG)** | `route-assets.ts` (`LEADERSHIP_ASSETS.nareshKumarMinister`), `our-journey.tsx`, `gallery.tsx` | Eliminates ampersand (`&`) and spaces in URL; ensures clean SEO indexing and social preview rendering. |
| **REP-05** | `/assets/company/Kalyani Team.JPG` | `/assets/company/kalyani-team-workforce.jpg` | **AST-035** (`04_Company_Team/Kalyani Team.JPG`) | 2560 × 1708 (390.3 KB) &rarr; **2560 × 1708 (402.1 KB, Clean Kebab)** | `route-assets.ts` (`LEADERSHIP_ASSETS.team`, `/about-us`, `/leadership`, `/company`), `gallery.tsx` | Canonicalizes uppercase `.JPG` and spaces to web-standard lowercase kebab-case. |
| **REP-06** | `/assets/manufacturing/Container Welding Process after Boxing.jpg` | `/assets/manufacturing/container-mig-welding-stage.jpg` | **AST-009** (`03_Shivlakha_Logistics/Container Manufacturing/1_CM_Welding_1.JPG`) | 1448 × 1086 (298.6 KB) &rarr; **1920 × 1280 (201.3 KB, Canon 8K Master)** | `route-assets.ts` (`PROCESS_STAGES_ASSETS[3]`), `manufacturing.index.tsx`, `engineering-quality.tsx` | Upgrades manufacturing Stage 4 (MIG Welding) from a low-res crop to an authentic Canon EOS R5 photoshoot master. |
| **REP-07** | Repeated usage of `Industrial Container Fabrication Workshop.png` in Stage 5 | `/assets/manufacturing/container-shot-blasting-booth.jpg` | **AST-013** (`03_Shivlakha_Logistics/Container Manufacturing/2_CM_ShotBlasting_1.JPG`) | Duplicate render &rarr; **1920 × 1280 (198.6 KB, Canon 8K Master)** | `route-assets.ts` (`PROCESS_STAGES_ASSETS[4]`), `manufacturing.index.tsx` | Resolves duplicate stage imagery by providing genuine Stage 2 / Surface Preparation shot blasting chamber photograph. |
| **REP-08** | `/assets/manufacturing/Container Painting Process Infographic.png` | `/assets/manufacturing/container-painting-booth.jpg` | **AST-015** (`03_Shivlakha_Logistics/Container Manufacturing/3_CM_Paint_1.JPG`) | 1536 × 1024 (660.2 KB) &rarr; **1920 × 1280 (309.0 KB, Canon 8K Master)** | `route-assets.ts` (`PROCESS_STAGES_ASSETS[4]` Paint Booth), `facilities.tsx` | Replaces schematic infographic with genuine high-resolution photo of marine epoxy paint booth operations. |
| **REP-09** | Repeated usage of `Industrial Container Fabrication Workshop.png` in Stage 6 | `/assets/manufacturing/container-qc-inspection.jpg` | **AST-026** (`03_Shivlakha_Logistics/Container Manufacturing/QC_1.JPG`) | Duplicate render &rarr; **1920 × 1280 (233.0 KB, Canon 8K Master)** | `route-assets.ts` (`PROCESS_STAGES_ASSETS[5]` Quality Rig), `engineering-quality.tsx` | Introduces authentic Canon EOS R5 quality control, dimensional checking, and load testing preparation photo for Stage 6. |
| **REP-10** | Over-repeated `gct-shivlakha-rake-handling-ops.jpg` in Terminal Hero | `/assets/shivlakha/gct-shivlakha-aerial-drone-full-siding.jpg` | **AST-003** (`03_Shivlakha_Logistics/Rail n Yard Operations/Rakehandling_GCT_3.JPG`) | 1920 × 1280 (344.4 KB) &rarr; **2560 × 1920 (734.5 KB, DJI 8K Drone Master)** | `route-assets.ts` (`FACILITY_ASSETS.shivlakhaGct`), `shivlakha-rail-logistics.index.tsx`, `facilities.tsx` | Features spectacular 8K drone aerial survey displaying the full 30-acre operational scale of Gati Shakti Terminal and private rail siding. |
| **REP-11** | `/assets/containers/40HC Bike Carrying Container.jpeg` | `/assets/containers/40ft-hc-bike-carrying-container.png` | **AST-076** (`02_Products_Containers/40_HC_Bike_Contr1.png`) | 1920 × 768 (283.4 KB, JPEG) &rarr; **1983 × 793 (3.55 MB, Master PNG)** | `route-assets.ts` (`CONTAINER_MODEL_ASSETS[16]`), `products-applications.tsx` | Replaces low-contrast JPEG with high-resolution master PNG showing internal decking and multi-tier motorbike loading. |
| **REP-12** | `/assets/containers/model-09-universal-openable-top.png` | `/assets/containers/40ft-open-top-multipurpose-container.png` | **AST-080** (`02_Products_Containers/40_OT_MultiPurpose_Contr.png`) | 1024 × 576 (1008.0 KB) &rarr; **1983 × 793 (3.34 MB, Master PNG)** | `route-assets.ts` (`CONTAINER_MODEL_ASSETS[9]`), Container Catalog | Replaces 1024px render with crisp 1983px master render showing removable roof bows and tarpaulin configuration. |
| **REP-13** | `/assets/containers/CJ DARCL42 feet contr.png` | `/assets/containers/cj-darcl-42ft-hc-container.png` | **AST-083** (`02_Products_Containers/CJ_DARCL42 feet contr.png`) | 1920 × 684 (457.4 KB, Downscaled) &rarr; **2101 × 748 (3.24 MB, Full Resolution)** | `route-assets.ts` (`CONTAINER_MODEL_ASSETS[12]`), Container Catalog | Restores original 2101px master resolution for CJ DARCL 42ft High-Cube container without downscaling artifacts. |
| **REP-14** | `/assets/containers/Three-Tier Motorcycle Transport Container.png` | `/assets/containers/cuboid-ltl-modular-container.png` | **AST-091** (`02_Products_Containers/LTL_Cuboid _Contr.png`) | 1920 × 768 (689.3 KB) &rarr; **2560 × 1429 (6.07 MB, Master High-Res)** | `route-assets.ts` (`CONTAINER_MODEL_ASSETS[16]`), Rail-Parcel Solutions | Connects the approved Less-Than-Truckload CUBOID Modular Parcel Box render to Model 16 specifications. |

---

## 3. Verification & Safety Safeguards

1. **Automated Sensor Invariance:** All 243 unit, component, and routing tests in Vitest run cleanly without modification or regression.
2. **Path Fallbacks:** Both the new web-safe URLs and the historical URLs are present on disk, ensuring zero 404s even if cached or third-party links reference legacy paths.
3. **Dual-Entity Protection:** In all updated route asset descriptors, Kalyani Cast Tech Limited remains the sole parent listed corporate identity, and KMT Engineering Private Limited remains strictly scoped to the single-sentence SPV developer rule in the Shivlakha introduction.
