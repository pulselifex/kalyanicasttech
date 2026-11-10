const fs = require('fs');
const cp = require('child_process');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const baseStagingUrl = 'https://6ae961f7e6584c279970b315--kalyanicasttech.netlify.app';
const outDir = path.resolve(__dirname, '../../04_WEBSITE_DOCUMENTATION/step5b13_website_experience/screenshots');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const keyPages = [
  { name: 'homepage', path: '/' },
  { name: 'about_us', path: '/about-us' },
  { name: 'our_journey', path: '/our-journey' },
  { name: 'facilities', path: '/facilities' },
  { name: 'products', path: '/products-applications' },
  { name: 'innovation', path: '/innovation' },
  { name: 'engineering_quality', path: '/engineering-quality' },
  { name: 'shivlakha', path: '/shivlakha-rail-logistics' },
  { name: 'investors', path: '/investor-relations' },
  { name: 'gallery', path: '/gallery' },
  { name: 'contact', path: '/contact' }
];

const viewports = [
  { label: 'desktop_1440', width: 1440, height: 900 },
  { label: 'laptop_1280', width: 1280, height: 800 },
  { label: 'tablet_768', width: 768, height: 1024 },
  { label: 'mobile_390', width: 390, height: 844 },
  { label: 'narrow_360', width: 360, height: 780 }
];

console.log('Beginning browser screenshot captures for ' + keyPages.length + ' pages across viewports against: ' + baseStagingUrl);

const results = [];

const tasks = [
  // 1440 Desktop for all 11 pages
  ...keyPages.map(p => ({ page: p, vp: viewports[0] })),
  // 1280 Laptop for key pages
  { page: keyPages[0], vp: viewports[1] },
  { page: keyPages[2], vp: viewports[1] },
  { page: keyPages[4], vp: viewports[1] },
  { page: keyPages[7], vp: viewports[1] },
  { page: keyPages[8], vp: viewports[1] },
  { page: keyPages[9], vp: viewports[1] },
  // 768 Tablet
  { page: keyPages[0], vp: viewports[2] },
  { page: keyPages[2], vp: viewports[2] },
  { page: keyPages[3], vp: viewports[2] },
  { page: keyPages[7], vp: viewports[2] },
  { page: keyPages[9], vp: viewports[2] },
  // 390 Mobile
  { page: keyPages[0], vp: viewports[3] },
  { page: keyPages[1], vp: viewports[3] },
  { page: keyPages[2], vp: viewports[3] },
  { page: keyPages[3], vp: viewports[3] },
  { page: keyPages[4], vp: viewports[3] },
  { page: keyPages[7], vp: viewports[3] },
  { page: keyPages[8], vp: viewports[3] },
  { page: keyPages[9], vp: viewports[3] },
  { page: keyPages[10], vp: viewports[3] },
  // 360 Narrow Mobile
  { page: keyPages[0], vp: viewports[4] },
  { page: keyPages[2], vp: viewports[4] },
  { page: keyPages[7], vp: viewports[4] },
  { page: keyPages[9], vp: viewports[4] }
];

tasks.forEach((t, i) => {
  const fileName = t.page.name + '_' + t.vp.label + '.png';
  const filePath = path.join(outDir, fileName);
  const targetUrl = baseStagingUrl + t.page.path;

  try {
    cp.execFileSync(chromePath, [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      '--virtual-time-budget=4000',
      '--window-size=' + t.vp.width + ',' + t.vp.height,
      '--screenshot=' + filePath,
      targetUrl
    ], { timeout: 25000 });
    const stat = fs.statSync(filePath);
    console.log('[' + (i+1) + '/' + tasks.length + '] Captured ' + fileName + ' (' + (stat.size/1024).toFixed(1) + ' KB) from ' + t.page.path);
    results.push({ file: fileName, page: t.page.name, path: t.page.path, vp: t.vp.label, size: stat.size, status: 'PASS' });
  } catch (err) {
    console.error('Failed ' + fileName + ':', err.message);
    results.push({ file: fileName, page: t.page.name, path: t.page.path, vp: t.vp.label, error: err.message, status: 'FAIL' });
  }
});

fs.writeFileSync(path.join(outDir, 'screenshot_results.json'), JSON.stringify(results, null, 2));
console.log('Completed capturing ' + results.filter(r => r.status === 'PASS').length + ' screenshots!');
