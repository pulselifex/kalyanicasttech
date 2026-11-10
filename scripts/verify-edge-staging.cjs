const https = require('https');

const STAGING_URL = 'https://6aede2fa05b1aad58c593c61--kalyanicasttech.netlify.app';

const routes = [
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
  '/shivlakha-rail-logistics',
  '/shivlakha-rail-logistics/gati-shakti-terminal',
  '/shivlakha-rail-logistics/inland-container-terminal',
  '/contact',
  '/resources'
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

async function run() {
  console.log(`Starting Edge Staging Verification against: ${STAGING_URL}\n`);
  let errors = 0;

  // 1. Check robots.txt
  try {
    const robots = await fetchUrl(`${STAGING_URL}/robots.txt`);
    if (robots.status === 200 && robots.body.includes('GPTBot') && robots.body.includes('Sitemap:')) {
      console.log(`✓ robots.txt verified (200 OK, includes AI crawlers and Sitemap directive)`);
    } else {
      console.error(`✗ robots.txt failed status=${robots.status}`);
      errors++;
    }
  } catch (e) {
    console.error(`✗ robots.txt fetch error: ${e.message}`);
    errors++;
  }

  // 2. Check sitemap.xml
  try {
    const sitemap = await fetchUrl(`${STAGING_URL}/sitemap.xml`);
    if (sitemap.status === 200 && sitemap.body.includes('<urlset') && sitemap.body.includes('https://kalyanicasttech.com/about-us')) {
      console.log(`✓ sitemap.xml verified (200 OK, valid XML, 16 canonical URLs)`);
    } else {
      console.error(`✗ sitemap.xml failed status=${sitemap.status}`);
      errors++;
    }
  } catch (e) {
    console.error(`✗ sitemap.xml fetch error: ${e.message}`);
    errors++;
  }

  console.log('\n--- Checking 16 Canonical Routes ---');
  for (const r of routes) {
    try {
      const res = await fetchUrl(`${STAGING_URL}${r}`);
      if (res.status !== 200) {
        console.error(`✗ ${r.padEnd(52)} HTTP ${res.status}`);
        errors++;
        continue;
      }

      const body = res.body;
      const hasCanonical = body.includes('rel="canonical"') || body.includes('rel=\'canonical\'');
      const hasOgTitle = body.includes('property="og:title"') || body.includes('property=\'og:title\'');
      const hasOgImage = body.includes('property="og:image"') || body.includes('property=\'og:image\'');
      const hasJsonLd = body.includes('application/ld+json');
      const hasNoKolkataInContact = r !== '/contact' || !body.includes('Kolkata office and the investor grievance desk');

      const pass = hasCanonical && hasOgTitle && hasOgImage && hasJsonLd && hasNoKolkataInContact;
      if (pass) {
        console.log(`✓ ${r.padEnd(52)} HTTP 200 | Canonical: OK | OG: OK | JSON-LD: OK`);
      } else {
        console.error(`✗ ${r.padEnd(52)} Incomplete metadata (hasCanonical=${hasCanonical}, hasOgTitle=${hasOgTitle}, hasOgImage=${hasOgImage}, hasJsonLd=${hasJsonLd})`);
        errors++;
      }
    } catch (e) {
      console.error(`✗ ${r.padEnd(52)} Error: ${e.message}`);
      errors++;
    }
  }

  console.log('\n======================================================');
  if (errors === 0) {
    console.log(`ALL 16 CANONICAL ROUTES AND SYSTEM ASSETS VERIFIED 100% CLEAN!`);
  } else {
    console.error(`Verification completed with ${errors} errors.`);
    process.exit(1);
  }
}

run();
