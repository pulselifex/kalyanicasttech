/**
 * Centralised SEO, SMO (Social Media Optimisation), and AIEO (AI Engine Optimisation)
 * metadata registry and structured data generator for Kalyani Cast Tech Limited.
 * 
 * Enforces strict canonicalization to https://kalyanicasttech.com, comprehensive Open Graph &
 * Twitter cards, valid JSON-LD schemas (Corporation, WebSite, BreadcrumbList, ManufacturingPlant),
 * and precise robots indexability directives based on genuine content and search intent.
 */

export const CANONICAL_DOMAIN = "https://kalyanicasttech.com";

/**
 * Exactly 27 verified, high-value indexable canonical routes with unique content,
 * distinct search intent, and self-referencing canonical URLs.
 */
export const PRIMARY_CANONICAL_ROUTES = [
  // Primary Corporate & Division Hubs
  "/",
  "/about-us",
  "/our-journey",
  "/leadership",
  "/manufacturing",
  "/facilities",
  "/products-applications",
  "/innovation",
  "/engineering-quality",
  "/investor-relations",
  "/gallery",
  "/contact",
  "/resources",

  // Shivlakha Multimodal Platform & Logistics Services
  "/shivlakha-rail-logistics",
  "/shivlakha-rail-logistics/gati-shakti-terminal",
  "/shivlakha-rail-logistics/inland-container-terminal",
  "/shivlakha-rail-logistics/cargo-opportunities",

  // Resources Dedicated Verification Hubs
  "/resources/quality-certifications",
  "/resources/corporate-profile-brochures",
  "/resources/news-media",

  // Statutory Investor Relations Subpages
  "/investors/financial-information",
  "/investors/stock-exchange-disclosures",
  "/investors/corporate-governance",
  "/investors/shareholder-information",
  "/investors/ipo-corporate-actions",
  "/investors/investor-grievance-contact",
  "/investors/meetings-presentations",
] as const;

export type PrimaryCanonicalRoute = typeof PRIMARY_CANONICAL_ROUTES[number];

/** Maps duplicate subpages or 301 redirects to their primary canonical destination */
export const CANONICAL_TARGET_MAP: Record<string, string> = {
  // Legacy / Duplicate subpages consolidated to primary canonical pages
  "/company/our-journey": "/our-journey",
  "/company/our-business": "/about-us",
  "/containers-solutions/standard-containers": "/products-applications",
  "/containers-solutions/specialised-containers": "/products-applications",
  "/containers-solutions/rail-parcel-vehicle-cargo": "/products-applications",
  "/containers-solutions/application-specific-designs": "/products-applications",
  "/containers-solutions/technical-data-sheets": "/products-applications",
  "/manufacturing/container-manufacturing": "/manufacturing",
  "/manufacturing/design-engineering": "/engineering-quality",

  // 301 Server Redirects
  "/company": "/about-us",
  "/company/": "/about-us",
  "/company/leadership": "/leadership",
  "/containers-solutions": "/products-applications",
  "/containers-solutions/": "/products-applications",
  "/manufacturing/facilities-locations": "/facilities",
  "/manufacturing/testing-quality": "/engineering-quality",
  "/investors": "/investor-relations",
  "/investors/": "/investor-relations",
  "/business-enquiry": "/contact",
  "/business-enquiry/": "/contact",
  "/shivlakha-rail-logistics/gati-shakti-cargo-terminal": "/shivlakha-rail-logistics/gati-shakti-terminal",
  "/shivlakha-rail-logistics/gati-shakti-cargo-terminal/": "/shivlakha-rail-logistics/gati-shakti-terminal",
  "/shivlakha-rail-logistics/inland-container-depot": "/shivlakha-rail-logistics/inland-container-terminal",
  "/shivlakha-rail-logistics/inland-container-depot/": "/shivlakha-rail-logistics/inland-container-terminal",
};

