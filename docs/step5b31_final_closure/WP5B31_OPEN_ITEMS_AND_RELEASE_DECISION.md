# WP-5B.31 — Open Items & Release Decision Dossier

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.31 — Final Public-Facing Content, Footer, Visual Consistency & Production Candidate Finalisation  
**Date:** 2026-11-10  
**Status:** COMPLETE & FINAL  
**Lead Roles:** Product Lead, Content Director, Frontend Lead, Independent Auditor  

---

## 1. Register of Outstanding Items & Technical Debt

A forensic review of the entire project repository, backlog, issues register, and staging telemetry was conducted to identify any open items, technical risks, or potential blockers.

### 1.1 Severity Classification Table

| Severity Level | Definition | Open Count |
| :--- | :--- | :---: |
| **P0 — Fatal Blocker** | Critical statutory defect, build failure, broken navigation, regulatory violation | **0** |
| **P1 — Major Issue** | Visual inconsistency, broken contact channel, missing route, SEO error | **0** |
| **P2 — Minor Polish** | Non-critical visual refinement, post-launch copy tuning, non-blocking telemetry | **0** |
| **P3 — Future Roadmap** | Interactive 3D container configurator, multi-language support (Hindi/Gujarati) | Post-Launch |

**Result: Zero blocking defects exist across the entire platform.**

---

## 2. Statutory & Governance Sign-Off

The corporate website complies strictly with all statutory and corporate disclosures required for an active listed SME entity on the BSE:

1. **Dual-Entity Clear Demarcation:**
   - **Listed Parent:** `Kalyani Cast Tech Limited` (CIN: `L26990DL2012PLC242760`, BSE SME: `544023`, Rewari Works).
   - **Operating SPV:** `KMT Engineering Private Limited` (CIN: `U28910DL2023PTC413554`, Shivlakha Hub).
   - **Verbatim Single Sentence:** *"The Shivlakha Integrated Project is being developed by Kalyani Cast Tech Limited and operated by SPV KMT Engineering Private Limited"* (Line 265 of `shivlakha-rail-logistics.index.tsx`). Total occurrences = 1.
   - **Zero Prohibited Terms:** *"wholly owned subsidiary"* does not appear anywhere in the codebase.
2. **Statutory Credentials:**
   - BSE SME Script Code (`544023`) and ISIN (`INE0Q0D01015`) accurately presented on `/investor-relations` and `/about-us`.
   - CIN removed from homepage footer per executive directive and retained on `/about-us` and `/contact`.
3. **Engineering Specifications Integrity:**
   - RDSO Stage-I manufacturing approval and ISO 1161 / ISO 1496 compliance stated accurately without embellishment.
   - Eradication of the unverified 216,000 kg stacking claim.

---

## 3. Production Release Checklist & Pre-Flight Verification

| Item | Requirement | Verification Result | Sign-Off |
| :--- | :--- | :--- | :---: |
| **1** | Git Working Tree Cleanliness | All changes committed; no uncommitted or untracked scratch files | **CONFIRMED** |
| **2** | Automated Sensor Test Suite | 20 test files, 242 tests passing (100% pass rate) | **CONFIRMED** |
| **3** | Production Build Execution | Client & Nitro SSR builds succeed with exit code 0 | **CONFIRMED** |
| **4** | Shared Footer Compliance | Heading exact; 150-acre text removed; 2 commercial channels active | **CONFIRMED** |
| **5** | Internal Label Eradication | 0 occurrences of Activity A/B/C or developer markers | **CONFIRMED** |
| **6** | Theme Harmonisation | `/about-us` light theme unified; `ThemeToggle` removed | **CONFIRMED** |
| **7** | Mobile Header Cleanliness | `(Parent)` label removed from drawer branding | **CONFIRMED** |
| **8** | Staging Isolation & Security | `X-Robots-Tag: nofollow, noarchive, noindex` active on Netlify | **CONFIRMED** |
| **9** | Protected Branch Immutability | `release/kct-website-v1` frozen at `f1e26bb72a15f8c35665b8cf6444c621bb8114fd` | **CONFIRMED** |
| **10** | Production Domain Immutability | `https://kalyanicasttech.com` completely untouched | **CONFIRMED** |

---

## 4. Final Release Decision & Executive Next Steps

### 4.1 Release Decision
The technical implementation team and the independent audit team **unanimously recommend the corporate website modernisation project for immediate executive production release approval**.

**FINAL VERDICT: READY FOR MANAGEMENT PRODUCTION RELEASE APPROVAL**

### 4.2 Executive Authorisation Sequence (For Management)
Upon formal executive sign-off, management may execute the final production release as follows:

```bash
# Step 1: Switch to the protected release branch
git checkout release/kct-website-v1

# Step 2: Merge the verified feature branch
git merge feature/kct-step5b25b-discoverability-closure --no-ff -m "chore(release): merge WP-5B.31 verified production candidate v1.0"

# Step 3: Trigger the official production deployment
npx netlify deploy --prod --dir=dist/client
```

### 4.3 Strict Program Closure Directive
**The website implementation is officially CLOSED. No further work packages (including WP-5B.32) shall be opened or authorized.**
