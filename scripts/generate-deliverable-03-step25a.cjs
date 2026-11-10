const fs = require('fs');
const path = require('path');

const outputDirDoc = path.resolve(__dirname, '..', '..', '04_WEBSITE_DOCUMENTATION', 'step5b25a_indexability_and_metadata_correction');
const outputDirCode = path.resolve(__dirname, '..', 'docs', 'step5b25a_indexability_and_metadata_correction');

const matrixData = [
  // 16 Primary Canonical Routes
  { path: '/', parent: 'None (Root)', relation: 'Apex homepage', prev: 'Self-referencing', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/', self: 'TRUE', just: 'Apex root anchor' },
  { path: '/about-us', parent: '/', relation: 'Corporate overview', prev: 'Self-referencing', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/about-us', self: 'TRUE', just: 'Primary corporate profile' },
  { path: '/our-journey', parent: '/about-us', relation: 'Chronological timeline', prev: 'Self-referencing', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/our-journey', self: 'TRUE', just: 'Comprehensive milestone roadmap' },
  { path: '/leadership', parent: '/about-us', relation: 'Board & management', prev: 'Self-referencing', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/leadership', self: 'TRUE', just: 'Statutory board composition' },
  { path: '/manufacturing', parent: '/', relation: 'Division hub', prev: 'Self-referencing', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/manufacturing', self: 'TRUE', just: 'Manufacturing Division primary overview' },
  { path: '/facilities', parent: '/manufacturing', relation: 'Factory specs', prev: 'Self-referencing', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/facilities', self: 'TRUE', just: 'Rewari Works plant specifications' },
  { path: '/products-applications', parent: '/manufacturing', relation: 'Product catalogue', prev: 'Self-referencing', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/products-applications', self: 'TRUE', just: 'Container and casting catalogue' },
  { path: '/innovation', parent: '/manufacturing', relation: 'R&D & Wagon design', prev: 'Self-referencing', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/innovation', self: 'TRUE', just: 'New Wagon Design & dwarf container innovation' },
  { path: '/engineering-quality', parent: '/manufacturing', relation: 'Testing & QA', prev: 'Self-referencing', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/engineering-quality', self: 'TRUE', just: 'In-house testing rig and NDT examination suite' },
  { path: '/investor-relations', parent: '/', relation: 'Statutory gateway', prev: 'Self-referencing', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/investor-relations', self: 'TRUE', just: 'Primary statutory investor gateway' },
  { path: '/gallery', parent: '/', relation: 'Visual proof', prev: 'Self-referencing', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/gallery', self: 'TRUE', just: 'Visual photo archive of plants and operations' },
  { path: '/contact', parent: '/', relation: 'Commercial desk', prev: 'Self-referencing', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/contact', self: 'TRUE', just: 'Official contact and commercial enquiry desk' },
  { path: '/resources', parent: '/', relation: 'Technical library', prev: 'Self-referencing', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/resources', self: 'TRUE', just: 'Technical resources repository gateway' },
  { path: '/shivlakha-rail-logistics', parent: '/', relation: 'Division hub', prev: 'Self-referencing', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/shivlakha-rail-logistics', self: 'TRUE', just: 'Terminal Division flagship platform overview' },
  { path: '/shivlakha-rail-logistics/gati-shakti-terminal', parent: '/shivlakha-rail-logistics', relation: 'Operational siding', prev: 'Self-referencing', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/shivlakha-rail-logistics/gati-shakti-terminal', self: 'TRUE', just: 'Operational 30-acre GCT terminal' },
  { path: '/shivlakha-rail-logistics/inland-container-terminal', parent: '/shivlakha-rail-logistics', relation: 'Under-development ICT', prev: 'Self-referencing', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/shivlakha-rail-logistics/inland-container-terminal', self: 'TRUE', just: 'Under-development 30-acre ICT facility (CBIC approved)' },

  // Newly Promoted Indexable Routes (Self-referencing canonicals replacing parent consolidation)
  { path: '/shivlakha-rail-logistics/cargo-opportunities', parent: '/shivlakha-rail-logistics', relation: 'Consultative enquiry', prev: 'Canonical to parent (/shivlakha-rail-logistics)', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/shivlakha-rail-logistics/cargo-opportunities', self: 'TRUE', just: 'Distinct cargo movement evaluation desk with custom form' },
  { path: '/resources/quality-certifications', parent: '/resources', relation: 'Official certificates', prev: 'Canonical to parent (/resources)', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/resources/quality-certifications', self: 'TRUE', just: 'Detailed technical certifications (Lloyds Register, IRS, ISO 9001)' },
  { path: '/resources/corporate-profile-brochures', parent: '/resources', relation: 'Official brochures', prev: 'Canonical to parent (/resources)', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/resources/corporate-profile-brochures', self: 'TRUE', just: 'Downloadable corporate profiles and project brochures' },
  { path: '/resources/news-media', parent: '/resources', relation: 'Media & historical trials', prev: 'Canonical to parent (/resources)', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/resources/news-media', self: 'TRUE', just: 'Historical railway notifications, video demonstrations, and press clippings' },
  { path: '/investors/financial-information', parent: '/investor-relations', relation: 'Financial statements', prev: 'Canonical to parent (/investor-relations)', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/investors/financial-information', self: 'TRUE', just: '13+ audited financial filings, balance sheets, and reports' },
  { path: '/investors/stock-exchange-disclosures', parent: '/investor-relations', relation: 'BSE LODR filings', prev: 'Canonical to parent (/investor-relations)', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/investors/stock-exchange-disclosures', self: 'TRUE', just: '18+ official Regulation 30 announcements' },
  { path: '/investors/corporate-governance', parent: '/investor-relations', relation: 'Statutory policies', prev: 'Canonical to parent (/investor-relations)', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/investors/corporate-governance', self: 'TRUE', just: 'Board committee composition and signed corporate policies' },
  { path: '/investors/shareholder-information', parent: '/investor-relations', relation: 'Shareholder services', prev: 'Canonical to parent (/investor-relations)', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/investors/shareholder-information', self: 'TRUE', just: 'Shareholding pattern, demat (ISIN: INE0Q4801017), Bigshare RTA' },
  { path: '/investors/ipo-corporate-actions', parent: '/investor-relations', relation: 'SME IPO history', prev: 'Canonical to parent (/investor-relations)', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/investors/ipo-corporate-actions', self: 'TRUE', just: 'Historical prospectus, basis of allotment, capital actions' },
  { path: '/investors/investor-grievance-contact', parent: '/investor-relations', relation: 'Grievance desk', prev: 'Canonical to parent (/investor-relations)', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/investors/investor-grievance-contact', self: 'TRUE', just: 'Compliance officer details and statutory grievance mechanism' },
  { path: '/investors/meetings-presentations', parent: '/investor-relations', relation: 'AGM & investor decks', prev: 'Canonical to parent (/investor-relations)', curr: 'Self-referencing', canonical: 'https://kalyanicasttech.com/investors/meetings-presentations', self: 'TRUE', just: 'AGM voting results, scrutinizer reports, and presentations' },

  // Content-pending utility route
  { path: '/resources/product-data-sheets', parent: '/resources', relation: 'Placeholder notice', prev: 'Canonical to parent (/resources)', curr: 'Self-referencing (noindex)', canonical: 'https://kalyanicasttech.com/resources/product-data-sheets', self: 'TRUE', just: 'Self-canonical prevents false duplicate signal while noindex excludes thin notice' },

  // Duplicate / Thin subpages consolidated to primary parent
  { path: '/containers-solutions/standard-containers', parent: '/products-applications', relation: 'Generic overview', prev: 'Canonical to /products-applications', curr: 'Consolidated to /products-applications', canonical: 'https://kalyanicasttech.com/products-applications', self: 'FALSE', just: 'Substantially duplicative; parent contains full specification tables' },
  { path: '/containers-solutions/specialised-containers', parent: '/products-applications', relation: 'Generic overview', prev: 'Canonical to /products-applications', curr: 'Consolidated to /products-applications', canonical: 'https://kalyanicasttech.com/products-applications', self: 'FALSE', just: 'Substantially duplicative; parent contains full specialized tabs' },
  { path: '/containers-solutions/rail-parcel-vehicle-cargo', parent: '/products-applications', relation: 'Generic overview', prev: 'Canonical to /products-applications', curr: 'Consolidated to /products-applications', canonical: 'https://kalyanicasttech.com/products-applications', self: 'FALSE', just: 'Substantially duplicative of /products-applications' },
  { path: '/containers-solutions/application-specific-designs', parent: '/products-applications', relation: 'Generic overview', prev: 'Canonical to /products-applications', curr: 'Consolidated to /products-applications', canonical: 'https://kalyanicasttech.com/products-applications', self: 'FALSE', just: 'Substantially duplicative of custom container section' },
  { path: '/containers-solutions/technical-data-sheets', parent: '/products-applications', relation: 'Generic overview', prev: 'Canonical to /products-applications', curr: 'Consolidated to /products-applications', canonical: 'https://kalyanicasttech.com/products-applications', self: 'FALSE', just: 'Substantially duplicative of /products-applications technical data' },
  { path: '/manufacturing/container-manufacturing', parent: '/manufacturing', relation: 'General summary', prev: 'Canonical to /manufacturing', curr: 'Consolidated to /manufacturing', canonical: 'https://kalyanicasttech.com/manufacturing', self: 'FALSE', just: 'Substantially duplicative of /manufacturing division overview' },
  { path: '/manufacturing/design-engineering', parent: '/engineering-quality', relation: 'General summary', prev: 'Canonical to /engineering-quality', curr: 'Consolidated to /engineering-quality', canonical: 'https://kalyanicasttech.com/engineering-quality', self: 'FALSE', just: 'Substantially duplicative of /engineering-quality' },
  { path: '/company/our-journey', parent: '/our-journey', relation: 'Partial summary', prev: 'Canonical to /our-journey', curr: 'Consolidated to /our-journey', canonical: 'https://kalyanicasttech.com/our-journey', self: 'FALSE', just: 'Legacy partial duplicate of full 826-line /our-journey' },
  { path: '/company/our-business', parent: '/about-us', relation: 'General summary', prev: 'Canonical to /about-us', curr: 'Consolidated to /about-us', canonical: 'https://kalyanicasttech.com/about-us', self: 'FALSE', just: 'Legacy duplicate superseded by /about-us' },

  // 301 Server Redirects
  { path: '/business-enquiry', parent: '/contact', relation: 'Legacy redirect', prev: '301 -> /contact', curr: '301 -> /contact', canonical: 'https://kalyanicasttech.com/contact', self: 'FALSE', just: 'Permanent 301 server redirect destination' },
  { path: '/company', parent: '/about-us', relation: 'Legacy redirect', prev: '301 -> /about-us', curr: '301 -> /about-us', canonical: 'https://kalyanicasttech.com/about-us', self: 'FALSE', just: 'Permanent 301 server redirect destination' },
  { path: '/company/leadership', parent: '/leadership', relation: 'Legacy redirect', prev: '301 -> /leadership', curr: '301 -> /leadership', canonical: 'https://kalyanicasttech.com/leadership', self: 'FALSE', just: 'Permanent 301 server redirect destination' },
  { path: '/containers-solutions', parent: '/products-applications', relation: 'Legacy redirect', prev: '301 -> /products-applications', curr: '301 -> /products-applications', canonical: 'https://kalyanicasttech.com/products-applications', self: 'FALSE', just: 'Permanent 301 server redirect destination' },
  { path: '/investors', parent: '/investor-relations', relation: 'Legacy redirect', prev: '301 -> /investor-relations', curr: '301 -> /investor-relations', canonical: 'https://kalyanicasttech.com/investor-relations', self: 'FALSE', just: 'Permanent 301 server redirect destination' },
  { path: '/manufacturing/facilities-locations', parent: '/facilities', relation: 'Legacy redirect', prev: '301 -> /facilities', curr: '301 -> /facilities', canonical: 'https://kalyanicasttech.com/facilities', self: 'FALSE', just: 'Permanent 301 server redirect destination' },
  { path: '/manufacturing/testing-quality', parent: '/engineering-quality', relation: 'Legacy redirect', prev: '301 -> /engineering-quality', curr: '301 -> /engineering-quality', canonical: 'https://kalyanicasttech.com/engineering-quality', self: 'FALSE', just: 'Permanent 301 server redirect destination' },
  { path: '/shivlakha-rail-logistics/gati-shakti-cargo-terminal', parent: '/shivlakha-rail-logistics/gati-shakti-terminal', relation: 'Legacy redirect', prev: '301 -> /gati-shakti-terminal', curr: '301 -> /gati-shakti-terminal', canonical: 'https://kalyanicasttech.com/shivlakha-rail-logistics/gati-shakti-terminal', self: 'FALSE', just: 'Permanent 301 server redirect destination' },
  { path: '/shivlakha-rail-logistics/inland-container-depot', parent: '/shivlakha-rail-logistics/inland-container-terminal', relation: 'Legacy redirect', prev: '301 -> /inland-container-terminal', curr: '301 -> /inland-container-terminal', canonical: 'https://kalyanicasttech.com/shivlakha-rail-logistics/inland-container-terminal', self: 'FALSE', just: 'Permanent 301 server redirect destination' }
];

const headers = [
  'Route Path',
  'Parent Page',
  'Content Relationship',
  'Previous Canonical Strategy (WP-5B.25)',
  'Corrected Canonical Strategy (WP-5B.25A)',
  'Final Canonical URL',
  'Self-Referencing Flag',
  'Justification'
];

function escapeCsv(str) {
  if (!str) return '""';
  const s = String(str).replace(/"/g, '""');
  return `"${s}"`;
}

const csvRows = matrixData.map(m => [
  escapeCsv(m.path),
  escapeCsv(m.parent),
  escapeCsv(m.relation),
  escapeCsv(m.prev),
  escapeCsv(m.curr),
  escapeCsv(m.canonical),
  escapeCsv(m.self),
  escapeCsv(m.just)
].join(','));

const content = [headers.join(','), ...csvRows].join('\n');

for (const dir of [outputDirDoc, outputDirCode]) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, '03_CANONICAL_URL_DECISION_MATRIX.csv'), content, 'utf8');
}

console.log('Successfully generated 03_CANONICAL_URL_DECISION_MATRIX.csv in documentation and codebase.');
