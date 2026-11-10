const https = require('https');
const fs = require('fs');
const path = require('path');

const STAGING_URL = 'https://6aedf6669632ee93e53f8ad2--kalyanicasttech.netlify.app';

const priorityRoutes = [
  '/',
  '/about-us',
  '/our-journey',
  '/leadership',
  '/manufacturing',
  '/facilities',
  '/products-applications',
  '/innovation',
  '/engineering-quality',
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
  '/investor-relations',
  '/investors/financial-information',
  '/investors/stock-exchange-disclosures',
  '/investors/corporate-governance',
  '/investors/shareholder-information',
  '/investors/ipo-corporate-actions',
  '/investors/investor-grievance-contact',
  '/investors/meetings-presentations'
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

function checkImage(url) {
  return new Promise((resolve) => {
    const relativeUrl = url.replace('https://kalyanicasttech.com', '');
    const stagingImgUrl = `${STAGING_URL}${relativeUrl}`;
    
    https.get(stagingImgUrl, (res) => {
      const info = {
        statusCode: res.statusCode,
        contentType: res.headers['content-type'],
        contentLength: res.headers['content-length']
      };
      res.resume();
      resolve(info);
    }).on('error', (e) => {
      resolve({ statusCode: 'ERR: ' + e.message });
    });
  });
}

async function run() {
  console.log(`=== SOCIAL PREVIEW (OG/TWITTER) AUDIT ON NEW DEPLOY ${STAGING_URL} ===\n`);
  const results = [];

  for (const r of priorityRoutes) {
    process.stdout.write(`Checking ${r}... `);
    const html = await fetchHtml(r);
    
    const ogTitle = (html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["']/i) || [])[1] || null;
    const ogDesc = (html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["']/i) || [])[1] || null;
    const ogImage = (html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']+)["']/i) || [])[1] || null;
    const ogWidth = (html.match(/<meta[^>]*property=["']og:image:width["'][^>]*content=["']([^"']+)["']/i) || [])[1] || null;
    const ogHeight = (html.match(/<meta[^>]*property=["']og:image:height["'][^>]*content=["']([^"']+)["']/i) || [])[1] || null;
    const ogAlt = (html.match(/<meta[^>]*property=["']og:image:alt["'][^>]*content=["']([^"']+)["']/i) || [])[1] || null;
    const twitterCard = (html.match(/<meta[^>]*name=["']twitter:card["'][^>]*content=["']([^"']+)["']/i) || [])[1] || null;

    let imgStatus = 'NOT_CHECKED';
    let imgSize = 0;
    if (ogImage) {
      const imgRes = await checkImage(ogImage);
      imgStatus = imgRes.statusCode;
      imgSize = imgRes.contentLength ? (parseInt(imgRes.contentLength, 10) / 1024).toFixed(1) + ' KB' : 'UNKNOWN';
    }

    console.log(`[img: ${imgStatus}]`);

    results.push({
      route: r,
      ogTitle,
      ogDesc,
      ogDescLen: ogDesc ? ogDesc.length : 0,
      ogImage,
      imgStatus,
      imgSize,
      ogDimensions: `${ogWidth}x${ogHeight}`,
      ogAlt,
      twitterCard
    });
  }

  console.log(`\nAudited ${results.length} priority routes.`);
  const failedImages = results.filter(r => r.imgStatus !== 200);
  console.log(`Images resolving with HTTP 200: ${results.filter(r => r.imgStatus === 200).length} / ${results.length}`);
  if (failedImages.length > 0) {
    console.log('Failed images:');
    failedImages.forEach(f => console.log(`  ❌ ${f.route}: ${f.ogImage} -> [${f.imgStatus}]`));
  } else {
    console.log('✅ ALL 27/27 OG preview images resolve with HTTP 200 on staging!');
  }

  fs.writeFileSync(path.join(__dirname, 'social-preview-results-new-deploy.json'), JSON.stringify(results, null, 2));
}

run();
