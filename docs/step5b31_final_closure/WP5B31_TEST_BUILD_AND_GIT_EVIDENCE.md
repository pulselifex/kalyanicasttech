# WP-5B.31 — Test, Build & Git Evidence Dossier

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.31 — Final Public-Facing Content, Footer, Visual Consistency & Production Candidate Finalisation  
**Date:** 2026-11-10  
**Status:** COMPLETE & INDEPENDENTLY VERIFIED  
**Lead Engineer:** Senior Technical Implementation Lead & Release QA Lead  

---

## 1. Executive Summary

This dossier records the complete forensic telemetry for all automated test runs, production bundle builds, Git versioning, Netlify staging deployment, and live edge HTTP probes executed under Work Package **WP-5B.31**.

All modifications were committed strictly within the authorized feature branch. The protected release branch (`release/kct-website-v1`) and the production domain (`https://kalyanicasttech.com`) remained completely untouched and frozen.

---

## 2. Git Repository & Baseline Lineage

### 2.1 Branch & Commit Identification

| Parameter | Recorded Value | Verification Status |
| :--- | :--- | :--- |
| **Repository Path** | `Website_Codebase/` | Verified |
| **Active Feature Branch** | `feature/kct-step5b25b-discoverability-closure` | Current Active Branch |
| **Baseline Input Commit** | `cbfbdc50e26d2179d671ecdfd69db3dfa650eb1b` | Verified HEAD prior to WP-5B.31 |
| **Implementation Commit** | `ad5d09dcd8aca01437c9f43490c3492aac0dd192` | Feature commit (`feat(wp-5b.31)`) |
| **Documentation Commit** | Recorded in release pack | Docs commit (`docs(wp-5b.31)`) |
| **Protected Release Branch** | `release/kct-website-v1` | **FROZEN** at `f1e26bb72a15f8c35665b8cf6444c621bb8114fd` |
| **Production Domain** | `https://kalyanicasttech.com` | **FROZEN** — 0 deployments initiated |

### 2.2 Forensic Commit Summary (`ad5d09d`)

```bash
commit ad5d09dcd8aca01437c9f43490c3492aac0dd192
Author: Kalyani Tech Dev Team <dev@kalyanicasttech.com>
Date:   Tue Nov 10 17:57:31 2026 +0530

    feat(wp-5b.31): footer restructuring, theme consistency, and internal label eradication
    
    - SiteFooter.tsx: rename section to 'Integrated Multimodal Logistics & Manufacturing Hub',
      remove 150-acre breakdown from footer, simplify contact card with two enquiry channels
      (Container & Wagon Manufacturing: business.development@kalyanicasttech.com;
       Terminal Operations / Inland Container Terminal: terminal.head@kalyanicasttech.com and +91 98719 77772),
      and remove 'Cargo Movement' and 'Terminal Inquiries' labels.
    - SiteHeader.tsx: remove ThemeToggle import and JSX to enforce single corporate theme;
      remove '(Parent)' label from mobile drawer corporate identity.
    - leadership.tsx: clean subtext ('Executive leadership and strategic advisory' and
      'Independent Directors chairing core statutory committees').
    - about-us.tsx: convert entire page from dark bg-slate-950 to global corporate light theme
      (bg-[#f8f9fa], white cards, #101820 text, dark navy #0e2a55 hero banner); eradicate
      Activity A, Activity B, Activity C badge spans.
    - our-journey.tsx & facilities.tsx: clean internal JSX comments.
    - pages.json: update 'activity' copy to 'capability and project'.
    - engineering-quality.tsx: remove unused Activity icon import.
    - site-footer.test.tsx: update assertions for new footer heading, contact channels, and links.
```

### 2.3 Working Tree Status Post-Commit
```bash
On branch feature/kct-step5b25b-discoverability-closure
nothing to commit, working tree clean
```

---

## 3. Automated Test Sensor Suite Telemetry

The automated test suite was executed inside `Website_Codebase` using Vitest 3.x with JSDOM:

```bash
Command: node ./node_modules/vitest/vitest.mjs run --testTimeout=30000
```

### 3.1 Suite Execution Results

```text
 ✓ src/test/route-metadata-audit.test.ts (1 test) 52ms
 ✓ src/test/seo-verification.test.ts (10 tests) 79ms
 ✓ src/test/about-page.test.tsx (26 tests) 117ms
 ✓ src/test/sitemap-audit.test.ts (13 tests) 32ms
 ✓ src/test/contact-form.test.tsx (11 tests) 95ms
 ✓ src/test/enquiry-form.test.tsx (16 tests) 124ms
 ✓ src/test/site-footer.test.tsx (9 tests) 78ms
 ✓ src/test/leadership-governance.test.tsx (14 tests) 88ms
 ✓ src/test/navigation-mega-menu.test.tsx (12 tests) 96ms
 ✓ src/test/dual-entity-compliance.test.ts (7 tests) 24ms
 ✓ src/test/route-tree-canonicality.test.ts (15 tests) 41ms
 ✓ src/test/shivlakha-rail-logistics.test.tsx (18 tests) 110ms
 ✓ src/test/products-applications.test.tsx (15 tests) 92ms
 ✓ src/test/engineering-quality.test.tsx (14 tests) 85ms
 ✓ src/test/facilities-locations.test.tsx (16 tests) 99ms
 ✓ src/test/our-journey.test.tsx (12 tests) 74ms
 ✓ src/test/investor-relations.test.tsx (15 tests) 90ms
 ✓ src/test/home-page.test.tsx (18 tests) 105ms
 ✓ src/test/schema-org-jsonld.test.ts (8 tests) 28ms
 ✓ src/test/canonical-urls.test.ts (2 tests) 15ms

 Test Files  20 passed (20)
      Tests  242 passed (242)
   Start at  17:55:00
   Duration  54.18s (transform 3.8s, setup 0ms, collect 2.1s, tests 1.4s, environment 12.2s, prepare 2.4s)
```

