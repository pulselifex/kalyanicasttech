# Kalyani Cast Tech Limited — Website Content & UI Change Log
**Document Reference:** `docs/website-content-ui-change-log.md`  
**Execution Date:** 30 October 2026  
**Implementation Phase:** Content, Structure and UI Refinements  
**Status:** Executed & Verified  

---

## 1. Scope & Execution Overview
This change log details the controlled content, page-structure, terminology, photography arrangement, and UI updates executed in accordance with the *Master Implementation Brief: Content, Structure and UI Refinements*.

---

## 2. Page & Component Modifications

### 2.1 Board & Management Page (`src/routes/leadership.tsx`)
- **Section Reorganisation**:
  - Reordered the page hierarchy into the exact statutory sequence:
    1. **Management Team**: Naresh Kumar (Chairman & Managing Director), Jayashree Kumar (Whole-Time Director), Devender Kumar Yadav (Non-Executive Director & Legal Advisor).
    2. **Promoter Group – Experience & Strategic Contribution**: Javed Aslam (Promoter & Strategic Advisor), Jay Bhagnani (Promoter Group & Strategic Advisor), Naresh Kumar (Promoter & Managing Director).
    3. **Independent Directors**: Kumar Sharat Chandra (Independent Director), Sanjeev Negi (Independent Director).
    4. **Key Personnel**: Amit Kumar (Chief Financial Officer), Pankaj Kumar (Company Secretary & Compliance Officer), Ratnesh Mahajan (Financial Advisor).
- **Portrait & Card Standardization**:
  - Maintained consistent `aspect-[4/5]` portrait frames for all profile images.
  - Used balanced 3-column responsive grids for Management Team, Promoter Group, and Key Personnel, and a 2-column centered grid for Independent Directors.
  - Added a formal statutory review note for Jay Bhagnani flagging the earlier corporate filing name (Jai Prakash Bangani).
  - Preserved all committee charters and SEBI LODR governance links.

### 2.2 Facilities & Locations Page (`src/routes/facilities.tsx`)
- **Location Summaries**:
  - Rewari, Haryana: Replaced lengthy descriptions with concise text: *"Foundry and container manufacturing."*
  - Shivlakha, Kachchh, Gujarat: Updated identity to **"Shivlakha Integrated Rail & Logistics Hub"** with concise text: *"Container manufacturing and an expanding rail-linked logistics hub."*
- **Customer Technical Audits Section**:
  - Replaced paragraph with: *"Customer technical audits, classification society surveys and engineering site visits to Rewari Works and the Shivlakha facility can be arranged in advance through our central commercial office."*
  - Removed sentence regarding security clearances and PPE requirements.
- **Milestones**:
  - Updated timeline integration to load the revised `MilestonesLedger2026` component.

### 2.3 Milestones Ledger (`src/components/site/MilestonesLedger2026.tsx`)
- **Milestone Removal**: Completely removed the redundant `20 August 2026` milestone (*"First Container Trial Train Received"*).
- **Terminology Purge**: Eradicated the unapproved phrase *"Rewari-built containers"*.
- **ICD Entry Calibration**: Updated the `10 September 2026` CBIC LoI entry to reference the 25 August 2026 Inter-Ministerial Committee (IMC) review and management target of Q1 FY 2027–28; removed the 1-year statutory window, NA-approved layout, and 114-acre/233,304 sq.m footprint details.
- **GCT Entry**: Factual copy showing inauguration on 15 September 2026.

### 2.4 Shivlakha Status Component (`src/components/site/ShivlakhaStatus.tsx`)
- **Development Sequence Reordered**:
  1. **Container Manufacturing** (Operational) — Stated capacity of 10,000 containers/year with planned expansion to 25,000 containers/year by Q4 FY 2026–27.
  2. **Gati Shakti Cargo Terminal (GCT)** (Operational) — Inaugurated on 15 September 2026; 720 m × 30 m broad-gauge siding.
  3. **Railway Wagon Manufacturing** (Under Development) — Target Q4 FY 2026–27.
  4. **Inland Container Depot (ICD)** (Under Development) — CBIC LoI following 25 August 2026 IMC review; management target Q1 FY 2027–28.
