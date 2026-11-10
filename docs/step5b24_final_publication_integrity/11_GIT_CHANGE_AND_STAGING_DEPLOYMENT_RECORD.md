# WP-5B.24 — GIT CHANGE & STAGING DEPLOYMENT RECORD

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.24  
**Date:** 06 November 2026  
**Reference:** Staging Deployment `6aedd2fec05a6f2a02254c42`  

---

## 1. Git Repository State & Branch Controls

### Branch Governance
- **Protected Release Baseline:** `release/kct-website-v1`
  * Status: **STRICTLY FROZEN**
  * Protected commit: `f1e26bb72a15f8c35665b8cf6444c621bb8114fd`
  * Zero unauthorized direct commits or force-pushes.
- **Authorised Feature Branch:** `feature/kct-step5b23-release-readiness`
  * Status: Active implementation branch carrying WP-5B.23 and WP-5B.24 commits.
  * Parent commit: `02d47a7` (*feat(wp-5b.23): carousel generic category standard...*)

---

## 2. Inventory of Modified & Added Files

### Code Files Modified:
1. `src/components/site/ContainerCatalog.tsx` — Reconciled ISO 1496 Series-1 compliance statements for Models 1 & 2.
2. `src/components/site/ManufacturingMegaMenu.tsx` — Updated testing facility description to match in-house testing facility standards.
3. `src/components/site/SiteFooter.tsx` — Reconciled Rewari Works postal address (Tehsil Khol, PIN 123101) and in-house testing facility wording.
4. `src/content/pages.json` — Synchronized canonical metadata, descriptions, and corner casting compliance text.
5. `src/content/route-assets.ts` — Updated GCT image bindings to authentic operational photographs.
6. `src/content/site-config.ts` — Standardised Rewari Works address with Tehsil Khol and PIN 123101.
7. `src/routes/about-us.tsx` — Reconciled testing facility references.
8. `src/routes/contact.tsx` — Standardised Rewari Works address card.
9. `src/routes/engineering-quality.tsx` — Reconciled In-House ISO 1496 Structural Load-Testing Facility headings, captions, and corner casting descriptions.
10. `src/routes/facilities.tsx` — Updated Rewari Works address, corner castings manufacturing description, and testing rig heading.
11. `src/routes/gallery.tsx` — Updated news item 2 to "Gati Shakti Terminal Operational at Shivlakha" and bound authentic operational photos.
12. `src/routes/innovation.tsx` — Standardised New Wagon Design heading and RDSO Stage-I approval status.
13. `src/routes/investor-relations.tsx` — Updated material disclosures table with RDSO Stage-I approval entry.
14. `src/routes/manufacturing.index.tsx` — Reconciled corner castings, container compliance, and wagon development status.
15. `src/routes/our-journey.tsx` — Updated Milestone 2024 (Lloyd's foundry approval) and Milestone 2026 (RDSO Stage-I Approval for New Wagon Design).
16. `src/routes/products-applications.tsx` — Reconciled corner castings heading and descriptions.
17. `src/routes/shivlakha-rail-logistics.index.tsx` — Implemented 5-section architecture, 150-acre master table, operational GCT status, and authentic operational photos.

### Test Files Updated:
18. `src/test/site-footer.test.tsx` — Updated Rewari address regex to include Tehsil Khol and PIN 123101.
19. `src/test/facilities-page.test.tsx` — Updated Rewari address and testing facility heading expectations.
20. `src/test/gallery-archive.test.tsx` — Updated news title expectation for Gati Shakti Terminal Operational.
21. `src/test/engineering-quality.test.tsx` — Updated rig heading matcher and corner casting alt regex.
22. `src/test/navigation-mega-menu.test.tsx` — Updated testing facility description expectation.
23. `src/test/shivlakha-page.test.tsx` — Updated GCT status matcher and operational scope expectations.

### New Authentic Photographic Assets (`public/assets/shivlakha/`):
24. `gct-shivlakha-rake-handling-ops.jpg` (344 KB)
25. `gct-shivlakha-rake-handling-aerial.jpg` (858 KB)
26. `gct-shivlakha-yard-operations.jpg` (244 KB)
27. `gct-shivlakha-container-stacking-yard.jpg` (252 KB)
28. `gct-shivlakha-rail-terminal-siding.jpg` (606 KB)

### Verification Scripts:
29. `scripts/verify-all-routes-step5b24.cjs` — Automated 26-route edge verification script.
30. `scripts/capture-step5b24-screenshots.cjs` — Automated headless Chrome multi-device screenshot capture tool.

---

## 3. Netlify Staging Deployment Details

- **Platform:** Netlify Cloud CDN
- **Project Name:** `kalyanicasttech`
- **Project ID:** `1cbb9092-1520-49a8-b194-fe8942475330`
- **Deploy ID:** `6aedd2fec05a6f2a02254c42`
- **Context:** `production` (pre-release staging build)
- **Draft Staging URL:**  
  `https://6aedd2fec05a6f2a02254c42--kalyanicasttech.netlify.app`
- **Build Timestamp:** 06 November 2026, 18:46:25 UTC+05:30
- **Build Outcome:** Success (`Deploy is live!`)
- **Canonical Production Domain:** `kalyanicasttech.com` (**UNTOUCHED**, zero routing or DNS modifications).
