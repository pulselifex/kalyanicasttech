const https = require('https');
const fs = require('fs');
const path = require('path');

const STAGING_URL = 'https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app';

const sampleRoutes = [
  '/',
  '/about-us',
  '/facilities',
  '/shivlakha-rail-logistics/gati-shakti-terminal',
  '/shivlakha-rail-logistics/inland-container-terminal',
  '/products-applications',
  '/investor-relations',
  '/contact'
];

function fetchHtml(route) {
  return new Promise((resolve, reject) => {
    https.get(`${STAGING_URL}${route}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 KCT-Validator/1.0' }
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => resolve(body));
    }).on('error', reject);
  });
}

async function run() {
  console.log('=== STRUCTURED DATA (JSON-LD) VALIDATION ===');
  const allSchemas = {};
  let totalSchemas = 0;
  let syntaxErrors = 0;
  let semanticFlags = [];

  for (const r of sampleRoutes) {
    const html = await fetchHtml(r);
    const regex = /<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
    let m;
    const schemas = [];
    while ((m = regex.exec(html)) !== null) {
      try {
        const parsed = JSON.parse(m[1]);
        schemas.push(parsed);
        totalSchemas++;
      } catch (e) {
        syntaxErrors++;
        console.error(`Syntax error on ${r}:`, e.message);
      }
    }
    allSchemas[r] = schemas;

    // Semantic checks
    for (const s of schemas) {
      const type = s['@type'];
      // Check for forbidden schemas
      if (type === 'Product' || type === 'Offer' || type === 'AggregateRating' || type === 'Review') {
        semanticFlags.push(`FORBIDDEN SCHEMA on ${r}: @type=${type}`);
      }
      // Check LocalBusiness on GCT
      if (type === 'LocalBusiness') {
        if (s.openingHours || s.openingHoursSpecification) {
          semanticFlags.push(`UNCONFIRMED OPENING HOURS in LocalBusiness on ${r}`);
        }
        if (s.priceRange) {
          semanticFlags.push(`PRICE RANGE in LocalBusiness on ${r}`);
        }
      }
      // Check if ICT has LocalBusiness
      if (r.includes('inland-container-terminal') && type === 'LocalBusiness') {
        semanticFlags.push(`ICT MUST NOT BE LocalBusiness (under development)`);
      }
    }
  }

  console.log(`Audited ${sampleRoutes.length} pages.`);
  console.log(`Total JSON-LD schemas parsed: ${totalSchemas}`);
  console.log(`Syntax errors: ${syntaxErrors}`);
  console.log(`Semantic flags: ${semanticFlags.length}`);
  if (semanticFlags.length > 0) {
    semanticFlags.forEach(f => console.log('  ❌ ' + f));
  } else {
    console.log('✅ ALL semantic and structural validation checks PASSED cleanly!');
  }

  // Print schema types by route
  for (const [r, sList] of Object.entries(allSchemas)) {
    console.log(`  ${r}: [${sList.map(s => s['@type']).join(', ')}]`);
  }

  fs.writeFileSync(path.join(__dirname, 'structured-data-audit-results.json'), JSON.stringify(allSchemas, null, 2));
}

run();
