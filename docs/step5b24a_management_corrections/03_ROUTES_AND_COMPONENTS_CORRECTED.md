# WP-5B.24A — ROUTES & COMPONENTS CORRECTED

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.24A  
**Date:** 06 November 2026  
**Reference:** Staging Deployment `6aeddb4414795a799d15bb39`  

---

## 1. Directory of Source Components Modified

| Component / File Path | Key Sections / Elements Modified | Purpose of Correction |
| :--- | :--- | :--- |
| `src/components/site/HomeHeroCarousel.tsx` | Carousel slides array (`HERO_CAROUSEL_SLIDES`), specifically slides `cont-02` through `cont-16` and `wagon-01` through `wagon-05`. | Stripped unsupported marketing alt descriptions; replaced with concise factual descriptions of visible equipment. |
| `src/components/site/HomePage.tsx` | - Section 2: `businessDivisions` (Manufacturing Division & Terminal Division)<br>- Section 4: `productFamilies` (`standard` & `castings`)<br>- Section 5: `facilityLocations` (`Rewari` & `Shivlakha`)<br>- Section 6: Engineering Rigor (Lloyd's Register foundry scope)<br>- Section 8: `enquiryPersonas` (Precision Castings & Foundry) | Full alignment of homepage copy with management directives; operational GCT status; authentic GCT photo binding. |
| `src/routes/facilities.tsx` | - `shivlakhaAllocations` table (Row 1 GCT & Row 2 ICT)<br>- Gallery items `shivlakha-gct-terminal`<br>- Integrated Shivlakha Platform section photo & caption | Updated status to Operational for GCT and Under development for ICT; bound authentic photos. |
| `src/routes/about-us.tsx` | - Manufacturing Division: Foundry Unit description & alt text<br>- Terminal Division: Gati Shakti Terminal status badge & copy | Standardised to Operational; removed certified corner casting claims. |
| `src/routes/our-journey.tsx` | - Milestone 6: Gati Shakti Terminal photo, caption & description<br>- Products quick-link description<br>- Component 1: Gati Shakti Terminal status badge & operational note<br>- 150-Acre Master Allocation Table (GCT status) | Reconciled milestone status and photo bindings. |
| `src/routes/gallery.tsx` | - Historical News Item `news-2014-01` summary | Replaced "Lloyd's Register certified container corner casting lines" with approved foundry approval copy. |
| `src/routes/contact.tsx` | - Commercial channel description for Shivlakha<br>- Office Directory Card 3 (Shivlakha platform badge) | Standardised status badge to "Operational Gati Shakti Terminal & Logistics Platform". |
| `src/components/site/SiteFooter.tsx` | - Collapsible address accordion (Shivlakha platform summary) | Eradicated "infrastructure ready" in favor of "Operational". |
| `src/routes/shivlakha-rail-logistics.index.tsx` | - Hero badge section comment | Cleaned up internal comment reference. |

---

## 2. Directory of Automated Test Sensors Updated

| Test File Path | Tests Updated | Reason for Modification |
| :--- | :--- | :--- |
| `src/test/homepage-hero.test.tsx` | Line 135: `renders Section 5: Dual Operating Locations...` | Updated regex matcher to expect `30 Acres: Gati Shakti Terminal (Operational · Dedicated Rail Siding)`. |
| `src/test/facilities-page.test.tsx` | Line 100 & 105: `renders the 150-acre allocation table...` | Updated expectations to expect `Operational` for GCT and `Under development` for ICT. |
| `src/test/journey-page.test.tsx` | Line 148-152: `presents Gati Shakti Terminal as 30 acres...` | Updated expectation to expect `Operational` instead of `Infrastructure Ready`. |
| `src/test/shivlakha-page.test.tsx` | Line 93: Test suite description | Updated test title to refer to `'Operational'` badge. |
