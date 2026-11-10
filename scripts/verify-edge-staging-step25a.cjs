const https = require('https');

const STAGING_URL = 'https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app';

const routesToVerify = [
  // 27 Indexable Canonical Routes
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
  // Assets & Config
  '/robots.txt',
  '/sitemap.xml'
];

function fetchUrl(path) {
  return new Promise((resolve, reject) => {
    https.get(`${STAGING_URL}${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          path,
          statusCode: res.statusCode,
          headers: res.headers,
          data
        });
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log(`Verifying edge staging deployment: ${STAGING_URL}\n`);
  let passed = 0;
  let failed = 0;

  for (const r of routesToVerify) {
    try {
      const res = await fetchUrl(r);
      const isOk = res.statusCode === 200;
      
      // Check specific assertions
      let assertions = [];
      if (r === '/robots.txt') {
        const hasSitemap = res.data.includes('https://kalyanicasttech.com/sitemap.xml');
        assertions.push(hasSitemap ? 'Sitemap ref OK' : 'MISSING SITEMAP REF');
      } else if (r === '/sitemap.xml') {
        const count = (res.data.match(/<loc>/g) || []).length;
        assertions.push(`URL count: ${count}`);
      } else {
        const canonicalMatch = res.data.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i);
        const canonical = canonicalMatch ? canonicalMatch[1] : 'NONE';
        const hasJsonLd = res.data.includes('application/ld+json');
        assertions.push(`Canonical: ${canonical}`);
        assertions.push(hasJsonLd ? 'JSON-LD: OK' : 'JSON-LD: MISSING');
      }

      console.log(`[${res.statusCode}] ${r.padEnd(52)} -> ${assertions.join(' | ')}`);
      if (isOk) passed++;
      else failed++;
    } catch (err) {
      console.error(`[ERR] ${r}:`, err.message);
      failed++;
    }
  }

  console.log(`\nVerification Summary: ${passed} PASSED, ${failed} FAILED across ${routesToVerify.length} targets.`);
}

run();
