# WP-5B.24A — GIT CHANGE & STAGING RECORD

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.24A  
**Date:** 06 November 2026  
**Reference:** Staging Deployment `6aeddb4414795a799d15bb39`  

---

## 1. Git Repository State & Branch Controls

### Branch Hierarchy:
- **Protected Release Baseline:** `release/kct-website-v1`
  * Status: **STRICTLY FROZEN**
  * Protected commit: `f1e26bb72a15f8c35665b8cf6444c621bb8114fd`
  * No direct commits, merges, or pushes.
- **Parent Feature Branch:** `feature/kct-step5b23-release-readiness`
  * Head Commit: `9238edd` (*feat(wp-5b.24): final content corrections...*)
- **Authorised Isolated Working Branch:** `feature/kct-step5b24a-management-corrections`
  * Head Commit: Carrying all WP-5B.24A verified corrections.

---

## 2. Inventory of Modified & Added Files

### Code Files Modified:
1. `src/components/site/HomeHeroCarousel.tsx` — Cleaned up alt text across all 22 slides.
2. `src/components/site/HomePage.tsx` — Reconciled RDSO Stage-I wagon text, ISO 1161 foundry copy, ISO 1496 compliance text, GCT operational status, and precision castings enquiry copy.
3. `src/routes/facilities.tsx` — Updated GCT status to Operational, ICT status to Under development, and updated photo bindings.
4. `src/routes/about-us.tsx` — Updated foundry unit corner casting description, image alt text, and GCT status badge.
5. `src/routes/our-journey.tsx` — Updated GCT photo, caption, status badge, and product link description.
6. `src/routes/gallery.tsx` — Updated historical news archive summary for Rewari Works foundry trials.
7. `src/routes/contact.tsx` — Updated Shivlakha freight inquiry channel description and office badge.
8. `src/components/site/SiteFooter.tsx` — Reconciled Shivlakha platform summary in address accordion.
9. `src/routes/shivlakha-rail-logistics.index.tsx` — Cleaned internal comment reference.

### Test Files Updated:
10. `src/test/homepage-hero.test.tsx` — Updated GCT allocation highlight expectation.
11. `src/test/facilities-page.test.tsx` — Updated 150-acre allocation table expectation for GCT & ICT.
12. `src/test/journey-page.test.tsx` — Updated GCT status expectation to Operational.
13. `src/test/shivlakha-page.test.tsx` — Updated test suite description to reference Operational badge.

### Verification Scripts:
14. `scripts/verify-all-routes-step5b24a.cjs` — 26-route automated edge sensor.
15. `scripts/capture-step5b24a-screenshots.cjs` — Multi-viewport headless Chrome screenshot engine.

---

## 3. Netlify Staging Deployment Details

- **Platform:** Netlify Cloud CDN
- **Project Name:** `kalyanicasttech`
- **Project ID:** `1cbb9092-1520-49a8-b194-fe8942475330`
- **Deploy ID:** `6aeddb4414795a799d15bb39`
- **Context:** `production` (staging draft preview)
- **Draft Staging URL:**  
  `https://6aeddb4414795a799d15bb39--kalyanicasttech.netlify.app`
- **Build Timestamp:** 06 November 2026, 19:21:45 UTC+05:30
- **Build Outcome:** Success (`Deploy is live!`)
- **Canonical Production Domain:** `kalyanicasttech.com` (**FROZEN**, untouched).

---

## 4. Outstanding Issues & Handover Note

There are **zero unresolved issues**, zero syntax errors, and zero broken links. All 10 management directives and all corrective instructions in WP-5B.24A have been verified directly against the live staging deployment.

Per explicit management instruction:
**Stopping after WP-5B.24A.** SEO/SMO/AIEO implementation is reserved for subsequent authorized work packages.
