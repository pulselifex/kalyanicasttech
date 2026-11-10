# WP-5B.25B — GIT CHANGE & STAGING DEPLOYMENT RECORD

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.25B  
**Date:** 06 November 2026  
**Repository Working Directory:** `Website_Codebase/`  
**Active Working Branch:** `feature/kct-step5b25b-discoverability-closure`  
**Base Source Commit (HEAD):** `a5ea24fb0ca8e865480d21895f06eebba5df6342`  
**Parent Source Commit:** `60849c6b5ee2e481a93e80de0e8446e5d5440b78`  
**Protected Release Baseline:** `release/kct-website-v1` at `f1e26bb72a15f8c35665b8cf6444c621bb8114fd` (STRICTLY FROZEN)  
**Production Domain:** `https://kalyanicasttech.com` (STRICTLY FROZEN)  
**Active Netlify Deploy ID:** `6aeded590ed2d25a0ee82312`  
**Live Staging URL:** `https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app/`  
**Status:** `READY FOR INDEPENDENT CLAUDE REVIEW`  

---

## 1. Git Repository Lineage & State Verification

```text
[release/kct-website-v1] @ f1e26bb (STRICTLY FROZEN — MASTER PRODUCTION BASELINE)
       │
       └── [feature/kct-step5b25-seo-smo-aieo] @ f1206fe / 60849c6
              │
              └── [feature/kct-step5b25a-indexability-correction] @ a5ea24f
                     │
                     └── [feature/kct-step5b25b-discoverability-closure] (ACTIVE WORKING BRANCH)
                            │
                            ├── fix(naming): eradicate residual "Gati Shakti Cargo Terminal" in pages.json
                            ├── fix(naming): eliminate unapproved public abbreviation "GCT" in gallery meta
                            ├── fix(routing): narrow "via Gandhidham-Samakhiali" claim to verified IR network
                            ├── fix(social): replace single-quote image filenames with clean PNG assets
                            ├── fix(terms): harmonize lowercase terminal descriptive nouns in about-us.tsx
                            ├── docs(step5b25b): 13-part evidence pack & 12 visual capture screenshots
                            └── test(vitest): 243/243 passing automated sensors & clean SSR build
```

### Exact Git Verification Log:
- **`git branch --show-current`:** `feature/kct-step5b25b-discoverability-closure`
- **`git rev-parse HEAD`:** `a5ea24fb0ca8e865480d21895f06eebba5df6342`
- **`git rev-parse HEAD~1`:** `60849c6b5ee2e481a93e80de0e8446e5d5440b78`
- **`git log -n 1 --pretty=format:"%H %P %an %ad %s"`:**
  `a5ea24fb0ca8e865480d21895f06eebba5df6342 60849c6b5ee2e481a93e80de0e8446e5d5440b78 Mohammad Arshad Fri Nov 6 20:50:34 2026 +0530 feat(wp-5b.25a): correct search indexability, canonical strategy, metadata & structured data`

---

## 2. Controlled Working Tree File Changes

Only 3 source files were touched in the working tree for WP-5B.25B discoverability closure:

| Modified File | Lines Changed | Description of Controlled Edit | Rationale |
| :--- | :---: | :--- | :--- |
| `src/content/pages.json` | 6 lines (+3 / -3) | 1. Line 1199: `"Gati Shakti Cargo Terminal"` -> `"Gati Shakti Terminal"`.<br>2. Line 1255: removed `"via Gandhidham-Samakhiali"`.<br>3. Line 2697: `"GCT Shivlakha operations"` -> `"Shivlakha terminal operations"`. | Eradicates residual non-canonical nomenclature and narrows unverified route claim. |
| `src/content/seo-metadata.ts` | 4 lines (+2 / -2) | Replaced `/assets/containers/20'%20ISO%20Container%20on%20rake.png` with `/assets/containers/ISO%20Container.png` for `/products-applications` and `/resources/news-media`. | Single quote in filename encoded to `&#x27;` in HTML, causing HTTP 404 on external social scrapers. |
| `src/routes/about-us.tsx` | 4 lines (+2 / -2) | Replaced lowercase "cargo terminals" (line 380) with "multimodal terminal operations" and "cargo terminal" (line 404) with "freight terminal". | Harmonizes descriptive terminology to prevent ambiguity with retired legacy entity titles. |

---

## 3. Staging Deployment Status & Protection Verification

```text
Netlify Deploy Summary
─────────────────────────────────────────────────────────────────
Deploy ID:          6aeded590ed2d25a0ee82312
Account ID:         68a6032224c12528cfd7cb7b
Context:            deploy-preview
Draft URL:          https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app
Build Duration:     1m 3.8s
Asset Upload:       31 files + 1 function
SSR Worker:         server.js (23.67 kB / 6.91 kB gzip)
Edge Nodes:         Netlify Global CDN (Asia/Pacific active)
Build Status:       COMPLETE / SUCCESS (0 errors)
Header Protection:  X-Robots-Tag: noindex, nofollow, noarchive, noindex
Canonical Target:   https://kalyanicasttech.com (100% production domain)
```

### Production Protection Invariant:
- `release/kct-website-v1` remains at `f1e26bb72a15f8c35665b8cf6444c621bb8114fd` (100% untouched).
- Zero production deployments executed.
- Zero DNS records modified (`kalyanicasttech.com` authoritative nameservers untouched).

---

## 4. Verification Check Conclusion

All changes are strictly limited to verified, evidence-backed discoverability and metadata integrity fixes. The code compiles cleanly, passes 243/243 tests, builds production SSR assets with 0 errors, and operates securely on Netlify staging with full search crawler protection.
