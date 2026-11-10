const fs = require("fs");
const readline = require("readline");

const sqlFile =
  "D:\\Kalyani Tech\\Kalyani Records\\Company Presentation & Brochure\\Website Backup\\kalyanicasttech.com\\kalyanicasttech.com\\kalyanicasttech.sql";

const rl = readline.createInterface({
  input: fs.createReadStream(sqlFile),
  crlfDelay: Infinity,
});

let foundLinks = new Set();
rl.on("line", (line) => {
  const matches = line.match(
    /https?:\/\/(?:www\.)?(?:youtube\.com|youtu\.be|linkedin\.com)[^\s"\'<>]+/gi,
  );
  if (matches) {
    matches.forEach((m) => foundLinks.add(m));
  }
});

rl.on("close", () => {
  console.log("Found social/media links in SQL dump:", foundLinks.size);
  foundLinks.forEach((l) => console.log("   ->", l));
});
