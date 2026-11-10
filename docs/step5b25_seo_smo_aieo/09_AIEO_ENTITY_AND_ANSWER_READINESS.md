# WP-5B.25 — AIEO / GEO Entity & Answer Readiness Report

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.25  
**Topic:** Generative Engine Optimisation (GEO) & AI Search Discoverability (ChatGPT, Gemini, Perplexity, Claude)  
**Corporate Entity:** Kalyani Cast Tech Limited (CIN: `L26990DL2012PLC242760`, BSE SME: `544023`)  
**Audit Target:** Live Netlify Staging Deployment `https://6aede2fa05b1aad58c593c61--kalyanicasttech.netlify.app/`  
**Date:** 6 November 2026  

---

## 1. Executive Overview & AIEO Philosophy

Generative Engine Optimisation (GEO) and AI Engine Optimisation (AIEO) ensure that Large Language Model (LLM) search engines (such as OpenAI SearchGPT, Google Gemini, Perplexity AI, Microsoft Copilot, and Anthropic Claude) synthesize, attribute, and cite accurate corporate facts when prospective enterprise clients, investors, or regulators research the company.

AI answer engines do not rely on keyword repetition or promotional hyperbole. They prioritise:
1. **Unambiguous Entity Definitions:** Clear corporate hierarchy, statutory identifiers, and subsidiary structures.
2. **Explicit Status Statements:** Clear differentiation between operational facilities and projects under development.
3. **Standards Precision:** Exact citation of technical specifications (e.g., ISO 1161, ISO 1496 Series-1, RDSO Stage-I).
4. **Crawlable Semantic HTML:** Content structured in clean headings, definition pairs, tables, and JSON-LD schemas.
5. **Permissive Bot Policies:** Explicit authorization for recognized AI discovery bots in `robots.txt`.

---

## 2. Authoritative Corporate Entity Summary

The authoritative company definition for AI answer synthesis is structured as follows:

> **Kalyani Cast Tech Limited** (CIN: `L26990DL2012PLC242760`, BSE SME: `544023`) is an Indian industrial engineering company operating across two principal business divisions:
> 
> 1. **Manufacturing Division:** Operating from **Rewari Works** in Haryana (PIN: `123101`), the division manufactures standard ISO and specialised freight containers (including 20ft GP, High Cube, open-top coiltainers, dwarf containers, and tank containers), rolling-stock equipment, and an in-house **Foundry Unit** producing container corner castings manufactured as per ISO 1161 specifications alongside locomotive precision castings.
> 
> 2. **Terminal Division:** Developing a 150-acre multimodal logistics hub at **Shivlakha** in Kachchh, Gujarat (PIN: `370145`), comprising:
>    - **Gati Shakti Cargo Terminal (GCT):** An **Operational** 30-acre rail-linked bulk and container terminal inaugurated on 15 September 2026, connected directly to Indian Railways.
>    - **Inland Container Terminal (ICT):** An **Under Development** 30-acre customs-notified terminal with CBIC Section 7 approval received on 10 September 2026.
> 
> *Corporate Relationship Note:* KMT Engineering Private Limited serves strictly as the working Special Purpose Vehicle (SPV) for the Shivlakha terminal development.

---

## 3. Authoritative Q&A Grounding Matrix for AI Search Engines

