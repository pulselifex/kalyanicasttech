const fs = require('fs');
const path = require('path');

// 1. UPDATE pages.json for /investors/financial-information
const pagesJsonPath = path.resolve(__dirname, '../src/content/pages.json');
const pages = JSON.parse(fs.readFileSync(pagesJsonPath, 'utf8'));

const finIndex = pages.findIndex(p => p.url === '/investors/financial-information');
if (finIndex !== -1) {
  pages[finIndex] = {
    ...pages[finIndex],
    sections: [
      {
        heading: "SEBI LODR Filings",
        body: [
          {
            p: "Corporate disclosures and statutory filings published for investors and shareholders in compliance with SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015."
          },
          {
            p: "📄 Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2025): [Download PDF](/documents/investors/annual-statements/Financial-Results_30.09.2025.pdf) (18.03 MB)"
          },
          {
            p: "📄 Audited Financial Results & Managing Director Review (Year ended 31.03.2025): [Download PDF](/documents/investors/annual-statements/Financial-Results_31.03.2025.pdf) (2.00 MB)"
          },
          {
            p: "📄 Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2024): [Download PDF](/documents/investors/annual-statements/Financial-Results_30.09.2024.pdf) (8.66 MB)"
          },
          {
            p: "📄 Audited Financial Results & Annual Accounts (Year ended 31.03.2024): [Download PDF](/documents/investors/Financial-Results_31.03.2024.pdf) (6.08 MB)"
          },
          {
            p: "📄 Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2023): [Download PDF](/documents/investors/annual-statements/Financial-Results_30.09.2023.pdf) (1.34 MB)"
          },
          {
            p: "📄 Audited Balance Sheet & Statement of Profit and Loss (FY 2024-25): [Download PDF](/documents/investors/Kalyani-Cast-Tech-Balance-Sheet-FY-2024-25.pdf) (4.14 MB)"
          },
          {
            p: "📄 Audited Balance Sheet & Statement of Profit and Loss (FY 2023-24): [Download PDF](/documents/investors/Kalyani-Cast-Tech-Balance-Sheet-FY-2023-24.pdf) (5.57 MB)"
          },
          {
            p: "📄 14th Annual General Meeting Report & Audited Accounts (FY 2025-26): [Download PDF](/documents/investors/Annual-Report_FY_2025-26.pdf) (3.77 MB)"
          },
          {
            p: "📄 13th Annual General Meeting Annual Report (FY 2024-25): [Download PDF](/documents/investors/13th-Annual-Report_FY-2024-2025.pdf) (2.92 MB)"
          },
          {
            p: "📄 12th Annual General Meeting Annual Report (FY 2023-24): [Download PDF](/documents/investors/12th-Annual-Report_FY-2023-2024.pdf) (18.36 MB)"
          },
          {
            p: "📄 Statement of Deviation or Variation in Public Issue Proceeds (Half-Year ended 30.09.2024): [Download PDF](/documents/investors/annual-statements/Statement-of-Deviation_30.09.2024.pdf) (17.20 MB)"
          },
          {
            p: "📄 Statement of Deviation or Variation in Public Issue Proceeds (Year ended 31.03.2025): [Download PDF](/documents/investors/annual-statements/Statement-of-Deviation_31.03.2025.pdf) (3.63 MB)"
          }
        ]
      },
      {
        heading: "Statutory Reporting Verification",
        body: [
          {
            p: "Official financial results, audited statements, and statutory returns are formally submitted to the BSE SME platform. Certified physical and digitally signed records maintained by the Company Secretary and Chief Financial Officer constitute the definitive legal record."
          }
        ]
      }
    ]
  };
}

fs.writeFileSync(pagesJsonPath, JSON.stringify(pages, null, 2) + '\n', 'utf8');
console.log('Updated pages.json /investors/financial-information cleanly.');

// 2. UPDATE route-assets.ts for /investors/financial-information
const routeAssetsPath = path.resolve(__dirname, '../src/content/route-assets.ts');
let routeAssetsContent = fs.readFileSync(routeAssetsPath, 'utf8');

