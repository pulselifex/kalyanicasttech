const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');

function getAllFiles(dir) {
  let files = [];
  fs.readdirSync(dir, { withFileTypes: true }).forEach(d => {
    const full = path.join(dir, d.name);
    if (d.isDirectory()) {
      files = files.concat(getAllFiles(full));
    } else if (/\.(ts|tsx|json)$/.test(d.name)) {
      files.push(full);
    }
  });
  return files;
}

const allFiles = getAllFiles(srcDir);
const fileContents = allFiles.map(f => ({ path: f, content: fs.readFileSync(f, 'utf8') }));

const checkUrls = [
  "/investors/financial-information",
  "/investors/stock-exchange-disclosures",
  "/investors/corporate-governance",
  "/investors/shareholder-information",
  "/investors/ipo-corporate-actions",
  "/investors/investor-grievance-contact",
  "/investors/meetings-presentations",
  "/resources/corporate-profile-brochures",
  "/resources/quality-certifications",
  "/resources/news-media",
  "/resources/product-data-sheets",
  "/shivlakha-rail-logistics/cargo-opportunities"
];

console.log('Internal linking audit for candidate subpages:');
checkUrls.forEach(url => {
  const matches = fileContents.filter(f => f.content.includes(url));
  const fileNames = matches.map(m => path.relative(srcDir, m.path));
  console.log(`${url.padEnd(46)} linked in ${matches.length} files: [${fileNames.join(', ')}]`);
});
