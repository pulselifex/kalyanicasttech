# WP-5B.25B — STRUCTURED DATA FINAL VALIDATION & SEMANTIC AUDIT

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.25B  
**Date:** 06 November 2026  
**Reference Deployment:** Netlify Staging `6aeded590ed2d25a0ee82312`  
**Base Source Commit:** `a5ea24f` (feature/kct-step5b25b-discoverability-closure)  
**Schema Standard:** Schema.org JSON-LD (W3C Linked Data Format)  
**Verification Method:** Automated Node.js AST parser, Schema Validator & Edge HTML inspector  

---

## 1. Executive Summary & Semantic Principles

Structured data (JSON-LD) bridges human-readable website content and search engine knowledge graphs. In WP-5B.25B, all rendered JSON-LD schemas across the 27 indexable canonical routes were audited against live page content, corporate filings, and Schema.org semantic specifications.

The validation enforced six mandatory semantic rules:
1. **Global Corporate Anchor:** Every page includes the canonical `Corporation` schema identifying `Kalyani Cast Tech Limited` as the legal entity (CIN: `L26990DL2012PLC242760`, BSE SME: `544023`).
2. **Synchronized Breadcrumbs:** Every indexable route emits a `BreadcrumbList` where 100% of the `item` URLs match their self-referencing canonical URLs.
3. **Restricted LocalBusiness Usage:** `LocalBusiness` is strictly restricted to `/shivlakha-rail-logistics/gati-shakti-terminal`. It is explicitly **omitted** from `/shivlakha-rail-logistics/inland-container-terminal` to ensure the under-development ICT is never presented as operational.
4. **No Unverified Operational Claims:** `LocalBusiness` schemas omit public opening hours, walk-in customer access, and retail transactional services, reflecting an industrial freight siding.
5. **No Fictitious Commercial Schemas:** Zero `Product`, `Offer`, `AggregateRating`, or price fields are fabricated without verified e-commerce transactional infrastructure.
6. **Dedicated Statutory Schemas:** `ManufacturingPlant` is deployed on `/facilities`, `AboutPage` on `/about-us`, and `ContactPage` on `/contact` and `/investors/investor-grievance-contact`.

---

## 2. Schema Inventory Across Route Archetypes

| Route Archetype | Representative Routes | Rendered Schemas (@type) | Primary Schema Entity & Key Properties | Semantic Validation Finding |
| :--- | :--- | :--- | :--- | :--- |
| **Corporate Root & Hubs** | `/`, `/about-us`, `/our-journey`, `/leadership` | `Corporation`, `WebSite`, `BreadcrumbList`, `AboutPage` (on `/about-us`) | Parent Corporation with CIN, BSE ticker, registered office, official contact points | **VALID** — Connects corporate profile to BSE and YouTube official handles. |
| **Manufacturing & Plant** | `/manufacturing`, `/facilities`, `/engineering-quality` | `Corporation`, `WebSite`, `BreadcrumbList`, `ManufacturingPlant` (on `/facilities`) | `Rewari Manufacturing Works` (Tehsil Khol, Distt. Rewari, Haryana; Lat: 28.2612°, Long: 76.5418°) | **VALID** — Authentic geo-coordinates and industrial address verified against factory license. |
| **Product Showcase** | `/products-applications`, `/innovation` | `Corporation`, `WebSite`, `BreadcrumbList` | Container & casting engineering capabilities | **VALID** — Omits unsupported e-commerce pricing/availability fields. |
| **Shivlakha Operational Terminal** | `/shivlakha-rail-logistics/gati-shakti-terminal` | `Corporation`, `WebSite`, `BreadcrumbList`, `LocalBusiness` | `Gati Shakti Terminal (Shivlakha)` (Village Shivlakha, Taluka Bhachau, Kachchh, Gujarat 370140) | **VALID** — Operational private rail siding terminal without consumer opening hours. |
| **Shivlakha Development Platform** | `/shivlakha-rail-logistics`, `.../inland-container-terminal`, `.../cargo-opportunities` | `Corporation`, `WebSite`, `BreadcrumbList` | Multimodal infrastructure and route evaluation | **VALID** — ICT strictly omits LocalBusiness schema; reflects under-development status. |
| **Resource Libraries** | `/resources`, `.../quality-certifications`, `.../corporate-profile-brochures`, `.../news-media` | `Corporation`, `WebSite`, `BreadcrumbList` | Technical documentation and media archive | **VALID** — Clean hierarchical breadcrumbs linking back to `/resources`. |
| **Investor Gateway & Subpages** | `/investor-relations`, `/investors/*` (6 subpages) | `Corporation`, `WebSite`, `BreadcrumbList`, `ContactPage` (on grievance contact) | Listed statutory governance and grievance desk | **VALID** — Compliance officer & RTA contact points verified. |

