# KALYANI CAST TECH LIMITED — WEBSITE IMPLEMENTATION BASELINE

## Phase Zero Technical Inspection, Asset Mapping & Architecture Baseline Report

- **Date**: 2026-10-16
- **Lead Role**: Lead Website Implementation Engineer, AI Development Workflow Coordinator, Frontend Architect & Deployment Readiness Lead
- **Primary Workspaces Inspected**:
  1. \`pixel-perfect-painter-750\` (Active Git Repository: TanStack Start / React 19 / 34 Routes)
  2. \`kct-website\` (Local Prototype on \`http://localhost:3000\`: Vite / HTML5 / 61 Authentic Assets)
  3. \`kct_website_image_audit\` (Quality Gate 2 Asset Audit & Master Image Mapping Plan)
- **Status**: Phase Zero Completed. Implementation paused awaiting plan signoff per protocol.

---

### 1. Existing Architecture & Codebase Inspection

Our Phase Zero forensic inspection identified **two complementary codebases** and **a comprehensive asset intelligence repository**:

```
[Repository A: pixel-perfect-painter-750]          [Repository B: kct-website]
- Multi-route Corporate Architecture (34 pages)    - Single-Page Prototype (Running on :3000)
- TanStack Start (SSR beta) + React 19             - Vite 6 + Vanilla HTML5/CSS3/JS
- Tailwind CSS v4 (@theme inline with oklch)       - 61 Authentic High-Res Photos in /public/assets
- Headless Content Engine: src/content/pages.json   - Hero: Rewari Factory 30MP Canon 5D Mk IV
- Client Search Engine: src/content/search.ts       - Dark/Light theme toggle & consultation anchor
- Status: Full information hierarchy, 0 local photos - Status: Visual proof present, but single-page anchor
                             \                            /
                              \                          /
                        [TARGET UNIFIED PRODUCTION WEBSITE]
                        - 34 Validated Multi-Page Routes
                        - Real 61 High-Res Assets Integrated
                        - Standard Vite + React SPA (Robust & Portable)
                        - Working Enquiry Backend (Resend / Supabase)