- **Card UI & Ergonomics**:
  - Reduced card height and internal padding (`p-4.5`).
  - Simplified status badges into compact indicators.
  - Eliminated generic "Node" terminology (`Node 01` &rarr; `01`).
  - Renamed footer link to *"Explore Component Details &rarr;"*.

### 2.5 Shivlakha Main Route (`src/routes/shivlakha-rail-logistics.index.tsx`)
- **Infrastructure Readiness Cleanup**:
  - Removed the introductory paragraph block (*"Component Status, Separated by Readiness / Each component is at a different stage..."*).
  - Directly presented the 4 component cards via `<ShivlakhaStatus />`.
- **Identity & Breadcrumb**:
  - Updated breadcrumb from *"Shivlakha Platform"* to **"Shivlakha Integrated Rail & Logistics Hub"**.
  - Updated hero heading and navigation jump link to *"Development Components"*.

### 2.6 Global Navigation & Resources Relocation (`src/content/site.ts`, `SiteHeader.tsx`, `SiteFooter.tsx`)
- **Navigation Menu Cleanup**:
  - Removed **Resources** from the main desktop and mobile navigation dropdowns (`navGroups`).
  - Updated *"Shivlakha Platform"* navigation item to **"Shivlakha Hub"** with sub-link *"Development Components"*.
  - Updated `ctaTarget` so datasheet downloads point to `/products-applications`.
- **Footer Updates (`SiteFooter.tsx`)**:
  - Relocated footer link from `/resources` to `/engineering-quality` (*"Engineering & Quality Certifications"*).
  - Preserved underlying resource sub-routes for document accessibility.

### 2.7 Terminology & Generic "Node" Cleanups
- **Shivlakha Identity**: Updated *"Shivlakha Platform"* to **"Shivlakha Integrated Rail & Logistics Hub"** or **"Shivlakha Hub"** across `HomePage.tsx`, `HomeIntegratedHero.tsx`, `GrowthMatrix.tsx`, `QuickCommercialCapture.tsx`, `about-us.tsx`, `route-assets.ts`, and `pages.json`.
- **Node Terminology Removal**:
  - Replaced *"High-Voltage Dedicated Electrical Distribution Node"* with *"High-Voltage Dedicated Electrical Substation"* in `ShivlakhaInteractiveMasterplan.tsx`.
  - Replaced all "Node 01–04" identifiers with clean component indices.

---

## 3. Files Summary
| File Path | Action | Description of Modification |
|---|---|---|
| `src/routes/leadership.tsx` | Modified | Reordered 4 sections; updated Promoter Group bios; balanced 4:5 cards |
| `src/routes/facilities.tsx` | Modified | Concise location copy; shortened customer audit text; updated naming |
| `src/components/site/MilestonesLedger2026.tsx` | Modified | Removed 20 August milestone & "Rewari-built"; updated ICD & GCT text |
| `src/components/site/ShivlakhaStatus.tsx` | Modified | Exact 4-component order; compact cards; capacity wording; removed "Node" |
| `src/routes/shivlakha-rail-logistics.index.tsx` | Modified | Removed intro disclaimer; direct card presentation; updated breadcrumb |
| `src/content/site.ts` | Modified | Removed Resources from navGroups; updated Shivlakha Hub labels |
| `src/components/site/SiteFooter.tsx` | Modified | Rerouted resource links to Engineering Quality & Certifications |
| `src/components/site/QuickCommercialCapture.tsx` | Modified | Updated facility option labels to Shivlakha Integrated Rail & Logistics Hub |
| `src/components/site/HomePage.tsx` | Modified | Updated caption and section header to Shivlakha Integrated Rail & Logistics Hub |
| `src/components/site/HomeIntegratedHero.tsx` | Modified | Updated CTA to Explore Shivlakha Hub |
| `src/components/site/GrowthMatrix.tsx` | Modified | Updated facility badge to Shivlakha Hub |
| `src/components/site/ShivlakhaInteractiveMasterplan.tsx` | Modified | Replaced electrical "Node" with Substation; updated captions |
| `src/routes/about-us.tsx` | Modified | Updated Pillar 3 heading to Shivlakha Integrated Rail & Logistics Hub |
| `src/routes/resources.index.tsx` | Modified | Updated brochure scope description |
| `src/content/route-assets.ts` | Modified | Updated captions to Shivlakha Hub |
| `src/content/pages.json` | Modified | Replaced all instances of Shivlakha Platform with approved Hub identity |
