import { useState, useMemo } from "react";
import {
  Award,
  ShieldCheck,
  FileCheck2,
  Download,
  ZoomIn,
  X,
  ExternalLink,
  CheckCircle2,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export interface CertificateItem {
  id: string;
  title: string;
  category: "IRS" | "Lloyd's Register" | "ISO" | "RDSO / BIS" | "Design Innovation";
  issuer: string;
  code: string;
  authority: string;
  holder: string;
  refStandard: string;
  verifiedScope: string;
  validity: string;
  issueDate?: string;
  expiryDate?: string;
  scope: string;
  notes: string;
  thumbnail: string;
  highRes: string;
  pdfUrl?: string;
}

export const VERIFIED_CERTIFICATES: CertificateItem[] = [
  // 1. IRS Capacity
  {
    id: "irs-capacity",
    title: "Certificate of Capacity (Report DLH21X014)",
    category: "IRS",
    issuer: "Indian Register of Shipping (IRS)",
    code: "Report No. DLH21X014",
    authority: "Indian Register of Shipping (IRS), Port: Delhi",
    holder: "Kalyani Cast Tech Private Limited, Rewari Works",
    refStandard: "Report DLH21X014 · ISO 1496:2013 & CSC 1972",
    verifiedScope: "Annual capacity ≥1,000 ISO freight containers (20ft High Cube 34T).",
    validity: "Assessed & Approved (Active Baseline)",
    issueDate: "24 June 2021",
    scope: "Annual capacity to manufacture ≥1,000 ISO freight containers (20ft High Cube End Open 34T as per ISO 1496:2013 and CSC 1972).",
    notes: "Official statutory capacity assessment verifying manufacturing facilities, tooling, assembly jigs, and testing rigs at Rewari Works, Village Mamaria Thether, District Rewari, Haryana.",
    thumbnail: "/documents/approvals/Certificate-of-Capacity-1.jpg",
    highRes: "/documents/approvals/Certificate-of-Capacity-1.jpg",
    pdfUrl: "/documents/approvals/IRS-Certificate-of-Capacity-DLH21X014.pdf",
  },

  // 2. IRS Competent Manufacturer
  {
    id: "irs-competent",
    title: "Competent Manufacturer Certificate (CSC 1972)",
    category: "IRS",
    issuer: "Indian Register of Shipping (IRS)",
    code: "Report No. DLH21X014 / Competency",
    authority: "Indian Register of Shipping (IRS)",
    holder: "Kalyani Cast Tech Private Limited",
    refStandard: "Competency Assessment · CSC 1972 Convention",
    verifiedScope: "Competency approval for container fabrication, welding & QA.",
    validity: "Approved Manufacturer",
    issueDate: "24 June 2021",
    scope: "Competency certification for container manufacturing covering structural fabrication, certified welding, surface protection, and quality assurance under International Convention for Safe Containers (CSC 1972).",
    notes: "Assessed under IRS Rules and International Convention for Safe Containers (CSC 1972) based on checklist Form No. CONT.COMP-CAP_CL.",
    thumbnail: "/documents/approvals/Competent-Manufacturer-1.jpg",
    highRes: "/documents/approvals/Competent-Manufacturer-1.jpg",
    pdfUrl: "/documents/approvals/Competent-Manufacturer.pdf",
  },

  // 3. Lloyd's Register
  {
    id: "lr-foundry",
    title: "Approved Manufacturer of Steel Castings (LR2489004WA)",
    category: "Lloyd's Register",
    issuer: "Lloyd's Register EMEA",
    code: "LR2489004WA / Chapter 4 Section 9",
    authority: "Lloyd's Register EMEA, London, United Kingdom",
    holder: "Kalyani Cast-Tech Limited, Rewari Works",
    refStandard: "LR2489004WA · LR Rules for Materials Ch. 4 Sec. 9",
    verifiedScope: "Approved manufacture of ISO 1161 container corner castings.",
    validity: "Valid until 30 June 2027",
    issueDate: "01 July 2024",
    expiryDate: "30 June 2027",
    scope: "Manufacture of container corner castings in accordance with Lloyd's Register Rules for Materials (ISO 1161 & proprietary dwarf container fittings).",
    notes: "Specifically scoped to container corner fittings cast in annealed killed carbon-manganese steel up to 18.00 kg piece weight. Certificate LR2489004WA valid until 30 June 2027.",
    thumbnail: "/documents/approvals/LR-Foundry-Approval-2024-Page-1.png",
    highRes: "/documents/approvals/LR-Foundry-Approval-2024-Page-1.png",
    pdfUrl: "/documents/approvals/LRS-Foundry-Approval-2024-2027.pdf",
  },

  // 4. ISO 9001:2015
  {
    id: "iso-9001",
    title: "ISO 9001:2015 Quality Management System Certification",
    category: "ISO",
    issuer: "QACS International Pvt. Ltd. (Accredited by UAF, USA · IAF Member)",
    code: "Certificate No: QACS-UAF-Q-KC-08.24.1343",
    authority: "United Accreditation Foundation Inc. (UAF), USA",
    holder: "Kalyani Cast Tech Ltd., Rewari Works",
    refStandard: "ISO 9001:2015 · EA Code: 18",
    verifiedScope: "Steel & SG iron casting, machining, ISO & special containers, FRP components.",
    validity: "Valid until 10 October 2027",
    issueDate: "11 October 2024",
    expiryDate: "10 October 2027",
    scope: "Manufacturer of steel, SG iron and CI components using high quality casting technique and machining; fabrication of ISO, non-ISO and special steel containers; manufacturing of FRP sheets and components.",
    notes: "Certificate issued by QACS International with 3-year validity. Annual surveillance schedule: 1st surveillance on/before 10.10.2025; 2nd surveillance on/before 10.10.2026; re-certification before 10.10.2027.",
    thumbnail: "/documents/approvals/ISO-9001-Certificate-Kalyani-Cast-Tech.jpg",
    highRes: "/documents/approvals/ISO-9001-Certificate-Kalyani-Cast-Tech.jpg",
    pdfUrl: "/documents/approvals/ISO-9001-and-45001-Certificates.pdf",
  },

  // 5. ISO 14001:2015
  {
    id: "iso-14001",
    title: "ISO 14001:2015 Environmental Management System Certification",
    category: "ISO",
    issuer: "Pacific Certification Pvt. Ltd. (Accredited by QASL · CAB-010)",
    code: "Certificate No: PCPL-EMS-KC-6040",
    authority: "Quality Accreditation Services Limited (QASL)",
    holder: "Kalyani Cast Tech Ltd., Rewari Works",
    refStandard: "ISO 14001:2015 Environmental Standards",
    verifiedScope: "Environmental management for steel foundry, machining, and container fabrication.",
    validity: "Valid until 22 August 2028",
    issueDate: "23 August 2025",
    expiryDate: "22 August 2028",
    scope: "Compliance of environmental management system covering manufacturer of steel, SG iron and CI components using casting and machining, fabrication of ISO, non-ISO and special containers, and FRP sheets and components.",
    notes: "3-year accreditation from Pacific Certification Pvt. Ltd. Annual surveillance: 1st surveillance 22.08.2026, 2nd surveillance 22.08.2027, expiry 22.08.2028.",
    thumbnail: "/documents/approvals/ISO-14001-Certificate-Kalyani-Cast-Tech.jpg",
    highRes: "/documents/approvals/ISO-14001-Certificate-Kalyani-Cast-Tech.jpg",
    pdfUrl: "/documents/approvals/ISO-14001-Certificate.pdf",
  },

  // 6. ISO 45001:2018
  {
    id: "iso-45001",
    title: "ISO 45001:2018 Occupational Health & Safety Management",
    category: "ISO",
    issuer: "QACS International Pvt. Ltd. (Accredited by UAF, USA · IAF Member)",
    code: "Certificate No: QACS-UAF-OH-KC-08.24.888",
    authority: "United Accreditation Foundation Inc. (UAF), USA",
    holder: "Kalyani Cast Tech Ltd., Rewari Works",
    refStandard: "ISO 45001:2018 · EA Code: 18",
    verifiedScope: "Occupational health & safety across casting, machining, container fabrication.",
    validity: "Valid until 10 October 2027",
    issueDate: "11 October 2024",
    expiryDate: "10 October 2027",
    scope: "Occupational health and safety management system compliance across casting, precision machining, container welding and structural assembly.",
    notes: "Audited and certified by QACS International. Valid for 3 years subject to annual surveillance audits.",
    thumbnail: "/documents/approvals/ISO-45001-Certificate-Kalyani-Cast-Tech.jpg",
    highRes: "/documents/approvals/ISO-45001-Certificate-Kalyani-Cast-Tech.jpg",
    pdfUrl: "/documents/approvals/ISO-9001-and-45001-Certificates.pdf",
  },

  // 7. RDSO Class A Foundry (IS 12117:1996)
  {
    id: "rdso-is12117",
    title: "RDSO Class 'A' Foundry Approval (IS 12117:1996)",
    category: "RDSO / BIS",
    issuer: "RDSO (Quality Assurance Mechanical Directorate), Ministry of Railways",
    code: "Vendor Code: 450 · Regn: QAM/Regn/Fdy Classification/Kalyani/D",
    authority: "Research Designs & Standards Organization (RDSO), Lucknow",
    holder: "Kalyani Cast-Tech Private Limited, Rewari Works",
    refStandard: "IS 12117:1996 · RDSO Quality Assurance Requirements",
    verifiedScope: "Class 'A' foundry status specific to Indian Railways needs.",
    validity: "Documented Baseline (IS 12117:1996)",
    issueDate: "15 May 2014",
    scope: "Compliance of quality assurance requirements including personnel, equipment, and testing facilities in accordance with IS 12117:1996 for railway steel and SG iron castings.",
    notes: "Official RDSO approval certificate signed by Director/QAM/RDSO Lucknow establishing Class 'A' foundry classification for railway components.",
    thumbnail: "/documents/approvals/RDSO-Class-A-Foundry-Approval-IS-12117.jpg",
    highRes: "/documents/approvals/RDSO-Class-A-Foundry-Approval-IS-12117.jpg",
    pdfUrl: "/documents/approvals/RDSO-Class-A-Foundry-Approval-IS-12117.jpg",
  },

  // 8. Dwarf Container Design Innovation & Railway Board Approval
  {
    id: "dwarf-design",
    title: "Railway Board Dwarf Container Approval & Design Registration",
    category: "Design Innovation",
    issuer: "Ministry of Railways (Railway Board) & Design Registry",
    code: "Railway Board No. 2011/TT-III/73/19 · Design Regn 206997",
    authority: "Ministry of Railways (Railway Board) & Patent Office",
    holder: "Shri Naresh Kumar (MD, Kalyani Cast Tech) & PRCL",
    refStandard: "IRSOD 2004 Clearance & Design Registration 206997",
    verifiedScope: "Double Stack Railway Container for electrified rail corridors.",
    validity: "Historic Design Registration & Regulatory Milestone",
    issueDate: "19 April 2016 (Letter) · 26 October 2006 (Design Registration)",
    scope: "Design, configuration and surface pattern of the 6'6\" height Double Stack Railway Container engineered to operate under 25kV OHE overhead wires without route infringement.",
    notes: "Historic technical communication and registered design certificate establishing Kalyani Cast Tech leadership in double-stack dwarf container development.",
    thumbnail: "/documents/approvals/Railway-Board-Dwarf-Container-Design-Registration.jpg",
    highRes: "/documents/approvals/Railway-Board-Dwarf-Container-Design-Registration.jpg",
    pdfUrl: "/documents/approvals/Railway-Board-Dwarf-Container-Design-Registration.jpg",
  },
];

export function CertificatesGallery({
  className = "",
  showHeading = true,
}: {
  className?: string;
  showHeading?: boolean;
}) {
  const [activeCert, setActiveCert] = useState<CertificateItem | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const categories = [
    "All",
    "IRS",
    "Lloyd's Register",
    "ISO",
    "RDSO / BIS",
    "Design Innovation",
  ];

  const filteredCerts = useMemo(() => {
    if (selectedFilter === "All") return VERIFIED_CERTIFICATES;
    return VERIFIED_CERTIFICATES.filter((c) => c.category === selectedFilter);
  }, [selectedFilter]);

  return (
    <section id="certificates-gallery" className={`scroll-mt-28 ${className}`}>
      {showHeading && (
        <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end border-b border-[#d9dfe6] pb-5">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
              Certifications &amp; Technical Documents
            </span>
            <h2 className="mt-1 font-display text-2xl font-extrabold text-[#101820] sm:text-3xl">
              Official Approvals &amp; Tested Capacity Records
            </h2>
            <p className="mt-1.5 text-sm sm:text-base text-[#44505e] max-w-2xl leading-relaxed">
              Technical certificates, statutory capacity assessments, and third-party quality accreditations issued by the Indian Register of Shipping (IRS), Lloyd&apos;s Register, QACS/UAF (ISO 9001 &amp; ISO 45001), PCPL (ISO 14001), and RDSO. Select any certificate to review the official verification report.
            </p>
          </div>
          <div className="shrink-0 text-xs font-mono text-[#44505e]">
            Displaying <strong className="text-[#101820]">{filteredCerts.length}</strong> of {VERIFIED_CERTIFICATES.length} verified approvals
          </div>
        </div>
      )}

      {/* Filter Tabs */}
      <div className="mb-6 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedFilter(cat)}
            className={`rounded-md px-3.5 py-1.5 font-mono text-xs sm:text-sm font-medium transition-all ${
              selectedFilter === cat
                ? "bg-[#1b4b96] text-white shadow-xs font-bold"
                : "border border-[#d9dfe6] bg-white text-[#44505e] hover:border-[#1b4b96] hover:text-[#101820]"
            }`}
          >
            {cat} {cat === "All" ? `(${VERIFIED_CERTIFICATES.length})` : `(${VERIFIED_CERTIFICATES.filter(c => c.category === cat).length})`}
          </button>
        ))}
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredCerts.map((cert) => (
          <div
            key={cert.id}
            data-testid={`cert-card-${cert.id}`}
            className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#d9dfe6] bg-white shadow-sm transition-all hover:border-[#1b4b96] hover:shadow-lg"
          >
            <div>
              {/* Aspect Ratio Portrait Container */}
              <div
                className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => setActiveCert(cert)}
              >
                <img
                  src={cert.thumbnail}
                  alt={`${cert.title} scan thumbnail`}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[#0e2a55]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0e2a55]/90 px-3 py-1.5 font-mono text-xs font-bold text-white backdrop-blur-sm shadow-md">
                    <ZoomIn className="h-3.5 w-3.5 text-amber-300" /> Click to Zoom
                  </span>
                </div>
                <div className="absolute top-2 left-2 rounded bg-[#0e2a55]/90 px-2 py-0.5 font-mono text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                  {cert.validity}
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <h3 className="font-display text-base font-bold text-[#101820] leading-snug">
                  {cert.title}
                </h3>

                <div className="mt-3 space-y-2 border-t border-[#e2e8f0] pt-2.5 text-sm">
                  <div>
                    <span className="block font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                      Issuing Authority
                    </span>
                    <span className="font-semibold text-[#101820] leading-tight block">
                      {cert.authority}
                    </span>
                  </div>

                  <div>
                    <span className="block font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                      Reference / Code
                    </span>
                    <span className="font-mono text-xs font-semibold text-[#101820] block">
                      {cert.code}
                    </span>
                  </div>

                  <div>
                    <span className="block font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                      Holder &amp; Location
                    </span>
                    <span className="text-xs sm:text-sm text-[#44505e] block">
                      {cert.holder}
                    </span>
                  </div>

                  <div>
                    <span className="block font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                      Verified Scope
                    </span>
                    <p className="text-xs sm:text-sm text-[#44505e] leading-relaxed line-clamp-3">
                      {cert.verifiedScope}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="border-t border-[#e2e8f0] bg-[#f8fafc] p-3 flex items-center justify-between gap-2">
              <Button
                variant="outline"
                size="sm"
                className="w-full text-xs sm:text-sm font-semibold text-[#1b4b96] border-[#1b4b96]/30 hover:bg-[#1b4b96] hover:text-white"
                onClick={() => setActiveCert(cert)}
              >
                <ZoomIn className="mr-1.5 h-3.5 w-3.5" /> View Certificate
              </Button>
              {cert.pdfUrl && (
                <Button
                  asChild
                  variant="ghost"
                  size="sm"
                  className="shrink-0 text-xs px-2 text-[#44505e] hover:text-[#101820]"
                >
                  <a
                    href={cert.pdfUrl}
                    download
                    aria-label={`Download ${cert.title}`}
                  >
                    <Download className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Lightbox Modal */}
      {activeCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-cert-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-6"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-[#d9dfe6] bg-[#0e2a55] px-5 py-4 text-white">
              <div className="min-w-0 pr-4">
                <div className="flex items-center gap-2">
                  <span className="rounded bg-amber-400 px-2 py-0.5 font-mono text-[10px] font-bold uppercase text-[#0e2a55]">
                    {activeCert.validity}
                  </span>
                  <span className="font-mono text-xs text-white/70">{activeCert.code}</span>
                </div>
                <h3 id="modal-cert-title" className="mt-1 truncate font-display text-lg font-bold text-white sm:text-xl">
                  {activeCert.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="rounded-full p-1.5 text-white/70 hover:bg-white/10 hover:text-white"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Modal Body: Two Columns (Image Preview + Full Metadata) */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6">
              <div className="grid gap-6 md:grid-cols-2 items-start">
                {/* Left: Certificate Scan Image */}
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-[#d9dfe6] bg-slate-50 shadow-inner">
                  <img
                    src={activeCert.highRes}
                    alt={`${activeCert.title} high resolution scan`}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Right: Technical Metadata & Scope Details */}
                <div className="space-y-4 text-sm text-[#44505e]">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                      Issuing Body / Authority
                    </span>
                    <p className="mt-0.5 font-semibold text-[#101820] text-base">
                      {activeCert.authority}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                      Certified Entity &amp; Location
                    </span>
                    <p className="mt-0.5 font-semibold text-[#101820]">
                      {activeCert.holder}
                    </p>
                  </div>

                  {activeCert.issueDate && (
                    <div className="grid grid-cols-2 gap-3 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-3 text-sm">
                      <div>
                        <span className="font-mono text-xs font-bold uppercase text-[#1b4b96] block">
                          Issue Date
                        </span>
                        <span className="font-mono font-bold text-[#101820]">{activeCert.issueDate}</span>
                      </div>
                      {activeCert.expiryDate && (
                        <div>
                          <span className="font-mono text-xs font-bold uppercase text-[#1b4b96] block">
                            Expiry / Validity
                          </span>
                          <span className="font-mono font-bold text-emerald-700">{activeCert.expiryDate}</span>
                        </div>
                      )}
                    </div>
                  )}

                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                      Audited Technical Scope
                    </span>
                    <p className="mt-1 text-sm leading-relaxed text-[#101820] bg-slate-50 border border-[#e2e8f0] p-3 rounded-lg">
                      {activeCert.scope}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                      Auditor Notes &amp; Verification Trail
                    </span>
                    <p className="mt-1 text-sm leading-relaxed text-[#44505e]">
                      {activeCert.notes}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#d9dfe6] flex flex-wrap gap-3">
                    {activeCert.pdfUrl && (
                      <Button asChild className="bg-[#1b4b96] hover:bg-[#143a75] text-white">
                        <a href={activeCert.pdfUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-4 w-4" /> Open Official Document
                        </a>
                      </Button>
                    )}
                    {activeCert.pdfUrl && (
                      <Button asChild variant="outline" className="border-[#d9dfe6]">
                        <a href={activeCert.pdfUrl} download>
                          <Download className="mr-2 h-4 w-4" /> Download PDF
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
