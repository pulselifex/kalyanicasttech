const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseUrl = 'https://6aedd2fec05a6f2a02254c42--kalyanicasttech.netlify.app';

const outputDirDoc = path.resolve(__dirname, '..', '..', '04_WEBSITE_DOCUMENTATION', 'step5b24_final_publication_integrity', 'screenshots');
const outputDirCode = path.resolve(__dirname, '..', 'docs', 'step5b24_final_publication_integrity', 'screenshots');

for (const dir of [outputDirDoc, outputDirCode]) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

const targets = [
  { name: '01_homepage_hero_carousel_desktop-1440.png', path: '/', width: 1440, height: 900 },
  { name: '02_homepage_business_divisions_desktop-1440.png', path: '/#business-divisions', width: 1440, height: 1000 },
  { name: '03_manufacturing_landing_desktop-1440.png', path: '/manufacturing', width: 1440, height: 1100 },
  { name: '04_facilities_rewari_and_shivlakha_desktop-1440.png', path: '/facilities', width: 1440, height: 1100 },
  { name: '05_shivlakha_platform_overview_desktop-1440.png', path: '/shivlakha-rail-logistics', width: 1440, height: 1100 },
  { name: '06_gati_shakti_terminal_page_desktop-1440.png', path: '/shivlakha-rail-logistics/gati-shakti-terminal', width: 1440, height: 1000 },
  { name: '07_inland_container_terminal_desktop-1440.png', path: '/shivlakha-rail-logistics/inland-container-terminal', width: 1440, height: 1000 },
  { name: '08_engineering_quality_desktop-1440.png', path: '/engineering-quality', width: 1440, height: 1100 },
  { name: '09_our_journey_milestones_desktop-1440.png', path: '/our-journey', width: 1440, height: 1100 },
  { name: '10_gallery_operational_photos_desktop-1440.png', path: '/gallery', width: 1440, height: 1100 },
  { name: '11_investor_relations_desktop-1440.png', path: '/investor-relations', width: 1440, height: 1100 },
  { name: '12_contact_directory_desktop-1440.png', path: '/contact', width: 1440, height: 1000 },
  { name: '13_footer_address_accordion_desktop-1440.png', path: '/#site-footer', width: 1440, height: 950 },
  { name: '14_homepage_mobile_390.png', path: '/', width: 390, height: 844 },
  { name: '15_homepage_tablet_768.png', path: '/', width: 768, height: 1024 },
];

console.log(`Starting WP-5B.24 staging screenshot capture to ${outputDirDoc}...`);

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

console.log('WP-5B.24 staging screenshot capture complete.');