/** Resolve the canonical URL for any given path, consolidating aliases to primary pages */
export function resolveCanonicalUrl(path: string = "/"): string {
  const cleanPath = path.split("?")[0].split("#")[0].replace(/\/+$/, "") || "/";
  const mappedTarget = CANONICAL_TARGET_MAP[cleanPath] || cleanPath;
  if (mappedTarget === "/" || mappedTarget === "") {
    return `${CANONICAL_DOMAIN}/`;
  }
  return `${CANONICAL_DOMAIN}${mappedTarget.startsWith("/") ? mappedTarget : `/${mappedTarget}`}`;
}

/** Determines whether a URL is a primary indexable page or should be tagged noindex */
export function isRouteIndexable(path: string = "/"): boolean {
  const cleanPath = path.split("?")[0].split("#")[0].replace(/\/+$/, "") || "/";
  return (PRIMARY_CANONICAL_ROUTES as readonly string[]).includes(cleanPath);
}

export interface OgImageMetadata {
  url: string;
  alt: string;
  width: number;
  height: number;
  type: string;
}

/** High-contrast authentic social preview assets mapped by route */
export function getRouteSocialImage(path: string = "/"): OgImageMetadata {
  const cleanPath = path.split("?")[0].split("#")[0].replace(/\/+$/, "") || "/";

  switch (cleanPath) {
    case "/our-journey":
      return {
        url: `${CANONICAL_DOMAIN}/assets/company/2016-Indian-Railways-Plan-to-Introduce-Dwarf-ContainersDesigned-and-Developed-by-Shri-Naresh-Kumar-Director-Kalyani-Cast-Tech.jpg`,
        alt: "Kalyani Cast Tech Corporate Evolution & Dwarf Container Milestone",
        width: 1200,
        height: 630,
        type: "image/jpeg",
      };
    case "/leadership":
      return {
        url: `${CANONICAL_DOMAIN}/assets/leadership/naresh-kumar.jpeg`,
        alt: "Mr. Naresh Kumar, Chairman & Managing Director, Kalyani Cast Tech Limited",
        width: 1200,
        height: 630,
        type: "image/jpeg",
      };
    case "/manufacturing":
      return {
        url: `${CANONICAL_DOMAIN}/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg`,
        alt: "Kalyani Cast Tech Manufacturing Division - Heavy Fabrication Hall",
        width: 1200,
        height: 630,
        type: "image/png",
      };
    case "/facilities":
      return {
        url: `${CANONICAL_DOMAIN}/assets/manufacturing/Rewari%20Kalyani%20Casttech.png`,
        alt: "Rewari Works Principal Manufacturing Plant - Rewari, Haryana",
        width: 1200,
        height: 630,
        type: "image/png",
      };
    case "/products-applications":
      return {
        url: `${CANONICAL_DOMAIN}/assets/containers/ISO%20Container.png`,
        alt: "Freight Containers and Industrial Castings Catalogue - Kalyani Cast Tech Limited",
        width: 1200,
        height: 630,
        type: "image/png",
      };
    case "/innovation":
      return {
        url: `${CANONICAL_DOMAIN}/assets/containers/product-40ft-dwarf-side-access-01.png`,
        alt: "Specialised Double-Stack Dwarf Container Engineering - Kalyani Cast Tech",
        width: 1200,
        height: 630,
        type: "image/jpeg",
      };
    case "/engineering-quality":
      return {
        url: `${CANONICAL_DOMAIN}/assets/manufacturing/manufacturing-container-mig-welding-01.jpg`,
        alt: "In-House Structural Load Testing and Quality Assurance Rig at Rewari Works",
        width: 1200,
        height: 630,
        type: "image/png",
      };
    case "/gallery":
      return {
        url: `${CANONICAL_DOMAIN}/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg`,
        alt: "Authentic Visual Archive: Plants, Products, and Terminal Operations",
        width: 1200,
        height: 630,
        type: "image/png",
      };
    case "/shivlakha-rail-logistics":
    case "/shivlakha-rail-logistics/gati-shakti-terminal":
      return {
        url: `${CANONICAL_DOMAIN}/assets/shivlakha/terminal-shivlakha-rake-handling-01.jpg`,
        alt: "Operational Gati Shakti Terminal at Shivlakha, Kachchh, Gujarat",
        width: 1200,
        height: 630,
        type: "image/jpeg",
      };
    case "/shivlakha-rail-logistics/inland-container-terminal":
      return {
        url: `${CANONICAL_DOMAIN}/assets/shivlakha/shivlakha-isometric-masterplan.jpg`,
        alt: "Inland Container Terminal Under Development at Shivlakha, Kachchh - CBIC Approved",
        width: 1200,
        height: 630,
        type: "image/jpeg",
      };
    case "/shivlakha-rail-logistics/cargo-opportunities":
      return {
        url: `${CANONICAL_DOMAIN}/assets/shivlakha/terminal-shivlakha-rake-handling-01.jpg`,
        alt: "Rail Route & Cargo Evaluation Consultation - Shivlakha Multimodal Platform",
        width: 1200,
        height: 630,
        type: "image/jpeg",
      };
    case "/resources/quality-certifications":
      return {
        url: `${CANONICAL_DOMAIN}/assets/manufacturing/manufacturing-container-mig-welding-01.jpg`,
        alt: "Quality Documents, Technical Approvals & Lloyd's Register EMEA Class A Foundry Certification",
        width: 1200,
        height: 630,
        type: "image/png",
      };
    case "/resources/corporate-profile-brochures":
      return {
        url: `${CANONICAL_DOMAIN}/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg`,
        alt: "Kalyani Cast Tech Limited Approved Corporate Profile & Brochure Library",
        width: 1200,
        height: 630,
        type: "image/png",
      };
    case "/resources/news-media":
      return {
        url: `${CANONICAL_DOMAIN}/assets/containers/ISO%20Container.png`,
        alt: "Kalyani Cast Tech Limited - Double-Stack Dwarf Container Trials & Media Releases",
        width: 1200,
        height: 630,
        type: "image/png",
      };
    case "/investors/financial-information":
    case "/investors/stock-exchange-disclosures":
    case "/investors/corporate-governance":
    case "/investors/shareholder-information":
    case "/investors/ipo-corporate-actions":
    case "/investors/investor-grievance-contact":
    case "/investors/meetings-presentations":
    case "/investor-relations":
      return {
        url: `${CANONICAL_DOMAIN}/assets/manufacturing/Rewari%20Kalyani%20Casttech.png`,
        alt: "Kalyani Cast Tech Limited - Statutory Governance & Investor Gateway",
        width: 1200,
        height: 630,
        type: "image/png",
      };
    default:
      return {
        url: `${CANONICAL_DOMAIN}/assets/manufacturing/Rewari%20Kalyani%20Casttech.png`,
        alt: "Kalyani Cast Tech Limited - Industrial Container & Precision Casting Manufacturer",
        width: 1200,
        height: 630,
        type: "image/png",
      };
  }
}

