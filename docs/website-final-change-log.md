# Kalyani Cast Tech Limited — Final Release Change Log
**Document Reference:** `docs/website-final-change-log.md`  
**Target Release Branch:** `release/kct-website-v1`  
**Production Host:** `https://kalyanicasttech.netlify.app`  
**Execution Timestamp:** 30 October 2026  
**Change Auditor:** Lead Web Strategist & Systems Release Engineer  

---

## 1. Summary of Changes

This change log records all code, layout, structural, content, and statutory modifications implemented across the Kalyani Cast Tech Limited website repository leading to the production release candidate.

Each change is categorized by:
- **Scope / Page:** The route or component impacted.
- **Finding:** The underlying defect or audit observation.
- **Original State:** The initial code behavior or content.
- **Final Implemented State:** The corrected, verified implementation.
- **File(s) Changed:** Exact file paths.
- **Evidence / Authority:** The governing source (Master Content, BSE filing, MCA record, Western Railway circular, RDSO letter, CBIC LoI).
- **Test / Verification:** Automated test and manual QA result.
- **Status:** Complete / Approved.

---

## 2. Itemized Change Log

### Change 01: Global Header Refactor & De-Cluttering
- **Scope / Page:** Global Navigation (`SiteHeader.tsx`)
- **Finding:** Header used a triple-decker layout exceeding 180px in height, repeating "Investor Relations", "Contact", "Business Enquiry", and "BSE SME: 544023" multiple times across rows.
- **Original State:** Three stacked navigation rows with redundant links and heavy padding.
- **Final Implemented State:** Collapsed into a streamlined 2-bar layout:
  - **Bar 1:** Slim statutory desktop strip (CIN, BSE SME: 544023, Rewari Works, Shivlakha GCT).
  - **Bar 2:** Sticky main navigation bar with logo, desktop dropdowns, SiteSearch, ThemeToggle, and a single prominent "Send Business Enquiry" CTA.
  - Mobile view uses an accessible accordion drawer for all categories.
- **File(s) Changed:** `src/components/site/SiteHeader.tsx`
- **Evidence / Authority:** Industrial UX Best Practices & Master Implementation Design Hierarchy §1.
- **Test / Verification:** Browser layout verification across 375px, 768px, 1024px, 1440px viewport widths.
- **Status:** Complete.

---

### Change 02: Elimination of Micro-Fonts Across Global Design System
- **Scope / Page:** Typography & Global Stylesheet (`index.css`)
- **Finding:** Technical specifications, data tables, and card metadata suffered from cramped `11px–13px` fonts and `text-[10px]` classes.
- **Original State:** Frequent usage of `text-xs` (12px) and arbitrary utility classes like `text-[10px]` on vital engineering numbers.
- **Final Implemented State:** Enforced strict typographic scale:
  - Body text (`p`, `li`): Minimum `1rem` (16px), line-height 1.65, max-width 65ch.
  - Card metadata, spec pills, badges, table cells (`td`, `th`): Minimum `0.875rem` (14px), line-height 1.5. Banned `text-[10px]` on specs.
  - Section headings (`h2`): `clamp(1.85rem, 3vw, 2.5rem)`. Card titles (`h3`): Minimum `1.25rem` (20px) bold.
- **File(s) Changed:** `src/index.css`, Tailwind v4 theme definitions
- **Evidence / Authority:** Master Implementation Typographic Scale §1.
- **Test / Verification:** CSS audit confirmed 0 occurrences of `text-[10px]` on technical data points.
- **Status:** Complete.

---

### Change 03: Homepage Hero Visual Showcase & Elimination of 4x Redundancy
- **Scope / Page:** Homepage Above-the-Fold (`HomeIntegratedHero.tsx`)
- **Finding:** Hero right column wrapped container image inside a dense card containing 4 text blocks repeating the exact product categories from the portfolio grid directly below it.
- **Original State:** 4 redundant sub-blocks ("Standard Dry", "Dwarf Double-Stack", "Coiltainers", "Specialised") plus duplicate "Explore 16 Container Models" button inside hero.
- **Final Implemented State:** Replaced with a clean, large-format visual showcase featuring high-resolution photography (`aspect-[16/10]` framing), subtle industrial border styling, and 2 floating engineering badges ("16 Container Configurations" · "Up to 80T Gross Rating"). Removed the 4 redundant sub-blocks.
- **File(s) Changed:** `src/components/site/HomeIntegratedHero.tsx`
- **Evidence / Authority:** Visual-First Architecture Mandate & Master Implementation Prompt §2.
- **Test / Verification:** Visual inspection confirmed elimination of text repetition; hero load performance verified.
- **Status:** Complete.

