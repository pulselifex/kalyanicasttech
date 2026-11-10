const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseUrl = 'https://6aedba399a03126c8d076f26--kalyanicasttech.netlify.app';
const outputDir = path.resolve(__dirname, '..', '..', '04_WEBSITE_DOCUMENTATION', 'step5b23_release_readiness', 'screenshots');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const targets = [
  { name: '01_homepage_hero_carousel_desktop-1440.png', path: '/', width: 1440, height: 900 },
  { name: '02_homepage_business_divisions_desktop-1440.png', path: '/#business-divisions', width: 1440, height: 1000 },
  { name: '03_manufacturing_landing_desktop-1440.png', path: '/manufacturing', width: 1440, height: 1100 },
  { name: '04_facilities_dual_hub_desktop-1440.png', path: '/facilities', width: 1440, height: 1100 },
  { name: '05_shivlakha_platform_desktop-1440.png', path: '/shivlakha-rail-logistics', width: 1440, height: 1100 },
  { name: '06_investor_relations_desktop-1440.png', path: '/investor-relations', width: 1440, height: 1100 },
  { name: '07_contact_directory_desktop-1440.png', path: '/contact', width: 1440, height: 1000 },
  { name: '08_footer_directory_desktop-1440.png', path: '/#site-footer', width: 1440, height: 950 },
  { name: '09_homepage_mobile-390.png', path: '/', width: 390, height: 844 },
  { name: '10_homepage_tablet-768.png', path: '/', width: 768, height: 1024 },
  { name: '11_engineering_quality_desktop-1440.png', path: '/engineering-quality', width: 1440, height: 1100 },
  { name: '12_gati_shakti_terminal_desktop-1440.png', path: '/shivlakha-rail-logistics/gati-shakti-terminal', width: 1440, height: 1000 },
  { name: '13_inland_container_terminal_desktop-1440.png', path: '/shivlakha-rail-logistics/inland-container-terminal', width: 1440, height: 1000 },
];

console.log(`Starting step5b23 staging screenshot capture to ${outputDir}...`);

for (const t of targets) {
  const dest = path.join(outputDir, t.name);
  const targetUrl = `${baseUrl}${t.path}`;
  const cmd = `"${chromePath}" --headless --disable-gpu --hide-scrollbars --window-size=${t.width},${t.height} --screenshot="${dest}" "${targetUrl}"`;
  
  try {
    execSync(cmd, { stdio: 'ignore', timeout: 35000 });
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`  [OK] ${t.name} (${fs.statSync(dest).size} bytes)`);
    } else {
      console.log(`  [WARN] ${t.name} created but small or empty`);
    }
  } catch (err) {
    console.error(`  [ERR] Failed for ${t.name}: ${err.message}`);
  }
}

console.log('Step5b23 staging screenshot capture complete.');
