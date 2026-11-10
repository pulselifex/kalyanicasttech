const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) results = results.concat(walk(full));
    else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.json')) results.push(full);
  });
  return results;
}

const files = walk(path.join(__dirname, '..', 'src'));
const imageRegex = /['"](\/(?:assets|images|documents)\/[^'"]+?\.(?:png|jpg|jpeg|JPG|PNG|pdf|pptx))['"]/g;
const missing = [];
const checked = new Set();

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    const imgPath = match[1];
    if (checked.has(imgPath)) continue;
    checked.add(imgPath);
    const diskPath = path.join(__dirname, '..', 'public', imgPath);
    if (!fs.existsSync(diskPath)) {
      missing.push({ file: path.relative(path.join(__dirname, '..'), f), imgPath });
    }
  }
});

console.log(`Checked ${checked.size} unique static asset references.`);
if (missing.length === 0) {
  console.log('ALL REFERENCED STATIC ASSETS EXIST ON DISK!');
} else {
  console.log(`MISSING ASSETS (${missing.length}):`);
  missing.forEach(m => console.log(` - ${m.imgPath} (referenced in ${m.file})`));
}

