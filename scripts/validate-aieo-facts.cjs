const https = require('https');
const fs = require('fs');

const STAGING_URL = 'https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app';

const factsToCheck = [
  { fact: 'Kalyani Cast Tech Limited', regex: /Kalyani\s+Cast\s+Tech\s+Limited/i, page: '/' },
  { fact: '544023 (BSE Scrip)', regex: /544023/, page: '/' },
  { fact: 'L26990DL2012PLC242760 (CIN)', regex: /L26990DL2012PLC242760/, page: '/' },
  { fact: 'Manufacturing Division', regex: /Manufacturing\s+Division/i, page: '/' },
  { fact: 'Terminal Division', regex: /Terminal\s+Division/i, page: '/' },
  { fact: 'Rewari Works', regex: /Rewari\s+Works/i, page: '/facilities' },
  { fact: 'Shivlakha', regex: /Shivlakha/i, page: '/shivlakha-rail-logistics' },
  { fact: 'Gati Shakti Terminal Operational', regex: /Gati\s+Shakti\s+Terminal[\s\S]{0,100}Operational/i, page: '/shivlakha-rail-logistics' },
  { fact: '15 September 2026 (Inauguration)', regex: /15\s+September\s+2026/i, page: '/about-us' },
  { fact: 'Inland Container Terminal Under Development', regex: /Inland\s+Container\s+Terminal[\s\S]{0,100}Under\s+Development/i, page: '/shivlakha-rail-logistics' },
  { fact: '10 September 2026 (CBIC Approval)', regex: /10\s+September\s+2026/i, page: '/shivlakha-rail-logistics/inland-container-terminal' },
  { fact: 'ISO 1496 Series-1', regex: /ISO\s+1496/i, page: '/products-applications' },
  { fact: 'ISO 1161 standards for corner castings', regex: /ISO\s+1161/i, page: '/products-applications' },
  { fact: 'Stage-I wagon design approval', regex: /Stage-I/i, page: '/manufacturing' }
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
  console.log('=== AIEO / GEO FACTUAL CONTENT CRAWLABILITY CHECK ===\n');
  const cache = {};

  let passCount = 0;
  for (const item of factsToCheck) {
    if (!cache[item.page]) {
      cache[item.page] = await fetchHtml(item.page);
    }
    const html = cache[item.page];
    const match = item.regex.test(html);
    if (match) {
      passCount++;
      console.log(`✅ [PASS] ${item.page} contains: "${item.fact}"`);
    } else {
      console.log(`❌ [FAIL] ${item.page} MISSING: "${item.fact}"`);
    }
  }

  console.log(`\nFactual crawlability score: ${passCount} / ${factsToCheck.length} (${((passCount/factsToCheck.length)*100).toFixed(0)}%)`);
}

run();
