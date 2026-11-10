import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/content/site";
import { SiteLink } from "@/components/site/SiteLink";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { SITE_CONFIG } from "@/content/site-config";
import {
  MapPin,
  Building2,
  Train,
  Phone,
  Mail,
  Globe,
  ShieldCheck,
  Package,
  ArrowRight,
  Info,
} from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("/contact"),
  component: ContactPage,
});

const routeGuidance = [
  {
    title: "Container & Technical Enquiries",
    desc: "For standard ISO boxes, double-stack dwarf containers, coiltainers, and custom engineering drawings.",
    channel: "business.development@kalyanicasttech.com",
    notes: "Include the cargo type, unit dimensions, payload weight and railway route constraints.",
    icon: Package,
  },
  {
    title: "Shivlakha Cargo & Rail Movements",
    desc: "For evaluating freight movement, private siding rail logistics, and operational Gati Shakti Terminal cargo handling in Kachchh.",
    channel: "terminal.head@kalyanicasttech.com",
    notes:
      "Include commodity details, monthly volume, frequency, origin, destination and current road mode.",
    icon: Train,
  },
  {
    title: "Investor Grievances & Secretarial",
    desc: "For shareholder requests, dividend status, transfer/transmission of shares, and SEBI compliance.",
    channel: "cs@kalyanicasttech.com",
    notes: "Direct channel to Mr. Pankaj Kumar, Company Secretary & Compliance Officer.",
    icon: ShieldCheck,
  },
];

const locations = [
  {
    num: "1",
    name: "Registered Office",
    address:
      "B-144, Second Floor, DDA Shed, Phase-1, Okhla Industrial Area Phase-1, New Delhi, South Delhi, Delhi - 110020, India · CIN: L26990DL2012PLC242760",
    phone: "+91-9650891119 / +91-8076389093",
    email: "info@kalyanicasttech.com",
    badge: "Corporate & Statutory",
    icon: Building2,
  },
  {
    num: "2",
    name: "Rewari Manufacturing Works",
    address:
      "Village Mamaria Thethar, Tehsil Khol, District Rewari, Haryana – 123101, India (90 km from New Delhi Airport)",
    phone: "+91-8076389093 / +91-9650891119",
    email: "business.development@kalyanicasttech.com",
    badge: "5 Acres · Operational Plant",
    icon: MapPin,
  },
  {
    num: "3",
    name: "Shivlakha Rail & Logistics Platform",
    address:
      "Khasra No. 438, Village Shivlakha, Taluka Bhachau, District Kachchh, Gujarat – 370145, India",
    phone: "Terminal Liaison Desk",
    email: "terminal.head@kalyanicasttech.com",
    badge: "Operational Gati Shakti Terminal & Logistics Platform",
    icon: Train,
  },
  {
    num: "4",
    name: "Regional & International Inquiries",
    address:
      "Coordinated directly through Registered Office: B-144, Second Floor, DDA Shed, Phase-1, Okhla Industrial Area Phase-1, New Delhi – 110020, India",
    phone: "+91-9650891119 / +91-8076389093",
    email: "info@kalyanicasttech.com",
    badge: "Trade Liaison Desk",
    icon: Globe,
  },
  {
    num: "5",
    name: "Investor Grievance & Compliance Desk",
    address:
      "Mr. Pankaj Kumar (Company Secretary and Compliance Officer), PT – 62/9, Ground Floor, Kalkaji Extension, New Delhi – 110019, India",
    phone: "+91-9711735302",
    email: "cs@kalyanicasttech.com",
    badge: "Statutory Redressal",
    icon: ShieldCheck,
  },
];

