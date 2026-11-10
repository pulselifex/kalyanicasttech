const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseUrl = 'https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app';

const outputDirDoc = path.resolve(__dirname, '..', '..', '04_WEBSITE_DOCUMENTATION', 'step5b25a_indexability_and_metadata_correction', 'screenshots');
const outputDirCode = path.resolve(__dirname, '..', 'docs', 'step5b25a_indexability_and_metadata_correction', 'screenshots');

for (const dir of [outputDirDoc, outputDirCode]) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

const targets = [
  { name: '01_homepage_manufacturing_foundry_identity_desktop-1440.png', path: '/', width: 1440, height: 1100 },
  { name: '02_gati_shakti_terminal_exact_naming_desktop-1440.png', path: '/shivlakha-rail-logistics/gati-shakti-terminal', width: 1440, height: 1000 },
  { name: '03_cargo_opportunities_rail_evaluation_desktop-1440.png', path: '/shivlakha-rail-logistics/cargo-opportunities', width: 1440, height: 1100 },
  { name: '04_inland_container_terminal_under_development_desktop-1440.png', path: '/shivlakha-rail-logistics/inland-container-terminal', width: 1440, height: 1000 },
  { name: '05_resources_quality_certifications_desktop-1440.png', path: '/resources/quality-certifications', width: 1440, height: 1100 },
  { name: '06_resources_corporate_profile_brochures_desktop-1440.png', path: '/resources/corporate-profile-brochures', width: 1440, height: 1000 },
  { name: '07_resources_news_media_trials_desktop-1440.png', path: '/resources/news-media', width: 1440, height: 1100 },
  { name: '08_investors_financial_information_desktop-1440.png', path: '/investors/financial-information', width: 1440, height: 1100 },
  { name: '09_investors_stock_exchange_disclosures_desktop-1440.png', path: '/investors/stock-exchange-disclosures', width: 1440, height: 1100 },
  { name: '10_investors_corporate_governance_desktop-1440.png', path: '/investors/corporate-governance', width: 1440, height: 1000 },
  { name: '11_investors_shareholder_information_desktop-1440.png', path: '/investors/shareholder-information', width: 1440, height: 1100 },
  { name: '12_investors_ipo_corporate_actions_desktop-1440.png', path: '/investors/ipo-corporate-actions', width: 1440, height: 1000 },
  { name: '13_investors_investor_grievance_contact_desktop-1440.png', path: '/investors/investor-grievance-contact', width: 1440, height: 1000 },
  { name: '14_investors_meetings_presentations_desktop-1440.png', path: '/investors/meetings-presentations', width: 1440, height: 1100 },
  { name: '15_engineering_quality_ndt_flaw_examination_desktop-1440.png', path: '/engineering-quality', width: 1440, height: 1100 },
  { name: '16_gati_shakti_terminal_mobile-390.png', path: '/shivlakha-rail-logistics/gati-shakti-terminal', width: 390, height: 844 },
  { name: '17_cargo_opportunities_tablet-768.png', path: '/shivlakha-rail-logistics/cargo-opportunities', width: 768, height: 1024 },
  { name: '18_quality_certifications_mobile-390.png', path: '/resources/quality-certifications', width: 390, height: 844 },
];

console.log(`Starting WP-5B.25A staging screenshot capture to ${outputDirDoc}...`);

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
      console.warn(`  [WARN] ${t.name} was not generated or too small`);
    }
  } catch (err) {
    console.error(`  [ERR] Failed to capture ${t.name}:`, err.message);
  }
}

console.log('WP-5B.25A screenshot capture complete.');
