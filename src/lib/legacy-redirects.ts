/**
 * Authoritative legacy redirect and malicious spam purge handler for Kalyani Cast Tech Limited.
 * Enforces HTTP 301 Moved Permanently for legacy WordPress and router URLs
 * and HTTP 410 Gone for historical injected casino spam URLs.
 */

// Confirmed malicious spam paths from legacy WordPress database breach
export const SPAM_PATTERNS = [/^\/innovations\/online-casino/i, /^\/online-casino/i, /casino/i];

// Mapping of legacy WordPress and router URLs to the canonical routes
export const LEGACY_REDIRECT_MAP: Record<string, string> = {
  // Trailing slash normalizations for canonical routes
  "/about-us/": "/about-us",
  "/our-journey/": "/our-journey",
  "/leadership/": "/leadership",
  "/facilities/": "/facilities",
  "/products-applications/": "/products-applications",
  "/innovation/": "/innovation",
  "/engineering-quality/": "/engineering-quality",
  "/investor-relations/": "/investor-relations",
  "/gallery/": "/gallery",
  "/contact/": "/contact",
  "/manufacturing/": "/manufacturing",
  "/resources/": "/resources",
  "/shivlakha-rail-logistics/": "/shivlakha-rail-logistics",
  "/shivlakha-rail-logistics/gati-shakti-terminal/": "/shivlakha-rail-logistics/gati-shakti-terminal",
  "/shivlakha-rail-logistics/inland-container-terminal/": "/shivlakha-rail-logistics/inland-container-terminal",
  "/shivlakha-rail-logistics/gati-shakti-cargo-terminal": "/shivlakha-rail-logistics/gati-shakti-terminal",
  "/shivlakha-rail-logistics/gati-shakti-cargo-terminal/": "/shivlakha-rail-logistics/gati-shakti-terminal",
  "/shivlakha-rail-logistics/inland-container-depot": "/shivlakha-rail-logistics/inland-container-terminal",
  "/shivlakha-rail-logistics/inland-container-depot/": "/shivlakha-rail-logistics/inland-container-terminal",

  // Legacy route redirections to Canonical Slugs
  "/company": "/about-us",
  "/company/": "/about-us",
  "/company/our-journey": "/our-journey",
  "/company/our-journey/": "/our-journey",
  "/company/leadership": "/leadership",
  "/company/leadership/": "/leadership",
  "/manufacturing/facilities-locations": "/facilities",
  "/manufacturing/facilities-locations/": "/facilities",
  "/containers-solutions": "/products-applications",
  "/containers-solutions/": "/products-applications",
  "/containers-solutions/standard-containers": "/products-applications#standard-iso",
  "/containers-solutions/standard-containers/": "/products-applications#standard-iso",
  "/containers-solutions/specialised-containers": "/products-applications#coiltainers",
  "/containers-solutions/specialised-containers/": "/products-applications#coiltainers",
  "/manufacturing/testing-quality": "/engineering-quality",
  "/manufacturing/testing-quality/": "/engineering-quality",
  "/investors": "/investor-relations",
  "/investors/": "/investor-relations",
  "/business-enquiry": "/contact",
  "/business-enquiry/": "/contact",

  // Corporate & About
  "/about-2": "/about-us",
  "/about-2/": "/about-us",
  "/about": "/about-us",
  "/about/": "/about-us",
  "/innovations": "/innovation",
  "/innovations/": "/innovation",

  // Leadership Profiles -> Dedicated Leadership Route
  "/mr-naresh-kumar": "/leadership",
  "/mr-naresh-kumar/": "/leadership",
  "/mr-devender-kumar": "/leadership",
  "/mr-devender-kumar/": "/leadership",
  "/mr-ratnesh-mahajan": "/leadership",
  "/mr-ratnesh-mahajan/": "/leadership",
  "/mr-javed-aslam": "/leadership",
  "/mr-javed-aslam/": "/leadership",

  // Manufacturing Facilities
  "/manufacturing-facilities": "/manufacturing",
  "/manufacturing-facilities/": "/manufacturing",
  "/manufacturing-facilities-2": "/facilities",
  "/manufacturing-facilities-2/": "/facilities",

  // Products -> Products & Applications
  "/products": "/products-applications",
  "/products/": "/products-applications",
  "/20-feet-hc-container": "/products-applications#standard-iso",
  "/20-feet-hc-container/": "/products-applications#standard-iso",
  "/40-feet-hc-container-2": "/products-applications#standard-iso",
  "/40-feet-hc-container-2/": "/products-applications#standard-iso",
  "/40-feet-side-access-dwarf-container-2": "/products-applications#dwarf",
  "/40-feet-side-access-dwarf-container-2/": "/products-applications#dwarf",
  "/40-feet-open-top-coiltainer": "/products-applications#coiltainers",
  "/40-feet-open-top-coiltainer/": "/products-applications#coiltainers",
  "/40-feet-hc-open-top-coiltainer-40x8x9-5": "/products-applications#coiltainers",
  "/40-feet-hc-open-top-coiltainer-40x8x9-5/": "/products-applications#coiltainers",
  "/40-feet-universal-container-openable-top-40x8x9-5": "/products-applications#coiltainers",
  "/40-feet-universal-container-openable-top-40x8x9-5/": "/products-applications#coiltainers",
  "/42-feet-hc-open-top-coiltainer": "/products-applications#coiltainers",
  "/42-feet-hc-open-top-coiltainer/": "/products-applications#coiltainers",
  "/42-feet-dwarf-open-top-container": "/products-applications#dwarf",
  "/42-feet-dwarf-open-top-container/": "/products-applications#dwarf",
  "/42-feet-hc-open-top-coiltainer-3": "/products-applications#coiltainers",
  "/42-feet-hc-open-top-coiltainer-3/": "/products-applications#coiltainers",
  "/20-feet-tank-containers": "/products-applications#tank-hopper",
  "/20-feet-tank-containers/": "/products-applications#tank-hopper",
  "/hopper-container": "/products-applications#tank-hopper",
  "/hopper-container/": "/products-applications#tank-hopper",

  // Media, Articles & Railway Innovation Posts
  "/media-gallery": "/gallery",
  "/media-gallery/": "/gallery",
  "/indian-railways-new-dwarf-containers-have-67-more-volume-could-be-a-game-changer-in-capturing-high-end-traffic":
    "/products-applications#dwarf",
  "/indian-railways-new-dwarf-containers-have-67-more-volume-could-be-a-game-changer-in-capturing-high-end-traffic/":
    "/products-applications#dwarf",
  "/how-smaller-containers-could-mean-big-business-for-indian-railways":
    "/products-applications#standard-iso",
  "/how-smaller-containers-could-mean-big-business-for-indian-railways/":
    "/products-applications#standard-iso",
  "/indian-railways-zone-operates-its-1st-double-stack-dwarf-container-train-on-these-routes-check-details":
    "/products-applications#dwarf",
  "/indian-railways-zone-operates-its-1st-double-stack-dwarf-container-train-on-these-routes-check-details/":
    "/products-applications#dwarf",
  "/indian-railways-introduces-dwarf-container-service":
    "/products-applications#dwarf",
  "/indian-railways-introduces-dwarf-container-service/":
    "/products-applications#dwarf",
  "/tracks-cleared-for-dwarf-container-movement-between-gujarat-and-maharashtra":
    "/products-applications#dwarf",
  "/tracks-cleared-for-dwarf-container-movement-between-gujarat-and-maharashtra/":
    "/products-applications#dwarf",
  "/out-of-the-box-idea-dwarf-containers-that-can-bring-railways-bulk-revenues":
    "/products-applications#dwarf",
  "/out-of-the-box-idea-dwarf-containers-that-can-bring-railways-bulk-revenues/":
    "/products-applications#dwarf",
  "/railways-cube-containers-on-track-to-slash-supply-chain-cost-by-20-25":
    "/products-applications#cuboid",
  "/railways-cube-containers-on-track-to-slash-supply-chain-cost-by-20-25/":
    "/products-applications#cuboid",

  // Retired / Draft Stubs -> Home
  "/investor-test": "/",
  "/investor-test/": "/",
  "/products-old": "/",
  "/products-old/": "/",
  "/products-old-original": "/",
  "/products-old-original/": "/",
  "/product-new-old": "/",
  "/product-new-old/": "/",
  "/faq": "/",
  "/faq/": "/",
  "/testimonials": "/",
  "/testimonials/": "/",
  "/the-food-project": "/",
  "/the-food-project/": "/",
  "/sample-page": "/",
  "/sample-page/": "/",
  "/7412-2": "/",
  "/7412-2/": "/",
  "/20-feet-hc-side-access": "/products-applications#standard-iso",
  "/20-feet-hc-side-access/": "/products-applications#standard-iso",
  "/40-feet-dwarf-open-top-coiltaner-40x8-5x6-3": "/products-applications#dwarf",
  "/40-feet-dwarf-open-top-coiltaner-40x8-5x6-3/": "/products-applications#dwarf",
  "/42-feet-hc-for-coil-and-tmt-bars": "/products-applications#coiltainers",
  "/42-feet-hc-for-coil-and-tmt-bars/": "/products-applications#coiltainers",
  "/dwarf-boxes-to-move-additional-2-mt-of-annual-cargo-for-railways": "/products-applications#dwarf",
  "/dwarf-boxes-to-move-additional-2-mt-of-annual-cargo-for-railways/": "/products-applications#dwarf",
  "/freight-on-the-front-foot": "/",
  "/freight-on-the-front-foot/": "/",
};

export function handleLegacyRouting(requestUrl: string): Response | null {
  const url = new URL(requestUrl);
  const pathname = url.pathname;

  // 1. Check for malicious spam injection -> Return HTTP 410 Gone immediately
  for (const pattern of SPAM_PATTERNS) {
    if (pattern.test(pathname)) {
      return new Response(
        "HTTP 410 Gone: The requested URL was historical injected spam on legacy systems and has been permanently purged.",
        {
          status: 410,
          statusText: "Gone",
          headers: {
            "content-type": "text/plain; charset=utf-8",
            "X-Robots-Tag": "noindex, nofollow, noarchive",
          },
        },
      );
    }
  }

  // 2. Check for legacy redirects
  const normalizedPath = pathname.endsWith("/") && pathname.length > 1 ? pathname : `${pathname}/`;
  const exactTarget = LEGACY_REDIRECT_MAP[pathname] || LEGACY_REDIRECT_MAP[normalizedPath];

  if (exactTarget && exactTarget !== pathname) {
    const destination = new URL(exactTarget, url.origin);
    return new Response(null, {
      status: 301,
      statusText: "Moved Permanently",
      headers: {
        Location: destination.toString(),
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  }

  return null;
}
