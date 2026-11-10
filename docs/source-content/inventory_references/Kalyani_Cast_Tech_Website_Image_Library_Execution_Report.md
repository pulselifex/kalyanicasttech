# KALYANI CAST TECH LIMITED

## Website Image Working Library — Execution & Verification Report

**Document Reference:** `KCT-WIR-2026-01`  
**Execution Timestamp:** 2026-10-15T10:18:00+05:30  
**Source Master Library:** `D:\Kalyani Tech\Kalyani Records\K-tech Terminal Images`  
**Destination Working Library:** `D:\Kalyani Tech\Kalyani Records\Company Presentation & Brochure\Website Content`  
**Master Inventory Workbook:** `08_Image_Inventory\Kalyani_Cast_Tech_Website_Image_Working_Inventory.xlsx`

---

## 1. Executive Summary & Verification Metrics

Following the approval of the _Kalyani Cast Tech Website Image Audit, Asset Mapping & Visual Direction Plan_, this execution phase established the curated, controlled local working library. All files were copied using high-integrity metadata-preserving replication (`shutil.copy2`). **No original source files were moved, renamed, altered, or deleted.** All pre-existing content documents in the destination directory remain 100% intact.

### Core Execution Counters

| Metric Description                                       | Target / Cataloged | Verified Outcome |  Execution Compliance  |
| :------------------------------------------------------- | :----------------: | :--------------: | :--------------------: |
| **Total Source Assets Surveyed & Cataloged**             |        100         |     **100**      |     100% Accounted     |
| **Manifest Working Assets Defined**                      |         87         |      **87**      |      100% Matched      |
| **Assets Successfully Copied to Working Folders**        |         83         |      **83**      |      100% Success      |
| **Assets Already Present Prior to Run**                  |         0          |      **0**       | Clean Initial Baseline |
| **Assets Excluded & Quarantined (Synthetic AI Renders)** |         4          |      **4**       | Quarantined in Source  |
| **Missing / Inaccessible Source Files**                  |         0          |      **0**       |    0 Missing Files     |
| **Destination File Integrity (Zero-byte / Corrupt)**     |         0          |      **0**       | 100% Valid & Openable  |
| **Pre-existing Word Content Documents Preserved**        |         6          |      **6**       | 0 Overwritten / Intact |

---

## 2. Working Library Directory Allocation & Inventory

The 8 functional working directories inside `Website Content` have been created and populated as follows:

```
D:\Kalyani Tech\Kalyani Records\Company Presentation & Brochure\Website Content\
├── 01_Homepage/                    [3  Master Assets — Hero, Facility & Yard Proof]
├── 02_Products_Containers/          [28 Master Assets — Cotton, Steel, Dwarf, CAD]
├── 03_Manufacturing_Engineering/    [9  Master Assets — Fabrication, Welding, Paint Bays]
├── 04_Shivlakha_Logistics/          [15 Master Assets — Rail Siding, GCT, Stackers, Plans]
├── 05_Company_Team/                 [4  Master Assets — Leadership, Engineering, Staff]
├── 06_Corporate_Investor/           [5  Master Assets — Logos, Capacity Certs, ESG]
├── 07_Needs_Review/                 [19 Master Assets — Unverified Prototypes & Cages]
└── 08_Image_Inventory/              [Master Excel Workbook + Execution Report]
```

### Detailed Folder Breakdown