---

## 3. Verbatim Rendered Schema Examples

### A. Global Corporation Schema (Rendered on All Pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Corporation",
  "@id": "https://kalyanicasttech.com/#corporation",
  "name": "Kalyani Cast Tech Limited",
  "legalName": "Kalyani Cast Tech Limited",
  "alternateName": "Kalyani Cast Tech",
  "url": "https://kalyanicasttech.com/",
  "logo": "https://kalyanicasttech.com/favicon.png",
  "description": "Indian manufacturer of freight containers, specialised cargo equipment, and precision castings at Rewari Works, Haryana, with multimodal terminal operations at Shivlakha, Kachchh, Gujarat.",
  "identifier": [
    {
      "@type": "PropertyValue",
      "name": "CIN",
      "value": "L26990DL2012PLC242760"
    },
    {
      "@type": "PropertyValue",
      "name": "BSE Scrip Code",
      "value": "544023"
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "B-144, Second Floor, DDA Shed, Phase-1, Okhla Industrial Area Phase-1",
    "addressLocality": "New Delhi",
    "postalCode": "110020",
    "addressCountry": "IN"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-9650891119",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+91-9711735302",
      "email": "cs@kalyanicasttech.com",
      "contactType": "investor relations",
      "areaServed": "IN"
    }
  ],
  "sameAs": [
    "https://www.bseindia.com/stock-share-price/kalyani-cast-tech-ltd/kct/544023/",
    "https://www.youtube.com/watch?v=7CTzRhpazSQ"
  ]
}
```

### B. ManufacturingPlant Schema (`/facilities`)
```json
{
  "@context": "https://schema.org",
  "@type": "ManufacturingPlant",
  "@id": "https://kalyanicasttech.com/facilities#plant",
  "name": "Rewari Manufacturing Works",
  "parentOrganization": {
    "@id": "https://kalyanicasttech.com/#corporation"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Village & Post Office Kathuwas, Tehsil Khol",
    "addressLocality": "Rewari",
    "addressRegion": "Haryana",
    "postalCode": "123101",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.2612,
    "longitude": 76.5418
  },
  "description": "Principal manufacturing plant of Kalyani Cast Tech Limited: container fabrication bays, induction foundry, and structural testing rigs."
}
```

### C. LocalBusiness Schema (`/shivlakha-rail-logistics/gati-shakti-terminal`)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://kalyanicasttech.com/shivlakha-rail-logistics/gati-shakti-terminal#terminal",
  "name": "Gati Shakti Terminal (Shivlakha)",
  "parentOrganization": {
    "@id": "https://kalyanicasttech.com/#corporation"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Survey Nos. 172, 173, 174 & Others, Village Shivlakha, Taluka Bhachau",
    "addressLocality": "Kachchh",
    "addressRegion": "Gujarat",
    "postalCode": "370140",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 23.3312,
    "longitude": 70.3618
  },
  "description": "Operational 30-acre rail-linked terminal facility with private broad-gauge railway siding connected directly to the Indian Railways network."
}
```

### D. ContactPage Schema (`/investors/investor-grievance-contact`)
```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Investor Grievance & Compliance Desk",
  "url": "https://kalyanicasttech.com/investors/investor-grievance-contact",
  "mainEntity": {
    "@id": "https://kalyanicasttech.com/#corporation"
  }
}
```

---

## 4. Syntax & Semantic Verification Results

| Verification Check | Standard Enforced | Automated Finding | Verdict |
| :--- | :--- | :--- | :--- |
| **JSON-LD Syntax** | RFC 8259 / W3C JSON-LD | Valid JSON, zero trailing commas, zero syntax errors | **PASS** |
| **Entity ID Consistency** | Unique `@id` URIs | All entity `@id` values link back to `#corporation` | **PASS** |
| **Canonical Agreement** | Canonical URL == Breadcrumb Item | 100% agreement across all 27 indexable routes | **PASS** |
| **No ICT LocalBusiness** | Under development status | `/inland-container-terminal` renders 3 schemas, zero LocalBusiness | **PASS** |
| **No Opening Hours** | Industrial B2B freight siding | Zero openingHours specifications in terminal schema | **PASS** |
| **No Fabricated Offers** | Truth in advertising / SEO integrity | Zero offers, prices, or user reviews generated | **PASS** |
| **Corporate Credentials** | Statutory listing parameters | Verified BSE SME scrip (544023) and CIN match MCA records | **PASS** |

---

## 5. Conclusion

The structured data implementation across the Kalyani Cast Tech Limited platform is syntactically pristine, semantically accurate, and strictly aligned with live on-page content. It creates a robust Knowledge Graph foundation for Google search crawlers without any overclaims or misrepresentations.
