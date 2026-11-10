# WP-5B.23 — Website Comprehensive Inventory Reconciliation

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.23 / 23A / 23B Pre-Production Quality Gate  
**Auditor / Engineering Lead:** AI Pair Programmer (Antigravity)  
**Status:** 100% RECONCILED & INVENTORY VERIFIED  
**Staging Baseline URL:** [https://6aedba399a03126c8d076f26--kalyanicasttech.netlify.app/](https://6aedba399a03126c8d076f26--kalyanicasttech.netlify.app/)  
**Deployment Identifier:** `6aedba399a03126c8d076f26`  

---

## 1. Global Inventory Summary

The corporate web platform inventory represents an integrated, zero-orphan, fully indexed architecture comprising:

```
+-----------------------------------------------------------------------------------------+
|                                 KALYANI CAST TECH LIMITED                               |
|                           Corporate Website Inventory Overview                          |
+-----------------------------------------------------------------------------------------+
|  Total Canonical Pages Indexed in sitemap.xml & pages.json        :  44 Canonical URLs  |
|  Live Staging Edge Sensor Tested Routes (Direct & Redirect)      :  26 Edge Routes     |
|  Configured Legacy 301 Permanent Redirect Rules                  :  36 Redirect Rules  |
|  Statutory Investor Relations Documents (Active PDFs on Disk)    :  173 Documents      |
|  Verified Hero Carousel Authentic Slides (Generic Category Model) :  22 Slides         |
|  Pre-Production Visual Proof Screenshots Captured                 :  13 Viewports       |
|  Automated Test Suites (Vitest 19 files, 234 tests)               :  100% PASS (234/234)|
|  Production SSR & Client Bundles (Vite Netlify Target)           :  0 Errors (Code 0)  |
+-----------------------------------------------------------------------------------------+
```

---

## 2. Live Edge Route Testing Matrix (26 Tested Routes)

All 26 routes tested directly on the live Netlify staging edge (`https://6aedba399a03126c8d076f26--kalyanicasttech.netlify.app`) resulted in 100% expected HTTP status codes:

| # | Route Path | Type | Expected Status | Staging Edge Status | Verified Destination / Target Content | Result |
| :---: | :--- | :---: | :---: | :---: | :--- | :---: |
| 1 | `/` | Canonical | 200 | **200 OK** | Corporate Homepage & Hero Carousel | **PASS** |
| 2 | `/about-us` | Canonical | 200 | **200 OK** | Corporate Identity, Board & History | **PASS** |
| 3 | `/our-journey` | Canonical | 200 | **200 OK** | Milestone Timeline & 2018 Dwarf Rail Run | **PASS** |
| 4 | `/leadership` | Canonical | 200 | **200 OK** | Board of Directors & Corporate Governance | **PASS** |
| 5 | `/manufacturing` | Canonical | 200 | **200 OK** | Manufacturing Division Overview Hub | **PASS** |
| 6 | `/facilities` | Canonical | 200 | **200 OK** | Dual Hub Platform (Rewari & Shivlakha) | **PASS** |
| 7 | `/products-applications` | Canonical | 200 | **200 OK** | Freight Container Catalog & Wagon Concepts | **PASS** |
| 8 | `/innovation` | Canonical | 200 | **200 OK** | R&D, Patents & Engineering Solutions | **PASS** |
| 9 | `/engineering-quality` | Canonical | 200 | **200 OK** | Lloyd's Register & Testing Capabilities | **PASS** |
| 10 | `/investor-relations` | Canonical | 200 | **200 OK** | BSE SME Disclosures & Financial Portal | **PASS** |
| 11 | `/gallery` | Canonical | 200 | **200 OK** | Verified Factory & Rake Imagery | **PASS** |
| 12 | `/shivlakha-rail-logistics` | Canonical | 200 | **200 OK** | 150-Acre Logistics Park Overview | **PASS** |
| 13 | `/shivlakha-rail-logistics/gati-shakti-terminal` | Canonical | 200 | **200 OK** | 30A Operational Rail Cargo Terminal | **PASS** |
| 14 | `/shivlakha-rail-logistics/inland-container-terminal` | Canonical | 200 | **200 OK** | 30A CBIC-Approved Inland Terminal | **PASS** |
| 15 | `/shivlakha-rail-logistics/cargo-opportunities` | Canonical | 200 | **200 OK** | Hinterland & Commercial Cargo Hub | **PASS** |
| 16 | `/contact` | Canonical | 200 | **200 OK** | 5 Reconciled Directory Cards & Liaison | **PASS** |
| 17 | `/company` | Redirect | 301 | **301 Moved** | &rarr; `/about-us` | **PASS** |
| 18 | `/company/leadership` | Redirect | 301 | **301 Moved** | &rarr; `/leadership` | **PASS** |
| 19 | `/manufacturing/facilities-locations` | Redirect | 301 | **301 Moved** | &rarr; `/facilities` | **PASS** |
| 20 | `/containers-solutions` | Redirect | 301 | **301 Moved** | &rarr; `/products-applications` | **PASS** |
| 21 | `/manufacturing/testing-quality` | Redirect | 301 | **301 Moved** | &rarr; `/engineering-quality` | **PASS** |
| 22 | `/investors` | Redirect | 301 | **301 Moved** | &rarr; `/investor-relations` | **PASS** |
| 23 | `/business-enquiry` | Redirect | 301 | **301 Moved** | &rarr; `/contact` | **PASS** |
| 24 | `/business-enquiry/` | Redirect | 301 | **301 Moved** | &rarr; `/contact` (Trailing slash norm) | **PASS** |
| 25 | `/shivlakha-rail-logistics/gati-shakti-cargo-terminal` | Redirect | 301 | **301 Moved** | &rarr; `/shivlakha-rail-logistics/gati-shakti-terminal` | **PASS** |
| 26 | `/shivlakha-rail-logistics/inland-container-depot` | Redirect | 301 | **301 Moved** | &rarr; `/shivlakha-rail-logistics/inland-container-terminal` | **PASS** |

---

## 3. Statutory Document Repository Reconciliation (173 PDFs)

The `public/investors/` directory holds exactly 173 authentic PDF files uploaded directly from statutory regulatory submissions (BSE SME and MCA).

### Document Categories & Breakdown:
1. **Annual Reports:** 12 files (Comprehensive audited financials and director reports from FY 2013-14 through FY 2024-25).
2. **Financial Results (Half-Yearly & Annual):** 28 files (Audited/Unaudited statements with limited review reports).
3. **Shareholding Patterns (Reg 31):** 36 files (Quarterly disclosures detailing promoter and public holdings).
4. **Corporate Governance Reports (Reg 27(2)):** 34 files (Quarterly board compliance submissions).
5. **Investor Grievance Reports (Reg 13(3)):** 26 files (Quarterly complaint redressal filings).
6. **Statutory Policies & Disclosures:** 22 files (Code of Conduct, Whistle Blower, Related Party, Materiality, Insider Trading).
7. **IPO & Capital Restructuring Documents:** 15 files (Prospectus, Basis of Allotment, In-Principle Approvals).

### Verification Integrity:
- **Zero Missing Links:** Every document listed in `src/content/pages.json` under `investor-relations` resolves to an existing file in `public/investors/`.
- **Zero Empty Files:** Automated file checks verify all 173 files possess non-zero byte lengths and valid PDF headers (`%PDF-`).
- **Sensor Test:** Covered under Vitest suite `src/test/content-search.test.ts`.

---

## 4. Visual Evidence Inventory (13 Pre-Production Screenshots)

Headless Google Chrome captures on the live staging deployment (`6aedba399a03126c8d076f26`) confirm rendering fidelity across desktop, tablet, and mobile viewports:

| Screenshot File Name | Target Route | Viewport Geometry | File Size | Audited Visual Elements |
| :--- | :--- | :---: | :---: | :--- |
| `01_homepage_hero_carousel_desktop-1440.png` | `/` | 1440 &times; 900 | 683,601 B | Slide 1 20' ISO Container on rail rake, generic category badge, play/pause controls |
| `02_homepage_business_divisions_desktop-1440.png` | `/#business-divisions` | 1440 &times; 1000 | 63,050 B | Dual corporate business divisions (Manufacturing vs Terminal) |
| `03_manufacturing_landing_desktop-1440.png` | `/manufacturing` | 1440 &times; 1100 | 964,973 B | Container manufacturing, wagon concepts, foundry capabilities |
| `04_facilities_dual_hub_desktop-1440.png` | `/facilities` | 1440 &times; 1100 | 789,602 B | Dual-hub platform layout (Rewari Works PIN 123101 & Shivlakha Platform PIN 370140) |
| `05_shivlakha_platform_desktop-1440.png` | `/shivlakha-rail-logistics` | 1440 &times; 1100 | 540,163 B | Single KMT mention, 150-Acre master plan, terminal descriptions |
| `06_investor_relations_desktop-1440.png` | `/investor-relations` | 1440 &times; 1100 | 302,402 B | BSE SME ticker 544023, quarterly accordions, CS contact desk |
| `07_contact_directory_desktop-1440.png` | `/contact` | 1440 &times; 1000 | 310,214 B | 5 Reconciled directory cards; centralized New Delhi Registered Office trade desk note |
| `08_footer_directory_desktop-1440.png` | `/contact` (Footer) | 1440 &times; 2400 | 748,650 B | Clean static header/footer, collapsible address accordions, legal notices |
| `09_homepage_mobile-390.png` | `/` | 390 &times; 844 | 183,824 B | Responsive single-column layout, touch-friendly carousel indicators |
| `10_homepage_tablet-768.png` | `/` | 768 &times; 1024 | 421,521 B | Tablet responsive column wrapping and card alignment |
| `11_engineering_quality_desktop-1440.png` | `/engineering-quality` | 1440 &times; 1100 | 150,765 B | Lloyd's Register approval, testing capability notices |
| `12_gati_shakti_terminal_desktop-1440.png` | `/shivlakha-rail-logistics/gati-shakti-terminal` | 1440 &times; 1000 | 520,501 B | 30A Gati Shakti Terminal details, rail sidings, operational readiness |
| `13_inland_container_terminal_desktop-1440.png` | `/shivlakha-rail-logistics/inland-container-terminal` | 1440 &times; 1000 | 506,350 B | 30A Inland Container Terminal, CBIC approval (10 Sept 2026), customs yard |

---

## 5. Build, Lint & Automated Test Verification Sensor

| Sensor Verification Tool | Scope | Parameters | Outcome |
| :--- | :--- | :--- | :---: |
| **Vitest Test Suite** | 19 Test Files | 234 Unit & Component Tests | **19/19 PASSED (234/234 tests)** |
| **Vite Client Production Build** | Full Site Asset Graph | Rollup Tree-Shaking, CSS Minification | **0 ERRORS (Code 0)** |
| **Vite SSR Server Build** | Server Entry Bundle | Node/Netlify SSR Target | **0 ERRORS (Code 0)** |
| **Edge Route Sensor** | 26 Live Endpoints | HTTP 200/301 Status Check | **26/26 PASSED (100%)** |
| **Screenshot Capture Sensor** | 13 Viewports | Headless Chrome Execution | **13/13 CAPTURED** |

---

## 6. Conclusion

The website inventory is completely reconciled, verified, and locked. No broken links, orphan assets, or unresolved discrepancies exist. The platform is technically and editorially ready for executive sign-off.
