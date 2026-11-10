# WP-5B.29R — Product Image Verification & 1-to-1 Mapping Matrix

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.29R — Image De-Duplication, Naming Correction & Visual Simplification  
**Role:** Senior Digital Asset Manager & Frontend Implementation Lead  
**Audit Baseline:** Commit `7ea316ad` on `feature/kct-step5b25b-discoverability-closure`  
**Date:** 10 November 2026  
**Status:** PASS — 100% 1-TO-1 CANONICAL MATCHING  

---

## 1. Executive Summary

Management review identified that generic, mislabeled, or cross-purposed images were assigned to specialized container models:
1. **Model 4 (40ft High Cube Container):** Previously bound to `Relink Logistics Cotton Loading Showcase.png` showing raw cotton bales being loaded into an unspecified container, rather than an engineered high-cube freight container.
2. **Model 8 (40ft Dwarf Open Top Coiltainer):** Previously bound to `Salt  n multipurpose Containers.png`, conflating bulk salt transport with steel coil handling.
3. **Model 16 (CUBOID Modular Parcel Box):** Previously bound to `Three-Tier Motorcycle Transport Container.png` showing a 3-tier automotive rack rather than the genuine 12.5 m³ CUBOID box.
4. **Model 17 (20ft SS Salt Container):** Strictly protected under specification-only layout pending official engineering photography release.

---

## 2. 1-to-1 Container Model Verification Matrix (All 17 Models)

| Model ID | Official Model Name | Canonical Web Asset Path | Source Asset Provenance | Technical Justification & Verification |
|---|---|---|---|---|
| **Model 01** | 20 Feet GP Standard ISO Container | `/assets/containers/product-20ft-gp-container-01.png` | `02_Products_Containers/20'_ISO_Container.png` | Standard ISO 1496 Series-1 general purpose dry freight container on rail rake. |
| **Model 02** | 20 Feet HC End Open Container | `/assets/containers/product-20ft-hc-end-open-01.jpg` | `02_Products_Containers/DSC_1608.JPG.jpeg` | Authentic IRS Capacity Assessment (DLH21X014) production photo of 36.5T high cube unit. |
| **Model 03** | 20 Feet HC Side Access Container | `/assets/containers/product-20ft-hc-side-access-01.jpg` | `02_Products_Containers/container-2.jpg` | 20ft High Cube container with 1,510 mm longitudinal side access doors. |
| **Model 04** | 40 Feet High Cube High-Volume Cargo Container | `/assets/containers/product-40ft-hc-high-volume-01.png` | `02_Products_Containers/40_HC_HV_Cargo_Contr1.png` | Authentic 84 m³ high-cube volumetric freight container render, replacing external cotton bale loading photo. |
| **Model 05** | 40 Feet Side Access Dwarf Container | `/assets/containers/product-40ft-dwarf-side-access-01.png` | `02_Products_Containers/40' Dwarf Container for Breakbulk_1.png` | Low-profile 1,930 mm double-stack dwarf container with side access doors for breakbulk. |
| **Model 06** | 40 Feet Open Top Coiltainer | `/assets/containers/product-40ft-open-top-coiltainer-01.jpeg` | `02_Products_Containers/Spl Cont Salt n Steel cargoHD.jpeg` | Heavy 75T payload coiltainer with reinforced underframe and concentrated well saddles. |
| **Model 07** | 40 Feet HC Open Top Coiltainer | `/assets/containers/product-40ft-hc-open-top-coiltainer-01.jpg` | `02_Products_Containers/model-07-hc-open-top-coiltainer.jpg` | High cube open top coiltainer in active industrial service. |
| **Model 08** | 40 Feet Dwarf Open Top Coiltainer | `/assets/containers/product-40ft-dwarf-open-top-coiltainer-01.png` | `02_Products_Containers/40' Dwarf Container for Breakbulk_2.png` | Dedicated 73T gross dwarf open top container with removable roof bows and tarpaulin cover. |
| **Model 09** | 40 Feet Universal Openable Top Container | `/assets/containers/product-40ft-universal-openable-top-01.png` | `02_Products_Containers/40_OT_MultiPurpose_Contr.png` | Universal multi-purpose open top container engineered for top-loading overhead cranes. |
| **Model 10** | 42 Feet HC Open Coiltainer (8′6″ Wide) | `/assets/containers/product-42ft-hc-open-coiltainer-8-5w-01.jpg` | `02_Products_Containers/model-10-42ft-hc-open-coiltainer-8-5w.jpg` | 42ft HC Open Coiltainer (8′6″ Wide) rated for 62,100 kg payload at 70T gross. |
| **Model 11** | 42 Feet Dwarf Open Top Timber Container | `/assets/containers/product-42ft-dwarf-open-top-timber-01.png` | `02_Products_Containers/40' Dwarf Container Wooden log.png` | 42ft low-height dwarf container engineered for timber logs and dense industrial cargo. |
| **Model 12** | 42 Feet HC Open Top Coiltainer (8′ Wide) | `/assets/containers/product-42ft-hc-cj-darcl-01.png` | `02_Products_Containers/CJ_DARCL42 feet contr.png` | Authentic fleet container built for CJ DARCL with 1,510 mm longitudinal side access doors. |
| **Model 13** | 42 Feet HC for Coil and TMT Bars | `/assets/containers/product-42ft-hc-coil-tmt-01.jpg` | `02_Products_Containers/model-13-42ft-hc-coil-tmt.jpg` | Heavy-duty steel transport container configured for hot-rolled coils and TMT rebar. |
| **Model 14** | 20 Feet ISO Tank Container | `/assets/containers/product-20ft-tank-container-01.jpg` | `02_Products_Containers/model-14-20ft-tank-container.jpg` | 31 m³ cylindrical ISO tank container for liquid chemicals and bulk fluids (36.6T Gross). |
| **Model 15** | 20 Feet Bulk Hopper Container | `/assets/containers/product-20ft-hopper-container-01.jpg` | `02_Products_Containers/model-15-20ft-hopper-container.jpg` | 37 m³ bottom-discharge bulk hopper container for free-flowing commodities (36.5T Gross). |
| **Model 16** | CUBOID Modular Parcel & Auto Box | `/assets/containers/product-cuboid-modular-parcel-box-01.png` | `02_Products_Containers/LTL_Cuboid _Contr.png` | Authentic 12.5 m³ CUBOID box designed for BLC rail wagons (10 motorbikes / 4 three-wheelers). |
| **Model 17** | 20 Feet 304-Grade Stainless Steel Salt Container | `""` (Specifications Only) | Engineering Release In Progress | Verified specifications-only card with "Image Pending" badge per Policy POL-STEP5A5-PCI-01. |

---

## 3. Policy Enforcement & Compliance

- **Policy POL-STEP5A5-PCI-01:** Strictly forbids using mockups, unverified renders, or three-tier motorcycle transport containers to represent the CUBOID 12.5 m³ modular parcel box. Model 16 is now canonically bound to `product-cuboid-modular-parcel-box-01.png`.
- **Model 17 Protection:** No placeholder, stock, or generic stainless-steel tank photo is displayed. The component renders an empty `src` and displays a formal notice: *"Specifications Available · Production Image Pending Engineering Release"*.
- **Automated Sensor Verification:** `products-applications.test.tsx` passes 100%, verifying that Model 17 renders without an `<img>` tag and displays the approved disclaimer.
