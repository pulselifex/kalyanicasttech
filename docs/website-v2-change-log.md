# Kalyani Cast Tech Limited — Website Audit v2 Change Log

**Document Reference:** `docs/website-v2-change-log.md`  
**Governing Standard:** Section 19 of Master Implementation Prompt & `Kalyani_Cast_Tech_Website_Audit_v2.pdf`  
**Release Target:** Production / Netlify SSR  
**Baseline Git Branch:** `release/kct-website-v1`  
**Date of Release:** 30 October 2026  

---

## 1. Summary of Changes

This release completes the final quality improvement and audit remediation for the Kalyani Cast Tech Limited corporate website. All safe, evidence-supported findings from the second website audit (`Kalyani_Cast_Tech_Website_Audit_v2.pdf`) have been implemented, tested, and verified without compromising operational stability or introducing fabricated claims.

---

## 2. File-by-File Detailed Change Record

### 2.1 Contact Form & Commercial Capture (`EnquiryForm.tsx` & `QuickCommercialCapture.tsx`)
- **`src/components/site/EnquiryForm.tsx`**:
  - Added explicit HTML form attributes `method="POST"` and `action="/api/enquiries"` to prevent automated scrapers and browsers from falling back to default GET parameter exposure.
  - Upgraded client-side email validation to strict regex: `/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/`.
  - Added telephone format and length boundary check (`/^[+]?[\d\s\-().]{8,20}$/`).
  - Removed simulated success in offline catch block. Catch block now explicitly sets `setSent(false)` and displays a clear error alert banner.
  - Added prominent fallback contact links in error alert: direct email `info@kalyanicasttech.com`, Rewari Works telephone `+91 1274 256789`, and Delhi Corporate telephone `+91 11 28084541`.
- **`src/components/site/QuickCommercialCapture.tsx`**:
  - Added explicit `method="POST"` and `action="/api/enquiries"` to `<form>`.
  - Replaced catch-block simulated success with honest error state (`setSubmitted(false)` and `setErrorMsg(...)`).

### 2.2 Statutory Certificates & Visual Approvals Gallery (`CertificatesGallery.tsx`, `resources.index.tsx`, `pages.json`)
- **`src/components/site/CertificatesGallery.tsx`**:
  - Replaced expired Lloyd's Register approval PDF (`Foundry-Approval-from-LR.pdf`, LR21254575WA, expired 30/06/2024) with active 2024–2027 approval scan `LR-Foundry-Approval-2024-Page-1.png` (Certificate `LR2489004WA`, valid 01 July 2024 to 30 June 2027, issued by Clive Arnold, Lloyd's Register EMEA).
  - Completely purged `Picture1.jpg` (duplicate Lloyd's Register scan) from BIS IS 12117 display.
  - Completely purged `7.1.jpg` (expired 2017–2020 RDSO certificate) from ISO 9001:2015 display.
  - Implemented neutral, compliance-vetted fallback state for both BIS IS 12117 and ISO 9001:2015: *"Under Document Update — Certificate documentation is being updated. Please contact the company for current approved documentation."*
  - Replaced lightbox zoom with direct document request link for entries under update.
- **`src/routes/resources.index.tsx`**:
  - Removed broken/mismatched links to `Picture1.jpg` and `7.1.jpg`.
  - Updated Lloyd's Register link to `LR-Foundry-Approval-2024-Page-1.png` with explicit 2024–2027 validity annotation.
  - Added direct email request links for certificates under document renewal.
- **`src/content/pages.json`**:
  - Removed historical reference to expired `Foundry-Approval-from-LR.pdf` at line 1566, preserving verified 2024–2027 high-resolution PNG scans.

### 2.3 Statutory Investor Relations & BSE Codes (`investor-relations.tsx`)
- **`src/routes/investor-relations.tsx`**:
  - Updated ISIN from obsolete `INE0P7F01017` to official BSE SME registered ISIN **`INE0N6U01018`** in both corporate details table (line 74) and header metadata strip (line 239).
  - Verified Scrip Code `544023`, Symbol `KALYANI`, Face Value `₹10.00`, and CIN `L26990DL2012PLC242760`.
  - Reconciled 19 Governance Policies table action links: changed misleading "Download PDF" text to "View Policy →" routing cleanly to `/investors/corporate-governance` where all 156 statutory PDFs reside.

### 2.4 Corporate Leadership Page (`leadership.tsx`)
- **`src/routes/leadership.tsx`**:
  - Refactored `ProfileAvatar` component to prevent text scrapers and screen-readers from concatenating monogram initials with company name (which produced artificial strings like `JKKCT Limited` and `KSKCT Limited`).
  - Added `aria-hidden="true"` and `select-none` to the monogram avatar wrapper.
  - Removed raw text `<span className="mt-1 text-[10px] uppercase tracking-wider text-white/60">KCT Limited</span>` from avatar container.

### 2.5 Facilities & Manufacturing Navigation & Capacity (`facilities.tsx`, `manufacturing.index.tsx`)
- **`src/routes/facilities.tsx`**:
  - Corrected breadcrumb navigation from `Home / Manufacturing & Quality / Facilities & Locations` to canonical `Home / Company / Facilities & Locations` linking `/about-us` as parent section.
  - Qualified Rewari annual container capacity claim: changed from unqualified `6,000 / Year` to:
    `Value: "Up to 6,000 / Yr"`, `Sub: "Annual tooling capacity (IRS DLH21X014 baseline ≥1,000/yr)"`.
- **`src/routes/manufacturing.index.tsx`**:
  - Synchronized Rewari plant capacity metrics strip to match the qualified capacity baseline (`Up to 6,000 / Yr` with IRS DLH21X014 qualification).

### 2.6 SEO Canonical Tags & Production Sitemap (`site-config.ts`, `netlify.toml`, `sitemap.xml`)
- **`src/content/site-config.ts`**:
  - Updated `configuredSiteUrl` to detect `VITE_SITE_URL` and `process.env.URL`, falling back dynamically to `window.location.origin` in browser environments.
  - Updated `getCanonicalUrl` to resolve canonical tags using current origin on staging/Netlify, eliminating cross-domain canonical warnings.
- **`netlify.toml`**:
  - Added `VITE_SITE_URL = "https://kalyanicasttech.netlify.app"` to `[build.environment]`.
- **`public/sitemap.xml`**:
  - Regenerated complete XML sitemap with 25 active, non-redirecting canonical URLs. Purged legacy redirect paths (`/company`, `/containers-solutions`, etc.).

---

## 3. Automated Verification Status

- **Vitest Suite**: 37 tests passing across 6 test suites (`legacy-redirects.test.ts`, `enquiry-handler.test.ts`, `content-search.test.ts`, `shivlakha-masterplan.test.tsx`, `tools.test.tsx`, `app-routing.test.tsx`).
- **Production Build**: Verified with Netlify SSR plugin; client and server bundles compiled in 4.34s without errors.
