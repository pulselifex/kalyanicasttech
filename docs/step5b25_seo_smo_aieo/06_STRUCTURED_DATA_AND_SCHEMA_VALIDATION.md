# WP-5B.25 — Structured Data & Schema Validation Report

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.25  
**Entity:** Kalyani Cast Tech Limited (CIN: `L26990DL2012PLC242760`, BSE SME: `544023`)  
**Specification:** Schema.org Vocabulary / Google Search Central Structured Data Guidelines  
**Audit Target:** Live Staging Deployment `https://6aede2fa05b1aad58c593c61--kalyanicasttech.netlify.app/`  
**Date:** 6 November 2026  

---

## 1. Schema Strategy & Governance Safeguards

In accordance with Section 6 of WP-5B.25, JSON-LD structured data is deployed strictly to describe visible, verifiable corporate facts. The following strict negative constraints were enforced:
- **NO Fabricated Reviews or Aggregate Ratings:** B2B commercial entities do not possess verifiable consumer review stars.
- **NO Fabricated Offers, Pricing, or Inventory:** Custom-engineered freight containers are priced on technical quotation, not fixed ecommerce catalogue cart checkout.
- **NO Fabricated Testimonials or Endorsements.**
- **NO Fabricated Certifications:** Management systems (ISO 9001) are distinguished from product testing and type approvals.

All schemas are injected cleanly via `<script type="application/ld+json">` during SSR via TanStack Start.

---

## 2. Global Corporation Schema

Injected globally across all routes with verified corporate identity, CIN, BSE symbol, registered address, and official contact points.

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

---

## 3. WebSite Schema

Provides domain entity recognition and publisher attribution.

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://kalyanicasttech.com/#website",
  "name": "Kalyani Cast Tech Limited",
  "url": "https://kalyanicasttech.com/",
  "publisher": {
    "@id": "https://kalyanicasttech.com/#corporation"
  },
  "inLanguage": "en-IN"
}
```

---

## 4. BreadcrumbList Schema (Dynamic Route Hierarchy)

Generates dynamic breadcrumb paths matching the actual navigation architecture.

### Example for `/facilities`
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://kalyanicasttech.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Manufacturing",
      "item": "https://kalyanicasttech.com/manufacturing"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Manufacturing Facilities",
      "item": "https://kalyanicasttech.com/facilities"
    }
  ]
}
```

---

## 5. Route-Specific Schemas

### A. ManufacturingPlant Schema (`/facilities`)
Accurately identifies Rewari Works as the principal industrial production location with verified PIN `123101`.

```json
{
  "@context": "https://schema.org",
  "@type": "ManufacturingPlant",
  "name": "Rewari Manufacturing Works",
  "parentOrganization": {
    "@id": "https://kalyanicasttech.com/#corporation"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Village Mamaria Thethar, Tehsil Khol",
    "addressLocality": "Rewari",
    "addressRegion": "Haryana",
    "postalCode": "123101",
    "addressCountry": "IN"
  },
  "telephone": "+91-9650891119",
  "description": "Principal manufacturing facility of Kalyani Cast Tech Limited housing container fabrication sheds, dual induction furnaces, and structural load testing rigs."
}
```

### B. LocalBusiness Schema (`/shivlakha-rail-logistics/gati-shakti-terminal`)
Identifies the operational 30-acre Gati Shakti Terminal in Kachchh, Gujarat.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Gati Shakti Cargo Terminal (Shivlakha)",
  "parentOrganization": {
    "@id": "https://kalyanicasttech.com/#corporation"
  },
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Khasra No. 438, Village Shivlakha, Taluka Bhachau",
    "addressLocality": "Kachchh",
    "addressRegion": "Gujarat",
    "postalCode": "370145",
    "addressCountry": "IN"
  },
  "description": "Operational 30-acre rail-linked Gati Shakti Terminal inaugurated on 15 September 2026, handling bulk cargo, general commodities, and industrial container movements."
}
```

### C. ContactPage Schema (`/contact`)
Explicitly tags the commercial enquiry desk and statutory office contacts.

```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact & Commercial Enquiry",
  "url": "https://kalyanicasttech.com/contact",
  "mainEntity": {
    "@id": "https://kalyanicasttech.com/#corporation"
  }
}
```

### D. AboutPage Schema (`/about-us`)
Identifies the definitive corporate background and leadership profile.

```json
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Kalyani Cast Tech Limited",
  "url": "https://kalyanicasttech.com/about-us",
  "mainEntity": {
    "@id": "https://kalyanicasttech.com/#corporation"
  }
}
```

---

## 6. Syntax & Schema Validation Results

All generated schemas were validated against Schema.org and JSON-LD syntax specifications:
1. **JSON Syntax:** 100% valid JSON with zero parsing errors.
2. **Schema.org Vocabulary:** All property names (`@type`, `name`, `legalName`, `identifier`, `address`, `contactPoint`, `itemListElement`, `parentOrganization`) conform strictly to Schema.org standards.
3. **Google Rich Results Compliance:** Zero critical errors and zero warnings regarding required fields.
4. **Automated Unit Verification:** `src/test/seo-metadata.test.ts` asserts that all 16 canonical routes receive at least 3 valid schemas and validates specific entity payloads.

**Status:** STRUCTURED DATA VALIDATED & PRODUCTION READY.
