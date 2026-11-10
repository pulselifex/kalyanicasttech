const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const cleanupDir = path.resolve(__dirname, '../docs/cleanup');
if (!fs.existsSync(cleanupDir)) {
  fs.mkdirSync(cleanupDir, { recursive: true });
}

// -------------------------------------------------------------
// 1. Financial Information Filing Inventory CSV & Audit MD
// -------------------------------------------------------------
const filingItems = [
  {
    id: "FIL-01",
    webTitle: "Annual Report - Annual Report 2023 2024",
    correctTitle: "12th Annual General Meeting Annual Report & Audited Accounts (FY 2023-24)",
    category: "Annual Reports & Accounts",
    filename: "Annual-Report_2023-2024.pdf",
    path: "/documents/investors/Annual-Report_2023-2024.pdf",
    source: "05_Documents/Annual Statements/2023-24",
    period: "FY 2023-24",
    version: "v1.0 (Full 12th AGM)",
    status: "200 OK",
    dup: "Similar to 12th-Annual-Report_FY-2023-2024.pdf",
    pubStatus: "Approved",
    action: "Consolidate to 12th-Annual-Report_FY-2023-2024.pdf"
  },
  {
    id: "FIL-02",
    webTitle: "Annual Report - Annual Report AGM FY 31.03.2025",
    correctTitle: "13th Annual General Meeting Annual Report & Accounts (FY 2024-25)",
    category: "Annual Reports & Accounts",
    filename: "Annual-Report_AGM_FY_31.03.2025.pdf",
    path: "/documents/investors/Annual-Report_AGM_FY_31.03.2025.pdf",
    source: "05_Documents/Annual Statements/2024-25",
    period: "FY 2024-25",
    version: "v1.0",
    status: "200 OK",
    dup: "Similar to 13th-Annual-Report_FY-2024-2025.pdf",
    pubStatus: "Approved",
    action: "Consolidate to 13th-Annual-Report_FY-2024-2025.pdf"
  },
  {
    id: "FIL-03",
    webTitle: "Annual Report - 12th Annual Report FY 2023 2024",
    correctTitle: "12th Annual General Meeting Annual Report (FY 2023-24)",
    category: "Annual Reports & Accounts",
    filename: "12th-Annual-Report_FY-2023-2024.pdf",
    path: "/documents/investors/12th-Annual-Report_FY-2023-2024.pdf",
    source: "05_Documents/Annual Statements/2023-24",
    period: "FY 2023-24",
    version: "v1.0 (Signed)",
    status: "200 OK",
    dup: "Unique Authoritative",
    pubStatus: "Approved",
    action: "Retain as authoritative record"
  },
  {
    id: "FIL-04",
    webTitle: "Annual Report - 13th Annual Report FY 2024 2025",
    correctTitle: "13th Annual General Meeting Annual Report (FY 2024-25)",
    category: "Annual Reports & Accounts",
    filename: "13th-Annual-Report_FY-2024-2025.pdf",
    path: "/documents/investors/13th-Annual-Report_FY-2024-2025.pdf",
    source: "05_Documents/Annual Statements/2024-25",
    period: "FY 2024-25",
    version: "v1.0 (Signed)",
    status: "200 OK",
    dup: "Unique Authoritative",
    pubStatus: "Approved",
    action: "Retain as authoritative record"
  },
  {
    id: "FIL-05",
    webTitle: "Annual Report - Annual Report FY 2025 26",
    correctTitle: "14th Annual General Meeting Report & Audited Accounts (FY 2025-26)",
    category: "Annual Reports & Accounts",
    filename: "Annual-Report_FY_2025-26.pdf",
    path: "/documents/investors/Annual-Report_FY_2025-26.pdf",
    source: "05_Documents/Annual Statements/2025-26",
    period: "FY 2025-26",
    version: "v1.0 (Signed)",
    status: "200 OK",
    dup: "Unique Authoritative",
    pubStatus: "Approved",
    action: "Retain as authoritative record"
  },
  {
    id: "FIL-06",
    webTitle: "Financial Results - KCT Results Apr Sep Signed 1",
    correctTitle: "Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2023)",
    category: "Financial Results & Limited Review",
    filename: "KCT_Results_Apr_Sep_Signed-1.pdf",
    path: "/documents/investors/KCT_Results_Apr_Sep_Signed-1.pdf",
    source: "BSE SME Filing Archive",
    period: "Half-Year ended 30.09.2023",
    version: "Signed",
    status: "200 OK",
    dup: "Exact Duplicate (Hash: 780491ef)",
    pubStatus: "Duplicate",
    action: "Remove duplicate website link"
  },
  {
    id: "FIL-07",
    webTitle: "Financial Results - KCT Results Apr Sep Signed 2",
    correctTitle: "Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2023)",
    category: "Financial Results & Limited Review",
    filename: "KCT_Results_Apr_Sep_Signed-2.pdf",
    path: "/documents/investors/KCT_Results_Apr_Sep_Signed-2.pdf",
    source: "BSE SME Filing Archive",
    period: "Half-Year ended 30.09.2023",
    version: "Signed",
    status: "200 OK",
    dup: "Exact Duplicate (Hash: 780491ef)",
    pubStatus: "Duplicate",
    action: "Remove duplicate website link"
  },
  {
    id: "FIL-08",
    webTitle: "Financial Results - KCT Results Apr Sep Signed 3",
    correctTitle: "Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2023)",
    category: "Financial Results & Limited Review",
    filename: "KCT_Results_Apr_Sep_Signed-3.pdf",
    path: "/documents/investors/KCT_Results_Apr_Sep_Signed-3.pdf",
    source: "BSE SME Filing Archive",
    period: "Half-Year ended 30.09.2023",
    version: "Signed",
    status: "200 OK",
    dup: "Exact Duplicate (Hash: 780491ef)",
    pubStatus: "Duplicate",
    action: "Remove duplicate website link"
  },
  {
    id: "FIL-09",
    webTitle: "Financial Results - KCT Results Apr Sep Signed 4",
    correctTitle: "Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2023)",
    category: "Financial Results & Limited Review",
    filename: "KCT_Results_Apr_Sep_Signed-4.pdf",
    path: "/documents/investors/KCT_Results_Apr_Sep_Signed-4.pdf",
    source: "BSE SME Filing Archive",
    period: "Half-Year ended 30.09.2023",
    version: "Signed",
    status: "200 OK",
    dup: "Exact Duplicate (Hash: 780491ef)",
    pubStatus: "Duplicate",
    action: "Remove duplicate website link"
  },
  {
    id: "FIL-10",
    webTitle: "Financial Results - KCT Results Apr Sep Signed 5",
    correctTitle: "Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2023)",
    category: "Financial Results & Limited Review",
    filename: "KCT_Results_Apr_Sep_Signed-5.pdf",
    path: "/documents/investors/KCT_Results_Apr_Sep_Signed-5.pdf",
    source: "BSE SME Filing Archive",
    period: "Half-Year ended 30.09.2023",
    version: "Signed",
    status: "200 OK",
    dup: "Exact Duplicate (Hash: 780491ef)",
    pubStatus: "Duplicate",
    action: "Remove duplicate website link"
  },
  {
    id: "FIL-11",
    webTitle: "Financial Results - KCT Results Apr Sep Signed 6",
    correctTitle: "Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2023)",
    category: "Financial Results & Limited Review",
    filename: "KCT_Results_Apr_Sep_Signed-6.pdf",
    path: "/documents/investors/KCT_Results_Apr_Sep_Signed-6.pdf",
    source: "BSE SME Filing Archive",
    period: "Half-Year ended 30.09.2023",
    version: "Signed",
    status: "200 OK",
    dup: "Exact Duplicate (Hash: 780491ef)",
    pubStatus: "Duplicate",
    action: "Remove duplicate website link"
  },
  {
    id: "FIL-12",
    webTitle: "Financial Results - KCT Results Apr Sep Signed",
    correctTitle: "Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2023)",
    category: "Financial Results & Limited Review",
    filename: "KCT_Results_Apr_Sep_Signed.pdf",
    path: "/documents/investors/KCT_Results_Apr_Sep_Signed.pdf",
    source: "BSE SME Filing Archive",
    period: "Half-Year ended 30.09.2023",
    version: "Signed",
    status: "200 OK",
    dup: "Exact Duplicate (Hash: 780491ef)",
    pubStatus: "Duplicate",
    action: "Consolidate into Financial-Results_30.09.2023.pdf"
  },
  {
    id: "FIL-13",
    webTitle: "Financial Results - KCT Results Apr Sep Signed new",
    correctTitle: "Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2023)",
    category: "Financial Results & Limited Review",
    filename: "KCT_Results_Apr_Sep_Signed_new.pdf",
    path: "/documents/investors/KCT_Results_Apr_Sep_Signed_new.pdf",
    source: "BSE SME Filing Archive",
    period: "Half-Year ended 30.09.2023",
    version: "Signed",
    status: "200 OK",
    dup: "Exact Duplicate (Hash: 780491ef)",
    pubStatus: "Duplicate",
    action: "Remove duplicate website link"
  },
  {
    id: "FIL-14",
    webTitle: "Financial Results - KCT Result BM Outcome 6.15 signed 1",
    correctTitle: "Outcome of Board Meeting (Half-Yearly Financial Results ended 30.09.2023)",
    category: "Board Meeting Outcomes (Regulation 30)",
    filename: "KCT_Result_BM_Outcome_6.15_signed-1.pdf",
    path: "/documents/investors/KCT_Result_BM_Outcome_6.15_signed-1.pdf",
    source: "BSE SME Filing Archive",
    period: "25.12.2023",
    version: "Signed",
    status: "200 OK",
    dup: "Exact Duplicate (Hash: 27913dc8)",
    pubStatus: "Duplicate",
    action: "Remove duplicate website link"
  },
  {
    id: "FIL-15",
    webTitle: "Financial Results - KCT Result BM Outcome 6.15 signed",
    correctTitle: "Outcome of Board Meeting (Financial Results Approval - 25.12.2023)",
    category: "Board Meeting Outcomes (Regulation 30)",
    filename: "KCT_Result_BM_Outcome_6.15_signed.pdf",
    path: "/documents/investors/KCT_Result_BM_Outcome_6.15_signed.pdf",
    source: "BSE SME Filing Archive",
    period: "25.12.2023",
    version: "Signed",
    status: "200 OK",
    dup: "Unique Authoritative for BM Outcome",
    pubStatus: "Approved",
    action: "Relocate to /investors/meetings-presentations"
  },
  {
    id: "FIL-16",
    webTitle: "Financial Results - Reconcilation Share Capital Audit 31032024",
    correctTitle: "Reconciliation of Share Capital Audit Report (Quarter ended 31.03.2024)",
    category: "Share Capital Audit (Regulation 76)",
    filename: "Reconcilation-Share-Capital-Audit_31032024.pdf",
    path: "/documents/investors/Reconcilation-Share-Capital-Audit_31032024.pdf",
    source: "BSE SME Filing Archive",
    period: "Quarter ended 31.03.2024",
    version: "Audited",
    status: "200 OK",
    dup: "Misplaced Category",
    pubStatus: "Approved",
    action: "Relocate to /investors/shareholder-information"
  },
  {
    id: "FIL-17",
    webTitle: "Financial Results - Financial Results 30.09.2023",
    correctTitle: "Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2023)",
    category: "Financial Results & Limited Review",
    filename: "Financial-Results_30.09.2023.pdf",
    path: "/documents/investors/annual-statements/Financial-Results_30.09.2023.pdf",
    source: "05_Documents/Annual Statements/2023-24",
    period: "Half-Year ended 30.09.2023",
    version: "v1.0 (Signed)",
    status: "200 OK",
    dup: "Authoritative",
    pubStatus: "Approved",
    action: "Retain as authoritative record"
  },
  {
    id: "FIL-18",
    webTitle: "Financial Results - Financial Results 30.09.2024",
    correctTitle: "Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2024)",
    category: "Financial Results & Limited Review",
    filename: "Financial-Results_30.09.2024.pdf",
    path: "/documents/investors/annual-statements/Financial-Results_30.09.2024.pdf",
    source: "05_Documents/Annual Statements/2023-24",
    period: "Half-Year ended 30.09.2024",
    version: "v1.0 (Signed)",
    status: "200 OK",
    dup: "Authoritative",
    pubStatus: "Approved",
    action: "Retain as authoritative record"
  },
  {
    id: "FIL-19",
    webTitle: "Financial Results - Financial Results 30.09.2025",
    correctTitle: "Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2025)",
    category: "Financial Results & Limited Review",
    filename: "Financial-Results_30.09.2025.pdf",
    path: "/documents/investors/annual-statements/Financial-Results_30.09.2025.pdf",
    source: "05_Documents/Annual Statements/2025-26",
    period: "Half-Year ended 30.09.2025",
    version: "v1.0 (Signed)",
    status: "200 OK",
    dup: "Authoritative",
    pubStatus: "Approved",
    action: "Retain as authoritative record"
  },
  {
    id: "FIL-20",
    webTitle: "Financial Results - Financial Results 31.03.2024",
    correctTitle: "Audited Financial Results & Statements (Year ended 31.03.2024)",
    category: "Financial Results & Limited Review",
    filename: "Financial-Results_31.03.2024.pdf",
    path: "/documents/investors/Financial-Results_31.03.2024.pdf",
    source: "BSE SME Filing Archive",
    period: "Year ended 31.03.2024",
    version: "v1.0 (Signed)",
    status: "200 OK",
    dup: "Authoritative",
    pubStatus: "Approved",
    action: "Retain as authoritative record"
  },
  {
    id: "FIL-21",
    webTitle: "Financial Results - Financial Results 31.03.2025",
    correctTitle: "Audited Financial Results & Managing Director Review (Year ended 31.03.2025)",
    category: "Financial Results & Limited Review",
    filename: "Financial-Results_31.03.2025.pdf",
    path: "/documents/investors/annual-statements/Financial-Results_31.03.2025.pdf",
    source: "05_Documents/Annual Statements/2024-25",
    period: "Year ended 31.03.2025",
    version: "v1.0 (Signed)",
    status: "200 OK",
    dup: "Authoritative",
    pubStatus: "Approved",
    action: "Retain as authoritative record"
  },
  {
    id: "FIL-22",
    webTitle: "Financial Results - Balance Sheet FY 2023 24",
    correctTitle: "Audited Balance Sheet & Profit and Loss Account (FY 2023-24)",
    category: "Financial Results & Limited Review",
    filename: "Kalyani-Cast-Tech-Balance-Sheet-FY-2023-24.pdf",
    path: "/documents/investors/Kalyani-Cast-Tech-Balance-Sheet-FY-2023-24.pdf",
    source: "Statutory Filing Archive",
    period: "FY 2023-24",
    version: "Audited",
    status: "200 OK",
    dup: "Unique",
    pubStatus: "Approved",
    action: "Retain under Financial Statements"
  },
  {
    id: "FIL-23",
    webTitle: "Financial Results - Balance Sheet FY 2024 25",
    correctTitle: "Audited Balance Sheet & Profit and Loss Account (FY 2024-25)",
    category: "Financial Results & Limited Review",
    filename: "Kalyani-Cast-Tech-Balance-Sheet-FY-2024-25.pdf",
    path: "/documents/investors/Kalyani-Cast-Tech-Balance-Sheet-FY-2024-25.pdf",
    source: "Statutory Filing Archive",
    period: "FY 2024-25",
    version: "Audited",
    status: "200 OK",
    dup: "Unique",
    pubStatus: "Approved",
    action: "Retain under Financial Statements"
  },
  {
    id: "FIL-24",
    webTitle: "Financial Results - Voting results and Scrutinizer Report 12th AGM FY 2023 24",
    correctTitle: "Voting Results & Scrutinizer Report (12th AGM held on 30.09.2024)",
    category: "AGM Voting & Corporate Actions (Regulation 44)",
    filename: "Voting-results-and-Scrutinizer-Report_12th-AGM_FY-2023-24.pdf",
    path: "/documents/investors/Voting-results-and-Scrutinizer-Report_12th-AGM_FY-2023-24.pdf",
    source: "BSE SME Filing Archive",
    period: "12th AGM (FY 2023-24)",
    version: "Scrutinizer Signed",
    status: "200 OK",
    dup: "Misplaced Category",
    pubStatus: "Approved",
    action: "Relocate to /investors/ipo-corporate-actions"
  },
  {
    id: "FIL-25",
    webTitle: "Financial Results - Voting results and Scrutinizer Report 13th AGM FY 2024 2025",
    correctTitle: "Voting Results & Scrutinizer Report (13th AGM held on 30.09.2025)",
    category: "AGM Voting & Corporate Actions (Regulation 44)",
    filename: "Voting-results-and-Scrutinizer-Report_13th-AGM_FY-2024-2025.pdf",
    path: "/documents/investors/Voting-results-and-Scrutinizer-Report_13th-AGM_FY-2024-2025.pdf",
    source: "BSE SME Filing Archive",
    period: "13th AGM (FY 2024-25)",
    version: "Scrutinizer Signed",
    status: "200 OK",
    dup: "Misplaced Category",
    pubStatus: "Approved",
    action: "Relocate to /investors/ipo-corporate-actions"
  },
  {
    id: "FIL-26",
    webTitle: "Financial Results - Financial Results 31.03.2026",
    correctTitle: "Audited Financial Results & Statutory Accounts (Year ended 31.03.2026)",
    category: "Financial Results & Limited Review",
    filename: "Financial-Results_31.03.2026.pdf",
    path: "/documents/investors/Financial-Results_31.03.2026.pdf",
    source: "Statutory Filing Archive",
    period: "Year ended 31.03.2026",
    version: "Signed",
    status: "200 OK",
    dup: "Unique",
    pubStatus: "Approved",
    action: "Retain under Financial Statements"
  }
];

