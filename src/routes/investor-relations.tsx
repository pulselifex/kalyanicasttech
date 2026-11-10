import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/content/site";
import { SiteLink } from "@/components/site/SiteLink";
import { InvestorDocumentLibrary } from "@/components/site/InvestorDocumentLibrary";
import {
  TrendingUp,
  FileText,
  CalendarCheck2,
  ShieldCheck,
  CheckCircle2,
  Award,
  Clock,
} from "lucide-react";

export const Route = createFileRoute("/investor-relations")({
  head: () => pageHead("/investor-relations"),
  component: InvestorRelationsPage,
});

const financialHighlights = [
  { metric: "Total Audited Revenue", value: "~₹150 Cr", change: "Substantial Scale Expansion", note: "FY 2025-26 Performance" },
  { metric: "Net Profit (PAT)", value: "₹17.05 Cr", change: "Up +20% YoY", note: "Net Margin Expansion" },
  { metric: "Return on Capital Employed", value: "~30.1% ROCE", change: "Audited Financial Baseline", note: "Asset Turn & Capital Productivity" },
  { metric: "14th Annual General Meeting", value: "30 Sept 2026", change: "Successfully Concluded", note: "Unanimous Shareholder Resolutions" },
];

const materialDisclosures = [
  {
    date: "26 October 2026",
    title: "RDSO Stage-I Approval for New Wagon Design",
    reg: "Regulation 30 (LODR)",
    authority: "RDSO, Ministry of Railways",
    desc: "New Wagon Design has received RDSO Stage-I approval from Research Designs and Standards Organisation (RDSO, Ministry of Railways) on 26 October 2026 and is progressing through subsequent levels of approval.",
    status: "🟢 Stage-I Approval Received",
  },
  {
    date: "30 September 2026",
    title: "Proceedings and Voting Results of the 14th Annual General Meeting (AGM)",
    reg: "Regulation 30 & 44 (LODR)",
    authority: "BSE Limited / MCA",
    desc: "Successfully concluded the 14th AGM of the Company with unanimous approval across all statutory agenda items, adoption of FY25-26 audited accounts, and director re-appointments.",
    status: "🟢 AGM Concluded & Filed",
  },
  {
    date: "15 September 2026",
    title: "Official Commercial Rake Inauguration at Shivlakha Gati Shakti Terminal by Railway Minister",
    reg: "Regulation 30 (LODR)",
    authority: "Ministry of Railways / Western Railway",
    desc: "First commercial freight train rake officially inaugurated and flagged off by Hon'ble Minister of Railways Shri Ashwini Vaishnaw at the broad-gauge siding at the Gati Shakti Terminal, Shivlakha.",
    status: "🟢 Operational Commissioning",
  },
  {
    date: "10 September 2026",
    title: "CBIC Approval for 30-Acre Inland Container Terminal",
    reg: "Regulation 30 (LODR)",
    authority: "CBIC, Ministry of Finance",
    desc: "Received formal approval from the Central Board of Indirect Taxes and Customs (CBIC) following Inter-Ministerial Committee (IMC) review on 25 August 2026 to set up an Inland Container Terminal at Shivlakha. Target operational Q1 FY 2027-28 on NA-approved layout (30-acre terminal footprint within the 150-acre platform).",
    status: "🟡 CBIC Approval Granted · Under Development",
  },
  {
    date: "10 September 2026",
    title: "BSE In-Principle Approval for Preferential Issue of Convertible Warrants",
    reg: "Regulation 28 & 30 (LODR)",
    authority: "BSE Limited",
    desc: "Received formal in-principle approval from BSE Limited for the proposed preferential issue and allotment of convertible warrants to fund ongoing manufacturing and terminal expansion at Shivlakha.",
    status: "🟢 In-Principle Approval Granted",
  },
];

