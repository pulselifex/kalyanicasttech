const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseUrl = 'https://6aede2fa05b1aad58c593c61--kalyanicasttech.netlify.app';

const outputDirDoc = path.resolve(__dirname, '..', '..', '04_WEBSITE_DOCUMENTATION', 'step5b25_seo_smo_aieo', 'screenshots');
const outputDirCode = path.resolve(__dirname, '..', 'docs', 'step5b25_seo_smo_aieo', 'screenshots');

for (const dir of [outputDirDoc, outputDirCode]) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

const targets = [
  { name: '01_homepage_hero_and_seo_heading_desktop-1440.png', path: '/', width: 1440, height: 1100 },
  { name: '02_manufacturing_division_overview_desktop-1440.png', path: '/manufacturing', width: 1440, height: 1100 },
  { name: '03_manufacturing_facilities_rewari_desktop-1440.png', path: '/facilities', width: 1440, height: 1100 },
  { name: '04_products_and_applications_catalogue_desktop-1440.png', path: '/products-applications', width: 1440, height: 1100 },
  { name: '05_engineering_quality_testing_rig_desktop-1440.png', path: '/engineering-quality', width: 1440, height: 1100 },
  { name: '06_innovation_and_new_wagon_design_desktop-1440.png', path: '/innovation', width: 1440, height: 1100 },
  { name: '07_shivlakha_multimodal_platform_desktop-1440.png', path: '/shivlakha-rail-logistics', width: 1440, height: 1100 },
  { name: '08_gati_shakti_terminal_operational_desktop-1440.png', path: '/shivlakha-rail-logistics/gati-shakti-terminal', width: 1440, height: 1000 },
  { name: '09_inland_container_terminal_under_development_desktop-1440.png', path: '/shivlakha-rail-logistics/inland-container-terminal', width: 1440, height: 1000 },
  { name: '10_investor_relations_statutory_gateway_desktop-1440.png', path: '/investor-relations', width: 1440, height: 1100 },
  { name: '11_corporate_journey_milestones_desktop-1440.png', path: '/our-journey', width: 1440, height: 1100 },
  { name: '12_board_and_management_leadership_desktop-1440.png', path: '/leadership', width: 1440, height: 1100 },
  { name: '13_contact_enquiry_and_footer_desktop-1440.png', path: '/contact', width: 1440, height: 1100 },
  { name: '14_resources_and_technical_library_desktop-1440.png', path: '/resources', width: 1440, height: 1100 },
  { name: '15_visual_gallery_plants_products_desktop-1440.png', path: '/gallery', width: 1440, height: 1100 },
  { name: '16_homepage_mobile-390.png', path: '/', width: 390, height: 844 },
  { name: '17_products_catalogue_tablet-768.png', path: '/products-applications', width: 768, height: 1024 },
  { name: '18_shivlakha_terminal_mobile-390.png', path: '/shivlakha-rail-logistics/gati-shakti-terminal', width: 390, height: 844 },
];

console.log(`Starting WP-5B.25 staging screenshot capture to ${outputDirDoc}...`);

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

console.log('WP-5B.25 staging screenshot capture complete.');