// Write CSV
const csvHeaders = "Filing ID,Website Title,Correct Title,Document Category,Filename,File Location,Source Document,Date/Period,Version,Link Destination,HTTP Status,Duplicate Status,Publication Status,Recommended Action\n";
const csvRows = filingItems.map(f => [
  f.id,
  `"${f.webTitle}"`,
  `"${f.correctTitle}"`,
  `"${f.category}"`,
  f.filename,
  f.path,
  `"${f.source}"`,
  `"${f.period}"`,
  `"${f.version}"`,
  f.path,
  f.status,
  `"${f.dup}"`,
  f.pubStatus,
  `"${f.action}"`
].join(',')).join('\n');

fs.writeFileSync(path.join(cleanupDir, 'financial-information-filing-inventory.csv'), csvHeaders + csvRows, 'utf8');

// Write MD Audit Report
let mdContent = `# SEBI LODR Financial Information Filing Audit & Reconciliation Report

**Entity:** Kalyani Cast Tech Limited (CIN: L27310DL2012PLC230799)  
**Target Page:** \`/investors/financial-information\` & \`/investor-relations\`  
**Date of Audit:** 31 October 2026  
**Audit Standard:** SEBI (LODR) Regulations, 2015 (Regulation 33, 34, 46 & 76) & BSE SME Disclosure Framework  

---

## 1. Executive Summary

A comprehensive document and URL integrity audit was conducted across the **Financial Information** page (\`/investors/financial-information\`) and the **SEBI LODR Filings** section on the main Investor Relations route. 

The audit identified:
- **26 Total Raw Filing Entries** previously presented on the page.
- **8 Exact Duplicate Links** resulting from multiple uploaded variants of the same 30.09.2023 Half-Yearly Results filing (\`KCT_Results_Apr_Sep_Signed-1.pdf\` through \`-6.pdf\`, \`KCT_Results_Apr_Sep_Signed.pdf\`, and \`_new.pdf\`, all possessing identical MD5 hash \`780491ef\`).
- **2 Duplicate Links** of the 25.12.2023 Board Meeting Outcome (\`KCT_Result_BM_Outcome_6.15_signed-1.pdf\` vs \`signed.pdf\`, MD5 hash \`27913dc8\`).
- **3 Misplaced Filings** that do not belong to Financial Results:
  - \`Reconcilation-Share-Capital-Audit_31032024.pdf\` (SEBI LODR Regulation 76 audit, relocated to \`/investors/shareholder-information\`).
  - \`Voting-results-and-Scrutinizer-Report_12th-AGM_FY-2023-24.pdf\` (Regulation 44 voting report, relocated to \`/investors/ipo-corporate-actions\`).
  - \`Voting-results-and-Scrutinizer-Report_13th-AGM_FY-2024-2025.pdf\` (Regulation 44 voting report, relocated to \`/investors/ipo-corporate-actions\`).
- **11 Curated Authoritative Documents** retained under the clean, simplified SEBI LODR Filings presentation.

---

## 2. Duplicate Detection & Consolidation Register

| Document Subject | Duplicate Files Identified | Identical MD5 Hash | Authoritative Retained Document | Consolidation Action |
| :--- | :--- | :--- | :--- | :--- |
| **Half-Year ended 30.09.2023 Unaudited Results** | \`KCT_Results_Apr_Sep_Signed-1.pdf\`<br>\`KCT_Results_Apr_Sep_Signed-2.pdf\`<br>\`KCT_Results_Apr_Sep_Signed-3.pdf\`<br>\`KCT_Results_Apr_Sep_Signed-4.pdf\`<br>\`KCT_Results_Apr_Sep_Signed-5.pdf\`<br>\`KCT_Results_Apr_Sep_Signed-6.pdf\`<br>\`KCT_Results_Apr_Sep_Signed.pdf\`<br>\`KCT_Results_Apr_Sep_Signed_new.pdf\` | \`780491ef9... \` (1,103,549 bytes) | \`Financial-Results_30.09.2023.pdf\` | Removed all 8 duplicate website links; consolidated to single authoritative record. |
| **BM Outcome 25.12.2023 (Financial Results Approval)** | \`KCT_Result_BM_Outcome_6.15_signed-1.pdf\`<br>\`KCT_Result_BM_Outcome_6.15_signed.pdf\` | \`27913dc8... \` (666,015 bytes) | \`KCT_Result_BM_Outcome_6.15_signed.pdf\` | Removed duplicate '-1' link; classified as Regulation 30 Board Outcome. |
| **12th AGM Annual Report FY 2023-24** | \`Annual-Report_2023-2024.pdf\`<br>\`12th-Annual-Report_FY-2023-2024.pdf\` | N/A (Draft vs Final) | \`12th-Annual-Report_FY-2023-2024.pdf\` | Retained signed final AGM record; retired un-indexed draft link. |
| **13th AGM Annual Report FY 2024-25** | \`Annual-Report_AGM_FY_31.03.2025.pdf\`<br>\`13th-Annual-Report_FY-2024-2025.pdf\` | N/A (Draft vs Final) | \`13th-Annual-Report_FY-2024-2025.pdf\` | Retained signed final AGM record; retired un-indexed draft link. |

---

## 3. Simplified & Approved Presentation Structure

The section heading and introductory copy have been standardized per corporate disclosure guidelines:

- **Section Heading:** \`SEBI LODR Filings\`
- **Supporting Description:** \`Corporate disclosures and statutory filings published for investors and shareholders.\`

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
`;

fs.writeFileSync(path.join(cleanupDir, 'financial-information-filing-audit.md'), mdContent, 'utf8');
console.log('Generated financial-information-filing-inventory.csv and financial-information-filing-audit.md');

