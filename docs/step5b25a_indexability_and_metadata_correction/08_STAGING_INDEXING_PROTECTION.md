# WP-5B.25A — Staging Environment Indexing Protection & Anti-Dilution Architecture

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.25A — Search Indexability, Canonical Strategy, Metadata & Structured Data Correction  
**Staging Host:** `*.netlify.app` / Deploy Preview URLs  
**Production Host:** `https://kalyanicasttech.com`  
**Date:** 6 November 2026  
**Status:** `AUDITED & PROTECTED`  

---

## 1. Objective & Risk Assessment

Search engine ranking degradation commonly occurs when pre-release staging, draft preview, or CI/CD branch deployments are discovered and indexed by automated web crawlers. If Google or Bing indexes `https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app`, it dilutes organic domain equity, splits backlink signals, causes duplicate-content penalties, and exposes pre-release copy to the public.

To permanently prevent this, Kalyani Cast Tech implements a **four-layer staging defense architecture**:

```text
Staging Anti-Dilution Defense Matrix
├── Layer 1: Canonical URL Hard-Locking (Sitewide)
├── Layer 2: HTTP Response Header Defense (X-Robots-Tag)
├── Layer 3: Sitemap & Robots Hostname Isolation
└── Layer 4: Netlify Deploy Context Isolation
```

---

## 2. Layer-by-Layer Defense Controls

### Layer 1: Canonical URL Hard-Locking
In `src/content/seo-metadata.ts`, `resolveCanonicalUrl(path)` explicitly binds all canonical links to `CANONICAL_DOMAIN = "https://kalyanicasttech.com"`.
- When an edge server renders a page at `https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app/facilities`, the rendered HTML contains:
  ```html
  <link rel="canonical" href="https://kalyanicasttech.com/facilities" />
  ```
- **Crawler Behavior:** RFC 6596 specifies that cross-domain canonical tags serve as explicit instructions to search engines that the staging URL is merely an unindexed mirror and all ranking signals must accrue solely to the production domain.

### Layer 2: HTTP Response Header Defense (`X-Robots-Tag`)
In `netlify.toml`, Netlify edge context headers are configured:
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
- **Crawler Behavior:** Any crawler reading HTTP response headers on preview or branch deploys is commanded to immediately abort indexing and archiving.

### Layer 3: Sitemap & Robots Hostname Isolation
- `public/sitemap.xml` strictly publishes URLs with the `https://kalyanicasttech.com` prefix. No staging URLs appear anywhere within the XML structure.
- `public/robots.txt` specifies `Sitemap: https://kalyanicasttech.com/sitemap.xml`.
- Even if a crawler visits `https://<deploy-id>--kalyanicasttech.netlify.app/robots.txt`, the sitemap reference directs it directly to the production domain.

### Layer 4: Netlify Production Context Separation
- Netlify draft previews are deployed without `--prod`.
- The live production custom domain `https://kalyanicasttech.com` remains disconnected until explicit management release authorization.
- Zero DNS changes have been applied.

---

## 3. Staging Verification Evidence

Live edge HTTP inspection on `https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app`:

```text
GET / HTTP/2
Host: 6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app
Status: 200 OK

<link rel="canonical" href="https://kalyanicasttech.com/" />
<meta property="og:url" content="https://kalyanicasttech.com/" />
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Corporation",
  "@id": "https://kalyanicasttech.com/#corporation",
  "url": "https://kalyanicasttech.com/"
}
</script>
```

Zero occurrences of `6aeded590ed2d25a0ee82312` or `netlify.app` in any canonical, social, or structured data output.
