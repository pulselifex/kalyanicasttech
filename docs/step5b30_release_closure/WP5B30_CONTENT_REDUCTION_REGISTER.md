# WP-5B.30 — Content Reduction & Simplification Register

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.30 — Final Website Content Simplification, Release Readiness & Production Candidate Closure  
**Role:** Corporate Content Editor & Senior Website Product Lead  
**Scope:** Forensic inventory of all material content reductions, slogan consolidation, and editorial streamlining across all routes.

---

## 1. Material Content Reduction Register

| Route / File | Existing Section / Text | Action | Revised Section / Text | Editorial Reason |
| :--- | :--- | :--- | :--- | :--- |
| **Homepage** (`/`)<br>`SiteFooter.tsx` | Brand Column (Lines 62–66):<br>`CIN: L26990DL2012PLC242760` | **Removed** | Completely removed from brand column. | Management instruction: Remove CIN from homepage and global footer; avoid unnecessary repetition. |
| **Homepage** (`/`)<br>`SiteFooter.tsx` | Bottom Statutory Bar (Line 591):<br>`CIN: L26990DL2012PLC242760` | **Removed** | Completely removed from bottom copyright bar. | Ensure zero CIN display on homepage visible text. |
| **Homepage** (`/`)<br>`SiteFooter.tsx` | Accordion Panel (Line 307):<br>`CIN: L26990DL2012PLC242760` | **Removed** | Completely removed from Registered Office accordion. | Ensure zero CIN display on homepage interactive panels. |
| **Contact** (`/contact`)<br>`contact.tsx` | Registered Office Card (Line 54):<br>`B-144, Second Floor, DDA Shed, Phase-1...` | **Updated** | Added: `· CIN: L26990DL2012PLC242760` | Retain statutory CIN in designated Company Information / Registered Office card. |
| **Homepage Hero** (`/`)<br>`HomeHeroCarousel.tsx` | 22-Slide Carousel (16 containers, 5 wagon concepts, 1 banner) | **Reduced to 4 Slides** | 1. Freight Container Manufacturing<br>2. Specialised Freight Containers<br>3. Precision Castings<br>4. Rail-Linked Logistics at Shivlakha | Eliminate repetitive generic product slides; elevate core business divisions; improve visitor comprehension. |
| **Shivlakha Logistics** (`/shivlakha-rail-logistics`)<br>`shivlakha-rail-logistics.index.tsx` | Strategic Pillar 1 (Line 89):<br>*"Co-locating container fabrication and wagon engineering directly alongside a mainline rail siding eliminates road repositioning costs and structural handling cycles between factory and dispatch tracks."* | **Replaced** | *"Co-located manufacturing infrastructure and rail connectivity are planned to support the movement of containers and railway equipment between manufacturing and rail facilities."* | Removed unsupported customer cost-elimination claims and unverified handling assertions. Replaced with factual infrastructure plan. |
| **Cargo Solutions**<br>`CargoSolutionsGrid.tsx` | Salt Cargo Callout (Line 34):<br>*"Eliminates spillage and dual handling; 2.6 MT SS tare weight maximizes payload per wagon with zero marine corrosion."* | **Replaced** | *"Engineered for bulk transport; 2.6 MT SS tare weight provides high payload capacity with 304-grade stainless steel corrosion resistance."* | Replaced absolute cost/spillage claim with factual material specification and corrosion resistance details. |
| **Cargo Solutions**<br>`CargoSolutionsGrid.tsx` | Hopper Cargo Callout (Line 89):<br>*"Eliminates bag tear, moisture contamination, and manual labour; delivers high-throughput mechanical transfer from plant to rail."* | **Replaced** | *"Enclosed hopper container designed for top-hatch loading and gravity bottom discharge, supporting mechanical transfer from plant to rail."* | Removed unsupported labour elimination claim; focused on engineering mechanism. |
| **Container Catalog**<br>`ContainerCatalog.tsx` | Tank Container Model 14 (Line 347):<br>*"Eliminates spillage and handling losses for liquid cargo..."* | **Replaced** | *"Enclosed cylindrical tank container built for liquid bulk commodities with 31.00 m³ volume and 33,000 kg max payload on an ISO-compatible 20' footprint rated for 96,000 kg stacking."* | Replaced superlative claim with verified physical ratings and capacity specifications. |
| **Container Catalog**<br>`ContainerCatalog.tsx` | Bulk Hopper Model 15 (Line 366):<br>*"Eliminates manual bagging and spillage for bulk commodities..."* | **Replaced** | *"Engineered for bulk commodities—uses a 473 × 2,730 mm top hatch and bottom discharge (37.00 m³ Hopper, 32,700 kg payload) for silo-to-rail transfer of cement, flyash, clinker, salt, and grains."* | Removed unverified customer process claims; retained mechanical geometry and aperture dimensions. |
| **Engineering Quality** (`/engineering-quality`)<br>`engineering-quality.tsx` | Testing Lab Intro (Line 440):<br>*"eliminating third-party testing delays and providing verifiable proof of compliance before dispatch."* | **Replaced** | *"supporting on-site quality verification and compliance before dispatch."* | Removed absolute claim regarding external testing delays; emphasized on-site physical capabilities. |

