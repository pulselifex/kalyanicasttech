import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/content/site";
import { SiteLink } from "@/components/site/SiteLink";
import { Button } from "@/components/ui/button";
import { CONTAINER_MODELS } from "@/components/site/ContainerCatalog";
import {
  FileText,
  Download,
  Award,
  Newspaper,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Calendar,
} from "lucide-react";

export const Route = createFileRoute("/resources/")({
  head: () => pageHead("/resources"),
  component: ResourcesPage,
});

const brochuresAndCerts = [
  {
    title: "Lloyd's Register Steel Castings Foundry Approval (LR2489004WA)",
    scope:
      "Approved manufacture of container corner castings in accordance with LR Rules for Materials, Chapter 4, Section 9. Valid 01 July 2024 to 30 June 2027.",
    type: "Approval Document",
    fileSize: "Valid 2024–2027",
    url: "/documents/approvals/LR-Foundry-Approval-2024-Page-1.png",
    badge: "Lloyd's Register",
  },
  {
    title: "IRS Certificate of Capacity (Report No. DLH21X014)",
    scope:
      "Indian Register of Shipping capacity assessment covering annual output of at least 1,000 ISO containers (20' HC End Open 34T under ISO 1496:2013 & CSC 1972).",
    type: "PDF Document",
    fileSize: "Report No. DLH21X014",
    url: "/documents/approvals/Certificate-of-Capacity.pdf",
    badge: "Indian Register of Shipping",
  },
  {
    title: "IRS Competent Manufacturer Certification",
    scope:
      "Certification as competent manufacturer for container fabrication under ISO 1496 and CSC 1972.",
    type: "PDF Document",
    fileSize: "Manufacturer Approval",
    url: "/documents/approvals/Competent-Manufacturer.pdf",
    badge: "Indian Register of Shipping",
  },
  {
    title: "Kalyani Cast Tech Corporate Brochure",
    scope:
      "Comprehensive overview of Rewari manufacturing works, container product portfolio and Shivlakha Integrated Rail & Logistics Hub.",
    type: "PDF Brochure",
    fileSize: "Corporate Profile",
    url: "/documents/corporate/Kalyani cast Brochure1.pdf",
    badge: "Company Overview",
  },
];

const pressArticles = [
  {
    source: "The Hindu BusinessLine",
    date: "July 2018",
    headline: "Indian Railways flags off double-stack dwarf container train",
    deck: "Western Railway flags off inaugural double-stack dwarf container rake booked from Kanalus to Rewari, enabling cargo to move under overhead electric wires.",
    focus: "Double-Stack Dwarf Container",
  },
  {
    source: "The Financial Express",
    date: "August 2018",
    headline: "How dwarf containers are changing Indian freight economics",
    deck: "By increasing volumetric capacity by 67% compared to conventional single-stack rakes, dwarf containers capture high-cube FMCG, chemical and auto parts traffic.",
    focus: "Freight Logistics Innovation",
  },
  {
    source: "The Hindu BusinessLine",
    date: "December 2021",
    headline: "CUBOID modular container boxes for automotive and two-wheeler distribution",
    deck: "Dedicated parcel and automotive containers carrying up to 10 motorcycles per unit allow 2,160 two-wheelers per rake, cutting transit damages and logistics costs.",
    focus: "Automotive & Parcel Boxes",
  },
];