function ContactPage() {
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
            <span className="text-amber-300">Contact &amp; Enquiry</span>
          </nav>

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Direct Commercial &amp; Operational Routing
              </div>

              <p className="mt-4 text-xs font-mono font-bold uppercase tracking-widest text-[#5b8def]">
                Contact &amp; Enquiry Directory
              </p>
              <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Tell us what you are moving. We&apos;ll route it to the right desk.
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                Reach the right team for your freight container specification, casting requirements,
                Shivlakha cargo rail evaluation, or shareholder compliance matters.
              </p>
            </div>

            {/* Right Column: Authentic Industrial Visual */}
            <div className="lg:col-span-4 hidden sm:block">
              <div className="relative overflow-hidden rounded-xl border border-white/20 bg-white/5 shadow-2xl backdrop-blur-md">
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src="/assets/manufacturing/factory-rewari-facade-01.png"
                    alt="Kalyani Cast Tech Rewari Works manufacturing plant and administrative entrance"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07162c]/90 via-[#07162c]/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[11px] font-mono text-white/90">
                    <span className="font-semibold text-white">Commercial Enquiry Desk</span>
                    <span className="text-white/70">Rewari Works, Haryana</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* ============================================================ */}
        {/* 3 Route Guidance Cards per Section 11.2                      */}
        {/* ============================================================ */}
        <div className="mt-12">
          <div className="mb-6">
            <p className="eyebrow text-[#1b4b96]">Routing Guidance</p>
            <h2 className="mt-1 font-display text-2xl font-bold text-[#101820]">
              Which Route to Use
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {routeGuidance.map((rg, idx) => {
              const Icon = rg.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between border border-[#d9dfe6] bg-white p-6 transition-all hover:border-[#1b4b96]"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center bg-[#0e2a55] text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[#101820]">
                        {rg.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#44505e]">{rg.desc}</p>
                    <div className="mt-4 bg-[#f8fafc] border border-[#e2e8f0] p-3.5 text-sm">
                      <span className="font-semibold text-[#101820] block">
                        Requirements needed:
                      </span>
                      <p className="mt-1 text-[#44505e]">{rg.notes}</p>
                    </div>
                  </div>

                  <div className="mt-5 border-t border-[#f1f4f8] pt-3 text-sm">
                    <a
                      href={`mailto:${rg.channel}`}
                      className="font-mono text-[#1b4b96] font-semibold hover:underline"
                    >
                      {rg.channel}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================ */}
        {/* 10-Field Business Enquiry Form (#enquiry-form)               */}
        {/* ============================================================ */}
        <div
          id="enquiry-form"
          className="mt-16 scroll-mt-28 lg:scroll-mt-36 border border-[#d9dfe6] bg-white p-6 sm:p-8"
        >
          <div className="border-b border-[#d9dfe6] pb-5">
            <p className="eyebrow text-[#1b4b96]">Commercial Review &amp; Enquiry Desk</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-[#101820] sm:text-3xl">
              Commercial &amp; Technical Enquiry Form
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#44505e] leading-relaxed">
              Tell us what you need to manufacture or move. Submitting an enquiry starts a technical
              or route review; it does not confirm product availability, a tariff, or an operating
              start date.
            </p>
          </div>

          <div className="mt-8 max-w-4xl">
            <EnquiryForm initialKind="A" />
          </div>

          <div className="mt-8 bg-[#ebf3fe] border border-[#b8c9e5] p-4 text-xs text-[#101820] leading-relaxed flex items-start gap-3">
            <Info className="h-4 w-4 shrink-0 text-[#1b4b96] mt-0.5" />
            <div>
              <strong>Form Routing Protocols:</strong> Submissions are classified and routed to our
              commercial desk at <code>info@kalyanicasttech.com</code> and{" "}
              <code>business.development@kalyanicasttech.com</code>, and cargo terminal assessments
              to <code>terminal.head@kalyanicasttech.com</code>.
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 6 Official Operating Locations per Section 11.1              */}
        {/* ============================================================ */}
        <div className="mt-20">
          <div className="mb-8">
            <p className="eyebrow text-[#1b4b96]">Verified Operational Locations</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-[#101820]">
              Official Operating &amp; Registered Addresses
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#44505e]">
              Six official verified operating, manufacturing, terminal, regional and compliance
              addresses:
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc) => {
              const Icon = loc.icon;
              return (
                <div
                  key={loc.num}
                  className="flex flex-col justify-between border border-[#d9dfe6] bg-white p-6 transition-all hover:border-[#1b4b96]"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="border border-border bg-[#f1f4f8] px-2.5 py-0.5 font-mono text-xs font-bold text-[#1b4b96]">
                        {loc.badge}
                      </span>
                      <Icon className="h-4 w-4 text-[#44505e]" />
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold text-[#101820]">
                      {loc.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#44505e]">{loc.address}</p>
                  </div>

                  <div className="mt-6 border-t border-[#f1f4f8] pt-3 text-sm space-y-1">
                    <p className="text-[#44505e]">
                      <span className="font-semibold text-[#101820]">Tel:</span>{" "}
                      {loc.phone.includes("+91") ? (
                        loc.phone.split(" / ").map((p, i) => (
                          <span key={i}>
                            {i > 0 && " / "}
                            <a
                              href={`tel:${p.replace(/[^0-9+]/g, "")}`}
                              className="text-[#1b4b96] hover:underline"
                            >
                              {p}
                            </a>
                          </span>
                        ))
                      ) : (
                        <span>{loc.phone}</span>
                      )}
                    </p>
                    <p className="text-[#44505e]">
                      <span className="font-semibold text-[#101820]">Email:</span>{" "}
                      <a
                        href={`mailto:${loc.email}`}
                        className="text-[#1b4b96] underline hover:text-[#0e2a55]"
                      >
                        {loc.email}
                      </a>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
