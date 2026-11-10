# Kalyani Cast Tech Limited — Website Information Architecture v3
**Document Reference:** `docs/website-information-architecture-v3.md`  
**Revision Date:** 30 October 2026  
**Status:** Approved & Implemented  
**Supersedes:** Information Architecture v1 & v2

---

## 1. Executive Summary

This document specifies the canonical 6-category Information Architecture (IA) for the Kalyani Cast Tech Limited corporate website (`https://kalyanicasttech.netlify.app`), implementing the approved restructuring directives of the 30 October 2026 Master Brief.

The architecture consolidates fragmented sub-sections, standardises URL hierarchies, establishes clear parent-child navigation, and provides unified industrial messaging across both desktop and mobile viewports.

---

## 2. Global Primary Navigation Hierarchy (6 Items)

The website is structured into exactly six primary navigation destinations:

```
[1. Company] ────────► /about-us
      ├── About Kalyani Cast Tech (/about-us)
      ├── Board & Management (/leadership)
      └── Facilities & Locations (/facilities)

[2. Products] ───────► /products-applications
      ├── Containers (/products-applications#containers)
      ├── Wagons (/products-applications#wagons)
      └── Foundry (Corner Castings) (/products-applications#foundry)

[3. Shivlakha] ──────► /shivlakha-rail-logistics (Direct Single Destination)

[4. Engineering & Quality] ─► /engineering-quality (Direct Single Destination)

[5. Investor Relations] ────► /investor-relations
      └── Statutory Filings & Governance (/investor-relations)

[6. Contact] ────────► /contact
      ├── Locations & Contact Directory (/contact)
      └── Commercial Enquiry Form (/contact#enquiry-form)
```

### Navigation Terminology Changes
- **"Containers, Wagons & Castings"** replaced with **"Products"**
- **"Manufacturing & Quality"** unified under **"Engineering & Quality"**
- **"Shivlakha Hub"** replaced with **"Shivlakha"** (direct link, no sub-navigation to "#status" or "#cargo-evaluation")
- **"Resources"** removed from primary nav (accessible via direct routes and redirects)

---

## 3. Approved Page Headlines & Brand Identity

| Route | Canonical Page Title | Approved H1 Headline |
|---|---|---|
| `/` | Home | **Built for what India moves.** |
| `/about-us` | About Kalyani Cast Tech | **One company. Two plants. A rail-linked cargo story still being written.** |
| `/leadership` | Board & Management | **Engineering experience. Industrial leadership. Responsible governance.** |
| `/products-applications` | Products & Applications | **The cargo picks the container. We engineer it.** |
| `/facilities` | Facilities & Locations | **Two plants. One engineering standard.** |
| `/engineering-quality` | Engineering & Quality | **From design to testing — engineering under one roof.** |
| `/shivlakha-rail-logistics` | Shivlakha Rail Logistics | **Manufacturing meets rail-linked logistics.** |
| `/investor-relations` | Investor Relations | **Listed. Disclosed. Audited.** |
| `/contact` | Contact & Directory | **Tell us what you are moving. We'll route it to the right desk.** |

---

## 4. Canonical Redirect & Route Compatibility Register

All historical and audit URLs are mapped via 301 redirects to preserve SEO authority and statutory link integrity:

| Legacy Route | Canonical Destination | Status |
|---|---|---|
| `/company` | `/about-us` | 301 Permanent Redirect |
| `/company/leadership` | `/leadership` | 301 Permanent Redirect |
| `/company/our-journey` | `/about-us` | 301 Permanent Redirect |
| `/company/our-business` | `/about-us` | 301 Permanent Redirect |
| `/containers-solutions` | `/products-applications` | 301 Permanent Redirect |
| `/containers-solutions/*` | `/products-applications` | 301 Permanent Redirect |
| `/manufacturing` | `/engineering-quality` | 301 Permanent Redirect |
| `/manufacturing/*` | `/engineering-quality` | 301 Permanent Redirect |
| `/investors` | `/investor-relations` | 301 Permanent Redirect |
| `/investors/*` | `/investor-relations` | 301 Permanent Redirect |
| `/resources` | `/engineering-quality` | 301 Permanent Redirect |
| `/resources/*` | `/engineering-quality` | 301 Permanent Redirect |

---

## 5. Architectural Verification Sign-off

- Verified against `src/content/site.ts` and `src/content/site-config.ts`.
- Validated with Vitest automated suite (37/37 tests passing).
- Zero broken links, zero orphaned routes, and compliant mobile responsive drawer.

