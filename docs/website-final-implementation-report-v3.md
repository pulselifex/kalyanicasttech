# Kalyani Cast Tech Limited — Master Website Implementation Report v3
**Document Reference:** `docs/website-final-implementation-report-v3.md`  
**Revision Date:** 30 October 2026  
**Status:** Approved & Implemented  
**Core Reference:** Master Website Restructuring Brief (30 October 2026)  
**Host Environment:** Netlify Production (`https://kalyanicasttech.netlify.app`)

---

## 1. Executive Summary & Outcome

This report details the comprehensive implementation of the **Master Website Restructuring, Content, Brand & UI Implementation Brief (Approved Revision – 30 October 2026)** across the Kalyani Cast Tech Limited corporate web platform.

All directives have been fulfilled:
1. **Brand Identity & Taglines:** Implemented corporate tagline *"Built for what India moves."* and all 9 approved page headlines.
2. **Simplified 6-Item Navigation:** Replaced old labels with the canonical 6 items: Company, Products, Shivlakha, Engineering & Quality, Investor Relations, Contact.
3. **Board & Management Structure:** Completely eliminated profile duplication of Managing Director Mr. Naresh Kumar. Consolidated into 4 distinct governance groups.
4. **Product Architecture & 16/17 Rule Removal:** Eradicated fixed "16 models" language in favour of a data-driven catalogue across Containers, Wagons, and Foundry.
5. **Rewari vs Shivlakha Capacity Separation:** Purged unverified "6,000 containers/year" claim. Cites IRS DLH21X014 baseline (≥1,000 ISO/yr) for Rewari and 10,000 stated / 25,000 planned expansion for Shivlakha.
6. **Shivlakha Integrated Platform:** Single continuous page with the Isometric Master Plan as visual centerpiece and sequential 4-component status ledger.
7. **Statutory & Certificate Defensibility:** Verified active Lloyd's Register LR2489004WA (2024–2027), IRS capacity reports, and accurate statutory committee charters.
8. **Automated QA Verification:** Executed full Vitest suite (37/37 tests passing with exit code 0).

---

## 2. Page-by-Page Implementation Ledger

### 1. Home (`/`)
- **Headline:** `Built for what India moves.`
- **Pill:** `BSE SME: 544023 · Incorporated 2012 · Rewari (Haryana) & Shivlakha (Gujarat)`
- **Hero Framing:** Large-format photography with floating engineering badges (`Engineered Container Solutions`, `Up to 80T Gross Rating`).
- **Primary CTAs:** Explore Containers & Castings, Explore Shivlakha Hub, Business Enquiry.

### 2. Company — About Us (`/about-us`)
- **Headline:** `One company. Two plants. A rail-linked cargo story still being written.`
- **Corporate Facts Strip:** Founded Sept 2012 · Rewari 5 Acres/4 Sheds · Capacity ≥1,000 ISO/Yr (IRS Base) · IS 12117 Class A Foundry.
- **Chronological Milestones:** 2012 (Incorporation) → 2014 (First Trial Run) → 2018 (Commercial Dwarf Container) → 2023 (BSE SME Listing) → 2024–2026 (Shivlakha Hub & Rail Siding).

### 3. Company — Board & Management (`/leadership`)
- **Headline:** `Engineering experience. Industrial leadership. Responsible governance.`
- **Structure:** 1. Senior Leadership (Naresh Kumar, Javed Aslam, Jay Bhagnani) → 2. Other Directors (Jayashree Kumar, Devender Kumar Yadav) → 3. Independent Directors (Kumar Sharat Chandra, Sanjeev Negi) → 4. Key Personnel (Amit Kumar, Pankaj Kumar, Ratnesh Mahajan).
- **Statutory Integrity:** 0 duplicate profiles; DINs and committee chairmanships explicitly attributed.

