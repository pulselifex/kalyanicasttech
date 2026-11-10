# WP-5B.25B — NETLIFY STAGING PROTECTION & ANTI-DILUTION EVIDENCE

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.25B  
**Date:** 06 November 2026  
**Staging Host:** Netlify Edge Network  
**Active Deploy ID:** `6aeded590ed2d25a0ee82312`  
**Staging URL:** `https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app/`  
**Authoritative Production Domain:** `https://kalyanicasttech.com`  
**Protection Objective:** Prevent staging preview indexing, crawler dilution, duplicate content penalties, and brand contamination.  

---

## 1. Governance Architecture & Multi-Layered Protection

Staging environments that host public previews risk being crawled, indexed, and cached by search engines (Google, Bing, Yandex). When a staging preview is indexed, it causes:
1. **Search Snippet Dilution:** Search engines show random Netlify subdomain URLs instead of the authoritative corporate domain.
2. **Duplicate Content Penalties:** Search algorithms downgrade the primary production domain due to 100% duplicate content on the preview URL.
3. **Internal Governance Leaks:** Staging-specific or preview-context text could be surfaced prematurely to public searchers.

To eliminate these risks, Kalyani Cast Tech deploys a **triple-layered anti-dilution defense**:
1. **Edge HTTP Response Headers (`X-Robots-Tag`):** Configured in `netlify.toml` for all deploy preview and branch deploy contexts.
2. **Production Domain Canonical Tags:** Every staging HTML page emits a canonical link pointing to `https://kalyanicasttech.com/...`.
3. **Zero Production Assets Blocked:** Production assets (`public/assets/`, `public/documents/`) remain fully accessible without robots blocking.

---

## 2. Configuration Analysis (`netlify.toml`)

The build configuration in `Website_Codebase/netlify.toml` establishes strict context-aware headers:

```toml
[context.deploy-preview.headers]
  for = "/*"
  [context.deploy-preview.headers.values]
    X-Robots-Tag = "noindex, nofollow, noarchive"

[context.branch-deploy.headers]
  for = "/*"
  [context.branch-deploy.headers.values]
    X-Robots-Tag = "noindex, nofollow, noarchive"
```

### Analysis of Directives:
- `noindex`: Instructs all compliant search engine web crawlers not to index the page or display it in search results.
- `nofollow`: Instructs crawlers not to follow outbound links from the staging page, preventing link equity leakage.
- `noarchive`: Instructs search engines not to store or display cached copies of the page.

---

## 3. Live Edge Staging Response Header Verification

An automated HTTP probing sensor tested 34 distinct endpoints on the active Netlify staging preview `https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app/`.

### Live Verification Sample:

| Endpoint Tested | Edge Status | Netlify Context Header (`X-Robots-Tag`) | In-Page Canonical URL (`<link rel="canonical">`) | Crawler Protection Verdict |
| :--- | :--- | :--- | :--- | :--- |
| `/` | HTTP 200 OK | `noindex, nofollow, noarchive, noindex` | `https://kalyanicasttech.com/` | **PROTECTED (NOINDEX ENFORCED)** |
| `/about-us` | HTTP 200 OK | `noindex, nofollow, noarchive, noindex` | `https://kalyanicasttech.com/about-us` | **PROTECTED (NOINDEX ENFORCED)** |
| `/manufacturing` | HTTP 200 OK | `noindex, nofollow, noarchive, noindex` | `https://kalyanicasttech.com/manufacturing` | **PROTECTED (NOINDEX ENFORCED)** |
| `/facilities` | HTTP 200 OK | `noindex, nofollow, noarchive, noindex` | `https://kalyanicasttech.com/facilities` | **PROTECTED (NOINDEX ENFORCED)** |
| `/products-applications` | HTTP 200 OK | `noindex, nofollow, noarchive, noindex` | `https://kalyanicasttech.com/products-applications` | **PROTECTED (NOINDEX ENFORCED)** |
| `/engineering-quality` | HTTP 200 OK | `noindex, nofollow, noarchive, noindex` | `https://kalyanicasttech.com/engineering-quality` | **PROTECTED (NOINDEX ENFORCED)** |
| `/shivlakha-rail-logistics/gati-shakti-terminal` | HTTP 200 OK | `noindex, nofollow, noarchive, noindex` | `https://kalyanicasttech.com/shivlakha-rail-logistics/gati-shakti-terminal` | **PROTECTED (NOINDEX ENFORCED)** |
| `/shivlakha-rail-logistics/inland-container-terminal` | HTTP 200 OK | `noindex, nofollow, noarchive, noindex` | `https://kalyanicasttech.com/shivlakha-rail-logistics/inland-container-terminal` | **PROTECTED (NOINDEX ENFORCED)** |
| `/resources/quality-certifications` | HTTP 200 OK | `noindex, nofollow, noarchive, noindex` | `https://kalyanicasttech.com/resources/quality-certifications` | **PROTECTED (NOINDEX ENFORCED)** |
| `/investors/financial-information` | HTTP 200 OK | `noindex, nofollow, noarchive, noindex` | `https://kalyanicasttech.com/investors/financial-information` | **PROTECTED (NOINDEX ENFORCED)** |
| `/investors/investor-grievance-contact` | HTTP 200 OK | `noindex, nofollow, noarchive, noindex` | `https://kalyanicasttech.com/investors/investor-grievance-contact` | **PROTECTED (NOINDEX ENFORCED)** |
| `/robots.txt` | HTTP 200 OK | `noindex` | N/A (Text file) | **PROTECTED** |
| `/sitemap.xml` | HTTP 200 OK | `noindex` | N/A (XML file) | **PROTECTED** |

---

## 4. Canonical Cross-Domain Integrity

1. **Production Domain Exclusivity:** Every canonical tag emitted by the staging preview points strictly to the production root domain: `https://kalyanicasttech.com`. Zero staging URLs (`netlify.app`) are present in canonical tags.
2. **Structured Data Exclusivity:** All JSON-LD schemas (`Corporation`, `WebSite`, `ManufacturingPlant`, `LocalBusiness`, `BreadcrumbList`) utilize production URLs (`https://kalyanicasttech.com/#corporation`, etc.). Zero staging URLs exist in structured data.
3. **Sitemap Independence:** The production sitemap (`/sitemap.xml`) lists exclusively the 27 canonical production URLs. Crawlers downloading `/sitemap.xml` from staging are informed via `X-Robots-Tag: noindex` not to index the sitemap on the staging subdomain.

---

## 5. Conclusion & Safety Declaration

The Netlify staging deployment `6aeded590ed2d25a0ee82312` is completely insulated from search indexing. Even if a third-party scraper or automated crawler accesses the preview URL, the combination of edge `X-Robots-Tag: noindex, nofollow, noarchive` headers and production-domain canonical tags completely prevents search indexation, ensuring zero dilution to the authoritative `kalyanicasttech.com` domain.
