const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");

const BASE_URL = "http://localhost:3001";

const CANONICAL_ROUTES = [
  "/",
  "/about-us",
  "/leadership",
  "/manufacturing",
  "/facilities",
  "/products-applications",
  "/engineering-quality",
  "/shivlakha-rail-logistics",
  "/resources",
  "/investor-relations",
  "/contact"
];

const LEGACY_ROUTES = [
  "/company",
  "/company/",
  "/company/leadership",
  "/company/leadership/",
  "/manufacturing/facilities-locations",
  "/manufacturing/facilities-locations/",
  "/containers-solutions",
  "/containers-solutions/",
  "/manufacturing/testing-quality",
  "/manufacturing/testing-quality/",
  "/investors",
  "/investors/",
  "/business-enquiry"
];

const EXPECTED_H1_TITLES = {
  "/": {
    seoTitle: "Freight Containers & Rail Logistics | Kalyani Cast Tech",
    h1: "Engineering Solutions for Cargo Movement"
  },
  "/about-us": {
    seoTitle: "About Kalyani Cast Tech | Containers & Castings",
    h1: "About Kalyani Cast Tech Limited"
  },
  "/leadership": {
    seoTitle: "Board of Directors & Management | Kalyani Cast Tech",
    h1: "Board & Management"
  },
  "/manufacturing": {
    seoTitle: "Container & Foundry Manufacturing | Kalyani Cast Tech",
    h1: "Container & Foundry Manufacturing"
  },
  "/facilities": {
    seoTitle: "Facilities & Locations | Rewari & Shivlakha",
    h1: "Facilities & Locations"
  },
  "/products-applications": {
    seoTitle: "Freight Containers, Dwarf & Coiltainers | Kalyani Cast Tech",
    h1: "Products & Applications"
  },
  "/engineering-quality": {
    seoTitle: "Testing, Quality & NDT Laboratory | Kalyani Cast Tech",
    h1: "Engineering, Testing & Quality"
  },
  "/shivlakha-rail-logistics": {
    seoTitle: "Shivlakha Rail & Logistics, Kachchh | Kalyani Cast Tech",
    h1: "Shivlakha Rail & Logistics"
  },
  "/resources": {
    seoTitle: "Data Sheets, Brochures & Certificates | Kalyani Cast Tech",
    h1: "Resources"
  },
  "/investor-relations": {
    seoTitle: "Investor Relations | Kalyani Cast Tech Limited",
    h1: "Investor Relations"
  },
  "/contact": {
    seoTitle: "Contact & Business Enquiry | Kalyani Cast Tech",
    h1: "Contact & Business Enquiry"
  }
};

