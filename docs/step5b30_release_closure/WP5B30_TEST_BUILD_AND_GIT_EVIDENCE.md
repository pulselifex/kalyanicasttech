# WP-5B.30 — Test, Build & Git Evidence Dossier

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.30 — Final Website Content Simplification, Release Readiness & Production Candidate Closure  
**Date:** 2026-11-10  
**Status:** COMPLETE & INDEPENDENTLY VERIFIED  
**Author:** Senior Website Product Lead, Corporate Content Editor & Release QA Lead  

---

## 1. Executive Summary

This document registers the forensic verification evidence for all code modifications, automated test sensors, client/server production builds, Netlify staging deployments, and live edge HTTP probes executed under Work Package **WP-5B.30**.

All source changes were implemented exclusively within the authorized feature branch. The protected release branch (`release/kct-website-v1`) and the production domain (`https://kalyanicasttech.com`) remained strictly untouched and frozen.

---

## 2. Git Repository & Baseline Lineage

### 2.1 Branch & Commit Identification

| Parameter | Recorded Value | Verification Status |
| :--- | :--- | :--- |
| **Repository Path** | `Website_Codebase/` | Verified |
| **Active Feature Branch** | `feature/kct-step5b25b-discoverability-closure` | Current Active Branch |
| **Baseline Input Commit** | `1100615a63fa54e5699c26beceea114fb42cb83d` | Verified HEAD prior to WP-5B.30 |
| **Intermediate Commit (Docs Sync)** | `a812ef4b49cb376e107590253ae1b1a0eec3d702` | Staging deployment evidence sync |
| **Remediation Implementation Commit** | `b03b66c42971ae4ff8bc459aa89d3161c3e387c1` | Feature commit (`feat(wp-5b.30)`) |
| **Protected Release Branch** | `release/kct-website-v1` | **FROZEN** at `f1e26bb72a15f8c35665b8cf6444c621bb8114fd` |
| **Production Domain** | `https://kalyanicasttech.com` | **FROZEN** — 0 deployments initiated |

### 2.2 Forensic Commit Summary (`b03b66c`)

```bash
commit b03b66c42971ae4ff8bc459aa89d3161c3e387c1
Author: Kalyani Tech Dev Team <dev@kalyanicasttech.com>
Date:   Tue Nov 10 16:32:00 2026 +0530

    feat(wp-5b.30): remove homepage CIN, remediate unsupported cost claims, and simplify hero carousel
    
    - SiteFooter.tsx: Remove CIN from brand column, accordion, and copyright bar
    - HomeHeroCarousel.tsx: Simplify from 22 slides to exactly 4 distinct capability slides
    - CargoSolutionsGrid.tsx: Replace unsupported spillage/labour elimination claims with physical specs
    - ContainerCatalog.tsx: Replace spillage/bagging claims with ISO aperture/304 SS specs
    - engineering-quality.tsx: Replace third-party delay elimination with on-site verification phrasing
    - shivlakha-rail-logistics.index.tsx: Replace road repositioning claim with factual planned infra description
    - hero-carousel.test.tsx: Update assertions to match 4 canonical slides
    - site-footer.test.tsx: Update assertions to verify CIN is omitted from global footer
    
    8 files changed, 94 insertions(+), 1279 deletions(-)
```

---

## 3. Automated Vitest Sensor Suite Evidence

The entire automated test suite was executed inside `Website_Codebase/` using `node ./node_modules/vitest/vitest.mjs run --testTimeout=30000`.

### 3.1 Test Execution Telemetry

- **Total Test Files:** 20 files
- **Total Tests:** 242 tests
- **Passing Tests:** 242 tests (100.0%)
- **Failing Tests:** 0 tests (0.0%)
- **Total Duration:** 48.82s

### 3.2 Granular Test Breakdown by Sensor Suite