---

### Change 04: Merging of Redundant 4-Column Stat Bars into Single High-Impact Ribbon
- **Scope / Page:** Homepage (`HomePage.tsx`)
- **Finding:** Two back-to-back 4-column stat bars created visual noise and redundant metrics.
- **Original State:** 8 stat boxes occupying extensive fold space.
- **Final Implemented State:** Merged into a single high-impact 4-metric industrial strip:
  1. `6,000 / Year` — Rewari Installed Capacity
  2. `720m BG Siding` — GCT Rail Infrastructure
  3. `IS 12117 Class A` — Ferrous Foundry Accreditation
  4. `BSE SME: 544023` — Statutory Public Listing
- **File(s) Changed:** `src/components/site/HomePage.tsx`
- **Evidence / Authority:** Content Master Document §4 & §5.
- **Test / Verification:** Component rendering and responsive flex-wrap verified.
- **Status:** Complete.

---

### Change 05: Explicit 3 Business Pillars Section on Homepage
- **Scope / Page:** Homepage Architecture (`HomePage.tsx`)
- **Finding:** Visitors could not easily distinguish between established manufacturing operations and phased infrastructure platforms.
- **Original State:** Mixed layout with legacy GrowthMatrix, StakeholderSolutions, and MilestonesLedger2026 cluttering homepage.
- **Final Implemented State:** Introduced a clean 3 Business Pillars section:
  1. **Freight Containers:** Standard ISO, Double-Stack Dwarf, Coiltainers, CUBOID boxes (Operational).
  2. **Foundry & Railway Castings:** IS 12117 Class A Foundry, 20 kg to 2,000 kg single pours, Lloyd's Register corner fittings (Operational).
  3. **Shivlakha Rail & Logistics Platform:** Broad-gauge rail siding, GCT, container plant (Operational); wagon manufacturing and ICD (Phased Development).
  - Removed GrowthMatrix and StakeholderSolutions from homepage (retained on About Us).
- **File(s) Changed:** `src/components/site/HomePage.tsx`
- **Evidence / Authority:** Master Implementation Architecture §2.3.
- **Test / Verification:** Route visual verification; clean spacing.
- **Status:** Complete.

---

### Change 06: Corporate Structure & SPV Attribution in About Us
- **Scope / Page:** About Us Page (`about-us.tsx`)
- **Finding:** Lack of explicit corporate structural cards detailing the relationship between Kalyani Cast Tech Limited (Parent) and KMT Engineering Private Limited (Subsidiary SPV).
- **Original State:** Single narrative block with potential confusion over ownership of the Shivlakha siding and terminal license.
- **Final Implemented State:** Added a prominent "Statutory Governance & Corporate Structure" section with two side-by-side cards:
  - **Parent Card:** Kalyani Cast Tech Limited (100% Listed Parent Entity, BSE SME: 544023, CIN: L26990DL2012PLC242760, Rewari Works).
  - **Subsidiary Card:** KMT Engineering Private Limited (Wholly Owned Subsidiary & SPV for Shivlakha Integrated Platform, GCT Agreement with Western Railway, Siding Alpha code KEGS, Numerical code 08524078).
- **File(s) Changed:** `src/routes/about-us.tsx`
- **Evidence / Authority:** Western Railway GCT Agreement, MCA Subsidiary Records, BSE Disclosures.
- **Test / Verification:** Browser layout inspection; link verification.
- **Status:** Complete.

---

