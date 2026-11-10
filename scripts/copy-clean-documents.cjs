const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../..');
const docs05Dir = path.join(rootDir, '05_Documents');
const certs07Dir = path.join(rootDir, '07_Certificates');
const pubDir = path.resolve(__dirname, '../public');
const pubDocsDir = path.join(pubDir, 'documents');

function ensureDir(d) {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
}

console.log('=== STEP 1: Creating target folder structure ===');
const targetFolders = [
  'public/documents/investors/annual-statements',
  'public/documents/investors/code-of-conduct',
  'public/documents/investors/drhp-prospectus',
  'public/documents/investors/statutory-disclosures',
  'public/documents/investors/corporate',
  'public/documents/certificates/irs',
  'public/documents/certificates/lloyds-register',
  'public/documents/certificates/lloyds-register/historical',
  'public/documents/certificates/iso',
  'public/documents/certificates/rdso',
  'public/documents/certificates/technical-reports',
  'public/documents/approvals'
];

targetFolders.forEach(f => ensureDir(path.resolve(__dirname, '..', f)));

console.log('=== STEP 2: Copying 05_Documents ===');
// Annual Statements
const annualFiles = [
  { sub: '2023-24', name: 'Financial-Results_30.09.2023.pdf' },
  { sub: '2023-24', name: 'Financial-Results_30.09.2024.pdf' },
  { sub: '2023-24', name: 'Shareholding-pattern_31.03.2026.pdf' },
  { sub: '2023-24', name: 'Statement-of-Deviation_30.09.2024.pdf' },
  { sub: '2024-25', name: 'Financial-Results_31.03.2025.pdf' },
  { sub: '2024-25', name: 'Statement-of-Deviation_31.03.2025.pdf' },
  { sub: '2025-26', name: 'Financial-Results_30.09.2025.pdf' }
];

annualFiles.forEach(item => {
  const src = path.join(docs05Dir, 'Annual Statements', item.sub, item.name);
  if (fs.existsSync(src)) {
    // Copy to structured path
    const destStructured = path.join(pubDocsDir, 'investors/annual-statements', item.name);
    fs.copyFileSync(src, destStructured);
    // Copy to legacy flat path for backward compatibility
    const destLegacy = path.join(pubDocsDir, 'investors', item.name);
    fs.copyFileSync(src, destLegacy);
    console.log(`Copied ${item.name}`);
  } else {
    console.error(`Source missing: ${src}`);
  }
});

// Code of Conduct
const cocFiles = fs.readdirSync(path.join(docs05Dir, 'Code of Conduct'));
cocFiles.forEach(file => {
  const src = path.join(docs05Dir, 'Code of Conduct', file);
  if (fs.statSync(src).isFile()) {
    const destStructured = path.join(pubDocsDir, 'investors/code-of-conduct', file);
    fs.copyFileSync(src, destStructured);
    const destLegacy = path.join(pubDocsDir, 'investors', file);
    fs.copyFileSync(src, destLegacy);
    console.log(`Copied Code of Conduct: ${file}`);
  }
});

// DRHP Prospectus
const drhpFiles = fs.readdirSync(path.join(docs05Dir, 'DRHP Prospectus'));
drhpFiles.forEach(file => {
  const src = path.join(docs05Dir, 'DRHP Prospectus', file);
  if (fs.statSync(src).isFile()) {
    const destStructured = path.join(pubDocsDir, 'investors/drhp-prospectus', file);
    fs.copyFileSync(src, destStructured);
    const destLegacy = path.join(pubDocsDir, 'investors', file);
    fs.copyFileSync(src, destLegacy);
    console.log(`Copied DRHP/Prospectus: ${file}`);
  }
});

// Revised AOA
const aoaSrc = path.join(docs05Dir, 'Revised-AOA.pdf');
if (fs.existsSync(aoaSrc)) {
  fs.copyFileSync(aoaSrc, path.join(pubDocsDir, 'investors/corporate/Revised-AOA.pdf'));
  fs.copyFileSync(aoaSrc, path.join(pubDocsDir, 'investors/Revised-AOA.pdf'));
  console.log('Copied Revised-AOA.pdf');
}