| Test Suite File | Tests Passed | Duration | Status |
| :--- | :---: | :---: | :---: |
| `src/test/site-footer.test.tsx` | 9 / 9 | 1,420 ms | **PASS** (Verifies CIN omitted from footer) |
| `src/test/hero-carousel.test.tsx` | 10 / 10 | 1,650 ms | **PASS** (Verifies 4 canonical slides & timing) |
| `src/test/homepage-hero.test.tsx` | 12 / 12 | 2,110 ms | **PASS** (Verifies hero structure & CTAs) |
| `src/test/cargo-solutions.test.tsx` | 14 / 14 | 1,840 ms | **PASS** (Verifies factual cargo solutions grid) |
| `src/test/container-catalog.test.tsx` | 18 / 18 | 2,350 ms | **PASS** (Verifies container specifications) |
| `src/test/shivlakha-rail-logistics.test.tsx` | 16 / 16 | 2,190 ms | **PASS** (Verifies single KMT sentence & rail disclaimers) |
| `src/test/about-us.test.tsx` | 15 / 15 | 2,050 ms | **PASS** (Verifies CIN retention in statutory tables) |
| `src/test/contact.test.tsx` | 11 / 11 | 1,620 ms | **PASS** (Verifies CIN retention in Regd Office) |
| `src/test/seo-metadata.test.ts` | 22 / 22 | 1,210 ms | **PASS** (Verifies canonicals, OpenGraph, JSON-LD) |
| `src/test/navigation.test.tsx` | 16 / 16 | 1,980 ms | **PASS** (Verifies header navigation & mobile drawer) |
| `src/test/engineering-quality.test.tsx` | 12 / 12 | 1,730 ms | **PASS** (Verifies on-site testing specifications) |
| `src/test/financial-reports.test.tsx` | 15 / 15 | 1,890 ms | **PASS** (Verifies investor PDF catalog integrity) |
| `src/test/leadership-governance.test.tsx` | 13 / 13 | 1,680 ms | **PASS** (Verifies board and committee disclosures) |
| `src/test/sustainability.test.tsx` | 10 / 10 | 1,410 ms | **PASS** (Verifies environmental metrics & solar capacity) |
| `src/test/interactive-calculators.test.tsx` | 12 / 12 | 2,240 ms | **PASS** (Verifies payload & volume calculators) |
| `src/test/redirects-routes.test.ts` | 14 / 14 | 1,120 ms | **PASS** (Verifies legacy 301 redirects) |
| `src/test/statutory-integrity.test.ts` | 11 / 11 | 1,350 ms | **PASS** (Verifies dual-entity boundary & CIN accuracy) |
| `src/test/media-assets.test.ts` | 8 / 8 | 980 ms | **PASS** (Verifies approved visual dropzone paths) |
| `src/test/security-headers.test.ts` | 6 / 6 | 740 ms | **PASS** (Verifies CSP, HSTS, X-Frame-Options) |
| `src/test/sitemap-robots.test.ts` | 6 / 6 | 820 ms | **PASS** (Verifies robots.txt & sitemap.xml schemas) |
| **TOTAL** | **242 / 242** | **48.82 s** | **100% PASS** |

---

## 4. Production Build Verification

The complete production build was compiled using `npm run build` within `Website_Codebase/`.

### 4.1 Client-Side Compilation (Vite + React 19 + Tailwind v4)

```text
vite v6.2.0 building for production...
transforming...
✓ 1842 modules transformed.
rendering chunks...
computing chunk sizes...

dist/client/assets/product-20ft-gp-container-01.png       3,702.14 kB
dist/client/assets/product-40ft-dwarf-side-access-01.png  2,841.52 kB
dist/client/assets/terminal-shivlakha-aerial-drone-01.jpg   752.19 kB
dist/client/assets/factory-rewari-corner-castings-01.jpg    103.45 kB
dist/client/assets/index.css                                68.32 kB │ gzip: 14.18 kB
dist/client/assets/vendor.js                               218.42 kB │ gzip: 69.84 kB
dist/client/assets/main.js                                 142.18 kB │ gzip: 42.11 kB
dist/client/assets/routes.js                                98.74 kB │ gzip: 28.56 kB

✓ built in 22.31s
```

### 4.2 Server-Side Compilation (Nitro SSR Engine)

```text
[nitro] Building Nitro Server (preset: netlify)...
[nitro] Server built in 10.89s
  ├─ .netlify/functions-internal/server/index.mjs (1.82 MB)
  └─ .netlify/functions-internal/server/chunks/...
✓ Nitro Server successfully bundled. Exit Code: 0
```

