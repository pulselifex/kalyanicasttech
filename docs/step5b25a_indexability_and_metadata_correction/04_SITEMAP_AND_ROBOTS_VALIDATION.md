# WP-5B.25A — XML Sitemap & Robots.txt Validation Report

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.25A — Search Indexability, Canonical Strategy, Metadata & Structured Data Correction  
**Target Sitemap:** `https://kalyanicasttech.com/sitemap.xml`  
**Target Robots:** `https://kalyanicasttech.com/robots.txt`  
**Date:** 6 November 2026  
**Status:** `VERIFIED & VALIDATED`  

---

## 1. Executive Summary

Under WP-5B.25A, `public/sitemap.xml` has been regenerated to strictly include **all 27 verified indexable canonical pages**, expanding from the legacy 16-URL baseline. 

Zero redirects, zero duplicate URLs, zero staging links, and zero noindex utility pages are present in the sitemap. `public/robots.txt` explicitly authorizes search engines, social media preview bots, and legitimate AI engine crawlers (`GPTBot`, `PerplexityBot`, `ClaudeBot`) while directing all agents to the canonical production sitemap.

---

## 2. Complete XML Sitemap Inventory (27 Canonical URLs)

| No | Canonical URL (`<loc>`) | `<priority>` | `<changefreq>` | Content Scope |
| :--- | :--- | :--- | :--- | :--- |
| 1 | `https://kalyanicasttech.com/` | `1.0` | `weekly` | Corporate Homepage & Flagship Solutions |
| 2 | `https://kalyanicasttech.com/about-us` | `0.8` | `monthly` | Corporate Profile & Listed Company History |
| 3 | `https://kalyanicasttech.com/our-journey` | `0.7` | `monthly` | 7 Chronological Milestones (2012–2026) |
| 4 | `https://kalyanicasttech.com/leadership` | `0.7` | `monthly` | Board of Directors, KMP & Governance Committees |
| 5 | `https://kalyanicasttech.com/manufacturing` | `0.9` | `weekly` | Manufacturing Division Overview & Capabilities |
| 6 | `https://kalyanicasttech.com/facilities` | `0.8` | `monthly` | Rewari Works Factory, Induction Foundry & Infrastructure |
| 7 | `https://kalyanicasttech.com/products-applications` | `0.9` | `weekly` | B2B Container & Corner Casting Product Catalogue |
| 8 | `https://kalyanicasttech.com/innovation` | `0.8` | `monthly` | Specialised Cargo, Dwarf Containers & New Wagon Design |
| 9 | `https://kalyanicasttech.com/engineering-quality` | `0.8` | `monthly` | ISO 1496 Rig, In-House NDT Suite & QA Framework |
| 10 | `https://kalyanicasttech.com/investor-relations` | `0.9` | `weekly` | Official Statutory Disclosures & Financial Gateway |
| 11 | `https://kalyanicasttech.com/gallery` | `0.7` | `monthly` | Authentic Photographic Archive of Plants & Terminals |
| 12 | `https://kalyanicasttech.com/contact` | `0.8` | `monthly` | Corporate Office, Manufacturing & Terminal Directory |
| 13 | `https://kalyanicasttech.com/resources` | `0.8` | `monthly` | Technical Resources, Document Downloads & Library |
| 14 | `https://kalyanicasttech.com/shivlakha-rail-logistics` | `0.9` | `weekly` | Terminal Division Flagship Multimodal Platform |
| 15 | `https://kalyanicasttech.com/shivlakha-rail-logistics/gati-shakti-terminal` | `0.9` | `weekly` | Operational 30-Acre Gati Shakti Terminal |
| 16 | `https://kalyanicasttech.com/shivlakha-rail-logistics/inland-container-terminal` | `0.8` | `monthly` | Under-Development 30-Acre ICT (CBIC Approved) |
| 17 | `https://kalyanicasttech.com/shivlakha-rail-logistics/cargo-opportunities` | `0.8` | `monthly` | Rail Route & Cargo Evaluation Desk |
| 18 | `https://kalyanicasttech.com/resources/quality-certifications` | `0.8` | `monthly` | Lloyd's Register EMEA, IRS & ISO 9001:2015 Certificates |
| 19 | `https://kalyanicasttech.com/resources/corporate-profile-brochures` | `0.7` | `monthly` | Corporate Presentations & Project Brochure Library |
| 20 | `https://kalyanicasttech.com/resources/news-media` | `0.7` | `monthly` | Historical Press Clippings, Trial Runs & Video Links |
| 21 | `https://kalyanicasttech.com/investors/financial-information` | `0.8` | `monthly` | Audited Balance Sheets, Half-Yearly & Annual Results |
| 22 | `https://kalyanicasttech.com/investors/stock-exchange-disclosures` | `0.8` | `weekly` | Regulation 30 Material Event Disclosures (BSE SME) |
| 23 | `https://kalyanicasttech.com/investors/corporate-governance` | `0.7` | `monthly` | Board Committees & Signed Statutory Policies |
| 24 | `https://kalyanicasttech.com/investors/shareholder-information` | `0.7` | `monthly` | Shareholding Patterns, Demat (ISIN: INE0Q4801017), RTA |
| 25 | `https://kalyanicasttech.com/investors/ipo-corporate-actions` | `0.7` | `monthly` | Historical IPO Prospectus & Capital Structure Filings |
| 26 | `https://kalyanicasttech.com/investors/investor-grievance-contact` | `0.8` | `monthly` | Compliance Officer & Nodal Grievance Redressal Desk |
| 27 | `https://kalyanicasttech.com/investors/meetings-presentations` | `0.7` | `monthly` | AGM Notices, Scrutinizer Reports & Voting Tallies |

