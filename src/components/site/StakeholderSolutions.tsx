import {
  Boxes,
  Train,
  ShieldCheck,
  TrendingUp,
  Truck,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import { SiteLink } from "./SiteLink";

export interface StakeholderGroup {
  id: string;
  audience: string;
  badge: string;
  icon: typeof Boxes;
  painPoint: string;
  solution: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

const stakeholders: StakeholderGroup[] = [
  {
    id: "shippers",
    audience: "Industrial Shippers & Cargo Owners",
    badge: "Steel · Minerals · Agro · Auto",
    icon: Boxes,
    painPoint:
      "Standard shipping containers force excessive tare weight, inefficient bulk volume, or slow floor-loading for heavy industrial commodities.",
    solution:
      "Engineered container profiles (open-top coiltainers with floor saddles, 40'/42' double-stack dwarf boxes, 20' pneumatic hoppers) that maximise rail payload and slash transit breakage.",
    features: [
      "Custom payload capacities up to 80,000 kg gross weight",
      "Floor tie-downs and drop-in saddles engineered for steel coils",
      "Pneumatic discharge ports for cement and dry bulk minerals",
    ],
    ctaText: "Review Cargo Solutions",
    ctaLink: "/products-applications#cargo-solutions",
  },
  {
    id: "ctos",
    audience: "Container Train Operators (CTOs) & 3PLs",
    badge: "Rail Operators · Multimodal Hubs",
    icon: Train,
    painPoint:
      "Terminal congestion, delayed rake placement, and lack of dedicated broad-gauge handling sidings in proximity to major Gujarat ports.",
    solution:
      "Gati Shakti Terminal at Shivlakha with dedicated broad-gauge sidings and full-rake cargo staging wharves.",
    features: [
      "Direct broad-gauge mainline connectivity (Western Railway)",
      "Approx. 68 km to Deendayal (Kandla) Port and approx. 132 km to Mundra Port",
      "Broad-gauge private rail siding for direct rake placement",
    ],
    ctaText: "Check Terminal Capacity",
    ctaLink: "/shivlakha-rail-logistics",
  },
  {
    id: "railways",
    audience: "Indian Railways, PSUs & Classification",
    badge: "Foundry & Load-Testing Rig · IRS & Lloyd's Approvals",
    icon: ShieldCheck,
    painPoint:
      "Unreliable foundry metallurgical quality, lack of certified test facilities, and inconsistent third-party inspection compliance.",
    solution:
      "Ferrous foundry at Rewari, ISO 1161 container corner casting approvals by Lloyd's Register & IRS, in-house ISO 1496 Series-1 physical test rig, and RDSO Stage-I wagon approvals.",
    features: [
      "Spectrometric analysis, ultrasonic NDT, and pull test rig",
      "Machined castings from 20 kg to 2,000 kg single pour weight",
      "Traceable heat numbers and material test certificates",
    ],
    ctaText: "Quality & Foundry Audits",
    ctaLink: "/manufacturing",
  },
  {
    id: "investors",
    audience: "Institutional & Public Shareholders",
    badge: "BSE SME: 544023 · Reg 46 Compliant",
    icon: TrendingUp,
    painPoint:
      "Opaque reporting, unverified capacity assertions, and lack of asset-backed clarity in SME industrial manufacturing.",
    solution:
      "Public listing on BSE SME (Scrip Code: 544023), full SEBI LODR Regulation 46 compliance, audited half-yearly/annual results, and transparent board governance.",
    features: [
      "Asset-backed manufacturing base in Rewari and rail hub in Gujarat",
      "Clear separation of operational facilities vs. phased pipeline",
      "Dedicated compliance desk and Link Intime registrar desk",
    ],
    ctaText: "Investor Portal & Filings",
    ctaLink: "/investor-relations",
  },
  {
    id: "vendors",
    audience: "Suppliers & Fabrication Partners",
    badge: "Steel · Consumables · Logistics",
    icon: Truck,
    painPoint:
      "Unpredictable demand schedules, slow technical approvals, and lack of long-term supply agreements for specialized materials.",
    solution:
      "Structured commercial procurement for Corten steel (SPA-H / IRS M-41), welding consumables, high-tensile hardware, and specialized industrial paints.",
    features: [
      "Direct review by Rewari Works procurement committee",
      "Multi-year framework contracts for standard container inputs",
      "Transparent technical vendor onboarding and payment terms",
    ],
    ctaText: "Vendor Enquiry Desk",
    ctaLink: "/contact#enquiry-form",
  },
];

export function StakeholderSolutions({ className = "" }: { className?: string }) {
  return (
    <section className={`bg-white py-16 lg:py-24 border-t border-[#d9dfe6] ${className}`}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-[#1b4b96]">Multimodal Value Architecture</p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#101820] sm:text-4xl">
              Solutions by Stakeholder
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#44505e] sm:text-base">
              Whether you are shipping heavy bulk minerals, dispatching block rakes, procuring rolling-stock
              castings, or assessing public financial performance, explore direct capabilities tailored to your operational mandate.
            </p>
          </div>
          <div className="shrink-0">
            <SiteLink
              to="/contact#enquiry-form"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1b4b96] hover:underline"
            >
              Direct Commercial Review &rarr;
            </SiteLink>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {stakeholders.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="group flex flex-col justify-between rounded-xl border border-[#d9dfe6] bg-[#f8fafc] p-5 transition-all hover:border-[#1b4b96] hover:bg-white hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0e2a55] text-white group-hover:bg-[#1b4b96] transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <span className="mt-3 block font-mono text-[10px] font-bold uppercase tracking-wider text-[#1b4b96]">
                    {s.badge}
                  </span>
                  <h3 className="mt-1 font-display text-base font-bold text-[#101820]">
                    {s.audience}
                  </h3>

                  <div className="mt-3 text-xs leading-relaxed text-[#44505e]">
                    <p className="font-medium text-[#101820]">{s.solution}</p>
                  </div>

                  <div className="mt-4 space-y-1.5 border-t border-[#e2e8f0] pt-3 text-[11px] text-[#2c3847]">
                    {s.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5">
                        <ChevronRight className="h-3 w-3 shrink-0 text-[#1b4b96] mt-0.5" />
                        <span className="leading-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 border-t border-[#e2e8f0] pt-3">
                  <SiteLink
                    to={s.ctaLink}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#1b4b96] group-hover:text-[#0e2a55] group-hover:underline"
                  >
                    <span>{s.ctaText}</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </SiteLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