```

#### Detailed Tech Stack Breakdown of Current Working Tree (\`pixel-perfect-painter-750\`):

- **Core Framework**: React \`^19.2.0\` with \`@tanstack/react-router\` \`1.170.41\` and \`@tanstack/react-start\` \`1.168.60\` (Nitro SSR beta).
- **Styling Architecture**: Tailwind CSS \`^4.2.1\` with modern \`oklch\` color space definitions in \`src/styles.css\`.
- **Typography**: Google Fonts CDN: **Archivo** (Display headings), **IBM Plex Sans** (Body copy), and **IBM Plex Mono** (Eyebrows, numbers, metadata).
- **Master Data Layer**: [src/content/pages.json](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/src/content/pages.json) (1,948 lines) defining 34 distinct corporate pages with strict anti-hallucination discipline.
- **Search Engine**: [src/content/search.ts](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/src/content/search.ts) and [SiteSearch.tsx](file:///C:/Users/abc/.gemini/antigravity-ide/scratch/pixel-perfect-painter-750/src/components/site/SiteSearch.tsx) executing zero-dependency client-side keyword indexing.

---

### 2. Current Implementation Status

| Feature / Subsystem             | Current State                    |              Completeness               | Assessment & Forensic Observations                                                                                                                                          |
| :------------------------------ | :------------------------------- | :-------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Information Architecture**    | 34 Leaf Routes + Root Shell      |                **100%**                 | All 34 approved pages mapped in \`pages.json\` and \`src/routes/\`. Zero orphaned routes. Zero dead internal links.                                                         |
| **Approved Page Content**       | 669 Extracted Content Units      |                 **95%**                 | Verifiably derived from the client's master content documents. Strictly separates manufacturing from developing rail platforms.                                             |
| **Design System & Styling**     | Industrial Blueprint Theme       |                **100%**                 | Tailwind v4 tokens, sharp 2px radii, structural navy (\`--primary-deep\`), railway safety amber (\`--signal\`), and steel slates.                                           |
| **Brand Logo Asset**            | Cloudflare R2 Asset Pointer      |              **Resolved**               | Repo had only an asset JSON pointer (\`kalyani-cast-tech-logo.jpeg.asset.json\`); offline 500x500 JPEG has now been preserved and located in \`kct-website/public/assets\`. |
| **Product & Plant Photography** | \`ImageSlot\` Placeholder Briefs | **10%** in Repo A<br>**100%** in Repo B | Repo A contains 0 committed photos (uses \`ImageSlot.tsx\` briefs). **Repo B contains all 61 authentic high-res DSLR photos**, matching the master audit!                   |
| **Interactive Enquiry Forms**   | 3-in-1 Polymorphic Form          |                 **50%**                 | UI, mode switching (General, Product, Logistics), field validation, and consent checkboxes complete. **Backend delivery absent** (preview-only).                            |
| **Statutory Investor Portal**   | 8 Dedicated Statutory Pages      |                 **40%**                 | Route hierarchy, descriptions, and empty-state placeholders complete. Actual downloadable financial statements, filings, and AGM notices not yet uploaded.                  |
| **Corporate News & Press**      | Route \`/resources/news-media\`  |                 **20%**                 | \`EmptyState\` rendered with Newspaper icon. No news articles published.                                                                                                    |
| **Search Engine**               | Client-side In-Memory Index      |                **100%**                 | Instantaneous title/body scoring across all 34 pages via modal dialog.                                                                                                      |
| **SEO & Social Sharing**        | \`pageHead()\` in \`site.ts\`    |                 **80%**                 | Canonical, Title, Meta Description, OG, and Twitter tags generated. Canonical currently hard-coded to Application Template preview URL.                                                  |

---

### 3. Pages and Components Found

#### A. Page Route Inventory (34 Distinct URLs)

1. **Core**: \`/\` (Home), \`/company\` (Company Overview), \`/business-enquiry\` (Commercial Enquiry), \`/contact\` (Contact & Offices).
2. **Company Division**: \`/company/our-journey\` (Milestones), \`/company/our-business\` (Capabilities).
3. **Containers & Cargo Solutions**: \`/containers-solutions\` (Overview), \`/containers-solutions/standard-containers\` (ISO Range), \`/containers-solutions/specialised-containers\` (Dwarf & Custom), \`/containers-solutions/rail-parcel-vehicle-cargo\` (Automotive & Parcel), \`/containers-solutions/application-specific-designs\` (Bespoke Engineering), \`/containers-solutions/technical-data-sheets\` (Specs Library).
4. **Manufacturing & Infrastructure**: \`/manufacturing\` (Overview), \`/manufacturing/container-manufacturing\` (Fabrication Bays), \`/manufacturing/design-engineering\` (FEA & CAD), \`/manufacturing/testing-quality\` (QA Protocols), \`/manufacturing/facilities-locations\` (Rewari & Shivlakha Sites).
5. **Shivlakha Rail & Logistics Platform**: \`/shivlakha-rail-logistics\` (Master Hub), \`/shivlakha-rail-logistics/gati-shakti-cargo-terminal\` (Rail Siding Terminal), \`/shivlakha-rail-logistics/inland-container-depot\` (ICD Development), \`/shivlakha-rail-logistics/cargo-opportunities\` (Route & Cost Feasibility).
6. **Resources & Publications**: \`/resources\` (Overview), \`/resources/corporate-profile-brochures\` (Brochures), \`/resources/product-data-sheets\` (Data Sheets), \`/resources/quality-certifications\` (ISO & RDSO), \`/resources/news-media\` (Press Releases).
7. **Statutory Investor Relations**: \`/investors\` (Portal Overview), \`/investors/financial-information\` (Results & Reports), \`/investors/stock-exchange-disclosures\` (Exchange Filings), \`/investors/corporate-governance\` (Policies & Board), \`/investors/shareholder-information\` (RTA & Demat), \`/investors/ipo-corporate-actions\` (IPO Archive), \`/investors/investor-grievance-contact\` (Nodal Officer), \`/investors/meetings-presentations\` (AGM & Presentations).

#### B. Component Inventory & Audit

- **Domain Site Components (9)**: \`SiteHeader\`, \`SiteFooter\`, \`ContentPage\`, \`HomePage\`, \`EnquiryForm\`, \`ImageSlot\`, \`ShivlakhaStatus\`, \`SiteSearch\`, \`SiteLink\`.
- **Active shadcn/Radix UI Primitives (20)**: \`alert\`, \`badge\`, \`button\`, \`card\`, \`checkbox\`, \`collapsible\`, \`dialog\`, \`dropdown-menu\`, \`form\`, \`input\`, \`label\`, \`popover\`, \`select\`, \`separator\`, \`sheet\`, \`skeleton\`, \`table\`, \`textarea\`, \`toggle\`, \`tooltip\`.
- **Unused Template Artifacts (26)**: \`accordion\`, \`alert-dialog\`, \`aspect-ratio\`, \`avatar\`, \`breadcrumb\`, \`calendar\`, \`carousel\`, \`chart\`, \`command\`, \`context-menu\`, \`drawer\`, \`hover-card\`, \`input-otp\`, \`menubar\`, \`navigation-menu\`, \`pagination\`, \`progress\`, \`radio-group\`, \`resizable\`, \`scroll-area\`, \`sidebar\`, \`slider\`, \`sonner\`, \`switch\`, \`tabs\`, \`toggle-group\`.

---

### 4. Confirmed Defects and Discrepancies

1. **Non-Submitting Enquiry Forms**:
   - _Defect_: When a user completes the form on \`/business-enquiry\`, \`/contact\`, or \`/shivlakha-rail-logistics/cargo-opportunities\`, it triggers client validation, sets \`sent = true\`, and displays a "Validation passed" message, but **dispatches no network request, email, or database entry**.
   - _Impact_: Inability to capture actual customer leads.
2. **Statutory Disclosure Gaps (2 Placeholders)**:
   - _Defect 1 (\`/contact\`)_: Contains explicit placeholder string: \`[Placeholder: insert approved registered office, corporate office, telephone, business email...]\`.
   - _Defect 2 (\`/investors/investor-grievance-contact\`)_: Contains placeholder string: \`[Placeholder: insert approved Company Secretary/compliance contact...]\`.
   - _Impact_: Publishing with these placeholders violates SEBI/SME statutory disclosure standards.
3. **Hard-Coded Development Domain**:
   - _Defect_: Canonical links in \`src/content/site.ts:L31\` reference \`https://staging.kalyanicasttech.com\` instead of the official domain (\`https://kalyanicasttech.com\`).
4. **Permissive Crawling on Staging**:
   - _Defect_: \`public/robots.txt\` contains \`Allow: /\`, exposing pre-production review text to Googlebot.
5. **Disconnected Authentic Assets**:
   - _Defect_: While \`kct-website/public/assets\` possesses 61 verified authentic master photographs, \`pixel-perfect-painter-750\` currently renders them as empty \`ImageSlot\` boxes awaiting photographs.

---

### 5. Missing Functionality

1. **Backend Email / Database Integration**:
   - No Resend, SendGrid, Supabase, or webhook service is connected to receive form payloads.
2. **Document Distribution Storage**:
   - No public Cloudflare R2 / AWS S3 / Supabase bucket is wired to serve official PDF downloads for data sheets, brochures, or financial filings.
3. **Anti-Spam Protection**:
   - Forms lack Cloudflare Turnstile or reCAPTCHA v3 protection against automated bot submissions.
4. **Dynamic News & Press Feed**:
   - \`/resources/news-media\` renders an empty state with no CMS or JSON feed for company updates.

---

### 6. Technical Risks & Vulnerabilities

1. **TanStack Start (Beta SSR) Hosting Overhead**:
   - The current repository employs Nitro SSR (\`3.0.260603-beta\`) with Cloudflare server worker bindings. This introduces deployment fragility compared to a standard static Vite React SPA.
2. **External CDN Asset Reliance**:
   - In \`pixel-perfect-painter-750\`, the logo relies on an asset pointer JSON pointing to Application Template's R2 bucket. If the Application Template project is cleared, the header logo will break. (Now mitigated by our local preservation of the asset).
3. **Dependency Bloat**:
   - Dependencies include \`recharts\`, \`embla-carousel-react\`, and \`date-fns\` despite none being actively utilized.

---

### 7. Recommended Google AI Studio – Antigravity Workflow

To maximize development velocity while maintaining uncompromising architectural and factual discipline, we establish the following division of responsibilities:

```
┌─────────────────────────────────────────────────────────────┐
│                   GOOGLE AI STUDIO ROLE                     │
│  - Refine complex UI components (e.g. Form + Turnstile)     │
│  - Generate clean component code from approved specs        │
│  - Adapt ContentPage to display real assets from mapping    │
│  - Produce tested TypeScript interfaces & validation schemas│
└──────────────────────────────┬──────────────────────────────┘
                               │ Structured Component / Patch Hand-off
                               ▼