const corporateDetails = [
  { item: "Company Name", detail: "Kalyani Cast Tech Limited (formerly Kalyani Cast Tech Private Limited)" },
  { item: "Corporate Identification Number (CIN)", detail: "L26990DL2012PLC242760" },
  { item: "Stock Exchange Listing", detail: "BSE SME Platform" },
  { item: "BSE SME Scrip Code", detail: "544023" },
  { item: "ISIN", detail: "INE0N6U01018" },
  {
    item: "Registered Office",
    detail: "B-144, Second Floor, DDA Shed, Phase-1, Okhla Industrial Area Phase-1, New Delhi, South Delhi, Delhi – 110020, India",
  },
  { item: "Telephone", detail: "+91-9650891119 / +91-8076389093" },
  { item: "Official Corporate Email", detail: "info@kalyanicasttech.com" },
  { item: "Statutory Auditors", detail: "M/s Goel Mintri & Associates, Chartered Accountants" },
  { item: "Secretarial Auditors", detail: "M/s Ankur Singh & Associates, Practising Company Secretaries" },
];

const investorContacts = [
  {
    channel: "Company Secretary & Compliance Officer",
    contactPerson: "Mr. Pankaj Kumar",
    address: "PT-62/9, Ground Floor, Kalkaji Extension, New Delhi – 110019, India",
    telephone: "+91-9711735302 / +91-8816984205",
    email: "cs@kalyanicasttech.com",
    notes: "Direct statutory contact for investor grievances, shareholder queries, and compliance filings.",
  },
  {
    channel: "Registrar and Share Transfer Agent (RTA)",
    contactPerson: "Bigshare Services Pvt. Ltd. (SEBI Reg: INR000001385)",
    address: "Office No. S6-2, 6th Floor, Pinnacle Business Park, Next to Ahura Centre, Mahakali Caves Road, Andheri (East), Mumbai – 400093, Maharashtra, India",
    telephone: "+91-22-6263-8200",
    email: "info@bigshareonline.com",
    notes: "Handles share transfers, transmissions, dematerialisation (Demat), change of address, and dividend mandates (www.bigshareonline.com).",
  },
  {
    channel: "SEBI SCORES Portal",
    contactPerson: "Securities and Exchange Board of India (SEBI)",
    address: "Online Grievance Redressal System",
    telephone: "Toll Free: 1800 266 7575 / 1800 22 7575",
    email: "scores@sebi.gov.in",
    notes: "Centralized web-based investor grievance redressal portal (https://scores.gov.in).",
  },
];

const committees = [
  {
    id: "1",
    name: "Audit Committee",
    chairperson: "Mr. Sanjeev Negi (Independent Director)",
    members: "Mr. Kumar Sharat Chandra (Independent Director) · Mr. Naresh Kumar (Managing Director)",
    mandate: "Oversees financial reporting process, internal controls, statutory and internal audit processes, and auditor independence per Section 177 of Companies Act, 2013 and SEBI LODR.",
  },
  {
    id: "2",
    name: "Stakeholders Relationship Committee",
    chairperson: "Mr. Kumar Sharat Chandra (Independent Director)",
    members: "Mr. Sanjeev Negi (Independent Director) · Mrs. Jayashree Kumar (Whole-Time Director)",
    mandate: "Considers and resolves grievances of security holders, oversees transfer/transmission of shares, non-receipt of annual reports, and stakeholder engagement.",
  },
  {
    id: "3",
    name: "Nomination & Remuneration Committee",
    chairperson: "Mr. Sanjeev Negi (Independent Director)",
    members: "Mr. Kumar Sharat Chandra (Independent Director) · Mr. Devender Kumar Yadav (Non-Executive Director)",
    mandate: "Identifies persons qualified to become directors and recommended for key managerial personnel appointments; formulates criteria for evaluation and remuneration policies.",
  },
  {
    id: "4",
    name: "Corporate Social Responsibility (CSR) Committee",
    chairperson: "Mr. Sanjeev Negi (Independent Director)",
    members: "Mr. Naresh Kumar (Managing Director) · Mrs. Jayashree Kumar (Whole-Time Director)",
    mandate: "Formulates and recommends the CSR policy, monitors implementation of approved CSR projects, and ensures adherence to Schedule VII of the Companies Act, 2013.",
  },
  {
    id: "5",
    name: "Internal Complaints Committee (POSH)",
    chairperson: "Mrs. Jayashree Kumar (Whole-Time Director)",
    members: "Mrs. Sangita Sinha (External Member) · Mr. Devender Kumar Yadav (Non-Executive Director) · Mr. Amit Kumar (Chief Financial Officer)",
    mandate: "Prevention, prohibition and redressal of workplace sexual harassment under the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.",
  },
];

