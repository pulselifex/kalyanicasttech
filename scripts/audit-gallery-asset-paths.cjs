const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../../');
const publicDir = path.resolve(__dirname, '../public');

// Check public/assets subdirectories
const assetDirs = ['manufacturing', 'containers', 'shivlakha', 'company', 'castings', 'rail'];
assetDirs.forEach(ad => {
  const p = path.join(publicDir, 'assets', ad);
  if (fs.existsSync(p)) {
    const files = fs.readdirSync(p);
    console.log(`public/assets/${ad}: ${files.length} files`);
  }
});