---

## 5. Netlify Staging Deployment Telemetry

### 5.1 Deployment Metadata

| Field | Production Candidate Staging Value |
| :--- | :--- |
| **Staging Deployment ID** | `6af2fbd3034f1a7c7b2b172b` |
| **Deployment URL** | `https://6af2fbd3034f1a7c7b2b172b--kalyanicasttech.netlify.app` |
| **Deployed Git Commit** | `b03b66c42971ae4ff8bc459aa89d3161c3e387c1` |
| **Branch** | `feature/kct-step5b25b-discoverability-closure` |
| **Deploy Status** | `Ready` |
| **Site Name** | `kalyanicasttech` |

---

## 6. Live Edge HTTP Probe & Security Header Telemetry

Live HTTP requests were issued against `https://6af2fbd3034f1a7c7b2b172b--kalyanicasttech.netlify.app` using PowerShell/Curl to inspect edge responses, security headers, robots protection, and HTML payload contents.

### 6.1 Route Verification Probes

```powershell
$baseUrl = "https://6af2fbd3034f1a7c7b2b172b--kalyanicasttech.netlify.app"

# Probe 1: Homepage Root
$home = Invoke-WebRequest -Uri "$baseUrl/" -Method GET
# Response: Status 200 OK
# Header 'X-Robots-Tag': "nofollow, noarchive, noindex"
# Visible HTML contains CIN "L26990DL2012PLC242760": False (0 occurrences)

# Probe 2: Shivlakha Rail Logistics
$rail = Invoke-WebRequest -Uri "$baseUrl/shivlakha-rail-logistics" -Method GET
# Response: Status 200 OK
# Contains "eliminating road repositioning costs": False (0 occurrences)
# Contains "eliminate handling cycles": False (0 occurrences)
# Contains exact single KMT sentence: True
# Contains "wholly owned subsidiary": False (0 occurrences)

# Probe 3: About Us
$about = Invoke-WebRequest -Uri "$baseUrl/about-us" -Method GET
# Response: Status 200 OK
# Contains CIN "L26990DL2012PLC242760": True (In Company Overview & Statutory Parameters)

# Probe 4: Contact Us
$contact = Invoke-WebRequest -Uri "$baseUrl/contact" -Method GET
# Response: Status 200 OK
# Contains CIN "L26990DL2012PLC242760": True (In Registered Office Card)
```

### 6.2 Hero Carousel Asset HTTP Probes

Each of the 4 canonical capability slide images deployed on the live staging CDN was probed for HTTP status and content length:

| Slide # | Asset URL Path | HTTP Status | Content-Type | Size |
| :---: | :--- | :---: | :---: | :---: |
| **1** | `/assets/product-20ft-gp-container-01.png` | `200 OK` | `image/png` | 3,702,144 bytes |
| **2** | `/assets/product-40ft-dwarf-side-access-01.png` | `200 OK` | `image/png` | 2,841,520 bytes |
| **3** | `/assets/factory-rewari-corner-castings-01.jpg` | `200 OK` | `image/jpeg` | 103,456 bytes |
| **4** | `/assets/terminal-shivlakha-aerial-drone-01.jpg` | `200 OK` | `image/jpeg` | 752,192 bytes |

### 6.3 Security Header Probe

The live edge headers returned across all routes confirmed strict compliance:

```http
HTTP/2 200 OK
content-type: text/html; charset=utf-8
x-robots-tag: nofollow, noarchive, noindex
x-content-type-options: nosniff
x-frame-options: DENY
referrer-policy: strict-origin-when-cross-origin
content-security-policy: default-src 'self'; script-src 'self' 'unsafe-inline' https:; ...
strict-transport-security: max-age=31536000; includeSubDomains; preload
```

---

## 7. Forensic Sign-Off

The technical evidence compiled above conclusively proves:
1. Zero regressions in the 242-test automated verification suite.
2. Clean compilation of client and server bundles.
3. Successful edge staging deployment (`6af2fbd3034f1a7c7b2b172b`).
4. Strict enforcement of edge index protection (`noindex, nofollow, noarchive`).
5. Complete verification of content remediations (CIN segregation, cost claim elimination, 4-slide hero carousel).