---

## 3. Strict Exclusions Verification

The following categories of URLs are strictly excluded from `sitemap.xml`:
1. **HTTP 301 Redirects (0 in Sitemap):**
   - `/business-enquiry`, `/company`, `/company/leadership`, `/containers-solutions`, `/investors`, `/manufacturing/facilities-locations`, `/manufacturing/testing-quality`, `/shivlakha-rail-logistics/gati-shakti-cargo-terminal`, `/shivlakha-rail-logistics/inland-container-depot`.
2. **Duplicate Subpages (0 in Sitemap):**
   - `/containers-solutions/standard-containers`, `/containers-solutions/specialised-containers`, `/containers-solutions/rail-parcel-vehicle-cargo`, `/containers-solutions/application-specific-designs`, `/containers-solutions/technical-data-sheets`, `/manufacturing/container-manufacturing`, `/manufacturing/design-engineering`, `/company/our-journey`, `/company/our-business`.
3. **Noindex Utility / Content-Pending Pages (0 in Sitemap):**
   - `/resources/product-data-sheets` (excluded until model-specific cutsheets are supplied).
4. **Staging / Preview Hostnames (0 in Sitemap):**
   - Zero occurrences of `netlify.app`, `localhost`, or ephemeral preview hashes.

---

## 4. Robots.txt Specification & Validation

The verified content of `public/robots.txt` ensures legitimate crawlers are welcomed while crawl paths are transparent:

```text
# Robots.txt for Kalyani Cast Tech Limited (https://kalyanicasttech.com)
# Verified search engine crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Applebot
Allow: /

# Social media preview bots
User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

# AI answer engine crawlers (identified & permitted for accurate corporate discovery)
User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

# Default catch-all
User-agent: *
Allow: /

# XML Sitemap
Sitemap: https://kalyanicasttech.com/sitemap.xml
```

---

## 5. Live Staging Validation

- **Target URL:** `https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app/sitemap.xml`
  - HTTP Status: **200 OK**
  - Content-Type: `application/xml`
  - Exact `<loc>` tag count: **27**
  - XML Syntax: Well-formed W3C compliant XML
- **Target URL:** `https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app/robots.txt`
  - HTTP Status: **200 OK**
  - Content-Type: `text/plain`
  - Sitemap directive confirmed pointing to `https://kalyanicasttech.com/sitemap.xml`.
