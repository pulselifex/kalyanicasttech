const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseUrl = 'https://6aeddb4414795a799d15bb39--kalyanicasttech.netlify.app';

const outputDirDoc = path.resolve(__dirname, '..', '..', '04_WEBSITE_DOCUMENTATION', 'step5b24a_management_corrections', 'screenshots');
const outputDirCode = path.resolve(__dirname, '..', 'docs', 'step5b24a_management_corrections', 'screenshots');

for (const dir of [outputDirDoc, outputDirCode]) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

const targets = [
  { name: '01_homepage_mfg_and_terminal_sections_desktop-1440.png', path: '/#business-divisions', width: 1440, height: 1100 },
  { name: '02_homepage_product_and_corner_castings_desktop-1440.png', path: '/#products', width: 1440, height: 1100 },
  { name: '03_manufacturing_page_desktop-1440.png', path: '/manufacturing', width: 1440, height: 1100 },
  { name: '04_engineering_quality_page_desktop-1440.png', path: '/engineering-quality', width: 1440, height: 1100 },
  { name: '05_shivlakha_overview_desktop-1440.png', path: '/shivlakha-rail-logistics', width: 1440, height: 1100 },
  { name: '06_gati_shakti_terminal_page_desktop-1440.png', path: '/shivlakha-rail-logistics/gati-shakti-terminal', width: 1440, height: 1000 },
  { name: '07_inland_container_terminal_page_desktop-1440.png', path: '/shivlakha-rail-logistics/inland-container-terminal', width: 1440, height: 1000 },
  { name: '08_rewari_facilities_section_desktop-1440.png', path: '/facilities#rewari', width: 1440, height: 1100 },
  { name: '09_contact_and_footer_desktop-1440.png', path: '/contact', width: 1440, height: 1100 },
  { name: '10_homepage_mfg_terminal_mobile-390.png', path: '/#business-divisions', width: 390, height: 844 },
  { name: '11_homepage_castings_mobile-390.png', path: '/#products', width: 390, height: 844 },
  { name: '12_shivlakha_overview_tablet-768.png', path: '/shivlakha-rail-logistics', width: 768, height: 1024 },
];

console.log(`Starting WP-5B.24A staging screenshot capture to ${outputDirDoc}...`);

for (const t of targets) {
  const dest1 = path.join(outputDirDoc, t.name);
  const dest2 = path.join(outputDirCode, t.name);
  const targetUrl = `${baseUrl}${t.path}`;
  const cmd = `"${chromePath}" --headless --disable-gpu --hide-scrollbars --window-size=${t.width},${t.height} --screenshot="${dest1}" "${targetUrl}"`;
  
  try {
    execSync(cmd, { stdio: 'ignore', timeout: 35000 });
    if (fs.existsSync(dest1) && fs.statSync(dest1).size > 1000) {
      fs.copyFileSync(dest1, dest2);
      console.log(`  [OK] ${t.name} (${fs.statSync(dest1).size} bytes)`);
    } else {
      console.log(`  [WARN] ${t.name} created but small or empty`);
    }
  } catch (err) {
    console.error(`  [ERR] Failed for ${t.name}: ${err.message}`);
  }
}

console.log('WP-5B.24A staging screenshot capture complete.');