### Change 07: Facilities Dual-Hub Attribution & Capacity Reconciliation
- **Scope / Page:** Facilities & Locations (`facilities.tsx`)
- **Finding:** Discrepancy between licensed capacity (6,000 containers/year) and IRS assessment certificate (≥1,000 containers/year); ambiguity between Rewari and Shivlakha operator entities.
- **Original State:** Single capacity figure without explanation of the statutory IRS assessment baseline.
- **Final Implemented State:**
  - Clearly partitioned Rewari Works (Owned & Operated by Kalyani Cast Tech Ltd) and Shivlakha Platform (Operated by KMT Engineering Pvt. Ltd.).
  - Reconciled capacity: Displayed installed plant capacity (6,000 containers/year across 4 fabrication sheds) alongside explicit IRS Certificate Report DLH21X014 record (≥1,000 containers/year assessed baseline for 20ft HC 34T under ISO 1496:2013 & CSC 1972).
- **File(s) Changed:** `src/routes/facilities.tsx`
- **Evidence / Authority:** IRS Certificate Report DLH21X014 dated 24 June 2021; Rewari Plant Infrastructure Blueprint.
- **Test / Verification:** Visual verification of stat strip and side-by-side facility cards.
- **Status:** Complete.

---

### Change 08: 6-Stage Manufacturing Card De-Cluttering
- **Scope / Page:** Manufacturing Page (`manufacturing.index.tsx`)
- **Finding:** 6-stage cards rendered 5 separate text layers (2 image pills, full-width location subtitle bar, H3 title, paragraph), creating extreme visual clutter.
- **Original State:** Crowded cards with overlapping badges and repetitive captions.
- **Final Implemented State:** Streamlined each card to 3 clean elements:
  1. 3:2 Feature photograph with single top-left shop-floor zone badge.
  2. H3 Title (18px–20px bold, high contrast).
  3. 1 concise sentence stating exact capability and tonnage/standard.
- **File(s) Changed:** `src/routes/manufacturing.index.tsx`
- **Evidence / Authority:** Master Implementation Visual Hierarchy §4.
- **Test / Verification:** Visual verification on desktop and mobile.
- **Status:** Complete.

---

### Change 09: Certificates Gallery Metadata & High-Resolution Scans
- **Scope / Page:** Engineering Quality (`engineering-quality.tsx`, `CertificatesGallery.tsx`)
- **Finding:** Certificates gallery included verbose instructional text ("Click any certificate scan below to zoom..."), and scanned certificates were mistakenly used as lab equipment photos.
- **Original State:** Scanned certificate images mixed with physical testing rig photos.
- **Final Implemented State:**
  - Removed "Click any certificate scan..." subhead; replaced with clean descriptive text.
  - Separated physical testing rig photography from official certificates.
  - Built a 3-row structured metadata display for each certificate: Issuer & Authority, Standard / Code, Verified Scope.
  - Added interactive modal zoom and verified PDF download links for all 5 official certificates.
- **File(s) Changed:** `src/routes/engineering-quality.tsx`, `src/components/site/CertificatesGallery.tsx`
- **Evidence / Authority:** Verified PDF documents on disk (`public/documents/approvals/`).
- **Test / Verification:** Verified all 5 PDF links return HTTP 200; zoom modal interactive testing.
- **Status:** Complete.

---

### Change 10: Standardized Container Catalog Counting & Classification
- **Scope / Page:** Products & Applications (`ContainerCatalog.tsx`)
- **Finding:** Ambiguity between 16 vs 17 models; Model 17 was unclassified in catalog counters.
- **Original State:** Inconsistent counter ("16 Models" vs "17 Specifications").
- **Final Implemented State:** Enforced exact taxonomy: "16 Approved Core Configurations + 1 Custom Application Variant".
  - Models 1 to 16 represent the approved core configurations (Standard ISO, Dwarf, Coiltainers, Tank/Hopper, CUBOID).
  - Model 17 classified as: "20 Feet 304-Grade Stainless Steel Salt Container" (Specialized Material Variant, 2.6 MT tare weight, developed with Jindal Stainless, trialed at Bhimasar).
- **File(s) Changed:** `src/components/site/ContainerCatalog.tsx`
- **Evidence / Authority:** Content Master Document §6.5.1 through §6.5.17.
- **Test / Verification:** Catalog filter counters verified across all category tabs.
- **Status:** Complete.

---

