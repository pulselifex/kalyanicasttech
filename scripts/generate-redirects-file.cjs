const fs = require("fs");
const path = require("path");

const content = fs.readFileSync(path.join("src", "lib", "legacy-redirects.ts"), "utf8");

// Parse LEGACY_REDIRECT_MAP from source file
const mapMatch = content.match(
  /export const LEGACY_REDIRECT_MAP: Record<string, string> = {([\s\S]*?)};/,
);
if (!mapMatch) {
  throw new Error("Could not parse LEGACY_REDIRECT_MAP from legacy-redirects.ts");
}

const mapBody = mapMatch[1];
const regex = /"([^"]+)":\s*"([^"]+)"/g;
let match;
const lines = [
  "# Netlify / Cloudflare Pages Edge Redirect & Purge Rules",
  "# Generated for Kalyani Cast Tech Limited Website Migration",
  "",
  "# 1. Purge Historical Malicious Injected Spam (HTTP 410 Gone)",
  "/innovations/online-casino/*  /410.html  410!",
  "/online-casino/*              /410.html  410!",
  "/innovations/online-casino-cz/  /410.html  410!",
  "/innovations/online-casino-ru/  /410.html  410!",
  "/innovations/online-casino-hu/  /410.html  410!",
  "/innovations/online-casino-pl/  /410.html  410!",
  "",
  "# 2. Legacy WordPress URL Redirects (HTTP 301 Moved Permanently)",
];

let count = 0;
while ((match = regex.exec(mapBody)) !== null) {
  const oldPath = match[1];
  const newPath = match[2];
  lines.push(`${oldPath.padEnd(70)} ${newPath} 301!`);
  count++;
}

fs.writeFileSync(path.join("public", "_redirects"), lines.join("\n") + "\n", "utf8");
console.log(
  `Successfully generated public/_redirects with ${count} redirect rules and 6 spam purge rules.`,
);