┌─────────────────────────────────────────────────────────────┐
│                      ANTIGRAVITY ROLE                       │
│  - Authoritative repository management & Git checkpoints    │
│  - Bridge the 61 authentic assets into the working tree     │
│  - Local Vite dev server orchestration & browser testing    │
│  - Multi-viewport responsive verification (360px - 1440px)  │
│  - Static AST inspection, build validation & secret defense │
│  - Documentation maintenance & deployment gatekeeper        │
└─────────────────────────────────────────────────────────────┘
```

#### Ground Rules for Collaboration:

1. **Single Source of Truth**: The local working project in Antigravity is canonical. Google AI Studio outputs are integrated as modular, peer-reviewed patches.
2. **Zero Hallucination Tolerance**: Prompts supplied to Google AI Studio must embed the approved company brief and prohibited claim rules from Section 4.
3. **Verification Before Commitment**: No component is marked working until verified inside the running local application via browser inspection.

---

### 8. Proposed Implementation Sequence

We propose executing the build across **6 sequential, testable phases**:

- **Phase 1: Asset Bridge & Foundation Alignment**
  - Transfer the 61 authentic assets from \`kct-website/public/assets/\` into \`public/assets/\` of the working tree.
  - Convert \`ImageSlot.tsx\` into a dual-mode component: displays authentic photography when an asset mapping exists; gracefully shows the architectural brief only when pending.
  - Replace the CDN logo pointer with the local high-res logo.
- **Phase 2: Homepage Hero & Showcase Polish**
  - Integrate the 30MP \`Rewari Factory.jpg\` master into the Homepage Hero with responsive 21:9 cropping.
  - Populate the 4-column product showcase with authentic photos: 40ft HC Cotton Bale Container, Heavy Bulk Salt & Steel Container, SS Dwarf Container, and Rail Siding masters.
- **Phase 3: Form Backend & Spam Protection Wiring**
  - Connect \`EnquiryForm.tsx\` to a real serverless delivery handler (e.g., Supabase table or Resend transactional email API).
  - Add client honeypot and Turnstile captcha protection.
- **Phase 4: Statutory Placeholders & Content Verification**
  - Present the 2 pending statutory items (Registered Office & Company Secretary contact) for management approval.
  - Replace placeholder strings with verified official contact data.
- **Phase 5: Technical Cleanup & SEO Hardening**
  - Purge the 26 unused UI components and unused dependencies (\`recharts\`, \`embla-carousel-react\`).
  - Configure production canonical URL (\`https://kalyanicasttech.com\`), \`sitemap.xml\`, and strict \`robots.txt\`.
- **Phase 6: Comprehensive Testing, Audit & Deployment Gate**
  - Execute full cross-viewport browser testing (360px, 768px, 1024px, 1440px).
  - Verify accessibility (keyboard navigation, ARIA dialogs, color contrast).
  - Deliver deployment readiness checklist.

---

### 9. Verification Criteria

Each implementation phase must satisfy the following acceptance criteria:

1. **Build Integrity**: Zero TypeScript errors, clean production bundle build.
2. **Visual Authenticity**: Only genuine assets from \`kct-website/public/assets\` or approved CAD drawings used. Zero synthetic AI images.
3. **Navigation & Links**: 100% of internal links, CTAs, and breadcrumbs resolve without 404s.
4. **Form Submissions**: Verified receipt of test payload at target destination (email or database) with proper error recovery on network failure.
5. **Responsiveness**: Zero horizontal overflow or layout clipping at 360px, 768px, and 1280px.
6. **Regulatory Compliance**: Zero unverified claims, zero placeholder bracket text remaining in customer-facing views.

---

### 10. Access, Credential & Integration Blockers

The following items require client confirmation or infrastructure access:

| Blocker ID | Item Description                                    | Required Action / Owner                                                                                                                         | Impact if Blocked                                                     |
| :--------- | :-------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------- |
| **BLK-01** | **Statutory Registered Office & Corporate Address** | Client Company Secretary to provide verified statutory registered office address, corporate office address, official phone, and business email. | \`/contact\` page retains placeholder notice.                         |
| **BLK-02** | **Investor Compliance Officer Details**             | Client Company Secretary to confirm Compliance Officer name, official investor email, and SCORES portal details.                                | \`/investors/investor-grievance-contact\` retains placeholder notice. |
| **BLK-03** | **Enquiry Email Destination / API Credentials**     | Client to designate recipient email inbox (e.g. \`info@kalyanicasttech.com\` or \`sales@...\`) and provide Resend / Supabase / SMTP API key.    | Forms must operate in explicit test mode.                             |
| **BLK-04** | **Target Production Domain Confirmation**           | Confirmation of official production domain name (assumed \`https://kalyanicasttech.com\`).                                                      | Canonical tags remain pre-production.                                 |

---

### Summary Conclusion

The repository foundation is clean, modular, and structurally mature. The critical missing link—**authentic imagery**—has been completely located in \`kct-website/public/assets\` (61 authentic high-res assets).

Per protocol, **implementation is paused at this baseline**. We await your review and authorization to proceed with **Phase 1: Asset Bridge & Foundation Alignment**.
