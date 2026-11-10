# WP-5B.29 — Corporate Website Image Audit Report
**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.29 (Corporate Website Image Audit, Asset Mapping & Visual Consistency)  
**Role:** Senior Website Visual Director, Digital Asset Manager and Frontend Implementation Lead  
**Audit Status:** COMPLETE & VERIFIED  
**Audit Date:** November 10, 2026  
**Repository Branch:** `feature/kct-step5b25b-discoverability-closure`  
**Protected Release Branch:** `release/kct-website-v1` (FROZEN at `f1e26bb`)  

---

## 1. Executive Summary

This forensic audit evaluates all imagery and visual assets utilized across the active web platform (`Website_Codebase`), comparing them against the 93 original source assets catalogued from authoritative corporate dropzones.

### Key Audit Metrics:
- **Total Public Assets on Disk (`/public/assets` + `/public/images`):** 216 files
  - `Website_Codebase/public/assets/`: 183 files across 8 subdirectories (`castings/`, `company/`, `containers/`, `leadership/`, `manufacturing/`, `rail/`, `shivlakha/`, `wagons/`)
  - `Website_Codebase/public/images/`: 33 files across 3 subdirectories (`leadership/`, `legacy-site/`, `media/`)
- **Referenced Asset Paths in Source Code (`src/`):** 263 asset references across 24 source files
- **Unique Asset URLs Referenced:** 83 unique paths
- **Missing Asset References (404s):** 0 (All 83 referenced paths exist on disk)
- **Authoritative Source Dropzone Assets:** 93 items (64 images, 29 documents)
- **Identified Defects & Remediation Targets:** 6 critical areas (low-resolution cutouts, non-web-safe filenames, duplicate file proliferation, underutilized 8K photoshoot assets, and facility misattribution)

---

## 2. Forensic Analysis of Existing Public Assets

### 2.1 Proliferation of Identical Files Under Multiple Names (Duplicate Hashes)

Forensic cryptographic analysis revealed significant duplication where identical files were copied under different names across subdirectories. Below is the audited duplicate registry:

#### A. Duplicates in `public/assets/manufacturing/`
1. **Hash `57e80e76cf` (1536 × 1024, JPEG, 312.1 KB):**
   - `hero_facade_kct.jpeg`
   - `Rewari Factory.jpg`
   - `Rewari Kalyani Casttech.jpeg`  
   *All three files are byte-for-byte identical, depicting the main exterior facade of Rewari Works.*
2. **Hash `e9dcc9fc6c` (1536 × 1024, PNG, 711.3 KB):**
   - `hero_facade_kct.png`
   - `Rewari Kalyani Casttech.png`  
   *Identical PNG renders of Rewari Works facade.*
3. **Hash `e2bf30194c` (1536 × 1024, JPEG, 345.0 KB):**
   - `Container Boxing Process.jpg`
   - `Industrial Container Boxing Process.jpeg`  
   *Identical files representing container structural boxing fit-up.*
4. **Hash `3faa174f24` (1536 × 1024, JPEG, 282.7 KB):**
   - `Container Final After Logo Designing.jpg`
   - `Precision Metal Fabrication Machines.jpeg`  
   *Identical files representing shopfloor tooling.*
5. **Hash `106ee6a066` (1536 × 1024, JPEG, 297.9 KB):**
   - `Container Painting Process Infographic.jpeg`
   - `Contrs Coming Out from Paint Booth.jpg`  
   *Identical files representing containers exiting the paint booth.*
6. **Hash `6960bc602e` (1448 × 1086, JPEG, 298.6 KB):**
   - `Container Welding Process after Boxing.jpg`
   - `Steel Fabrication Hall in Action.jpeg`  
   *Identical files depicting the welding line.*

#### B. Duplicates in `public/assets/shivlakha/`
1. **Hash `97d569c268` (1581 × 995, JPEG, 191.1 KB):**
   - `Admin Shivlakha.jpeg`
   - `admin.jpeg`  
   *Identical files showing the Shivlakha administrative building.*