/** Breadcrumb navigation items based on actual routing hierarchy */
export function getRouteBreadcrumbs(path: string = "/") {
  const cleanPath = path.split("?")[0].split("#")[0].replace(/\/+$/, "") || "/";
  if (cleanPath === "/") {
    return [
      { name: "Home", item: `${CANONICAL_DOMAIN}/` },
    ];
  }

  const items = [{ name: "Home", item: `${CANONICAL_DOMAIN}/` }];

  // Manufacturing hierarchy
  if (cleanPath === "/facilities") {
    items.push({ name: "Manufacturing", item: `${CANONICAL_DOMAIN}/manufacturing` });
    items.push({ name: "Manufacturing Facilities", item: `${CANONICAL_DOMAIN}/facilities` });
  } else if (cleanPath === "/products-applications") {
    items.push({ name: "Manufacturing", item: `${CANONICAL_DOMAIN}/manufacturing` });
    items.push({ name: "Products & Applications", item: `${CANONICAL_DOMAIN}/products-applications` });
  } else if (cleanPath === "/innovation") {
    items.push({ name: "Manufacturing", item: `${CANONICAL_DOMAIN}/manufacturing` });
    items.push({ name: "Innovation", item: `${CANONICAL_DOMAIN}/innovation` });
  } else if (cleanPath === "/engineering-quality") {
    items.push({ name: "Manufacturing", item: `${CANONICAL_DOMAIN}/manufacturing` });
    items.push({ name: "Engineering & Quality", item: `${CANONICAL_DOMAIN}/engineering-quality` });
  } 
  // Shivlakha Platform hierarchy
  else if (cleanPath === "/shivlakha-rail-logistics/gati-shakti-terminal") {
    items.push({ name: "Shivlakha", item: `${CANONICAL_DOMAIN}/shivlakha-rail-logistics` });
    items.push({ name: "Gati Shakti Terminal", item: `${CANONICAL_DOMAIN}/shivlakha-rail-logistics/gati-shakti-terminal` });
  } else if (cleanPath === "/shivlakha-rail-logistics/inland-container-terminal") {
    items.push({ name: "Shivlakha", item: `${CANONICAL_DOMAIN}/shivlakha-rail-logistics` });
    items.push({ name: "Inland Container Terminal", item: `${CANONICAL_DOMAIN}/shivlakha-rail-logistics/inland-container-terminal` });
  } else if (cleanPath === "/shivlakha-rail-logistics/cargo-opportunities") {
    items.push({ name: "Shivlakha", item: `${CANONICAL_DOMAIN}/shivlakha-rail-logistics` });
    items.push({ name: "Rail Route & Cargo Evaluation", item: `${CANONICAL_DOMAIN}/shivlakha-rail-logistics/cargo-opportunities` });
  }
  // Resources hierarchy
  else if (cleanPath.startsWith("/resources/")) {
    items.push({ name: "Resources", item: `${CANONICAL_DOMAIN}/resources` });
    const resLabels: Record<string, string> = {
      "/resources/quality-certifications": "Quality Documents & Certificates",
      "/resources/corporate-profile-brochures": "Corporate Profile & Brochures",
      "/resources/news-media": "News & Railway Trials",
      "/resources/product-data-sheets": "Product Data Sheets",
    };
    items.push({
      name: resLabels[cleanPath] || "Documents",
      item: `${CANONICAL_DOMAIN}${cleanPath}`,
    });
  }
  // Investor Relations hierarchy
  else if (cleanPath.startsWith("/investors/")) {
    items.push({ name: "Investor Relations", item: `${CANONICAL_DOMAIN}/investor-relations` });
    const invLabels: Record<string, string> = {
      "/investors/financial-information": "Financial Information",
      "/investors/stock-exchange-disclosures": "Stock Exchange Disclosures",
      "/investors/corporate-governance": "Corporate Governance",
      "/investors/shareholder-information": "Shareholder Information",
      "/investors/ipo-corporate-actions": "IPO & Corporate Actions",
      "/investors/investor-grievance-contact": "Investor Grievance Contact",
      "/investors/meetings-presentations": "Meetings & Presentations",
    };
    items.push({
      name: invLabels[cleanPath] || "Investor Disclosures",
      item: `${CANONICAL_DOMAIN}${cleanPath}`,
    });
  }
  // Standalone canonical pages
  else {
    const titles: Record<string, string> = {
      "/about-us": "About Kalyani",
      "/our-journey": "Our Journey",
      "/leadership": "Board & Management",
      "/manufacturing": "Manufacturing",
      "/investor-relations": "Investor Relations",
      "/gallery": "Gallery",
      "/shivlakha-rail-logistics": "Shivlakha",
      "/contact": "Contact",
      "/resources": "Resources",
    };
    items.push({ name: titles[cleanPath] || "Overview", item: `${CANONICAL_DOMAIN}${cleanPath}` });
  }

  return items;
}

