# SEBI LODR Financial Information Filing Audit & Reconciliation Report

**Entity:** Kalyani Cast Tech Limited (CIN: L27310DL2012PLC230799)  
**Target Page:** `/investors/financial-information` & `/investor-relations`  
**Date of Audit:** 31 October 2026  
**Audit Standard:** SEBI (LODR) Regulations, 2015 (Regulation 33, 34, 46 & 76) & BSE SME Disclosure Framework  

---

## 1. Executive Summary

A comprehensive document and URL integrity audit was conducted across the **Financial Information** page (`/investors/financial-information`) and the **SEBI LODR Filings** section on the main Investor Relations route. 

The audit identified:
- **26 Total Raw Filing Entries** previously presented on the page.
- **8 Exact Duplicate Links** resulting from multiple uploaded variants of the same 30.09.2023 Half-Yearly Results filing (`KCT_Results_Apr_Sep_Signed-1.pdf` through `-6.pdf`, `KCT_Results_Apr_Sep_Signed.pdf`, and `_new.pdf`, all possessing identical MD5 hash `780491ef`).
- **2 Duplicate Links** of the 25.12.2023 Board Meeting Outcome (`KCT_Result_BM_Outcome_6.15_signed-1.pdf` vs `signed.pdf`, MD5 hash `27913dc8`).
- **3 Misplaced Filings** that do not belong to Financial Results:
  - `Reconcilation-Share-Capital-Audit_31032024.pdf` (SEBI LODR Regulation 76 audit, relocated to `/investors/shareholder-information`).
  - `Voting-results-and-Scrutinizer-Report_12th-AGM_FY-2023-24.pdf` (Regulation 44 voting report, relocated to `/investors/ipo-corporate-actions`).
  - `Voting-results-and-Scrutinizer-Report_13th-AGM_FY-2024-2025.pdf` (Regulation 44 voting report, relocated to `/investors/ipo-corporate-actions`).
- **11 Curated Authoritative Documents** retained under the clean, simplified SEBI LODR Filings presentation.

---

## 2. Duplicate Detection & Consolidation Register

| Document Subject | Duplicate Files Identified | Identical MD5 Hash | Authoritative Retained Document | Consolidation Action |
| :--- | :--- | :--- | :--- | :--- |
| **Half-Year ended 30.09.2023 Unaudited Results** | `KCT_Results_Apr_Sep_Signed-1.pdf`<br>`KCT_Results_Apr_Sep_Signed-2.pdf`<br>`KCT_Results_Apr_Sep_Signed-3.pdf`<br>`KCT_Results_Apr_Sep_Signed-4.pdf`<br>`KCT_Results_Apr_Sep_Signed-5.pdf`<br>`KCT_Results_Apr_Sep_Signed-6.pdf`<br>`KCT_Results_Apr_Sep_Signed.pdf`<br>`KCT_Results_Apr_Sep_Signed_new.pdf` | `780491ef9... ` (1,103,549 bytes) | `Financial-Results_30.09.2023.pdf` | Removed all 8 duplicate website links; consolidated to single authoritative record. |
| **BM Outcome 25.12.2023 (Financial Results Approval)** | `KCT_Result_BM_Outcome_6.15_signed-1.pdf`<br>`KCT_Result_BM_Outcome_6.15_signed.pdf` | `27913dc8... ` (666,015 bytes) | `KCT_Result_BM_Outcome_6.15_signed.pdf` | Removed duplicate '-1' link; classified as Regulation 30 Board Outcome. |
| **12th AGM Annual Report FY 2023-24** | `Annual-Report_2023-2024.pdf`<br>`12th-Annual-Report_FY-2023-2024.pdf` | N/A (Draft vs Final) | `12th-Annual-Report_FY-2023-2024.pdf` | Retained signed final AGM record; retired un-indexed draft link. |
| **13th AGM Annual Report FY 2024-25** | `Annual-Report_AGM_FY_31.03.2025.pdf`<br>`13th-Annual-Report_FY-2024-2025.pdf` | N/A (Draft vs Final) | `13th-Annual-Report_FY-2024-2025.pdf` | Retained signed final AGM record; retired un-indexed draft link. |

---

## 3. Simplified & Approved Presentation Structure

The section heading and introductory copy have been standardized per corporate disclosure guidelines:

- **Section Heading:** `SEBI LODR Filings`
- **Supporting Description:** `Corporate disclosures and statutory filings published for investors and shareholders.`

### Categorised Document Directory
1. **Financial Results & Limited Review Reports (Regulation 33)**
   - Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2025)
   - Audited Financial Results & Managing Director Review (Year ended 31.03.2025)
   - Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2024)
   - Audited Financial Results & Balance Sheet (Year ended 31.03.2024)
   - Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2023)
   - Audited Balance Sheet & Statement of Profit & Loss (FY 2023-24)
   - Audited Balance Sheet & Statement of Profit & Loss (FY 2024-25)
2. **Annual Reports & Accounts (Regulation 34)**
   - 14th Annual General Meeting Report & Audited Accounts (FY 2025-26)
   - 13th Annual General Meeting Annual Report (FY 2024-25)
   - 12th Annual General Meeting Annual Report (FY 2023-24)
3. **Statements of Deviation / Variation (Regulation 32)**
   - Statement of Deviation or Variation in Public Issue Proceeds (Half-Year ended 30.09.2024)
   - Statement of Deviation or Variation in Public Issue Proceeds (Year ended 31.03.2025)