const updatedFinDocs = `  "/investors/financial-information": [
    {
      title: "Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2025)",
      filename: "Financial-Results_30.09.2025.pdf",
      url: "/documents/investors/annual-statements/Financial-Results_30.09.2025.pdf",
      fileSize: "18.03 MB",
      type: "SEBI LODR Reg 33 Filing",
      scope: "Standalone & Consolidated results with Limited Review Report by M/s Goel Mintri & Associates.",
    },
    {
      title: "Audited Financial Results & MD Expansion Overview (Year ended 31.03.2025)",
      filename: "Financial-Results_31.03.2025.pdf",
      url: "/documents/investors/annual-statements/Financial-Results_31.03.2025.pdf",
      fileSize: "2.00 MB",
      type: "Audited Financial Statements",
      scope: "Full-year audited results, Managing Director expansion statement, and Independent Auditor's Report.",
    },
    {
      title: "Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2024)",
      filename: "Financial-Results_30.09.2024.pdf",
      url: "/documents/investors/annual-statements/Financial-Results_30.09.2024.pdf",
      fileSize: "8.66 MB",
      type: "SEBI LODR Reg 33 Filing",
      scope: "Standalone & Consolidated results with Limited Review Report.",
    },
    {
      title: "Audited Financial Results & Balance Sheet (Year ended 31.03.2024)",
      filename: "Financial-Results_31.03.2024.pdf",
      url: "/documents/investors/Financial-Results_31.03.2024.pdf",
      fileSize: "6.08 MB",
      type: "Audited Financial Statements",
      scope: "Full-year audited results, balance sheet, and Independent Auditor's Report.",
    },
    {
      title: "Unaudited Financial Results with Limited Review (Half-Year ended 30.09.2023)",
      filename: "Financial-Results_30.09.2023.pdf",
      url: "/documents/investors/annual-statements/Financial-Results_30.09.2023.pdf",
      fileSize: "1.34 MB",
      type: "SEBI LODR Reg 33 Filing",
      scope: "Standalone financial results submitted to BSE SME platform.",
    },
    {
      title: "14th AGM Annual Report & Audited Balance Sheet (FY 2025-26)",
      filename: "Annual-Report_FY_2025-26.pdf",
      url: "/documents/investors/Annual-Report_FY_2025-26.pdf",
      fileSize: "3.77 MB",
      type: "Annual General Meeting Report",
      scope: "14th AGM statutory report, Directors' report, and audited financial statements.",
    },
    {
      title: "13th AGM Annual General Meeting Annual Report (FY 2024-25)",
      filename: "13th-Annual-Report_FY-2024-2025.pdf",
      url: "/documents/investors/13th-Annual-Report_FY-2024-2025.pdf",
      fileSize: "2.92 MB",
      type: "Annual General Meeting Report",
      scope: "13th AGM notice, Directors' report, and audited accounts.",
    },
    {
      title: "12th AGM Annual General Meeting Annual Report (FY 2023-24)",
      filename: "12th-Annual-Report_FY-2023-2024.pdf",
      url: "/documents/investors/12th-Annual-Report_FY-2023-2024.pdf",
      fileSize: "18.36 MB",
      type: "Annual General Meeting Report",
      scope: "12th AGM annual report and audited balance sheet for FY 2023-24.",
    },
    {
      title: "Statement of Deviation / Variation in Public Issue Proceeds (30.09.2024)",
      filename: "Statement-of-Deviation_30.09.2024.pdf",
      url: "/documents/investors/annual-statements/Statement-of-Deviation_30.09.2024.pdf",
      fileSize: "17.20 MB",
      type: "SEBI LODR Reg 32 Filing",
      scope: "Monitoring agency and audit committee statement on utilization of IPO proceeds.",
    },
    {
      title: "Statement of Deviation / Variation in Public Issue Proceeds (31.03.2025)",
      filename: "Statement-of-Deviation_31.03.2025.pdf",
      url: "/documents/investors/annual-statements/Statement-of-Deviation_31.03.2025.pdf",
      fileSize: "3.63 MB",
      type: "SEBI LODR Reg 32 Filing",
      scope: "Annual statement of deviation/variation submitted to BSE SME platform.",
    },
  ],`;

const startFin = routeAssetsContent.indexOf('  "/investors/financial-information": [');
const endFin = routeAssetsContent.indexOf('  "/investors/corporate-governance": [');

if (startFin !== -1 && endFin !== -1) {
  routeAssetsContent = routeAssetsContent.slice(0, startFin) + updatedFinDocs + '\n' + routeAssetsContent.slice(endFin);
  fs.writeFileSync(routeAssetsPath, routeAssetsContent, 'utf8');
  console.log('Updated route-assets.ts financial-information docs cleanly.');
} else {
  console.error('Could not locate financial-information section in route-assets.ts');
}

// 3. UPDATE investor-relations.tsx Section 4 heading
const invRelPath = path.resolve(__dirname, '../src/routes/investor-relations.tsx');
let invRelContent = fs.readFileSync(invRelPath, 'utf8');

invRelContent = invRelContent.replace(
  `<h2 id="filings-heading" className="font-display text-xl sm:text-2xl font-bold text-foreground">\n              Statutory Filings &amp; Document Categories (SEBI LODR Regulation 46)\n            </h2>\n            <p className="text-sm text-muted-foreground">\n              Filings grouped under Regulation 46 of the SEBI LODR Regulations. Authoritative records submitted to BSE SME.\n            </p>`,
  `<h2 id="filings-heading" className="font-display text-xl sm:text-2xl font-bold text-foreground">\n              SEBI LODR Filings\n            </h2>\n            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">\n              Corporate disclosures and statutory filings published for investors and shareholders.\n            </p>`
);

fs.writeFileSync(invRelPath, invRelContent, 'utf8');
console.log('Updated investor-relations.tsx Section 4 heading cleanly.');

