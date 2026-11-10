const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const STAGING_URL = 'https://6aedf6669632ee93e53f8ad2--kalyanicasttech.netlify.app';

const OUT_DIR_DOCS = path.resolve(__dirname, '../../04_WEBSITE_DOCUMENTATION/step5b25b_discoverability_closure/screenshots');
const OUT_DIR_CODEBASE = path.resolve(__dirname, '../docs/step5b25b_discoverability_closure/screenshots');

fs.mkdirSync(OUT_DIR_DOCS, { recursive: true });
fs.mkdirSync(OUT_DIR_CODEBASE, { recursive: true });

console.log('=== SCREENSHOT CAPTURE ENGINE ===');
console.log('Target STAGING:', STAGING_URL);
console.log('Chrome:', CHROME_PATH);

const routesToCapture = [
  { name: '01_homepage_hero_desktop', path: '/', width: 1440, height: 900 },
  { name: '02_homepage_hero_mobile', path: '/', width: 390, height: 844 },
  { name: '03_shivlakha_overview', path: '/shivlakha-rail-logistics', width: 1440, height: 900 },
  { name: '04_gati_shakti_terminal', path: '/shivlakha-rail-logistics/gati-shakti-terminal', width: 1440, height: 900 },
  { name: '05_inland_container_terminal', path: '/shivlakha-rail-logistics/inland-container-terminal', width: 1440, height: 900 },
  { name: '06_gallery_showcase', path: '/gallery', width: 1440, height: 900 },
  { name: '07_about_us_divisions', path: '/about-us', width: 1440, height: 900 },
  { name: '08_facilities_rewari_works', path: '/facilities', width: 1440, height: 900 },
  { name: '09_products_applications', path: '/products-applications', width: 1440, height: 900 },
  { name: '10_investor_relations_gateway', path: '/investor-relations', width: 1440, height: 900 },
  { name: '11_quality_certifications', path: '/resources/quality-certifications', width: 1440, height: 900 },
  { name: '12_contact_commercial_desk', path: '/contact', width: 1440, height: 900 }
];

for (const item of routesToCapture) {
  const url = `${STAGING_URL}${item.path}`;
  const outDoc = path.join(OUT_DIR_DOCS, `${item.name}.png`);
  const outCode = path.join(OUT_DIR_CODEBASE, `${item.name}.png`);

  console.log(`Capturing ${item.name} (${item.width}x${item.height}) from ${url}...`);

  const cmd = `"${CHROME_PATH}" --headless=new --disable-gpu --hide-scrollbars --window-size=${item.width},${item.height} --screenshot="${outDoc}" "${url}"`;
  
  try {
    execSync(cmd, { stdio: 'ignore', timeout: 30000 });
    // Copy to codebase mirror
    fs.copyFileSync(outDoc, outCode);
    const stat = fs.statSync(outDoc);
    console.log(`  ✓ Saved: ${(stat.size / 1024).toFixed(1)} KB`);
  } catch (e) {
    console.error(`  ✗ Error capturing ${item.name}:`, e.message);
  }
}

console.log('\nAll screenshots captured successfully!');