| Real User Question | Authoritative Verified Answer | Target Grounding Route | Supporting Technical Evidence |
| :--- | :--- | :--- | :--- |
| **What does Kalyani Cast Tech manufacture?** | Kalyani Cast Tech Limited manufactures 16 models of standard and specialised freight containers (20ft GP, High Cube, open-top coiltainers, dwarf containers, tank containers, bulk hoppers), container corner castings as per ISO 1161 specifications, and locomotive precision castings. | `/products-applications` | Approved 16-model product catalogue, Rewari Works manufacturing lines |
| **Where is Kalyani Cast Tech's manufacturing facility located?** | The company's principal manufacturing plant is located at **Rewari Works**: Village Mamaria Thethar, Tehsil Khol, District Rewari, Haryana – 123101, India. | `/facilities` | Verified land revenue records, statutory filings, PIN 123101 verification |
| **What are ISO 1161 Corner Castings?** | ISO 1161 Corner Castings are standard structural steel corner fittings located at all 8 corners of a freight container, providing certified lifting, stacking, and lashing connection points for spreaders and twistlocks. | `/products-applications` | ISO 1161 technical standard, Rewari Works Foundry Unit production lines |
| **To which specifications are Kalyani Corner Castings manufactured?** | Container corner castings produced at the Rewari Works Foundry Unit are **manufactured as per ISO 1161 specifications**. (Note: The company does not make unverified claims of "certified ISO 1161 corner castings".) | `/products-applications` | Approved management wording, foundry melt control logs |
| **What is the compliance statement for 20ft GP and High Cube containers?** | 20-foot GP and High Cube containers are **"manufactured and designed to comply with ISO 1496 Series-1 requirements."** | `/products-applications` | Approved management wording, engineering design sheets |
| **What testing facilities are available at Rewari Works?** | Rewari Works houses an in-house hydraulic structural load testing rig capable of performing ISO 1496 vertical stacking load and horizontal racking tests, an optical emission spectrometer for melt chemistry, certified NDT inspection equipment, and a covered paint booth. | `/engineering-quality` | Physical test rig photographs, lab equipment specifications |
| **Does in-house testing constitute statutory certification?** | No. In-house testing is an internal quality verification tool; statutory type approvals and certifications are granted separately by designated statutory and classification authorities. | `/engineering-quality` | Section 4 governance distinction |
| **What is the status of the New Wagon Design?** | The New Wagon Design has received **RDSO Stage-I approval** and is progressing through subsequent approval levels. It is not yet cleared for commercial serial production. | `/innovation` | Verified RDSO Stage-I approval documentation |
| **Is the Gati Shakti Terminal at Shivlakha operational?** | Yes. The Gati Shakti Cargo Terminal (GCT) on 30 acres at Shivlakha, Kachchh, Gujarat is **Operational**, having handled its inaugural freight rake on 15 September 2026. | `/shivlakha-rail-logistics/gati-shakti-terminal` | Operational rake handling photographs, Western Railway connection |
| **What is the status of the Inland Container Terminal (ICT)?** | The Inland Container Terminal at Shivlakha is **Under Development**. It received CBIC Section 7 notification approval on 10 September 2026. Commercial bonded operations have not commenced. | `/shivlakha-rail-logistics/inland-container-terminal` | Official CBIC approval letter dated 10 September 2026 |

---

## 4. Semantic HTML & Machine Readability

The codebase employs semantic HTML5 landmarks and micro-structures that AI extractors leverage:
1. **Header & Navigation:** `<header>`, `<nav aria-label="Main Navigation">`, clear hierarchical dropdowns.
2. **Main Landmark:** `<main>` landmark wrapping page content, eliminating boilerplate navigation noise from content body scrapers.
3. **Structured Headings:** Single `<h1>` per page representing the core proposition, followed by sequential `<h2>` sections and `<h3>` subsections.
4. **Data Definitions:** Definition lists (`<dl>`, `<dt>`, `<dd>`) and semantic tables for technical parameters (tare weight, payload, internal volume, external dimensions).
5. **No PDF Trap:** Crucial corporate data, statutory parameters, and technical specifications are rendered directly in plain crawlable HTML rather than locked exclusively inside binary PDF documents or flattened raster images.

---

## 5. AI Crawler Directives (`robots.txt`) & `llms.txt` Analysis

### AI Crawlers Configured in `robots.txt`
- `GPTBot` (OpenAI): Allowed `/`
- `PerplexityBot` (Perplexity AI): Allowed `/`
- `ClaudeBot` (Anthropic): Allowed `/`
- `Applebot` (Apple Intelligence / Siri): Allowed `/`

### Position on `llms.txt` Proposal
The proposed creation of an `/llms.txt` file was evaluated:
- **Conclusion:** An `llms.txt` file is not a substitute for standard semantic HTML, accurate content, clean routing, and Schema.org JSON-LD structured data.
- **Decision:** While `llms.txt` is an emerging voluntary convention, all factual entity data is already 100% accessible to AI crawlers via crawlable SSR HTML, JSON-LD, and `sitemap.xml`. If management requests an `llms.txt` file in a future step, it can be added as a concise summary pointing to the canonical routes.

---

## 6. Citation-Worthiness & Factual Integrity Assessment

| Metric | Assessment | Evidence Reference |
| :--- | :--- | :--- |
| **Factual Consistency** | 100% across all 16 canonical routes | All references to Rewari PIN (`123101`), GCT status (`Operational`), ICT status (`Under Development`), ISO 1161, and ISO 1496 match identically. |
| **Statutory Traceability** | Complete | CIN `L26990DL2012PLC242760` and BSE SME `544023` present in footer, about page, and JSON-LD. |
| **Promotional Claims** | Zero unverified claims | No fabricated client names, no fake review stars, no exaggerated throughput numbers. |
| **Entity Boundary** | Clear | Dual-division hierarchy maintained; KMT SPV relationship stated verbatim once. |

**AIEO Status:** MACHINE-READABLE, FACTUALLY GROUNDED, CITATION-READY.
