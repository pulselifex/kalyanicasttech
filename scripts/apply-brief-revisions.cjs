const fs = require('fs');
const path = require('path');

function updateFile(relPath, fn) {
  const fullPath = path.join(__dirname, '..', relPath);
  if (!fs.existsSync(fullPath)) {
    console.error('File not found:', fullPath);
    return false;
  }
  const original = fs.readFileSync(fullPath, 'utf8');
  const isCRLF = original.includes('\r\n');
  const normalized = original.replace(/\r\n/g, '\n');
  const modified = fn(normalized);
  if (modified === normalized) {
    console.log('No changes in:', relPath);
    return true;
  }
  const output = isCRLF ? modified.replace(/\n/g, '\r\n') : modified;
  fs.writeFileSync(fullPath, output, 'utf8');
  console.log('Successfully updated:', relPath);
  return true;
}

// 1. HomeIntegratedHero.tsx
updateFile('src/components/site/HomeIntegratedHero.tsx', (c) => {
  let res = c;
  res = res.replace(
    /<h1 className="mt-5 font-display text-4xl font-extrabold leading-\[1\.08\] tracking-tight text-white sm:text-5xl xl:text-6xl">[\s\S]*?<\/h1>/,
    `<h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl xl:text-6xl">
              Built for what{" "}
              <br />
              <span className="text-[#5b8def]">India moves.</span>
            </h1>`
  );
  res = res.replace(
    '<span>16 Container Configurations</span>',
    '<span>Engineered Container Solutions</span>'
  );
  return res;
});

// 2. HomePage.tsx
updateFile('src/components/site/HomePage.tsx', (c) => {
  let res = c;
  res = res.replace('kpi: "16 Models",', 'kpi: "Portfolio",');
  res = res.replace('Explore 16 Configurations &rarr;', 'Explore Container Portfolio &rarr;');
  return res;
});

// 3. about-us.tsx
updateFile('src/routes/about-us.tsx', (c) => {
  let res = c;
  res = res.replace(
    /<h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">[\s\S]*?<\/h1>/,
    `<p className="mt-4 text-xs font-mono font-bold uppercase tracking-widest text-[#5b8def]">
            About Kalyani Cast Tech Limited
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            One company. Two plants. A rail-linked cargo story still being written.
          </h1>`
  );
  res = res.replace(
    /<span className="font-bold text-foreground">6,000 Containers<\/span>/,
    '<span className="font-bold text-foreground">≥1,000 ISO/Yr (IRS Base)</span>'
  );
  res = res.replace('Explore 16 Models &rarr;', 'Explore Container Portfolio &rarr;');
  return res;
});

// 4. products-applications.tsx
updateFile('src/routes/products-applications.tsx', (c) => {
  let res = c;
  res = res.replace(
    '16 Published Configurations &middot; ISO 1496 Series-1 Tested',
    'Engineered Container Specifications &middot; ISO 1496 Series-1 Tested'
  );
  res = res.replace(
    /<h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">[\s\S]*?<\/h1>/,
    `<p className="mt-4 text-xs font-mono font-bold uppercase tracking-widest text-[#5b8def]">
            Products &amp; Applications
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            The cargo picks the container. We engineer it.
          </h1>`
  );
  res = res.replace('Browse 16-Model Catalogue', 'Browse Container Catalogue');
  res = res.replace('<a href="#catalogue">', '<a href="#containers">');
  res = res.replace(
    '<div id="catalogue" className="mt-16 scroll-mt-28">',
    '<div id="containers" className="scroll-mt-28" />\n        <div id="catalogue" className="mt-16 scroll-mt-28">'
  );
  res = res.replace('Complete 16-Model Container Range', 'Complete Container Range &amp; Custom Specifications');
  res = res.replace(
    '<div\n          id="castings"\n          className="mt-20 scroll-mt-28 rounded-xl border border-[#d9dfe6] bg-white p-8 shadow-sm"\n        >',
    '<div id="foundry" className="scroll-mt-28" />\n        <div\n          id="castings"\n          className="mt-20 scroll-mt-28 rounded-xl border border-[#d9dfe6] bg-white p-8 shadow-sm"\n        >'
  );
  return res;
});

// 5. facilities.tsx
updateFile('src/routes/facilities.tsx', (c) => {
  let res = c;
  res = res.replace(
    /<h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">[\s\S]*?<\/h1>/,
    `<p className="mt-4 text-xs font-mono font-bold uppercase tracking-widest text-[#5b8def]">
            Facilities &amp; Locations
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Two plants. One engineering standard.
          </h1>`
  );
  res = res.replace(
    '{ value: "Up to 6,000 / Yr", label: "Installed Capacity", sub: "Annual tooling capacity (IRS DLH21X014 baseline ≥1,000/yr)" },',
    '{ value: "≥1,000 / Yr", label: "IRS Approved Base", sub: "Annual tooling capacity (IRS DLH21X014 baseline ≥1,000/yr)" },'
  );
  res = res.replace(
    '<span className="font-bold text-foreground">6,000 / Year</span>',
    '<span className="font-bold text-foreground">≥1,000 / Year (IRS Baseline)</span>'
  );
  return res;
});

// 6. engineering-quality.tsx
updateFile('src/routes/engineering-quality.tsx', (c) => {
  let res = c;
  res = res.replace(
    /<h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">[\s\S]*?<\/h1>/,
    `<p className="mt-4 text-xs font-mono font-bold uppercase tracking-widest text-[#5b8def]">
            Engineering, Testing &amp; Quality
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            From design to testing &mdash; engineering under one roof.
          </h1>`
  );
  return res;
});