const filingCategories = [
  {
    num: "1",
    name: "Financial Results",
    docs: "Audited financial results for FY 2023-24, FY 2024-25, FY 2025-26, half-yearly limited review reports, and Statutory Auditors' reports.",
    route: "/investors/financial-information",
  },
  {
    num: "2",
    name: "Annual Reports & Returns",
    docs: "12th AGM annual report, 13th AGM annual report, FY 2025-26 annual report, Directors' reports, and statutory Form MGT-7 annual returns.",
    route: "/investors/financial-information",
  },
  {
    num: "3",
    name: "Board Meetings & Publications",
    docs: "Prior intimations under Regulation 29, outcomes of board meetings under Regulation 30, and statutory newspaper publication notices.",
    route: "/investors/meetings-presentations",
  },
  {
    num: "4",
    name: "Shareholding & Capital Audit",
    docs: "Quarterly shareholding patterns under Regulation 31, Regulation 76 reconciliation of share capital audit reports, and Regulation 74(5) DP certificates.",
    route: "/investors/shareholder-information",
  },
  {
    num: "5",
    name: "Meetings & Corporate Actions",
    docs: "AGM notices, remote e-voting scrutinizer reports, voting results under Regulation 44, postal ballots, and preferential allotment filings.",
    route: "/investors/ipo-corporate-actions",
  },
  {
    num: "6",
    name: "Investor Meets & Presentations",
    docs: "Corporate presentations to institutional investors, earnings call audio recordings, transcripts, and quarterly investor grievance reports.",
    route: "/investors/meetings-presentations",
  },
  {
    num: "7",
    name: "Offer Documents & Corporate Charter",
    docs: "Draft Red Herring Prospectus (DRHP), Red Herring Prospectus (RHP), final Prospectus for BSE SME listing, and Articles of Association (AOA) & MOA.",
    route: "/investors/ipo-corporate-actions",
  },
  {
    num: "8",
    name: "Governance Policies",
    docs: "19 statutory governance policies adopted by the Board of Directors under Companies Act, 2013 and SEBI (LODR) Regulations, 2015.",
    route: "/investors/corporate-governance",
  },
];

