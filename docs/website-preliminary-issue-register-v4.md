# Kalyani Cast Tech Limited — Website Preliminary Issue Register (Review, Image Integration & Content Refinement)
**Date:** 31 October 2026  
**Branch:** `release/kct-website-v1`  
**Current Reported Commit:** `7eef1c8`  
**Review Type:** Codebase & Live Site Inspection prior to controlled modification  

---

## 1. Inspection Summary

A comprehensive inspection of the current working codebase (`Website_Codebase/src/`), public assets (`Website_Codebase/public/`), and external source image folders (`01_Rewari`, `02_Products_Containers`, `03_Shivlakha_Logistics`, `04_Company_Team`, `07_Certificates`, `08_Website Content`) was conducted.

The 8-item primary navigation structure and route hierarchy are intact:
1. About Kalyani (`/about-us`)
2. Our Journey (`/our-journey`)
3. Board & Management (`/leadership`)
4. Manufacturing (`/manufacturing`) [Dropdown: Facilities, Products, Innovation, Engineering & Quality]
5. Investors (`/investor-relations`)
6. Gallery (`/gallery`)
7. Shivlakha (`/shivlakha-rail-logistics`)
8. Contact (`/contact`)

---

## 2. Preliminary Issue Register

| # | Page / Component | Existing Content or Behaviour | Problem Found | Recommended Correction | Type | External Approval / Evidence Required |
|:---:|:---|:---|:---|:---|:---:|:---:|
| **01** | `HomePage.tsx` (Hero) | Hero section contains duplicate statutory pill ("BSE SME: 544023 · Incorporated September 2012 · Rewari & Shivlakha") and three competing action buttons. | Redundant copy repeating header/footer details; competing CTAs dilute user journey. | Refine hero per Section 7.1: lead with headline *"Built for what India moves."*, concise supporting text, and two primary navigation actions: **Explore Manufacturing** (`/manufacturing`) and **Explore Shivlakha** (`/shivlakha-rail-logistics`). | Visual & Structural | None (Aligns with Section 7.1) |
| **02** | `HomePage.tsx` (Architecture) | Homepage currently renders: KPI ribbon, 3 pillars, 4 application cards, full 6-stage manufacturing process strip, CertificatesGallery, Shivlakha section with redundant co-location points, split investor/resource document download cards, and QuickCommercialCapture bar. | Section order deviates from the 9-section master hierarchy defined in Section 7. Reproduces detailed 6-stage process strip on homepage. Duplicates full document downloads including internal working documents. Contains duplicate quick enquiry capture. | Reorganise homepage into the exact 9-section visual hierarchy:<br>1. Hero<br>2. Company Introduction<br>3. Three Visual Business Areas<br>4. Manufacturing Overview (intro + links to 4 subpages, omitting 6-stage strip)<br>5. Product Highlights (authentic photos, no duplication, no fixed counts)<br>6. Engineering Standards & Quality Assurance (new Section 6 architecture)<br>7. Shivlakha Introduction (authentic photo, concise status)<br>8. Investor Information (concise link to `/investor-relations`)<br>9. Enquiry CTA (clean route to `/contact#enquiry-form`). | Structural & Visual | None (Aligns with Section 7) |
| **03** | `CertificatesGallery.tsx` & `HomePage.tsx` | Headings displayed: *"Statutory Approvals · Audited Compliance"* and *"Visual Trust & Approvals Gallery"*. Universal green badge displayed: *"🟢 IRS · Lloyd's Register · BIS · ISO Certified"*. Displays unverified placeholder cards with *"Certificate documentation is being updated. Please contact the company for current approved documentation."* | Explicitly prohibited by Section 6: sounds like internal audit/development jargon; universal badge is misleading; unverified placeholder cards display banned phrase *"Certificate documentation is being updated"*. | 1. Replace homepage approvals section with **"Engineering Standards & Quality Assurance"** featuring 4 visual cards (Engineering & Design, Manufacturing Processes, Inspection & Testing, Certifications & Technical Documents) linking to `/engineering-quality`.<br>2. On `/engineering-quality`, update heading to **"Certifications & Third-Party Technical Evidence"**.<br>3. Remove universal green badge.<br>4. Remove unverified certificate cards (IS 12117 and ISO 9001) from public view and place in internal register until re-certified evidence is uploaded. Display only verified certificates (IRS Capacity DLH21X014, IRS Competent Manufacturer, Lloyd's Register LR2489004WA). | Factual & Visual | Registered in Internal Approvals Register |
| **04** | `WhyShivlakhaCoLocation.tsx` | Contains claims: *"Zero Empty-Container Repositioning (Factory-on-Siding)"*, *"0 km Haul"*, *"without splitting rakes"*, and *"45 wagons single placement capacity"*. | Explicitly identified in Section 10 as unsupported/unverified technical and commercial claims. | Rephrase to factual descriptions:<br>- *"Co-Located Container Fabrication & Rail Wharf"*<br>- Replace "0 km Haul" with *"Direct Platform Access"*<br>- Replace "without splitting rakes" with *"720 m broad-gauge siding designed for full-rake placement"*. | Factual | None (Aligns with Section 10) |
| **05** | `products-applications.tsx` | Category jump cards display fixed model counts: *"4 Models"*, *"3 Models"*, *"6 Models"*, *"2 Models"*, *"1 Model"*, *"4 Configurations"*. Page renders `<QuickCommercialCapture initialMode="quote" />`. Links to `/resources`. | Violates Section 8 ("Do not display fixed total model or configuration counts"). Duplicates enquiry form. Links to obsolete `/resources` slug. | Remove fixed model/configuration counts from jump cards. Replace QuickCommercialCapture with clear CTA to `/contact#enquiry-form`. Update resource link to `/engineering-quality`. | Structural & Factual | None (Aligns with Section 8 & 12) |
| **06** | `shivlakha-rail-logistics.index.tsx` | Renders `<QuickCommercialCapture initialMode="cargo" />`. | Duplicates main enquiry journey and includes unapproved SLA promises. | Replace with clear CTA button routing to `/contact#enquiry-form`. | Functional & Structural | None (Aligns with Section 10 & 12) |
| **07** | `QuickCommercialCapture.tsx` | Contains eyebrow *"Quick Commercial Qualification Desk"* and subtitle promise *"with guaranteed same-business-day acknowledgement"*. | Internal development/audit language (Section 5) and unapproved SLA guarantee (Section 12). | Replace with neutral title *"Commercial & Movement Enquiry"* and neutral SLA description *"Submissions are reviewed by our commercial and terminal teams."* (or retain as a pure fallback component). | Factual & Visual | None (Aligns with Section 5 & 12) |
| **08** | `route-assets.ts` & `HomePage.tsx` | Download links expose *"Kalyani Cast Tech Limited — Master Content Document _ Website & Brochure Edition V1.0.pdf"* and label *"IRS Certificate of Capacity (Verification Doc)"*. | Violates Section 14: *"Do not publish internal working documents or master content files as public downloads."* Also contains internal development label *"Verification Doc"*. | Remove internal master content PDF from public download lists. Re-label certificate download to clean public wording: *"IRS Certificate of Capacity (Report DLH21X014)"*. | Factual & Governance | None (Aligns with Section 14) |
| **09** | `resources.index.tsx` | Contains text: *"Certificate documentation is being updated. Quality assurance protocols adhere to..."* | Uses banned placeholder phrase *"Certificate documentation is being updated"*. | Update `/resources` to clean verified descriptions or redirect to `/engineering-quality`. | Factual | None |
| **10** | `CargoMatcher.tsx` | File still present in codebase containing phrase *"Statutory Approvals"*. | Interactive engineering calculator was already purged from routes, but component file remains. | Retain as unimported archive or remove completely to ensure no stray references. | Structural | None |
| **11** | Image Integration Across Routes | Authentic high-resolution photographs from `01_Rewari`, `02_Products_Containers`, `03_Shivlakha_Logistics`, and `04_Company_Team` can be integrated more deeply across hero slots, product cards, and the new 4-card Engineering Standards section. | Opportunities to elevate visual presentation using genuine photography rather than diagrammatic cards. | Ingest approved high-resolution images into `public/assets/` and map them cleanly across Homepage, Products, Engineering & Quality, and Shivlakha. | Visual & Factual | Verified against source photo folders |

---

## 3. Scope & Execution Plan

All 11 items will be remediated in a controlled manner:
1. Ingest any required photographs from source folders into `Website_Codebase/public/assets/`.
2. Update `CertificatesGallery.tsx` and create the new 4-card **Engineering Standards & Quality Assurance** section.
3. Re-architect `HomePage.tsx` to the exact 9-section hierarchy.
4. Clean up `WhyShivlakhaCoLocation.tsx` and `QuickCommercialCapture.tsx`.
5. Remove fixed model counts from `products-applications.tsx`.
6. Purge internal document references (`Master Content Document`) from public downloads.
7. Run test sensor suite and verify zero broken links or missing assets.
8. Prepare comprehensive report without deploying until explicit user approval is granted.

