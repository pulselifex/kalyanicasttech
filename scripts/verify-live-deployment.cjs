const https = require('https');

const routes = [
  '/',
  '/about-us',
  '/leadership',
  '/products-applications',
  '/facilities',
  '/engineering-quality',
  '/shivlakha-rail-logistics',
  '/investor-relations',
  '/contact',
];

function fetchUrl(urlPath) {
  return new Promise((resolve, reject) => {
    const url = `https://kalyanicasttech.netlify.app${urlPath}`;
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        resolve({
          path: urlPath,
          statusCode: res.statusCode,
          headers: res.headers,
          data,
        });
      });
    }).on('error', reject);
  });
}

async function verifyAll() {
  console.log('--- LIVE PRODUCTION VERIFICATION (https://kalyanicasttech.netlify.app) ---');
  let allOk = true;

  for (const r of routes) {
    try {
      const res = await fetchUrl(r);
      const titleMatch = res.data.match(/<title>([^<]+)<\/title>/i);
      const title = titleMatch ? titleMatch[1] : 'N/A';
      console.log(`[${res.statusCode}] ${r.padEnd(28)} Title: ${title}`);
      if (res.statusCode !== 200) {
        allOk = false;
      }
    } catch (err) {
      console.error(`Error fetching ${r}:`, err.message);
      allOk = false;
    }
  }

  // Check 301 Redirect
  try {
    const redirectRes = await fetchUrl('/company');
    console.log(`[/company Redirect Status: ${redirectRes.statusCode}] -> Location: ${redirectRes.headers.location || 'handled'}`);
  } catch (err) {
    console.error('Redirect check error:', err.message);
  }

  if (allOk) {
    console.log('\n>>> ALL CANONICAL ROUTES RESPONDED WITH HTTP 200 OK <<<');
  } else {
    console.error('\n>>> SOME ROUTES FAILED VERIFICATION <<<');
    process.exit(1);
  }
}

verifyAll();