const governancePolicies = [
  { id: 1, title: "Code of Conduct for Directors and Senior Management", basis: "SEBI (LODR) Reg. 17(5) & Companies Act, 2013" },
  { id: 2, title: "Code of Conduct for Prevention of Insider Trading (PIT)", basis: "SEBI (Prohibition of Insider Trading) Reg. 2015" },
  { id: 3, title: "Policy on Determination of Materiality for Disclosure of Events", basis: "SEBI (LODR) Regulation 30" },
  { id: 4, title: "Policy on Materiality of Related Party Transactions & Dealing with RPTs", basis: "SEBI (LODR) Regulation 23 & Companies Act Sec. 188" },
  { id: 5, title: "Whistle Blower Policy and Vigil Mechanism", basis: "Companies Act Sec. 177(9) & SEBI (LODR) Reg. 22" },
  { id: 6, title: "Nomination and Remuneration Policy for Directors and KMP", basis: "Companies Act Sec. 178 & SEBI (LODR) Reg. 19" },
  { id: 7, title: "Corporate Social Responsibility (CSR) Policy", basis: "Companies Act, 2013 Sec. 135 & Schedule VII" },
  { id: 8, title: "Policy on Preservation of Documents and Archival Policy", basis: "SEBI (LODR) Regulation 9 & Regulation 30(8)" },
  { id: 9, title: "Policy for Determining Material Subsidiaries", basis: "SEBI (LODR) Regulation 16(1)(c)" },
  { id: 10, title: "Board Diversity Policy", basis: "SEBI (LODR) Regulation 19(4) & Part D of Schedule II" },
  { id: 11, title: "Familiarisation Programme for Independent Directors", basis: "SEBI (LODR) Regulation 25(7) & 46(2)" },
  { id: 12, title: "Terms and Conditions of Appointment of Independent Directors", basis: "Companies Act Schedule IV & SEBI (LODR) Reg. 46(2)" },
  { id: 13, title: "Criteria for Making Payments to Non-Executive Directors", basis: "SEBI (LODR) Regulation 46(2)" },
  { id: 14, title: "Internal Complaints Committee (POSH) Charter", basis: "POSH Act, 2013 & Rules" },
  { id: 15, title: "Dividend Distribution Policy", basis: "SEBI (LODR) Regulation 43A" },
  { id: 16, title: "Risk Management Policy & Assessment Framework", basis: "Companies Act Sec. 134(3)(n) & SEBI (LODR) Reg. 21" },
  { id: 17, title: "Policy on Identification of Material Litigation and Outstanding Dues", basis: "SEBI (ICDR) Regulations, 2018" },
  { id: 18, title: "Code of Practices and Procedures for Fair Disclosure of UPSI", basis: "SEBI (Prohibition of Insider Trading) Reg. 8(1)" },
  { id: 19, title: "Investor Grievance Redressal Mechanism Policy", basis: "SEBI (LODR) Regulation 13 & Regulation 46" },
];