console.log('=== STEP 3: Copying 07_Certificates & Generating Approvals ===');
// IRS
const irsPdf = path.join(certs07Dir, 'IRS Certificate of Capacity.pdf');
const irsJpg = path.join(certs07Dir, 'IRS Certificate of Capacity.jpg');
fs.copyFileSync(irsPdf, path.join(pubDocsDir, 'certificates/irs/IRS-Certificate-of-Capacity-DLH21X014.pdf'));
fs.copyFileSync(irsJpg, path.join(pubDocsDir, 'certificates/irs/IRS-Certificate-of-Capacity-DLH21X014.jpg'));
fs.copyFileSync(irsPdf, path.join(pubDocsDir, 'approvals/IRS-Certificate-of-Capacity-DLH21X014.pdf'));
fs.copyFileSync(irsPdf, path.join(pubDocsDir, 'approvals/Certificate-of-Capacity.pdf'));
fs.copyFileSync(irsJpg, path.join(pubDocsDir, 'approvals/Certificate-of-Capacity-1.jpg'));

// Lloyd's Register
const lrCurrent = path.join(certs07Dir, 'LRS Cert 24-27.pdf');
fs.copyFileSync(lrCurrent, path.join(pubDocsDir, 'certificates/lloyds-register/LRS-Foundry-Approval-2024-2027.pdf'));
fs.copyFileSync(lrCurrent, path.join(pubDocsDir, 'approvals/LRS-Foundry-Approval-2024-2027.pdf'));

const lrHistPdf = path.join(certs07Dir, 'LR-1 Foundary approval 21-24.pdf');
const lrHistJpg = path.join(certs07Dir, 'LR-1 Foundary approval 21-24.jpg');
fs.copyFileSync(lrHistPdf, path.join(pubDocsDir, 'certificates/lloyds-register/historical/LR-Foundry-Approval-2021-2024.pdf'));
fs.copyFileSync(lrHistJpg, path.join(pubDocsDir, 'certificates/lloyds-register/historical/LR-Foundry-Approval-2021-2024.jpg'));

// ISO Certificates
const qacsPdf = path.join(certs07Dir, 'QACS CERTIFICATE.pdf');
fs.copyFileSync(qacsPdf, path.join(pubDocsDir, 'certificates/iso/ISO-9001-and-45001-Certificates.pdf'));
fs.copyFileSync(qacsPdf, path.join(pubDocsDir, 'approvals/ISO-9001-and-45001-Certificates.pdf'));

const iso14001Pdf = path.join(certs07Dir, 'KALYANI CAST 14001.pdf');
fs.copyFileSync(iso14001Pdf, path.join(pubDocsDir, 'certificates/iso/ISO-14001-Certificate.pdf'));
fs.copyFileSync(iso14001Pdf, path.join(pubDocsDir, 'approvals/ISO-14001-Certificate.pdf'));

// Move extracted images to permanent clean names
const approvalsDir = path.join(pubDocsDir, 'approvals');
const extractedMap = [
  { from: 'qacs_extracted_img_3.jpg', to: 'ISO-9001-Certificate-Kalyani-Cast-Tech.jpg' },
  { from: 'qacs_extracted_img_2.jpg', to: 'ISO-45001-Certificate-Kalyani-Cast-Tech.jpg' },
  { from: 'iso14001_extracted_img_1.jpg', to: 'ISO-14001-Certificate-Kalyani-Cast-Tech.jpg' },
  { from: 'qacs_extracted_img_1.jpg', to: 'QACS-Surveillance-Schedule-Cover-Letter.jpg' }
];

extractedMap.forEach(m => {
  const src = path.join(approvalsDir, m.from);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, path.join(approvalsDir, m.to));
    fs.copyFileSync(src, path.join(pubDocsDir, 'certificates/iso', m.to));
    console.log(`Installed certificate image: ${m.to}`);
  }
});

// RDSO
const rdsoJpg = path.join(certs07Dir, 'RDSO Approval.jpg');
fs.copyFileSync(rdsoJpg, path.join(pubDocsDir, 'certificates/rdso/RDSO-Class-A-Foundry-Approval-IS-12117.jpg'));
fs.copyFileSync(rdsoJpg, path.join(pubDocsDir, 'approvals/RDSO-Class-A-Foundry-Approval-IS-12117.jpg'));

