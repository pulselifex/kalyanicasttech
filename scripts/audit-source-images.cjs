const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../../'); // Website Content n Working
const sourceDirs = ['01_Rewari', '02_Products_Containers', '03_Shivlakha_Logistics', '04_Company_Team'];
const publicDir = path.resolve(__dirname, '../public');

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
        relSource: path.relative(rootDir, full),
        folder: path.basename(path.dirname(full)),
        topCategory: path.relative(rootDir, full).split(path.sep)[0],
        filename: item.name,
        size: fs.statSync(full).size
      });
    }
  }
  return files;
}

let allSourceImages = [];
sourceDirs.forEach(sd => {
  allSourceImages = allSourceImages.concat(scanDir(path.join(rootDir, sd)));
});

console.log('Total images found in source folders:', allSourceImages.length);
allSourceImages.forEach((img, i) => {
  console.log(`${i+1}. [${img.topCategory} / ${img.folder}] ${img.filename} (${(img.size/1024).toFixed(1)} KB)`);
});

