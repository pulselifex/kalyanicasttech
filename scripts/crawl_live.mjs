import fs from "fs";
import path from "path";

const PAGES_TO_CRAWL = [
  "https://kalyanicasttech.com/",
  "https://kalyanicasttech.com/about-2/",
  "https://kalyanicasttech.com/our-journey/",
  "https://kalyanicasttech.com/manufacturing-facilities/",
  "https://kalyanicasttech.com/manufacturing-facilities-2/",
  "https://kalyanicasttech.com/investors/",
  "https://kalyanicasttech.com/investor-test/",
  "https://kalyanicasttech.com/innovations/",
  "https://kalyanicasttech.com/products/",
  "https://kalyanicasttech.com/products-old/",
  "https://kalyanicasttech.com/products-old-original/",
  "https://kalyanicasttech.com/product-new-old/",
  "https://kalyanicasttech.com/gallery/",
  "https://kalyanicasttech.com/contact/",
  "https://kalyanicasttech.com/faq/",
  "https://kalyanicasttech.com/testimonials/",
  "https://kalyanicasttech.com/the-food-project/",
  "https://kalyanicasttech.com/sample-page/",
  "https://kalyanicasttech.com/7412-2/",
  // Leadership/Team members:
  "https://kalyanicasttech.com/mr-naresh-kumar/",
  "https://kalyanicasttech.com/mr-devender-kumar/",
  "https://kalyanicasttech.com/mr-ratnesh-mahajan/",
  "https://kalyanicasttech.com/mr-javed-aslam/",
  // Product model pages:
  "https://kalyanicasttech.com/20-feet-hc-container/",
  "https://kalyanicasttech.com/20-feet-hc-side-access/",
  "https://kalyanicasttech.com/40-feet-hc-container-2/",
  "https://kalyanicasttech.com/40-feet-side-access-dwarf-container-2/",
  "https://kalyanicasttech.com/40-feet-open-top-coiltainer/",
  "https://kalyanicasttech.com/40-feet-hc-open-top-coiltainer-40x8x9-5/",
  "https://kalyanicasttech.com/40-feet-dwarf-open-top-coiltaner-40x8-5x6-3/",
  "https://kalyanicasttech.com/40-feet-universal-container-openable-top-40x8x9-5/",
  "https://kalyanicasttech.com/42-feet-hc-open-top-coiltainer/",
  "https://kalyanicasttech.com/42-feet-dwarf-open-top-container/",
  "https://kalyanicasttech.com/42-feet-hc-open-top-coiltainer-3/",
  "https://kalyanicasttech.com/42-feet-hc-for-coil-and-tmt-bars/",
  "https://kalyanicasttech.com/20-feet-tank-containers/",
  "https://kalyanicasttech.com/hopper-container/",
  // Legitimate news posts:
  "https://kalyanicasttech.com/indian-railways-new-dwarf-containers-have-67-more-volume-could-be-a-game-changer-in-capturing-high-end-traffic/",
  "https://kalyanicasttech.com/how-smaller-containers-could-mean-big-business-for-indian-railways/",
  "https://kalyanicasttech.com/indian-railways-zone-operates-its-1st-double-stack-dwarf-container-train-on-these-routes-check-details/",
  "https://kalyanicasttech.com/indian-railways-introduces-dwarf-container-service/",
  "https://kalyanicasttech.com/tracks-cleared-for-dwarf-container-movement-between-gujarat-and-maharashtra/",
  "https://kalyanicasttech.com/dwarf-boxes-to-move-additional-2-mt-of-annual-cargo-for-railways/",
  "https://kalyanicasttech.com/out-of-the-box-idea-dwarf-containers-that-can-bring-railways-bulk-revenues/",
  "https://kalyanicasttech.com/freight-on-the-front-foot/",
  "https://kalyanicasttech.com/railways-cube-containers-on-track-to-slash-supply-chain-cost-by-20-25/",
];

async function deepCrawl() {
  const crawlDir = "./_crawl/pages";
  if (!fs.existsSync(crawlDir)) fs.mkdirSync(crawlDir, { recursive: true });

  const inventory = [];
  const allDiscoveredDocs = new Map();

  console.log(`Starting deep crawl of ${PAGES_TO_CRAWL.length} pages...`);

  for (let i = 0; i < PAGES_TO_CRAWL.length; i++) {
    const url = PAGES_TO_CRAWL[i];
    const slug = url.replace("https://kalyanicasttech.com/", "").replace(/\/$/, "") || "home";
    const filePath = path.join(crawlDir, `${slug}.html`);

    try {
      console.log(`[${i + 1}/${PAGES_TO_CRAWL.length}] Fetching ${url}...`);
      const res = await fetch(url);
      const status = res.status;
      const html = await res.text();
      fs.writeFileSync(filePath, html);

      // Extract title
      const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      const title = titleMatch ? titleMatch[1].replace(/\s+/g, " ").trim() : "";

      // Extract H1
      const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
      const h1 = h1Match
        ? h1Match[1]
            .replace(/<[^>]*>/g, "")
            .replace(/\s+/g, " ")
            .trim()
        : "";

      // Extract PDF/doc links
      const docLinks = [
        ...html.matchAll(
          /<a\s+[^>]*href=["']([^"']+\.(pdf|docx|xlsx|pptx|zip))["'][^>]*>([\s\S]*?)<\/a>/gi,
        ),
      ].map((m) => ({
        url: m[1].trim(),
        label: m[3]
          .replace(/<[^>]*>/g, "")
          .replace(/\s+/g, " ")
          .trim(),
      }));

      for (const d of docLinks) {
        if (!allDiscoveredDocs.has(d.url)) {
          allDiscoveredDocs.set(d.url, { ...d, sourcePages: [url] });
        } else {
          allDiscoveredDocs.get(d.url).sourcePages.push(url);
        }
      }

      // Check text snippet / key content
      // Remove scripts, styles, tags
      const cleanText = html
        .replace(/<script[\s\S]*?<\/script>/gi, "")
        .replace(/<style[\s\S]*?<\/style>/gi, "")
        .replace(/<[^>]*>/g, " ")
        .replace(/\s+/g, " ")
        .trim();

      inventory.push({
        url,
        slug,
        status,
        title,
        h1,
        docCount: docLinks.length,
        textLength: cleanText.length,
        snippet: cleanText.slice(0, 300),
      });
    } catch (e) {
      console.error(`Failed to crawl ${url}:`, e.message);
      inventory.push({
        url,
        slug,
        status: "ERROR",
        title: "",
        h1: "",
        docCount: 0,
        textLength: 0,
        snippet: e.message,
      });
    }
  }

  fs.writeFileSync("./_crawl/live_inventory_raw.json", JSON.stringify(inventory, null, 2));
  fs.writeFileSync(
    "./_crawl/live_documents_raw.json",
    JSON.stringify(Array.from(allDiscoveredDocs.values()), null, 2),
  );

  console.log("\n--- Deep Crawl Complete ---");
  console.log(`Total Pages Crawled: ${inventory.length}`);
  console.log(`Total Downloadable Documents Discovered: ${allDiscoveredDocs.size}`);
  for (const doc of allDiscoveredDocs.values()) {
    console.log(
      `DOC: ${doc.label || "No Label"} -> ${doc.url} (from ${doc.sourcePages.length} pages)`,
    );
  }
}

deepCrawl().catch(console.error);
