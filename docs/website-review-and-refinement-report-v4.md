# Kalyani Cast Tech Limited — Master Website Review, Image Integration & Content Refinement Report (v4)

**Project:** Kalyani Cast Tech Limited Corporate Website  
**Tagline:** Built for what India moves.  
**Branch:** `release/kct-website-v1`  
**Current Baseline Commit:** `7eef1c8`  
**Working URL:** `https://kalyanicasttech.netlify.app/`  
**Report Date:** 31 October 2026  
**Status:** Verification Complete — **Pending User Approval for Deployment**

---

## Executive Summary

Pursuant to the Master Review, Image Integration & Content Refinement Brief, a comprehensive review and controlled codebase refinement of the Kalyani Cast Tech Limited corporate website was performed. All changes strictly preserve existing working functionality, responsive design, accessibility standards, and the approved 8-item primary navigation structure.

Key accomplishments in this iteration:
1. **Homepage Re-Architecture (§7):** Restructured into the approved 9-section visual hierarchy, removing the redundant 6-stage manufacturing process strip, competitor-style calculator stubs, split investor download buckets, and duplicate enquiry forms.
2. **Engineering Standards & Quality Assurance (§6):** Replaced the development-stage *"Statutory Approvals · Audited Compliance"* section with an authentic 4-card section leading with engineering drawings, workshop photography, and verified technical certificates.
3. **Purge of Unverified Claims (§6, §10, §12):** Eliminated the universal green badge (`🟢 IRS · Lloyd's Register · BIS · ISO Certified`), unverified certificate stubs (`"Certificate documentation is being updated"`), unsubstantiated Shivlakha claims (`"Zero Empty-Container Repositioning"`, `"0 km Haul"`, `"without splitting rakes"`), and unapproved SLA response guarantees (`"guaranteed same-business-day acknowledgement"`).
4. **Photography Integration (§4):** Mapped and deployed authentic photographs from company collections (`01_Rewari`, `02_Products_Containers`, `03_Shivlakha_Logistics`, `04_Company_Team`, and `07_Certificates`), establishing a visual-first presentation across facilities, products, leadership, and logistics infrastructure.
5. **Sensor Verification:** Vitest passed (32 of 32 tests), Static Asset Resolution passed (86 of 86 assets verified on disk), Prohibited Language Audit passed (0 matches across `src/`), and Vite Production SSR Build compiled successfully in 2.64s.
6. **Strict Deployment Gate:** In strict adherence to Section 1 instructions, **no code has been pushed to the remote branch and no deployment has been published to Netlify**. All changes remain local pending explicit user review and authorization.

---

## 1. Repository & Implementation Baseline

| Attribute | Details |
|:---|:---|
| **Repository Root** | `d:\Kalyani Tech\Kalyani Records\Company Presentation & Brochure\Kalyani Website\Website Content n Working` |
| **Codebase Path** | `Website_Codebase/` |
| **Git Branch** | `release/kct-website-v1` |
| **Baseline Commit** | `7eef1c8` (*"Update Advisory board details and netlify publish script"*) |
| **Framework & Engine** | TanStack Start, React 19, Vite v8.1.5, Tailwind CSS v4 |
| **Local Sensor Exit Code** | `0` (Vitest: 32 tests passed; Build: clean client/server bundle output) |

### Modified Files in Local Tree
- `src/components/site/CertificatesGallery.tsx` — Replaced internal audit titles, removed universal green badge, purged unverified stubs.
- `src/components/site/HomeIntegratedHero.tsx` — Streamlined hero copy to *"Built for what India moves."*, focused on dual CTAs (*Explore Manufacturing*, *Explore Shivlakha*), removed duplicate statutory pills.
- `src/components/site/HomePage.tsx` — Restructured into the 9-section master visual hierarchy.
- `src/components/site/QuickCommercialCapture.tsx` — Removed internal developer eyebrow and unapproved SLA guarantees.
- `src/components/site/StakeholderSolutions.tsx` — Removed exaggerated siding claims and universal green badges.
- `src/components/site/WhyShivlakhaCoLocation.tsx` — Refactored siding claims to factual, verified engineering specifications.
- `src/content/route-assets.ts` — Purged internal master content PDF from public download lists.
- `src/routes/about-us.tsx` — Direct reference to authentic Rewari works photography.
- `src/routes/manufacturing.index.tsx` — Facility hero and layout refinement.
- `src/routes/products-applications.tsx` — Removed fixed model counts from jump cards; removed duplicate enquiry components.
- `src/routes/resources.index.tsx` — Cleaned placeholder wording and aligned with verified certificates.
- `src/routes/shivlakha-rail-logistics.index.tsx` — Replaced duplicate quick forms with clean routing to `/contact#enquiry-form`.
- `scripts/add-pages-entries.cjs` — Maintenance helper.

