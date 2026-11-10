const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const newStagingUrl = 'https://6ae978a40cc283e954aecfe7--kalyanicasttech.netlify.app';
const baselineUrl = 'https://6ae96ba0432fe13b95800469--kalyanicasttech.netlify.app';
const outputDir = path.resolve('..', '04_WEBSITE_DOCUMENTATION', 'step5b16_homepage_redesign', 'screenshots');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Remove test.png if present
const testPng = path.join(outputDir, 'test.png');
if (fs.existsSync(testPng)) {
  fs.unlinkSync(testPng);
}

const viewports = [
  { name: '1440px_desktop_wide', width: 1440, height: 900 },
  { name: '1280px_desktop_standard', width: 1280, height: 800 },
  { name: '768px_tablet', width: 768, height: 1024 },
  { name: '390px_mobile_standard', width: 390, height: 844 },
  { name: '360px_mobile_compact', width: 360, height: 800 }
];

console.log(`Starting WP-5B.16 screenshot capture to ${outputDir}...`);

// 1. Capture Redesigned Homepage Across 5 Viewports
console.log('\n--- Capturing Redesigned Homepage (WP-5B.16) ---');
for (const vp of viewports) {
  const filename = `homepage_after_${vp.name}.png`;
  const dest = path.join(outputDir, filename);
  const targetUrl = `${newStagingUrl}/`;
  
  const cmd = `"${chromePath}" --headless --disable-gpu --hide-scrollbars --window-size=${vp.width},${vp.height} --screenshot="${dest}" "${targetUrl}"`;
  try {
    execSync(cmd, { stdio: 'ignore', timeout: 30000 });
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`  [OK] ${filename} (${fs.statSync(dest).size} bytes)`);
    } else {
      console.log(`  [WARN] ${filename} created but small or empty`);
    }
  } catch (err) {
    console.error(`  [ERR] Failed for ${filename}: ${err.message}`);
  }
}

// 2. Capture Baseline Homepage Across 5 Viewports for direct Before/After comparison
console.log('\n--- Capturing Baseline Homepage (WP-5B.14 / WP-5B.15 Baseline) ---');
for (const vp of viewports) {
  const filename = `homepage_before_${vp.name}.png`;
  const dest = path.join(outputDir, filename);
  const targetUrl = `${baselineUrl}/`;
  
  const cmd = `"${chromePath}" --headless --disable-gpu --hide-scrollbars --window-size=${vp.width},${vp.height} --screenshot="${dest}" "${targetUrl}"`;
  try {
    execSync(cmd, { stdio: 'ignore', timeout: 30000 });
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`  [OK] ${filename} (${fs.statSync(dest).size} bytes)`);
    } else {
      console.log(`  [WARN] ${filename} created but small or empty`);
    }
  } catch (err) {
    console.error(`  [ERR] Failed for ${filename}: ${err.message}`);
  }
}

console.log('\nWP-5B.16 Screenshot capture sequence completed successfully.');

