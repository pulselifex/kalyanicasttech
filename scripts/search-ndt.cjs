const fs = require('fs');
const path = require('path');

function searchDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!['node_modules', '.git', 'dist'].includes(entry.name)) {
        searchDir(fullPath);
      }
    } else if (/\.(ts|tsx|json|md)$/.test(entry.name)) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('NDT')) {
        console.log(`Found in: ${fullPath}`);
        content.split('\n').forEach((line, i) => {
          if (line.includes('NDT')) {
            console.log(`  Line ${i+1}: ${line.trim()}`);
          }
        });
      }
    }
  }
}

searchDir(path.join(__dirname, '..', 'src'));
searchDir(path.join(__dirname, '..', 'docs'));
