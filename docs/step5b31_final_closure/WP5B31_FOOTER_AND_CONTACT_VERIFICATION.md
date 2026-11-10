# WP-5B.31 — Footer & Contact Verification Dossier

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.31 — Final Public-Facing Content, Footer, Visual Consistency & Production Candidate Finalisation  
**Date:** 2026-11-10  
**Target Component:** `Website_Codebase/src/components/site/SiteFooter.tsx`  
**Test Suite:** `Website_Codebase/src/test/site-footer.test.tsx`  
**Staging Candidate URL:** `https://6af30e33991577d8ae5ab24e--kalyanicasttech.netlify.app/`  

---

## 1. Objectives & Executive Requirements

Under WP-5B.31, executive review required three specific structural simplifications to the shared corporate footer across desktop and mobile presentations:

1. **Section Renaming (P0):**
   - Rename the Shivlakha location section in both desktop and mobile footer to exact title:  
     `Integrated Multimodal Logistics & Manufacturing Hub`.
2. **Land Allocation Removal (P0):**
   - Eliminate the 150-acre breakdown (30A Gati Shakti Terminal, 30A Inland Container Terminal, 5A container/wagon shed, 85A future expansion, CBIC notification reference) from the shared footer and mobile accordion.
   - Retain complete land allocation tables exclusively on authoritative dedicated routes: `/shivlakha-rail-logistics` and `/facilities`.
3. **Contact Card Restructuring (P0):**
   - Present the exact registered site address:  
     `Khasra No. 438, Village Shivlakha, Taluka Bhachau, District Kachchh, Gujarat – 370145, India.`
   - Organize commercial enquiries into two direct channels:
     - **Container & Wagon Manufacturing:** `business.development@kalyanicasttech.com` (clickable `mailto:`)
     - **Terminal Operations / Inland Container Terminal:** `terminal.head@kalyanicasttech.com` (clickable `mailto:`) and `+91 98719 77772` (clickable `tel:+919871977772`).
   - Remove internal operational labels `"Cargo Movement"` and `"Terminal Inquiries"`.
   - Prevent CIN from reappearing on the homepage footer (retained on `/about-us` and `/contact`).

---

## 2. Source Code Implementation Details

The implementation was performed directly in [`SiteFooter.tsx`](file:///d:/Kalyani%20Tech/Kalyani%20Records/Company%20Presentation%20%26%20Brochure/Kalyani%20Website/Website%20Content%20n%20Working/Website_Codebase/src/components/site/SiteFooter.tsx).

### 2.1 Code Diff & Structure

```tsx
{/* Shivlakha Integrated Project Summary Section */}
<section aria-labelledby="footer-shivlakha-heading" className="border-b border-white/10 pb-8 mb-8">
  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
    <div className="max-w-2xl">
      <div className="flex items-center gap-2 mb-2">
        <span className="inline-block w-2 h-2 rounded-full bg-amber-400" />
        <h2 id="footer-shivlakha-heading" className="text-sm font-semibold uppercase tracking-wider text-amber-400">
          Integrated Multimodal Logistics &amp; Manufacturing Hub
        </h2>
      </div>
      <p className="text-xs text-white/70 leading-relaxed">
        Khasra No. 438, Village Shivlakha, Taluka Bhachau, District Kachchh, Gujarat &ndash; 370145, India.
      </p>
    </div>

    {/* Contact Card with Two Commercial Channels */}
    <div className="rounded-lg border border-white/10 bg-white/5 p-4 text-xs text-white/80 space-y-3 lg:min-w-[340px]">
      <div>
        <p className="font-semibold text-white">Container &amp; Wagon Manufacturing</p>
        <a
          href="mailto:business.development@kalyanicasttech.com"
          className="text-amber-400 hover:underline transition-colors block mt-0.5"
        >
          business.development@kalyanicasttech.com
        </a>
      </div>
      <div className="pt-2 border-t border-white/10">
        <p className="font-semibold text-white">Terminal Operations / Inland Container Terminal</p>
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 mt-0.5">
          <a
            href="mailto:terminal.head@kalyanicasttech.com"
            className="text-amber-400 hover:underline transition-colors"
          >
            terminal.head@kalyanicasttech.com
          </a>
          <span className="hidden sm:inline text-white/40">&bull;</span>
          <a
            href="tel:+919871977772"
            className="text-amber-400 hover:underline transition-colors font-mono"
          >
            +91 98719 77772
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 2.2 Mobile Accordion Synchronisation

In the mobile accordion presentation (`isMobile` view), the exact same heading (`Integrated Multimodal Logistics & Manufacturing Hub`), registered address, and two enquiry channels are mirrored with accessible button state controls and collapsible panels.

---

## 3. Automated Vitest Verification Evidence

The test suite in [`site-footer.test.tsx`](file:///d:/Kalyani%20Tech/Kalyani%20Records/Company%20Presentation%20%26%20Brochure/Kalyani%20Website/Website%20Content%20n%20Working/Website_Codebase/src/test/site-footer.test.tsx) was updated to assert all WP-5B.31 requirements.

### 3.1 Test Cases & Results

| Test Description | Assertion Target | Result |
| :--- | :--- | :--- |
| **Heading Assertion** | Verifies `"Integrated Multimodal Logistics & Manufacturing Hub"` heading exists | **PASS** |
| **Land Data Absence** | Verifies `30-acre Gati Shakti` and land breakdown do not appear in footer | **PASS** |
| **Site Address** | Verifies `"Khasra No. 438, Village Shivlakha, Taluka Bhachau, District Kachchh, Gujarat – 370145, India."` | **PASS** |
| **Manufacturing Channel** | Verifies `"Container & Wagon Manufacturing"` channel with `mailto:business.development@kalyanicasttech.com` | **PASS** |
| **Terminal Channel** | Verifies `"Terminal Operations / Inland Container Terminal"` channel with `mailto:terminal.head@kalyanicasttech.com` | **PASS** |
| **Phone Link** | Verifies clickable `tel:+919871977772` with display text `+91 98719 77772` | **PASS** |
| **Internal Labels Absence** | Verifies `"Cargo Movement"` and `"Terminal Inquiries"` are eradicated | **PASS** |
| **CIN Homepage Absence** | Verifies `L26990DL2012PLC242760` does NOT appear on homepage footer | **PASS** |
| **Statutory Navigation** | Verifies links to Investor Relations, Contact, ESG, and Compliance | **PASS** |

**Execution Log:**
```bash
 ✓ src/test/site-footer.test.tsx (9 tests) 78ms
 Test Files  1 passed (1)
      Tests  9 passed (9)
```

---

## 4. Live Staging Candidate Probe Verification

Live HTTP requests were executed against `https://6af30e33991577d8ae5ab24e--kalyanicasttech.netlify.app/`.

```javascript
// Live Edge Response Telemetry
Status: 200 OK
Has Integrated Multimodal Heading: true
Has 150-acre breakdown: false
Has business.development email: true
Has terminal.head email: true
Has +91 98719 77772 phone: true
Has tel:+919871977772 link: true
Has 'Cargo Movement' label: false
Has 'Terminal Inquiries' label: false
Has Homepage Footer CIN: false
```

## 5. Conclusion & Verdict

All WP-5B.31 footer and contact card requirements are **100% closed, tested, and verified on the live staging environment**.
