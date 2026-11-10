const fs = require('fs');
const path = require('path');
const https = require('https');

const BASE_DIR = path.resolve(__dirname, '..');
const SRC_DIR = path.join(BASE_DIR, 'src');
const PUBLIC_DIR = path.join(BASE_DIR, 'public');

console.log('=== KCT WP-5B.25B AUDIT & DISCOVERABILITY VALIDATION SENSOR ===');
console.log('Base directory:', BASE_DIR);

// -------------------------------------------------------------
// 1. PUBLIC TERMINOLOGY & STRING SEARCH
// -------------------------------------------------------------
console.log('\n--- 1. PUBLIC TERMINOLOGY SCAN ---');

const termsToSearch = [
  { term: 'Gati Shakti Cargo Terminal', regex: /Gati\s+Shakti\s+Cargo\s+Terminal/i, severity: 'ERROR (Must be Gati Shakti Terminal)' },
  { term: 'GCT Shivlakha', regex: /GCT\s+Shivlakha/i, severity: 'WARNING (Check if public abbreviation)' },
  { term: 'Gandhidham-Samakhiali', regex: /Gandhidham-Samakhiali/i, severity: 'CHECK (Verify operational route claim)' },
  { term: 'Samakhiali', regex: /Samakhiali/i, severity: 'INFO (Context of railway junction)' },
  { term: 'certified NDT', regex: /certified\s+NDT/i, severity: 'ERROR (Must be Non-Destructive Testing (NDT))' },
  { term: 'Certified NDT', regex: /Certified\s+NDT/i, severity: 'ERROR (Must be Non-Destructive Testing (NDT))' },
  { term: 'certified ISO 1161', regex: /certified\s+ISO\s*1161/i, severity: 'ERROR (Check ISO wording)' },
  { term: 'draft', regex: /\bdraft\b/i, severity: 'CHECK (Verify no internal drafts exposed)' },
  { term: 'confidential', regex: /\bconfidential\b/i, severity: 'CHECK (Verify no confidential markers exposed)' }
];

function walkDir(dir, filter, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.output' && file !== '.nitro') {
        walkDir(fullPath, filter, fileList);
      }
    } else if (filter(fullPath)) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

const sourceFiles = walkDir(SRC_DIR, f => /\.(ts|tsx|json|html|css|js|cjs)$/.test(f));
console.log(`Scanning ${sourceFiles.length} source files for problematic terminology...`);

const termMatches = [];

for (const filePath of sourceFiles) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const relPath = path.relative(BASE_DIR, filePath).replace(/\\/g, '/');
  
  // Skip test files for certain checks if they are testing for omission, but note them
  const isTest = relPath.includes('src/test/');

  for (const item of termsToSearch) {
    let match;
    const regex = new RegExp(item.regex.source, 'gi');
    let lineNum = 1;
    const lines = content.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (item.regex.test(line)) {
        termMatches.push({
          file: relPath,
          line: i + 1,
          term: item.term,
          severity: item.severity,
          isTest,
          lineSnippet: line.trim()
        });
      }
    }
  }
}

console.log(`Found ${termMatches.length} total raw term occurrences.`);
const nonTestMatches = termMatches.filter(m => !m.isTest);
console.log(`Found ${nonTestMatches.length} occurrences in non-test production code:`);
nonTestMatches.forEach(m => {
  console.log(`  [${m.severity}] ${m.file}:${m.line} -> "${m.lineSnippet.substring(0, 100)}"`);
});

// -------------------------------------------------------------
// 2. PAGES.JSON TITLE & META DESCRIPTION AUDIT
// -------------------------------------------------------------
console.log('\n--- 2. PAGES.JSON TITLE & META AUDIT ---');
const pagesJsonPath = path.join(SRC_DIR, 'content', 'pages.json');
const pagesData = JSON.parse(fs.readFileSync(pagesJsonPath, 'utf-8'));
console.log(`Total page entries in pages.json: ${pagesData.length}`);