| Working Directory                  | File Count | Primary Functional Scope & Image Categories                                                                                                           |
| :--------------------------------- | :--------: | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`01_Homepage`**                  |   **3**    | Full-bleed hero candidates: Rewari Factory 30MP interior, Shivlakha 24MP yard staging, and on-site administration building.                           |
| **`02_Products_Containers`**       |   **28**   | Physical photography and 3D CAD models of 40HC Cotton Bale Containers, Specialised Steel Coils, Dwarf Containers, and 2-Wheeler cargo platforms.      |
| **`03_Manufacturing_Engineering`** |   **9**    | Heavy structural fabrication bays, robotic & manual GMAW welding stations, automated grit blasting & painting booths, and assembly lines.             |
| **`04_Shivlakha_Logistics`**       |   **15**   | Dedicated multimodal rail siding tracks, Kalmar reach stackers, container rakes, Gati Shakti Cargo Terminal (GCT) layout diagrams, and regional maps. |
| **`05_Company_Team`**              |   **4**    | Managing Director / Executive Leadership executive portraiture, senior engineering team, and shopfloor technical crews.                               |
| **`06_Corporate_Investor`**        |   **5**    | High-resolution corporate identity logo vector/raster files, Ministry/RDSO Capacity Verification Certificates, and facility compliance assets.        |
| **`07_Needs_Review`**              |   **19**   | Candidate assets with ambiguous technical specifications (salt container interior wear, unverified vehicle transport cages, non-standard prototypes). |
| **`08_Image_Inventory`**           |   **2**    | `Kalyani_Cast_Tech_Website_Image_Working_Inventory.xlsx` (15-column master index) and this Execution Report.                                          |
| **Excluded (Synthetic AI)**        |   **4**    | DALL-E container concept renders retained strictly in source directory (`Containers\ChatGPT Images\`); excluded from active web library.              |
| **Total Active Staged Assets**     |   **83**   | **Pure authentic industrial assets ready for visual review & layout testing.**                                                                        |

---

## 3. Filename Collision Prevention & Working Renames

To avoid data loss from identical source filenames originating from different subfolders, two collisions were safely resolved during replication:

1. **Collision 1 — Salt Container Inspection Photograph:**
   - _Original Filename:_ `1.jpeg`
   - _Source Path:_ `Containers\20HC Spl Salt Contr COntiner\1.jpeg`
   - _Working Staging Path:_ `07_Needs_Review\salt_container_inspection_01.jpeg`
   - _Rationale:_ Resolved collision with steel drawing; staged in review folder due to visible surface salt residue requiring engineering sign-off.
2. **Collision 2 — 40ft Specialised Steel Container Technical Drawing:**
   - _Original Filename:_ `1.png`
   - _Source Path:_ `Containers\40 Spl Steel Container\1.png`
   - _Working Staging Path:_ `02_Products_Containers\40_spl_steel_drawing_elevation.png`
   - _Rationale:_ Descriptive rename preserves engineering clarity for product specifications tab.

Both original filenames, source paths, and working names are permanently documented in the inventory workbook.

---

## 4. Unsafe Asset Exclusion & Quarantine Register

In strict compliance with Step 5 of the execution protocol, all four synthetic generative AI images discovered in the source library were quarantined and **excluded from the website working library**:

| Asset ID    | Quarantined Filename                          | Source Directory             | Exclusion Reason                                                                                      |
| :---------- | :-------------------------------------------- | :--------------------------- | :---------------------------------------------------------------------------------------------------- |
| **AST-075** | `ChatGPT Image Sep 26, 2026, 12_39_24 PM.png` | `Containers\ChatGPT Images\` | Synthetic DALL-E AI render. Distorted container twist-locks and non-standard corrugation geometry.    |
| **AST-076** | `ChatGPT Image Sep 26, 2026, 12_40_30 PM.png` | `Containers\ChatGPT Images\` | Synthetic DALL-E AI render. Fabricated cargo platform; misleading to commercial buyers.               |
| **AST-077** | `ChatGPT Image Sep 26, 2026, 12_41_08 PM.png` | `Containers\ChatGPT Images\` | Synthetic DALL-E AI render. Hallucinated container corner castings and improper rail bogies.          |
| **AST-078** | `ChatGPT Image Sep 26, 2026, 12_44_37 PM.png` | `Containers\ChatGPT Images\` | Synthetic DALL-E AI render. Fictional warehouse environment; poses commercial misrepresentation risk. |

**Action Taken:** These files remain untouched in their original source location on `D:\` drive and have been tagged as `Excluded — Synthetic or Unsuitable` in the master inventory.

---

## 5. Technical & Factual Verification Quarantine (`07_Needs_Review`)

A total of **19 assets** have been placed into `07_Needs_Review`. These assets are authentic company photographs but require explicit engineering or commercial clarification prior to public web publication:

1. **Vehicle Transport Racks / 2-Wheeler Cages (6 Assets):**
   - _Files:_ `2 wheeler container.jpeg`, `20260905_134017.jpg`, `20260905_134045.jpg`, `20260905_134107.jpg`, `20260905_134114.jpg`, `20260905_134208.jpg`
   - _Verification Needed:_ Confirm whether these internal auto-racks are in current commercial production or represent custom bespoke prototypes.
2. **Salt Container Prototype Units (2 Assets):**
   - _Files:_ `salt_container_inspection_01.jpeg`, `20HC Spl Salt Contr.jpeg`
   - _Verification Needed:_ Inspect surface paint quality and verify lining specification for corrosive bulk salt transport.
3. **Unspecified Custom Container Prototypes (11 Assets):**
   - _Files:_ High-cube modified boxes without formal capacity plates (`DSC_1615.JPG.jpeg`, `DSC_1623.JPG.jpeg`, `DSC_1640.JPG.jpeg`, etc.).
   - _Verification Needed:_ Assign verified internal volume (cu.m) and gross payload (MT) before mapping to product catalog tables.

---

## 6. Recommended Shortlist for Homepage Hero Banner

For human art-direction and visual review, the top candidates for the Homepage Hero placement are:

|            Candidate Rank             | Filename & Path                  | Resolution & Tech Specs                                             | Visual & Art Direction Rationale                                                                                                                                                                                                                                                                        |
| :-----------------------------------: | :------------------------------- | :------------------------------------------------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
|  **Option A (Recommended Primary)**   | `01_Homepage\Rewari Factory.jpg` | **6720 × 4480** (30.1 MP)<br>Canon EOS 5D Mark IV<br>12.4 MB Master | **Maximum Industrial Authority.** Shows immense scale of heavy container fabrication bays, overhead gantry cranes, and active production lines. Proves Kalyani Cast Tech is a genuine tier-1 manufacturer rather than a broker. Ideal for desktop 21:9 panoramic crop with dark gradient text underlay. |
| **Option B (Alternative Multimodal)** | `01_Homepage\DSC_1613.JPG.jpeg`  | **6048 × 4032** (24.4 MP)<br>Nikon Z6 III<br>10.0 MB Master         | **Completed Product Yard & Scale.** Showcases clean outdoor staging of completed specialised container units under natural daylight. Communicates finished product readiness and delivery capability.                                                                                                   |
|  **Option C (Facility & Corporate)**  | `01_Homepage\admin.jpeg`         | **1537 × 968**<br>Architectural Shot<br>254 KB                      | **Permanent Infrastructure Anchor.** Authentic photograph of the modern Shivlakha administrative building. Recommended as the visual anchor for the Homepage Consultation & Commercial Enquiry CTA band.                                                                                                |

---

## 7. Status of Non-Image Website Assets Preserved

All 6 master content Word documents residing in the root of `Website Content` were checked before and after script execution. All files retain identical byte lengths and timestamps:

1. `Kalyani_Cast_Tech_Master_Company_Content_Document_V1.docx` (53,349 bytes) — **Intact**
2. `Kalyani_Cast_Tech_Website_Content_Architecture_Master_Plan_V1.docx` (48,145 bytes) — **Intact**
3. `Kalyani_Cast_Tech_Website_Current_vs_Proposed_Content_Master_V2_Gemini_Reviewed.docx` (52,397 bytes) — **Intact**
4. `Kalyani_Cast_Tech_Website_Full_Content_Master_V1.docx` (46,089 bytes) — **Intact**
5. `Kalyani_Cast_Tech_Website_MASTER_Final_V2_Complete.docx` (55,904 bytes) — **Intact**
6. `Website Content current 260926.docx` (30,068 bytes) — **Intact**

---

## 8. Next Operational Steps (Phase 3: Visual Review & Layout Staging)

In accordance with Step 9 guidelines:

- **No image enhancement, upscaling, cropping, or compression has been applied.**
- Working files are bit-for-bit replicas of original camera and CAD exports.
- **Next Action:** Antigravity and human reviewer will inspect candidates in `01_Homepage` and `02_Products_Containers` to select final crops, determine WebP responsive delivery breakpoints (1920px, 1280px, 768px), and approve color-grading styles.

---

_Report certified by Antigravity Autonomous Pair Programming Agent._
