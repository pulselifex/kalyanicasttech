const fs = require('fs');
const path = require('path');

const outputDirDoc = path.resolve(__dirname, '..', '..', '04_WEBSITE_DOCUMENTATION', 'step5b25a_indexability_and_metadata_correction');
const outputDirCode = path.resolve(__dirname, '..', 'docs', 'step5b25a_indexability_and_metadata_correction');

const pagesPath = path.join(__dirname, '..', 'src', 'content', 'pages.json');
const pages = JSON.parse(fs.readFileSync(pagesPath, 'utf8'));

// The 27 indexable canonical routes
const canonicalRoutes = [
  '/',
  '/about-us',
  '/our-journey',
  '/leadership',
  '/manufacturing',
  '/facilities',
  '/products-applications',
  '/innovation',
  '/engineering-quality',
  '/investor-relations',
  '/gallery',
  '/contact',
  '/resources',
  '/shivlakha-rail-logistics',
  '/shivlakha-rail-logistics/gati-shakti-terminal',
  '/shivlakha-rail-logistics/inland-container-terminal',
  '/shivlakha-rail-logistics/cargo-opportunities',
  '/resources/quality-certifications',
  '/resources/corporate-profile-brochures',
  '/resources/news-media',
  '/investors/financial-information',
  '/investors/stock-exchange-disclosures',
  '/investors/corporate-governance',
  '/investors/shareholder-information',
  '/investors/ipo-corporate-actions',
  '/investors/investor-grievance-contact',
  '/investors/meetings-presentations'
];

const beforeData = {
  '/': { title: 'Kalyani Cast Tech Limited | Built for what India moves.', meta: 'Manufacturer of ISO and special-application freight containers, precision castings at Rewari Works, Haryana, and multimodal logistics at Shivlakha, Gujarat.' },
  '/engineering-quality': { title: 'Engineering & Quality | Kalyani Cast Tech Limited', meta: 'In-house container structural testing, optical emission spectrometry, certified NDT inspection, and quality assurance systems at Rewari Works, Haryana.' },
  '/shivlakha-rail-logistics/gati-shakti-terminal': { title: 'Gati Shakti Cargo Terminal | Kalyani Cast Tech Limited', meta: 'Operational 30-acre Gati Shakti Terminal at Shivlakha, Kachchh, Gujarat. Dedicated rail siding connected to the Indian Railways network via Gandhidham-Samakhiali.' },
  '/shivlakha-rail-logistics/cargo-opportunities': { title: 'Rail Route & Cargo Evaluation | Shivlakha', meta: 'We assess a potential movement against the whole logistics chain, including handling and first- and last-mile transport.' },
  '/resources/quality-certifications': { title: 'Quality Documents & Certificates | Kalyani Cast Tech', meta: 'We publish verified documents and identify the product, process and validity each one applies to.' },
  '/resources/corporate-profile-brochures': { title: 'Company & Project Brochures | Kalyani Cast Tech', meta: 'Use the latest approved document for the topic you are reviewing.' },
  '/resources/news-media': { title: 'Company News & Project Updates | Kalyani Cast Tech', meta: 'Updates are dated and published after the relevant facts and permissions have been checked.' },
  '/investors/financial-information': { title: 'Financial Information | Kalyani Cast Tech Limited', meta: 'Audited and reviewed financial statements, annual reports, results presentations and investor communications.' },
  '/investors/stock-exchange-disclosures': { title: 'Stock Exchange Disclosures | Kalyani Cast Tech Limited', meta: 'Formal announcements and disclosures under SEBI (Listing Obligations and Disclosure Requirements) Regulations.' },
  '/investors/corporate-governance': { title: 'Corporate Governance | Kalyani Cast Tech Limited', meta: 'Governance frameworks, board committees, policies, codes of conduct and compliance architecture.' },
  '/investors/shareholder-information': { title: 'Shareholder Information | Kalyani Cast Tech Limited', meta: 'Key dates, shareholding structure, registrar contact and general meeting information for shareholders.' },
  '/investors/ipo-corporate-actions': { title: 'IPO & Corporate Actions | Kalyani Cast Tech Limited', meta: 'Prospectus documents, listing information and historical records of corporate capital actions.' },
  '/investors/investor-grievance-contact': { title: 'Investor Grievance Contact | Kalyani Cast Tech Limited', meta: 'Dedicated point of contact and escalation procedures for shareholder and investor queries.' },
  '/investors/meetings-presentations': { title: 'Investor Meetings & Presentations | Kalyani Cast Tech', meta: 'Notices, voting results and presentations from general meetings and investor interactions.' }
};

const rows = canonicalRoutes.map(route => {
  const p = pages.find(x => x.url === route) || {};
  const currentTitle = p.seoTitle || p.title || '';
  const currentMeta = p.meta || '';
  const b = beforeData[route] || { title: currentTitle, meta: currentMeta };

  return [
    `"${route}"`,
    `"${(p.h1 || '').replace(/"/g, '""')}"`,
    `"${b.title.replace(/"/g, '""')}"`,
    b.title.length,
    `"${currentTitle.replace(/"/g, '""')}"`,
    currentTitle.length,
    `"${b.meta.replace(/"/g, '""')}"`,
    b.meta.length,
    `"${currentMeta.replace(/"/g, '""')}"`,
    currentMeta.length,
    `"${currentTitle !== b.title || currentMeta !== b.meta ? 'UPDATED' : 'PRESERVED'}"`
  ].join(',');
});

const headers = [
  'Route Path',
  'Primary H1',
  'Before Title',
  'Before Title Len',
  'After Title',
  'After Title Len',
  'Before Meta Description',
  'Before Meta Len',
  'After Meta Description',
  'After Meta Len',
  'Status'
];

const csvContent = [headers.join(','), ...rows].join('\n');

for (const dir of [outputDirDoc, outputDirCode]) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, '05_PAGE_METADATA_BEFORE_AFTER_REGISTER.csv'), csvContent, 'utf8');
}

console.log('Successfully generated 05_PAGE_METADATA_BEFORE_AFTER_REGISTER.csv in documentation and codebase.');
