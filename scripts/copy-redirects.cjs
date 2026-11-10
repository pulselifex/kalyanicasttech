const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, '../public/_redirects');
const dest = path.join(__dirname, '../dist/client/_redirects');

if (fs.existsSync(src)) {
  fs.copyFileSync(src, dest);
  console.log('Successfully copied public/_redirects to dist/client/_redirects');
} else {
  console.log('public/_redirects not found');
}

