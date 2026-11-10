# WP-5B.30 — Final Functional, Responsive & Accessibility QA Report

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.30 — Final Website Content Simplification, Release Readiness & Production Candidate Closure  
**Role:** Frontend Quality Assurance Lead & Senior UI Engineer  
**Scope:** Forensic testing across user workflows, keyboard navigation, responsive viewports, and interactive interface components.

---

## 1. Functional Component Verification Matrix

| Component / Subsystem | Target User Workflow | Test Method | Observed Result | Status |
| :--- | :--- | :--- | :--- | :--- |
| **SiteHeader Mega-Menu** | Desktop navigation across all 8 primary routes; Manufacturing dropdown navigation | [`navigation-mega-menu.test.tsx`](file:///d:/Kalyani%20Tech/Kalyani%20Records/Company%20Presentation%20&%20Brochure/Kalyani%20Website/Website%20Content%20n%20Working/Website_Codebase/src/test/navigation-mega-menu.test.tsx) | Desktop mega-menu renders all destinations; mobile drawer opens/closes and traps focus. | **PASS** |
| **Home Hero Carousel** | Automatic 4.5s slide rotation, manual prev/next navigation, keyboard arrow controls, play/pause toggle | [`hero-carousel.test.tsx`](file:///d:/Kalyani%20Tech/Kalyani%20Records/Company%20Presentation%20&%20Brochure/Kalyani%20Website/Website%20Content%20n%20Working/Website_Codebase/src/test/hero-carousel.test.tsx) | Carousel renders 4 capability slides; respects `prefers-reduced-motion`; pause on hover/focus. | **PASS** |
| **Product Specifications Drawer** | Tab switching between standard, specialised, dwarf, coiltainer, and casting models | [`products-applications.test.tsx`](file:///d:/Kalyani%20Tech/Kalyani%20Records/Company%20Presentation%20&%20Brochure/Kalyani%20Website/Website%20Content%20n%20Working/Website_Codebase/src/test/products-applications.test.tsx) | Model cards render correct dimensions and tare weights; Model 17 displays image pending notice. | **PASS** |
| **Historical Photo Gallery & Modal** | Category filtering, chronological sorting, and modal lightbox viewing | [`gallery-archive.test.tsx`](file:///d:/Kalyani%20Tech/Kalyani%20Records/Company%20Presentation%20&%20Brochure/Kalyani%20Website/Website%20Content%20n%20Working/Website_Codebase/src/test/gallery-archive.test.tsx) | 40 unique cards filter accurately; modal opens on thumbnail click and closes on escape/close button. | **PASS** |
| **Business Enquiry Form Engine** | Client-side validation, CSRF token verification, rate-limiting (5 req/min), dynamic terminal fields | [`enquiry-handler.test.ts`](file:///d:/Kalyani%20Tech/Kalyani%20Records/Company%20Presentation%20&%20Brochure/Kalyani%20Website/Website%20Content%20n%20Working/Website_Codebase/src/test/enquiry-handler.test.ts) | Sanitizes inputs, prevents spam injection, returns 429 upon rate limit exceeded. | **PASS** |
| **SiteFooter Address Directory** | Collapsible accordions for 5 operating locations; zero CIN display on homepage footer | [`site-footer.test.tsx`](file:///d:/Kalyani%20Tech/Kalyani%20Records/Company%20Presentation%20&%20Brochure/Kalyani%20Website/Website%20Content%20n%20Working/Website_Codebase/src/test/site-footer.test.tsx) | All accordions initialize collapsed; expand on click; CIN completely removed from footer. | **PASS** |
| **Investor Document Repository** | PDF document downloads, search filtering, and category tab navigation | [`investor-documents.test.tsx`](file:///d:/Kalyani%20Tech/Kalyani%20Records/Company%20Presentation%20&%20Brochure/Kalyani%20Website/Website%20Content%20n%20Working/Website_Codebase/src/test/investor-documents.test.tsx) | 156+ static PDF documents map to valid paths with verified response headers. | **PASS** |

---

## 2. Responsive Viewport Testing

| Viewport Profile | Width × Height | Navigation Mode | Layout Structure | Verification Status |
| :--- | :--- | :--- | :--- | :--- |
| **Mobile Portrait** | 375 × 667 px (iOS / Android) | Accessible hamburger drawer | Single-column cards; touch targets >= 48px; zero horizontal overflow | **PASS** |
| **Mobile Landscape** | 667 × 375 px | Mobile drawer | Clean horizontal reflow; compact hero | **PASS** |
| **Tablet Portrait** | 768 × 1024 px (iPad) | Collapsed drawer navigation | 2-column grid reflow; carousel scaled cleanly | **PASS** |
| **Desktop HD** | 1280 × 800 px (MacBook / Laptop) | Full desktop mega-menu | Multi-column grid; hero 5/7 column split | **PASS** |
| **Desktop Full HD** | 1920 × 1080 px (1080p Monitor) | Full desktop mega-menu | Max container 1280px (`max-w-7xl`); centered | **PASS** |

---

## 3. Accessibility & Usability (a11y) Verification

- **Keyboard Navigation:** Full tab order traversal verified across all interactive controls (`<button>`, `<a>`, `<input>`, `<select>`, `<textarea>`).
- **Skip Links:** Primary "Skip to main content" link present and functional.
- **Focus Indicators:** High-contrast outline rings (`focus-visible:ring-2 focus-visible:ring-blue-400`) applied on all buttons, links, and form fields.
- **Screen Reader Semantics:**
  - Semantic landmarks applied: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
  - Carousel features live announcement region: `aria-live="polite"` (`Slide X of 4: Title`).
  - Accordions declare `aria-expanded` and `aria-controls` bindings.
- **Color Contrast:** Text and interactive elements meet WCAG 2.1 AA minimum contrast ratio (4.5:1 for normal text, 3:1 for large headers and buttons).

---

## 4. Performance & Console Stability

- **Vite Production Bundler:** Zero chunking errors, zero circular dependency warnings.
- **Browser Console:** Zero uncaught JavaScript errors or unhandled promise rejections.
- **Image Optimization:** All visual assets load with explicit aspect ratios (`aspect-[16/10]`, `aspect-[4/3]`) to prevent Cumulative Layout Shift (CLS).

**VERDICT: PASS (100% FUNCTIONALLY SOUND)**
