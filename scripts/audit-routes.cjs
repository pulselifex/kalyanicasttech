const fs = require('fs');
const path = require('path');

const content = fs.readFileSync('./src/routeTree.gen.ts', 'utf8');
const lines = content.split('\n');
const fullPaths = [];
for (const line of lines) {
  const m = line.match(/fullPath:\s*['"]([^'"]+)['"]/);
  if (m && !fullPaths.includes(m[1])) fullPaths.push(m[1]);
}

const routesDir = './src/routes';
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx') && f !== '__root.tsx');

const results = [];

for (const fp of fullPaths) {
  let matchingFile = null;
  for (const f of files) {
    const fContent = fs.readFileSync(path.join(routesDir, f), 'utf8');
    if (fContent.includes(`createFileRoute('${fp}')`) || fContent.includes(`createFileRoute("${fp}")`)) {
      matchingFile = f;
      break;
    }
  }

  if (!matchingFile) {
    for (const f of files) {
      const fContent = fs.readFileSync(path.join(routesDir, f), 'utf8');
      if (fContent.includes(`createFileRoute('${fp.replace(/\/$/, '')}')`) || fContent.includes(`createFileRoute("${fp.replace(/\/$/, '')}")`)) {
        matchingFile = f;
        break;
      }
    }
  }

  let isRedirect = false;
  let redirectTo = null;
  if (matchingFile) {
    const fContent = fs.readFileSync(path.join(routesDir, matchingFile), 'utf8');
    if (fContent.includes('throw redirect(') || fContent.includes('redirect({')) {
      isRedirect = true;
      const m = fContent.match(/to:\s*['"]([^'"]+)['"]/);
      redirectTo = m ? m[1] : 'unknown';
    }
  }

  results.push({
    path: fp,
    file: matchingFile,
    isRedirect,
    redirectTo
  });
}

console.log('=== ROUTE ANALYSIS (' + results.length + ' total paths) ===');
console.log('\n--- CANONICAL / RENDERED ROUTES (' + results.filter(r => !r.isRedirect).length + ') ---');
results.filter(r => !r.isRedirect).forEach(r => {
  console.log(`  ${r.path.padEnd(55)} (file: ${r.file || 'unknown'})`);
});

console.log('\n--- 301 REDIRECTS (' + results.filter(r => r.isRedirect).length + ') ---');
results.filter(r => r.isRedirect).forEach(r => {
  console.log(`  ${r.path.padEnd(55)} -> ${r.redirectTo} (file: ${r.file})`);
});