### 4. Company — Facilities & Locations (`/facilities`)
- **Headline:** `Two plants. One engineering standard.`
- **Separation:**
  - **Rewari Works:** 5 acres, >6,000 sq.m across 4 sheds, Class A foundry (20 kg – 2,000 kg), IRS baseline ≥1,000 containers/year.
  - **Shivlakha Logistics Platform:** 114 acres, 720 m broad-gauge GCT rail siding (KEGS), 10,000 to 25,000 containers/year capacity.

### 5. Products & Applications (`/products-applications`)
- **Headline:** `The cargo picks the container. We engineer it.`
- **Three Core Pillars:**
  1. **Containers (`#containers`):** Dynamic catalogue of Standard ISO, High-Cube, Double-Stack Dwarf, Heavy-Duty Coiltainers, Tank/Hoppers, and CUBOID boxes.
  2. **Wagons (`#wagons`):** Special freight rolling stock under development at Shivlakha (RDSO Stage-I concept approval 26 Oct 2026).
  3. **Foundry & Corner Castings (`#foundry`):** Lloyd's Register approved ISO 1161 corner castings and railway rolling-stock castings.

### 6. Engineering & Quality (`/engineering-quality`)
- **Headline:** `From design to testing — engineering under one roof.`
- **Testing Rig Showcase:** ISO 1496 Series-1 test rig (96,012 kg stacking load), 400 kN Universal Testing Machine, optical emission spectrometer, -45°C sub-zero Charpy tester, NDT inspection lab, high-pressure water curtain.

### 7. Shivlakha Integrated Rail Platform (`/shivlakha-rail-logistics`)
- **Headline:** `Manufacturing meets rail-linked logistics.`
- **Centerpiece:** Interactive Isometric Master Plan (12 Zones & 2 Connectivity Corridors).
- **4 Sequential Components:**
  1. Container Manufacturing (Operational, 10,000 → 25,000 units/yr)
  2. Gati Shakti Cargo Terminal (Operational, Western Railway Code: KEGS)
  3. Wagon Manufacturing (Under Development, Target Q4 FY27)
  4. Inland Container Depot (Under Development, CBIC LoI 10 Sept 2026, Target Q1 FY28)
- **Customer Action:** *"Discuss a rail-linked cargo requirement."*

### 8. Investor Relations (`/investor-relations`)
- **Headline:** `Listed. Disclosed. Audited.`
- **Identifiers:** BSE SME: `544023` · CIN: `L26990DL2012PLC242760` · ISIN: `INE0N6U01018`.
- **Highlights:** FY 2025–26 audited financial metrics, 14th AGM proceedings, preferential issue disclosures, 19 Board-approved governance policies, and statutory compliance officer contacts.

### 9. Contact & Enquiry Directory (`/contact`)
- **Headline:** `Tell us what you are moving. We'll route it to the right desk.`
- **Routing:** Direct commercial routing to Container Enquiries, Shivlakha Cargo Rail Movements, or Investor Secretarial.
- **Form:** Unified 10-field Commercial Business Enquiry Form with anti-spam honeypot and client-side validation.

---

## 3. Automated Quality Sensor Report

```
Vitest Test Suite Run:
Test Files: 6 passed (6)
Tests:      37 passed (37)
Exit Code:  0
```

---

## 4. Deliverables Index

The following deliverables have been deposited in `Website_Codebase/docs/`:
1. `website-information-architecture-v3.md` (Information Architecture)
2. `website-board-management-final-structure.md` (Board & Leadership Governance)
3. `website-products-catalogue-architecture.md` (Products & Fixed Count Removal)
4. `website-facility-capacity-register.md` (Rewari vs Shivlakha Capacity Separation)
5. `website-certificate-integrity-register.md` (Accreditations & Certificates)
6. `website-content-cleanup-register.md` (Cleaned Claims & Developer Terms)
7. `website-functional-qa-report-v3.md` (QA Sensor Report)
8. `website-final-implementation-report-v3.md` (Master Report)

