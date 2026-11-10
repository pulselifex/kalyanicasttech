import { describe, it, expect } from "vitest";
import { pageHead, pages } from "@/content/site";
import {
  CANONICAL_DOMAIN,
  PRIMARY_CANONICAL_ROUTES,
  resolveCanonicalUrl,
  isRouteIndexable,
  getRouteSocialImage,
  generateStructuredData,
} from "@/content/seo-metadata";

describe("WP-5B.25A: SEO, Indexability & Structured Data Architecture", () => {
  it("enforces exact 27 verified indexable canonical routes", () => {
    expect(PRIMARY_CANONICAL_ROUTES).toHaveLength(27);
  });

  it("resolves canonical URLs to canonical production domain https://kalyanicasttech.com with self-referencing canonicals", () => {
    expect(resolveCanonicalUrl("/")).toBe("https://kalyanicasttech.com/");
    expect(resolveCanonicalUrl("/about-us")).toBe("https://kalyanicasttech.com/about-us");
    expect(resolveCanonicalUrl("/facilities")).toBe("https://kalyanicasttech.com/facilities");
    expect(resolveCanonicalUrl("/products-applications")).toBe(
      "https://kalyanicasttech.com/products-applications"
    );
    expect(resolveCanonicalUrl("/shivlakha-rail-logistics/gati-shakti-terminal")).toBe(
      "https://kalyanicasttech.com/shivlakha-rail-logistics/gati-shakti-terminal"
    );
    expect(resolveCanonicalUrl("/shivlakha-rail-logistics/cargo-opportunities")).toBe(
      "https://kalyanicasttech.com/shivlakha-rail-logistics/cargo-opportunities"
    );
    expect(resolveCanonicalUrl("/investors/financial-information")).toBe(
      "https://kalyanicasttech.com/investors/financial-information"
    );
    expect(resolveCanonicalUrl("/investors/stock-exchange-disclosures")).toBe(
      "https://kalyanicasttech.com/investors/stock-exchange-disclosures"
    );
    expect(resolveCanonicalUrl("/resources/quality-certifications")).toBe(
      "https://kalyanicasttech.com/resources/quality-certifications"
    );
    expect(resolveCanonicalUrl("/resources/corporate-profile-brochures")).toBe(
      "https://kalyanicasttech.com/resources/corporate-profile-brochures"
    );
  });

  it("consolidates duplicate subpages to primary canonical targets", () => {
    expect(resolveCanonicalUrl("/company/our-journey")).toBe(
      "https://kalyanicasttech.com/our-journey"
    );
    expect(resolveCanonicalUrl("/containers-solutions/standard-containers")).toBe(
      "https://kalyanicasttech.com/products-applications"
    );
    expect(resolveCanonicalUrl("/manufacturing/container-manufacturing")).toBe(
      "https://kalyanicasttech.com/manufacturing"
    );
    expect(resolveCanonicalUrl("/manufacturing/design-engineering")).toBe(
      "https://kalyanicasttech.com/engineering-quality"
    );
  });

  it("marks primary routes indexable and duplicate subpages as non-indexable", () => {
    expect(isRouteIndexable("/")).toBe(true);
    expect(isRouteIndexable("/facilities")).toBe(true);
    expect(isRouteIndexable("/investors/financial-information")).toBe(true);
    expect(isRouteIndexable("/resources/quality-certifications")).toBe(true);
    expect(isRouteIndexable("/shivlakha-rail-logistics/cargo-opportunities")).toBe(true);

    expect(isRouteIndexable("/company/our-journey")).toBe(false);
    expect(isRouteIndexable("/containers-solutions/standard-containers")).toBe(false);
    expect(isRouteIndexable("/manufacturing/container-manufacturing")).toBe(false);
    expect(isRouteIndexable("/resources/product-data-sheets")).toBe(false);
  });

  it("provides complete Open Graph, Twitter cards and JSON-LD schemas across all 27 canonical routes", () => {
    for (const route of PRIMARY_CANONICAL_ROUTES) {
      const head = pageHead(route);

      // Canonical link
      const canonical = head.links.find((l) => l.rel === "canonical");
      expect(canonical).toBeDefined();
      expect(canonical?.href).toMatch(/^https:\/\/kalyanicasttech\.com/);

      // Title & Meta Description
      const titleObj = head.meta.find((m) => "title" in m);
      const descObj = head.meta.find((m) => "name" in m && m.name === "description");
      expect(titleObj).toBeDefined();
      expect(descObj).toBeDefined();

      const title = (titleObj as any)?.title;
      const desc = (descObj as any)?.content;
      expect(title.length).toBeGreaterThan(15);
      expect(title.length).toBeLessThanOrEqual(70);
      expect(desc.length).toBeGreaterThanOrEqual(120);
      expect(desc.length).toBeLessThanOrEqual(165);

      // Robots directive
      const robotsObj = head.meta.find((m) => "name" in m && m.name === "robots");
      expect(robotsObj).toBeDefined();
      expect((robotsObj as any)?.content).toContain("index, follow");

      // Open Graph Tags
      const ogSite = head.meta.find((m) => "property" in m && (m as any).property === "og:site_name");
      const ogTitle = head.meta.find((m) => "property" in m && (m as any).property === "og:title");
      const ogDesc = head.meta.find((m) => "property" in m && (m as any).property === "og:description");
      const ogUrl = head.meta.find((m) => "property" in m && (m as any).property === "og:url");
      const ogImage = head.meta.find((m) => "property" in m && (m as any).property === "og:image");

      expect((ogSite as any)?.content).toBe("Kalyani Cast Tech Limited");
      expect((ogTitle as any)?.content).toBe(title);
      expect((ogDesc as any)?.content).toBe(desc);
      expect((ogUrl as any)?.content).toBe(canonical?.href);
      expect((ogImage as any)?.content).toMatch(/^https:\/\/kalyanicasttech\.com\/assets\//);

      // Twitter Card Tags
      const twCard = head.meta.find((m) => "name" in m && m.name === "twitter:card");
      const twTitle = head.meta.find((m) => "name" in m && m.name === "twitter:title");
      const twImage = head.meta.find((m) => "name" in m && m.name === "twitter:image");
      expect((twCard as any)?.content).toBe("summary_large_image");
      expect((twTitle as any)?.content).toBe(title);
      expect((twImage as any)?.content).toMatch(/^https:\/\/kalyanicasttech\.com\/assets\//);

      // Structured Data (JSON-LD)
      expect(head.scripts).toBeDefined();
      expect(head.scripts.length).toBeGreaterThanOrEqual(3);

      const parsedSchemas = head.scripts.map((s) => JSON.parse((s as any).children));
      const types = parsedSchemas.map((s) => s["@type"]);

      expect(types).toContain("Corporation");
      expect(types).toContain("WebSite");
      expect(types).toContain("BreadcrumbList");

      // Verify Corporation details
      const corp = parsedSchemas.find((s) => s["@type"] === "Corporation");
      expect(corp.name).toBe("Kalyani Cast Tech Limited");
      expect(corp.identifier.some((id: any) => id.value === "L26990DL2012PLC242760")).toBe(true);
      expect(corp.identifier.some((id: any) => id.value === "544023")).toBe(true);
    }
  });

  it("injects ManufacturingPlant schema specifically on /facilities", () => {
    const head = pageHead("/facilities");
    const parsedSchemas = head.scripts.map((s) => JSON.parse((s as any).children));
    const plant = parsedSchemas.find((s) => s["@type"] === "ManufacturingPlant");
    expect(plant).toBeDefined();
    expect(plant.name).toBe("Rewari Manufacturing Works");
    expect(plant.address.postalCode).toBe("123101");
  });

  it("enforces exact Gati Shakti Terminal naming without Cargo in title and LocalBusiness schema", () => {
    const head = pageHead("/shivlakha-rail-logistics/gati-shakti-terminal");
    const titleObj = head.meta.find((m) => "title" in m);
    expect((titleObj as any)?.title).toBe("Gati Shakti Terminal | Kalyani Cast Tech Limited");

    const parsedSchemas = head.scripts.map((s) => JSON.parse((s as any).children));
    const terminal = parsedSchemas.find((s) => s["@type"] === "LocalBusiness");
    expect(terminal).toBeDefined();
    expect(terminal.name).toBe("Gati Shakti Terminal (Shivlakha)");
    expect(terminal.description).toContain("Operational 30-acre");
  });

  it("ensures no certified NDT overclaim in /engineering-quality meta description", () => {
    const head = pageHead("/engineering-quality");
    const descObj = head.meta.find((m) => "name" in m && m.name === "description");
    const desc = (descObj as any)?.content || "";
    expect(desc.toLowerCase()).not.toContain("certified ndt");
    expect(desc.toLowerCase()).toContain("non-destructive testing (ndt)");
  });

  it("ensures no unapproved Kolkata office exists in /contact meta description", () => {
    const head = pageHead("/contact");
    const descObj = head.meta.find((m) => "name" in m && m.name === "description");
    const desc = (descObj as any)?.content || "";
    expect(desc.toLowerCase()).not.toContain("kolkata");
  });
});