### Change 11: Cargo Matcher Preliminary Notice & Engineering Highlight
- **Scope / Page:** Interactive Cargo Matcher (`CargoMatcher.tsx`)
- **Finding:** Output card was titled "Commercial ROI Advantage" without preliminary engineering disclaimers, risking commercial misunderstandings.
- **Original State:** "Commercial ROI Advantage" heading with unqualified savings figures.
- **Final Implemented State:**
  - Renamed header to "Key Engineering Highlight".
  - Added explicit Preliminary Engineering Match Notice: "Automated recommendation is an indicative preliminary fit for initial feasibility review. Final equipment selection requires detailed review of loading method, cargo density, axle loads, and route clearances."
  - Verified Model 06 technical specs: 12,192 × 2,438 × 2,591 mm, 61.03 m³, 80,000 kg gross rating, 75,000 kg max payload (71 MT chassis rating).
- **File(s) Changed:** `src/components/site/CargoMatcher.tsx`
- **Evidence / Authority:** Approved Engineering Data Sheet Model 06 & Commercial Integrity Mandate.
- **Test / Verification:** Vitest suite (`tools.test.tsx`, 8 tests passed) and manual selector interaction.
- **Status:** Complete.

---

### Change 12: Shivlakha 4-Node Status Matrix & Regulatory Milestone Clarity
- **Scope / Page:** Shivlakha Platform (`ShivlakhaStatus.tsx`, `shivlakha-rail-logistics.index.tsx`)
- **Finding:** Conflation of operational assets (GCT, Container Plant) with phased development assets (Wagons, ICD); missing regulatory condition disclosures.
- **Original State:** Ambiguous progress bars or status tags.
- **Final Implemented State:**
  - Structured 4-Node Matrix with UI-rendered status badges:
    - **Node 1 (GCT):** `Operational · Inaugurated 15 Sept 2026` | Broad-gauge siding KEGS (08524078).
    - **Node 2 (Container Mfg):** `Operational · Commenced June 2026` | 220m × 45m covered shed, ~10,000 TEUs/yr capacity.
    - **Node 3 (Wagon Mfg):** `Under Development · Target Q4 FY 2026–27` | RDSO Stage-I Concept Approval (26 Oct 2026), ~2,400 wagons/yr planned capacity.
    - **Node 4 (ICD):** `Under Development · Target Q1 FY 2027–28` | CBIC LoI issued 10 Sept 2026 (1-year condition), 30-acre bonded footprint.
  - Attributed operational terminal complex to KMT Engineering Pvt. Ltd. (Wholly Owned Subsidiary).
- **File(s) Changed:** `src/components/site/ShivlakhaStatus.tsx`, `src/routes/shivlakha-rail-logistics.index.tsx`
- **Evidence / Authority:** Western Railway Siding Notification, RDSO Letter dated 26 Oct 2026, CBIC LoI dated 10 Sept 2026.
- **Test / Verification:** Vitest suite (`shivlakha-masterplan.test.tsx`, 7 tests passed).
- **Status:** Complete.

---

### Change 13: Removal of Prohibited Phrasing from Master Plan
- **Scope / Page:** Shivlakha Master Plan (`ShivlakhaInteractiveMasterplan.tsx`)
- **Finding:** Removed sentence "Customs and depot services open only after regulatory commissioning" remained present in zone 05 description.
- **Original State:** Description text included: "...Customs and EXIM depot services open after regulatory commissioning."
- **Final Implemented State:** Surgically excised sentence from `ShivlakhaInteractiveMasterplan.tsx` line 152. Verified 0 occurrences across entire codebase.
- **File(s) Changed:** `src/components/site/ShivlakhaInteractiveMasterplan.tsx`
- **Evidence / Authority:** Master Implementation Negative Constraint §3.
- **Test / Verification:** Global grep confirmed 0 occurrences.
- **Status:** Complete.

---