2. **Hash `4c39e01a34` (1448 × 1086, JPEG, 250.6 KB):**
   - `Ktech GCT2.jpg`
   - `Ktech Rail Siding2.jpg`
   - `Shivlakha GCT Rail Terminal1.jpeg`  
   *Three identical files showing the operational private rail siding.*
3. **Hash `a63cf08964` (1448 × 1086, JPEG, 237.9 KB):**
   - `Ktech GCT4.jpg`
   - `Ktech Rail Siding3.jpg`
   - `Ktech Rail Siding4.jpg`
   - `Shivlakha GCT Rail Terminal2.jpeg`  
   *Four identical files showing terminal siding and yard trackage.*
4. **Hash `b637f154f8` (1448 × 1086, JPEG, 257.7 KB):**
   - `Ktech Rail Siding Siding n Plant access via rail.jpg`
   - `Ktech Shivlakha GCT.jpeg`
   - `Shivlakha GCT Rail Terminal.jpeg`  
   *Three identical files showing rail siding approach.*

#### C. Duplicates in `public/assets/containers/` and `public/assets/wagons/`
1. **Dwarf Containers (Hash `1eafe39da0`, JPEG, 200.8 KB):**
   - `Dwarf Container.jpeg`
   - `Dwarf Container.jpg`
   - `SS Dwarf Container.jpeg`
   - `SS Steel  Container.jpeg`  
   *Four identical files!*
2. **Car Carriers (Hash `4f89d3180b`, PNG, 2401.9 KB):**
   - `Car Carrier 2.png`
   - `Car Carrier 9 Car.png`
3. **Wagons (Hash `9c97b84f26`, PNG, 2468.9 KB):**
   - `New Container Wagon.png`
   - `Special Wagon Design3.png`
4. **Ro-Ro Wagon (Hash `a73950d6f2`, PNG, 2052.0 KB):**
   - `RORO Wagon Container Concept Stage.png`
   - `RORO Wagon Container.png`

---

## 3. Critical Visual & Technical Defect Analysis

### 3.1 Defect 1: Low-Resolution Cutout Corner Castings in Core Technical Pages
- **Location:** `HomePage.tsx`, `facilities.tsx`, `gallery.tsx`, `manufacturing.index.tsx`, `products-applications.tsx`, `route-assets.ts`.
- **Current Image:** `/assets/castings/corner-castings-for-containers.png` (250 × 170 px, 87.7 KB).
- **Audit Finding:** A tiny 250px isolated graphic cutout is used to represent one of the company's core flagship products (Lloyd's Register EMEA & RDSO Class 'A' approved container corner castings). On high-density desktop displays (Retina/4K), it appears pixelated and lacks industrial authenticity.
- **Root Source Asset:** In `01_Rewari`, authentic high-resolution factory floor photography exists: `CornerCastings_1.jpg` (1536 × 1171 px, 452 KB) and `CornerCastings_2.jpg` (1536 × 1171 px, 381 KB).
- **Remediation:** Prepared web-optimized asset `/assets/castings/corner-castings-stack-rewari.jpg` (1536 × 1171 px, 100.4 KB) and mapped to all primary product and facility components.

### 3.2 Defect 2: Non-Web-Safe Filenames Containing Single Quotes and Spaces
- **Examples:**
  - `/assets/containers/20' ISO Container on rake.png`
  - `/assets/containers/40' Dwarf Container Wooden log.png`
  - `/assets/company/NK & Rly Minister.jpg`
