# WP-5B.23 Production Configuration & Security Review

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.23  
**Target Production Domain:** `https://kalyanicasttech.com`  
**Hosting Provider:** Netlify (Enterprise Edge CDN)  
**Security Standard:** Strict Confidentiality, Zero Secret Exposure, Pre-Flight Hardening

---

## 1. Environment Variable Architecture

All build and runtime parameters are managed through non-sensitive, declarative configuration in `netlify.toml` and Netlify Site Settings:

| Environment Variable | Configured Value (Production Target) | Scope | Purpose | Secret Exposure Risk |
| :--- | :--- | :--- | :--- | :---: |
| `DEPLOY_TARGET` | `netlify` | Build & SSR Runtime | Directs Nitro/Vite to generate Netlify Edge Functions | **NONE** (Public Flag) |
| `NODE_VERSION` | `24.18.0` (or `22.x` LTS) | Build Container | Specifies Node.js execution runtime | **NONE** (Public Flag) |
| `VITE_SITE_URL` | `https://kalyanicasttech.com` | Client & Sitemap Generator | Sets canonical origin for sitemap and metadata | **NONE** (Public URL) |

*Security Assurance:* No API keys, database credentials, SMTP passwords, private tokens, or administrative secrets are embedded in source code, repository commits, or client-delivered bundles.

---

## 2. Build and Deployment Pipeline

- **Repository Source:** Active release candidate on branch `feature/kct-step5b23-release-readiness` (Commit: `551d8ce`).
- **Build Command:** `npm run build` (executing Vite v8.1.5 client compilation and Nitro server-side bundle generation).
- **Client Publish Directory:** `dist/client`.
- **Serverless / SSR Output:** `dist/server` packaged automatically into Netlify Functions runtime (`server.mjs`).
- **Build Duration:** Approximately 25-30 seconds on Netlify CI/CD build agents.

---

## 3. Canonical Domain & SSL Readiness

- **Primary Canonical Domain:** `https://kalyanicasttech.com`.
- **Alternative Domain Alias:** `https://www.kalyanicasttech.com` (redirects 301 to apex `https://kalyanicasttech.com`).
- **Staging / Preview Domain:** `https://6aed8c44d29ce6873c7c2631--kalyanicasttech.netlify.app`.
- **SSL / TLS Certificate:** Netlify Automated Let's Encrypt Wildcard Certificate (TLS 1.3 enabled).
- **HTTP Strict Transport Security (HSTS):** Configured with `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`.

---

## 4. HTTP Headers and Security Directives

Defined in `netlify.toml` and applied globally across all edge nodes:

```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

- **Clickjacking Protection:** `X-Frame-Options: DENY` prevents framing by malicious third-party origins.
- **MIME Sniffing Prevention:** `X-Content-Type-Options: nosniff` enforces strict MIME type parsing.
- **Cache Policy:** Fingerprinted static assets in `/assets/` are cached for 1 year (`max-age=31536000, immutable`). HTML documents are served fresh (`no-cache`) to ensure instant availability of updates.

---

## 5. Routing and Redirect Infrastructure

- **Primary Redirects (`netlify.toml`):**
  - `/company` $\rightarrow$ `/about-us` (301)
  - `/company/leadership` $\rightarrow$ `/leadership` (301)
  - `/manufacturing/facilities-locations` $\rightarrow$ `/facilities` (301)
  - `/containers-solutions` $\rightarrow$ `/products-applications` (301)
  - `/manufacturing/testing-quality` $\rightarrow$ `/engineering-quality` (301)
  - `/investors` $\rightarrow$ `/investor-relations` (301)
  - `/business-enquiry` $\rightarrow$ `/contact` (301)
- **Historical URL Redirection:** 34 historical paths and 410 spam filters are executed via `handleLegacyRouting` in TanStack Router before request processing.
- **Single Page Application Fallback:** `/* /index.html 200` ensures client-side routing works seamlessly on deep page reloads.

---

## 6. Form Submission & Notification Destinations

- **Enquiry Endpoint:** Handled via TanStack Router server functions with built-in validation.
- **Notification Destinations:** Production notifications route to verified corporate mailboxes (`info@kalyanicasttech.com`, `business.development@kalyanicasttech.com`).
- **Spam Mitigation:** CSRF verification middleware and client IP rate limiting (maximum 5 requests per minute).

---

## 7. Search Engine Directives & Sitemap

- **Robots Directives (`public/robots.txt`):** Allows Googlebot, Bingbot, and legitimate search crawlers; references canonical sitemap.
- **Sitemap (`public/sitemap.xml`):** Fully populated with 44 verified canonical URLs and appropriate update frequencies.
- **Staging Isolation:** Preview deploys automatically inject `X-Robots-Tag: noindex, nofollow, noarchive`, preventing staging content from leaking into search engine indexes before official launch.

---

## 8. Rollback Procedure & Disaster Recovery

- **Atomic Deployments:** Netlify maintains immutable deployment history. Every deploy creates a unique deploy ID and permanent URL.
- **Instant One-Click Rollback:** In the event of an unexpected post-launch incident, production traffic can be instantly rolled back to the previous stable deployment (`6aed75c8e850a87a9d02e1b6` or baseline) via Netlify CLI or admin console in under 5 seconds without rebuilding.
- **Protected Release Baseline:** `release/kct-website-v1` at `f1e26bb72a15f8c35665b8cf6444c621bb8114fd` remains completely untouched in Git as an immutable fallback point.

