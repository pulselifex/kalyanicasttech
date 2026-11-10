const fs = require("fs");

const pagesPath = "src/content/pages.json";
const pages = JSON.parse(fs.readFileSync(pagesPath, "utf8"));

// 1. Populate /investors/ipo-corporate-actions
const ipoPage = pages.find((p) => p.url === "/investors/ipo-corporate-actions");
if (ipoPage) {
  ipoPage.sections = [
    {
      heading: "IPO & Capital Structure Filings",
      body: [
        {
          p: "Official regulatory offer documents, prospectuses, valuation reports and statutory capital governance records for Kalyani Cast Tech Limited (BSE SME Scrip Code: 544023):",
        },
        {
          p: "📄 IPO Offer Document — Final Prospectus (BSE SME Platform): [Download PDF](/documents/investors/Prospectus_Kalyani.pdf) (13,428 KB)",
        },
        {
          p: "📄 IPO Offer Document — Red Herring Prospectus (RHP): [Download PDF](/documents/investors/RHP_Kalyani.pdf) (13,118 KB)",
        },
        {
          p: "📄 IPO Offer Document — Draft Red Herring Prospectus (DRHP): [Download PDF](/documents/investors/DRHP_Kalyani.pdf) (12,875 KB)",
        },
        {
          p: "📄 Capital Governance — Pre-IPO Valuation Report: [Download PDF](/documents/investors/Valuation.pdf) (1,842 KB)",
        },
        {
          p: "📄 Statutory Constitution — Revised Articles of Association (AOA): [Download PDF](/documents/investors/Revised-AOA.pdf) (4,215 KB)",
        },
        {
          p: "📄 Corporate Action — Notice of EGM (Preferential Allotment): [Download PDF](/documents/investors/Notice-of-EGM_Preferential-Issue.pdf) (895 KB)",
        },
        {
          p: "📄 Corporate Action — Corrigendum to Extraordinary General Meeting Notice: [Download PDF](/documents/investors/Corrigendum-to-EGM-Notice_KCT_15072026.pdf) (412 KB)",
        },
      ],
    },
    {
      heading: "Accuracy and completeness",
      body: [
        {
          p: "Corporate action details, dates, terms and status are reproduced from the official statutory filings with the BSE SME Exchange. This section is an informational disclosure repository, not investment solicitation.",
        },
      ],
    },
  ];
}

// 2. Populate /investors/meetings-presentations
const meetPage = pages.find((p) => p.url === "/investors/meetings-presentations");
if (meetPage) {
  meetPage.sections = [
    {
      heading: "General Meetings & Proceedings",
      body: [
        {
          p: "Notices, explanatory statements, proceedings and statutory summaries of Annual General Meetings (AGM) and Extraordinary General Meetings (EGM):",
        },
        {
          p: "📄 13th AGM Notice — Notice of 13th Annual General Meeting (FY 2024-25): [Download PDF](/documents/investors/13th-Annual-General-Meeting_Notice_FY-2024-2025.pdf) (980 KB)",
        },
        {
          p: "📄 13th AGM Proceedings — Summary of 13th AGM Proceedings & Resolutions: [Download PDF](/documents/investors/13th-Annual-General-Meeting_Proceeding-Summary_FY-2024-2025.pdf) (640 KB)",
        },
        {
          p: "📄 13th AGM Newspaper Notice — Statutory Publication (English & Regional): [Download PDF](/documents/investors/Newspaper-publication_13th-Annual-General-Meeting.pdf) (3,845 KB)",
        },
        {
          p: "📄 12th AGM Notice — Notice of 12th Annual General Meeting (FY 2023-24): [Download PDF](/documents/investors/12th-Annual-General-Meeting_Notice_FY-2023-2024.pdf) (1,120 KB)",
        },
        {
          p: "📄 12th AGM Proceedings — Summary of 12th AGM Proceedings: [Download PDF](/documents/investors/12th-Annual-General-Meeting_Proceeding-Summary_FY-2023-2024.pdf) (580 KB)",
        },
        {
          p: "📄 12th AGM Newspaper Notice — Statutory Publication: [Download PDF](/documents/investors/Newspaper-publication_12th-Annual-General-Meeting.pdf) (3,798 KB)",
        },
      ],
    },
    {
      heading: "Investor Presentations & Transcripts",
      body: [
        {
          p: "Approved corporate presentations, institutional briefings and conference call transcripts:",
        },
        {
          p: "📊 Institutional Presentation — Master Institutional Investor Presentation (September 2026): [Download PPTX](/documents/investors/Kalyani_Cast_Tech_Institutional_Investor_Presentation_September_2026_MASTER_FINAL_TEXT_LOCKED.pptx) (11,438 KB)",
        },
        {
          p: "📊 Corporate Presentation — Business Model, Container Engineering & Growth: [Download PDF](/documents/investors/Investor-Presentation-KALYANI-CAST-TECH-LTD.pdf) (2,940 KB)",
        },
        {
          p: "🎙️ Earnings Call Transcript — Investor Conference Call Transcript (Signed): [Download PDF](/documents/investors/KalyaniCastTech-Jun1-2024_Transcript_Signed.pdf) (740 KB)",
        },
        {
          p: "🎙️ Earnings Call Transcript — Archive Transcript: [Download PDF](/documents/investors/Transcript.pdf) (685 KB)",
        },
      ],
    },
    {
      heading: "Disclosure consistency",
      body: [
        {
          p: "All figures and project-status statements match the official disclosure record for the relevant date. Presentations do not convert targets into achieved outcomes, and do not imply that infrastructure under development is already generating operating results.",
        },
      ],
    },
  ];
}

fs.writeFileSync(pagesPath, JSON.stringify(pages, null, 2) + "\n", "utf8");
console.log(
  "Successfully populated /investors/ipo-corporate-actions and /investors/meetings-presentations with 17 authentic statutory documents!",
);
