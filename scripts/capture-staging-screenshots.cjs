const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseUrl = 'https://6ae96ba0432fe13b95800469--kalyanicasttech.netlify.app';
const outputDir = path.resolve('..', '04_WEBSITE_DOCUMENTATION', 'step5b14_management_acceptance', 'screenshots');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const viewports = [
  { name: 'desktop-1440', width: 1440, height: 900 },
  { name: 'desktop-1280', width: 1280, height: 800 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'mobile-360', width: 360, height: 800 }
];

const routes = [
  { slug: 'home', path: '/' },
  { slug: 'about-us', path: '/about-us' },
  { slug: 'products-applications', path: '/products-applications' },
  { slug: 'engineering-quality', path: '/engineering-quality' },
  { slug: 'shivlakha-rail-logistics', path: '/shivlakha-rail-logistics' },
  { slug: 'gallery', path: '/gallery' },
  { slug: 'our-journey', path: '/our-journey' },
  { slug: 'investor-relations', path: '/investor-relations' }
];

console.log(`Starting staging screenshot capture to ${outputDir}...`);

for (const vp of viewports) {
  for (const r of routes) {
    const filename = `${r.slug}_${vp.name}.png`;
    const dest = path.join(outputDir, filename);
    const targetUrl = `${baseUrl}${r.path}`;
    
    // Command using headless chrome
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
}

console.log('Staging screenshot capture complete.');

