import { useState } from "react";
import { SITE_CONFIG } from "@/content/site-config";
import { SiteLink } from "./SiteLink";
import {
  Youtube,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Building2,
  Globe,
  ChevronDown,
  Factory,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export function SiteFooter() {
  // State for collapsible address groups: all collapsed by default (WP-5B.20)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    registered: false,
    rewari: false,
    shivlakha: false,
    regional: false,
    investor: false,
  });

  const toggleSection = (sectionKey: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  return (
    <footer className="border-t border-white/10 bg-[#0e2a55] text-white">
      {/* ── Main Footer Navigation & Brand Section ── */}
      <div className="mx-auto max-w-7xl px-5 pt-14 pb-10 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand & Corporate Identity Column (Always Visible) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <div className="inline-block rounded-md bg-white p-2 shadow-sm">
                <img
                  src="/assets/company/Kalyani Cast Tech Logo.jpeg"
                  alt="Kalyani Cast Tech Ltd. logo"
                  className="h-11 w-11 object-contain"
                />
              </div>
              <div>
                <p className="font-display text-lg font-bold text-white">{SITE_CONFIG.legalName}</p>
                <p className="font-mono text-xs font-semibold text-[#5b8def]">
                  BSE SME: {SITE_CONFIG.bseCode}
                </p>
              </div>
            </div>

            <p className="mt-3.5 max-w-sm text-sm leading-relaxed text-white/80">
              {SITE_CONFIG.tagline} {SITE_CONFIG.supportingLine}
            </p>

            <div className="mt-4 text-xs text-white/80">
              <span className="text-white/60">Primary Corporate Email: </span>
              <a
                href={`mailto:${SITE_CONFIG.registeredOffice.email}`}
                className="font-medium text-amber-300 hover:text-white underline"
              >
                {SITE_CONFIG.registeredOffice.email}
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-3">
              <span className="text-xs font-medium text-white/70">Connect:</span>
              {SITE_CONFIG.socialLinks?.youtubeUrl && (
                <a
                  href={SITE_CONFIG.socialLinks.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-red-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label={SITE_CONFIG.socialLinks.youtubeLabel}
                  title={SITE_CONFIG.socialLinks.youtubeLabel}
                >
                  <Youtube className="h-4 w-4" />
                </a>
              )}
              {SITE_CONFIG.socialLinks?.linkedinUrl ? (
                <a
                  href={SITE_CONFIG.socialLinks.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label={SITE_CONFIG.socialLinks.linkedinLabel}
                  title={SITE_CONFIG.socialLinks.linkedinLabel}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              ) : (
                <span
                  className="inline-flex h-8 w-8 cursor-help items-center justify-center rounded-full bg-white/5 text-white/40 hover:text-white/60"
                  aria-label="Kalyani Cast Tech on LinkedIn"
                  title="Kalyani Cast Tech on LinkedIn (Official profile pending management URL)"
                >
                  <Linkedin className="h-4 w-4" />
                </span>
              )}
            </div>
          </div>

          {/* 4 Logical Footer Groups (WP-5B.20 Architecture) */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {/* Group 1: Company & Heritage */}
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-amber-300">
                Company &amp; Heritage
              </p>
              <ul className="mt-3.5 space-y-2 text-sm">
                <li>
                  <SiteLink to="/about-us" className="text-white/75 transition-colors hover:text-white">
                    About Kalyani
                  </SiteLink>
                </li>
                <li>
                  <SiteLink to="/our-journey" className="text-white/75 transition-colors hover:text-white">
                    Our Journey
                  </SiteLink>
                </li>
                <li>
                  <SiteLink to="/leadership" className="text-white/75 transition-colors hover:text-white">
                    Board &amp; Management
                  </SiteLink>
                </li>
                <li>
                  <SiteLink to="/gallery" className="text-white/75 transition-colors hover:text-white">
                    Gallery
                  </SiteLink>
                </li>
              </ul>
            </div>

            {/* Group 2: Manufacturing & Platform */}
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-amber-300">
                Manufacturing &amp; Platform
              </p>
              <ul className="mt-3.5 space-y-2 text-sm">
                <li>
                  <SiteLink to="/manufacturing" className="text-white/75 transition-colors hover:text-white">
                    Manufacturing
                  </SiteLink>
                </li>
                <li>
                  <SiteLink to="/facilities" className="text-white/75 transition-colors hover:text-white">
                    Facilities
                  </SiteLink>
                </li>
                <li>
                  <SiteLink to="/products-applications" className="text-white/75 transition-colors hover:text-white">
                    Capabilities &amp; Products
                  </SiteLink>
                </li>
                <li>
                  <SiteLink to="/innovation" className="text-white/75 transition-colors hover:text-white">
                    Innovation
                  </SiteLink>
                </li>
                <li>
                  <SiteLink to="/engineering-quality" className="text-white/75 transition-colors hover:text-white">
                    Engineering &amp; Quality
                  </SiteLink>
                </li>
                <li>
                  <SiteLink to="/shivlakha-rail-logistics" className="text-white/75 transition-colors hover:text-white">
                    Shivlakha
                  </SiteLink>
                </li>
              </ul>
            </div>

            {/* Group 3: Governance & Investors */}
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-amber-300">
                Governance &amp; Investors
              </p>
              <ul className="mt-3.5 space-y-2 text-sm">
                <li>
                  <SiteLink to="/investor-relations" className="text-white/75 transition-colors hover:text-white">
                    Investor Relations
                  </SiteLink>
                </li>
                <li>
                  <SiteLink to="/investors/corporate-governance" className="text-white/75 transition-colors hover:text-white">
                    Statutory Filings &amp; Governance
                  </SiteLink>
                </li>
                <li>
                  <SiteLink to="/investors/financial-information" className="text-white/75 transition-colors hover:text-white">
                    Financial Results
                  </SiteLink>
                </li>
                <li>
                  <SiteLink to="/investors/stock-exchange-disclosures" className="text-white/75 transition-colors hover:text-white">
                    Stock Exchange Disclosures
                  </SiteLink>
                </li>
                <li>
                  <SiteLink to="/investors/shareholder-information" className="text-white/75 transition-colors hover:text-white">
                    Shareholder Information
                  </SiteLink>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* ── Group 4: Contact & Locations (Collapsible Accessible Accordion) ── */}
        <div className="mt-12 border-t border-white/15 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h3 className="font-display text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-300 shrink-0" />
                <span>Contact &amp; Locations</span>
              </h3>
              <p className="mt-1 text-xs text-white/75">
                Official registered, manufacturing, terminal, regional and compliance directory. Click any location to view complete details.
              </p>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold shrink-0">
              <a
                href={`mailto:${SITE_CONFIG.registeredOffice.email}`}
                className="inline-flex items-center gap-1.5 text-amber-300 hover:text-white transition-colors"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{SITE_CONFIG.registeredOffice.email}</span>
              </a>
              <SiteLink
                to="/contact"
                className="inline-flex items-center gap-1 text-blue-300 hover:text-white transition-colors"
              >
                <span>Contact Directory</span>
                <ArrowRight className="h-3 w-3" />
              </SiteLink>
            </div>
          </div>

          {/* Accessible Accordion Container */}
          <div className="space-y-3">
            {/* 1. Registered Office */}
            <div className="rounded-xl border border-white/15 bg-white/5 overflow-hidden transition-colors">
              <button
                type="button"
                id="accordion-btn-registered"
                aria-expanded={openSections.registered}
                aria-controls="accordion-panel-registered"
                onClick={() => toggleSection("registered")}
                className="flex w-full items-center justify-between p-4 sm:px-5 sm:py-3.5 text-left text-sm font-semibold text-white hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-blue-400 cursor-pointer min-h-[48px]"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Building2 className="h-4 w-4 text-amber-300 shrink-0" />
                  <span className="truncate">Registered Office</span>
                  <span className="hidden md:inline text-xs font-mono font-normal text-white/60">
                    · New Delhi
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-white/60 hidden sm:inline">
                    {openSections.registered ? "Hide Details" : "View Address"}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-white/70 transition-transform duration-200 ${
                      openSections.registered ? "rotate-180 text-white" : ""
                    }`}
                  />
                </div>
              </button>

              <div
                id="accordion-panel-registered"
                role="region"
                aria-labelledby="accordion-btn-registered"
                className={`px-4 pb-4 pt-1 sm:px-5 border-t border-white/10 text-xs text-white/80 leading-relaxed ${
                  openSections.registered ? "block" : "hidden"
                }`}
              >
                <p className="font-medium text-white/95">{SITE_CONFIG.registeredOffice.address}</p>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-white/75">
                  <span>
                    <strong className="text-white/90">Tel:</strong>{" "}
                    <a href="tel:+919650891119" className="hover:text-white underline">
                      +91-9650891119
                    </a>{" "}
                    /{" "}
                    <a href="tel:+918076389093" className="hover:text-white underline">
                      +91-8076389093
                    </a>
                  </span>
                  <span>
                    <strong className="text-white/90">Email:</strong>{" "}
                    <a
                      href={`mailto:${SITE_CONFIG.registeredOffice.email}`}
                      className="hover:text-white underline"
                    >
                      {SITE_CONFIG.registeredOffice.email}
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* 2. Rewari Manufacturing Works */}
            <div className="rounded-xl border border-white/15 bg-white/5 overflow-hidden transition-colors">
              <button
                type="button"
                id="accordion-btn-rewari"
                aria-expanded={openSections.rewari}
                aria-controls="accordion-panel-rewari"
                onClick={() => toggleSection("rewari")}
                className="flex w-full items-center justify-between p-4 sm:px-5 sm:py-3.5 text-left text-sm font-semibold text-white hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-blue-400 cursor-pointer min-h-[48px]"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Factory className="h-4 w-4 text-amber-300 shrink-0" />
                  <span className="truncate">Rewari Works</span>
                  <span className="hidden md:inline text-xs font-mono font-normal text-white/60">
                    · Haryana
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-white/60 hidden sm:inline">
                    {openSections.rewari ? "Hide Details" : "View Address"}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-white/70 transition-transform duration-200 ${
                      openSections.rewari ? "rotate-180 text-white" : ""
                    }`}
                  />
                </div>
              </button>

              <div
                id="accordion-panel-rewari"
                role="region"
                aria-labelledby="accordion-btn-rewari"
                className={`px-4 pb-4 pt-1 sm:px-5 border-t border-white/10 text-xs text-white/80 leading-relaxed ${
                  openSections.rewari ? "block" : "hidden"
                }`}
              >
                <p className="font-medium text-white/95">{SITE_CONFIG.manufacturingWorks.location}</p>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-white/75">
                  <span>
                    <strong className="text-white/90">Tel:</strong>{" "}
                    <a href="tel:+919650891119" className="hover:text-white underline">
                      +91-9650891119
                    </a>{" "}
                    /{" "}
                    <a href="tel:+918076389093" className="hover:text-white underline">
                      +91-8076389093
                    </a>
                  </span>
                  <span>
                    <strong className="text-white/90">Scope:</strong> Container fabrication, ferrous foundry unit, and in-house ISO 1496 structural load-testing facility.
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Integrated Multimodal Logistics & Manufacturing Hub — Kachchh, Gujarat */}
            <div className="rounded-xl border border-white/15 bg-white/5 overflow-hidden transition-colors">
              <button
                type="button"
                id="accordion-btn-shivlakha"
                aria-expanded={openSections.shivlakha}
                aria-controls="accordion-panel-shivlakha"
                onClick={() => toggleSection("shivlakha")}
                className="flex w-full items-center justify-between p-4 sm:px-5 sm:py-3.5 text-left text-sm font-semibold text-white hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-blue-400 cursor-pointer min-h-[48px]"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <MapPin className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span className="truncate">Integrated Multimodal Logistics &amp; Manufacturing Hub</span>
                  <span className="hidden md:inline text-xs font-mono font-normal text-white/60">
                    · Kachchh, Gujarat
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-white/60 hidden sm:inline">
                    {openSections.shivlakha ? "Hide Details" : "View Address"}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-white/70 transition-transform duration-200 ${
                      openSections.shivlakha ? "rotate-180 text-white" : ""
                    }`}
                  />
                </div>
              </button>

              <div
                id="accordion-panel-shivlakha"
                role="region"
                aria-labelledby="accordion-btn-shivlakha"
                className={`px-4 pb-4 pt-1 sm:px-5 border-t border-white/10 text-xs text-white/80 leading-relaxed ${
                  openSections.shivlakha ? "block" : "hidden"
                }`}
              >
                <p className="font-medium text-white/95">
                  Khasra No. 438, Village Shivlakha, Taluka Bhachau, District Kachchh, Gujarat – 370145, India.
                </p>
                <div className="mt-2.5 space-y-1.5 text-white/80">
                  <div>
                    <strong className="text-white/95">Container &amp; Wagon Manufacturing:</strong>{" "}
                    <a
                      href="mailto:business.development@kalyanicasttech.com"
                      className="hover:text-white underline text-amber-300"
                    >
                      business.development@kalyanicasttech.com
                    </a>
                  </div>
                  <div>
                    <strong className="text-white/95">Terminal Operations / Inland Container Terminal:</strong>{" "}
                    <span className="inline-flex flex-wrap items-center gap-x-3 gap-y-1">
                      <a
                        href="mailto:terminal.head@kalyanicasttech.com"
                        className="hover:text-white underline text-amber-300"
                      >
                        terminal.head@kalyanicasttech.com
                      </a>
                      <span className="text-white/40">·</span>
                      <a
                        href="tel:+919871977772"
                        className="hover:text-white underline text-white/95 font-medium"
                      >
                        +91 98719 77772
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. Regional & International Offices */}
            <div className="rounded-xl border border-white/15 bg-white/5 overflow-hidden transition-colors">
              <button
                type="button"
                id="accordion-btn-regional"
                aria-expanded={openSections.regional}
                aria-controls="accordion-panel-regional"
                onClick={() => toggleSection("regional")}
                className="flex w-full items-center justify-between p-4 sm:px-5 sm:py-3.5 text-left text-sm font-semibold text-white hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-blue-400 cursor-pointer min-h-[48px]"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <Globe className="h-4 w-4 text-amber-300 shrink-0" />
                  <span className="truncate">Regional &amp; International Enquiries</span>
                  <span className="hidden md:inline text-xs font-mono font-normal text-white/60">
                    · Trade Liaison Desk
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-white/60 hidden sm:inline">
                    {openSections.regional ? "Hide Details" : "View Details"}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-white/70 transition-transform duration-200 ${
                      openSections.regional ? "rotate-180 text-white" : ""
                    }`}
                  />
                </div>
              </button>

              <div
                id="accordion-panel-regional"
                role="region"
                aria-labelledby="accordion-btn-regional"
                className={`px-4 pb-4 pt-1 sm:px-5 border-t border-white/10 text-xs text-white/80 leading-relaxed ${
                  openSections.regional ? "block" : "hidden"
                }`}
              >
                <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3 text-white/90">
                  <p className="font-medium text-amber-300">
                    Trade &amp; Commercial Liaison Desk
                  </p>
                  <p className="mt-1 text-white/80">
                    {SITE_CONFIG.regionalOffices?.policyNote ||
                      "Regional and international trade enquiries are coordinated directly through our Registered Office in New Delhi."}
                  </p>
                  <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-white/75">
                    <span>
                      <strong className="text-white/90">Telephone:</strong>{" "}
                      <a href="tel:+919650891119" className="hover:text-white underline">
                        +91-9650891119
                      </a>{" "}
                      /{" "}
                      <a href="tel:+918076389093" className="hover:text-white underline">
                        +91-8076389093
                      </a>
                    </span>
                    <span>
                      <strong className="text-white/90">Email:</strong>{" "}
                      <a
                        href="mailto:info@kalyanicasttech.com"
                        className="hover:text-white underline"
                      >
                        info@kalyanicasttech.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Investor Grievance & Registrar & Transfer Agent */}
            <div className="rounded-xl border border-white/15 bg-white/5 overflow-hidden transition-colors">
              <button
                type="button"
                id="accordion-btn-investor"
                aria-expanded={openSections.investor}
                aria-controls="accordion-panel-investor"
                onClick={() => toggleSection("investor")}
                className="flex w-full items-center justify-between p-4 sm:px-5 sm:py-3.5 text-left text-sm font-semibold text-white hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-blue-400 cursor-pointer min-h-[48px]"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <ShieldCheck className="h-4 w-4 text-amber-300 shrink-0" />
                  <span className="truncate">Investor Grievance &amp; RTA</span>
                  <span className="hidden md:inline text-xs font-mono font-normal text-white/60">
                    · Compliance &amp; Bigshare Services
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-white/60 hidden sm:inline">
                    {openSections.investor ? "Hide Details" : "View Details"}
                  </span>
                  <ChevronDown
                    className={`h-4 w-4 text-white/70 transition-transform duration-200 ${
                      openSections.investor ? "rotate-180 text-white" : ""
                    }`}
                  />
                </div>
              </button>

              <div
                id="accordion-panel-investor"
                role="region"
                aria-labelledby="accordion-btn-investor"
                className={`px-4 pb-4 pt-1 sm:px-5 border-t border-white/10 text-xs text-white/80 leading-relaxed ${
                  openSections.investor ? "block" : "hidden"
                }`}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <strong className="text-amber-300 font-bold">Company Secretary &amp; Compliance Officer:</strong>
                    <p className="mt-1 font-semibold text-white/95">{SITE_CONFIG.investorRelations.complianceOfficer}</p>
                    <p className="text-white/80">{SITE_CONFIG.investorRelations.address}</p>
                    <p className="mt-1 text-white/75">
                      Tel: <a href="tel:+919711735302" className="hover:text-white underline">+91-9711735302</a> | Email: <a href={`mailto:${SITE_CONFIG.investorRelations.email}`} className="hover:text-white underline">{SITE_CONFIG.investorRelations.email}</a>
                    </p>
                  </div>
                  <div>
                    <strong className="text-amber-300 font-bold">Registrar &amp; Transfer Agent (RTA):</strong>
                    <p className="mt-1 font-semibold text-white/95">{SITE_CONFIG.registrarAndTransferAgent?.name}</p>
                    <p className="text-white/80">SEBI Registration No: {SITE_CONFIG.registrarAndTransferAgent?.sebiRegNo}</p>
                    <p className="text-white/80">{SITE_CONFIG.registrarAndTransferAgent?.address}</p>
                    <p className="mt-1 text-white/75">
                      Tel: <a href="tel:+912262638200" className="hover:text-white underline">{SITE_CONFIG.registrarAndTransferAgent?.telephone}</a>
                    </p>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-white/10 text-[11px] text-white/60">
                  SEBI SCORES Grievance Redressal Portal:{" "}
                  <a
                    href="https://scores.gov.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-blue-300 hover:text-white"
                  >
                    scores.gov.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Always-Visible Bottom Statutory & Copyright Bar ── */}
      <div className="border-t border-white/15 bg-[#0a1f3d]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-5 text-xs text-white/60 sm:flex-row lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-center sm:text-left">
            <span>
              &copy; {new Date().getFullYear()} Kalyani Cast Tech Limited. All rights reserved.
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 text-white/75">
            <SiteLink to="/contact" className="hover:text-white transition-colors">
              Contact
            </SiteLink>
            <SiteLink to="/contact#enquiry-form" className="hover:text-white transition-colors">
              Business Enquiry
            </SiteLink>
            <SiteLink to="/investor-relations" className="hover:text-white transition-colors">
              Investor Relations
            </SiteLink>
            <SiteLink to="/investors/corporate-governance" className="hover:text-white transition-colors">
              Governance Policies
            </SiteLink>
            <SiteLink to="/engineering-quality" className="hover:text-white transition-colors">
              Quality &amp; Standards
            </SiteLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
