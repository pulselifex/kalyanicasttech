# WP-5B.32 — Management-Authorised Publication Record & Post-Launch Visual Backlog

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.32 — Management-Authorised Website Publication & Post-Launch Visual Backlog  
**Date:** 2026-11-10  
**Authority:** Executive Management Instruction  
**Publication Status:** **PUBLISHED — MAIN NETLIFY SITE VERIFIED**  
**Destination URL:** `https://kalyanicasttech.netlify.app`  
**Deploy ID:** `6af3146f0deeda08cf9fa579`  
**Deploy Timestamp:** 2026-11-10T12:57:00Z (18:27:00 IST)  
**Deployed Commit:** `928fe7b28ccfdf788b1ccdda30e5b662128e4183` (incorporates `ad5d09dcd8aca01437c9f43490c3492aac0dd192`)  
**Protected Release Branch:** `release/kct-website-v1` (FROZEN at `f1e26bb72a15f8c35665b8cf6444c621bb8114fd`)  
**Canonical Domain:** `https://kalyanicasttech.com` (FROZEN — Untouched, zero DNS or routing changes)  
**Rollback Staging Reference:** `https://6af30e33991577d8ae5ab24e--kalyanicasttech.netlify.app/`  

---

## 1. Executive Publication Summary

Under explicit management authorization, the accepted **WP-5B.31** website release candidate has been published directly to the main Netlify production address: **`https://kalyanicasttech.netlify.app`**.

### Pre-Deployment Verification
1. **Branch & Lineage:** Working exclusively on `feature/kct-step5b25b-discoverability-closure` at commit `928fe7b28ccfdf788b1ccdda30e5b662128e4183` which embeds implementation commit `ad5d09dcd8aca01437c9f43490c3492aac0dd192`.
2. **Automated Sensors:** 100% pass rate across all 20 test suites and 242 tests in 116.85s.
3. **Compilation:** Client (`dist/client/`, 1,067 kB JS, 139.9 kB CSS) and Nitro SSR bundles built cleanly with exit code 0.
4. **Site & Domain Safety:** Verified that the Netlify project `kalyanicasttech` (ID: `1cbb9092-1520-49a8-b194-fe8942475330`) publishes directly to `https://kalyanicasttech.netlify.app` without modifying the canonical corporate domain `https://kalyanicasttech.com`, DNS records, or domain aliases.

---

## 2. Live Edge Telemetry & Verification Matrix

| Verification Target | Probe Result on `https://kalyanicasttech.netlify.app` | Status |
| :--- | :--- | :---: |
| **HTTP Status Code** | `HTTP/1.1 200 OK` | **VERIFIED** |
| **Security Headers** | `X-Content-Type-Options: nosniff`, `Strict-Transport-Security`, `X-Frame-Options: DENY` | **VERIFIED** |
| **Robots & Indexing** | `X-Robots-Tag: nofollow, noarchive` (`noindex` omitted on main production address) | **VERIFIED** |
| **Homepage Loading** | Loads cleanly with hero carousel, brand narrative, and corporate cards | **VERIFIED** |
| **Navigation & Drawer** | Desktop mega-menu and mobile drawer functional; `(Parent)` label absent | **VERIFIED** |
| **Route Coverage** | `/about-us`, `/leadership`, `/our-journey`, `/facilities`, `/engineering-quality`, `/products-applications`, `/investor-relations`, `/contact` load 200 OK | **VERIFIED** |
| **Shivlakha Project Page** | Loads 200 OK; Gati Shakti Terminal described as operational; Inland Container Terminal described as under development | **VERIFIED** |
| **Exact KMT Sentence** | `"The Shivlakha Integrated Project is being developed by Kalyani Cast Tech Limited and operated by SPV KMT Engineering Private Limited"` present verbatim in intro | **VERIFIED** |
| **Footer Section Heading** | `Integrated Multimodal Logistics & Manufacturing Hub` present on desktop & mobile | **VERIFIED** |
| **150-Acre Footer Removal** | 150-acre breakdown absent from footer (preserved on `/facilities` and `/shivlakha-rail-logistics`) | **VERIFIED** |
| **Contact Card Channels** | Address accurate; `business.development@kalyanicasttech.com` (`mailto:`); `terminal.head@kalyanicasttech.com` (`mailto:`); `+91 98719 77772` (`tel:`) | **VERIFIED** |
| **Developer Labels Absence** | 0 occurrences of `Activity A`, `Activity B`, `Activity C`, or temporary developer notes | **VERIFIED** |
| **CIN Disclosures** | CIN absent from homepage visual DOM & shared footer; present on `/about-us` and `/contact` | **VERIFIED** |
| **Core Static Assets** | Stylesheet (`/assets/styles-*.css`: 200 OK), Logo (`/assets/company/Kalyani Cast Tech Logo.jpeg`: 200 OK), Favicon (`/favicon.ico`: 200 OK) | **VERIFIED** |
| **Rollback Staging Reference** | `https://6af30e33991577d8ae5ab24e--kalyanicasttech.netlify.app/` intact with staging `noindex` controls | **VERIFIED** |