async function fetchUrl(urlPath, method = "GET") {
  const fullUrl = urlPath.startsWith("http") ? urlPath : `${BASE_URL}${encodeURI(urlPath)}`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 6000);

  try {
    const res = await fetch(fullUrl, {
      method,
      redirect: "manual",
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    const location = res.headers.get("location");
    const status = res.status;
    let html = "";
    if (status >= 200 && status < 300 && method === "GET") {
      html = await res.text();
    }
    return { status, location, html, error: null };
  } catch (err) {
    clearTimeout(timeoutId);
    return { status: 0, location: null, html: "", error: err.name === "AbortError" ? "Timeout (6s)" : err.message };
  }
}

async function runAudit() {
  console.log(`Starting automated link-integrity and crawl audit against ${BASE_URL}...`);

  const visitedUrls = new Set();
  const pageDomCache = new Map();
  const pageStatusCache = new Map();
  const routeAuditResults = [];

  const discoveredLinks = [];
  const discoveredImages = [];
  const discoveredDocs = [];

  // Step 1: Crawl Canonical Pages
  for (const pagePath of CANONICAL_ROUTES) {
    console.log(`[CRAWL] Scanning canonical route: ${pagePath}`);
    visitedUrls.add(pagePath);

    const res = await fetchUrl(pagePath);
    pageStatusCache.set(pagePath, res);

    if (res.status === 200 && res.html) {
      const dom = new JSDOM(res.html, { url: `${BASE_URL}${pagePath}` });
      pageDomCache.set(pagePath, dom);

      const titleEl = dom.window.document.querySelector("title");
      const metaDescEl = dom.window.document.querySelector('meta[name="description"]');
      const h1El = dom.window.document.querySelector("h1");

      const title = titleEl ? titleEl.textContent.trim() : "";
      const metaDesc = metaDescEl ? metaDescEl.getAttribute("content") : "";
      const h1 = h1El ? h1El.textContent.replace(/\s+/g, " ").trim() : "";

      const expected = EXPECTED_H1_TITLES[pagePath];
      const titleMatch = expected ? title === expected.seoTitle : false;
      const h1Match = expected ? h1 === expected.h1 : false;

      routeAuditResults.push({
        route: pagePath,
        status: res.status,
        title,
        expectedTitle: expected?.seoTitle,
        titleMatch,
        h1,
        expectedH1: expected?.h1,
        h1Match,
        metaDesc
      });

      // Extract <a> tags
      const anchors = Array.from(dom.window.document.querySelectorAll("a"));
      for (const a of anchors) {
        const rawHref = a.getAttribute("href");
        if (!rawHref) continue;

        const text = a.textContent.replace(/\s+/g, " ").trim();
        let targetPath = "";
        let hash = "";

        if (rawHref.startsWith("#")) {
          targetPath = pagePath;
          hash = rawHref.substring(1).split("?")[0];
        } else if (rawHref.startsWith("/") || rawHref.startsWith("http://localhost:3001")) {
          try {
            const parsed = new URL(rawHref, BASE_URL);
            targetPath = parsed.pathname;
            hash = parsed.hash ? parsed.hash.substring(1).split("?")[0] : "";
          } catch (e) {
            targetPath = rawHref;
          }
        } else {
          targetPath = rawHref;
        }

        discoveredLinks.push({
          sourcePage: pagePath,
          text: text || "[Icon/Graphic Link]",
          rawHref,
          targetPath,
          hash
        });

        const lowerHref = rawHref.toLowerCase();
        if (
          lowerHref.endsWith(".pdf") ||
          lowerHref.endsWith(".pptx") ||
          lowerHref.includes("/documents/") ||
          lowerHref.includes("/assets/")
        ) {
          discoveredDocs.push({ sourcePage: pagePath, href: rawHref });
        }
      }

      // Extract <img> tags
      const images = Array.from(dom.window.document.querySelectorAll("img"));
      for (const img of images) {
        const src = img.getAttribute("src");
        const alt = img.getAttribute("alt") || "[No Alt]";
        if (src) {
          discoveredImages.push({ sourcePage: pagePath, src, alt });
        }
      }
    } else {
      routeAuditResults.push({
        route: pagePath,
        status: res.status,
        error: res.error,
        ok: false
      });
    }
  }

  // Step 2: Validate Legacy 301 Redirects
  console.log(`\nValidating ${LEGACY_ROUTES.length} legacy redirect paths...`);
  const legacyResults = [];
  for (const legacyPath of LEGACY_ROUTES) {
    const res = await fetchUrl(legacyPath);
    pageStatusCache.set(legacyPath, res);
    visitedUrls.add(legacyPath);
    legacyResults.push({
      legacyPath,
      status: res.status,
      location: res.location,
      ok: res.status === 301
    });
  }

  // Step 3: Test All Discovered Unique Internal Link Destinations
  const internalDestinations = new Set();
  for (const link of discoveredLinks) {
    if (link.targetPath.startsWith("/") && !link.targetPath.includes(".")) {
      internalDestinations.add(link.targetPath);
    }
  }

  console.log(`\nChecking HTTP response for ${internalDestinations.size} unique internal route destinations...`);
  for (const dest of internalDestinations) {
    if (!pageStatusCache.has(dest)) {
      const res = await fetchUrl(dest);
      pageStatusCache.set(dest, res);
      if (res.status === 200 && res.html && !pageDomCache.has(dest)) {
        pageDomCache.set(dest, new JSDOM(res.html, { url: `${BASE_URL}${dest}` }));
      }
    }
  }

  // Step 4: Verify Hash Anchors
  console.log(`\nChecking internal hash anchor targets...`);
  const anchorResults = [];
  for (const link of discoveredLinks) {
    if (link.hash) {
      let targetPath = link.targetPath || link.sourcePage;
      const dom = pageDomCache.get(targetPath);
      let exists = false;
      if (dom) {
        const el =
          dom.window.document.getElementById(link.hash) ||
          dom.window.document.querySelector(`[name="${link.hash}"]`);
        exists = !!el;
      }
      anchorResults.push({
        sourcePage: link.sourcePage,
        rawHref: link.rawHref,
        targetPath,
        hash: link.hash,
        exists
      });
    }
  }

  // Step 5: Verify Static Assets, Documents & Presentations
  console.log(`\nVerifying static assets, documents & images...`);
  const uniqueAssetUrls = [
    ...new Set([
      ...discoveredImages.map(i => i.src),
      ...discoveredDocs.map(p => p.href),
      "/documents/investors/Kalyani-Cast-Tech-Investor-Presentation.pptx",
      "/documents/investors/Kalyani-Cast-Tech-Investor-Presentation.pdf",
      "/documents/approvals/Foundry-Approval-from-LR.pdf",
      "/documents/approvals/Certificate-of-Capacity.pdf",
      "/documents/approvals/Competent-Manufacturer.pdf",
      "/documents/approvals/7.1.jpg",
      "/documents/approvals/Picture1.jpg"
    ])
  ];

  const assetResults = [];
  for (const assetUrl of uniqueAssetUrls) {
    if (assetUrl.startsWith("/")) {
      const res = await fetchUrl(assetUrl, "GET");
      assetResults.push({
        assetUrl,
        status: res.status,
        ok: res.status === 200 || res.status === 304,
        error: res.error
      });
    }
  }

  // Step 6: Verify 16 Models from ContainerCatalog
  console.log(`\nVerifying 16 Models from ContainerCatalog...`);
  const catalogContent = fs.readFileSync(path.join(__dirname, "src/components/site/ContainerCatalog.tsx"), "utf8");
  const modelMatch = catalogContent.match(/export const CONTAINER_MODELS: ContainerModelSpec\[\] = (\[[\s\S]*?\n\];)/);
  const CONTAINER_MODELS = modelMatch ? eval(modelMatch[1]) : [];

  const assetContent = fs.readFileSync(path.join(__dirname, "src/content/route-assets.ts"), "utf8");
  const assetMatch = assetContent.match(/export const CONTAINER_MODEL_ASSETS:[^=]+=\s*(\{[\s\S]*?\n\};)/);
  const CONTAINER_MODEL_ASSETS = assetMatch ? eval("(" + assetMatch[1].replace(/;\s*$/, "") + ")") : {};

  const modelMatrix = [];
  for (const m of CONTAINER_MODELS) {
    const asset = CONTAINER_MODEL_ASSETS[m.id];
    let assetStatus = "UNKNOWN";
    if (asset?.src) {
      const res = await fetchUrl(asset.src, "GET");
      assetStatus = res.status === 200 || res.status === 304 ? "HTTP 200 OK" : `HTTP ${res.status}`;
    }
    modelMatrix.push({
      id: m.id,
      name: m.name,
      nominal: m.nominalSize,
      maxPayload: m.maxPayload,
      cubicCapacity: m.cubicCapacity,
      stackingTestLoad: m.stackingTestLoad,
      imageSrc: asset?.src || "N/A",
      assetStatus
    });
  }

  // Step 7: Summary & Compilation
  const brokenRoutes = [];
  for (const [p, res] of pageStatusCache.entries()) {
    if (res.status === 404 || res.status >= 500 || res.error) {
      brokenRoutes.push({ path: p, status: res.status, error: res.error });
    }
  }

  const brokenAnchors = anchorResults.filter(a => !a.exists);
  const brokenAssets = assetResults.filter(a => !a.ok);

  console.log("\n=================== CRAWL AUDIT REPORT ===================");
  console.log(`Canonical Routes Scanned: ${CANONICAL_ROUTES.length} (All HTTP 200: ${CANONICAL_ROUTES.every(r => pageStatusCache.get(r)?.status === 200)})`);
  console.log(`Exact SEO Title Match: ${routeAuditResults.filter(r => r.titleMatch).length} / ${CANONICAL_ROUTES.length}`);
  console.log(`Exact Visible H1 Match: ${routeAuditResults.filter(r => r.h1Match).length} / ${CANONICAL_ROUTES.length}`);
  console.log(`Legacy Routes Tested: ${LEGACY_ROUTES.length} (All 301 Redirect: ${LEGACY_ROUTES.every(r => pageStatusCache.get(r)?.status === 301)})`);
  console.log(`Total Interactive Links Scanned: ${discoveredLinks.length}`);
  console.log(`Unique Internal Destinations: ${internalDestinations.size}`);
  console.log(`Broken Internal Routes (404/500): ${brokenRoutes.length}`);
  console.log(`Hash Anchors Tested: ${anchorResults.length}`);
  console.log(`Broken Hash Anchors: ${brokenAnchors.length}`);
  console.log(`Static Assets & Docs Checked: ${uniqueAssetUrls.length}`);
  console.log(`Broken Static Assets: ${brokenAssets.length}`);
  console.log("==========================================================\n");

  const fullReport = {
    summary: {
      canonicalCount: CANONICAL_ROUTES.length,
      canonicalAll200: CANONICAL_ROUTES.every(r => pageStatusCache.get(r)?.status === 200),
      exactTitleMatches: routeAuditResults.filter(r => r.titleMatch).length,
      exactH1Matches: routeAuditResults.filter(r => r.h1Match).length,
      legacyCount: LEGACY_ROUTES.length,
      legacyAll301: LEGACY_ROUTES.every(r => pageStatusCache.get(r)?.status === 301),
      anchorsTested: anchorResults.length,
      anchorsBroken: brokenAnchors.length,
      assetsChecked: uniqueAssetUrls.length,
      assetsBroken: brokenAssets.length
    },
    routeAuditResults,
    legacyResults,
    modelMatrix,
    assetResults,
    brokenAnchors,
    brokenAssets,
    brokenRoutes
  };

  fs.writeFileSync(
    path.join(__dirname, "crawl_audit_result.json"),
    JSON.stringify(fullReport, null, 2)
  );

  console.log("Saved full audit results to crawl_audit_result.json");
}

runAudit().catch(err => {
  console.error("Fatal audit error:", err);
  process.exit(1);
});