// 7. shivlakha-rail-logistics.index.tsx
updateFile('src/routes/shivlakha-rail-logistics.index.tsx', (c) => {
  let res = c;
  res = res.replace(
    /<h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">[\s\S]*?<\/h1>/,
    `<p className="mt-4 text-xs font-mono font-bold uppercase tracking-widest text-[#5b8def]">
            Shivlakha Integrated Rail &amp; Logistics Hub
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Manufacturing meets rail-linked logistics.
          </h1>`
  );
  res = res.replace(
    '<SiteLink to="/contact">Evaluate Cargo Movement</SiteLink>',
    '<SiteLink to="/contact">Discuss a rail-linked cargo requirement</SiteLink>'
  );
  return res;
});

// 8. investor-relations.tsx
updateFile('src/routes/investor-relations.tsx', (c) => {
  let res = c;
  res = res.replace(
    /<h1 className="mt-3 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">[\s\S]*?<\/h1>/,
    `<p className="mt-3 text-xs font-mono font-bold uppercase tracking-wider text-primary">
            Investor Relations &amp; Statutory Governance
          </p>
          <h1 className="mt-1 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Listed. Disclosed. Audited.
          </h1>`
  );
  return res;
});

// 9. contact.tsx
updateFile('src/routes/contact.tsx', (c) => {
  let res = c;
  res = res.replace(
    /<h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">[\s\S]*?<\/h1>/,
    `<p className="mt-4 text-xs font-mono font-bold uppercase tracking-widest text-[#5b8def]">
            Contact &amp; Enquiry Directory
          </p>
          <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Tell us what you are moving. We&apos;ll route it to the right desk.
          </h1>`
  );
  return res;
});

// 10. WhyShivlakhaCoLocation.tsx
updateFile('src/components/site/WhyShivlakhaCoLocation.tsx', (c) => {
  let res = c;
  res = res.replace('tag: "16 Engineered Designs"', 'tag: "Specialised Designs"');
  res = res.replace(
    "Direct access to Kalyani's 16 specialized container designs",
    "Direct access to Kalyani's specialized container designs"
  );
  res = res.replace(
    'Platform Economics &middot; Zero Empty Runs',
    'Platform Economics &middot; Co-Located Infrastructure'
  );
  return res;
});

// 11. ContainerCatalog.tsx
updateFile('src/components/site/ContainerCatalog.tsx', (c) => {
  let res = c;
  res = res.replace(
    'Showing <strong>{filteredModels.length}</strong> Container Specifications (16 Approved Core Configurations + 1 Custom Application Variant)',
    'Showing <strong>{filteredModels.length}</strong> Container Specifications across Standard, Specialised &amp; Custom Configurations'
  );
  res = res.replace(
    'Published 16-Model Specification Table',
    'Container Specification Table'
  );
  return res;
});

// 12. GrowthMatrix.tsx
updateFile('src/components/site/GrowthMatrix.tsx', (c) => {
  let res = c;
  res = res.replace(
    '"Scaling container manufacturing to 6,000 units annually across 16 configurations, public listing on BSE SME (544023), and activation of Shivlakha rail siding."',
    '"Scaling container manufacturing across specialized configurations, public listing on BSE SME (544023), and operational commissioning of Shivlakha rail terminal."'
  );
  res = res.replace(
    '"16 controlled configurations: ISO dry, 40\'/42\' dwarf double-stack, coiltainers, tanks & CUBOID"',
    '"Engineered configurations: ISO dry, 40\'/42\' dwarf double-stack, coiltainers, tanks & CUBOID"'
  );
  res = res.replace('linkText: "View 16 Container Models",', 'linkText: "View Container Portfolio",');
  return res;
});

// 13. route-assets.ts
updateFile('src/content/route-assets.ts', (c) => {
  let res = c;
  res = res.replace(
    '* Chapter 3 — 16-Model Technical Container Catalogue Image Bindings',
    '* Chapter 3 — Technical Container Catalogue Image Bindings'
  );
  res = res.replace(
    'Rewari Works: 5 acres, >6,000 sq.m across 4 sheds, 6,000 containers/year.',
    'Rewari Works: 5 acres, >6,000 sq.m across 4 sheds, IRS baseline ≥1,000 containers/year.'
  );
  res = res.replace(
    'Rewari Works: 5 acres, >6,000 sq.m across 4 sheds, 6,000 containers/year.',
    'Rewari Works: 5 acres, >6,000 sq.m across 4 sheds, IRS baseline ≥1,000 containers/year.'
  );
  res = res.replace(
    'Rewari Works (5 acres, 6,000 containers/year) & Shivlakha Hub (GCT Rail Terminal).',
    'Rewari Works (5 acres, IRS baseline ≥1,000 containers/year) & Shivlakha Hub (GCT Rail Terminal).'
  );
  return res;
});

// 14. manufacturing.index.tsx
updateFile('src/routes/manufacturing.index.tsx', (c) => {
  let res = c;
  res = res.replace(
    '{ value: "Up to 6,000 / Yr", label: "Installed Capacity", sub: "Annual tooling capacity (IRS DLH21X014 baseline ≥1,000/yr)" },',
    '{ value: "≥1,000 / Yr", label: "IRS Baseline", sub: "Approved tooling baseline under IRS DLH21X014" },'
  );
  res = res.replace(
    '<SiteLink to="/products-applications">View 16 Published Models</SiteLink>',
    '<SiteLink to="/products-applications">View Container Portfolio</SiteLink>'
  );
  return res;
});

// 15. resources.index.tsx
updateFile('src/routes/resources.index.tsx', (c) => {
  let res = c;
  res = res.replace('16 Container Data Sheets', 'Container Technical Data Sheets');
  res = res.replace('16 Published Container Engineering Data Sheets', 'Published Container Technical Data Sheets');
  return res;
});

console.log('All updates processed.');