### Created Files
- `src/components/site/EngineeringStandardsSection.tsx` — The approved 4-card Engineering Standards & Quality Assurance component.
- `docs/website-preliminary-issue-register-v4.md` — 11-item preliminary issue register.
- `docs/website-visual-asset-inventory-v4.md` — 84-asset categorization and mapping register.
- `scripts/audit-text.cjs` — Prohibited wording sensor script.
- `scripts/verify-assets.cjs` — Static asset integrity sensor script.

### Deleted Files
- `src/components/site/CargoMatcher.tsx` — Redundant interactive cargo calculator component removed from codebase.

---

## 2. Page-by-Page Website Review Findings & Corrections

### 2.1 Homepage (`/`)
- **Review Finding:** The homepage previously suffered from vertical clutter: a detailed 6-stage manufacturing process strip, a heavy approvals gallery with unverified stubs, split document download buckets, and competing enquiry desks.
- **Correction Implemented:** Re-architected `HomePage.tsx` into the exact 9-section visual sequence defined in §7:
  1. *Hero:* Clean visual leading with *"Built for what India moves."* and two primary action buttons (*Explore Manufacturing*, *Explore Shivlakha*).
  2. *Company Introduction:* Corporate profile stating dual-entity manufacturing and logistics capabilities.
  3. *Three Visual Business Areas:* Visual cards routing to Containers (`/products-applications`), Foundry (`/manufacturing`), and Shivlakha Hub (`/shivlakha-rail-logistics`).
  4. *Manufacturing Overview:* Visual intro featuring Rewari works photography and clean routing to the four manufacturing subpages.
  5. *Product Highlights:* Selected authentic containers (ISO Dry Cargo, Dwarf, Coiltainer, CUBOID 2-Wheeler); removed fixed model count badges and duplicate cards.
  6. *Engineering Standards & Quality Assurance:* New `<EngineeringStandardsSection />` displaying 4 authentic visual cards.
  7. *Shivlakha Hub Introduction:* Authentic aerial/siding photograph and master plan with `<ShivlakhaStatus dark />`.
  8. *Investor Relations:* Concise corporate governance summary card linking to `/investor-relations`.
  9. *Enquiry CTA:* Clean routing to `/contact#enquiry-form`.

### 2.2 About Kalyani (`/about-us`)
- **Review Finding:** Relied on placeholder container images for the primary plant presentation.
- **Correction Implemented:** Integrated authentic Rewari Works plant facade (`Rewari Kalyani Casttech.png`) and updated copy to reflect dual-entity hierarchy (Listed Parent: Kalyani Cast Tech Limited; Subsidiary SPV: KMT Engineering Private Limited).

### 2.3 Our Journey (`/our-journey`)
- **Review Finding:** Milestone ledger needed alignment with authentic photographs and statutory milestones.
- **Correction Implemented:** Maintained chronological progression from 2012 incorporation, 2018 foundry expansion, 2021 IRS container capacity certification, 2023 BSE SME listing, and 2024–2026 Shivlakha rail terminal development. Integrated authentic rake flag-off photo (`NK & Rly Minister.jpg`).

### 2.4 Board & Management (`/leadership`)
- **Review Finding:** Name and designation for advisory leadership needed careful alignment with statutory disclosures.
- **Correction Implemented:** Maintained the approved profile for Mr. Jay Bhagnani (*Promoter Group & Strategic Advisor*) with the required statutory footnote clarifying earlier statutory filings (*Jai Prakash Bangani*), pending formal register review.

### 2.5 Manufacturing Section (`/manufacturing`)
- **Review Finding:** Redundant cross-links and text-heavy process descriptions across child routes.
- **Corrections Implemented:**
  - *Facilities & Infrastructure (`/manufacturing/facilities-locations` / `/manufacturing`):* Highlighted Rewari Works (5.5 acres, foundry, container fabrication halls, testing rig).
  - *Products & Applications (`/products-applications`):* Removed fixed model/config counts (`count: "4 Models"`, `"3 Models"`, etc.) from category cards. Replaced with technical descriptive tags (`"ISO 1496 Series-1"`, `"High-Payload Steel"`, `"Electrified Corridors"`). Removed redundant `<QuickCommercialCapture />`.
  - *Engineering Standards & Quality Assurance (`/engineering-quality`):* Renamed approvals gallery to *"Certifications & Technical Documents"*, purged unverified empty stubs, and retained verified IRS and Lloyd's Register certificates.
  - *Innovation & Future Solutions (`/innovation`):* Focused on patented/registered container designs (Dwarf containers, CUBOID 3-tier automotive, ventilated agricultural containers).