export function InvestorRelationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header Bar */}
      <header className="border-b border-border bg-muted/40 py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-4 text-xs font-mono text-muted-foreground">
            <SiteLink to="/" className="hover:text-foreground">Home</SiteLink>
            <span className="mx-1.5">/</span>
            <span className="text-foreground">Investor Relations</span>
          </nav>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono font-medium text-muted-foreground">
                <span>BSE SME: <strong className="text-foreground">544023</strong></span>
                <span>&middot;</span>
                <span>CIN: <strong className="text-foreground">L26990DL2012PLC242760</strong></span>
                <span>&middot;</span>
                <span>ISIN: <strong className="text-foreground">INE0N6U01018</strong></span>
              </div>
              <p className="mt-3 text-xs font-mono font-bold uppercase tracking-wider text-primary">
                Investor Relations &amp; Statutory Governance
              </p>
              <h1 className="mt-1 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                Listed. Disclosed. Audited.
              </h1>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
                Official financial documents, stock-exchange disclosures, corporate governance policies, committee charters, and statutory shareholder contacts for Kalyani Cast Tech Limited.
              </p>
            </div>

            {/* Right Column: Clean Corporate / Financial Identity Visual */}
            <div className="lg:col-span-4 hidden sm:block">
              <div className="relative overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                  <img
                    src="/assets/manufacturing/manufacturing-container-mig-welding-01.jpg"
                    alt="Kalyani Cast Tech manufacturing facility and heavy industrial asset base"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90">
                    <span className="font-semibold">BSE SME: 544023</span>
                    <span className="text-white/70">Rewari Works Asset Base</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
        {/* Key Audited Financial Highlights (FY25-26) */}
        <section aria-labelledby="financial-highlights-heading">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-border pb-3">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                Audited Performance &amp; Shareholder Value
              </span>
              <h2 id="financial-highlights-heading" className="mt-1 font-display text-2xl font-bold text-foreground">
                FY 2025-26 Audited Financial Highlights
              </h2>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 font-mono text-xs font-bold text-emerald-800 border border-emerald-300">
              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
              14th AGM Concluded (30 Sept 2026)
            </span>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {financialHighlights.map((fh, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-xl border border-border bg-card p-5 shadow-xs transition-all hover:border-primary"
              >
                <div>
                  <span className="font-mono text-sm font-semibold text-muted-foreground">{fh.metric}</span>
                  <div className="mt-2 font-display text-2xl font-extrabold text-foreground">{fh.value}</div>
                </div>
                <div className="mt-4 border-t border-border/60 pt-3 flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {fh.change}
                  </span>
                  <span className="text-xs text-muted-foreground font-mono">{fh.note}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 1: Corporate and Listing Details */}
        <section aria-labelledby="corporate-details-heading">
          <div className="border-b border-border pb-2">
            <h2 id="corporate-details-heading" className="font-display text-xl sm:text-2xl font-bold text-foreground">
              Corporate &amp; Listing Details
            </h2>
            <p className="text-sm text-muted-foreground">
              Authoritative identification records and corporate establishment data registered with the Ministry of Corporate Affairs and BSE.
            </p>
          </div>
          <div className="mt-4 overflow-x-auto border border-border">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <thead className="border-b border-border bg-muted/60 text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th scope="col" className="w-1/3 border-r border-border p-3">Statutory Item</th>
                  <th scope="col" className="p-3">Official Detail</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {corporateDetails.map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <th scope="row" className="border-r border-border p-3 font-medium text-foreground">
                      {row.item}
                    </th>
                    <td className="p-3 font-mono text-muted-foreground">
                      {row.detail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 2: Investor Grievance & Shareholder Contacts */}
        <section aria-labelledby="investor-grievance-heading">
          <div className="border-b border-border pb-2">
            <h2 id="investor-grievance-heading" className="font-display text-xl sm:text-2xl font-bold text-foreground">
              Investor Grievance &amp; Registrar Desk
            </h2>
            <p className="text-sm text-muted-foreground">
              Statutory contact channels for shareholder services, grievance resolution, and regulatory oversight.
            </p>
          </div>

          <div className="mt-4 overflow-x-auto border border-border">
            <table className="w-full border-collapse text-left text-xs sm:text-sm">
              <thead className="border-b border-border bg-muted/60 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th scope="col" className="border-r border-border p-3">Channel / Entity</th>
                  <th scope="col" className="border-r border-border p-3">Designated Contact</th>
                  <th scope="col" className="border-r border-border p-3">Address &amp; Telephone</th>
                  <th scope="col" className="border-r border-border p-3">Email</th>
                  <th scope="col" className="p-3">Mandate &amp; Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {investorContacts.map((c, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="border-r border-border p-3 font-semibold text-foreground">
                      {c.channel}
                    </td>
                    <td className="border-r border-border p-3 font-medium text-foreground">
                      {c.contactPerson}
                    </td>
                    <td className="border-r border-border p-3 text-muted-foreground">
                      <div>{c.address}</div>
                      <div className="mt-1 font-mono font-semibold text-foreground">{c.telephone}</div>
                    </td>
                    <td className="border-r border-border p-3 font-mono">
                      <a href={`mailto:${c.email}`} className="text-primary underline hover:text-primary/80">
                        {c.email}
                      </a>
                    </td>
                    <td className="p-3 text-muted-foreground">
                      {c.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 3: Statutory Board Committees */}
        <section id="committees" aria-labelledby="committees-heading" className="scroll-mt-24">
          <div className="border-b border-border pb-2">
            <div className="text-xs font-mono uppercase tracking-wider text-primary">Board Governance</div>
            <h2 id="committees-heading" className="font-display text-xl sm:text-2xl font-bold text-foreground">
              Statutory Board Committees
            </h2>
            <p className="text-sm text-muted-foreground">
              Committees constituted under the Companies Act, 2013 and SEBI (Listing Obligations and Disclosure Requirements) Regulations, 2015.
            </p>
          </div>

          <div className="mt-4 overflow-x-auto border border-border">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <thead className="border-b border-border bg-muted/60 text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th scope="col" className="w-12 border-r border-border p-3 text-center">#</th>
                  <th scope="col" className="w-1/5 border-r border-border p-3">Committee</th>
                  <th scope="col" className="w-1/4 border-r border-border p-3">Chairperson</th>
                  <th scope="col" className="w-1/4 border-r border-border p-3">Members</th>
                  <th scope="col" className="p-3">Statutory Mandate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {committees.map((row) => (
                  <tr key={row.id} className="hover:bg-muted/30">
                    <td className="border-r border-border p-3 text-center font-mono text-muted-foreground">
                      {row.id}
                    </td>
                    <td className="border-r border-border p-3 font-semibold text-foreground">
                      {row.name}
                    </td>
                    <td className="border-r border-border p-3 font-medium text-foreground">
                      {row.chairperson}
                    </td>
                    <td className="border-r border-border p-3 text-muted-foreground">
                      {row.members}
                    </td>
                    <td className="p-3 text-muted-foreground leading-relaxed">
                      {row.mandate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 4: Regulation 46 SEBI LODR Filing Directory */}
        <section id="filings-register" aria-labelledby="filings-heading" className="scroll-mt-24">
          <div className="border-b border-border pb-2">
            <div className="text-xs font-mono uppercase tracking-wider text-primary">SEBI LODR Filings</div>
            <h2 id="filings-heading" className="font-display text-xl sm:text-2xl font-bold text-foreground">
              SEBI LODR Filings
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Corporate disclosures and statutory filings published for investors and shareholders.
            </p>
          </div>

          <div className="mt-4 overflow-x-auto border border-border">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <thead className="border-b border-border bg-muted/60 text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th scope="col" className="w-12 border-r border-border p-3 text-center">Cat #</th>
                  <th scope="col" className="w-1/4 border-r border-border p-3">Disclosure Category</th>
                  <th scope="col" className="border-r border-border p-3">Scope &amp; Included Documents</th>
                  <th scope="col" className="w-44 p-3 text-right">Statutory Section</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {filingCategories.map((cat) => (
                  <tr key={cat.num} className="hover:bg-muted/30">
                    <td className="border-r border-border p-3 text-center font-mono font-bold text-primary">
                      0{cat.num}
                    </td>
                    <td className="border-r border-border p-3 font-semibold text-foreground">
                      {cat.name}
                    </td>
                    <td className="border-r border-border p-3 text-muted-foreground leading-relaxed">
                      {cat.docs}
                    </td>
                    <td className="p-3 text-right">
                      <SiteLink
                        to={cat.route}
                        className="inline-block border border-border bg-muted/40 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary hover:bg-primary hover:text-primary-foreground"
                      >
                        Access Documents &rarr;
                      </SiteLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section: Public Document Centre (Approved Document Library) */}
        <InvestorDocumentLibrary className="pt-2" />

        {/* Section: Material Regulatory & Corporate Disclosures (Regulation 30 LODR) */}
        <section id="regulation-30" aria-labelledby="material-disclosures-heading" className="scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 border-b border-border pb-2">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-primary">SEBI LODR Regulation 30</div>
              <h2 id="material-disclosures-heading" className="font-display text-xl sm:text-2xl font-bold text-foreground">
                Recent Material Corporate &amp; Regulatory Disclosures
              </h2>
              <p className="text-sm text-muted-foreground">
                Authoritative event-based and price-sensitive disclosures notified to BSE Limited under Regulation 30 of SEBI (LODR) Regulations, 2015.
              </p>
            </div>
            <SiteLink
              to="/investors/stock-exchange-disclosures"
              className="text-sm font-semibold text-primary hover:underline shrink-0"
            >
              All BSE Disclosures &rarr;
            </SiteLink>
          </div>

          <div className="mt-4 overflow-x-auto border border-border">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <thead className="border-b border-border bg-muted/60 text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th scope="col" className="w-28 border-r border-border p-3">Date</th>
                  <th scope="col" className="w-1/4 border-r border-border p-3">Disclosure Title &amp; Regulation</th>
                  <th scope="col" className="border-r border-border p-3">Regulatory Authority &amp; Scope Summary</th>
                  <th scope="col" className="w-36 p-3 text-right">Statutory Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {materialDisclosures.map((d, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                    <td className="border-r border-border p-3 font-mono font-bold text-primary whitespace-nowrap text-sm">
                      {d.date}
                    </td>
                    <td className="border-r border-border p-3">
                      <div className="font-bold text-foreground leading-snug">{d.title}</div>
                      <span className="mt-1 inline-block font-mono text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">
                        {d.reg}
                      </span>
                    </td>
                    <td className="border-r border-border p-3 text-muted-foreground leading-relaxed text-sm">
                      <div className="font-mono text-xs font-semibold text-foreground mb-1">{d.authority}</div>
                      {d.desc}
                    </td>
                    <td className="p-3 text-right">
                      <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-300 inline-block whitespace-nowrap">
                        {d.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Section 5: 19 Governance Policies Register */}
        <section aria-labelledby="policies-heading">
          <div className="border-b border-border pb-2">
            <div className="text-xs font-mono uppercase tracking-wider text-primary">Governance Register</div>
            <h2 id="policies-heading" className="font-display text-xl sm:text-2xl font-bold text-foreground">
              19 Governance Policies &amp; Statutory Codes Register
            </h2>
            <p className="text-sm text-muted-foreground">
              Policies approved and adopted by the Board of Directors of Kalyani Cast Tech Limited in compliance with statutory requirements.
            </p>
          </div>

          <div className="mt-4 overflow-x-auto border border-border">
            <table className="w-full border-collapse text-left text-sm sm:text-base">
              <thead className="border-b border-border bg-muted/60 text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th scope="col" className="w-12 border-r border-border p-3 text-center">#</th>
                  <th scope="col" className="border-r border-border p-3">Policy / Statutory Code Title</th>
                  <th scope="col" className="w-1/3 border-r border-border p-3">Statutory Basis / Regulatory Authority</th>
                  <th scope="col" className="w-40 p-3 text-right">Repository</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {governancePolicies.map((p) => (
                  <tr key={p.id} className="hover:bg-muted/30">
                    <td className="border-r border-border p-3 text-center font-mono text-muted-foreground">
                      {p.id}
                    </td>
                    <td className="border-r border-border p-3 font-medium text-foreground">
                      {p.title}
                    </td>
                    <td className="border-r border-border p-3 font-mono text-xs text-muted-foreground">
                      {p.basis}
                    </td>
                    <td className="p-3 text-right">
                      <SiteLink
                        to="/investors/corporate-governance"
                        className="text-xs font-semibold text-primary hover:underline"
                      >
                        View Policy &rarr;
                      </SiteLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-4">
            <SiteLink
              to="/investors/corporate-governance"
              className="border border-border bg-muted/40 px-4 py-2 text-xs font-medium text-foreground hover:bg-muted"
            >
              Browse All Signed Governance Policies &rarr;
            </SiteLink>
            <SiteLink
              to="/investors/stock-exchange-disclosures"
              className="border border-border bg-muted/40 px-4 py-2 text-xs font-medium text-foreground hover:bg-muted"
            >
              View Authoritative BSE SME Stock Exchange Disclosures &rarr;
            </SiteLink>
          </div>
        </section>
      </div>
    </div>
  );
}
