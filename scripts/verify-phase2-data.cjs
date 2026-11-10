const fs = require("fs");
const path = require("path");

// 1. Audit redirects against existing_website_inventory and url_redirect_and_seo_audit
const { LEGACY_REDIRECT_MAP, SPAM_PATTERNS } = require("../src/lib/legacy-redirects.ts");

const urlAuditRaw = fs
  .readFileSync("website_migration_audit/url_redirect_and_seo_audit.csv", "utf8")
  .split("\n")
  .filter(Boolean);
const missingRedirects = [];
const spamRedirects = [];
const coveredRedirects = [];

for (let i = 1; i < urlAuditRaw.length; i++) {
  const line = urlAuditRaw[i];
  const parts = line.split('","').map((s) => s.replace(/^"|"$/g, ""));
  const oldUrl = parts[0];
  if (!oldUrl) continue;
  try {
    const urlObj = new URL(oldUrl);
    const pathname = urlObj.pathname;
    if (pathname === "/") continue;

    const isSpam = SPAM_PATTERNS.some((p) => p.test(pathname));
    if (isSpam) {
      spamRedirects.push({ oldUrl, pathname });
    } else if (LEGACY_REDIRECT_MAP[pathname] || LEGACY_REDIRECT_MAP[pathname.replace(/\/$/, "")]) {
      coveredRedirects.push({
        oldUrl,
        pathname,
        destination:
          LEGACY_REDIRECT_MAP[pathname] || LEGACY_REDIRECT_MAP[pathname.replace(/\/$/, "")],
      });
    } else {
      missingRedirects.push({ oldUrl, pathname });
    }
  } catch (e) {
    console.error("Invalid URL:", oldUrl);
  }
}

console.log("=== REDIRECT AUDIT ===");
console.log("Total URLs checked from url_redirect_and_seo_audit:", urlAuditRaw.length - 1);
console.log("Covered normal redirects:", coveredRedirects.length);
console.log("Covered spam (HTTP 410):", spamRedirects.length);
console.log("Missing redirects:", missingRedirects.length, missingRedirects);

// 2. Audit routes in pages.json vs files in src/routes/
const pages = JSON.parse(fs.readFileSync("src/content/pages.json", "utf8"));
const routeFiles = fs
  .readdirSync("src/routes")
  .filter((f) => f.endsWith(".tsx") && f !== "__root.tsx");

console.log("\n=== ROUTE AUDIT ===");
console.log("Total routes in pages.json:", pages.length);
console.log("Total route files in src/routes/ (excl __root):", routeFiles.length);

// 3. Document links audit
const docDir = "public/documents/investors";
const investorFiles = fs.readdirSync(docDir);
console.log("\n=== INVESTOR DOCUMENTS ===");
console.log("Total files in public/documents/investors:", investorFiles.length);

let linkedCount = 0;
const linkedDocs = new Set();
for (const p of pages) {
  const str = JSON.stringify(p);
  const matches = str.match(/\/documents\/investors\/[^"\s\)\\]+/g) || [];
  for (const m of matches) {
    const clean = m.replace(/[\),]+$/, "").replace("/documents/investors/", "");
    linkedDocs.add(clean);
    linkedCount++;
  }
}

console.log("Total document references in pages.json:", linkedCount);
console.log("Unique files referenced in pages.json:", linkedDocs.size);
console.log(
  "Files in directory NOT referenced in pages.json:",
  investorFiles.length - linkedDocs.size,
);