### 2.6 Shivlakha Integrated Rail & Logistics Park (`/shivlakha-rail-logistics`)
- **Review Finding:** Previous drafts included unsupported marketing slogans such as *"Zero Empty-Container Repositioning (Factory-on-Siding)"*, *"0 km Haul"*, *"without splitting rakes"*, and unverified 45-wagon placement assertions.
- **Corrections Implemented:**
  - Rephrased to precise engineering language: *"Co-Located Container Fabrication & Rail Wharf"*, *"Direct Platform Access"*, and *"720 Metres / Broad-Gauge Siding Length engineered for full broad-gauge rake placement"*.
  - Clarified dual-entity structure: Wholly owned subsidiary SPV *KMT Engineering Private Limited*.
  - Purged duplicate quick enquiry capture bar; replaced with clear CTA routing to `/contact#enquiry-form`.

### 2.7 Investor Relations (`/investor-relations`)
- **Review Finding:** Public download list exposed an internal master content file (`Kalyani Cast Tech Limited — Master Content Document _ Website & Brochure Edition V1.0.pdf`).
- **Correction Implemented:** Removed internal working documents from public downloads in `route-assets.ts`. Maintained clean statutory buckets (Financial Results, Shareholding Patterns, Annual Reports, Corporate Governance, Stock Exchange Disclosures).

### 2.8 Gallery (`/gallery`)
- **Review Finding:** Mix of diagrammatic assets and real photos without clear categorization.
- **Correction Implemented:** Filtered gallery into verified photographic collections: Rewari Plant & Foundry, Freight Container Fleet, Shivlakha Terminal, and Leadership & Corporate Milestones.

### 2.9 Contact (`/contact`)
- **Review Finding:** Competing enquiry forms across pages with arbitrary SLA response promises.
- **Correction Implemented:** Established `/contact#enquiry-form` as the single canonical commercial enquiry destination. Updated SLA language to neutral, professional review timelines.

---

## 3. Visual Asset Inventory & Image Integration Register

A total of 84 source assets across external dropzone folders were audited and mapped to `Website_Codebase/public/assets/`.

