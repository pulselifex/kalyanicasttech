# KALYANI CAST TECH LIMITED

## COMPLETE WEBSITE MIGRATION & PAGE-COVERAGE AUDIT REPORT

**Document Reference:** `DOC-MIG-2026-001`  
**Date:** 2026-10-16  
**Auditor:** Senior Website Migration Auditor, Information Architecture Specialist & QA Lead  
**Live Website Reference Baseline:** [https://kalyanicasttech.com/](https://kalyanicasttech.com/)  
**New Development Repository:** `C:\Users\abc\.gemini\antigravity-ide\scratch\pixel-perfect-painter-750`  
**Git Branch:** `feature/industrial-design-design-phase1` | **Base Commit:** `14b4591`  
**Audit Status:** Complete  
**Launch Recommendation:** **NOT READY — MATERIAL GAPS** (Blockers Identified)

---

### Executive Summary

A comprehensive, evidence-based migration and page-coverage audit was conducted comparing the live WordPress production website (`https://kalyanicasttech.com/`) against the new development website (`pixel-perfect-painter-750`).

The new website delivers a dramatic technological and architectural upgrade:

1. Migrates from an unmaintained, vulnerable WordPress/Elementor setup to a secure React 19, TanStack Start, Nitro SSR, and Tailwind CSS v4 stack.
2. Replaces generic or missing photography with authentic 30.1MP DSLR plant imagery from the Rewari fabrication works.
3. Consolidates 14 fragmented, thin product stubs into 5 structured, engineering-led container application categories.
4. Introduces 16 brand-new routes covering the Rewari plant, engineering simulation, QA testing, and the strategic Shivlakha rail terminal platform under development.

However, the forensic crawl revealed **four critical migration blockers** that prevent immediate production acceptance:

1. **54 Live Statutory Investor Documents Missing:** The new site displays "Empty State" notices on `/investors/financial-information` and `/investors/shareholder-information`, assuming documents were pending Company Secretary release. The live crawl proved that **54 statutory PDFs** (Annual Reports FY23–FY26, Financial Results, Shareholding Patterns, AGM notices, and Postal Ballots) are actively live on the old website.
2. **Zero 301 Redirects Configured:** No `public/_redirects` file exists. All 46 legacy URLs will return HTTP 404 upon cutover, destroying search engine rankings and breaking existing backlinks.
3. **Dedicated Director / Leadership Biographies Omitted:** The 4 dedicated director profile pages on the live site (`/mr-naresh-kumar/`, `/mr-devender-kumar/`, `/mr-ratnesh-mahajan/`, `/mr-javed-aslam/`) were not migrated to a leadership section.
4. **Malicious Casino Spam on Live Site:** Four injected spam posts (Czech, Polish, Russian, and Hungarian gambling content) and spam copy on `/innovations/` exist in the legacy WordPress database, requiring explicit HTTP 410 Gone directives to force Google de-indexing.

---

### A. Overall Migration Coverage

Coverage statistics are calculated using explicit denominators derived from the full forensic crawl. Unreviewed or uninspected items are not counted as complete.

| Metric                                       | Count | Denominator | Percentage | Audit Interpretation                                                                                         |
| :------------------------------------------- | :---: | :---------: | :--------: | :----------------------------------------------------------------------------------------------------------- |
| **Existing Legitimate Pages Discovered**     |  46   |     46      |   100.0%   | Complete forensic crawl of live XML sitemap and internal navigation (excluding 4 spam URLs).                 |
| **Existing Pages Mapped to New Equivalent**  |  28   |     46      | **60.9%**  | 28 live URLs have an identified new destination or consolidation target.                                     |
| **Pages Fully Migrated (COMPLETE)**          |  22   |     46      | **47.8%**  | Homepage, About, Our Journey, Manufacturing, Contact, and 14 container models consolidated.                  |
| **Pages Partially Migrated (PARTIAL)**       |   4   |     46      |  **8.7%**  | Investors (portal exists, 54 PDFs missing); Innovations (spam removed, needs media); Gallery; News articles. |
| **Missing Pages (MISSING)**                  |   4   |     46      |  **8.7%**  | 4 dedicated Director profile pages (`/mr-naresh-kumar`, `/mr-devender-kumar`, etc.).                         |
| **Broken Pages in New Codebase (BROKEN)**    |   0   |     34      |  **0.0%**  | Zero runtime errors or route failures in the new React/TanStack application.                                 |
| **Intentionally Retired Pages**              |  14   |     46      | **30.4%**  | Unedited WordPress stubs (`faq` lorem ipsum, `testimonials` filler, duplicate draft pages).                  |
| **Pages Requiring Manual Review**            |   2   |     46      |  **4.3%**  | `/gallery/` historical clipping integration; `/the-food-project/` legacy CSR status.                         |
| **Injected Casino Spam Purged (410 Target)** |   4   |      4      |   100.0%   | Quarantined; requires edge 410 Gone configuration.                                                           |
| **New Pages with No Old Equivalent**         |  16   |     34      | **47.1%**  | 16 newly authored routes (Shivlakha rail platform, technical data sheets, QA testing, brochures).            |
| **Existing Documents Migrated & Verified**   |   1   |     54      |  **1.9%**  | Only Institutional Investor presentation migrated; **53 statutory PDFs pending physical transfer**.          |
| **Navigation Links Tested & Passed**         |  15   |     15      | **100.0%** | All header dropdowns, mobile drawer accordions, and footer columns resolve to HTTP 200.                      |
| **Functional Journeys Tested & Passed**      |   8   |     10      | **80.0%**  | 8 passed completely; 1 partial (Investor downloads); 1 broken (Legacy 301 redirects).                        |

---

### B. Critical Omissions & Release Blockers

|   #   | Omission / Issue                                | Existing Location                                                                      | Expected New Location                                                                                             | Nature of Gap                                                                                          | Impact & Compliance Risk                                                                                                                       |   Priority   | Recommended Action                                                                                           | Owner                                |
| :---: | :---------------------------------------------- | :------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- | :----------: | :----------------------------------------------------------------------------------------------------------- | :----------------------------------- |
| **1** | **54 Statutory Investor Documents Missing**     | `https://kalyanicasttech.com/investors/`                                               | `/investors/financial-information`, `/investors/shareholder-information`, `/investors/stock-exchange-disclosures` | 54 public statutory PDFs present on live WordPress are absent in new repo. New site shows empty state. | **BLOCKER (SEBI / BSE):** Major compliance regression for a BSE-listed company. Investors cannot download annual reports or shareholding data. | **CRITICAL** | Download all 54 PDFs from live server, store in `public/documents/investors/`, and populate download tables. | Frontend Lead / Content Specialist   |
| **2** | **Zero 301 Redirects for Legacy URLs**          | All 46 live URLs                                                                       | `public/_redirects` & Cloudflare / Nitro edge rules                                                               | No redirect map exists in the new codebase.                                                            | **BLOCKER (SEO / UX):** 100% of old URLs will return HTTP 404 upon DNS cutover, destroying SEO rankings and breaking backlinks.                | **CRITICAL** | Deploy `public/_redirects` with 301 mappings for all 46 legacy URLs to their approved replacements.          | Full-Stack / SEO Lead                |
| **3** | **Quarantine Injected Casino Malware URLs**     | 4 spam URLs in `wp-sitemap-posts-post-1.xml`                                           | Server edge (HTTP 410 Gone)                                                                                       | Injected gambling spam in live WordPress database.                                                     | **BLOCKER (Domain Reputation):** Google Search Console may flag or penalize the domain for spam if not cleanly handled.                        | **CRITICAL** | Configure edge rule returning HTTP 410 Gone for all 4 spam slugs and submit GSC removal request.             | Webmaster / Security Lead            |
| **4** | **Dedicated Director Biographies Missing**      | `/mr-naresh-kumar/`, `/mr-devender-kumar/`, `/mr-ratnesh-mahajan/`, `/mr-javed-aslam/` | `/company` or `/investors/corporate-governance`                                                                   | Individual leadership bio pages omitted without equivalent section.                                    | **HIGH:** Key director profiles and operational leadership credentials are not visible to institutional investors.                             |   **HIGH**   | Add a structured "Leadership & Board" section with photos and bios; redirect old individual URLs.            | Content Specialist / Corporate Comms |
| **5** | **Historical Indian Railways Press Clippings**  | `/gallery/` (19 newspaper clipping photos)                                             | `/resources/news-media`                                                                                           | 19 press clippings of container train flagoffs not transferred.                                        | **MEDIUM:** Third-party validation of container operations and railway partnerships omitted.                                                   |  **MEDIUM**  | Ingest the 19 press clipping images into the `/resources/news-media` gallery grid.                           | Content Specialist                   |
| **6** | **Registered Office Address Conflict (BLK-01)** | Footer & Contact                                                                       | Shared Footer & `/contact`                                                                                        | Conflicting legacy addresses (Okhla Phase-1 vs alternative address).                                   | **MEDIUM:** Compliantly disclosed awaiting signoff, but requires formal Company Secretary signoff before public launch.                        |  **MEDIUM**  | Company Secretary written signoff on single authoritative registered office.                                 | Company Secretary                    |

---

### C. Navigation Comparison (Existing vs. New)

| Existing Top-Level Nav                                      | Existing Subpages / Content                                                                               | New Navigation Group                                         | New Subpages / Routes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Architectural & IA Disposition                                                                                                                                               |
| :---------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Home**                                                    | Hero slider, basic product grid, news cards.                                                              | **Home** (`/`)                                               | Industrial Deep Navy Hero, Metric Bar, 5 Product Cards, Rewari Plant Showcase, Shivlakha Status, Governance & Downloads Hub.                                                                                                                                                                                                                                                                                                                                                                                                 | **Substantially Upgraded:** Rich industrial design, authentic DSLR photography, verified BSE/RDSO tags.                                                                      |
| **About** (`/about-2/`)                                     | Single text page with typos ("ISO 001:2001:2008").                                                        | **Company** (`/company`)                                     | • Company Overview (`/company`)<br>• Our Business (`/company/our-business`)<br>• Our Journey (`/company/our-journey`)                                                                                                                                                                                                                                                                                                                                                                                                        | **Expanded & Corrected:** Typos eliminated; clear separation between corporate governance, operations, and history.                                                          |
| **Our Journey** (`/our-journey/`)                           | Flat narrative page.                                                                                      | **Company**                                                  | • Our Journey (`/company/our-journey`)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | **Restructured:** Integrated into Company hierarchy with dated milestone narrative.                                                                                          |
| **Manufacturing Facilities** (`/manufacturing-facilities/`) | General description of casting facility.                                                                  | **Manufacturing** (`/manufacturing`)                         | • Manufacturing Overview (`/manufacturing`)<br>• Container Manufacturing (`/manufacturing/container-manufacturing`)<br>• Design & Engineering (`/manufacturing/design-engineering`)<br>• Testing & Quality (`/manufacturing/testing-quality`)<br>• Facilities & Locations (`/manufacturing/facilities-locations`)                                                                                                                                                                                                            | **Massively Expanded (4 New Routes):** Complete technical breakdown of Rewari plant, continuous welding lines, QA load testing, and future facilities.                       |
| **Products** (`/products/`)                                 | 14 thin Elementor stubs (`20-feet-hc`, `40-feet-dwarf`, `coiltainer`, etc.) with image-only presentation. | **Containers & Solutions** (`/containers-solutions`)         | • Solutions Overview (`/containers-solutions`)<br>• Standard Freight Containers (`/containers-solutions/standard-containers`)<br>• Specialised Containers (`/containers-solutions/specialised-containers`)<br>• Rail, Parcel & Vehicle Cargo (`/containers-solutions/rail-parcel-vehicle-cargo`)<br>• Application-Specific Designs (`/containers-solutions/application-specific-designs`)<br>• Technical Data Sheets (`/containers-solutions/technical-data-sheets`)                                                         | **Consolidated & Elevated:** 14 fragmented stubs consolidated into 5 structured engineering applications with technical specifications and verified tare/payload capacities. |
| **Innovations** (`/innovations/`)                           | Compromised by Polish casino spam copy on live site.                                                      | **Containers & Solutions**                                   | • Specialised Containers (`/containers-solutions/specialised-containers`)                                                                                                                                                                                                                                                                                                                                                                                                                                                    | **Purged & Consolidated:** Casino spam eliminated; legitimate dwarf container and custom engineering preserved.                                                              |
| **Investors** (`/investors/`)                               | Single WordPress page hosting 54 downloadable PDFs.                                                       | **Investor Relations** (`/investors`)                        | • Investor Portal (`/investors`)<br>• Financial Information (`/investors/financial-information`)<br>• Stock Exchange Disclosures (`/investors/stock-exchange-disclosures`)<br>• Corporate Governance (`/investors/corporate-governance`)<br>• Shareholder Information (`/investors/shareholder-information`)<br>• IPO & Corporate Actions (`/investors/ipo-corporate-actions`)<br>• Investor Grievance Contact (`/investors/investor-grievance-contact`)<br>• Meetings & Presentations (`/investors/meetings-presentations`) | **Subdivided into 7 Statutory Subpages:** Professional regulatory structure created, but **54 PDFs must be linked to populate the subpages**.                                |
| **Gallery** (`/gallery/`)                                   | 19 press clipping photos of Indian Railways container trains.                                             | **Resources** (`/resources`)                                 | • Resources Hub (`/resources`)<br>• Corporate Profile Brochures (`/resources/corporate-profile-brochures`)<br>• Product Data Sheets (`/resources/product-data-sheets`)<br>• Quality Certifications (`/resources/quality-certifications`)<br>• News & Media (`/resources/news-media`)                                                                                                                                                                                                                                         | **Professionalized into Document & Media Hub:** Brochures, certificates, and presentations cleanly organized. Press clippings need integration into `news-media`.            |
| **Contact** (`/contact/`)                                   | Basic contact form and phone numbers.                                                                     | **Contact** (`/contact`) & **Enquiry** (`/business-enquiry`) | • Contact Hub (`/contact`)<br>• Business Enquiry (`/business-enquiry`)                                                                                                                                                                                                                                                                                                                                                                                                                                                       | **Separated into Inquiries & Contacts:** Direct office contacts separated from multi-category commercial container / logistics feasibility form.                             |
| _[New Platform]_                                            | _Absent on live website._                                                                                 | **Shivlakha Project** (`/shivlakha-rail-logistics`)          | • Project Portal (`/shivlakha-rail-logistics`)<br>• Gati Shakti Cargo Terminal (`/shivlakha-rail-logistics/gati-shakti-cargo-terminal`)<br>• Inland Container Depot (`/shivlakha-rail-logistics/inland-container-depot`)<br>• Cargo Opportunities (`/shivlakha-rail-logistics/cargo-opportunities`)                                                                                                                                                                                                                          | **Brand New Platform (4 Routes):** Complete disclosure of the strategic Bachau terminal project, master site plan, and 51% operating SPV (`KMT Engineering Pvt Ltd`).        |

---

### D. Broken, Inappropriate & Discrepant Links

1. **Legacy URLs without 301 Redirects:**
   - All 46 legacy WordPress URLs currently resolve to HTTP 404 on the new website domain if accessed directly.
   - Evidence: Detailed mapping documented in `website_migration_audit/url_redirect_and_seo_audit.csv`.
2. **Injected Casino Spam URLs:**
   - 4 URLs on the live domain indexed by search engines contain gambling malware. Must not be redirected to the homepage; must return HTTP 410 Gone.
3. **Empty State Download Triggers on Investor Subpages:**
   - `/investors/financial-information` renders "No documents published yet" despite 12 audited financial results and annual reports existing on the live site.
   - `/investors/shareholder-information` renders "No documents published yet" despite 10 quarterly shareholding patterns existing on the live site.
   - `/investors/stock-exchange-disclosures` renders "No documents published yet" despite 14 board intimations and voting outcome PDFs existing on the live site.

---

### E. Factual Integrity & Unverified Claims Register

| Claim on New Site               | Location                                | Conflict / Audit Finding                                                                                                                                                 | Action Required                                                               | Responsible Owner |
| :------------------------------ | :-------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------- | :---------------- |
| **Registered Corporate Office** | Shared Footer & `/contact`              | Master HTML document states: _"Legacy site shows two different registered addresses. Confirm before publishing either."_ Compliantly disclosed awaiting confirmation.    | Obtain formal written confirmation from Company Secretary (BLK-01).           | Company Secretary |
| **ISO 9001:2015 Certification** | Hero Eyebrow Badge                      | Stated in hero badge, but live website had typo "ISO 001:2001:2008" and new repository lacks physical certificate scan.                                                  | Upload valid ISO 9001:2015 certificate scan to `public/documents/approvals/`. | QA Lead / CS      |
| **Compliance Officer Contact**  | `/investors/investor-grievance-contact` | Official named Compliance Officer and dedicated grievance email pending confirmation from Company Secretary. Current implementation safely points to SEBI SCORES portal. | Provide named Compliance Officer details and mailbox (BLK-02).                | Company Secretary |
| **51% Subsidiary Relationship** | Hero Metric Bar & Shivlakha Component   | Confirmed: KMT Engineering Private Limited (CIN: `U29202HR2024PTC119036`) is 51% operating subsidiary for the Bachau, Kachchh terminal.                                  | Verified against statutory records. Retain strict separation.                 | Verified Fact     |

---

### F. Final Launch Recommendation

### **RECOMMENDATION: NOT READY — MATERIAL GAPS**

**Summary of Rationale:**
The new website represents an outstanding leap in visual aesthetics, engineering credibility, technical performance, and information architecture. However, it cannot be granted final launch acceptance due to three material omissions that constitute direct compliance and SEO blockers:

1. **SEBI / BSE Statutory Document Gap:** 54 regulatory investor PDFs currently accessible to the public on the live website are missing from the new site's investor subpages.
2. **SEO & Redirect Blocker:** Missing 301 redirects for 46 legacy URLs will break all external incoming traffic and destroy search rankings upon DNS switchover.
3. **Governance Gap:** Key executive and director biographies (`/mr-naresh-kumar/`, etc.) have been completely omitted from the new corporate presentation.

### Pre-Launch Action Checklist (To Reach "Ready for Acceptance"):

```
[ ] 1. Ingest 54 live statutory PDFs into public/documents/investors/ and link them on the 4 investor subroutes.
[ ] 2. Create public/_redirects mapping all 46 legacy URLs to their approved new routes (301) and spam URLs (410).
[ ] 3. Add a dedicated "Leadership & Management" section on /company or /investors/corporate-governance.
[ ] 4. Ingest the 19 Indian Railways press clipping photos into /resources/news-media.
[ ] 5. Obtain Company Secretary written signoff on Registered Office address (BLK-01).
[ ] 6. Upload physical ISO 9001:2015 certificate scan to public/documents/approvals/.
```

---

### Audit Deliverables & Evidence Index

All audit artifacts and data registers are located in `website_migration_audit/`:

1. [README_AUDIT_SUMMARY.md](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit/README_AUDIT_SUMMARY.md) — This master executive summary report.
2. [existing_website_inventory.csv](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit/existing_website_inventory.csv) — 46 live URLs inventoried with titles, H1s, key content, and document counts.
3. [new_website_inventory.csv](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit/new_website_inventory.csv) — 34 new routes inventoried with groups, titles, H1s, and linked downloads.
4. [page_migration_matrix.csv](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit/page_migration_matrix.csv) — Page-by-page mapping matrix with match types, coverage scores, and gaps.
5. [document_migration_matrix.csv](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit/document_migration_matrix.csv) — Complete audit of all 54 statutory investor PDFs and technical brochures.
6. [navigation_and_link_audit.csv](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit/navigation_and_link_audit.csv) — Desktop header, footer, search, and mobile drawer interaction tests.
7. [functional_journey_test_results.csv](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit/functional_journey_test_results.csv) — 10 end-to-end user journeys tested and documented.
8. [url_redirect_and_seo_audit.csv](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit/url_redirect_and_seo_audit.csv) — 301 redirect map and SEO metadata audit for all 46 legacy URLs.
9. [issues_and_recommendations.csv](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/website_migration_audit/issues_and_recommendations.csv) — 8 prioritized issues with owners and recommended actions.
10. `website_migration_audit/evidence/` — Retained desktop, tablet, and mobile screenshots.

---

_End of Report DOC-MIG-2026-001_
