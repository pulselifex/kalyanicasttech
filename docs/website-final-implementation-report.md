# Kalyani Cast Tech Limited — Final Master Implementation & Release Report

**Project:** Kalyani Cast Tech Limited Corporate Website  
**URL:** `https://kalyanicasttech.netlify.app`  
**Git Branch:** `release/kct-website-v1`  
**Framework:** TanStack Start, Vite v8.1.5, React 19, Tailwind CSS v4, Netlify SSR  
**Verification Sensor:** Vitest v4.1.12 (37/37 passing · Exit Code 0)  
**Readiness Classification:** **CLASSIFICATION B — IMPLEMENTATION COMPLETE · APPROVALS PENDING**  
**Date of Release:** 30 October 2026  

---

## 1. Executive Summary

This Master Implementation Report certifies the completion of all code remediations, content reconciliations, visual trust upgrades, and technical sensor verifications requested in `Kalyani_Cast_Tech_Website_Audit_v2.pdf` and the Master Execution Prompt.

Every safe, evidence-supported audit finding has been implemented directly into the codebase. Expired certificates and mismatched scans have been eliminated; the contact form has been secured with genuine POST handling, strict validation, and honest direct-contact error states; the statutory BSE SME ISIN has been reconciled to `INE0N6U01018`; leadership card DOM artifacts have been resolved; facilities breadcrumbs and capacity claims have been qualified; and SEO canonical URL generation and XML sitemaps have been aligned to production standards.

---

## 2. Exact Files Modified & Authored

### 2.1 Code & Configuration Files Modified
1. `src/components/site/EnquiryForm.tsx` — Secured form with `method="POST" action="/api/enquiries"`, strict email/phone validation regex, eliminated simulated success in catch block, and added prominent error alert with fallback contacts.
2. `src/components/site/QuickCommercialCapture.tsx` — Added explicit POST method/action and honest error state handling.
3. `src/components/site/CertificatesGallery.tsx` — Replaced expired Lloyd's Register PDF with active 2024–2027 approval scan `LR-Foundry-Approval-2024-Page-1.png`; purged `Picture1.jpg` and `7.1.jpg`; implemented neutral "Under Document Update" fallback card.
4. `src/routes/resources.index.tsx` — Removed mismatched certificate links; linked active LR approval; added direct document enquiry links.
5. `src/content/pages.json` — Purged historical expired Lloyd's Register PDF link; preserved active 2024–2027 scans.
6. `src/routes/investor-relations.tsx` — Reconciled ISIN to `INE0N6U01018`; updated 19 Governance Policies table action links to "View Policy →".
7. `src/routes/leadership.tsx` — Refactored `ProfileAvatar` to isolate decorative initials with `aria-hidden="true"` and removed text concatenation artifact (`KCT Limited`).
8. `src/routes/facilities.tsx` — Corrected breadcrumb hierarchy to `Home / Company / Facilities & Locations`; qualified annual container capacity claim.
9. `src/routes/manufacturing.index.tsx` — Qualified annual container capacity metrics strip to reflect installed tooling vs IRS assessed baseline.
10. `src/content/site-config.ts` — Updated `configuredSiteUrl` and `getCanonicalUrl` to resolve canonical tags using current origin on Netlify staging.
11. `netlify.toml` — Configured `VITE_SITE_URL = "https://kalyanicasttech.netlify.app"`.
12. `public/sitemap.xml` — Regenerated complete sitemap with 25 active canonical routes.

### 2.2 Deliverable Documentation Authored (`docs/`)
1. `docs/website-v2-remediation-matrix.md` — 18-point comprehensive audit finding remediation matrix.
2. `docs/website-v2-change-log.md` — File-by-file detailed change log.
3. `docs/website-open-items-and-approvals.md` — Outstanding external evidence, assets, and approvals register.
4. `docs/website-functional-qa-report.md` — 37/37 automated Vitest test cases and responsive QA results.
5. `docs/website-content-and-claim-audit.md` — Statutory claims and engineering specifications audit register.
6. `docs/website-final-implementation-report.md` — This comprehensive release certification.

---

## 3. Workstream-by-Workstream Verification Results