---

## 3. Post-Launch Visual Refinement Backlog (White Space & Information Density)

Per executive instruction, the visual refinements below are recorded as a **future backlog for post-launch maintenance**. They shall **not** delay publication or trigger another redesign cycle:

1. **Section Vertical Padding (`py-16` / `py-20`):**
   - *Observation:* Several full-width content sections on `/about-us`, `/facilities`, and `/engineering-quality` use `py-16 sm:py-20` (64px to 80px top/bottom padding), creating excessive vertical scroll distance between content blocks.
   - *Target Refinement:* Standardize cross-route section vertical padding to a compact `py-10 sm:py-14` (40px to 56px).
2. **Inter-Section Vertical Rhythm:**
   - *Observation:* Margins between subheadings, category badge strips, and primary grid containers vary between `mb-6`, `mb-8`, and `mb-12`.
   - *Target Refinement:* Align vertical rhythm to a consistent 4-point spacing scale (`mb-4` for badge-to-title, `mb-6` for title-to-grid).
3. **Content Container Max-Widths:**
   - *Observation:* Introductory paragraphs on certain technical sub-pages are constrained to `max-w-2xl` or `max-w-3xl`, creating narrow text columns with excessive lateral white space on 1440px+ displays.
   - *Target Refinement:* Expand intro containers to `max-w-4xl` or `max-w-5xl` for balanced reading width on wide viewports.
4. **Heading Hierarchy & Line-Height Spacing:**
   - *Observation:* Selected secondary section headings (`h2`) use `text-3xl sm:text-4xl` with generous leading (`leading-relaxed`), taking up substantial vertical viewport real estate.
   - *Target Refinement:* Tune `h2` to `text-2xl sm:text-3xl tracking-tight leading-snug`.
5. **Card Heights & Empty Regions:**
   - *Observation:* In 3-column capability grids, cards with shorter body copy have empty bottom padding while adjacent cards with multi-line lists stretch the container.
   - *Target Refinement:* Implement flex layout with `flex flex-col justify-between` to balance card heights and evenly distribute vertical content without dead white patches.
6. **Image-to-Text Proportions:**
   - *Observation:* On `/facilities` and `/about-us`, certain full-width image banners occupy a 16:9 or 16:10 aspect ratio before the primary text block, pushing core technical copy below the initial fold.
   - *Target Refinement:* Shift to a balanced 2-column split (image left 5 cols, specifications right 7 cols) on desktop.
7. **Photo Gallery Grid Density:**
   - *Observation:* The gallery archive on `/gallery` uses wide spacing (`gap-8`), reducing the number of visible historical thumbnails on laptop screens.
   - *Target Refinement:* Adjust grid spacing to `gap-4 sm:gap-6` with refined caption overlays to increase visual density.
8. **Desktop vs. Mobile Viewport Balance:**
   - *Observation:* Mobile paddings (`px-4 py-8`) currently feel well-proportioned, whereas desktop viewports exhibit the majority of empty margins.
   - *Target Refinement:* Apply desktop-scoped utility overrides (`lg:py-12`, `xl:max-w-7xl`) so mobile density remains unaffected.

---

## 4. Final Release Declaration

The website is **OFFICIALLY PUBLISHED** at the primary Netlify destination.  
All statutory disclosures, engineering specifications, navigational elements, and contact channels are live, verified, and operational.

**FINAL PROGRAMME DIRECTIVE:** The implementation work packages are completed. No WP-5B.33 shall be initiated without prior written executive authorization.
