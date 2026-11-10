const fs = require('fs');
const path = require('path');

// 1. Audit Gallery items
const galleryContent = fs.readFileSync(path.join(__dirname, '../src/routes/gallery.tsx'), 'utf8');
const itemsMatch = galleryContent.match(/const galleryItems: GalleryItem\[\] = \[([\s\S]*?)\];/);

console.log('=== GALLERY ITEMS AUDIT ===');
if (itemsMatch) {
  const block = itemsMatch[1];
  const items = [];
  const re = /\{\s*id:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*category:\s*"([^"]+)",\s*src:\s*"([^"]+)",\s*caption:\s*"([^"]+)",\s*location:\s*"([^"]+)"/g;
  let m;
  while ((m = re.exec(block)) !== null) {
    items.push({ id: m[1], title: m[2], category: m[3], src: m[4], caption: m[5], location: m[6] });
  }
  console.log('Found ' + items.length + ' gallery items.');
  const catMap = {};
  items.forEach(it => {
    catMap[it.category] = (catMap[it.category] || 0) + 1;
    const diskPath = path.join(__dirname, '../public', it.src);
    const exists = fs.existsSync(diskPath);
    console.log(`[${it.category}] ${it.id} | ${it.title} | ${it.src} | Exists: ${exists}`);
  });
  console.log('\nCurrent Categories:');
  console.log(catMap);
}