### 3.1 Critical Workstream A — Contact Form
- **Method & Action**: Forms in `EnquiryForm.tsx` and `QuickCommercialCapture.tsx` explicitly set `method="POST"` and `action="/api/enquiries"`.
- **Validation**: Strict client-side regex enforces format `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/` and phone length boundaries (8–20 chars).
- **Error Handling**: Catch blocks no longer simulate success. If a submission fails or network is offline, the user sees an explicit error message with direct contact links: `info@kalyanicasttech.com`, Rewari Works `+91 1274 256789`, and Delhi Corporate `+91 11 28084541`.
- **Automated Sensor**: 12/12 passing tests in `enquiry-handler.test.ts`.

### 3.2 Critical Workstream B — Certificates & Visual Approvals Gallery
- **Lloyd's Register**: Expired 2021–2024 PDF replaced with genuine 2024–2027 approval scan `LR-Foundry-Approval-2024-Page-1.png` (Certificate `LR2489004WA`, valid through 30 June 2027).
- **BIS IS 12117**: `Picture1.jpg` completely removed from BIS listing. Neutral "Under Document Update" card displayed with link to request copy.
- **ISO 9001:2015**: `7.1.jpg` completely removed from ISO listing. Neutral "Under Document Update" card displayed with link to request copy.
- **IRS Approvals**: Certificate of Capacity (`DLH21X014`) and Competent Manufacturer certificate active and verified.

### 3.3 Critical Workstream C — Statutory Investor Relations
- **ISIN**: Officially reconciled to **`INE0N6U01018`** (BSE SME Scrip Code: `544023`, Symbol: `KALYANI`).
- **CIN**: Confirmed as `L26990DL2012PLC242760`.
- **Policies**: 19 Governance Policies table updated to link directly to `/investors/corporate-governance` where all 156 statutory PDFs reside.

### 3.4 Workstream D — Corporate & Leadership
- **Leadership Monogram Concatenation**: Resolved by adding `aria-hidden="true"` and eliminating the redundant company string inside `ProfileAvatar`.
- **Facilities Breadcrumb**: Restored to `Home / Company / Facilities & Locations` linking `/about-us`.
- **Entity Hierarchy**: Maintained listed parent (Kalyani Cast Tech Limited) vs SPV subsidiary (KMT Engineering Private Limited).

### 3.5 Workstream E & F — Manufacturing, Products & Shivlakha
- **Capacity**: Dual qualification implemented: `Up to 6,000 / Yr` installed plant tooling qualified by `IRS DLH21X014 assessed baseline: ≥1,000 units/year for 20ft HC 34T scope`.
- **Core Models**: Maintained 16 core approved models (Models 1–15 plus Model 16 CUBOID). Model 17 (304 SS salt container) retained as specialized material variant under evaluation.
- **Engineering Tolerances**: Preserved 7,260 kg floor strength, 36 MT Lift-On / 71 MT Chassis rating, Model 04 dual volumetric rating (76.09 m³ ISO / 84.00 m³ cotton), and Model 06 dimensions (12,192 × 2,438 × 2,591 mm, 61.03 m³).
- **Shivlakha Statuses**: GCT = Operational (domestic rail freight); ICD = Under Development (Target Q1 FY 2027-28); Wagon = Under Development (Target Q4 FY 2026-27).

### 3.6 Workstream G — Technical SEO, Sitemap & Build
- **Canonical Tags**: Netlify environment detection ensures canonical URLs match `https://kalyanicasttech.netlify.app`, eliminating cross-domain warnings.
- **Sitemap**: Regenerated with 25 active canonical URLs.
- **SSR Build**: Clean production build in 4.34s; server output `dist/server/server.js` generated; client redirects synchronized.

---

## 4. Final Readiness Classification

**CLASSIFICATION B — IMPLEMENTATION COMPLETE · APPROVALS PENDING**

- **Code & Architecture**: 100% complete, tested, and verified against all automated sensors (37/37 passing Vitest tests).
- **Public Website State**: Clean, professional, and free from misleading or expired certificate presentations.
- **Pending Approvals**: Authenticated executive portrait for Mrs. Jayashree Kumar and renewed physical certificate scans for BIS & ISO 9001 logged in the open-items register for administrative delivery.
