const fs = require('fs');
const path = require('path');

const pagesPath = path.resolve(__dirname, '../src/content/pages.json');
const pages = JSON.parse(fs.readFileSync(pagesPath, 'utf8'));

const updates = {
  '/': {
    meta: 'Manufacturer of ISO and special-application freight containers, precision castings at Rewari Works, Haryana, and multimodal logistics at Shivlakha, Gujarat.',
  },
  '/contact': {
    meta: 'Commercial enquiries, container specifications, registered office in New Delhi, Rewari Works manufacturing plant, and Shivlakha Platform in Gujarat.',
  },
  '/about-us': {
    meta: 'Corporate profile of Kalyani Cast Tech Limited (BSE SME: 544023). Engineering freight containers, precision foundry castings, and multimodal terminal logistics.',
  },
  '/our-journey': {
    meta: 'Verified corporate evolution of Kalyani Cast Tech Limited from precision container manufacturing at Rewari to multimodal terminal infrastructure at Shivlakha.',
  },
  '/manufacturing': {
    seoTitle: 'Manufacturing Division | Kalyani Cast Tech Limited',
    meta: 'Explore Kalyani Cast Tech Limited\'s Manufacturing Division: ISO freight containers, precision foundry castings, and rolling stock engineering at Rewari Works.',
  },
  '/facilities': {
    seoTitle: 'Manufacturing Facilities | Kalyani Cast Tech Limited',
    meta: 'Inspect Kalyani Cast Tech\'s principal manufacturing plant at Rewari Works, Haryana: fabrication sheds, induction foundry, and structural testing rigs.',
  },
  '/products-applications': {
    seoTitle: 'Products & Applications | Kalyani Cast Tech Limited',
    meta: 'Standard ISO containers, specialised open-top coiltainers, dwarf containers, tank containers, and ISO 1161 specification corner castings engineered in India.',
  },
  '/innovation': {
    meta: 'Specialised cargo concepts, dwarf container innovation, and New Wagon Design under RDSO Stage-I approval by Kalyani Cast Tech Limited.',
  },
  '/engineering-quality': {
    meta: 'In-house container structural testing, optical emission spectrometry, certified NDT inspection, and quality assurance systems at Rewari Works, Haryana.',
  },
  '/investor-relations': {
    meta: 'Official statutory disclosures of Kalyani Cast Tech Limited (BSE SME: 544023, CIN: L26990DL2012PLC242760): audited financials, annual reports, and LODR filings.',
  },
  '/gallery': {
    seoTitle: 'Visual Gallery: Plants & Operations | Kalyani Cast Tech Limited',
    meta: 'Authentic photographic archive of Kalyani Cast Tech Limited: Rewari manufacturing works, container fabrication, foundry castings, and GCT Shivlakha operations.',
  },
  '/shivlakha-rail-logistics': {
    seoTitle: 'Shivlakha Multimodal Platform | Kalyani Cast Tech Limited',
    meta: 'Integrated multimodal hub at Shivlakha, Kachchh: operational Gati Shakti Cargo Terminal, under-development ICT, and planned rolling stock integration.',
  },
  '/shivlakha-rail-logistics/gati-shakti-terminal': {
    seoTitle: 'Gati Shakti Cargo Terminal | Kalyani Cast Tech Limited',
    meta: 'Operational 30-acre Gati Shakti Terminal at Shivlakha, Kachchh, Gujarat. Dedicated rail siding connected to the Indian Railways network via Gandhidham-Samakhiali.',
  },
  '/shivlakha-rail-logistics/inland-container-terminal': {
    seoTitle: 'Inland Container Terminal | Kalyani Cast Tech Limited',
    meta: 'Under-development Inland Container Terminal at Shivlakha, Kachchh, Gujarat with CBIC approval received 10 September 2026. Future customs-bonded facility.',
  },
  '/resources': {
    seoTitle: 'Resources & Technical Library | Kalyani Cast Tech Limited',
    meta: 'Approved corporate brochures, container technical specifications, ISO quality management certificates, and regulatory disclosures from Kalyani Cast Tech.',
  },
};

let count = 0;
for (const p of pages) {
  if (updates[p.url]) {
    const u = updates[p.url];
    if (u.seoTitle) p.seoTitle = u.seoTitle;
    if (u.meta) p.meta = u.meta;
    count++;
  }
}

fs.writeFileSync(pagesPath, JSON.stringify(pages, null, 2) + '\n', 'utf8');
console.log(`Updated metadata for ${count} pages in pages.json.`);
