const fs = require('fs');
const path = require('path');

const pagesPath = path.join(__dirname, '..', 'src', 'content', 'pages.json');
const pages = JSON.parse(fs.readFileSync(pagesPath, 'utf8'));

const updates = {
  "/": {
    seoTitle: "Kalyani Cast Tech Limited | Freight Containers & Precision Castings"
  },
  "/engineering-quality": {
    meta: "In-house container structural testing, optical emission spectrometry, non-destructive testing (NDT), and quality assurance systems at Rewari Works, Haryana."
  },
  "/shivlakha-rail-logistics/gati-shakti-terminal": {
    seoTitle: "Gati Shakti Terminal | Kalyani Cast Tech Limited"
  },
  "/resources/quality-certifications": {
    seoTitle: "Quality Documents & Certificates | Kalyani Cast Tech Limited",
    meta: "Verified technical approvals and quality certifications: Lloyd's Register EMEA Class A foundry, IRS manufacturer certificates, and ISO 9001:2015 systems."
  },
  "/resources/corporate-profile-brochures": {
    seoTitle: "Corporate Profile & Brochures | Kalyani Cast Tech Limited",
    meta: "Download official company presentations, corporate brochures, and multimodal project briefs approved by Kalyani Cast Tech Limited."
  },
  "/resources/news-media": {
    seoTitle: "News, Railway Trials & Media | Kalyani Cast Tech Limited",
    meta: "Archival railway notifications, press clippings, and video trials of double-stack dwarf container trains pioneered by Kalyani Cast Tech Limited."
  },
  "/shivlakha-rail-logistics/cargo-opportunities": {
    seoTitle: "Rail Route & Cargo Evaluation | Kalyani Cast Tech Limited",
    meta: "Interactive rail freight route and cargo movement evaluation for shippers from Gujarat ports to inland corridors via the Shivlakha multimodal platform."
  },
  "/investors/financial-information": {
    seoTitle: "Financial Information & Audited Results | Kalyani Cast Tech Limited",
    meta: "Audited annual financial results, half-yearly statements, balance sheets, and statutory financial reporting for Kalyani Cast Tech Limited (BSE SME: 544023)."
  },
  "/investors/stock-exchange-disclosures": {
    seoTitle: "Stock Exchange Disclosures (SEBI LODR) | Kalyani Cast Tech Limited",
    meta: "Regulation 30 material disclosures, board meeting intimations, trading window notifications, and official filings with BSE Limited for Kalyani Cast Tech."
  },
  "/investors/corporate-governance": {
    seoTitle: "Corporate Governance & Policies | Kalyani Cast Tech Limited",
    meta: "Statutory corporate governance framework, board committees, Code of Conduct, Whistle Blower Policy, and director familiarisation programmes of Kalyani Cast Tech."
  },
  "/investors/shareholder-information": {
    seoTitle: "Shareholder Information & RTA Services | Kalyani Cast Tech Limited",
    meta: "Shareholding patterns, dematerialisation (ISIN: INE0Q4801017), Bigshare Services RTA contact, AGM voting records, and shareholder assistance protocols."
  },
  "/investors/ipo-corporate-actions": {
    seoTitle: "IPO Prospectus & Corporate Actions | Kalyani Cast Tech Limited",
    meta: "Historical IPO prospectus, basis of allotment, SME capital structure evolution, and official corporate actions documentation for Kalyani Cast Tech Limited."
  },
  "/investors/investor-grievance-contact": {
    seoTitle: "Investor Grievance & Compliance Officer | Kalyani Cast Tech Limited",
    meta: "Designated grievance redressal mechanism, Company Secretary / Compliance Officer contact details, and RTA escalation pathways for Kalyani Cast Tech shareholders."
  },
  "/investors/meetings-presentations": {
    seoTitle: "Investor Meetings & Presentations | Kalyani Cast Tech Limited",
    meta: "Annual General Meeting (AGM) proceedings, scrutinizer reports, voting results, corporate presentations, and analyst interactions of Kalyani Cast Tech Limited."
  }
};

let modifiedCount = 0;
pages.forEach(p => {
  if (updates[p.url]) {
    const u = updates[p.url];
    if (u.seoTitle) p.seoTitle = u.seoTitle;
    if (u.meta) p.meta = u.meta;
    modifiedCount++;
    console.log(`Updated [${p.url}]:`);
    console.log(`  seoTitle: "${p.seoTitle}" (${p.seoTitle.length} chars)`);
    console.log(`  meta:     "${p.meta}" (${p.meta.length} chars)`);
  }
});

fs.writeFileSync(pagesPath, JSON.stringify(pages, null, 2) + '\n', 'utf8');
console.log(`Successfully updated ${modifiedCount} pages in pages.json.`);
