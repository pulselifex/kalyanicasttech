# WP-5B.25B — ARTIFICIAL INTELLIGENCE & GENERATIVE ENGINE OPTIMIZATION (AIEO / GEO) FACTUAL CONTENT REVIEW

**Programme:** Kalyani Cast Tech Limited Corporate Website Modernisation  
**Work Package:** WP-5B.25B  
**Date:** 06 November 2026  
**Evaluation Scope:** Entity disambiguation, crawlable factual page copy, LLM grounding, and Generative Engine Optimization  
**Protected Release Baseline:** `release/kct-website-v1` (FROZEN)  
**Staging Reference:** `https://6aeded590ed2d25a0ee82312--kalyanicasttech.netlify.app/`  

---

## 1. AIEO / GEO Architecture & Philosophy

Generative AI search engines (Google Gemini Search / AI Overviews, OpenAI SearchGPT, Perplexity AI, Claude Search) do not rank web pages purely on keyword matching or anchor text. Instead, they ingest web text to extract entity relationships, factual claims, technical specifications, and corporate authority, synthesizing them into answer summaries for user queries.

### Strict Governance Constraints Enforced:
1. **No Fictitious `llms.txt` Stubs:** Per WP-5B.25B instructions, no superficial `llms.txt` file was created merely to claim "AIEO compliance". Real AIEO relies on crawlable, semantically structured, authoritative HTML and JSON-LD.
2. **No Fabricated Q&A / Low-Quality FAQ Widgets:** Generic, keyword-stuffed FAQ sections that offer no genuine technical substance were strictly avoided.
3. **No Unsubstantiated AI Citation Guarantees:** Optimization focuses on clean, unambiguous entity presentation, enabling LLMs to accurately attribute facts to Kalyani Cast Tech Limited without hallucination.

---

## 2. Core Corporate Entity & Technical Parameter Audit

An automated crawlability sensor verified that all 9 mandatory corporate entities, divisions, locations, approvals, and technical claims are prominently present in static crawlable HTML across canonical landing pages:

| Entity / Technical Parameter | Target Canonical Route | Verified On-Page HTML Text Snippet | Search Intent & Grounding Impact | Compliance Verdict |
| :--- | :--- | :--- | :--- | :--- |
| **1. Kalyani Cast Tech Limited** | `/`, `/about-us` | `"Kalyani Cast Tech Limited (BSE SME: 544023, CIN: L26990DL2012PLC242760)"` | Establishes the sole listed parent entity; distinguishes from unrelated Kalyani entities (e.g. Bharat Forge). | **VERIFIED (100%)** |
| **2. Manufacturing Division** | `/manufacturing`, `/` | `"Manufacturing Division: Container Manufacturing, Wagon Manufacturing, and Precision Foundry Unit"` | Structures the company's operating architecture into exactly two core divisions. | **VERIFIED (100%)** |
| **3. Terminal Division** | `/shivlakha-rail-logistics`, `/` | `"Terminal Division: Integrated multimodal logistics infrastructure at Shivlakha, Kachchh, Gujarat"` | Clarifies the dual-division structure and logistics operations footprint. | **VERIFIED (100%)** |
| **4. Rewari Works** | `/facilities`, `/contact` | `"Rewari Manufacturing Works: Village & Post Office Kathuwas, Tehsil Khol, Distt. Rewari, Haryana 123101"` | Grounds physical manufacturing plant location, PIN, and district coordinates. | **VERIFIED (100%)** |
| **5. Corner Castings (ISO 1161)** | `/products-applications`, `/engineering-quality` | `"Our Corner Castings are manufactured as per ISO 1161 specifications at our Rewari foundry with Lloyd's Register foundry shop approval (Certificate LR2489004WA)."` | Accurately qualifies casting standards without falsely claiming product-level certification. | **VERIFIED (100%)** |
| **6. Containers (ISO 1496 Series-1)** | `/products-applications` | `"Manufactured and designed to comply with ISO 1496 Series-1 requirements. Stacking test load 96,012 kg per post."` | Technical compliance for 20ft GP and HC models; prevents false "ISO 1496 Certified" claims. | **VERIFIED (100%)** |
| **7. New Wagon Design Stage-I Approval** | `/innovation`, `/our-journey` | `"New Wagon Design under RDSO Stage-I approval status progressing subsequent regulatory evaluations."` | Accurately describes developmental stage; avoids overstating unconditional production clearance. | **VERIFIED (100%)** |
| **8. Operational Gati Shakti Terminal** | `/shivlakha-rail-logistics/gati-shakti-terminal` | `"30-acre operational Gati Shakti Terminal at Shivlakha, Kachchh, Gujarat with private broad-gauge railway siding, inaugurated 15 September 2026."` | Factual operational status with exact date and physical scope. | **VERIFIED (100%)** |
| **9. Inland Container Terminal Under Development** | `/shivlakha-rail-logistics/inland-container-terminal` | `"30-acre under-development Inland Container Terminal at Shivlakha; statutory approval received from CBIC on 10 September 2026."` | Establishes future customs-bonded facility; prevents premature operational claims. | **VERIFIED (100%)** |

---

## 3. Entity Disambiguation & Knowledge Graph Association

### A. Dual-Entity Relationship (Parent vs SPV)
To ensure generative AI engines do not hallucinate `KMT Engineering Private Limited` as an independent competitor or unrelated company:
- The website enforces the **Single-Sentence SPV Rule**: KMT is referenced strictly as the wholly owned project SPV executing the Shivlakha Integrated Project under Kalyani Cast Tech Limited oversight.
- All corporate identity, copyright, header, footer, and navigation markers exclusively feature `Kalyani Cast Tech Limited`.

### B. Group Disambiguation (BSE SME: 544023)
- The inclusion of BSE SME Scrip Code `544023` and Corporate Identification Number `L26990DL2012PLC242760` across headers, footers, meta descriptions, and JSON-LD Corporation schemas prevents LLMs from confusing Kalyani Cast Tech Limited with unrelated industrial groups bearing the "Kalyani" surname (e.g. Kalyani Group / Bharat Forge, Kalyani Steels).

---

## 4. Crawlability & Machine Ingestion Performance

1. **Server-Side Rendered (SSR) HTML:** TanStack Start and Nitro render the complete textual payload in initial HTTP responses. Crawlers do not depend on executing client-side JavaScript to index core entity facts.
2. **Deterministic Heading Hierarchy:** Every canonical page provides an unambiguous `<h1>` followed by structured `<h2>` and `<h3>` tags that clearly outline capabilities, certifications, and operational milestones.
3. **Structured Entity Schema:** High-density JSON-LD schemas connect page entities directly to authoritative external registries (BSE India scrip directory, official YouTube trial demonstrations).

---

## 5. Conclusion

The crawlable web content of Kalyani Cast Tech Limited provides an impeccable, factually verified, and unambiguous knowledge corpus. AI search engines and LLM crawlers can accurately summarize corporate history, manufacturing capabilities, and terminal operations without hallucinations or overclaims.
