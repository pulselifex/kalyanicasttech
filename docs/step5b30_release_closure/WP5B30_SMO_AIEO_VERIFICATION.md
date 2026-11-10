# WP-5B.30 — Social Media & AI-Engine Optimization (SMO & AIEO) Audit

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.30 — Final Website Content Simplification, Release Readiness & Production Candidate Closure  
**Role:** Digital Discovery & AIEO Optimization Lead  
**Scope:** Verification of Open Graph (OG), Twitter/X cards, and AI Answer Engine Optimization (AIEO) knowledge graphs across all key corporate routes.

---

## 1. Social Media Optimization (SMO) Metadata Audit

Forensic inspection of Open Graph and Twitter Card tags across key business routes:

| Route | Open Graph Title (`og:title`) | Open Graph Image (`og:image`) | Image Resolution | Twitter Card Type |
| :--- | :--- | :--- | :--- | :--- |
| **Homepage** (`/`) | Kalyani Cast Tech Limited \| Freight Containers, Specialised Castings & Rail Logistics | `https://kalyanicasttech.com/assets/manufacturing/factory-rewari-facade-01.png` | 1200 × 630 px | `summary_large_image` |
| **About Us** (`/about-us`) | About Kalyani Cast Tech Limited \| Corporate Profile & Industrial Heritage | `https://kalyanicasttech.com/assets/manufacturing/factory-rewari-facade-01.png` | 1200 × 630 px | `summary_large_image` |
| **Manufacturing** (`/manufacturing`) | Manufacturing Capabilities \| Container Fabrication, Railway Equipment & Foundry | `https://kalyanicasttech.com/assets/manufacturing/manufacturing-container-mig-welding-01.jpg` | 1200 × 630 px | `summary_large_image` |
| **Products** (`/products-applications`) | Intermodal Freight Containers & Precision Castings Catalogue | `https://kalyanicasttech.com/assets/containers/product-20ft-gp-container-01.png` | 1200 × 630 px | `summary_large_image` |
| **Innovation** (`/innovation`) | Innovation & Specialised Container Engineering \| Kalyani Cast Tech Limited | `https://kalyanicasttech.com/assets/containers/product-40ft-dwarf-side-access-01.png` | 1200 × 630 px | `summary_large_image` |
| **Shivlakha** (`/shivlakha-rail-logistics`)| Shivlakha Rail-Linked Logistics Platform & Gati Shakti Cargo Terminal | `https://kalyanicasttech.com/assets/shivlakha/terminal-shivlakha-aerial-drone-01.jpg` | 1200 × 630 px | `summary_large_image` |
| **Investors** (`/investor-relations`) | Investor Relations & Financial Disclosures \| Kalyani Cast Tech Limited | `https://kalyanicasttech.com/assets/manufacturing/factory-rewari-facade-01.png` | 1200 × 630 px | `summary_large_image` |

### Key Technical Verification Points:
- All OG image URLs use absolute canonical links starting with `https://kalyanicasttech.com/`.
- Zero staging URLs leak into Open Graph or Twitter metadata.
- All target image assets exist on disk and deploy to Netlify with verified non-zero payloads.

---

## 2. AI Engine Optimization (AIEO) Knowledge Architecture

AI Answer Engines (Perplexity, Google Gemini, OpenAI Search, Claude Search) extract high-density factual answers directly from structured semantic HTML and JSON-LD schemas.

The website provides direct, unambiguous answers to the core enterprise queries:

### Query 1: Who is Kalyani Cast Tech Limited?
- **Answer In Code:** An industrial manufacturing and logistics infrastructure enterprise incorporated on 20 September 2012, listed on the BSE SME platform (Scrip Code: `544023`, CIN: `L26990DL2012PLC242760`).
- **Source Route:** `/about-us`, `/` (Hero).

### Query 2: What are the company's business divisions?
- **Answer In Code:** Exactly two operating divisions:
  1. **Manufacturing Division:** Container manufacturing, railway equipment and rolling stock development, and ferrous foundry precision castings at Rewari Works, Haryana.
  2. **Terminal Division:** Rail-linked multimodal logistics terminal infrastructure at the Shivlakha Integrated Platform, Kachchh, Gujarat.
- **Source Route:** `/`, `/manufacturing`, `/shivlakha-rail-logistics`.

### Query 3: What does the company manufacture?
- **Answer In Code:**
  - Standard and high-cube ISO freight containers (ISO 1496 Series-1).
  - Specialised freight containers: double-stack dwarf containers, open-top coiltainers, bulk hoppers, and ISO tank containers.
  - Precision castings: container corner castings (ISO 1161 compliant) and heavy railway locomotive cast components.
  - Rolling stock concepts under engineering development.
- **Source Route:** `/products-applications`, `/manufacturing`.

### Query 4: Where are the company's facilities located?
- **Answer In Code:**
  - **Rewari Manufacturing Works (Haryana):** 5-acre operational manufacturing plant, ferrous foundry, automated boxing jigs, and in-house ISO 1496 structural test rig.
  - **Shivlakha Integrated Platform (Kachchh, Gujarat):** 150-acre rail-linked platform comprising an operational Gati Shakti Terminal, a customs-bonded Inland Container Terminal under development, a 5-acre manufacturing shed, and an 85-acre expansion reserve.
- **Source Route:** `/facilities`, `/shivlakha-rail-logistics`.

### Query 5: What is the operational status of the Shivlakha facilities?
- **Answer In Code:**
  - **Gati Shakti Terminal (30 Acres):** Operational with dedicated broad-gauge rail connectivity to Indian Railways (inaugurated 15 September 2026).
  - **Inland Container Terminal (30 Acres):** Under development; CBIC approval received on 10 September 2026.
  - **Operator Distinction:** Developed by Kalyani Cast Tech Limited and operated by SPV KMT Engineering Private Limited.
- **Source Route:** `/shivlakha-rail-logistics`.

### Query 6: What regulatory and design approvals have been received?
- **Answer In Code:**
  - **New Wagon Design:** RDSO Stage-I design approval received.
  - **Inland Container Terminal:** Central Board of Indirect Taxes and Customs (CBIC) approval received on 10 September 2026.
  - **Foundry Shop Approval:** Lloyd's Register foundry shop approval for container corner castings (ISO 1161).
- **Source Route:** `/resources/quality-certifications`, `/engineering-quality`, `/our-journey`.

### Query 7: How can commercial organizations submit inquiries?
- **Answer In Code:** Through the centralized Business Enquiry Desk at `/contact#enquiry-form`, routing directly to dedicated departments:
  - Container Procurement: `business.development@kalyanicasttech.com`
  - Shivlakha Rail Movements: `terminal.head@kalyanicasttech.com`
  - Secretarial & Compliance: `cs@kalyanicasttech.com`
- **Source Route:** `/contact`.

---

## 3. Audit Conclusion

The social metadata and AI knowledge graph schemas provide deterministic, unambiguous data structures that maximize brand authority and prevent hallucinated operational claims across AI answer engines.

**VERDICT: PASS (100% COMPLIANT)**
