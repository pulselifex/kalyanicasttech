const fs = require('fs');
const path = require('path');

const pages = JSON.parse(fs.readFileSync('src/content/pages.json', 'utf-8'));
const r = pages.find(p => p.url === '/resources/news-media');
const str = JSON.stringify(r);
const imgRegex = /\/images\/media\/[^"')\s]+/g;
let m;
const imgs = [];
while ((m = imgRegex.exec(str)) !== null) imgs.push(m[0]);
console.log('Total media images found in news-media:', imgs.length);

let missing = 0;
imgs.forEach(img => {
  const disk = path.join('public', img.replace(/^\//, ''));
  if (!fs.existsSync(disk)) {
    console.log('MISSING:', img, '->', disk);
    missing++;
  }
});
console.log('Missing media images count:', missing);