export function ResourcesPage() {
  const [activeTab, setActiveTab] = useState<"datasheets" | "certs" | "press">("datasheets");

  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-24">
      {/* ============================================================ */}
      {/* Hero Banner                                                  */}
      {/* ============================================================ */}
      <div className="relative overflow-hidden bg-[#0e2a55] px-5 py-16 text-white sm:py-20 lg:px-8">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex flex-wrap items-center gap-2 text-xs font-mono text-white/70"
          >
            <SiteLink to="/" className="hover:text-amber-300">
              Home
            </SiteLink>
            <span>/</span>
            <span className="text-amber-300">Technical Resources</span>
          </nav>

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Controlled Engineering Documents &amp; Approvals
          </div>

          <h1 className="mt-6 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Resources
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/80 sm:text-lg">
            Controlled product data sheets, company brochures, classification certificates from
            Indian Register of Shipping and Lloyd&apos;s Register, and published industry press
            coverage.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* ============================================================ */}
        {/* 3 Resource Tabs                                              */}
        {/* ============================================================ */}
        <div className="mt-12 flex flex-wrap gap-2 border-b border-[#d9dfe6] pb-4">
          <button
            onClick={() => setActiveTab("datasheets")}
            className={`rounded-none px-5 py-3 text-sm font-bold transition-all ${
              activeTab === "datasheets"
                ? "bg-[#0e2a55] text-white shadow"
                : "bg-white text-[#44505e] border border-[#d9dfe6] hover:bg-[#f1f4f8]"
            }`}
          >
            Container Technical Data Sheets
          </button>
          <button
            onClick={() => setActiveTab("certs")}
            className={`rounded-none px-5 py-3 text-sm font-bold transition-all ${
              activeTab === "certs"
                ? "bg-[#0e2a55] text-white shadow"
                : "bg-white text-[#44505e] border border-[#d9dfe6] hover:bg-[#f1f4f8]"
            }`}
          >
            Company Brochures &amp; Certificates
          </button>
          <button
            onClick={() => setActiveTab("press")}
            className={`rounded-none px-5 py-3 text-sm font-bold transition-all ${
              activeTab === "press"
                ? "bg-[#0e2a55] text-white shadow"
                : "bg-white text-[#44505e] border border-[#d9dfe6] hover:bg-[#f1f4f8]"
            }`}
          >
            Published Press Coverage
          </button>
        </div>

        {/* ============================================================ */}
        {/* Tab 1: 16 Container Data Sheets                              */}
        {/* ============================================================ */}
        {activeTab === "datasheets" && (
          <div className="mt-8 space-y-6">
            <div className="border border-[#d9dfe6] bg-white p-6">
              <p className="eyebrow text-[#1b4b96]">Published Container Models</p>
              <h2 className="mt-1 font-display text-2xl font-bold text-[#101820]">
                Published Container Technical Data Sheets
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#44505e] leading-relaxed">
                Sixteen documented models carry approved engineering specification tables.
                Each data sheet outlines exact millimeter tolerances (+0/-6, +0/-5, +0/-10),
                cubic capacities, tare/gross ratings, and certified 7,260 kg floor strengths.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CONTAINER_MODELS.map((model) => (
                <div
                  key={model.id}
                  className="flex flex-col justify-between border border-[#d9dfe6] bg-white p-5 transition-all hover:border-[#1b4b96]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-[#1b4b96]">
                        Model #{model.id}
                      </span>
                      <span className="border border-border bg-[#f1f4f8] px-2 py-0.5 font-mono text-[10px] font-semibold text-[#44505e]">
                        {model.categoryLabel}
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-base font-bold text-[#101820]">
                      {model.name}
                    </h3>
                    <p className="mt-1 font-mono text-xs text-[#44505e]">{model.nominalSize}</p>
                    <p className="mt-2 text-xs text-[#44505e]">
                      Payload: <strong>{model.maxPayload.split(" / ")[0]}</strong>
                    </p>
                    <p className="text-xs text-[#44505e]">
                      Volume: <strong>{model.cubicCapacity.split(" / ")[0]}</strong>
                    </p>
                  </div>

                  <div className="mt-5 border-t border-[#f1f4f8] pt-3">
                    <Button
                      asChild
                      size="sm"
                      className="w-full rounded-none bg-[#1b4b96] text-xs font-semibold text-white hover:bg-[#143a75]"
                    >
                      <SiteLink to="/products-applications">Open Specification &rarr;</SiteLink>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* Tab 2: Company Brochures & Certificates                      */}
        {/* ============================================================ */}
        {activeTab === "certs" && (
          <div className="mt-8 space-y-6">
            <div className="border border-[#d9dfe6] bg-white p-6">
              <p className="eyebrow text-[#1b4b96]">
                Classification &amp; Statutory Standards
              </p>
              <h2 className="mt-1 font-display text-2xl font-bold text-[#101820]">
                Approvals, Capacity Certificates &amp; Corporate Profile
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#44505e] leading-relaxed">
                Official third-party certifications from the Indian Register of Shipping,
                Lloyd&apos;s Register, Bureau of Indian Standards, and ISO 9001:2015 registries.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {brochuresAndCerts.map((doc, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between border border-[#d9dfe6] bg-white p-6 transition-all hover:border-[#1b4b96]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="border border-border bg-[#ebf3fe] px-3 py-1 font-mono text-[10px] font-bold text-[#1b4b96]">
                        {doc.badge}
                      </span>
                      <Award className="h-5 w-5 text-[#1b4b96]" />
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold text-[#101820]">
                      {doc.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#44505e]">
                      {doc.scope}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#f1f4f8] pt-4">
                    <span className="font-mono text-xs text-[#44505e]">{doc.fileSize}</span>
                    {doc.url ? (
                      <Button
                        asChild
                        size="sm"
                        variant="outline"
                        className="rounded-none border-[#d9dfe6] text-xs font-semibold text-[#1b4b96] hover:border-[#1b4b96] hover:bg-[#1b4b96] hover:text-white"
                      >
                        <a href={doc.url} target="_blank" rel="noopener noreferrer">
                          View Document &rarr;
                        </a>
                      </Button>
                    ) : (
                      <a
                        href="mailto:info@kalyanicasttech.com?subject=Certificate%20Documentation%20Request"
                        className="text-xs font-semibold text-[#1b4b96] hover:underline"
                      >
                        Request Copy &rarr;
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* Tab 3: Published Press Coverage                              */}
        {/* ============================================================ */}
        {activeTab === "press" && (
          <div className="mt-8 space-y-6">
            <div className="border border-[#d9dfe6] bg-white p-6">
              <p className="eyebrow text-[#1b4b96]">
                Published Media Reprints
              </p>
              <h2 className="mt-1 font-display text-2xl font-bold text-[#101820]">
                National Financial &amp; Logistics Press Coverage
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-[#44505e] leading-relaxed">
                Reprinted articles from <em>The Hindu BusinessLine</em> and{" "}
                <em>The Financial Express</em> documenting KCT&apos;s double-stack dwarf container
                trials, Western Railway commercial services, and CUBOID cargo boxes.
              </p>
            </div>

            <div className="space-y-6">
              {pressArticles.map((art, idx) => (
                <div
                  key={idx}
                  className="border border-[#d9dfe6] bg-white p-6 transition-all hover:border-[#1b4b96]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Newspaper className="h-4 w-4 text-[#1b4b96]" />
                      <span className="font-bold text-xs text-[#101820]">{art.source}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="border border-border bg-[#f1f4f8] px-2.5 py-0.5 font-mono text-[10px] font-semibold text-[#1b4b96]">
                        {art.focus}
                      </span>
                      <span className="font-mono text-xs text-[#44505e]">{art.date}</span>
                    </div>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold text-[#101820]">
                    {art.headline}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#44505e]">
                    {art.deck}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
