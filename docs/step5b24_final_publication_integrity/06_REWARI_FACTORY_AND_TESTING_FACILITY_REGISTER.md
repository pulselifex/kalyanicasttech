# WP-5B.24 — REWARI FACTORY & IN-HOUSE TESTING FACILITY REGISTER

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.24  
**Date:** 06 November 2026  
**Reference:** Staging Deployment `6aedd2fec05a6f2a02254c42`  

---

## 1. Operating Facility Profile & Address Integrity

**Rewari Works** is the primary integrated manufacturing plant of **Kalyani Cast Tech Limited**, situated in Haryana. It houses the heavy container fabrication shops, automatic welding lines, Class A ferrous foundry, heat treatment furnaces, and in-house testing facilities.

### Standardised Corporate Address
```
Village Mamaria Thethar, Tehsil Khol, District Rewari, Haryana – 123101, India
```

### Postal Code Integrity Audit
- **Authorized PIN:** `123101` (Mamaria Thethar branch under Rewari Head Post Office).
- **Prohibited / Invalid PIN:** `123401` (an obsolete or incorrect PIN).
- **Automated Verification:** Comprehensive regex search `123401` across all files in `Website_Codebase/src/` returned **0 matches**.
- **Test Sensor:** Vitest tests in `site-footer.test.tsx` and `facilities-page.test.tsx` validate that `Tehsil Khol` and PIN `123101` are present in all contact cards and footer components.

---

## 2. In-House Container Testing Facility

### Organisational Hierarchy & Governance
Management directed that the testing facility must be represented accurately:
- **Location:** Inside the Rewari Works manufacturing complex.
- **Divisional Placement:** Under the **Manufacturing Division** (specifically under Engineering & Quality).
- **Function:** In-house prototype proof-testing, structural qualification, and continuous quality assurance to validate container designs prior to third-party classification society survey (e.g. IRS, Lloyd's Register).
- **Regulatory Boundary:** It is **NOT** a standalone third-party accredited testing agency, nor does possessing the rig constitute a product certification in itself.

### Testing Facility Capabilities & Technical Parameters

| # | Test Fixture / Station | Technical Standard Reference | Test Load / Capacity | Purpose & Engineering Deliverable |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **Stacking Load Test Rig** | ISO 1496-1:2013 Clause 6.2 | 216,000 kg (848 kN per post) | 9-high fully laden container stacking validation on corner post assemblies. |
| **2** | **Transverse Racking Test** | ISO 1496-1:2013 Clause 6.7 | 150 kN hydraulic ram load | Transverse rigidity and end-frame distortion resistance under rolling motion. |
| **3** | **Longitudinal Racking Test** | ISO 1496-1:2013 Clause 6.8 | 75 kN hydraulic force | Longitudinal side-wall shear strength during emergency train braking. |
| **4** | **End-Wall Strength Test** | ISO 1496-1:2013 Clause 6.9 | 0.4P internal pressure load | Bulk cargo surge restraint qualification on corrugated end doors and panels. |
| **5** | **Side-Wall Strength Test** | ISO 1496-1:2013 Clause 6.10 | 0.6P internal pressure load | Side panel deflection and elastic recovery under shifting internal freight. |
| **6** | **Forklift Axle / Floor Test** | ISO 1496-1:2013 Clause 6.11 | 5,460 kg (53.5 kN) axle load | Hardwood/steel composite flooring durability under laden forklift tire contact. |
| **7** | **Weatherproof Water Spray** | ISO 1496-1:2013 Clause 6.14 | High-pressure nozzle spray (1 bar) | Full perimeter door gasket and roof seam water-tightness verification. |
| **8** | **Universal Testing Machine** | IS 1608 / ASTM E8 | 40-Tonne Calibrated UTM | Yield strength, tensile strength, and elongation testing of structural steel coupons. |
| **9** | **Sub-Zero Charpy Impact** | ASTM E23 / ISO 148-1 | Down to -45°C sub-zero chamber | Notch toughness qualification of casting steel and welds for cold climate service. |
| **10** | **Non-Destructive Testing (NDT)** | IS 12117 / ASNT SNT-TC-1A | USFD & Magnetic Particle Testing | Ultrasonic and magnetic flaw detection for internal porosity and sub-surface weld inclusions. |

---

## 3. Statutory & Type Approvals Associated with Rewari Works

1. **Indian Register of Shipping (IRS) Works Capacity Assessment:**
   - Certificate: `DLH21X014`
   - Scope: Quality system and works capability assessment for manufacture of marine freight containers.
2. **Lloyd's Register Foundry Approval:**
   - Certificate: `LR2489004WA`
   - Scope: Foundry shop approval for manufacturing carbon, carbon-manganese, and low-alloy steel castings up to 500 kg maximum piece weight.
3. **RDSO Class A Foundry Approval:**
   - Standard: `IS 12117:1996`
   - Scope: Master approval for railway steel casting production.
