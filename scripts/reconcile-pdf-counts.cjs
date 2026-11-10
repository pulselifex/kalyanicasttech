const fs = require("fs");
const path = require("path");
const pages = require("../src/content/pages.json");

const investorPageUrls = [
  "/investors/financial-information",
  "/investors/stock-exchange-disclosures",
  "/investors/corporate-governance",
  "/investors/shareholder-information",
  "/investors/ipo-corporate-actions",
  "/investors/investor-grievance-contact",
  "/investors/meetings-presentations",
];

const investorLinkedDocs = new Map();

pages.forEach((p) => {
  const jsonStr = JSON.stringify(p);
  const matches = jsonStr.match(/\/documents\/[^\s"'<>]+/g) || [];
  matches.forEach((m) => {
    const clean = m.replace(/[),;]+$/, "");
    if (investorPageUrls.includes(p.url)) {
      if (!investorLinkedDocs.has(clean)) {
        investorLinkedDocs.set(clean, []);
      }
      investorLinkedDocs.get(clean).push(p.url);
    }
  });
});

const csvContent = fs.readFileSync(
  "website_migration_audit_phase2b_closure/investor_pdf_integrity_register.csv",
  "utf8",
);
const lines = csvContent.trim().split("\n").slice(1);

function parseCsvLine(line) {
  const result = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      inQuotes = !inQuotes;
    } else if (c === "," && !inQuotes) {
      result.push(cur.trim());
      cur = "";
    } else {
      cur += c;
    }
  }
  result.push(cur.trim());
  return result;
}

const csvUrls = new Set();
const csvEntries = [];
lines.forEach((l) => {
  const parts = parseCsvLine(l);
  if (parts.length >= 5) {
    const url = parts[4].replace(/^"|"$/g, "").trim();
    csvUrls.add(url);
    csvEntries.push({ id: parts[0], title: parts[3], url });
  }
});

console.log("Total investorLinkedDocs in pages.json:", investorLinkedDocs.size);
console.log("Total entries in investor_pdf_integrity_register.csv:", csvEntries.length);
console.log("Unique URLs in investor_pdf_integrity_register.csv:", csvUrls.size);

// Which URL is in investorLinkedDocs but not in csvUrls?
for (const [url, pageList] of investorLinkedDocs.entries()) {
  if (!csvUrls.has(url)) {
    console.log("FOUND IN pages.json BUT MISSING IN CSV:", url, "linked on:", pageList);
  }
}

// Which URL is in csvUrls but not in investorLinkedDocs?
for (const url of csvUrls) {
  if (!investorLinkedDocs.has(url)) {
    console.log("FOUND IN CSV BUT MISSING IN pages.json:", url);
  }
}
