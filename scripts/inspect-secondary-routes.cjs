const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'content', 'pages.json'), 'utf8'));
const secondaryUrls = [
  "/company/our-business",
  "/company/our-journey",
  "/containers-solutions/standard-containers",
  "/containers-solutions/specialised-containers",
  "/containers-solutions/rail-parcel-vehicle-cargo",
  "/containers-solutions/application-specific-designs",
  "/containers-solutions/technical-data-sheets",
  "/manufacturing/container-manufacturing",
  "/manufacturing/design-engineering",
  "/investors/financial-information",
  "/investors/stock-exchange-disclosures",
  "/investors/corporate-governance",
  "/investors/shareholder-information",
  "/investors/ipo-corporate-actions",
  "/investors/investor-grievance-contact",
  "/investors/meetings-presentations",
  "/resources/corporate-profile-brochures",
  "/resources/product-data-sheets",
  "/resources/quality-certifications",
  "/resources/news-media",
  "/shivlakha-rail-logistics/cargo-opportunities"
];

console.log('=== DETAILED INSPECTION OF THE 21 SECONDARY ROUTES ===\n');

secondaryUrls.forEach(url => {
  const p = pages.find(x => x.url === url);
  if (!p) {
    console.log(`URL NOT FOUND IN pages.json: ${url}`);
    return;
  }
  console.log('----------------------------------------------------');
  console.log(`ROUTE: ${url}`);
  console.log(`TITLE: ${p.title || p.seoTitle}`);
  console.log(`H1: ${p.h1}`);
  console.log(`HERO: ${p.hero}`);
  console.log(`SECTIONS (${(p.sections || []).length}):`);
  (p.sections || []).forEach((s, idx) => {
    console.log(`  [${idx+1}] ${s.heading}`);
    (s.body || []).forEach(b => {
      if (b.p) console.log(`      P: ${b.p.slice(0, 80)}...`);
      if (b.li) console.log(`      LI: ${b.li.slice(0, 80)}...`);
    });
  });
});
