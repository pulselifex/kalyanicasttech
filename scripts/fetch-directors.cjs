const https = require("https");
const fs = require("fs");

const urls = [
  "https://kalyanicasttech.com/mr-naresh-kumar/",
  "https://kalyanicasttech.com/mr-devender-kumar/",
  "https://kalyanicasttech.com/mr-ratnesh-mahajan/",
  "https://kalyanicasttech.com/mr-javed-aslam/",
];

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve({ url, status: res.statusCode, data }));
      })
      .on("error", reject);
  });
}

async function run() {
  const results = [];
  for (const url of urls) {
    try {
      const res = await fetchPage(url);
      console.log("Fetched", url, "Status:", res.status);
      // parse html content
      const titleMatch = res.data.match(/<title>([^<]+)<\/title>/i);
      const title = titleMatch ? titleMatch[1] : "";

      // find image
      const imgMatches = [...res.data.matchAll(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi)].map(
        (m) => m[1],
      );
      const contentImgs = imgMatches.filter(
        (src) => !src.includes("logo") && !src.includes("favicon") && !src.includes("elementor"),
      );

      // find main article/content text
      // strip script, style, header, nav, footer
      let text = res.data
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
        .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, "")
        .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, "")
        .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, "")
        .replace(/<[^>]+>/g, "\n");

      const lines = text
        .split("\n")
        .map((l) => l.trim())
        .filter((l) => l.length > 0);
      results.push({ url, title, images: contentImgs, text: lines });
    } catch (err) {
      console.error("Error fetching", url, err.message);
    }
  }

  fs.writeFileSync("scripts/directors-live-data.json", JSON.stringify(results, null, 2));
  console.log("Saved live director data to scripts/directors-live-data.json");
}

run();
