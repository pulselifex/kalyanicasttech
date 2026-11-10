const https = require('https');
const fs = require('fs');
const path = require('path');

const STAGING_URL = 'https://6aedf6669632ee93e53f8ad2--kalyanicasttech.netlify.app';

const targets = [
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
  '/investors/meetings-presentations',
  '/robots.txt',
  '/sitemap.xml',
  '/resources/product-data-sheets',
  '/containers-solutions/standard-containers',
  '/manufacturing/container-manufacturing',
  '/business-enquiry',
  '/shivlakha-rail-logistics/gati-shakti-cargo-terminal'
];

function fetchTarget(target) {
  return new Promise((resolve) => {
    const fullUrl = `${STAGING_URL}${target}`;
    const req = https.get(fullUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) KCT-Validator/1.0',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
      },
      timeout: 10000
    }, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        const titleMatch = body.match(/<title[^>]*>([^<]+)<\/title>/i);
        const metaDescMatch = body.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i);
        const robotsMatch = body.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["'][^>]*>/i);
        const canonicalMatch = body.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["'][^>]*>/i);
        const xRobotsTag = res.headers['x-robots-tag'] || 'NOT_PRESENT';
        const jsonLdMatches = body.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi) || [];

        resolve({
          target,
          statusCode: res.statusCode,
          location: res.headers.location || null,
          xRobotsTag,
          title: titleMatch ? titleMatch[1] : null,
          metaDesc: metaDescMatch ? metaDescMatch[1] : null,
          robotsMeta: robotsMatch ? robotsMatch[1] : null,
          canonicalHref: canonicalMatch ? canonicalMatch[1] : null,
          jsonLdCount: jsonLdMatches.length,
          bodySize: body.length
        });
      });
    });

    req.on('error', (err) => {
      resolve({
        target,
        statusCode: 'ERROR: ' + err.message
      });
    });
  });
}

async function run() {
  console.log(`Starting edge verification against new deploy ${STAGING_URL}...`);
  
  const results = [];
  for (const t of targets) {
    process.stdout.write(`Fetching ${t}... `);
    const r = await fetchTarget(t);
    console.log(`[${r.statusCode}]`);
    results.push(r);
  }

  console.log('\n--- VERIFICATION OF RECENT CORRECTIONS ON LIVE STAGING ---');
  // Check /shivlakha-rail-logistics description
  const shiv = results.find(r => r.target === '/shivlakha-rail-logistics');
  if (shiv) {
    console.log('/shivlakha-rail-logistics meta:');
    console.log('  "' + shiv.metaDesc + '"');
    console.log('  Contains "Cargo Terminal"?: ' + (shiv.metaDesc.includes('Cargo Terminal') ? '❌ YES (FAIL)' : '✅ NO (PASS)'));
  }

  // Check /shivlakha-rail-logistics/gati-shakti-terminal description
  const gct = results.find(r => r.target === '/shivlakha-rail-logistics/gati-shakti-terminal');
  if (gct) {
    console.log('/shivlakha-rail-logistics/gati-shakti-terminal meta:');
    console.log('  "' + gct.metaDesc + '"');
    console.log('  Contains "Gandhidham-Samakhiali"?: ' + (gct.metaDesc.includes('Gandhidham-Samakhiali') ? '❌ YES (FAIL)' : '✅ NO (PASS)'));
  }

  // Check /gallery description
  const gal = results.find(r => r.target === '/gallery');
  if (gal) {
    console.log('/gallery meta:');
    console.log('  "' + gal.metaDesc + '"');
    console.log('  Contains "GCT Shivlakha"?: ' + (gal.metaDesc.includes('GCT Shivlakha') ? '❌ YES (FAIL)' : '✅ NO (PASS)'));
  }

  fs.writeFileSync(path.join(__dirname, 'edge-verification-results-new-deploy.json'), JSON.stringify(results, null, 2));
}

run();