const titleMetaAudit = pagesData.map(p => {
  const title = p.title || '';
  const seoTitle = p.seoTitle || '';
  const metaDesc = p.metaDescription || (p.meta && p.meta.description) || '';
  const titleLen = seoTitle.length;
  const descLen = metaDesc.length;
  
  const titleFlag = titleLen > 65 ? 'LONG' : (titleLen < 30 ? 'SHORT' : 'OK');
  const descFlag = descLen > 165 ? 'LONG' : (descLen < 100 ? 'SHORT' : 'OK');
  
  return {
    url: p.url,
    title,
    seoTitle,
    titleLen,
    titleFlag,
    metaDesc,
    descLen,
    descFlag
  };
});

console.log('Summary of Title lengths:');
const longTitles = titleMetaAudit.filter(a => a.titleFlag === 'LONG');
console.log(`  Titles > 65 chars: ${longTitles.length}`);
longTitles.forEach(t => console.log(`    ${t.url} (${t.titleLen} chars): "${t.seoTitle}"`));

console.log('Summary of Meta Description lengths:');
const longDescs = titleMetaAudit.filter(a => a.descFlag === 'LONG');
console.log(`  Descriptions > 165 chars: ${longDescs.length}`);
longDescs.forEach(d => console.log(`    ${d.url} (${d.descLen} chars): "${d.metaDesc.substring(0, 80)}..."`));

// Check homepage title specifically
const homeEntry = titleMetaAudit.find(a => a.url === '/');
if (homeEntry) {
  console.log(`\nHomepage Title Evaluation:`);
  console.log(`  Current: "${homeEntry.seoTitle}" (${homeEntry.titleLen} chars)`);
  console.log(`  Display preview: Pixel width approx ${homeEntry.titleLen * 8.5}px (Google cutoff ~580px)`);
}

// -------------------------------------------------------------
// 3. PUBLIC DOCUMENT & INVESTOR PDF VALIDATION
// -------------------------------------------------------------
console.log('\n--- 3. PUBLIC DOCUMENT & INVESTOR PDF AUDIT ---');
const routeAssetsPath = path.join(SRC_DIR, 'content', 'route-assets.ts');
const routeAssetsContent = fs.readFileSync(routeAssetsPath, 'utf-8');

// Parse ROUTE_DOCUMENTS from route-assets.ts
const docRegex = /(?:href|url):\s*['"](\/documents\/[^'"]+)['"]/g;
let docMatch;
const referencedDocs = new Set();
while ((docMatch = docRegex.exec(routeAssetsContent)) !== null) {
  referencedDocs.add(docMatch[1]);
}

// Check InvestorDocumentLibrary.tsx
const invLibPath = path.join(SRC_DIR, 'components', 'site', 'InvestorDocumentLibrary.tsx');
if (fs.existsSync(invLibPath)) {
  const invLibContent = fs.readFileSync(invLibPath, 'utf-8');
  const fileUrlRegex = /fileUrl:\s*['"](\/documents\/[^'"]+)['"]/g;
  while ((docMatch = fileUrlRegex.exec(invLibContent)) !== null) {
    referencedDocs.add(docMatch[1]);
  }
}

// Check investor-relations.tsx
const investorRelPath = path.join(SRC_DIR, 'routes', 'investor-relations.tsx');
if (fs.existsSync(investorRelPath)) {
  const invContent = fs.readFileSync(investorRelPath, 'utf-8');
  const invDocRegex = /documentUrl:\s*['"](\/documents\/[^'"]+)['"]/g;
  while ((docMatch = invDocRegex.exec(invContent)) !== null) {
    referencedDocs.add(docMatch[1]);
  }
  const hrefRegex = /href=['"](\/documents\/[^'"]+)['"]/g;
  while ((docMatch = hrefRegex.exec(invContent)) !== null) {
    referencedDocs.add(docMatch[1]);
  }
}

// Also check pages.json for document links
const pagesJsonStr = JSON.stringify(pagesData);
const pagesDocRegex = /"(\/documents\/[^"]+)"/g;
while ((docMatch = pagesDocRegex.exec(pagesJsonStr)) !== null) {
  referencedDocs.add(docMatch[1]);
}

console.log(`Total unique document URLs referenced across codebase: ${referencedDocs.size}`);

