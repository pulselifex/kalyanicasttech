const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../../');
const publicDir = path.resolve(__dirname, '../public');
const sourceDirs = ['01_Rewari', '02_Products_Containers', '03_Shivlakha_Logistics', '04_Company_Team'];

function scanDir(dir) {
  let files = [];
  if (!fs.existsSync(dir)) return files;
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      files = files.concat(scanDir(full));
    } else if (/\.(jpg|jpeg|png|webp|gif|JPG|JPEG|PNG)$/i.test(item.name)) {
      files.push({
        sourcePath: full,
        folder: path.basename(path.dirname(full)),
        topCategory: path.relative(rootDir, full).split(path.sep)[0],
        filename: item.name,
      });
    }
  }
  return files;
}

let allSourceImages = [];
sourceDirs.forEach(sd => {
  allSourceImages = allSourceImages.concat(scanDir(path.join(rootDir, sd)));
});

// Build map of public assets by filename
function findPublicFiles(dir, prefix = '') {
  let map = {};
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    const rel = prefix ? prefix + '/' + item.name : item.name;
    if (item.isDirectory()) {
      Object.assign(map, findPublicFiles(full, rel));
    } else {
      map[item.name.toLowerCase()] = '/' + rel.replace(/\\/g, '/');
    }
  }
  return map;
}

const publicMap = findPublicFiles(publicDir);

console.log('Source images matched in public:');
let matchedCount = 0;
let missing = [];
allSourceImages.forEach(img => {
  const pubPath = publicMap[img.filename.toLowerCase()];
  if (pubPath) {
    matchedCount++;
    console.log(`[MATCH] ${img.topCategory}/${img.filename} -> ${pubPath}`);
  } else {
    missing.push(img);
  }
});
console.log(`\nMatched: ${matchedCount} / ${allSourceImages.length}. Missing in public: ${missing.length}`);
if (missing.length > 0) {
  console.log('Missing files:');
  missing.forEach(m => console.log(`  ${m.topCategory}/${m.folder}/${m.filename}`));
}