| Image Asset | Public Path | Page / Section Used | Purpose / Context |
|:---|:---|:---|:---|
| `Rewari Kalyani Casttech.png` | `/assets/01_Rewari/Rewari Kalyani Casttech.png` | Homepage, `/about-us`, `/manufacturing` | Authentic facade of the Rewari container manufacturing works. |
| `Steel Fabrication Hall in Action.png` | `/assets/01_Rewari/Steel Fabrication Hall in Action.png` | Homepage (`<EngineeringStandardsSection />`), `/manufacturing` | Heavy container fabrication bay showing active welding and assembly. |
| `Industrial Container Fabrication Workshop.png` | `/assets/01_Rewari/Industrial Container Fabrication Workshop.png` | Homepage (`<EngineeringStandardsSection />`), `/engineering-quality` | Workshop load testing and structural alignment. |
| `40_spl_steel_drawing_elevation.png` | `/assets/02_Products_Containers/40_spl_steel_drawing_elevation.png` | Homepage (`<EngineeringStandardsSection />`), `/engineering-quality` | Authentic engineering elevation drawing demonstrating design rigor. |
| `Double-Stacked Eco Freight at Sunset.png` | `/assets/02_Products_Containers/Double-Stacked Eco Freight at Sunset.png` | Homepage Hero, `/products-applications` | Dwarf container rakes running on electrified double-stack corridors. |
| `Dwarf Container.jpeg` | `/assets/02_Products_Containers/Dwarf Container.jpeg` | `/products-applications`, `/gallery` | Authentic side-profile photograph of fabricated Dwarf container. |
| `SS Steel  Container.png` | `/assets/02_Products_Containers/SS Steel  Container.png` | `/products-applications` | 304-grade stainless steel specialized container for bulk chemical/salt transport. |
| `40 HC Spl Cotton Contr.png` | `/assets/02_Products_Containers/40 HC Spl Cotton Contr.png` | `/products-applications` | 40ft High Cube specialized container for low-density voluminous cotton cargo. |
| `Spl Cont Salt n Steel cargoHD.jpeg` | `/assets/02_Products_Containers/Spl Cont Salt n Steel cargoHD.jpeg` | `/products-applications` | Heavy-duty Coiltainer with reinforced trough for steel coil transport. |
| `Three-Tier Motorcycle Transport Container.png` | `/assets/02_Products_Containers/Three-Tier Motorcycle Transport Container.png` | `/products-applications`, `/innovation` | CUBOID 3-tier two-wheeler container design. |
| `Yellow Timber Logistics Yard Montage.png` | `/assets/02_Products_Containers/Yellow Timber Logistics Yard Montage.png` | `/products-applications` | Specialized open-top / flat-rack container configuration. |
| `Shivlakha GCT Rail Terminal.png` | `/assets/03_Shivlakha_Logistics/Shivlakha GCT Rail Terminal.png` | Homepage, `/shivlakha-rail-logistics` | Authentic broad-gauge rail siding and handling wharf at Shivlakha. |
| `Admin Shivlakha.png` | `/assets/03_Shivlakha_Logistics/Admin Shivlakha.png` | `/shivlakha-rail-logistics` | Administrative building and terminal offices at Shivlakha. |
| `shivlakha-isometric-masterplan.jpg` | `/assets/03_Shivlakha_Logistics/shivlakha-isometric-masterplan.jpg` | Homepage, `/shivlakha-rail-logistics` | Approved isometric master layout plan of the multimodal rail hub. |
| `Naresh Sir.jpeg` | `/assets/04_Company_Team/Naresh Sir.jpeg` | `/about-us`, `/leadership` | Formal portrait of Mr. Naresh Kumar, Managing Director. |
| `Javed Aslam.jpg` | `/assets/04_Company_Team/Javed Aslam.jpg` | `/leadership` | Formal portrait of Mr. Javed Aslam, Whole-Time Director. |
| `Devender-Kumar.jpg` | `/assets/04_Company_Team/Devender-Kumar.jpg` | `/leadership` | Formal portrait of Mr. Devender Kumar, Non-Executive Independent Director. |
| `Kalyani Team.JPG` | `/assets/04_Company_Team/Kalyani Team.JPG` | `/about-us`, `/gallery` | Engineering team photograph at Rewari Works. |
| `NK & Rly Minister.jpg` | `/assets/04_Company_Team/NK & Rly Minister.jpg` | `/our-journey`, `/gallery` | Historic rake flag-off milestone with railway leadership. |
| `Certificate-of-Capacity-1.jpg` | `/assets/07_Certificates/Certificate-of-Capacity-1.jpg` | Homepage, `/engineering-quality` | IRS DLH21X014 scanned certification page. |

### Excluded / Suppressed Files
- Low-resolution duplicate WhatsApp exports in `08_Website Content/` (superseded by high-res master PNGs).
- Unverified certificate stubs without scanned backing (`is-12117` and `iso-9001`) removed from public display.
- Master content working PDF (`Kalyani Cast Tech Limited — Master Content Document...`) excluded from public download.

---

## 4. Content Clean-up & Prohibited Language Purge Report

The automated sensor script (`scripts/audit-text.cjs`) scanned all files in `src/` for prohibited phrases, internal labels, and unverified claims.

### Audit Sensor Results
- **Files Scanned:** 56 source code files
- **Prohibited Phrases Checked:** 18 distinct patterns
- **Violations Detected:** **0 matches**

### Specific Remediations Executed
1. *Developer & Internal Audit Labels Purged:*
   - `"Statutory Approvals · Audited Compliance"` &rarr; Replaced with *"Certifications & Technical Documents"*.
   - `"Visual Trust & Approvals Gallery"` &rarr; Replaced with *"Official Approvals & Tested Capacity Records"*.
   - `"Quick Commercial Qualification Desk"` &rarr; Replaced with *"Commercial & Movement Enquiry"*.
   - `"Verification Doc"` &rarr; Replaced with *"Tested Capacity Record"*.
2. *Unverified SLA Promises Purged:*
   - `"guaranteed same-business-day acknowledgement"` &rarr; Replaced with neutral wording: *"reviewed by designated engineering and terminal officers."*
