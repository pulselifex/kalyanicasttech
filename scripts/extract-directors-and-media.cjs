const fs = require("fs");
const readline = require("readline");

const sqlFile =
  "D:\\Kalyani Tech\\Kalyani Records\\Company Presentation & Brochure\\Website Backup\\kalyanicasttech.com\\kalyanicasttech.com\\kalyanicasttech.sql";

const rl = readline.createInterface({
  input: fs.createReadStream(sqlFile),
  crlfDelay: Infinity,
});

const targets = [
  "mr-naresh-kumar",
  "mr-devender-kumar",
  "mr-ratnesh-mahajan",
  "mr-javed-aslam",
  "news-media",
];
const results = {};

rl.on("line", (line) => {
  if (
    line.startsWith("INSERT INTO `wp_posts`") ||
    line.includes("('") ||
    line.includes(",'page',") ||
    line.includes(",'post',")
  ) {
    targets.forEach((t) => {
      if (line.includes(t)) {
        if (!results[t]) results[t] = [];
        results[t].push(line);
      }
    });
  }
});

rl.on("close", () => {
  console.log("Finished reading SQL.");
  for (const [target, lines] of Object.entries(results)) {
    console.log(
      `\n=================== TARGET: ${target} (${lines.length} lines) ===================`,
    );
    lines.forEach((l, i) => {
      // Find the specific value tuple containing target
      const pieces = l.split("('");
      pieces.forEach((p) => {
        if (p.includes(target)) {
          // let's print post_title and post_content
          console.log(`--- MATCH ${i} ---`);
          // Remove SQL escapes
          const clean = p
            .replace(/\\r\\n/g, "\n")
            .replace(/\\'/g, "'")
            .replace(/\\"/g, '"');
          console.log(clean.slice(0, 1500));
        }
      });
    });
  }
});
