const https = require('https');
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://6aedd2fec05a6f2a02254c42--kalyanicasttech.netlify.app';

const routesToTest = [
  // Canonical Primary Routes (8 items + subpages)
  { path: '/', type: 'canonical', expectedTitle: 'Kalyani Cast Tech' },
  { path: '/about-us', type: 'canonical', expectedTitle: 'About' },
  { path: '/our-journey', type: 'canonical', expectedTitle: 'Journey' },
  { path: '/leadership', type: 'canonical', expectedTitle: 'Board' },
  { path: '/manufacturing', type: 'canonical', expectedTitle: 'Manufacturing' },
  { path: '/facilities', type: 'canonical', expectedTitle: 'Facilities' },
  { path: '/products-applications', type: 'canonical', expectedTitle: 'Products' },
  { path: '/innovation', type: 'canonical', expectedTitle: 'Innovation' },
  { path: '/engineering-quality', type: 'canonical', expectedTitle: 'Engineering' },
  { path: '/investor-relations', type: 'canonical', expectedTitle: 'Investor' },
  { path: '/gallery', type: 'canonical', expectedTitle: 'Gallery' },
  { path: '/shivlakha-rail-logistics', type: 'canonical', expectedTitle: 'Shivlakha' },
  { path: '/shivlakha-rail-logistics/gati-shakti-terminal', type: 'canonical', expectedTitle: 'Gati Shakti' },
  { path: '/shivlakha-rail-logistics/inland-container-terminal', type: 'canonical', expectedTitle: 'Inland Container' },
  { path: '/shivlakha-rail-logistics/cargo-opportunities', type: 'canonical', expectedTitle: 'Cargo' },
  { path: '/contact', type: 'canonical', expectedTitle: 'Contact' },

  // Key Redirects (configured in netlify.toml)
  { path: '/company', type: 'redirect', expectedLocation: '/about-us' },
  { path: '/company/leadership', type: 'redirect', expectedLocation: '/leadership' },
  { path: '/manufacturing/facilities-locations', type: 'redirect', expectedLocation: '/facilities' },
  { path: '/containers-solutions', type: 'redirect', expectedLocation: '/products-applications' },
  { path: '/manufacturing/testing-quality', type: 'redirect', expectedLocation: '/engineering-quality' },
  { path: '/investors', type: 'redirect', expectedLocation: '/investor-relations' },
  { path: '/business-enquiry', type: 'redirect', expectedLocation: '/contact' },
  { path: '/business-enquiry/', type: 'redirect', expectedLocation: '/contact' },
  { path: '/shivlakha-rail-logistics/gati-shakti-cargo-terminal', type: 'redirect', expectedLocation: '/shivlakha-rail-logistics/gati-shakti-terminal' },
  { path: '/shivlakha-rail-logistics/inland-container-depot', type: 'redirect', expectedLocation: '/shivlakha-rail-logistics/inland-container-terminal' },
];

function checkRoute(route) {
  return new Promise((resolve) => {
    const url = `${baseUrl}${route.path}`;
    const req = https.request(url, { method: 'GET', timeout: 15000 }, (res) => {
      let body = '';
      res.on('data', (chunk) => { body += chunk; });
      res.on('end', () => {
        const titleMatch = body.match(/<title>([^<]+)<\/title>/i);
        const title = titleMatch ? titleMatch[1] : '';
        resolve({
          path: route.path,
          type: route.type,
          status: res.statusCode,
          location: res.headers.location || '',
          title,
          pass: route.type === 'redirect' ? (res.statusCode === 301 || res.statusCode === 302 || res.headers.location) : (res.statusCode === 200)
        });
      });
    });

    req.on('error', (err) => {
      resolve({
        path: route.path,
        type: route.type,
        status: 'ERROR',
        location: '',
        title: err.message,
        pass: false
      });
    });

    req.end();
  });
}

async function run() {
  console.log(`Starting WP-5B.24 edge route verification against ${baseUrl}...`);
  const results = [];
  for (const r of routesToTest) {
    const res = await checkRoute(r);
    results.push(res);
    console.log(`[${res.pass ? 'PASS' : 'FAIL'}] ${res.path.padEnd(52)} ${res.status} ${res.location || res.title}`);
  }

  const failed = results.filter(r => !r.pass);
  console.log(`\nWP-5B.24 Route Verification Summary: ${results.length - failed.length}/${results.length} PASSED.`);
  if (failed.length > 0) {
    console.error(`FAILED ROUTES:`, failed);
    process.exit(1);
  }
}

run();
