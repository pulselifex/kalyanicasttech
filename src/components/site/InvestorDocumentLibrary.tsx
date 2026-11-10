import { useState, useMemo } from "react";
import {
  FileText,
  Download,
  ExternalLink,
  Search,
  Filter,
  CheckCircle2,
  Calendar,
  Layers,
  Shield,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export interface InvestorDoc {
  id: string;
  title: string;
  category: "Annual Statements" | "Code of Conduct" | "DRHP & Prospectus" | "Corporate & Statutory";
  period: string;
  date: string;
  fy: string;
  format: string;
  size: string;
  url: string;
  desc?: string;
  officialDoc: boolean;
}

export const APPROVED_INVESTOR_DOCS: InvestorDoc[] = [
  // A. Annual Statements / Financial Results
  {
    id: "fin-2025-09",
    title: "Unaudited Financial Results with Limited Review Report (Half-Year ended 30.09.2025)",
    category: "Annual Statements",
    period: "Half-Year ended 30 September 2025",
    date: "10 November 2025",
    fy: "FY 2025-26",
    format: "PDF",
    size: "18.03 MB",
    url: "/documents/investors/annual-statements/Financial-Results_30.09.2025.pdf",
    desc: "Standalone and Consolidated unaudited financial results under Regulation 33 of SEBI (LODR) Regulations, 2015 with Limited Review Report by M/s Goel Mintri & Associates.",
    officialDoc: true,
  },
  {
    id: "fin-2025-03",
    title: "Audited Financial Results & Future Expansion Overview (Year ended 31.03.2025)",
    category: "Annual Statements",
    period: "Financial Year ended 31 March 2025",
    date: "29 May 2025",
    fy: "FY 2024-25",
    format: "PDF",
    size: "2.00 MB",
    url: "/documents/investors/annual-statements/Financial-Results_31.03.2025.pdf",
    desc: "Audited Standalone and Consolidated financial statements, Management Overview & Future Expansion Plan by Managing Director, and Independent Auditor's Report.",
    officialDoc: true,
  },
  {
    id: "fin-2024-09",
    title: "Unaudited Financial Results with Limited Review Report (Half-Year ended 30.09.2024)",
    category: "Annual Statements",
    period: "Half-Year ended 30 September 2024",
    date: "14 November 2024",
    fy: "FY 2024-25",
    format: "PDF",
    size: "8.66 MB",
    url: "/documents/investors/annual-statements/Financial-Results_30.09.2024.pdf",
    desc: "Standalone and Consolidated unaudited financial results under Regulation 33 of SEBI (LODR) Regulations, 2015 with Limited Review Report.",
    officialDoc: true,
  },
  {
    id: "fin-2023-09",
    title: "Unaudited Financial Results with Limited Review Report (Half-Year ended 30.09.2023)",
    category: "Annual Statements",
    period: "Half-Year ended 30 September 2023",
    date: "25 December 2023",
    fy: "FY 2023-24",
    format: "PDF",
    size: "1.34 MB",
    url: "/documents/investors/annual-statements/Financial-Results_30.09.2023.pdf",
    desc: "Standalone unaudited financial results under Regulation 33 of SEBI (LODR) Regulations, 2015 with Limited Review Report.",
    officialDoc: true,
  },
  {
    id: "ar-14-agm",
    title: "14th Annual General Meeting Report & Audited Accounts (FY 2025-26)",
    category: "Annual Statements",
    period: "FY 2025-26",
    date: "30 September 2026",
    fy: "FY 2025-26",
    format: "PDF",
    size: "1.20 MB",
    url: "/documents/investors/Annual-Report_FY_2025-26.pdf",
    desc: "Comprehensive 14th AGM statutory report, Directors' report, and audited financial statements adopted at AGM.",
    officialDoc: true,
  },
  {
    id: "ar-13-agm",
    title: "13th Annual General Meeting Annual Report (FY 2024-25)",
    category: "Annual Statements",
    period: "FY 2024-25",
    date: "30 September 2025",
    fy: "FY 2024-25",
    format: "PDF",
    size: "1.15 MB",
    url: "/documents/investors/13th-Annual-Report_FY-2024-2025.pdf",
    desc: "13th AGM notice, Directors' report, corporate governance report, and audited accounts.",
    officialDoc: true,
  },
  {
    id: "ar-12-agm",
    title: "12th Annual General Meeting Annual Report (FY 2023-24)",
    category: "Annual Statements",
    period: "FY 2023-24",
    date: "30 September 2024",
    fy: "FY 2023-24",
    format: "PDF",
    size: "1.10 MB",
    url: "/documents/investors/12th-Annual-Report_FY-2023-2024.pdf",
    desc: "12th AGM annual report and audited balance sheet for FY 2023-24.",
    officialDoc: true,
  },

  // B. Code of Conduct & Board Policies (11 signed policies from A to K)
  {
    id: "coc-a",
    title: "Code of Conduct for Directors and Senior Officials",
    category: "Code of Conduct",
    period: "Board Governance",
    date: "17 October 2022",
    fy: "Governance",
    format: "PDF",
    size: "1.05 MB",
    url: "/documents/investors/code-of-conduct/A.-Code-of-Conduct-for-Directors-and-Senior-Officials.pdf",
    desc: "Approved Code of Conduct establishing ethical standards, legal compliance, and fiduciary obligations for Board members and Senior Management.",
    officialDoc: true,
  },
  {
    id: "coc-b",
    title: "Board of Directors Policies & Governance Guidelines",
    category: "Code of Conduct",
    period: "Board Governance",
    date: "17 October 2022",
    fy: "Governance",
    format: "PDF",
    size: "996 KB",
    url: "/documents/investors/code-of-conduct/B.-Board-of-Directors-Policies.pdf",
    desc: "Comprehensive guidelines governing board composition, independence criteria, meetings procedure, and board oversight duties.",
    officialDoc: true,
  },
  {
    id: "coc-c",
    title: "Code of Practices & Procedures for Fair Disclosure of UPSI",
    category: "Code of Conduct",
    period: "SEBI (PIT) Regulations",
    date: "17 October 2022",
    fy: "Governance",
    format: "PDF",
    size: "912 KB",
    url: "/documents/investors/code-of-conduct/C.-Code-of-Practices-and-Procedures-for-Fair-Disclosure-of-UPSI.pdf",
    desc: "Code formulated under Regulation 8(1) of SEBI (Prohibition of Insider Trading) Regulations, 2015 for prompt and fair public disclosure of UPSI.",
    officialDoc: true,
  },
  {
    id: "coc-d",
    title: "Policy on Whistle Blower and Vigil Mechanism",
    category: "Code of Conduct",
    period: "Section 177 Companies Act",
    date: "17 October 2022",
    fy: "Governance",
    format: "PDF",
    size: "1.02 MB",
    url: "/documents/investors/code-of-conduct/D.-Policy-on-Whistle-Blower-and-Vigil-Mechanism.pdf",
    desc: "Statutory vigil mechanism for directors and employees to report genuine concerns about unethical behaviour, actual or suspected fraud.",
    officialDoc: true,
  },
  {
    id: "coc-e",
    title: "Policy on Materiality of Related Party Transactions & Dealing with RPTs",
    category: "Code of Conduct",
    period: "Regulation 23 SEBI LODR",
    date: "17 October 2022",
    fy: "Governance",
    format: "PDF",
    size: "1.13 MB",
    url: "/documents/investors/code-of-conduct/E.-Policy-on-RPTrelated-party-transaction.pdf",
    desc: "Policy regulating transactions between the Company and its related parties based on Companies Act, 2013 and SEBI LODR rules.",
    officialDoc: true,
  },
  {
    id: "coc-f",
    title: "Policy on Preservation of Documents and Archival Policy",
    category: "Code of Conduct",
    period: "Regulation 9 & 30(8) LODR",
    date: "17 October 2022",
    fy: "Governance",
    format: "PDF",
    size: "1.06 MB",
    url: "/documents/investors/code-of-conduct/F.-Policy-On-Preservation-of-Documents.pdf",
    desc: "Classification of corporate documents into permanent preservation and documents to be maintained for not less than 8 years.",
    officialDoc: true,
  },
  {
    id: "coc-g",
    title: "Anti-Sexual Harassment Policy (POSH Workplace Guidelines)",
    category: "Code of Conduct",
    period: "POSH Act, 2013",
    date: "17 October 2022",
    fy: "Governance",
    format: "PDF",
    size: "1.27 MB",
    url: "/documents/investors/code-of-conduct/G.-Anti-Sexual-Harassment-Policy.pdf",
    desc: "Prevention, prohibition and redressal of sexual harassment of women at the workplace under the Sexual Harassment of Women at Workplace Act.",
    officialDoc: true,
  },
  {
    id: "coc-h",
    title: "Policy on Determination of Materiality for Disclosure of Events",
    category: "Code of Conduct",
    period: "Regulation 30 SEBI LODR",
    date: "17 October 2022",
    fy: "Governance",
    format: "PDF",
    size: "1.13 MB",
    url: "/documents/investors/code-of-conduct/H.-Policy-On-Determining-Materiality.pdf",
    desc: "Criteria for determining materiality of events or information to ensure timely and adequate disclosure to BSE SME.",
    officialDoc: true,
  },
  {
    id: "coc-i",
    title: "Code for Independent Directors",
    category: "Code of Conduct",
    period: "Schedule IV Companies Act",
    date: "17 October 2022",
    fy: "Governance",
    format: "PDF",
    size: "952 KB",
    url: "/documents/investors/code-of-conduct/I.-Code-For-Independent-Directors.pdf",
    desc: "Professional conduct guidelines and role expectations for Independent Directors pursuant to Section 149(8) and Schedule IV of Companies Act, 2013.",
    officialDoc: true,
  },
  {
    id: "coc-j",
    title: "Policy on Familiarisation Programme for Independent Directors",
    category: "Code of Conduct",
    period: "Regulation 25(7) LODR",
    date: "17 October 2022",
    fy: "Governance",
    format: "PDF",
    size: "623 KB",
    url: "/documents/investors/code-of-conduct/J.-Policy-On-Familiarisation-of-Independent-Directors.pdf",
    desc: "Programme to familiarise Independent Directors with the Company, manufacturing operations, rail logistics industry, and their roles/responsibilities.",
    officialDoc: true,
  },
  {
    id: "coc-k",
    title: "Corporate Social Responsibility (CSR) Policy",
    category: "Code of Conduct",
    period: "Section 135 Companies Act",
    date: "14 July 2023",
    fy: "Governance",
    format: "PDF",
    size: "1.10 MB",
    url: "/documents/investors/code-of-conduct/K.-CSR-policy.pdf",
    desc: "CSR policy and allocation framework under Section 135 and Schedule VII of Companies Act, 2013.",
    officialDoc: true,
  },

  // C. DRHP & Prospectus
  {
    id: "drhp",
    title: "Draft Red Herring Prospectus (DRHP) — BSE SME Initial Public Offering",
    category: "DRHP & Prospectus",
    period: "BSE SME IPO",
    date: "2023",
    fy: "Offer Documents",
    format: "PDF",
    size: "4.95 MB",
    url: "/documents/investors/drhp-prospectus/DRHP_Kalyani.pdf",
    desc: "Draft Red Herring Prospectus filed with BSE Limited for the initial public offer of equity shares on the BSE SME platform.",
    officialDoc: true,
  },
  {
    id: "rhp",
    title: "Red Herring Prospectus (RHP) — BSE SME Initial Public Offering",
    category: "DRHP & Prospectus",
    period: "BSE SME IPO",
    date: "2023",
    fy: "Offer Documents",
    format: "PDF",
    size: "6.56 MB",
    url: "/documents/investors/drhp-prospectus/RHP_Kalyani.pdf",
    desc: "Red Herring Prospectus filed with the Registrar of Companies (ROC), Delhi and Haryana and BSE Limited.",
    officialDoc: true,
  },
  {
    id: "prospectus",
    title: "Final Prospectus — Initial Public Offering of Equity Shares (Scrip: 544023)",
    category: "DRHP & Prospectus",
    period: "BSE SME Listing",
    date: "November 2023",
    fy: "Offer Documents",
    format: "PDF",
    size: "6.57 MB",
    url: "/documents/investors/drhp-prospectus/Prospectus_Kalyani.pdf",
    desc: "Official Final Prospectus registered under Section 26 of Companies Act, 2013 and SEBI (ICDR) Regulations, 2018 for listing on BSE SME.",
    officialDoc: true,
  },
  {
    id: "policy-insider",
    title: "Code of Conduct for Regulating, Monitoring & Reporting of Trading by Insiders",
    category: "DRHP & Prospectus",
    period: "SEBI (PIT) Regulations",
    date: "2023",
    fy: "Governance",
    format: "PDF",
    size: "402 KB",
    url: "/documents/investors/drhp-prospectus/Policy-for-Insider-Trading.pdf",
    desc: "Statutory insider trading code adopted in connection with BSE SME public listing.",
    officialDoc: true,
  },
  {
    id: "material-events",
    title: "Policy for Determination of Materiality & Disclosure to Stock Exchanges",
    category: "DRHP & Prospectus",
    period: "Regulation 30 LODR",
    date: "2023",
    fy: "Governance",
    format: "PDF",
    size: "147 KB",
    url: "/documents/investors/drhp-prospectus/Determination-of-Material-events.pdf",
    desc: "Policy outlining materiality thresholds and disclosure timelines to BSE Limited.",
    officialDoc: true,
  },

  // D. Corporate & Statutory Disclosures
  {
    id: "aoa",
    title: "Revised Articles of Association (AOA) & MOA of Kalyani Cast Tech Limited",
    category: "Corporate & Statutory",
    period: "Corporate Charter",
    date: "Corporate Charter",
    fy: "Corporate",
    format: "PDF",
    size: "1.25 MB",
    url: "/documents/investors/corporate/Revised-AOA.pdf",
    desc: "Constitutional charter and Articles of Association as amended pursuant to conversion to a Public Limited Company and BSE SME listing.",
    officialDoc: true,
  },
  {
    id: "dev-2025-03",
    title: "Statement of Deviation / Variation in IPO Funds Utilization (Period ended 31.03.2025)",
    category: "Corporate & Statutory",
    period: "Period ended 31 March 2025",
    date: "29 May 2025",
    fy: "FY 2024-25",
    format: "PDF",
    size: "3.63 MB",
    url: "/documents/investors/annual-statements/Statement-of-Deviation_31.03.2025.pdf",
    desc: "Regulation 32 SEBI (LODR) statutory compliance report confirming zero deviation in utilization of IPO proceeds.",
    officialDoc: true,
  },
  {
    id: "dev-2024-09",
    title: "Statement of Deviation / Variation in IPO Funds Utilization (Period ended 30.09.2024)",
    category: "Corporate & Statutory",
    period: "Period ended 30 September 2024",
    date: "14 November 2024",
    fy: "FY 2024-25",
    format: "PDF",
    size: "17.20 MB",
    url: "/documents/investors/annual-statements/Statement-of-Deviation_30.09.2024.pdf",
    desc: "Regulation 32 SEBI (LODR) compliance report signed by CS Pankaj Kumar and MD Naresh Kumar confirming zero deviation.",
    officialDoc: true,
  },
  {
    id: "inv-presentation",
    title: "Institutional Investor Corporate Presentation",
    category: "Corporate & Statutory",
    period: "Institutional Briefing",
    date: "September 2026",
    fy: "FY 2025-26",
    format: "PDF",
    size: "13.70 MB",
    url: "/documents/investors/Kalyani-Cast-Tech-Investor-Presentation.pdf",
    desc: "Official executive presentation detailing manufacturing lines, financial growth, order book, and Shivlakha Multimodal Rail Hub expansion.",
    officialDoc: true,
  },
];

export function InvestorDocumentLibrary({
  className = "",
}: {
  className?: string;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedFy, setSelectedFy] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = [
    "All",
    "Annual Statements",
    "Code of Conduct",
    "DRHP & Prospectus",
    "Corporate & Statutory",
  ];

  const fyOptions = [
    "All",
    "FY 2025-26",
    "FY 2024-25",
    "FY 2023-24",
    "Governance",
    "Offer Documents",
    "Corporate",
  ];

  const filteredDocs = useMemo(() => {
    return APPROVED_INVESTOR_DOCS.filter((doc) => {
      // Category filter
      if (selectedCategory !== "All" && doc.category !== selectedCategory) {
        return false;
      }
      // FY filter
      if (selectedFy !== "All" && doc.fy !== selectedFy) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchTitle = doc.title.toLowerCase().includes(q);
        const matchDesc = doc.desc?.toLowerCase().includes(q) ?? false;
        const matchPeriod = doc.period.toLowerCase().includes(q);
        const matchDate = doc.date.toLowerCase().includes(q);
        if (!matchTitle && !matchDesc && !matchPeriod && !matchDate) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedFy, searchQuery]);

  return (
    <section id="document-library" className={`scroll-mt-28 ${className}`}>
      {/* Header */}
      <div className="border-b border-border pb-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
              Public Document Centre
            </span>
            <h2 className="mt-1 font-display text-2xl font-extrabold text-foreground sm:text-3xl">
              Investor Relations &amp; Corporate Documents
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground max-w-3xl leading-relaxed">
              Access the company&apos;s financial statements, corporate governance documents, statutory disclosures, prospectus offer documents and other relevant investor records.
            </p>
          </div>
          <div className="shrink-0 text-xs font-mono text-muted-foreground">
            Displaying <strong className="text-foreground">{filteredDocs.length}</strong> of {APPROVED_INVESTOR_DOCS.length} documents
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-6 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 border border-border bg-muted/40 p-1 rounded-lg">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-xs font-semibold"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & FY Filter */}
          <div className="flex flex-wrap sm:flex-nowrap gap-2 items-center">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search document title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-md border border-border bg-background py-1.5 pl-8 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-hidden"
              />
            </div>

            {/* FY Filter */}
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Filter className="h-3.5 w-3.5" />
              <select
                value={selectedFy}
                onChange={(e) => setSelectedFy(e.target.value)}
                className="rounded-md border border-border bg-background py-1.5 px-2 text-sm text-foreground focus:border-primary focus:outline-hidden font-mono"
              >
                {fyOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt === "All" ? "All Periods" : opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Documents Table / Card List */}
      <div className="mt-6 space-y-3">
        {filteredDocs.length === 0 ? (
          <div className="rounded-xl border border-dashed border-border p-8 text-center">
            <FileText className="mx-auto h-8 w-8 text-muted-foreground/60" />
            <p className="mt-2 text-sm font-semibold text-foreground">No matching documents found</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Try adjusting your search query or selecting a different category tab.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedCategory("All");
                setSelectedFy("All");
                setSearchQuery("");
              }}
              className="mt-4 text-xs"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full border-collapse text-left text-xs sm:text-sm">
              <thead className="border-b border-border bg-muted/60 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th scope="col" className="p-3 w-1/2">Official Document Title &amp; Scope</th>
                  <th scope="col" className="p-3 w-32 border-l border-border">Category</th>
                  <th scope="col" className="p-3 w-36 border-l border-border">Reporting Period / Date</th>
                  <th scope="col" className="p-3 w-24 border-l border-border text-center">Format</th>
                  <th scope="col" className="p-3 w-40 border-l border-border text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {filteredDocs.map((doc) => (
                  <tr key={doc.id} className="hover:bg-muted/30 transition-colors">
                    {/* Title & Desc */}
                    <td className="p-3 align-top">
                      <div className="flex items-start gap-2.5">
                        <FileText className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <div>
                          <div className="font-bold text-foreground leading-snug">
                            {doc.title}
                          </div>
                          {doc.desc && (
                            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                              {doc.desc}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="p-3 align-top border-l border-border font-mono text-sm text-muted-foreground">
                      <span className="inline-block rounded bg-muted px-2 py-0.5 text-xs font-semibold text-foreground">
                        {doc.category}
                      </span>
                    </td>

                    {/* Period & Date */}
                    <td className="p-3 align-top border-l border-border text-sm">
                      <div className="font-semibold text-foreground">{doc.period}</div>
                      <div className="font-mono text-xs text-muted-foreground mt-0.5">{doc.date}</div>
                    </td>

                    {/* Format & Size */}
                    <td className="p-3 align-top border-l border-border text-center">
                      <span className="font-mono font-bold text-primary block">{doc.format}</span>
                      <span className="font-mono text-xs text-muted-foreground block">{doc.size}</span>
                    </td>

                    {/* Actions */}
                    <td className="p-3 align-top border-l border-border text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          asChild
                          size="sm"
                          variant="outline"
                          className="h-8 text-xs sm:text-sm font-semibold hover:border-primary hover:text-primary"
                        >
                          <a
                            href={doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${doc.title}`}
                          >
                            <ExternalLink className="mr-1 h-3.5 w-3.5" /> View
                          </a>
                        </Button>
                        <Button
                          asChild
                          size="sm"
                          className="h-8 text-xs sm:text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                          <a
                            href={doc.url}
                            download
                            aria-label={`Download ${doc.title}`}
                          >
                            <Download className="mr-1 h-3.5 w-3.5" /> Download
                          </a>
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground border-t border-border pt-3">
        <div className="flex items-center gap-1.5 font-mono">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
          <span>All documents verified against source corporate records and statutory BSE filings.</span>
        </div>
        <div className="text-xs">
          Statutory Filings Scrip Code: <strong className="text-foreground">544023</strong> (BSE SME)
        </div>
      </div>
    </section>
  );
}

