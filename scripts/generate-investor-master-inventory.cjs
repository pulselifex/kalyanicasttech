const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

function sha256(filePath) {
  const buf = fs.readFileSync(filePath);
  return crypto.createHash('sha256').update(buf).digest('hex');
}

function walk(dir) {
  let files = [];
  fs.readdirSync(dir).forEach(f => {
    const full = path.join(dir, f);
    if (fs.statSync(full).isDirectory()) files = files.concat(walk(full));
    else files.push(full);
  });
  return files;
}

// 1. Parse InvestorDocumentLibrary.tsx
const libContent = fs.readFileSync('src/components/site/InvestorDocumentLibrary.tsx', 'utf8');
const libDocs = [];
const docBlockRegex = /\{[\s\S]*?id:\s*["']([^"']+)["'][\s\S]*?title:\s*["']([^"']+)["'][\s\S]*?category:\s*["']([^"']+)["'][\s\S]*?date:\s*["']([^"']+)["'][\s\S]*?url:\s*["']([^"']+)["'][\s\S]*?\}/g;
let dm;
while ((dm = docBlockRegex.exec(libContent)) !== null) {
  libDocs.push({
    id: dm[1],
    title: dm[2],
    category: dm[3],
    date: dm[4],
    url: dm[5]
  });
}

// 2. Parse pages.json
const pages = JSON.parse(fs.readFileSync('src/content/pages.json', 'utf8'));
const pagesDocs = [];
pages.forEach(p => {
  if (p.url && (p.url.includes('investor') || p.url.includes('resources'))) {
    const pStr = JSON.stringify(p);
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let lm;
    while ((lm = linkRegex.exec(pStr)) !== null) {
      if (lm[2].includes('/documents/')) {
        pagesDocs.push({ page: p.url, label: lm[1], url: lm[2] });
      }
    }
  }
});

// Map of public URL -> { title, category, date, source }
const publicUrlMap = {};
libDocs.forEach(d => {
  publicUrlMap[d.url] = {
    title: d.title,
    category: d.category,
    date: d.date,
    source: 'InvestorDocumentLibrary'
  };
});

pagesDocs.forEach(d => {
  if (!publicUrlMap[d.url]) {
    publicUrlMap[d.url] = {
      title: d.label,
      category: d.page.replace('/investors/', '').replace('/resources/', ''),
      date: 'FY 2023-2026',
      source: 'pages.json (' + d.page + ')'
    };
  }
});

// 3. Scan physical files
const allFiles = walk(path.join('public', 'documents', 'investors'));
console.log('Total physical files scanned:', allFiles.length);

