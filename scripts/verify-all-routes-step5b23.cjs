const https = require('https');
const fs = require('fs');
const path = require('path');

const baseUrl = 'https://6aedba399a03126c8d076f26--kalyanicasttech.netlify.app';

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
        status: 0,
        error: err.message,
        pass: false
      });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({
        path: route.path,
        type: route.type,
        status: 0,
        error: 'TIMEOUT',
        pass: false
      });
    });

    req.end();
  });
}

async function run() {
  console.log(`Verifying routes on ${baseUrl}...`);
  const results = [];
  for (const r of routesToTest) {
    const res = await checkRoute(r);
    console.log(`[${res.status}] ${res.path} -> ${res.pass ? 'PASS' : 'FAIL'} ${res.location ? '(Location: ' + res.location + ')' : ''}`);
    results.push(res);
  }

  const passed = results.filter(r => r.pass).length;
  console.log(`\nResults: ${passed} / ${results.length} passed.`);
}

run();