### Change 14: Permanent Elimination of Buzzwords ("Digital Twin", "Ground Reality", "FACADE:")
- **Scope / Page:** Global Codebase (`HomePage.tsx`, `about-us.tsx`, `facilities.tsx`, `shivlakha-rail-logistics.index.tsx`, `ShivlakhaInteractiveMasterplan.tsx`)
- **Finding:** Repository contained buzzwords ("3D Digital Twin", "Ground Reality Photograph", "Verified Physical Asset", "FACADE:").
- **Original State:** Multiple occurrences of "Digital Twin" in page titles, CTA buttons, and captions.
- **Final Implemented State:** Completely eliminated:
  - Replaced all instances of "3D Digital Twin" with "Interactive Isometric Master Plan".
  - Removed "FACADE:" debug tag from `about-us.tsx`.
  - Removed all "Ground Reality" and "Physical Asset" synthetic captions.
- **File(s) Changed:** Multiple route and component files.
- **Evidence / Authority:** Commercial Credibility & Technical Precision Mandate.
- **Test / Verification:** Automated grep across all `.ts` and `.tsx` files returned 0 occurrences for each prohibited term.
- **Status:** Complete.

---

### Change 15: Investor Relations Disclosure Completeness & Governance Policies
- **Scope / Page:** Investor Relations (`investor-relations.tsx`)
- **Finding:** Need full statutory verification of CIN, BSE SME code, ISIN, committee compositions, and governance charters per SEBI LODR Regulation 46.
- **Original State:** Generic overview with missing statutory details.
- **Final Implemented State:**
  - Verified CIN: `L26990DL2012PLC242760`, BSE SME: `544023`, ISIN: `INE0P7F01017`.
  - Published full table of 19 Board-approved governance policies with legal statutory bases.
  - Published 5 Board committee charters with Chairpersons and independent director memberships.
  - Verified RTA: Bigshare Services Pvt. Ltd. (SEBI Reg: INR000001385, Tel: +91-22-6263-8200).
  - Linked to 156 statutory PDF filings housed in `public/documents/investors/`.
- **File(s) Changed:** `src/routes/investor-relations.tsx`
- **Evidence / Authority:** SEBI (LODR) Regulations 2015, BSE SME Listing Records, MCA Portal.
- **Test / Verification:** Browser verification; PDF link integrity confirmed.
- **Status:** Complete.

---

### Change 16: Consolidation of Duplicate Routes via HTTP 301 Redirects
- **Scope / Page:** Router Configuration & Netlify Edge Rules (`public/_redirects`, TanStack route files)
- **Finding:** Potential duplicate page indexing between legacy and canonical routes.
- **Original State:** Multiple route files existing in parallel.
- **Final Implemented State:** Established unified HTTP 301 redirects for all duplicate pairs:
  - `/company` & `/company/` &rarr; `/about-us` (301)
  - `/company/leadership` &rarr; `/leadership` (301)
  - `/containers-solutions` &rarr; `/products-applications` (301)
  - `/manufacturing/facilities-locations` &rarr; `/facilities` (301)
  - `/manufacturing/testing-quality` &rarr; `/engineering-quality` (301)
  - `/investors` &rarr; `/investor-relations` (301)
  - `/business-enquiry` &rarr; `/contact#enquiry-form` (301)
- **File(s) Changed:** `public/_redirects`, `src/routes/*.tsx`
- **Evidence / Authority:** SEO Canonical Architecture & Zero Duplicate Content Rule.
- **Test / Verification:** Vitest suite (`legacy-redirects.test.ts`, 7 tests passed).
- **Status:** Complete.

---

### Change 17: Complete Footer Disclaimer Cleanup
- **Scope / Page:** Global Footer (`SiteFooter.tsx`)
- **Finding:** Outdated safe harbor disclaimers and orphan section headers occupied excessive footer space.
- **Original State:** Full paragraph of forward-looking disclaimer text and an isolated "Statutory & Safe Harbor Disclaimer" header.
- **Final Implemented State:** Completely removed the disclaimer paragraph and the remaining heading wrapper. Retained clean copyright bar, 6 official operating addresses, RTA details, direct contact channels, and quick links.
- **File(s) Changed:** `src/components/site/SiteFooter.tsx`
- **Evidence / Authority:** Management Instruction (User Requests 6, 7, 8).
- **Test / Verification:** Visual inspection confirmed zero orphan borders, clean typography, and balanced layout.
- **Status:** Complete.

