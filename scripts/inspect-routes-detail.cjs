const fs = require('fs');
const path = require('path');

const routesDir = path.join(__dirname, '..', 'src', 'routes');
const files = fs.readdirSync(routesDir).filter(f => f.endsWith('.tsx') && f !== '__root.tsx');

console.log(`Inspecting ${files.length} route files:`);
const results = [];

files.forEach(f => {
  const content = fs.readFileSync(path.join(routesDir, f), 'utf8');
  const routeMatch = content.match(/createFileRoute\((['"])(.*?)\1\)/);
  const routePath = routeMatch ? routeMatch[2] : 'unknown';
  const hasRedirect = content.includes('throw redirect(');
  const redirectTarget = hasRedirect ? (content.match(/to:\s*(['"])(.*?)\1/) || [])[2] : null;
  const is13Liner = content.split('\n').length <= 20;

  // Check what component is rendered
  let renderedComponent = 'Custom';
  if (content.includes('LegacySubpageView')) {
    const slugMatch = content.match(/slug=(['"])(.*?)\1/);
    renderedComponent = `LegacySubpageView(${slugMatch ? slugMatch[2] : ''})`;
  } else if (hasRedirect) {
    renderedComponent = `Redirect -> ${redirectTarget}`;
  }

  results.push({
    file: f,
    routePath,
    hasRedirect,
    redirectTarget,
    is13Liner,
    renderedComponent,
    lines: content.split('\n').length
  });
});

console.table(results.map(r => ({
  file: r.file,
  routePath: r.routePath,
  type: r.hasRedirect ? 'REDIRECT' : (r.renderedComponent.startsWith('LegacySubpageView') ? 'LEGACY_SUBPAGE' : 'FULL_PAGE'),
  lines: r.lines,
  info: r.hasRedirect ? `to: ${r.redirectTarget}` : r.renderedComponent
})));