- **Audit Finding:** The presence of unescaped single quotes (`'`) within string literals caused code-analysis tools, URL parsers, and JSX attributes to truncate or misinterpret paths (e.g., in `gallery.tsx` lines 415 and 426). In certain reverse proxy and browser configurations, unencoded single quotes in URLs can result in 400/404 HTTP errors.
- **Remediation:** Generated canonical, web-safe kebab-case filenames:
  - `/assets/containers/20ft-iso-container-standard.png`
  - `/assets/containers/40ft-dwarf-container-breakbulk.png`
  - `/assets/company/naresh-kumar-with-railway-minister.jpg`
  while maintaining backwards compatibility for existing imports.

### 3.3 Defect 3: Underutilization of Canon 8K Container Manufacturing Photoshoot
- **Context:** On September 14–15, 2026, an official on-site professional photoshoot was executed using Canon EOS R5 cameras, capturing 19 ultra-high-resolution photographs (8192 × 5464 px, up to 21 MB each) documenting the complete chronological manufacturing sequence:
  - **Stage 1 (Welding):** `1_CM_Welding_1.JPG` through `4.JPG`
  - **Stage 2 (Shot Blasting):** `2_CM_ShotBlasting_1.JPG` & `2.JPG`
  - **Stage 3 (Paint Booth & Oven Curing):** `3_CM_Paint_1.JPG` through `4.JPG`
  - **Stage 4 (Finishing & Gaskets):** `4_CM_Finishing_1.JPG` through `3.JPG`
  - **Quality Control & Testing:** `QC_1.JPG` & `QC_2.png`
- **Audit Finding:** The live website was relying on older, downscaled 800px images or repeatedly recycling `Industrial Container Fabrication Workshop.png` across multiple stages (Stages 4 and 6 used the exact same image).
- **Remediation:** Processed and deployed 1920px web-optimized assets with high visual acuity:
  - `container-mig-welding-stage.jpg` (1920 × 1280, 201.3 KB)
  - `container-shot-blasting-booth.jpg` (1920 × 1280, 198.6 KB)
  - `container-painting-booth.jpg` (1920 × 1280, 309.0 KB)
  - `container-finishing-assembly.jpg` (1920 × 1280, 347.7 KB)
  - `container-qc-inspection.jpg` (1920 × 1280, 233.0 KB)

### 3.4 Defect 4: Underutilization of 8K Drone Aerial Photography for Gati Shakti Terminal
- **Context:** On September 15, 2026, a DJI FC3582 drone captured an 8K aerial survey (`Rakehandling_GCT_3.JPG`, 8064 × 6048 px, 12.87 MB) showing the complete operational private rail siding, dual concrete wharves, full 45-wagon train rake, and container staging yard at Shivlakha.
- **Audit Finding:** The website was using a single ground-level perspective (`gct-shivlakha-rake-handling-ops.jpg`, 1920 × 1280 px) repeated in 11 different components, failing to showcase the immense 30-acre operational scale of the terminal.
- **Remediation:** Generated and deployed:
  - `gct-shivlakha-aerial-drone-full-siding.jpg` (2560 × 1920, 734.5 KB)
  - `gct-shivlakha-rake-handling-ground.jpg` (1920 × 1280, 170.8 KB)
  - `gct-shivlakha-panoramic-aerial.jpg` (1920 × 1440, 437.4 KB)

### 3.5 Defect 5: Facility Misattribution (Manufacturing vs. Terminal Operations)
- **Audit Finding:** Images of heavy manufacturing workshops and 3D wagon renders were located in `/assets/shivlakha/` (e.g. `Industrial Container Fabrication Workshop.png`, `Special Wagon Design3.png`) and labeled in the gallery as "Shivlakha Container Fabrication & Sub-Assembly Hall".
- **Statutory & Operational Truth:**
  - **Rewari Works (Haryana):** Operational manufacturing plant for containers and steel castings (5 acres, >6,000 sq.m covered sheds, IRS baseline ≥1,000 containers/year).
  - **Shivlakha Hub (Kachchh, Gujarat):** 150-acre multimodal platform. Operational Gati Shakti Terminal (30 acres) with dedicated broad-gauge private rail siding; Inland Container Terminal (30 acres) under development; future container manufacturing facility (60 acres) under phased expansion.
