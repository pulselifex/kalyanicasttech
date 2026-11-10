# WP-5B.23 Changed Files and Git Record

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.23  
**Active Release Candidate Branch:** `feature/kct-step5b23-release-readiness`  
**Parent Release Baseline:** `d510bb2` (WP-5B.21 completion commit)  
**WP-5B.22 Commit:** `88e7c33`  
**WP-5B.23 Commit:** `551d8ce`  
**Protected Release Baseline:** `release/kct-website-v1` at `f1e26bb72a15f8c35665b8cf6444c621bb8114fd` (STRICTLY FROZEN)

---

## 1. Git Ancestry Tree

```
* 551d8ce (HEAD -> feature/kct-step5b23-release-readiness)
|   chore(wp-5b.23): regenerate sitemap.xml and add release candidate route verification sensor
* 88e7c33 (feature/kct-step5b22-public-interface-cleanup)
|   feat(wp-5b.22): final public interface cleanup, carousel refinement, terminal wording reconciliation & 150-acre footprint standardisation
* d510bb2 (feature/kct-step5b21-final-content-navigation-qa)
|   feat(wp-5b.21): final footer headings, terminal naming standardisation & investor canonical route alignment
* bf5d3fc (feature/kct-step5b20-header-footer-refinement)
|   feat(wp-5b.20): static header identity, 4-group footer & collapsible address accordion
* a532253 (feature/kct-step5b19-homepage-refinement)
|   feat(homepage): WP-5B.19 homepage content hierarchy, copy reduction and 4.5s carousel rotation refinement
...
* f1e26bb (release/kct-website-v1) [STRICTLY FROZEN BASELINE]
```

---

## 2. Complete Inventory of Changed Files in Release Candidate

| # | File Path | Type | Commit | Key Changes & Purpose |
| :---: | :--- | :---: | :---: | :--- |
| **1** | `Website_Codebase/src/components/site/HomeHeroCarousel.tsx` | Component | `88e7c33` | Removed `4.5s Auto`, updated play/pause tooltips/aria labels, removed `01 / 22` counter, centered dots, updated pioneer banner badge to `Commercial Double-Stack Dwarf Container Run · July 2018`. |
| **2** | `Website_Codebase/src/components/site/HomePage.tsx` | Component | `88e7c33` | Updated Section 2 badge to `Business Divisions`, harmonised 150-acre copy, updated Section 5 highlight to `CBIC approval received on 10 September 2026 · Under development`, removed `Class A foundry` claim, updated enquiry card 3 to `Terminal Infrastructure & Siding`, updated CTA to `Enquire About Infrastructure`, updated Section 6 load testing banner, updated credential to `ISO Management System Certifications`, updated CTA to `Explore Engineering & Quality`. |
| **3** | `Website_Codebase/src/components/site/GrowthMatrix.tsx` | Component | `88e7c33` | Replaced `CBIC LoI dated 10 Sept 2026` with `CBIC approval received on 10 September 2026. Under development`. |
| **4** | `Website_Codebase/src/components/site/WhyShivlakhaCoLocation.tsx` | Component | `88e7c33` | Replaced `CBIC LoI Approved` badge with `CBIC Approval Received` and updated detail copy. |
| **5** | `Website_Codebase/src/components/site/ShivlakhaInteractiveMasterplan.tsx` | Component | `88e7c33` | Updated interactive card specs, SVG overlay mask badge, and statutory master plan disclaimer from `CBIC LoI` to `CBIC approval received on 10 September 2026`. |
| **6** | `Website_Codebase/src/components/site/SiteFooter.tsx` | Component | `88e7c33` | Updated 150-acre Shivlakha accordion note from `CBIC LoI received` to `CBIC approval received on 10 September 2026, under development`. |
| **7** | `Website_Codebase/src/content/pages.json` | Content Registry | `88e7c33` | Replaced 10 occurrences of `inland container depot` with `Inland Container Terminal` across static sections and search indices. |
| **8** | `Website_Codebase/src/content/route-assets.ts` | Asset Registry | `88e7c33` | Standardised image metadata from `Shivlakha ICD` to `Shivlakha Inland Container Terminal`. |
| **9** | `Website_Codebase/src/routes/manufacturing.index.tsx` | Route | `88e7c33` | Updated Section 6 action CTA from `Review Quality Rig & Testing` to `Explore Engineering & Quality`. |
| **10** | `Website_Codebase/src/test/hero-carousel.test.tsx` | Test | `88e7c33` | Updated button role queries to match `/Pause slideshow/i` and `/Resume slideshow/i`. |
| **11** | `Website_Codebase/src/test/homepage-hero.test.tsx` | Test | `88e7c33` | Updated assertions for `Business Divisions`, `ISO Management System Certifications`, `Explore Engineering & Quality`, and `Enquire About Infrastructure`. |
| **12** | `Website_Codebase/src/test/shivlakha-masterplan.test.tsx` | Test | `88e7c33` | Updated master plan disclaimer assertion to match approved statutory approval wording. |
| **13** | `Website_Codebase/src/test/content-search.test.ts` | Test | `88e7c33` | Updated search query test from `inland container depot` to `inland container terminal`. |
| **14** | `Website_Codebase/scripts/capture-step5b22-screenshots.cjs` | Script | `88e7c33` | Headless Chrome screenshot capture script. |
| **15** | `Website_Codebase/public/sitemap.xml` | Public Asset | `551d8ce` | Freshly regenerated sitemap containing all 44 canonical website URLs. |
| **16** | `Website_Codebase/scripts/verify-all-routes-step5b23.cjs` | Script | `551d8ce` | Comprehensive automated route and redirect verification script testing staging edge. |

---

## 3. Preservation of Protected Release Baseline

- The official production branch `release/kct-website-v1` remains frozen at commit `f1e26bb72a15f8c35665b8cf6444c621bb8114fd`.
- No merges, pushes, or direct commits have been made to `release/kct-website-v1`.
- Production DNS records for `kalyanicasttech.com` remain untouched.
- Staging previews are deployed exclusively to temporary Netlify draft endpoints.