const hashMap = {};
const fileMeta = allFiles.map(filePath => {
  const normPath = filePath.replace(/\\/g, '/');
  const pubUrl = '/' + normPath.replace(/^public\//, '');
  const stat = fs.statSync(filePath);
  const hash = sha256(filePath);
  const ext = path.extname(filePath).toLowerCase().replace('.', '');
  const basename = path.basename(filePath);

  if (!hashMap[hash]) hashMap[hash] = [];
  hashMap[hash].push({ normPath, pubUrl, basename });

  return {
    filePath: normPath,
    pubUrl,
    basename,
    ext,
    size: stat.size,
    hash
  };
});

// 4. Derive metadata for each file
function escapeCsv(val) {
  if (val === null || val === undefined) return '""';
  const str = String(val).replace(/"/g, '""');
  return `"${str}"`;
}

function deriveMetadata(item) {
  const pubInfo = publicUrlMap[item.pubUrl];
  const isPublic = !!pubInfo;
  const hashGroup = hashMap[item.hash];
  const isDuplicate = hashGroup.length > 1;
  const isPrimary = hashGroup[0].normPath === item.filePath;

  // Determine Title
  let title = pubInfo ? pubInfo.title : item.basename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');

  // Determine Category
  let category = 'Corporate & Statutory';
  if (pubInfo && pubInfo.category) {
    category = pubInfo.category;
  } else if (item.filePath.includes('code-of-conduct')) {
    category = 'Code of Conduct';
  } else if (item.filePath.includes('annual-statements') || /annual|balance|financial/i.test(item.basename)) {
    category = 'Annual Statements';
  } else if (/prospectus|drhp|rhp|valuation/i.test(item.basename)) {
    category = 'DRHP & Prospectus';
  } else if (/shareholding/i.test(item.basename)) {
    category = 'Shareholder Information';
  } else if (/board-meeting|intimation|outcome|postal/i.test(item.basename)) {
    category = 'Stock Exchange Disclosures';
  } else if (/agm|egm|transcript|presentation/i.test(item.basename)) {
    category = 'Meetings & Presentations';
  }

  // Determine Date & FY
  let fy = 'FY 2023–2026';
  let date = pubInfo ? pubInfo.date : 'Historical Record';

  if (/2025-26|2026/i.test(item.basename)) {
    fy = 'FY 2025–26';
    if (!pubInfo) date = '2025–2026';
  } else if (/2024-25|2025/i.test(item.basename)) {
    fy = 'FY 2024–25';
    if (!pubInfo) date = '2024–2025';
  } else if (/2023-24|2024/i.test(item.basename)) {
    fy = 'FY 2023–24';
    if (!pubInfo) date = '2023–2024';
  } else if (/2022-23|2023/i.test(item.basename)) {
    fy = 'FY 2022–23';
    if (!pubInfo) date = '2022–2023';
  }

  // Duplicate status
  let dupStatus = 'Unique SHA-256';
  if (isDuplicate) {
    if (isPrimary) {
      dupStatus = `Primary Instance (${hashGroup.length} copies)`;
    } else {
      dupStatus = `Duplicate Copy (SHA-256 matches ${hashGroup[0].basename})`;
    }
  }

  // Relevance
  let relevance = 'High (Statutory Requirement)';
  if (isDuplicate && !isPrimary && !isPublic) {
    relevance = 'Redundant Duplicate Copy';
  } else if (!isPublic && /temp|test|draft|old/i.test(item.basename)) {
    relevance = 'Internal / Superseded Draft';
  } else if (isPublic) {
    relevance = 'Active Public Disclosure';
  }

  // Lifecycle
  let lifecycle = 'Active Statutory Record';
  if (isDuplicate && !isPrimary) {
    lifecycle = 'Duplicate Copy Preserved on Disk';
  } else if (!isPublic) {
    lifecycle = 'Archived Corporate Record';
  }

  // Action
  let action = 'Retained on Disk';
  if (pubInfo && pubInfo.source === 'InvestorDocumentLibrary') {
    action = 'Retained in Public Document Library (Active)';
  } else if (pubInfo) {
    action = 'Retained in Public Investor Routes (Active)';
  } else if (isDuplicate && !isPrimary) {
    action = 'Preserved in Local Archive (Deduplicated from Public UI)';
  } else {
    action = 'Preserved in Statutory Archive Repository';
  }

  return {
    displayTitle: title,
    category,
    fyPeriod: fy,
    date,
    filename: item.basename,
    filepath: item.filePath,
    publicUrl: item.pubUrl,
    filetype: item.ext.toUpperCase(),
    size: item.size,
    sha256: item.hash,
    existsOnDisk: 'Yes',
    relevant: relevance,
    duplicateStatus: dupStatus,
    lifecycle,
    action
  };
}

const inventoryRows = fileMeta.map(deriveMetadata);

// Sort: Publicly linked first, then Category, then Filename
inventoryRows.sort((a, b) => {
  if (a.action.includes('Active') && !b.action.includes('Active')) return -1;
  if (!a.action.includes('Active') && b.action.includes('Active')) return 1;
  if (a.category !== b.category) return a.category.localeCompare(b.category);
  return a.filename.localeCompare(b.filename);
});

// Write CSV
const headers = [
  'Display Title',
  'Category',
  'FY/Period',
  'Date',
  'Filename',
  'Filepath',
  'Public URL',
  'Filetype',
  'Size',
  'SHA-256',
  'Exists on Disk',
  'Relevant',
  'Duplicate Status',
  'Lifecycle',
  'Action'
];

const csvLines = [headers.map(escapeCsv).join(',')];
inventoryRows.forEach(r => {
  const line = [
    r.displayTitle,
    r.category,
    r.fyPeriod,
    r.date,
    r.filename,
    r.filepath,
    r.publicUrl,
    r.filetype,
    r.size,
    r.sha256,
    r.existsOnDisk,
    r.relevant,
    r.duplicateStatus,
    r.lifecycle,
    r.action
  ].map(escapeCsv).join(',');
  csvLines.push(line);
});

const outPath = path.join('..', '04_WEBSITE_DOCUMENTATION', 'step5b14_management_acceptance', '07_INVESTOR_DOCUMENT_MASTER_INVENTORY.csv');
fs.writeFileSync(outPath, csvLines.join('\n'), 'utf8');
console.log(`Successfully generated master inventory: ${outPath} with ${inventoryRows.length} items.`);