- **Remediation:** Cleared ambiguous labeling; strictly isolated terminal operations (rail tracks, wharves, rakes, reach stackers) to Gati Shakti Terminal, and factory floor fabrication/welding/shot blasting to Container Manufacturing & Rewari Works.

---

## 4. Cross-Reference Inventory Matrix

| Public Asset Path | Dimensions | File Size | Source Asset Match | Current Usages | Quality Rating | Action Taken |
|---|:---:|:---:|---|:---:|:---:|---|
| `/assets/castings/corner-castings-for-containers.png` | 250 × 170 | 87.7 KB | None (Web cutout) | 10 files | POOR (250px) | Upgraded to `/assets/castings/corner-castings-stack-rewari.jpg` (1536px authentic photo) |
| `/assets/company/Kalyani Team.JPG` | 2560 × 1708 | 390.3 KB | `AST-035` (`Kalyani Team.JPG`, 8192px) | 7 files | EXCELLENT | Web-safe version prepared: `kalyani-team-workforce.jpg` |
| `/assets/company/NK & Rly Minister.jpg` | 2560 × 1810 | 386.1 KB | `AST-037` (`NK & Rly Minister.jpg`, 5525px) | 3 files | EXCELLENT | Web-safe version prepared: `naresh-kumar-with-railway-minister.jpg` |
| `/assets/containers/20' ISO Container on rake.png` | 1672 × 941 | 2.27 MB | `AST-071` (`20'_ISO_Container.png`) | 5 files | EXCELLENT | Web-safe version prepared: `20ft-iso-container-standard.png` |
| `/assets/containers/40' Dwarf Container Wooden log.png` | 1920 × 768 | 689.3 KB | `AST-074` / `AST-075` | 3 files | GOOD | Web-safe version prepared: `40ft-dwarf-container-breakbulk.png` |
| `/assets/manufacturing/Container Boxing Process.jpg` | 1536 × 1024 | 345.0 KB | `AST-022` (`Contrman_1.png`) | 2 files | GOOD | Retained; mapped to Stage 3 Sub-Assembly Jigs |
| `/assets/manufacturing/Container Welding Process after Boxing.jpg` | 1448 × 1086 | 298.6 KB | `AST-009` (`1_CM_Welding_1.JPG`) | 4 files | GOOD | Upgraded to high-res `container-mig-welding-stage.jpg` |
| `/assets/shivlakha/gct-shivlakha-rake-handling-ops.jpg` | 1920 × 1280 | 344.4 KB | `AST-001` (`Rakehandling_GCT_1.JPG`) | 11 files | GOOD | Complemented with 8K drone aerial `gct-shivlakha-aerial-drone-full-siding.jpg` |
| `/assets/shivlakha/Admin Shivlakha.png` | 1581 × 995 | 532.1 KB | `AST-028` (`Admin Shivlakha.png`) | 5 files | EXCELLENT | Maintained as canonical administrative headquarters asset |
| `/assets/shivlakha/Detailed Diagram of KTech Shivlakha Project.jpeg` | 1086 × 1448 | 319.7 KB | `AST-029` (Masterplan) | 5 files | EXCELLENT | Maintained as canonical 150-acre civil engineering masterplan |

---

## 5. Audit Conclusion & Strategic Recommendations

1. **Asset Integrity Established:** 100% of website image references have been resolved to authoritative source assets or verified web-safe assets.
2. **Quality Uplift:** Product and manufacturing pages now feature sharp, authentic industrial photography (up to 2560px width) replacing blurry cutouts and duplicated renders.
3. **Operational Clarity:** Physical facilities (Rewari Works vs. Shivlakha Hub) and operational divisions (Container Manufacturing vs. Gati Shakti Terminal) are visually and contextually separated without ambiguity.
4. **Harness Stability:** All 243 automated Vitest tests remain green and passing.
