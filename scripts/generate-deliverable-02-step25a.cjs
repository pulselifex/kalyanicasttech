const fs = require('fs');
const path = require('path');

const outputDirDoc = path.resolve(__dirname, '..', '..', '04_WEBSITE_DOCUMENTATION', 'step5b25a_indexability_and_metadata_correction');
const outputDirCode = path.resolve(__dirname, '..', 'docs', 'step5b25a_indexability_and_metadata_correction');

const pagesPath = path.join(__dirname, '..', 'src', 'content', 'pages.json');
const pages = JSON.parse(fs.readFileSync(pagesPath, 'utf8'));

// All 46 router paths
const routes = [
  // 16 initial canonical routes
  { path: '/', audience: 'Prospective clients, investors, supply chain directors', intent: 'Commercial & corporate overview of Kalyani Cast Tech', useful: 'YES', cat: 'Indexable canonical page', reason: 'Primary homepage and corporate identity anchor.' },
  { path: '/about-us', audience: 'Corporate partners, analysts, procurement heads', intent: 'Corporate background, founding history, governance', useful: 'YES', cat: 'Indexable canonical page', reason: 'Official corporate profile and listed company history.' },
  { path: '/our-journey', audience: 'Investors, customers, railway logistics partners', intent: 'Company evolution, track record, key milestones', useful: 'YES', cat: 'Indexable canonical page', reason: 'Exhaustive chronological milestone and capability growth roadmap.' },
  { path: '/leadership', audience: 'Shareholders, institutional investors, board advisors', intent: 'Board of Directors, management credentials, committees', useful: 'YES', cat: 'Indexable canonical page', reason: 'Statutory board and executive leadership composition.' },
  { path: '/manufacturing', audience: 'Industrial cargo shippers, container leasing buyers', intent: 'Manufacturing Division capabilities, ISO containers, wagons', useful: 'YES', cat: 'Indexable canonical page', reason: 'Division hub for container and rolling stock manufacturing.' },
  { path: '/facilities', audience: 'Technical auditors, procurement engineers, buyers', intent: 'Rewari Works plant, equipment, foundry layout, testing rig', useful: 'YES', cat: 'Indexable canonical page', reason: 'Physical manufacturing plant specifications and infrastructure.' },
  { path: '/products-applications', audience: 'Freight forwarders, chemical shippers, railway logistics', intent: 'Container specifications, models, corner castings', useful: 'YES', cat: 'Indexable canonical page', reason: 'Core B2B product catalogue across all container categories.' },
  { path: '/innovation', audience: 'Indian Railways, logistics innovators, bulk cargo owners', intent: 'Dwarf containers, New Wagon Design, RDSO Stage-I', useful: 'YES', cat: 'Indexable canonical page', reason: 'Specialised cargo concepts, dwarf trains, and wagon R&D.' },
  { path: '/engineering-quality', audience: 'Quality inspectors, classification societies, defense buyers', intent: 'Testing rig, NDT, spectrometry, QA standards', useful: 'YES', cat: 'Indexable canonical page', reason: 'Detailed engineering testing facilities and QA systems.' },
  { path: '/investor-relations', audience: 'Shareholders, analysts, compliance officers, media', intent: 'Listed disclosures, financials, stock exchange filings', useful: 'YES', cat: 'Indexable canonical page', reason: 'Central statutory and financial disclosure gateway.' },
  { path: '/gallery', audience: 'Buyers, logistics planners, partners, trade visitors', intent: 'Authentic photos of manufacturing, plants, products, terminal', useful: 'YES', cat: 'Indexable canonical page', reason: 'Authentic photographic proof of operations and plant scale.' },
  { path: '/shivlakha-rail-logistics', audience: 'Shippers, port operators, Western Railway freight clients', intent: 'Shivlakha platform overview, GCT, ICT, multimodal hub', useful: 'YES', cat: 'Indexable canonical page', reason: 'Terminal Division flagship platform overview.' },
  { path: '/shivlakha-rail-logistics/gati-shakti-terminal', audience: 'Bulk cargo shippers, container train operators, rakes', intent: 'Gati Shakti Terminal rail siding, operational handling', useful: 'YES', cat: 'Indexable canonical page', reason: 'Operational 30-acre rail-linked cargo terminal.' },
  { path: '/shivlakha-rail-logistics/inland-container-terminal', audience: 'EXIM shippers, customs brokers, port logistics planners', intent: 'Inland Container Terminal, CBIC approval, customs facility', useful: 'YES', cat: 'Indexable canonical page', reason: 'Under-development 30-acre customs terminal (CBIC approved).' },
  { path: '/contact', audience: 'Customers, suppliers, job seekers, general public', intent: 'Corporate enquiry, contact numbers, facility addresses', useful: 'YES', cat: 'Indexable canonical page', reason: 'Primary contact directory and commercial enquiry desk.' },
  { path: '/resources', audience: 'Engineers, purchasers, analysts, media', intent: 'Technical documents, brochures, quality certificates', useful: 'YES', cat: 'Indexable canonical page', reason: 'Technical resource library and document gateway.' },

  // Newly promoted high-value subpages
  { path: '/shivlakha-rail-logistics/cargo-opportunities', audience: 'Logistics directors, industrial freight shippers', intent: 'Evaluate rail route viability, cargo movement trial', useful: 'YES', cat: 'Indexable canonical page', reason: 'Interactive cargo evaluation consultation desk with distinct enquiry form.' },
  { path: '/resources/quality-certifications', audience: 'Quality auditors, marine surveyors, technical procurement', intent: 'Lloyds Register certificate, IRS approvals, ISO 9001', useful: 'YES', cat: 'Indexable canonical page', reason: 'Verified technical approvals, Lloyd Register EMEA Class A foundry, IRS certificates.' },
  { path: '/resources/corporate-profile-brochures', audience: 'Prospective clients, business partners, trade delegates', intent: 'Download corporate profile PDF, terminal brochures', useful: 'YES', cat: 'Indexable canonical page', reason: 'Official approved company presentations and downloadable PDFs.' },
  { path: '/resources/news-media', audience: 'Trade journalists, railway researchers, industry analysts', intent: 'Dwarf container train trial runs, press coverage, videos', useful: 'YES', cat: 'Indexable canonical page', reason: 'Historical press clippings and double-stack dwarf container trial videos.' },
  { path: '/investors/financial-information', audience: 'Investors, equity research analysts, statutory auditors', intent: 'Audited financial results, balance sheets, half-yearly reports', useful: 'YES', cat: 'Indexable canonical page', reason: 'Statutory financial results, audited balance sheets, and LODR filings.' },
  { path: '/investors/stock-exchange-disclosures', audience: 'Shareholders, BSE SME market participants, SEBI', intent: 'Regulation 30 disclosures, board meeting outcomes', useful: 'YES', cat: 'Indexable canonical page', reason: 'Material event intimations and statutory BSE filings.' },
  { path: '/investors/corporate-governance', audience: 'Proxy advisors, governance researchers, ESG analysts', intent: 'Code of conduct, whistle blower policy, committees', useful: 'YES', cat: 'Indexable canonical page', reason: 'Statutory governance policies and board committee charters.' },
  { path: '/investors/shareholder-information', audience: 'Retail shareholders, depository participants, transfer agents', intent: 'Shareholding pattern, dematerialisation, RTA Bigshare', useful: 'YES', cat: 'Indexable canonical page', reason: 'Shareholding patterns, ISIN details, and RTA contact protocols.' },
  { path: '/investors/ipo-corporate-actions', audience: 'Institutional investors, financial historians', intent: 'IPO prospectus, basis of allotment, capital evolution', useful: 'YES', cat: 'Indexable canonical page', reason: 'BSE SME listing documents, prospectus, and corporate actions.' },
  { path: '/investors/investor-grievance-contact', audience: 'Aggrieved shareholders, compliance monitoring agencies', intent: 'Compliance officer contact, nodal officer, grievance form', useful: 'YES', cat: 'Indexable canonical page', reason: 'Mandatory SEBI LODR grievance contact and nodal officer desk.' },
  { path: '/investors/meetings-presentations', audience: 'Institutional shareholders, research analysts', intent: 'AGM voting results, scrutinizer reports, presentations', useful: 'YES', cat: 'Indexable canonical page', reason: 'Annual General Meeting proceedings, voting tallies, and investor decks.' },

  // Content-pending utility route
  { path: '/resources/product-data-sheets', audience: 'Engineers, purchasers requiring exact CAD cutsheets', intent: 'Specific container model dimensional cutsheets', useful: 'PENDING', cat: 'Owner/content decision required', reason: 'Thin narrative (79 words); pending publication of model cutsheets by management. Tagged noindex.' },

  // Duplicate / thin subpages consolidated to primary canonical pages
  { path: '/containers-solutions/standard-containers', audience: 'Generic container searchers', intent: 'Standard container options', useful: 'NO', cat: 'Duplicate page requiring canonical consolidation', reason: 'Substantially duplicative of /products-applications which contains full specifications.' },
  { path: '/containers-solutions/specialised-containers', audience: 'Generic container searchers', intent: 'Specialised container options', useful: 'NO', cat: 'Duplicate page requiring canonical consolidation', reason: 'Substantially duplicative of /products-applications specialized tabs.' },
  { path: '/containers-solutions/rail-parcel-vehicle-cargo', audience: 'Parcel & vehicle cargo searchers', intent: 'Vehicle containers', useful: 'NO', cat: 'Duplicate page requiring canonical consolidation', reason: 'Substantially duplicative of /products-applications and /innovation.' },
  { path: '/containers-solutions/application-specific-designs', audience: 'Custom design searchers', intent: 'Application designs', useful: 'NO', cat: 'Duplicate page requiring canonical consolidation', reason: 'Substantially duplicative of /products-applications custom engineering.' },
  { path: '/containers-solutions/technical-data-sheets', audience: 'Data sheet searchers', intent: 'Technical data overview', useful: 'NO', cat: 'Duplicate page requiring canonical consolidation', reason: 'Substantially duplicative of /products-applications and /resources.' },
  { path: '/manufacturing/container-manufacturing', audience: 'Container manufacture searchers', intent: 'Container fabrication overview', useful: 'NO', cat: 'Duplicate page requiring canonical consolidation', reason: 'Substantially duplicative of /manufacturing and /facilities.' },
  { path: '/manufacturing/design-engineering', audience: 'Design engineering searchers', intent: 'Design capabilities', useful: 'NO', cat: 'Duplicate page requiring canonical consolidation', reason: 'Substantially duplicative of /engineering-quality.' },
  { path: '/company/our-journey', audience: 'Historical searchers', intent: 'Company history summary', useful: 'NO', cat: 'Duplicate page requiring canonical consolidation', reason: 'Partial legacy duplicate of comprehensive 826-line /our-journey.' },
  { path: '/company/our-business', audience: 'General business searchers', intent: 'Business summary', useful: 'NO', cat: 'Duplicate page requiring canonical consolidation', reason: 'Partial legacy duplicate of /about-us and /manufacturing.' },

  // 301 Server Redirects
  { path: '/business-enquiry', audience: 'Legacy bookmarked visitors', intent: 'Enquiry form', useful: 'NO', cat: 'Redirect', reason: 'HTTP 301 permanent server redirect to /contact.' },
  { path: '/company', audience: 'Legacy bookmarked visitors', intent: 'About company', useful: 'NO', cat: 'Redirect', reason: 'HTTP 301 permanent server redirect to /about-us.' },
  { path: '/company/leadership', audience: 'Legacy bookmarked visitors', intent: 'Leadership team', useful: 'NO', cat: 'Redirect', reason: 'HTTP 301 permanent server redirect to /leadership.' },
  { path: '/containers-solutions', audience: 'Legacy bookmarked visitors', intent: 'Containers catalogue', useful: 'NO', cat: 'Redirect', reason: 'HTTP 301 permanent server redirect to /products-applications.' },
  { path: '/investors', audience: 'Legacy bookmarked visitors', intent: 'Investor relations', useful: 'NO', cat: 'Redirect', reason: 'HTTP 301 permanent server redirect to /investor-relations.' },
  { path: '/manufacturing/facilities-locations', audience: 'Legacy bookmarked visitors', intent: 'Facilities location', useful: 'NO', cat: 'Redirect', reason: 'HTTP 301 permanent server redirect to /facilities.' },
  { path: '/manufacturing/testing-quality', audience: 'Legacy bookmarked visitors', intent: 'Quality testing', useful: 'NO', cat: 'Redirect', reason: 'HTTP 301 permanent server redirect to /engineering-quality.' },
  { path: '/shivlakha-rail-logistics/gati-shakti-cargo-terminal', audience: 'Legacy bookmarked visitors', intent: 'Gati Shakti Terminal', useful: 'NO', cat: 'Redirect', reason: 'HTTP 301 permanent server redirect to /shivlakha-rail-logistics/gati-shakti-terminal.' },
  { path: '/shivlakha-rail-logistics/inland-container-depot', audience: 'Legacy bookmarked visitors', intent: 'Inland Container Terminal', useful: 'NO', cat: 'Redirect', reason: 'HTTP 301 permanent server redirect to /shivlakha-rail-logistics/inland-container-terminal.' }
];