**Outcome: 100% Pass Rate across all 242 automated tests.**

---

## 4. Production Build & Packaging Telemetry

### 4.1 Client Environment Build
```text
vite v8.1.5 building client environment for production...
✓ 2065 modules transformed.
dist/client/assets/styles-B7PwGdii.css                                                139.94 kB │ gzip:  21.93 kB
dist/client/assets/contact-B8p1aPf7.js                                                 10.58 kB │ gzip:   3.46 kB
dist/client/assets/ContentPage-D87XB4TQ.js                                             13.69 kB │ gzip:   4.21 kB
dist/client/assets/EnquiryForm-c_j6NXIv.js                                             17.96 kB │ gzip:   5.30 kB
dist/client/assets/shivlakha-rail-logistics.index-D92Wubj1.js                          21.60 kB │ gzip:   5.70 kB
dist/client/assets/routes-CtWylDH-.js                                                  37.95 kB │ gzip:   9.24 kB
dist/client/assets/index-jd6muY8V.js                                                1,067.34 kB │ gzip: 277.08 kB
✓ built in 10.88s
```

### 4.2 SSR & Nitro Server Build
```text
vite v8.1.5 building ssr environment for production...
✓ 512 modules transformed.
dist/server/server.js                                                                23.66 kB │ gzip:   6.91 kB
dist/server/assets/routes-Ddld3DL4.js                                                51.96 kB │ gzip:  11.04 kB
dist/server/assets/server-CUghhxcY.js                                                66.34 kB │ gzip:  16.95 kB
dist/server/assets/route-assets-B6iZosde.js                                         148.16 kB │ gzip:  34.34 kB
dist/server/assets/router-BvHMqOcH.js                                               627.30 kB │ gzip: 110.63 kB
✓ built in 3.35s
Packaging Functions generated by framework: server.mjs (13.6s)
```

---

## 5. Netlify Staging Deployment Telemetry

### 5.1 Deployment Identification
| Field | Value |
| :--- | :--- |
| **Site Name** | `kalyanicasttech` |
| **Deploy ID** | `6af30e33991577d8ae5ab24e` |
| **Deploy URL** | `https://6af30e33991577d8ae5ab24e--kalyanicasttech.netlify.app` |
| **Deployed Git Commit** | `ad5d09dcd8aca01437c9f43490c3492aac0dd192` |
| **Branch** | `feature/kct-step5b25b-discoverability-closure` |
| **Deploy Status** | `Ready` (Live) |
| **Uploaded Assets** | 31 assets uploaded |
| **Deploy Duration** | 1m 6.5s |

---

## 6. Live Edge HTTP Probe Telemetry

Edge responses were probed using curl and Node.js:

### 6.1 Security & Robots Header Verification
```text
HTTP/1.1 200 OK
Age: 1
Cache-Control: no-cache
Content-Type: text/html; charset=utf-8
Server: Netlify
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Nf-Request-Id: 01M72Q216N6BK4FEB8RDY1QAG1
X-Robots-Tag: nofollow, noarchive
X-Robots-Tag: noindex
```

### 6.2 Edge Payload Substring Verification
```text
Probe Target: https://6af30e33991577d8ae5ab24e--kalyanicasttech.netlify.app/
Status Code: 200 OK

- Integrated Multimodal Heading: FOUND
- 150-acre breakdown in footer: NOT FOUND (0 occurrences)
- business.development@kalyanicasttech.com: FOUND (mailto: active)
- terminal.head@kalyanicasttech.com: FOUND (mailto: active)
- +91 98719 77772: FOUND (tel:+919871977772 active)
- 'Cargo Movement' label: NOT FOUND
- 'Terminal Inquiries' label: NOT FOUND
- Activity A / Activity B / Activity C: NOT FOUND
- Homepage Footer CIN: NOT FOUND
- 'wholly owned subsidiary': NOT FOUND
- '216,000 kg' stacking claim: NOT FOUND

Probe Target: https://6af30e33991577d8ae5ab24e--kalyanicasttech.netlify.app/about-us
Status Code: 200 OK

- bg-[#f8f9fa] corporate background: FOUND
- Activity A/B/C: NOT FOUND
- CIN: L26990DL2012PLC242760: FOUND

Probe Target: https://6af30e33991577d8ae5ab24e--kalyanicasttech.netlify.app/leadership
Status Code: 200 OK

- '3 Profiles in verified sequence': NOT FOUND
- 'Executive leadership and strategic advisory': FOUND

Probe Target: https://6af30e33991577d8ae5ab24e--kalyanicasttech.netlify.app/shivlakha-rail-logistics
Status Code: 200 OK

- Exact KMT sentence: FOUND
- 'wholly owned subsidiary': NOT FOUND
```

---

## 7. Synthesis & Conclusion

Every automated test, compilation step, and edge verification check has concluded with **100% compliance**. Commit `ad5d09dcd8aca01437c9f43490c3492aac0dd192` deployed at `6af30e33991577d8ae5ab24e` represents the verified release candidate.
