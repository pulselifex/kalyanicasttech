import { describe, it, expect } from "vitest";
import { handleLegacyRouting, SPAM_PATTERNS, LEGACY_REDIRECT_MAP } from "@/lib/legacy-redirects";

describe("Legacy URL Redirects and 410 Spam Purge Router", () => {
  it("purges confirmed historical casino spam with HTTP 410 Gone", () => {
    const spamUrls = [
      "https://kalyanicasttech.com/innovations/online-casino-cz/",
      "https://kalyanicasttech.com/innovations/online-casino-ru/",
      "https://kalyanicasttech.com/innovations/online-casino-hu/",
      "https://kalyanicasttech.com/innovations/online-casino-pl/",
      "https://kalyanicasttech.com/online-casino-free-spins/",
    ];

    for (const url of spamUrls) {
      const res = handleLegacyRouting(url);
      expect(res).not.toBeNull();
      expect(res?.status).toBe(410);
      expect(res?.statusText).toBe("Gone");
      expect(res?.headers.get("X-Robots-Tag")).toBe("noindex, nofollow, noarchive");
    }
  });

  it("redirects legacy director profile URLs to /leadership with HTTP 301", () => {
    const directorUrls = [
      "/mr-naresh-kumar/",
      "/mr-devender-kumar/",
      "/mr-ratnesh-mahajan/",
      "/mr-javed-aslam/",
      "/mr-naresh-kumar",
    ];

    for (const path of directorUrls) {
      const res = handleLegacyRouting(`https://kalyanicasttech.com${path}`);
      expect(res).not.toBeNull();
      expect(res?.status).toBe(301);
      expect(res?.headers.get("Location")).toBe("https://kalyanicasttech.com/leadership");
    }
  });

  it("redirects core corporate and product URLs with HTTP 301 to canonical routes", () => {
    const testCases: [string, string][] = [
      ["/about-2/", "/about-us"],
      ["/company/our-journey/", "/our-journey"],
      ["/manufacturing-facilities/", "/manufacturing"],
      ["/manufacturing-facilities-2/", "/facilities"],
      ["/products/", "/products-applications"],
      ["/media-gallery/", "/gallery"],
      ["/innovations/", "/innovation"],
    ];

    for (const [oldPath, expectedDest] of testCases) {
      const res = handleLegacyRouting(`https://kalyanicasttech.com${oldPath}`);
      expect(res).not.toBeNull();
      expect(res?.status).toBe(301);
      expect(res?.headers.get("Location")).toBe(`https://kalyanicasttech.com${expectedDest}`);
    }
  });

  it("redirects retired draft stubs to homepage with HTTP 301", () => {
    const retiredPaths = [
      "/investor-test/",
      "/products-old/",
      "/sample-page/",
      "/the-food-project/",
    ];

    for (const path of retiredPaths) {
      const res = handleLegacyRouting(`https://kalyanicasttech.com${path}`);
      expect(res).not.toBeNull();
      expect(res?.status).toBe(301);
      expect(res?.headers.get("Location")).toBe("https://kalyanicasttech.com/");
    }
  });

  it("redirects legacy route slugs to the 11 canonical routes with HTTP 301", () => {
    const legacyRoutes: [string, string][] = [
      ["/company/", "/about-us"],
      ["/company", "/about-us"],
      ["/company/leadership/", "/leadership"],
      ["/company/leadership", "/leadership"],
      ["/manufacturing/facilities-locations/", "/facilities"],
      ["/manufacturing/facilities-locations", "/facilities"],
      ["/containers-solutions/", "/products-applications"],
      ["/containers-solutions", "/products-applications"],
      ["/manufacturing/testing-quality/", "/engineering-quality"],
      ["/manufacturing/testing-quality", "/engineering-quality"],
      ["/investors/", "/investor-relations"],
      ["/investors", "/investor-relations"],
      ["/business-enquiry/", "/contact"],
      ["/business-enquiry", "/contact"],
    ];

    for (const [legacyPath, canonicalDest] of legacyRoutes) {
      const res = handleLegacyRouting(`https://kalyanicasttech.com${legacyPath}`);
      expect(res).not.toBeNull();
      expect(res?.status).toBe(301);
      expect(res?.headers.get("Location")).toBe(`https://kalyanicasttech.com${canonicalDest}`);
    }
  });

  it("normalizes trailing slashes for canonical routes with HTTP 301", () => {
    const trailingSlashPaths: [string, string][] = [
      ["/about-us/", "/about-us"],
      ["/our-journey/", "/our-journey"],
      ["/leadership/", "/leadership"],
      ["/facilities/", "/facilities"],
      ["/products-applications/", "/products-applications"],
      ["/innovation/", "/innovation"],
      ["/engineering-quality/", "/engineering-quality"],
      ["/investor-relations/", "/investor-relations"],
      ["/gallery/", "/gallery"],
      ["/contact/", "/contact"],
      ["/manufacturing/", "/manufacturing"],
      ["/resources/", "/resources"],
      ["/shivlakha-rail-logistics/", "/shivlakha-rail-logistics"],
    ];

    for (const [slashPath, cleanDest] of trailingSlashPaths) {
      const res = handleLegacyRouting(`https://kalyanicasttech.com${slashPath}`);
      expect(res).not.toBeNull();
      expect(res?.status).toBe(301);
      expect(res?.headers.get("Location")).toBe(`https://kalyanicasttech.com${cleanDest}`);
    }
  });

  it("passes through valid canonical routes without intercepting", () => {
    const validCanonicalPaths = [
      "/",
      "/about-us",
      "/our-journey",
      "/leadership",
      "/manufacturing",
      "/facilities",
      "/products-applications",
      "/innovation",
      "/engineering-quality",
      "/shivlakha-rail-logistics",
      "/gallery",
      "/resources",
      "/investor-relations",
      "/contact",
    ];

    for (const path of validCanonicalPaths) {
      const res = handleLegacyRouting(`https://kalyanicasttech.com${path}`);
      expect(res).toBeNull();
    }
  });
});
