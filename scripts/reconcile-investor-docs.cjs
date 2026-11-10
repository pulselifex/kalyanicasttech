const fs = require("fs");
const path = require("path");

function walk(dir) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    list.forEach((file) => {
      const full = path.join(dir, file);
      const stat = fs.statSync(full);
      if (stat && stat.isDirectory()) results = results.concat(walk(full));
      else results.push(full);
    });
  } catch (e) {}
  return results;
}

const base =
  "D:\\Kalyani Tech\\Kalyani Records\\Company Presentation & Brochure\\Website Backup\\kalyanicasttech.com\\kalyanicasttech.com\\wp-content\\uploads";
const all = walk(base);
const pdfs = all.filter((f) => f.toLowerCase().endsWith(".pdf"));
console.log("Total PDFs found in local WP backup uploads:", pdfs.length);

const matrixPath = path.join("website_migration_audit", "document_migration_matrix.csv");
const csv = fs.readFileSync(matrixPath, "utf8");
const lines = csv.split("\n").filter((l) => l.trim().length > 0);

const csvFiles = new Map();
lines.slice(1).forEach((line) => {
  // Parse CSV line properly
  const cols = [];
  let cur = "";
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"' || char === "'") {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      cols.push(cur.trim());
      cur = "";
    } else {
      cur += char;
    }
  }
  cols.push(cur.trim());

  const docId = cols[0];
  const page = cols[1];
  const label = cols[2];
  const url = cols[3];
  const fn = cols[4];
  if (fn && fn.endsWith(".pdf")) {
    if (!csvFiles.has(fn.toLowerCase())) {
      csvFiles.set(fn.toLowerCase(), { docId, page, label, url, fn });
    }
  }
});

console.log("Unique PDF filenames in migration matrix:", csvFiles.size);

const matched = [];
const missing = [];

for (const [lowerFn, data] of csvFiles.entries()) {
  const localMatch = pdfs.find((p) => path.basename(p).toLowerCase() === lowerFn);
  if (localMatch) {
    matched.push({ ...data, localPath: localMatch, size: fs.statSync(localMatch).size });
  } else {
    missing.push(data);
  }
}

console.log("Matched in local WP backup:", matched.length);
console.log("Missing from local WP backup:", missing.length);

console.log("\n--- SAMPLE MATCHED DOCUMENTS ---");
matched.slice(0, 10).forEach((m) => {
  console.log(`${m.fn} (${m.size} bytes) -> ${m.label}`);
});

if (missing.length > 0) {
  console.log("\n--- MISSING FROM LOCAL BACKUP (NEED TO FETCH FROM LIVE) ---");
  missing.forEach((m) => console.log(`${m.fn} | URL: ${m.url}`));
}
