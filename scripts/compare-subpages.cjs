const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'content', 'pages.json'), 'utf8'));

function getPageText(p) {
  if (!p) return '';
  let text = (p.title || '') + ' ' + (p.h1 || '') + ' ' + (p.hero || '') + ' ';
  (p.sections || []).forEach(s => {
    text += (s.heading || '') + ' ';
    (s.body || []).forEach(b => {
      text += (b.p || '') + ' ' + (b.li || '') + ' ';
    });
  });
  return text;
}

const comparisons = [
  { sub: '/company/our-journey', parent: '/our-journey' },
  { sub: '/company/our-business', parent: '/about-us' },
  { sub: '/containers-solutions/standard-containers', parent: '/products-applications' },
  { sub: '/containers-solutions/specialised-containers', parent: '/products-applications' },
  { sub: '/containers-solutions/rail-parcel-vehicle-cargo', parent: '/products-applications' },
  { sub: '/containers-solutions/application-specific-designs', parent: '/products-applications' },
  { sub: '/containers-solutions/technical-data-sheets', parent: '/products-applications' },
  { sub: '/manufacturing/container-manufacturing', parent: '/manufacturing' },
  { sub: '/manufacturing/design-engineering', parent: '/engineering-quality' },
  { sub: '/resources/corporate-profile-brochures', parent: '/resources' },
  { sub: '/resources/product-data-sheets', parent: '/resources' },
  { sub: '/resources/quality-certifications', parent: '/resources' },
  { sub: '/resources/news-media', parent: '/resources' },
  { sub: '/investors/financial-information', parent: '/investor-relations' },
  { sub: '/investors/stock-exchange-disclosures', parent: '/investor-relations' },
  { sub: '/investors/corporate-governance', parent: '/investor-relations' },
  { sub: '/investors/shareholder-information', parent: '/investor-relations' },
  { sub: '/investors/ipo-corporate-actions', parent: '/investor-relations' },
  { sub: '/investors/investor-grievance-contact', parent: '/investor-relations' },
  { sub: '/investors/meetings-presentations', parent: '/investor-relations' },
  { sub: '/shivlakha-rail-logistics/cargo-opportunities', parent: '/shivlakha-rail-logistics' }
];

console.log('Comparing secondary subpages against parents:\n');
comparisons.forEach(c => {
  const subP = pages.find(p => p.url === c.sub);
  const parentP = pages.find(p => p.url === c.parent);
  const subWords = getPageText(subP).split(/\s+/).filter(Boolean);
  const parentWords = new Set(getPageText(parentP).toLowerCase().split(/\s+/).filter(Boolean));
  
  let overlapCount = 0;
  subWords.forEach(w => {
    if (parentWords.has(w.toLowerCase())) overlapCount++;
  });
  const overlapPct = subWords.length > 0 ? ((overlapCount / subWords.length) * 100).toFixed(1) : 0;
  
  console.log(
    c.sub.padEnd(52),
    `words: ${subWords.length}`.padEnd(12),
    `overlap with ${c.parent}: ${overlapPct}%`
  );
});