const docAuditResults = [];
for (const docUrl of Array.from(referencedDocs).sort()) {
  // Strip query/hash
  const cleanPath = docUrl.split('?')[0].split('#')[0];
  const diskPath = path.join(PUBLIC_DIR, cleanPath.startsWith('/') ? cleanPath.slice(1) : cleanPath);
  const exists = fs.existsSync(diskPath);
  let size = 0;
  if (exists) {
    const stat = fs.statSync(diskPath);
    size = stat.size;
  }
  docAuditResults.push({
    url: docUrl,
    diskPath: path.relative(BASE_DIR, diskPath).replace(/\\/g, '/'),
    exists,
    sizeBytes: size,
    sizeKb: (size / 1024).toFixed(1)
  });
}

const missingDocs = docAuditResults.filter(d => !d.exists);
console.log(`Documents existing on disk: ${docAuditResults.filter(d => d.exists).length} / ${docAuditResults.length}`);
if (missingDocs.length > 0) {
  console.log(`MISSING DOCUMENTS (${missingDocs.length}):`);
  missingDocs.forEach(d => console.log(`  ❌ ${d.url} (expected at ${d.diskPath})`));
} else {
  console.log('✅ ALL referenced documents exist in public/ directory!');
}

// -------------------------------------------------------------
// 4. STRUCTURED DATA & CANONICAL AUDIT
// -------------------------------------------------------------
console.log('\n--- 4. CANONICAL & STRUCTURED DATA CONFIG AUDIT ---');
const seoMetaPath = path.join(SRC_DIR, 'content', 'seo-metadata.ts');
const seoMetaContent = fs.readFileSync(seoMetaPath, 'utf-8');

// Check PRIMARY_CANONICAL_ROUTES
console.log('Checking PRIMARY_CANONICAL_ROUTES in seo-metadata.ts...');
const seoMeta = require('../src/content/seo-metadata.ts');
const primaryRoutes = [...seoMeta.PRIMARY_CANONICAL_ROUTES];
console.log(`Found ${primaryRoutes.length} primary canonical routes.`);

// Check sitemap.xml
const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
let sitemapUrls = [];
if (fs.existsSync(sitemapPath)) {
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
  const locRegex = /<loc>([^<]+)<\/loc>/g;
  let locMatch;
  while ((locMatch = locRegex.exec(sitemapContent)) !== null) {
    sitemapUrls.push(locMatch[1]);
  }
  console.log(`Found ${sitemapUrls.length} URLs in public/sitemap.xml.`);
}

// Compare primary canonical routes with sitemap
const expectedSitemapUrls = primaryRoutes.map(r => `https://kalyanicasttech.com${r === '/' ? '/' : r}`);
const missingInSitemap = expectedSitemapUrls.filter(u => !sitemapUrls.includes(u));
const extraInSitemap = sitemapUrls.filter(u => !expectedSitemapUrls.includes(u));
console.log(`Sitemap alignment: ${missingInSitemap.length} missing, ${extraInSitemap.length} extra.`);
if (missingInSitemap.length > 0) console.log('  Missing in sitemap:', missingInSitemap);
if (extraInSitemap.length > 0) console.log('  Extra in sitemap:', extraInSitemap);

// -------------------------------------------------------------
// 5. STAGING PROTECTION & NETLIFY.TOML AUDIT
// -------------------------------------------------------------
console.log('\n--- 5. NETLIFY.TOML CONFIG AUDIT ---');
const netlifyPath = path.join(BASE_DIR, 'netlify.toml');
const netlifyContent = fs.readFileSync(netlifyPath, 'utf-8');

const hasDeployPreviewHeader = netlifyContent.includes('[context.deploy-preview.headers]') || netlifyContent.includes('X-Robots-Tag');
const hasBranchDeployHeader = netlifyContent.includes('[context.branch-deploy.headers]');
console.log(`Deploy preview X-Robots-Tag configured: ${hasDeployPreviewHeader}`);
console.log(`Branch deploy X-Robots-Tag configured: ${hasBranchDeployHeader}`);

// Output summary object to json file
const auditReport = {
  timestamp: new Date().toISOString(),
  termMatches: nonTestMatches,
  titleMetaAudit,
  docAuditResults,
  primaryRoutes,
  sitemapUrls,
  missingInSitemap,
  extraInSitemap,
  hasDeployPreviewHeader,
  hasBranchDeployHeader
};

fs.writeFileSync(path.join(BASE_DIR, 'scripts', 'step5b25b-audit-report.json'), JSON.stringify(auditReport, null, 2));
console.log('\nAudit complete! Report saved to scripts/step5b25b-audit-report.json');
