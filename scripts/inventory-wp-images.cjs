const fs = require("fs");
const path = require("path");

function walk(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
      const full = path.join(dir, file);
      const stat = fs.statSync(full);
      if (stat && stat.isDirectory()) results = results.concat(walk(full));
      else results.push(full);
    });
  } catch (e) {}
  return results;
}

const base =
  "D:\\Kalyani Tech\\Kalyani Records\\Company Presentation & Brochure\\Website Backup\\kalyanicasttech.com\\kalyanicasttech.com\\wp-content\\uploads";
const all = walk(base);
const imageExts = new Set([".jpg", ".jpeg", ".png", ".webp"]);
const images = all.filter((f) => imageExts.has(path.extname(f).toLowerCase()));

console.log("Total image files in WP backup:", images.length);

// Separate full resolution / original images from WordPress generated thumbnails (e.g., -150x150, -300x200, -1024x768)
const wpThumbRegex = /-\d+x\d+\.(jpg|jpeg|png|webp)$/i;
const originalImages = images.filter((f) => !wpThumbRegex.test(f));
const thumbImages = images.filter((f) => wpThumbRegex.test(f));

console.log("Original / full-size images:", originalImages.length);
console.log("Thumbnail variants:", thumbImages.length);

console.log("\n--- SAMPLE ORIGINAL IMAGES ---");
originalImages.slice(0, 30).forEach((f) => {
  const stat = fs.statSync(f);
  console.log(
    `${path.basename(f)} (${(stat.size / 1024).toFixed(1)} KB) -> ${path.relative(base, f)}`,
  );
});
