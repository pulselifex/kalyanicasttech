const fs = require("fs");
const path = require("path");
const pages = require("../src/content/pages.json");

const linkedDocs = new Set();
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
    linkedDocs.add(clean);
    if (investorPageUrls.includes(p.url)) {
      if (!investorLinkedDocs.has(clean)) {
        investorLinkedDocs.set(clean, []);
      }
      investorLinkedDocs.get(clean).push(p.url);
    }
  });
});

console.log("Total linked /documents/ across ALL pages:", linkedDocs.size);
console.log("Total linked docs across 7 INVESTOR pages:", investorLinkedDocs.size);

const filesInInvestors = fs.readdirSync("public/documents/investors");
console.log("Total physical files in public/documents/investors:", filesInInvestors.length);

let linkedExist = 0;
let linkedMissing = [];
investorLinkedDocs.forEach((pageList, docUrl) => {
  const diskPath = path.join("public", docUrl);
  if (fs.existsSync(diskPath)) {
    linkedExist++;
  } else {
    linkedMissing.push({ docUrl, pageList });
  }
});
console.log("Linked investor docs existing on disk:", linkedExist);
console.log("Linked investor docs missing on disk:", linkedMissing.length);
if (linkedMissing.length > 0) {
  console.log("Missing details:", JSON.stringify(linkedMissing, null, 2));
}

// Check unlinked files in public/documents/investors
const unlinkedFiles = [];
filesInInvestors.forEach((f) => {
  const url = "/documents/investors/" + f;
  if (!investorLinkedDocs.has(url)) {
    unlinkedFiles.push(f);
  }
});
console.log(
  "Physical files in public/documents/investors NOT linked on investor pages:",
  unlinkedFiles.length,
);
console.log("Unlinked sample (up to 20):", unlinkedFiles.slice(0, 20));