// Dwarf Container Registration
const dwarfJpg = path.join(certs07Dir, 'RDSO-IR Plan to-Dwarf-ContainersDesigned-and-Developed-by-Shri-Naresh-Kumar-Director-Kalyani-Cast-Tech.jpg');
fs.copyFileSync(dwarfJpg, path.join(pubDocsDir, 'certificates/technical-reports/Railway-Board-Dwarf-Container-Design-Registration.jpg'));
fs.copyFileSync(dwarfJpg, path.join(pubDocsDir, 'approvals/Railway-Board-Dwarf-Container-Design-Registration.jpg'));

console.log('=== STEP 4: Cleaning obsolete files & typo duplicates ===');
const obsoleteFiles = [
  'documents/investors/Statment-of-Deviation_31.09.2024.pdf',
  'documents/investors/Statment-of-Deviation_31.03.2025.pdf',
  'documents/investors/C.-Code-of-Practices-and-Procedures-for-Fair-Disclosure-of-UPSI-1.pdf',
  'documents/investors/FAMILIARISATION_PROGRAMME_FOR_INDEPENDENT_DIRECTORS-1.pdf',
  'documents/investors/RELATED-PARTY-TRANSACTION-1.pdf',
  'documents/investors/Latest-Brochure-1.pdf',
  'documents/investors/posts-report-2026-09-16T083806.476.pdf',
  'documents/corporate/Kalyani Cast Tech Limited — Master Content Document _ Website & Brochure Edition V1.0.pdf',
  // Clean temporary extraction files
  'documents/approvals/qacs_extracted_img_1.jpg',
  'documents/approvals/qacs_extracted_img_2.jpg',
  'documents/approvals/qacs_extracted_img_3.jpg',
  'documents/approvals/qacs_extracted_img_4.jpg',
  'documents/approvals/qacs_extracted_img_5.jpg',
  'documents/approvals/qacs_extracted_img_6.jpg',
  'documents/approvals/iso14001_extracted_img_1.jpg',
  'documents/approvals/iso14001_extracted_img_2.jpg',
  'documents/approvals/iso14001_extracted_img_3.jpg'
];

obsoleteFiles.forEach(rel => {
  const f = path.join(pubDir, rel);
  if (fs.existsSync(f)) {
    fs.unlinkSync(f);
    console.log(`Deleted obsolete: ${rel}`);
  }
});

console.log('=== STEP 5: Updating _redirects for obsolete aliases ===');
const redirectsPath = path.join(pubDir, '_redirects');
let redirectsContent = fs.readFileSync(redirectsPath, 'utf8');

const newRedirects = [
  '/documents/investors/Statment-of-Deviation_31.09.2024.pdf /documents/investors/Statement-of-Deviation_30.09.2024.pdf 301!',
  '/documents/investors/Statment-of-Deviation_31.03.2025.pdf /documents/investors/Statement-of-Deviation_31.03.2025.pdf 301!',
  '/documents/investors/C.-Code-of-Practices-and-Procedures-for-Fair-Disclosure-of-UPSI-1.pdf /documents/investors/C.-Code-of-Practices-and-Procedures-for-Fair-Disclosure-of-UPSI.pdf 301!',
  '/documents/investors/FAMILIARISATION_PROGRAMME_FOR_INDEPENDENT_DIRECTORS-1.pdf /documents/investors/FAMILIARISATION_PROGRAMME_FOR_INDEPENDENT_DIRECTORS.pdf 301!',
  '/documents/investors/RELATED-PARTY-TRANSACTION-1.pdf /documents/investors/E.-Policy-on-RPTrelated-party-transaction.pdf 301!'
];

newRedirects.forEach(r => {
  const from = r.split(' ')[0];
  if (!redirectsContent.includes(from)) {
    redirectsContent += '\n' + r;
  }
});
fs.writeFileSync(redirectsPath, redirectsContent);
console.log('Updated _redirects with canonical document redirects.');

console.log('Document deployment script finished successfully.');

