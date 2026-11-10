import fs from "fs";

const productPages = [
  "products.html",
  "20-feet-hc-container.html",
  "20-feet-hc-side-access.html",
  "40-feet-hc-container-2.html",
  "40-feet-side-access-dwarf-container-2.html",
  "40-feet-open-top-coiltainer.html",
  "40-feet-hc-open-top-coiltainer-40x8x9-5.html",
  "40-feet-dwarf-open-top-coiltaner-40x8-5x6-3.html",
  "40-feet-universal-container-openable-top-40x8x9-5.html",
  "42-feet-hc-open-top-coiltainer.html",
  "42-feet-dwarf-open-top-container.html",
  "42-feet-hc-open-top-coiltainer-3.html",
  "42-feet-hc-for-coil-and-tmt-bars.html",
  "20-feet-tank-containers.html",
  "hopper-container.html",
  "testimonials.html",
];

for (const f of productPages) {
  const p = "./_crawl/pages/" + f;
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, "utf8");
    const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || "";
    const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || "";
    const clean = html
      .replace(/<script[\s\S]*?<\/script>/gi, "")
      .replace(/<style[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();
    console.log(
      `${f} | Title: ${title.replace(/&#8211;.*$/, "").trim()} | H1: ${h1.replace(/<[^>]*>/g, "").trim()} | Length: ${clean.length}`,
    );
    console.log("   Snippet:", clean.slice(0, 180));
  }
}
