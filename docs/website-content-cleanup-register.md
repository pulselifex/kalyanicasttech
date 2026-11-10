# Kalyani Cast Tech Limited — Website Content Cleanup Register
**Document Reference:** `docs/website-content-cleanup-register.md`  
**Revision Date:** 30 October 2026  
**Status:** Approved & Implemented  
**Core Reference:** Master Implementation Brief (Sections 6, 7, 8, 11)

---

## 1. Executive Summary

This register tracks all content deletions, terminology replacements, unverified claim purges, and developer-facing language eliminations executed across the website codebase in accordance with the 30 October 2026 Master Brief.

---

## 2. Eradication of "16 / 17 Configurations" Hardcoded Count

| File Path | Previous Text / Location | Approved Remediation |
|---|---|---|
| `src/components/site/ContainerCatalog.tsx` (L499) | `(16 Approved Core Configurations + 1 Custom Application Variant)` | Replaced with `across Standard, Specialised & Custom Configurations` |
| `src/components/site/ContainerCatalog.tsx` (L667) | `Published 16-Model Specification Table` | Replaced with `Container Specification Table` |
| `src/components/site/GrowthMatrix.tsx` (L48, L51, L58) | `across 16 configurations` / `16 controlled configurations` / `View 16 Container Models` | Replaced with `across specialized configurations` / `Engineered configurations` / `View Container Portfolio` |
| `src/components/site/HomeIntegratedHero.tsx` (L100) | `16 Container Configurations` | Replaced with `Engineered Container Solutions` |
| `src/components/site/HomePage.tsx` (L127, L213) | `kpi: "16 Models"` / `Explore 16 Configurations →` | Replaced with `kpi: "Portfolio"` / `Explore Container Portfolio →` |
| `src/components/site/WhyShivlakhaCoLocation.tsx` (L32, L35) | `tag: "16 Engineered Designs"` / `Kalyani's 16 specialized container designs` | Replaced with `tag: "Specialised Designs"` / `Kalyani's specialized container designs` |
| `src/routes/about-us.tsx` (L292) | `Explore 16 Models →` | Replaced with `Explore Container Portfolio →` |
| `src/routes/products-applications.tsx` (L56, L83, L186) | `16 Published Configurations` / `Browse 16-Model Catalogue` / `Complete 16-Model Container Range` | Replaced with `Engineered Container Specifications` / `Browse Container Catalogue` / `Complete Container Range & Custom Specifications` |
| `src/routes/manufacturing.index.tsx` (L268) | `View 16 Published Models` | Replaced with `View Container Portfolio` |
| `src/routes/resources.index.tsx` (L162, L194) | `16 Container Data Sheets` / `16 Published Container Engineering Data Sheets` | Replaced with `Container Technical Data Sheets` / `Published Container Technical Data Sheets` |

---

## 3. Purge of Unverified "6,000 Containers/Year" Claim

| File Path | Previous Text / Location | Approved Remediation |
|---|---|---|
| `src/routes/about-us.tsx` (L149) | `ANNUAL RUN: 6,000 Containers` | Replaced with `REWARI CAPACITY: ≥1,000 ISO/Yr (IRS Base)` |
| `src/routes/facilities.tsx` (L84, L165) | `Up to 6,000 / Yr` / `6,000 / Year` | Replaced with `≥1,000 / Yr (IRS Approved Base)` / `≥1,000 / Year (IRS Baseline)` |
| `src/routes/manufacturing.index.tsx` (L60) | `Up to 6,000 / Yr` | Replaced with `≥1,000 / Yr (IRS Baseline)` |
| `src/components/site/GrowthMatrix.tsx` (L48) | `Scaling container manufacturing to 6,000 units annually` | Replaced with `Scaling container manufacturing across specialized configurations` |
| `src/content/route-assets.ts` (L254, L302, L397) | `6,000 containers/year` | Replaced with `IRS baseline ≥1,000 containers/year` |

---

## 4. Purge of Unverified Marketing Slogans ("Zero Empty Runs")

| File Path | Previous Text | Approved Remediation | Reason |
|---|---|---|---|
| `src/components/site/WhyShivlakhaCoLocation.tsx` (L70) | `Platform Economics · Zero Empty Runs` | `Platform Economics · Co-Located Infrastructure` | "Zero Empty Runs" is an unprovable universal claim. Co-located infrastructure reflects the physical engineering reality. |

---

## 5. Developer-Facing Language Elimination

- All phrases such as "This section displays...", "The following card shows...", "This table lists...", and developer notes have been reviewed and scrubbed from user-facing copy.
- Technical UI elements present direct, professional B2B terminology with high-contrast industrial captions.
- Zero `console.error` warnings or debug artifacts in production templates.

