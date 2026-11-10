import pagesData from "./pages.json";
import { getCanonicalUrl } from "./site-config";
import {
  resolveCanonicalUrl,
  isRouteIndexable,
  getRouteSocialImage,
  generateStructuredData,
} from "./seo-metadata";

export type Block = { p?: string; li?: string };
export type Section = { heading: string; body: Block[] };
export type PageContent = {
  area: string;
  name: string;
  url: string;
  seoTitle: string;
  meta: string;
  h1: string;
  hero?: string;
  sections: Section[];
  primaryCta?: string;
  secondaryCta?: string;
  links: { label: string; to: string }[];
  visual?: string;
};

export const pages = pagesData as PageContent[];

export function getPage(url: string): PageContent {
  const page = pages.find((p) => p.url === url);
  if (!page) throw new Error(`No content for ${url}`);
  return page;
}

export function pageHead(url: string) {
  const p = getPage(url);
  const canonicalHref = resolveCanonicalUrl(url);
  const indexable = isRouteIndexable(url);
  const socialImg = getRouteSocialImage(url);
  const schemas = generateStructuredData(url);

  return {
    links: [
      {
        rel: "canonical",
        href: canonicalHref,
      },
    ],
    meta: [
      { title: p.seoTitle },
      { name: "description", content: p.meta },
      {
        name: "robots",
        content: indexable
          ? "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
          : "noindex, follow",
      },
      // Open Graph
      { property: "og:site_name", content: "Kalyani Cast Tech Limited" },
      { property: "og:title", content: p.seoTitle },
      { property: "og:description", content: p.meta },
      { property: "og:url", content: canonicalHref },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: socialImg.url },
      { property: "og:image:width", content: String(socialImg.width) },
      { property: "og:image:height", content: String(socialImg.height) },
      { property: "og:image:alt", content: socialImg.alt },
      { property: "og:image:type", content: socialImg.type },
      // Twitter / X
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: p.seoTitle },
      { name: "twitter:description", content: p.meta },
      { name: "twitter:image", content: socialImg.url },
      { name: "twitter:image:alt", content: socialImg.alt },
    ],
    scripts: schemas.map((schema) => ({
      type: "application/ld+json",
      children: JSON.stringify(schema),
    })),
  };
}

export type NavGroup = { label: string; to: string; children: { label: string; to: string }[] };
export type NavItem = { label: string; to: string; children?: { label: string; to: string }[] };

/**
 * Approved Primary Navigation Hierarchy per Section 2:
 * 1. About Kalyani
 * 2. Our Journey
 * 3. Board & Management
 * 4. Manufacturing (Dropdown: Facilities, Capabilities & Products, Innovation, Engineering & Quality)
 * 5. Investors
 * 6. Gallery
 * 7. Shivlakha
 * 8. Contact
 */
export const mainNavItems: NavItem[] = [
  {
    label: "About Kalyani",
    to: "/about-us",
  },
  {
    label: "Our Journey",
    to: "/our-journey",
  },
  {
    label: "Board & Management",
    to: "/leadership",
  },
  {
    label: "Manufacturing",
    to: "/manufacturing",
    children: [
      { label: "Manufacturing Facilities", to: "/facilities" },
      { label: "Manufacturing Capabilities & Products", to: "/products-applications" },
      { label: "Innovation", to: "/innovation" },
      { label: "Engineering & Quality", to: "/engineering-quality" },
    ],
  },
  {
    label: "Investors",
    to: "/investor-relations",
  },
  {
    label: "Gallery",
    to: "/gallery",
  },
  {
    label: "Shivlakha",
    to: "/shivlakha-rail-logistics",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];

// Preserved for backwards compatibility with any legacy components/tests
export const navGroups: NavGroup[] = [
  {
    label: "Company",
    to: "/about-us",
    children: [
      { label: "About Kalyani", to: "/about-us" },
      { label: "Our Journey", to: "/our-journey" },
      { label: "Board & Management", to: "/leadership" },
    ],
  },
  {
    label: "Manufacturing",
    to: "/manufacturing",
    children: [
      { label: "Manufacturing Facilities", to: "/facilities" },
      { label: "Manufacturing Capabilities & Products", to: "/products-applications" },
      { label: "Innovation", to: "/innovation" },
      { label: "Engineering & Quality", to: "/engineering-quality" },
    ],
  },
  {
    label: "Shivlakha",
    to: "/shivlakha-rail-logistics",
    children: [],
  },
  {
    label: "Gallery",
    to: "/gallery",
    children: [],
  },
];

export const investorGroup: NavGroup = {
  label: "Investors",
  to: "/investor-relations",
  children: [
    { label: "Statutory Filings & Governance", to: "/investor-relations" },
  ],
};

/** Maps a CTA label to the most relevant page. */
export function ctaTarget(label: string, page: PageContent): string {
  const l = label.toLowerCase();
  if (/enquir|discuss|talk|requirement|contact|request a/.test(l) && !/data sheet/.test(l))
    return "/contact#enquiry-form";
  if (/data sheet/.test(l)) return "/products-applications";
  const match = pages.find((p) => l.includes(p.name.toLowerCase()));
  if (match) return match.url;
  if (/container|product/.test(l)) return "/products-applications";
  if (/shivlakha/.test(l)) return "/shivlakha-rail-logistics";
  if (/journey/.test(l)) return "/our-journey";
  if (/manufactur/.test(l)) return "/manufacturing";
  if (/gallery/.test(l)) return "/gallery";
  if (/investor/.test(l)) return "/investor-relations";
  return page.links[0]?.to ?? "/contact";
}

export const isPlaceholder = (text: string) => text.trim().startsWith("[Placeholder");
