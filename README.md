# Kalyani Cast Tech Limited — Corporate Web Platform

[![Live Site](https://img.shields.io/badge/Live_Site-Netlify-00C7B7?style=flat&logo=netlify)](https://kalyanicasttech.netlify.app)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev)
[![TanStack Start](https://img.shields.io/badge/TanStack-Start-FF4154?logo=tanstack)](https://tanstack.com)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?logo=tailwindcss)](https://tailwindcss.com)
[![Vitest](https://img.shields.io/badge/Tests-242%20Passed-FCC624?logo=vitest)](https://vitest.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript)](https://www.typescriptlang.org)

Official corporate web application and logistics showcase platform for **Kalyani Cast Tech Limited (KCT)**.

- **Live Staging/Showcase URL:** [https://kalyanicasttech.netlify.app](https://kalyanicasttech.netlify.app)
- **BSE Scrip Code:** `544023`
- **CIN:** `L26990DL2012PLC242760`
- **Registered Office:** B-144, Second Floor, DDA Shed, Phase-1, Okhla Industrial Area Phase-1, New Delhi – 110020, India
- **Works:** Village Mamaria Thethar, District Rewari, Haryana 123101, India
- **Multimodal Logistics Hub:** Khasra No. 438, Village Shivlakha, Taluka Bhachau, District Kachchh, Gujarat 370145, India

---

## Technical Architecture

The platform is engineered as a modern, high-performance SSR corporate web application:

- **Framework:** React 19 + TypeScript + TanStack Start (SSR)
- **Routing:** TanStack Router (`src/routes`) with type-safe file-based route definitions
- **Styling:** Tailwind CSS v4 with industrial design tokens (`src/styles.css`) and accessible UI primitives
- **State & Query:** TanStack React Query v5
- **Build & Server:** Vite 8 + Nitro (Cloudflare / Node / Netlify SSR runtime)
- **Automated Verification:** 20 test suites with **242 automated Vitest unit/integration sensors** (100% pass rate)
- **Hosting & CI/CD:** Netlify Edge with automated functions bundling, asset caching, and security headers (`HSTS`, `CSP`, `X-Content-Type-Options`)

---

## Key Modules & Capabilities

1. **16-Model Technical Container Catalogue (`src/components/site/ContainerCatalog.tsx`):**
   - Full technical specification matrix covering all 16 KCT container variants (Models 6.5.1 to 6.5.16).
   - Real-time dimensional tolerances (+0/-6, +0/-5, +0/-10 mm), cubic capacity, and floor test ratings (`7,260 kg` fork-lift wheel load).
   - Heavy Coiltainer handling ratings (`Lift-On/Off: 36 MT · Chassis: 71 MT`) and approved stacking loads.
   - Interactive slide-over technical data sheet drawer.

2. **Shivlakha Integrated Multimodal Logistics Hub Tracker (`src/components/site/ShivlakhaStatus.tsx`):**
   - Phased infrastructure status tracking:
     - Container Manufacturing: **Operational**
     - Gati Shakti Cargo Terminal (GCT): **Operational**
     - Railway Wagon Manufacturing: **Under Development · Target Q4 FY 2026-27**
     - Inland Container Depot (ICD): **Under Development · Target Q1 FY 2027-28**
   - Dual-entity operational governance strictly adhering to SEBI LODR disclosures.

3. **Commercial Enquiry & Statutory Routing Engine (`src/lib/enquiry-handler.ts`):**
   - Departmental routing across locked enquiry categories (Container Manufacturing, Logistics/Terminal Operations).
   - CSRF protection, origin validation, payload sanitisation, and IP rate limiting.
   - Dedicated investor grievance channel (`cs@kalyanicasttech.com`).

4. **Legacy URL & SEO Preservation Engine (`src/lib/legacy-redirects.ts`):**
   - Exact 301 permanent redirects preserving historical WordPress URLs and canonical slug mappings.
   - Complete Schema.org Corporation JSON-LD structured data and OpenGraph cards.

---

## Project Structure

```text
├── public/                 # Static assets, certificate scans, investor documents, images
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── site/           # Corporate components (Header, Footer, ContainerCatalog, EnquiryForm, etc.)
│   │   └── ui/             # Design system base primitives
│   ├── content/            # Single source of truth (site-config.ts, route-assets.ts, pages.json)
│   ├── lib/                # Business logic (enquiry-handler, legacy-redirects, search)
│   ├── routes/             # File-based SSR route tree
│   ├── server.ts           # SSR entry wrapper & edge request handler
│   └── styles.css          # Design tokens and Tailwind utility layers
├── docs/                   # Engineering documentation, audit matrices, and release packs
├── vite.config.ts          # Vite build pipeline & TanStack Start SSR configuration
└── vitest.config.ts        # Unit and integration test runner config
```

---

## Development & Build Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Run full automated test sensor suite (242 tests)
npm test

# Run code linter
npm run lint

# Compile production SSR bundle
npm run build

# Preview production build locally
npm run preview
```

---

## Statutory Disclaimers & Approvals

All technical specifications, plant capacities, and corporate claims are governed by `Kalyani_Cast_Tech_Website_Content_Master.md` and certified under IRS Certificate Report No. DLH21X014, ISO 9001:2015, and Lloyd's Register Chapter 4 Section 9.