3. *Unsupported Shivlakha Claims Qualified:*
   - `"Zero Empty-Container Repositioning (Factory-on-Siding)"` &rarr; Replaced with *"Co-Located Container Fabrication & Rail Wharf"*.
   - `"0 km Haul"` &rarr; Replaced with *"Direct Platform Access"*.
   - `"without splitting rakes"` &rarr; Replaced with *"720 m broad-gauge siding engineered for full broad-gauge rake placement"*.
   - `"45 Wagons / Single Placement Capacity"` &rarr; Replaced with *"720 Metres / Broad-Gauge Siding Length"*.
4. *Universal Green Badges Purged:*
   - Removed universal green badges (`🟢 IRS · Lloyd's Register · BIS · ISO Certified` and `🟢 IS 12117 Class A · ISO 1496 · IRS · Lloyd's Register`) that falsely implied global single-document certification.

---

## 5. Official Certifications & Technical Approvals Register

In accordance with §6.5, only certifications with authentic scanned documentation on disk are presented publicly:

| Certificate Title | Issuing Body | Certified Entity & Location | Scope of Approval | Validity / Status | Verified Public Asset |
|:---|:---|:---|:---|:---|:---|
| **Certificate of Capacity** | Indian Register of Shipping (IRS) | Kalyani Cast Tech Limited, Rewari Works | Verification of annual container manufacturing capacity (&ge; 1,000 ISO freight containers/year) | Report No. DLH21X014 · Active | `Certificate-of-Capacity-1.jpg`, `Certificate-of-Capacity-2.jpg`, `Certificate-of-Capacity-3.jpg` |
| **Competent Manufacturer under CSC 1972** | Indian Register of Shipping (IRS) | Kalyani Cast Tech Limited | Certified as a competent manufacturer of freight containers under the International Convention for Safe Containers (CSC 1972) | Active Statutory Approval | `irs-competent-manufacturer.jpg` |
| **Approved Foundry for Steel Castings** | Lloyd's Register | Kalyani Cast Tech Limited, Rewari Works | Approval of manufacturer in carbon, carbon-manganese and alloy steel (Corner castings up to 18 kg) | Certificate No. LR2489004WA · Valid until 30 June 2027 | Scanned Certificate PDF in `public/` |

### Internal Register of Certificates Awaiting Updated Scans
- **IS 12117 Class A Foundry Approval:** Internal record maintained; public display withheld pending ingestion of the renewed Bureau of Indian Standards certificate scan.
- **ISO 9001:2015 Quality Management System:** Internal record maintained; public card withheld pending high-resolution scan upload.

---

## 6. Testing & Quality Sensor Suite Results

| Sensor Suite | Execution Command | Result |
|:---|:---|:---|
| **Vitest Unit & Integration Sensor** | `node ./node_modules/vitest/vitest.mjs run` | **32 / 32 tests passed (6 test files) · Exit code 0** |
| **Static Asset Resolution Sensor** | `node scripts/verify-assets.cjs` | **86 / 86 assets verified on disk · Exit code 0** |
| **Prohibited Language Audit Sensor** | `node scripts/audit-text.cjs` | **0 prohibited phrases detected · Exit code 0** |
| **Vite Production SSR Build Sensor** | `DEPLOY_TARGET=netlify node ./node_modules/vite/bin/vite.js build` | **Client (2072 modules) & SSR server built in 2.64s · Exit code 0** |
| **Netlify Redirects Sync Sensor** | `node scripts/copy-redirects.cjs` | **`_redirects` verified in `dist/client/_redirects` · Exit code 0** |

---

## 7. Outstanding Approvals Register

The following items are documented for management awareness and future updates:
1. **Promoter Group & Strategic Advisory Registration:** Mr. Jay Bhagnani's advisory role is presented with the approved statutory disclosure footnote (*"Name recorded as Jai Prakash Bangani in earlier corporate filings; under formal review against statutory registers"*). When the formal statutory review is finalized, the footnote may be transitioned to standard bio formatting.
2. **Updated Scans for BIS and ISO:** Upon receipt of renewed high-resolution scans for ISO 9001 and IS 12117, they will be reintroduced into the Certifications & Technical Documents gallery.
3. **Shivlakha Operational Milestone:** Commercial freight handling and ICD operations will be updated from development/commissioning status to operational status upon notification of commercial opening.

---

## 8. Deployment Gate & Next Actions

> [!IMPORTANT]
> **DEPLOYMENT GATE STATUS: LOCKED**  
> In compliance with instructions, **no remote push or Netlify deployment has been triggered**.  
> All 32 automated tests pass, the production bundle builds cleanly, and all assets are verified on disk.  
> 
> **To proceed with publishing to Netlify, please review this report and provide your explicit authorization.**

