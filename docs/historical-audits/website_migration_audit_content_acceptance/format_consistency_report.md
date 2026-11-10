# KALYANI CAST TECH LIMITED

## Phase 2B Deliverables Review — Format Consistency & Multi-Format Parity Report

**Audit Reference:** DOC-AUDIT-2026-FCR-001  
**Project:** Kalyani Cast Tech Limited Website Migration  
**Auditor:** Senior Website Implementation Auditor & Technical QA Lead  
**Review Date:** 17 October 2026  
**Subject Files:**

1. `Kalyani_Cast_Tech_Website_Content_Master_Final.docx`
2. `Kalyani_Cast_Tech_Website_Content_Master_Final.md`
3. `Kalyani_Cast_Tech_Website_Content_Master_Final.html` (Reported Delivered)

---

## 1. Executive Summary & Delivery Verification

Sakana submitted a completion notice claiming that the final website content master was delivered in three synchronized formats (Microsoft Word, Markdown, and HTML), asserting:

> _"All three output formats (Word, Markdown, HTML) are generated from this single canonical master."_

An independent physical inspection of the filesystem, downloads directory (`C:\Users\abc\Downloads\`), and project workspace was conducted on 17 October 2026.

### Deliverables Status Matrix

| Deliverable File                                      |    Filesystem Status    |  File Size   |    Last Modified    |                   Structural Integrity                    |         Parity Status         |
| ----------------------------------------------------- | :---------------------: | :----------: | :-----------------: | :-------------------------------------------------------: | :---------------------------: |
| `Kalyani_Cast_Tech_Website_Content_Master_Final.docx` |        **FOUND**        | 47,076 bytes | 2026-10-16 21:34:31 | Valid OpenXML WordprocessingML; 479 paragraphs, 14 tables |      **Baseline Master**      |
| `Kalyani_Cast_Tech_Website_Content_Master_Final.md`   |        **FOUND**        | 27,697 bytes | 2026-10-16 21:34:22 |       Valid UTF-8 GFM; 660 lines, 27,653 characters       | **100% Text Match with DOCX** |
| `Kalyani_Cast_Tech_Website_Content_Master_Final.html` | **NOT FOUND / MISSING** |   0 bytes    |         N/A         |           **File absent from delivery bundle**            | **CRITICAL DELIVERY DEFECT**  |

### Key Finding on Delivery

Sakana **failed to deliver the HTML version**. While the completion note and project instructions state that `.docx`, `.md`, and `.html` were delivered, an exhaustive filesystem search across `C:\Users\abc\Desktop`, `Documents`, `Downloads`, and the local scratch repository confirmed that only the `.docx` and `.md` files exist.

---

## 2. Forensic Structural Comparison: Word (.docx) vs. Markdown (.md)

A custom OpenXML extraction script (`scripts/compare-sakana-deliverables.ps1`) was executed to parse `word/document.xml` from the Word document and perform a paragraph-by-paragraph and table-by-table cross-examination against the Markdown file.

### 2.1 Table Structure Reconciliation

| Table # | Document Section                                 | DOCX Table Dimensions                      | Markdown Structure                | Parity Finding  |
| :-----: | ------------------------------------------------ | ------------------------------------------ | --------------------------------- | :-------------: |
|  **1**  | Master Document Metadata                         | 7 rows × 2 cols                            | GFM Pipe Table (7 rows)           | **Exact Match** |
|  **2**  | Governing Rule Box                               | 1 row callout box                          | GFM Blockquote (`>`)              | **Exact Match** |
|  **3**  | Page 1 (Home) Metadata                           | 5 rows × 2 cols                            | GFM Pipe Table (5 rows)           | **Exact Match** |
|  **4**  | Page 2 (About Us) Metadata                       | 5 rows × 2 cols                            | GFM Pipe Table (5 rows)           | **Exact Match** |
|  **5**  | Page 3 (Manufacturing) Metadata                  | 5 rows × 2 cols                            | GFM Pipe Table (5 rows)           | **Exact Match** |
|  **6**  | Page 4 (Facilities) Metadata                     | 5 rows × 2 cols                            | GFM Pipe Table (5 rows)           | **Exact Match** |
|  **7**  | Page 5 (Products & Applications) Metadata        | 5 rows × 2 cols                            | GFM Pipe Table (5 rows)           | **Exact Match** |
|  **8**  | Page 6 (Engineering, Quality & Testing) Metadata | 5 rows × 2 cols                            | GFM Pipe Table (5 rows)           | **Exact Match** |
|  **9**  | Page 7 (Shivlakha Rail & Logistics) Metadata     | 5 rows × 2 cols                            | GFM Pipe Table (5 rows)           | **Exact Match** |
| **10**  | Page 8 (Resources) Metadata                      | 5 rows × 2 cols                            | GFM Pipe Table (5 rows)           | **Exact Match** |
| **11**  | Page 9 (Investor Relations) Metadata             | 5 rows × 2 cols                            | GFM Pipe Table (5 rows)           | **Exact Match** |
| **12**  | Page 10 (Contact Us) Metadata                    | 5 rows × 2 cols                            | GFM Pipe Table (5 rows)           | **Exact Match** |
| **13**  | Internal Appendix (Unresolved Issues)            | 11 rows × 8 cols (1 Header + 10 Data Rows) | GFM Pipe Table (11 rows × 8 cols) | **Exact Match** |
| **14**  | Completion Note Box                              | 1 row callout box                          | GFM Blockquote (`>`)              | **Exact Match** |

---

## 3. Page-by-Page Content & Heading Parity

Both `.docx` and `.md` contain exactly the same 10 website pages, headings, body copy, and metadata:

### 1. Home (`/`)

- **DOCX Matches:** 2 headings, 4 content sections, 2 CTAs, 1 visual description.
- **MD Matches:** Identical text (`Freight Containers & Logistics Solutions | Kalyani Cast Tech`).
- **Hero:** _"Container manufacturing, specialised cargo applications and an evolving rail and logistics platform."_
- **CTAs:** Primary: _Discuss a container requirement_; Secondary: _Discuss a cargo movement_.
- **Factual Claims:** Established manufacturing at Rewari; Shivlakha platform under development.

### 2. About Us (`/about-us/`)

- **DOCX Matches:** 4 headings, 4 content sections, 2 CTAs.
- **MD Matches:** Identical text (`About Us | Kalyani Cast Tech Limited`).
- **Hero:** _"From an established manufacturing base in Rewari to a rail-linked logistics platform at Shivlakha."_
- **Statutory Claims:** CIN: `L26990DL2012PLC242760`, BSE SME-listed engineering company.
- **CTAs:** Primary: _Explore our products_; Secondary: _Contact us_.

### 3. Container Manufacturing (`/manufacturing/`)

- **DOCX Matches:** 3 headings, 3 content sections, 2 CTAs.
- **MD Matches:** Identical text (`Container Manufacturing | Kalyani Cast Tech`).
- **Hero:** _"Built around the cargo, confirmed by the specification."_
- **Factual Claims:** Manufacturing base at Rewari; specifications confirmed against current controlled data sheet for exact product and revision.
- **CTAs:** Primary: _Request a technical data sheet_; Secondary: _Discuss a container requirement_.

### 4. Manufacturing Facilities (`/facilities/`)

- **DOCX Matches:** 3 headings, 4 content sections, 2 CTAs.
- **MD Matches:** Identical text (`Manufacturing Facilities | Rewari & Shivlakha`).
- **Hero:** _"Rewari and Shivlakha — established production and developing infrastructure."_
- **Address Claims:** Mamaria Thethar, District Rewari, Haryana 123101.
- **Contradiction Present in Both Formats:** Both formats include the unverified sentence:
  > _"Container manufacturing at Shivlakha is operational. The Gati Shakti Cargo Terminal is operational. Wagon manufacturing is under development, with a target readiness in the fourth quarter of FY 2026-27. The inland container depot is under development, with a target operational date in the first quarter of FY 2027-28."_
- **CTAs:** Primary: _Contact us about facilities_; Secondary: _Explore Shivlakha_.

### 5. Products & Applications (`/products-applications/`)

- **DOCX Matches:** 5 headings, 5 content sections, 2 CTAs.
- **MD Matches:** Identical text (`Freight Containers & Cargo Applications | Kalyani Cast Tech`).
- **Hero:** _"Container configurations built around what you are moving."_
- **Scope:** Standard containers, specialised containers (dwarf, wider-dwarf, open-top, tank, hopper), rail/parcel cargo, custom designs.
- **CTAs:** Primary: _Request a technical data sheet_; Secondary: _Discuss a specialised requirement_.

### 6. Engineering, Quality & Testing (`/engineering-quality/`)

- **DOCX Matches:** 3 headings, 3 content sections, 2 CTAs.
- **MD Matches:** Identical text (`Engineering, Quality & Testing | Kalyani Cast Tech`).
- **Hero:** _"Design, validation and quality documentation tied to the product."_
- **Factual Claims:** Differentiates testing equipment, inspection methods, test results, and formal certification.
- **CTAs:** Primary: _Share an engineering requirement_; Secondary: _Request quality documentation_.

### 7. Shivlakha Rail & Logistics (`/shivlakha-rail-logistics/`)

- **DOCX Matches:** 4 headings, 4 content sections, 2 CTAs.
- **MD Matches:** Identical text (`Shivlakha Rail & Logistics | Kachchh, Gujarat`).
- **Hero:** _"A developing rail-linked platform for cargo movement in the Kachchh industrial region."_
- **Address Claims:** Village Shivlakha, Taluka Bhachau, District Kachchh, Gujarat.
- **Contradiction Present in Both Formats:** Re-asserts that container manufacturing and cargo terminal at Shivlakha are operational.
- **CTAs:** Primary: _Submit cargo details_; Secondary: _Learn about the Gati Shakti Cargo Terminal_.

### 8. Resources (`/resources/`)

- **DOCX Matches:** 4 headings, 4 content sections, 2 CTAs.
- **MD Matches:** Identical text (`Resources | Kalyani Cast Tech`).
- **Hero:** _"Find the approved document for the product, facility or company information you need."_
- **Categories:** Corporate profile & brochures, Product data sheets, Quality & certifications, News & media.
- **CTAs:** Primary: _Browse corporate brochures_; Secondary: _Request a product data sheet_.

### 9. Investor Relations (`/investor-relations/`)

- **DOCX Matches:** 6 headings, 6 content sections, 2 CTAs.
- **MD Matches:** Identical text (`Investor Relations | Kalyani Cast Tech Limited`).
- **Hero:** _"Official company information and shareholder resources from Kalyani Cast Tech Limited."_
- **Statutory Claims:** CIN: `L26990DL2012PLC242760`, BSE SME Code: `544023`. RTA: Bigshare Services Pvt. Ltd. (SEBI Reg: `INR000001385`). Compliance Officer: Mr. Pankaj Kumar, PT-62/9 Kalkaji Extension.
- **CTAs:** Primary: _View financial information_; Secondary: _Contact investor support_.

### 10. Contact Us (`/contact/`)

- **DOCX Matches:** 4 headings, 4 content sections, 2 CTAs.
- **MD Matches:** Identical text (`Contact | Kalyani Cast Tech`).
- **Hero:** _"Reach the right team for your container, cargo or investor enquiry."_
- **Details:** Rewari plant address, Shivlakha platform Khasra No. 438, CS contact details, RTA contact details.
- **CTAs:** Primary: _Send an enquiry_; Secondary: _View investor relations_.

---

## 4. Internal Appendix Reconciliation

Both `.docx` (Table 13) and `.md` contain identical 10 unresolved items:

|  Issue ID  | Affected Page | Issue Stated                                       |     DOCX Status     |      MD Status      |          Finding           |
| :--------: | ------------- | -------------------------------------------------- | :-----------------: | :-----------------: | :------------------------: |
| **APP-01** | Facilities    | Rewari facility area and capacity figures conflict |     Unresolved      |     Unresolved      |         Identical          |
| **APP-02** | Engineering   | ISO 9001:2015 certificate scan pending             |     Unresolved      |     Unresolved      |         Identical          |
| **APP-03** | Products      | RDSO approval scope & capacity confirmation        |     Unresolved      |     Unresolved      |         Identical          |
| **APP-04** | Products      | 40ft HC / 84 cu.m specification datasheet match    |     Unresolved      |     Unresolved      |         Identical          |
| **APP-05** | Strategic     | KMT Engineering 51% operating subsidiary status    |     Unresolved      |     Unresolved      |         Identical          |
| **APP-06** | Commercial    | Live enquiry workflow delivery & persistence       |     Unresolved      |     Unresolved      |         Identical          |
| **APP-07** | Media         | Factory photo authenticity & currency              |     Unresolved      |     Unresolved      |         Identical          |
| **APP-08** | Shivlakha     | Master layout accuracy and status wording          | Partially addressed | Partially addressed | **Critical Contradiction** |
| **APP-09** | Corporate     | Registered office address conflict                 | Partially addressed | Partially addressed |    Resolved in Phase 2     |
| **APP-10** | Investors     | Live document population for Investor Relations    | Partially addressed | Partially addressed |    Resolved in Phase 2     |

---

## 5. Formatting & Typography Quality Check

1. **Heading Hierarchy:**
   - Both formats consistently use `#` / Heading 1 for Page Titles.
   - `##` / Heading 2 for major content sections.
   - `###` / Heading 3 for Page Metadata tables.
   - Hierarchy is clean, standard, and accessible.
2. **Special Characters & Entities:**
   - En-dashes (`–`) and em-dashes (`—`) render correctly in UTF-8.
   - Bullets (`·`) in navigation links render cleanly.
   - Currency symbol (`₹`) is formatted properly where cited.
3. **Public Copy Hygiene:**
   - Customer-facing copy is free of square-bracket placeholders (e.g. `[INSERT DATE]` or `[TBD]`).
   - Drafting notes and gap registers are cleanly isolated inside the Internal Appendix.

---

## 6. Conclusion & Recommendations

1. **Textual Parity:** High fidelity (100% text match) exists between the Word document and the Markdown document.
2. **Defect 1 (Missing HTML File):** Sakana did not deliver `Kalyani_Cast_Tech_Website_Content_Master_Final.html`. Management should record this delivery deficiency. (For web deployment, our TanStack Start application builds directly from structured JSON/TypeScript content, rendering this file non-blocking for code execution).
3. **Defect 2 (Internal Factual Contradiction):** Both Word and Markdown files assert in customer-facing copy that container manufacturing and terminal operations at Shivlakha are currently operational, while simultaneously acknowledging in Appendix item `APP-08` that Shivlakha status wording remains unverified. This must be corrected in website implementation copy.