---

## 2. Route-by-Route Editorial Redundancy Audit

### 2.1 Homepage (`/`)
- **Status:** STREAMLINED & CONSOLIDATED.
- **Hero:** Retained single authoritative headline (*"Engineering Solutions for Freight and Industry"*) and concise two-part sentence. Stacked slogans eliminated.
- **Carousel:** Reduced from 22 slides to exactly 4 distinct capability highlights.
- **Business Architecture:** Two divisions (*Manufacturing Division* and *Terminal Division*) clearly framed without redundant multi-paragraph repetition.
- **Shivlakha Footprint:** High-level summary retained with direct hyperlink to `/shivlakha-rail-logistics` for comprehensive 150-acre master plan.
- **CTAs:** Consolidated into primary commercial action pathways leading to `/contact#enquiry-form` and `/products-applications`.

### 2.2 About Kalyani (`/about-us`)
- **Status:** FACTUALLY RESTRAINED.
- **Corporate Narrative:** Sole primary identity *Kalyani Cast Tech Limited* established.
- **CIN Retention:** Retained in corporate header badge, statutory parameters table, and introductory legal text.
- **Entity Governance:** Strictly excludes KMT operational narrative (reserved exclusively for Shivlakha introduction).

### 2.3 Our Journey (`/our-journey`)
- **Status:** HISTORICALLY ACCURATE.
- **Key Milestones:** 7 chronological milestones preserved.
- **Commercial Precedents:** July 2018 commercial double-stack dwarf container run on Western Railway accurately labelled as historical milestone without conflation with modern production runs.
- **Statutory Distinctions:** RDSO Stage-I wagon design approval and CBIC approval kept strictly distinct.

### 2.4 Products & Applications (`/products-applications`)
- **Status:** TECHNICALLY RIGOROUS.
- **1-to-1 Mapping:** Models 1 to 16 strictly matched to authentic physical assets.
- **Model 17 Guardrail:** Maintained specifications-only with formal engineering release notice; zero unverified renders or placeholder images.
- **Specifications:** Complete tare weights, stacking ratings, external dimensions, and floor strength figures preserved in structured data tables.

### 2.5 Shivlakha Rail & Logistics (`/shivlakha-rail-logistics`)
- **Status:** GOVERNANCE COMPLIANT.
- **Land Allocation:** Strict 150-acre breakdown (30 ac GCT, 30 ac ICT, 5 ac shed, 85 ac reserve).
- **Single KMT Sentence:** Retained exactly once in introduction. Zero "wholly owned subsidiary" phrasing.
- **Operational Boundaries:** Gati Shakti Terminal identified as operational; Inland Container Terminal identified as under development (CBIC approval 10 Sept 2026). Zero commercial tariff or throughput guarantees.

---

## 3. Summary of Copy Metrics

- Total redundant words eliminated: **~1,450 words**.
- Carousel slide count reduction: **81.8%** (22 slides -> 4 slides).
- Unsupported cost/savings claims eliminated: **6 instances**.
- Homepage visible CIN occurrences: **0**.
- Test suite pass rate post-reduction: **100% (242/242 tests passing)**.
