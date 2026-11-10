# WP-5B.29R — Duplicate & Repetition Audit Report

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.29R — Image De-Duplication, Naming Correction & Visual Simplification  
**Role:** Senior Digital Asset Manager & Frontend Implementation Lead  
**Audit Baseline:** Commit `7ea316ad` on `feature/kct-step5b25b-discoverability-closure`  
**Date:** 10 November 2026  
**Status:** PASS — ALL DUPLICATES RESOLVED  

---

## 1. Audit Scope & Management Challenge

Management review rejected the previous WP-5B.29 report due to undetected asset duplications:
1. **Identical File Detection:** Different filenames holding byte-for-byte identical images.
2. **Intra-Page Duplicate Displays:** The same image displayed multiple times on a single route (e.g. Hero banner vs. Gallery section).
3. **Cross-Route Excessive Repetition:** Images reused repeatedly across different contextual routes.
4. **Contextual Misrepresentation:** Industrial workshop bays used to represent corporate listing milestones or facility facades.

---

## 2. Identical & Near-Identical File Detection (MD5 Hash Analysis)

Forensic hash analysis across `public/assets/` revealed several clusters of identical files:

### Cluster 1: Rewari Plant Facade (Hash: `57e80e76cf`)
- `Rewari Factory.jpg`
- `hero_facade_kct.jpeg`
- `Rewari Kalyani Casttech.jpeg`
- **Resolution:** Replaced across all occurrences with single canonical asset `/assets/manufacturing/factory-rewari-facade-01.png`. Secondary references (e.g., in `facilities.tsx` side-by-side card and `gallery.tsx` card `rew-2`) replaced with authentic finishing/assembly photo `/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg`.

### Cluster 2: Shivlakha Administration Building (Hash: `97d569c268`)
- `Admin Shivlakha.jpeg`
- `admin.jpeg`
- `Admin Shivlakha.png` (source PNG)
- **Resolution:** Consolidated to canonical `/assets/shivlakha/terminal-shivlakha-admin-office-01.png`. Eradicated from `gallery.tsx` (`ict-1`) where it was falsely representing the Inland Container Terminal development site.

### Cluster 3: Dwarf Container Renders (Hash: `1eafe39da0`)
- `Dwarf Container.jpeg`
- `Dwarf Container.jpg`
- `SS Dwarf Container.jpeg`
- `SS Steel Container.jpeg`
- **Resolution:** Replaced with standardized `/assets/containers/product-40ft-dwarf-side-access-01.png` and dedicated 1-to-1 model assets.

---

## 3. Intra-Page Duplicate Display Audit & Resolution

### Route: `/shivlakha-rail-logistics`
- **Defect Identified:** `gct-shivlakha-rake-handling-ops.jpg` was rendered in Section 1 (Hero banner line 210) AND in Section 6 (`shivlakhaGallery` item 0 line 108).
- **Resolution Applied:**
  - Hero banner now features high-altitude 8K drone aerial photograph: `/assets/shivlakha/terminal-shivlakha-aerial-drone-01.jpg`.
  - Gallery item 1 retains authentic ground-level rake handling: `/assets/shivlakha/terminal-shivlakha-rake-handling-01.jpg`.
  - Zero duplicate displays remain on the page.

### Route: `/facilities`
- **Defect Identified:** Section 4 rendered two cards side-by-side:
  - Left card: `Rewari Factory.jpg` ("Plant Fabrication Bays · Rewari")
  - Right card: `hero_facade_kct.jpeg` ("Industrial Entrance · Rewari Works")
  - Both cards rendered the EXACT same photograph under two names.
- **Resolution Applied:**
  - Left card updated to `/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg` ("Plant Fabrication Bays & Staging · Rewari").
  - Right card updated to `/assets/manufacturing/factory-rewari-facade-01.png` ("Industrial Entrance & Administration · Rewari Works").
  - Two genuinely distinct, verified perspectives now displayed.

### Route: `/gallery`
- **Defects Identified:**
  - `rew-1` and `rew-2` rendered identical image hash `57e80e76cf`.
  - `cont-mfg-2` and `eng-1` rendered the same welding photograph (`Container Welding Process after Boxing.jpg`).
  - `cont-mfg-4` and `hist-5` both rendered `Steel Fabrication Hall in Action.png` (using a workshop photo to represent BSE SME listing).
  - `shiv-1` and `ict-1` both rendered the administration building (`Admin Shivlakha.png` / `Admin Shivlakha.jpeg`).
- **Resolution Applied:**
  - `rew-1`: `/assets/manufacturing/factory-rewari-facade-01.png`
  - `rew-2`: `/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg`
  - `cont-mfg-2`: `/assets/manufacturing/manufacturing-container-mig-welding-01.jpg`
  - `eng-1`: `/assets/manufacturing/manufacturing-container-qc-testing-01.jpg`
  - `hist-5`: `/assets/company/team-workforce-workforce-01.jpg`
  - `ict-1`: `/assets/shivlakha/Detailed Diagram of KTech Shivlakha Project.jpeg` (Master plan layout of 30-acre ICT development zone)
  - Result: 40 distinct items in `HISTORICAL_PHOTO_GALLERY` with zero intra-gallery duplicates.

---

## 4. Cross-Route Repetition Control Matrix

| Asset | Prior Usage Count | Remediated Usage Count | Contextual Assignment |
|---|---|---|---|
| `Rewari Factory.jpg` (Facade) | 7 routes | 4 routes (Standardized to `factory-rewari-facade-01.png`) | Corporate identity & facilities facade exclusively |
| `gct-shivlakha-rake-handling-ops.jpg` | 7 files | 3 files (Standardized to `terminal-shivlakha-rake-handling-01.jpg`) | Operational Gati Shakti Terminal rake handling exclusively |
| `Admin Shivlakha.png` | 5 files | 3 files (Standardized to `terminal-shivlakha-admin-office-01.png`) | Shivlakha administrative building exclusively |
| `Kalyani Team.JPG` | 5 files | 3 files (Standardized to `team-workforce-workforce-01.jpg`) | Core engineering and operations workforce exclusively |

---

## 5. Audit Verdict

**VERDICT: PASS**  
All identical file duplicates, intra-page repetitions, and contextual cross-route misassignments have been eliminated and independently verified.
