import { Factory, Train, Boxes, Building } from "lucide-react";
import { SiteLink } from "./SiteLink";

export const CO_LOCATION_ADVANTAGES = [
  {
    num: "01",
    title: "Co-Located Container Fabrication & Rail Wharf",
    tag: "Co-Located Production",
    icon: Factory,
    summary:
      "Container fabrication (220 m × 45 m shed) sits directly alongside the 720 m × 30 m Gati Shakti Terminal rail wharf on the same plot (Khasra No. 438).",
    detail:
      "Newly built or refurbished containers move straight from the paint booth to the loading platform for first-load dispatch, reducing road haulage legs from distant storage yards.",
    stat: "Direct Access",
    statLabel: "Factory to Rail Wharf",
  },
  {
    num: "02",
    title: "720 m × 30 m Broad-Gauge Siding & Dual Handling Tracks",
    tag: "Broad-Gauge Rail Siding",
    icon: Train,
    summary:
      "Engineered to handle broad-gauge freight rakes directly on the private rail siding.",
    detail:
      "Located 7.33 km from Chitrod junction on the Mundra–Kandla–Palanpur rail corridor and directly on NH-27 (~68 km to Deendayal/Kandla Port, ~132 km to Mundra Port).",
    stat: "720 Metres",
    statLabel: "Broad-Gauge Siding Length",
  },
  {
    num: "03",
    title: "Purpose-Built Container Fleet for Regional Cargo",
    tag: "Specialised Designs",
    icon: Boxes,
    summary:
      "Direct access to Kalyani's specialized container designs engineered for heavy and high-cube commodities.",
    detail:
      "Includes 80T gross / 71T chassis open-top coiltainers for steel coils and TMT bars, 40'/42' double-stack dwarf containers (1,930 mm height) for electrified OHE routes, 84 Cu.m cotton bale boxes, and 37 m³ bulk hoppers for salt, cement, and minerals.",
    stat: "80 MT Gross",
    statLabel: "Extreme Payload Density",
  },
  {
    num: "04",
    title: "Phased Transition to a 30-Acre Customs-Bonded Inland Container Terminal",
    tag: "CBIC Approval Received",
    icon: Building,
    summary:
      "Gati Shakti Terminal ready today, with Inland Container Terminal planning underway.",
    detail:
      "CBIC approval received on 10 September 2026. The Inland Container Terminal is under development for integrated customs clearance, stuffing, de-stuffing, and container handling.",
    stat: "30 Acres",
    statLabel: "Customs-Bonded Enclosure",
  },
];

export function WhyShivlakhaCoLocation({
  summaryOnly = false,
  className = "",
}: {
  summaryOnly?: boolean;
  className?: string;
}) {
  return (
    <section
      id="why-shivlakha"
      className={`scroll-mt-28 rounded-2xl border border-[#b8c9e5] bg-gradient-to-b from-[#f8fafc] to-white p-6 sm:p-10 shadow-sm ${className}`}
    >
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end border-b border-[#d9dfe6] pb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
            Platform Economics &middot; Co-Located Infrastructure
          </span>
          <h2 className="mt-2 font-display text-2xl font-extrabold text-[#101820] sm:text-3xl">
            Why Shivlakha? &mdash; Co-Located Manufacturing &amp; Rail Economics
          </h2>
          <p className="mt-2 max-w-3xl text-sm sm:text-base leading-relaxed text-[#44505e]">
            Cargo owners, CTOs, and shippers face structural haulage dead-loss when containers must
            be trucked empty from distant container yards. Kalyani Cast Tech resolves this by
            co-locating heavy container fabrication directly on an operational full-rake broad-gauge
            rail siding.
          </p>
        </div>
        <div className="shrink-0">
          <SiteLink
            to="/contact?type=cargo#enquiry-form"
            className="inline-flex items-center gap-2 rounded-md bg-[#1b4b96] px-4 py-2.5 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#143a75]"
          >
            Evaluate Shivlakha Movement &rarr;
          </SiteLink>
        </div>
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {CO_LOCATION_ADVANTAGES.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.num}
              className="flex flex-col justify-between rounded-xl border border-[#d9dfe6] bg-white p-5 shadow-sm transition-all hover:border-[#1b4b96] hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#f1f4f8] pb-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#ebf3fe] text-[#1b4b96]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="rounded bg-slate-100 px-2.5 py-1 font-mono text-xs font-semibold text-[#1b4b96]">
                    {item.tag}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-base font-bold leading-snug text-[#101820]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#2c3847] font-medium">
                  {item.summary}
                </p>

                {!summaryOnly && (
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#44505e]">
                    {item.detail}
                  </p>
                )}
              </div>

              <div className="mt-5 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] p-2.5 text-center">
                <span className="block font-mono text-sm font-extrabold text-[#1b4b96]">
                  {item.stat}
                </span>
                <span className="text-xs font-medium text-[#64748b]">
                  {item.statLabel}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
