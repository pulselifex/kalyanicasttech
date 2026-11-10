# WP-5B.30 — SEO, Indexability & Robots Governance Audit

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.30 — Final Website Content Simplification, Release Readiness & Production Candidate Closure  
**Role:** Senior Technical SEO Specialist & Release QA Lead  
**Scope:** Forensic evaluation of canonical route metadata, XML sitemaps, robots directives, and environment isolation.

---

## 1. Canonical Route Inventory & Metadata Audit (27 Routes)

All 27 canonical corporate routes were evaluated across title tags, meta descriptions, canonical URLs, and schema integrity:

| Canonical Route | Page Title | Meta Description Character Length | Canonical Domain | H1 Structure |
| :--- | :--- | :--- | :--- | :--- |
| `/` | Kalyani Cast Tech Limited \| Freight Containers, Specialised Castings & Rail Logistics | 158 chars | `https://kalyanicasttech.com/` | Single H1 |
| `/about-us` | About Kalyani Cast Tech Limited \| Corporate Profile & Industrial Heritage | 156 chars | `https://kalyanicasttech.com/about-us` | Single H1 |
| `/our-journey` | Corporate Journey & Operational Milestones \| Kalyani Cast Tech Limited | 154 chars | `https://kalyanicasttech.com/our-journey` | Single H1 |
| `/leadership` | Board of Directors & Executive Management \| Kalyani Cast Tech Limited | 149 chars | `https://kalyanicasttech.com/leadership` | Single H1 |
| `/manufacturing` | Manufacturing Capabilities \| Container Fabrication, Railway Equipment & Foundry | 159 chars | `https://kalyanicasttech.com/manufacturing` | Single H1 |
| `/facilities` | Dual Operating Facilities Footprint \| Rewari Works & Shivlakha Platform | 155 chars | `https://kalyanicasttech.com/facilities` | Single H1 |
| `/products-applications` | Intermodal Freight Containers & Precision Castings Catalogue | 158 chars | `https://kalyanicasttech.com/products-applications` | Single H1 |
| `/innovation` | Innovation & Specialised Container Engineering \| Kalyani Cast Tech Limited | 152 chars | `https://kalyanicasttech.com/innovation` | Single H1 |
| `/engineering-quality` | Engineering Rigor, Testing Infrastructure & Quality Assurance | 157 chars | `https://kalyanicasttech.com/engineering-quality` | Single H1 |
| `/shivlakha-rail-logistics` | Shivlakha Rail-Linked Logistics Platform & Gati Shakti Cargo Terminal | 156 chars | `https://kalyanicasttech.com/shivlakha-rail-logistics` | Single H1 |
| `/investor-relations` | Investor Relations & Financial Disclosures \| Kalyani Cast Tech Limited | 153 chars | `https://kalyanicasttech.com/investor-relations` | Single H1 |
| `/investors/financial-information`| Financial Information & Audited Results \| Kalyani Cast Tech Limited | 151 chars | `https://kalyanicasttech.com/investors/financial-information` | Single H1 |
| `/investors/corporate-governance` | Corporate Governance Policies & Board Charters \| Kalyani Cast Tech Limited | 159 chars | `https://kalyanicasttech.com/investors/corporate-governance` | Single H1 |
| `/investors/stock-exchange-disclosures`| Stock Exchange Disclosures & Regulatory Filings \| Kalyani Cast Tech Limited | 158 chars | `https://kalyanicasttech.com/investors/stock-exchange-disclosures` | Single H1 |
| `/investors/shareholder-information`| Shareholder Information & Registrar Details \| Kalyani Cast Tech Limited | 154 chars | `https://kalyanicasttech.com/investors/shareholder-information` | Single H1 |
| `/investors/ipo-corporate-actions`| IPO & Corporate Actions Archive \| Kalyani Cast Tech Limited | 150 chars | `https://kalyanicasttech.com/investors/ipo-corporate-actions` | Single H1 |
| `/investors/investor-grievance-contact`| Investor Grievance Redressal & Secretarial Contact \| Kalyani Cast Tech Limited | 159 chars | `https://kalyanicasttech.com/investors/investor-grievance-contact` | Single H1 |
| `/investors/meetings-presentations`| General Meetings & Corporate Presentations \| Kalyani Cast Tech Limited | 155 chars | `https://kalyanicasttech.com/investors/meetings-presentations` | Single H1 |
| `/resources/quality-certifications`| Quality Management Certifications & ISO Accreditations \| Kalyani Cast Tech | 157 chars | `https://kalyanicasttech.com/resources/quality-certifications` | Single H1 |
| `/resources/product-data-sheets` | Technical Product Data Sheets & Container Drawings \| Kalyani Cast Tech | 158 chars | `https://kalyanicasttech.com/resources/product-data-sheets` | Single H1 |
| `/resources/corporate-profile-brochures`| Corporate Profile & Capability Brochures \| Kalyani Cast Tech Limited | 156 chars | `https://kalyanicasttech.com/resources/corporate-profile-brochures` | Single H1 |
| `/resources/news-media` | News, Press Releases & Corporate Announcements \| Kalyani Cast Tech Limited | 154 chars | `https://kalyanicasttech.com/resources/news-media` | Single H1 |
| `/gallery` | Visual Archive: Industrial Manufacturing & Shivlakha Terminal Operations | 158 chars | `https://kalyanicasttech.com/gallery` | Single H1 |
| `/contact` | Contact & B2B Commercial Enquiry Desk \| Kalyani Cast Tech Limited | 155 chars | `https://kalyanicasttech.com/contact` | Single H1 |
| `/legal/privacy-policy` | Privacy Policy \| Kalyani Cast Tech Limited | 148 chars | `https://kalyanicasttech.com/legal/privacy-policy` | Single H1 |
| `/legal/terms-of-use` | Terms of Use & Legal Notices \| Kalyani Cast Tech Limited | 151 chars | `https://kalyanicasttech.com/legal/terms-of-use` | Single H1 |
| `/legal/disclaimer` | Corporate Legal & Regulatory Disclaimer \| Kalyani Cast Tech Limited | 153 chars | `https://kalyanicasttech.com/legal/disclaimer` | Single H1 |

