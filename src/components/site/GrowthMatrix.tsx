import { CheckCircle2, Clock, Calendar, ArrowRight, ShieldCheck, Factory, Train, Package } from "lucide-react";
import { SiteLink } from "./SiteLink";

export interface HorizonItem {
  horizon: string;
  period: string;
  title: string;
  status: string;
  statusColor: string;
  facility: string;
  icon: typeof Factory;
  summary: string;
  points: string[];
  link: string;
  linkText: string;
}

const horizons: HorizonItem[] = [
  {
    horizon: "Horizon 1",
    period: "2012 – 2014",
    title: "Foundry Core & Component Baseline",
    status: "Established & Certified",
    statusColor: "border-emerald-500/30 bg-emerald-50 text-emerald-800",
    facility: "Rewari Works, Haryana (5 Acres)",
    icon: Factory,
    summary:
      "Commissioning of the IS 12117 Class A ferrous foundry with twin induction furnaces and Lloyds Register certified corner casting manufacturing.",
    points: [
      "IS 12117 Class A certified ferrous foundry with 2,000 kg and 1,000 kg induction furnaces",
      "Corner castings to ISO 1161 approved by Lloyd's Register and Indian Register of Shipping",
      "Machined railway rolling-stock castings (20 kg to 2,000 kg single pour weight)",
      "Locomotive motor suspension adapters, brake blocks, and coach buffer plungers",
      "In-house sand testing, chemical spectrometry, and mechanical test laboratories",
    ],
    link: "/manufacturing",
    linkText: "Explore Rewari Foundry",
  },
  {
    horizon: "Horizon 2",
    period: "2023 – 2026",
    title: "Scaled Container Manufacturing & Gati Shakti Terminal Siding",
    status: "Operational Today",
    statusColor: "border-blue-500/30 bg-blue-50 text-blue-800",
    facility: "Rewari Works (Haryana) & Shivlakha Hub (Gujarat)",
    icon: Package,
    summary:
      "Scaling container manufacturing across specialized configurations, public listing on BSE SME (544023), and operational commissioning of Shivlakha rail terminal.",
    points: [
      "Annual manufacturing run of up to 6,000 standard and specialised containers",
      "Engineered configurations: ISO dry, 40'/42' dwarf double-stack, coiltainers, tanks & CUBOID",
      "Full-scale ISO 1496 Series-1 physical structural test rig at Rewari",
      "BSE SME public listing (Scrip Code: 544023 · CIN: L26990DL2012PLC242760)",
      "Dedicated broad-gauge private rail siding connecting to IR mainline at Shivlakha",
      "Gati Shakti Terminal platform ready",
    ],
    link: "/products-applications",
    linkText: "View Container Portfolio",
  },
  {
    horizon: "Horizon 3",
    period: "2026 – 2028 Pipeline",
    title: "Railway Wagon Manufacturing & Inland Container Terminal",
    status: "Wagons: Q4 FY 26-27 · Inland Container Terminal: Target FY 2027-28",
    statusColor: "border-amber-500/30 bg-amber-50 text-amber-800",
    facility: "Shivlakha Rail & Logistics Platform, Bhachau, Kachchh",
    icon: Train,
    summary:
      "Development of high-capacity railway wagon manufacturing lines and an Inland Container Terminal with EXIM clearance at the Shivlakha hub.",
    points: [
      "Specialised railway wagon manufacturing facility (car carriers, container flats, Ro-Ro rakes; Target Q4 FY 2026-27)",
      "30-Acre Inland Container Terminal (CBIC approval received on 10 September 2026. Under development)",
      "South Handling Platform: dedicated to container and bulk transshipment",
      "Full-rake broad-gauge handling with approx. 68 km to Deendayal (Kandla) Port and approx. 132 km to Mundra Port",
      "Rail & logistics platform integration with warehousing and industrial cargo consolidation",
    ],
    link: "/shivlakha-rail-logistics",
    linkText: "Shivlakha Expansion Status",
  },
];

export function GrowthMatrix({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="mb-10 text-center sm:text-left">
        <p className="eyebrow text-[#1b4b96]">Capabilities &amp; Growth Trajectory</p>
        <h2 className="mt-2 font-display text-3xl font-extrabold text-[#101820] sm:text-4xl">
          Three Horizons of Engineering Scale
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#44505e] sm:text-base">
          From an established Class A foundry and high-volume container fabrication to an operational
          rail siding and upcoming railway wagon manufacturing hub in Gujarat.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {horizons.map((h, idx) => {
          const Icon = h.icon;
          return (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-[#d9dfe6] bg-white p-6 shadow-sm transition-all hover:border-[#1b4b96] hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#f1f4f8] pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#0e2a55] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-[#1b4b96]">
                        {h.horizon}
                      </span>
                      <p className="font-mono text-[11px] text-[#44505e]">{h.period}</p>
                    </div>
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold tracking-wide ${h.statusColor}`}
                  >
                    {h.status}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-bold text-[#101820]">{h.title}</h3>
                <p className="mt-1 font-mono text-xs font-medium text-[#1b4b96]">{h.facility}</p>
                <p className="mt-3 text-xs leading-relaxed text-[#44505e]">{h.summary}</p>

                <div className="mt-5 space-y-2 border-t border-[#f1f4f8] pt-4">
                  {h.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-[#2c3847]">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1b4b96]" />
                      <span className="leading-snug">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-[#f1f4f8] pt-4">
                <SiteLink
                  to={h.link}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1b4b96] hover:text-[#0e2a55] hover:underline"
                >
                  {h.linkText} <ArrowRight className="h-3.5 w-3.5" />
                </SiteLink>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
