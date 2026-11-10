# WP-5B.29R — Unresolved & Pending Assets Governance Register

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.29R — Image De-Duplication, Naming Correction & Visual Simplification  
**Role:** Senior Digital Asset Manager & Frontend Implementation Lead  
**Audit Baseline:** Commit `7ea316ad` on `feature/kct-step5b25b-discoverability-closure`  
**Date:** 10 November 2026  
**Status:** MONITORED & SAFELY ENCAPSULATED  

---

## 1. Executive Summary

This register catalogs digital assets, photographs, and technical illustrations that cannot currently be deployed to the public production website due to pending engineering release, raw camera file formats, or sensitive commercial parameters. Each item has a defined holding strategy and safeguard rule.

---

## 2. Unresolved & Pending Assets Register

### 2.1 Model 17 — 20ft 304-Grade Stainless Steel Salt Container
- **Current Status:** Specifications Available · Production Image Pending Engineering Release.
- **Holding Strategy:** Rendered under dedicated "Specifications-Only" layout in `ContainerCatalog.tsx`.
- **Safeguard Rule:**
  - `src: ""` (Empty string; no fallback or stock image permitted).
  - Explicit badge: `"Specifications Available · Image Pending"`.
  - Notice text: *"Authentic photography pending final engineering release"*.
  - No `<img>` tag rendered inside the card banner.
- **Action Required for Release:** Executive sign-off and engineering quality inspection sign-off of first production batch photograph.

### 2.2 Archival Camera RAW Files (DNG Format)
- **Asset Identified:** `03_Shivlakha_Logistics/Rail n Yard Operations/Shivlakha GCT_Aerial_3.DNG` (27.7 MB).
- **Current Status:** Preserved in master archival source folder.
- **Holding Strategy:** Excluded from web builds to prevent excessive bundle sizes and browser decoding incompatibilities. High-resolution web-optimized JPEGs (`terminal-shivlakha-aerial-drone-01.jpg`) deployed in its place.
- **Safeguard Rule:** Never deploy raw DNG or uncompressed TIFF files directly to `Website_Codebase/public/assets/`.

### 2.3 Third-Party Logistics Fleet Branding
- **Assets Identified:**
  - `CJ_DARCL42 feet contr.png` (Model 12 / `product-42ft-hc-cj-darcl-01.png`).
- **Current Status:** Authorized fleet build representation.
- **Holding Strategy:** Retained with appropriate contextual caption attributing the build as a dedicated customer build for domestic express cargo.
- **Safeguard Rule:** Caption must accurately describe the unit as engineered and manufactured by Kalyani Cast Tech for dedicated intermodal operations.

### 2.4 RDSO Stage-I Wagon Prototype Visuals
- **Assets Identified:**
  - `Next-Generation Container Wagon Design.png`.
- **Current Status:** RDSO Stage-I Approval Received; progressing through subsequent approval levels.
- **Holding Strategy:** Displayed exclusively under "Wagon Manufacturing & Development" or "Innovation R&D" with mandatory regulatory disclosure badge.
- **Safeguard Rule:**
  - Mandatory disclaimer: *"New Wagon Design has received RDSO Stage-I approval and is progressing through subsequent levels of approval. Stage-I approval represents concept validation and does not constitute commercial production clearance or rolling-stock availability."*

---

## 3. Governance Conclusion

All pending and unresolved assets are safely encapsulated. Zero placeholder wireframes or unauthorized prototype renders are exposed on the live website.
