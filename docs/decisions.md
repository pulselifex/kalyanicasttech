# Durable Architectural Decisions Ledger

## ADR-001: Progressive Disclosure Context Model
- **Date**: 30 October 2026
- **Context**: LLMs context window saturation during repository exploration.
- **Decision**: Enforce `AGENTS.md` root router (under 150 lines) with hierarchical subfolder index files instead of broad recursive file dumps.

## ADR-002: Proof of Work Sensor Verification
- **Date**: 30 October 2026
- **Context**: Need to eliminate unverified completions or hallucinated bug fixes.
- **Decision**: Require terminal execution of the verification suite (`vitest run`) with exit code 0 before any feature can be marked `completed` in `feature_list.json`.

## ADR-003: Entity Separation Architecture
- **Date**: 30 October 2026
- **Context**: Public listing and regulatory transparency requirements.
- **Decision**: Maintain strict separation between Kalyani Cast Tech Limited (Parent, BSE SME: 544023) and KMT Engineering Private Limited (Wholly Owned Subsidiary / SPV for Shivlakha GCT siding KEGS/08524078).

## ADR-004: SSR & Edge Redirect Consolidation
- **Date**: 30 October 2026
- **Context**: Prevent split indexing and legacy URL 404s.
- **Decision**: Dual-layer HTTP 301 redirects in Netlify `_redirects` and TanStack Start `beforeLoad` handlers for 11 canonical routes.

## ADR-005: Honest Form Failure & Direct Contact Fallback
- **Date**: 30 October 2026
- **Context**: v2 audit finding regarding client mock catch blocks showing simulated success on network disconnect or server errors.
- **Decision**: Form catch blocks and non-200 responses must never simulate success. Set `setSent(false)` / `setSubmitted(false)` and render explicit error state displaying verified direct corporate email (`info@kalyanicasttech.com`) and phone lines (`+91 11 28084541`, `+91 1274 256789`). Explicit `method="POST"` and `action="/api/enquiries"` must be declared on `<form>`.

## ADR-006: Statutory Certificate Integrity & Neutral Placeholder Strategy
- **Date**: 30 October 2026
- **Context**: v2 audit OCR revealed mismatched scans (`Picture1.jpg` on BIS, `7.1.jpg` on ISO 9001).
- **Decision**: Never display mismatched or expired certificate scans. Where renewed physical scans have not yet been received from the Company Secretary, display a neutral compliance notice: *"Certificate documentation is being updated. Please contact the company for current approved documentation."* Display active Lloyd's Register 2024–2027 approval scan `LR-Foundry-Approval-2024-Page-1.png` (LR2489004WA).