/** Structured JSON-LD schemas validating corporate identity, breadcrumbs and facilities */
export function generateStructuredData(path: string = "/") {
  const canonicalUrl = resolveCanonicalUrl(path);
  const breadcrumbItems = getRouteBreadcrumbs(path);

  // 1. Corporation Entity Schema
  const corporationSchema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "@id": `${CANONICAL_DOMAIN}/#corporation`,
    name: "Kalyani Cast Tech Limited",
    legalName: "Kalyani Cast Tech Limited",
    alternateName: "Kalyani Cast Tech",
    url: `${CANONICAL_DOMAIN}/`,
    logo: `${CANONICAL_DOMAIN}/favicon.png`,
    description:
      "Indian manufacturer of freight containers, specialised cargo equipment, and precision castings at Rewari Works, Haryana, with multimodal terminal operations at Shivlakha, Kachchh, Gujarat.",
    identifier: [
      {
        "@type": "PropertyValue",
        name: "CIN",
        value: "L26990DL2012PLC242760",
      },
      {
        "@type": "PropertyValue",
        name: "BSE Scrip Code",
        value: "544023",
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "B-144, Second Floor, DDA Shed, Phase-1, Okhla Industrial Area Phase-1",
      addressLocality: "New Delhi",
      postalCode: "110020",
      addressCountry: "IN",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-9650891119",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+91-9711735302",
        email: "cs@kalyanicasttech.com",
        contactType: "investor relations",
        areaServed: "IN",
      },
    ],
    sameAs: [
      "https://www.bseindia.com/stock-share-price/kalyani-cast-tech-ltd/kct/544023/",
      "https://www.youtube.com/watch?v=7CTzRhpazSQ",
    ],
  };

  // 2. WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${CANONICAL_DOMAIN}/#website`,
    name: "Kalyani Cast Tech Limited",
    url: `${CANONICAL_DOMAIN}/`,
    publisher: {
      "@id": `${CANONICAL_DOMAIN}/#corporation`,
    },
    inLanguage: "en-IN",
  };

  // 3. BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };

  const schemas: any[] = [corporationSchema, websiteSchema, breadcrumbSchema];

  const cleanPath = path.split("?")[0].split("#")[0].replace(/\/+$/, "") || "/";

  // Route-specific schemas
  if (cleanPath === "/facilities") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ManufacturingPlant",
      name: "Rewari Manufacturing Works",
      parentOrganization: {
        "@id": `${CANONICAL_DOMAIN}/#corporation`,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Village Mamaria Thethar, Tehsil Khol",
        addressLocality: "Rewari",
        addressRegion: "Haryana",
        postalCode: "123101",
        addressCountry: "IN",
      },
      telephone: "+91-9650891119",
      description:
        "Principal manufacturing facility of Kalyani Cast Tech Limited housing container fabrication sheds, dual induction furnaces, and structural load testing rigs.",
    });
  } else if (cleanPath === "/shivlakha-rail-logistics/gati-shakti-terminal") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Gati Shakti Terminal (Shivlakha)",
      parentOrganization: {
        "@id": `${CANONICAL_DOMAIN}/#corporation`,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Khasra No. 438, Village Shivlakha, Taluka Bhachau",
        addressLocality: "Kachchh",
        addressRegion: "Gujarat",
        postalCode: "370145",
        addressCountry: "IN",
      },
      description:
        "Operational 30-acre rail-linked Gati Shakti Terminal inaugurated on 15 September 2026, handling bulk cargo, general commodities, and industrial container movements.",
    });
  } else if (cleanPath === "/contact" || cleanPath === "/investors/investor-grievance-contact") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: cleanPath === "/contact" ? "Contact & Commercial Enquiry" : "Investor Grievance & Compliance Desk",
      url: canonicalUrl,
      mainEntity: {
        "@id": `${CANONICAL_DOMAIN}/#corporation`,
      },
    });
  } else if (cleanPath === "/about-us") {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: "About Kalyani Cast Tech Limited",
      url: canonicalUrl,
      mainEntity: {
        "@id": `${CANONICAL_DOMAIN}/#corporation`,
      },
    });
  }

  return schemas;
}
