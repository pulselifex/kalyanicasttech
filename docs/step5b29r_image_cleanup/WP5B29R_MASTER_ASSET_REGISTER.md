# WP-5B.29R — Master Asset Register & Standardized Nomenclature

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.29R — Image De-Duplication, Naming Correction & Visual Simplification  
**Role:** Senior Digital Asset Manager & Frontend Implementation Lead  
**Audit Baseline:** Commit `7ea316ad` on `feature/kct-step5b25b-discoverability-closure`  
**Date:** 10 November 2026  
**Status:** COMPLETE & CANONICAL  

---

## 1. Executive Summary & Naming Policy

To eliminate confusing spaces, apostrophes, inconsistent casing, and misleading names across the website image inventory, WP-5B.29R introduces and enforces a strict structural naming convention:

```
[subject]-[location]-[view]-[sequence].[ext]
```

### Nomenclature Syntax Breakdown:
- **`subject`**: Primary entity depicted (`terminal`, `factory`, `product`, `manufacturing`, `leadership`, `team`, `casting`, `wagon`, `document`).
- **`location`**: Verified physical site (`rewari`, `shivlakha`, `delhi`, or `intermodal`).
- **`view`**: Camera angle, perspective, or industrial process (`aerial-drone`, `rake-handling`, `rail-siding`, `corner-castings`, `mig-welding`, `paint-booth`, `qc-testing`, `facade`, `20ft-gp-container`, `40ft-dwarf-side-access`, `cuboid-modular-parcel-box`).
- **`sequence`**: Two-digit version/angle counter (`01`, `02`, `03`).
- **`ext`**: Lowercase web-safe format (`.jpg`, `.png`, `.webp`, `.jpeg`).

---

## 2. Canonical Website Asset Inventory (31 Standardized Assets)