console.log(`Processing complete route indexability register for ${routes.length} paths...`);

const csvHeaders = [
  'Path',
  'Page Title',
  'Page Purpose',
  'Intended Audience',
  'Search Intent',
  'Unique Content Present',
  'Useful Independently of Parent',
  'Current Robots Directive',
  'Current Canonical URL',
  'Current Sitemap Inclusion',
  'Internal Link Presence',
  'Final Recommended Indexability',
  'Reason for Decision'
];

function escapeCsv(str) {
  if (!str) return '""';
  const s = String(str).replace(/"/g, '""');
  return `"${s}"`;
}

const rows = routes.map(r => {
  const p = pages.find(x => x.url === r.path) || {};
  const isIndexable = r.cat === 'Indexable canonical page';
  const isRedirect = r.cat === 'Redirect';

  const title = p.seoTitle || p.title || (isRedirect ? `Redirect -> ${r.reason.match(/to\s+([^\.]+)/)?.[1] || ''}` : 'N/A');
  const uniqueContent = isIndexable ? 'YES - Unique copy, specifications, filings or form' : (isRedirect ? 'NO - 301 Redirect' : 'PARTIAL - High overlap with parent');
  const robots = isIndexable ? 'index, follow' : (isRedirect ? 'N/A (HTTP 301)' : 'noindex, follow');
  
  let canonical = `https://kalyanicasttech.com${r.path === '/' ? '/' : r.path}`;
  if (r.cat === 'Duplicate page requiring canonical consolidation') {
    if (r.path.startsWith('/containers-solutions')) canonical = 'https://kalyanicasttech.com/products-applications';
    else if (r.path === '/manufacturing/container-manufacturing') canonical = 'https://kalyanicasttech.com/manufacturing';
    else if (r.path === '/manufacturing/design-engineering') canonical = 'https://kalyanicasttech.com/engineering-quality';
    else if (r.path === '/company/our-journey') canonical = 'https://kalyanicasttech.com/our-journey';
    else if (r.path === '/company/our-business') canonical = 'https://kalyanicasttech.com/about-us';
  } else if (isRedirect) {
    canonical = 'N/A (301 Redirect Destination)';
  }

  const sitemap = isIndexable ? 'INCLUDED' : 'EXCLUDED';
  const internalLinks = isRedirect ? 'External / Legacy redirects' : 'YES - Navigation, footer or contextual links';

  return [
    escapeCsv(r.path),
    escapeCsv(title),
    escapeCsv(r.reason),
    escapeCsv(r.audience),
    escapeCsv(r.intent),
    escapeCsv(uniqueContent),
    escapeCsv(r.useful),
    escapeCsv(robots),
    escapeCsv(canonical),
    escapeCsv(sitemap),
    escapeCsv(internalLinks),
    escapeCsv(r.cat),
    escapeCsv(r.reason)
  ].join(',');
});

const csvContent = [csvHeaders.join(','), ...rows].join('\n');

for (const dir of [outputDirDoc, outputDirCode]) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, '02_COMPLETE_ROUTE_INDEXABILITY_REGISTER.csv'), csvContent, 'utf8');
}

console.log('Successfully generated 02_COMPLETE_ROUTE_INDEXABILITY_REGISTER.csv in documentation and codebase.');