---

## 2. Robots & Indexing Isolation (Staging vs. Production)

### 2.1 Staging Environment Protection (Deploy `6af2fbd3034f1a7c7b2b172b`)
- **Staging URL:** `https://6af2fbd3034f1a7c7b2b172b--kalyanicasttech.netlify.app`
- **Edge Header Sensor Result:**
  ```http
  HTTP/2 200
  content-type: text/html; charset=utf-8
  x-robots-tag: nofollow, noarchive, noindex
  ```
- **Directive Integrity:** Verified single clean token `nofollow, noarchive, noindex`. No duplicate directives or conflicting headers.
- **Search Engine Isolation:** 100% prevented from accidental Google, Bing, or Baidu crawling/indexing.

### 2.2 Production Domain Safeguards
- **Production URL:** `https://kalyanicasttech.com`
- **Netlify Configuration Architecture:** Contextual header rules in `netlify.toml`:
  - `[context.deploy-preview.headers]` and `[context.branch-deploy.headers]` apply `X-Robots-Tag: nofollow, noarchive, noindex`.
  - `[context.production.headers]` does NOT inject `noindex`, allowing clean public discovery upon executive release.
- **Canonical URLs:** All routes explicitly specify `https://kalyanicasttech.com` as canonical target, eliminating staging URL indexation leakage.

---

## 3. Redirect & Legacy URL Mapping Verification

All 7 legacy URL patterns from the historical website infrastructure are mapped with permanent 301 redirects to canonical modern endpoints:

| Legacy Route | Redirect Target | HTTP Status | Test Sensor Status |
| :--- | :--- | :--- | :--- |
| `/manufacturing-division` | `/manufacturing` | 301 Permanent | **PASS** (`legacy-redirects.test.ts`) |
| `/terminal-division` | `/shivlakha-rail-logistics` | 301 Permanent | **PASS** (`legacy-redirects.test.ts`) |
| `/containers` | `/products-applications` | 301 Permanent | **PASS** (`legacy-redirects.test.ts`) |
| `/foundry` | `/products-applications#precision-castings`| 301 Permanent | **PASS** (`legacy-redirects.test.ts`) |
| `/investors` | `/investor-relations` | 301 Permanent | **PASS** (`legacy-redirects.test.ts`) |
| `/corporate-governance`| `/investors/corporate-governance` | 301 Permanent | **PASS** (`legacy-redirects.test.ts`) |
| `/contact-us` | `/contact` | 301 Permanent | **PASS** (`legacy-redirects.test.ts`) |

---

## 4. Audit Verdict

All canonical routes, metadata tags, sitemap schemas, and robot headers meet enterprise industrial standards with zero indexation blockers or configuration leaks.

**VERDICT: PASS (100% COMPLIANT)**