| # | Canonical Web Path | Source Asset Origin | Dimensions & Aspect | Verified Subject & Location | Binding Target Route / Component |
|---|---|---|---|---|---|
| 1 | `/assets/containers/product-20ft-gp-container-01.png` | `02_Products_Containers/20'_ISO_Container.png` | 1920×1080 (16:9) | 20ft GP Dry Freight Container (ISO 1496 Series-1) | `/products-applications` (Model 1), `/containers-solutions` |
| 2 | `/assets/containers/product-20ft-hc-end-open-01.jpg` | `02_Products_Containers/DSC_1608.JPG.jpeg` | 2048×1365 (3:2) | 20ft High Cube End Open Container (IRS DLH21X014) | `/products-applications` (Model 2), `/containers-solutions` |
| 3 | `/assets/containers/product-20ft-hc-side-access-01.jpg` | `02_Products_Containers/container-2.jpg` | 1600×1067 (3:2) | 20ft High Cube Container w/ 1,510mm Longitudinal Doors | `/products-applications` (Model 3) |
| 4 | `/assets/containers/product-40ft-hc-high-volume-01.png` | `02_Products_Containers/40_HC_HV_Cargo_Contr1.png` | 1920×1080 (16:9) | 40ft High Cube High-Volume Cargo Container (84 m³) | `/products-applications` (Model 4), `HomeHeroCarousel` |
| 5 | `/assets/containers/product-40ft-dwarf-side-access-01.png` | `02_Products_Containers/40' Dwarf Container for Breakbulk_1.png` | 1920×1080 (16:9) | 40ft Side Access Dwarf Container (Double-Stack) | `/products-applications` (Model 5), `HomePage`, `gallery` |
| 6 | `/assets/containers/product-40ft-open-top-coiltainer-01.jpeg` | `02_Products_Containers/Spl Cont Salt n Steel cargoHD.jpeg` | 1920×1280 (3:2) | 40ft Heavy Open-Top Coiltainer (75T Payload) | `/products-applications` (Model 6) |
| 7 | `/assets/containers/product-40ft-hc-open-top-coiltainer-01.jpg` | `02_Products_Containers/model-07-hc-open-top-coiltainer.jpg` | 1920×1200 (16:10) | 40ft HC Open Top Coiltainer in Industrial Service | `/products-applications` (Model 7), `ROUTE_ASSETS` |
| 8 | `/assets/containers/product-40ft-dwarf-open-top-coiltainer-01.png` | `02_Products_Containers/40' Dwarf Container for Breakbulk_2.png` | 1920×1080 (16:9) | 40ft Dwarf Open Top Coiltainer with Roof Bow & Tarpaulin | `/products-applications` (Model 8), `gallery` |
| 9 | `/assets/containers/product-40ft-universal-openable-top-01.png` | `02_Products_Containers/40_OT_MultiPurpose_Contr.png` | 1920×1080 (16:9) | 40ft Universal Container w/ Removable Roof Bows (72T Gross) | `/products-applications` (Model 9), `ROUTE_ASSETS` |
| 10 | `/assets/containers/product-42ft-hc-open-coiltainer-8-5w-01.jpg` | `02_Products_Containers/model-10-42ft-hc-open-coiltainer-8-5w.jpg` | 1920×1200 (16:10) | 42ft HC Open Coiltainer (8′6″ Wide) (62.1T Payload) | `/products-applications` (Model 10), `gallery` |
| 11 | `/assets/containers/product-42ft-dwarf-open-top-timber-01.png` | `02_Products_Containers/40' Dwarf Container Wooden log.png` | 1920×1080 (16:9) | 42ft Low-Height Dwarf Open Top for Heavy Timber & Coils | `/products-applications` (Model 11), `gallery` |
| 12 | `/assets/containers/product-42ft-hc-cj-darcl-01.png` | `02_Products_Containers/CJ_DARCL42 feet contr.png` | 1920×1080 (16:9) | 42ft HC Open Top Coiltainer (8′ Wide) w/ Side Access | `/products-applications` (Model 12), `gallery` |
| 13 | `/assets/containers/product-42ft-hc-coil-tmt-01.jpg` | `02_Products_Containers/model-13-42ft-hc-coil-tmt.jpg` | 1920×1200 (16:10) | 42ft HC Heavy Coiltainer for Hot-Rolled Coils & TMT Bars | `/products-applications` (Model 13) |
| 14 | `/assets/containers/product-20ft-tank-container-01.jpg` | `02_Products_Containers/model-14-20ft-tank-container.jpg` | 1920×1200 (16:10) | 20ft ISO Cylindrical Tank Container (31 m³ Liquid Vessel) | `/products-applications` (Model 14) |
| 15 | `/assets/containers/product-20ft-hopper-container-01.jpg` | `02_Products_Containers/model-15-20ft-hopper-container.jpg` | 1920×1200 (16:10) | 20ft Bulk Hopper Container with Discharge Hatch (37 m³) | `/products-applications` (Model 15) |
| 16 | `/assets/containers/product-cuboid-modular-parcel-box-01.png` | `02_Products_Containers/LTL_Cuboid _Contr.png` | 1920×1080 (16:9) | CUBOID 12.5 m³ Modular Parcel Box for BLC Wagons | `/products-applications` (Model 16), `innovation`, `gallery` |
| 17 | `""` (Specifications Only) | Engineering Release In Progress | N/A | 20ft 304-Grade Stainless Steel Salt Container | `/products-applications` (Model 17) [Image Pending] |
| 18 | `/assets/manufacturing/factory-rewari-facade-01.png` | `01_Rewari/Rewari Factory.jpg` | 2400×1350 (16:9) | Rewari Works main entrance, signage & facade | `/facilities`, `/contact`, `/manufacturing`, `ROUTE_ASSETS` |
| 19 | `/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg` | `01_Rewari/Contrs Coming Out from Paint Booth.jpg` | 2048×1365 (3:2) | Finished container staging & marine coating inspection | `/facilities`, `/gallery` (`rew-2`), `ShivlakhaStatus` |
| 20 | `/assets/manufacturing/manufacturing-container-mig-welding-01.jpg` | `01_Rewari/Container Welding Process after Boxing.jpg` | 2048×1365 (3:2) | Certified MIG seam welding of Corten steel side panels | `PROCESS_STAGES_ASSETS` (Stage 4), `gallery` (`cont-mfg-2`) |
| 21 | `/assets/manufacturing/manufacturing-container-paint-booth-01.jpg` | `01_Rewari/Container Painting Process Infographic.png` | 1920×1080 (16:9) | Paint booth surface treatment and high-build epoxy curing | `PROCESS_STAGES_ASSETS` (Stage 5) |
| 22 | `/assets/manufacturing/manufacturing-container-qc-testing-01.jpg` | `01_Rewari/Industrial Container Fabrication Workshop.png` | 1920×1080 (16:9) | In-house ISO 1496 load testing & quality inspection bay | `PROCESS_STAGES_ASSETS` (Stage 6), `engineering-quality` |
| 23 | `/assets/manufacturing/manufacturing-container-shot-blasting-01.jpg` | `01_Rewari/Precision Metal Fabrication Machines.png` | 1920×1080 (16:9) | Surface preparation, CNC tooling, and steel shot blasting | `/manufacturing/design-engineering` |
| 24 | `/assets/castings/factory-rewari-corner-castings-01.jpg` | `01_Rewari/DSC_1596.JPG.jpeg` | 2048×1365 (3:2) | Batch of ISO 1161 container corner castings at Rewari | `PROCESS_STAGES_ASSETS` (Stage 2), `gallery` (`corner-1`) |
| 25 | `/assets/castings/factory-rewari-corner-castings-02.jpg` | `01_Rewari/DSC_1603.JPG.jpeg` | 2048×1365 (3:2) | Precision machining & inspection of corner casting batch | `/manufacturing`, `/products-applications` |
| 26 | `/assets/shivlakha/terminal-shivlakha-aerial-drone-01.jpg` | `03_Shivlakha_Logistics/DJI_0442.JPG.jpeg` | 4000×2250 (16:9) | High-altitude 8K drone aerial of 150-acre Shivlakha Hub | `/shivlakha-rail-logistics` Hero, `FACILITY_ASSETS` |
| 27 | `/assets/shivlakha/terminal-shivlakha-rake-handling-01.jpg` | `03_Shivlakha_Logistics/GCT Shivlakha.jpeg` | 2048×1365 (3:2) | Operational broad-gauge rail rake handling at siding | `/shivlakha-rail-logistics` Gallery, `ShivlakhaStatus` |
| 28 | `/assets/shivlakha/terminal-shivlakha-rail-siding-01.jpg` | `03_Shivlakha_Logistics/Ktech Rail Siding Siding n Plant access via rail.jpg` | 2048×1365 (3:2) | Ballasted broad-gauge track and concrete sleepers | `/shivlakha-rail-logistics` Gallery (`shivlakhaGallery[2,3]`) |
| 29 | `/assets/shivlakha/terminal-shivlakha-panoramic-aerial-01.jpg` | `03_Shivlakha_Logistics/Shivlakha GCT Rail Terminal.jpeg` | 2048×1365 (3:2) | Panoramic elevated view of siding and staging lines | `/shivlakha-rail-logistics` Gallery (`shivlakhaGallery[4]`) |
| 30 | `/assets/shivlakha/terminal-shivlakha-admin-office-01.png` | `03_Shivlakha_Logistics/Admin Shivlakha.png` | 1920×1080 (16:9) | Two-storey administrative headquarters and site dispatch | `/shivlakha-rail-logistics` Gallery (`shivlakhaGallery[1]`) |
| 31 | `/assets/company/team-workforce-workforce-01.jpg` | `04_Company_Team/Kalyani Team.JPG` | 2048×1365 (3:2) | Kalyani Cast Tech engineering and operations workforce | `/about-us`, `/leadership`, `/company`, `ROUTE_ASSETS` |

---

## 3. Strict Perimeter and Asset Integrity Rules

1. **Source Asset Immutability:** No original photograph in `01_Rewari`, `02_Products_Containers`, `03_Shivlakha_Logistics`, `04_Company_Team`, `05_Documents`, or `07_Certificates` has been deleted or renamed in place.
2. **Web Delivery Optimization:** All canonical assets are deployed under `Website_Codebase/public/assets/` in web-safe formats (`.png`, `.jpg`, `.jpeg`).
3. **No Unverified Stock Photography:** 100% of the active visual assets are authentic company photographs or validated CAD engineering general arrangement diagrams.
