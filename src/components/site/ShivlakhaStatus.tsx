import { SiteLink } from "./SiteLink";

export interface ShivlakhaComponent {
  componentId: string;
  name: string;
  badge: string;
  color: "emerald" | "blue" | "amber";
  operator: string;
  tagline?: string;
  copy: string;
  image: string;
  to: string;
}

const components: ShivlakhaComponent[] = [
  {
    componentId: "01",
    name: "Container Manufacturing",
    badge: "Operational",
    color: "emerald",
    operator: "Manufacturing Division · Covered Structural Shed",
    tagline: "Manufacturing Infrastructure · Rewari & Shivlakha",
    copy: "Manufacturing facility for freight containers.",
    image: "/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg",
    to: "/manufacturing",
  },
  {
    componentId: "02",
    name: "Gati Shakti Terminal",
    badge: "Operational",
    color: "emerald",
    operator: "Terminal Division · Broad-Gauge Railway Siding",
    tagline: "Dedicated Broad-Gauge Rail Siding · Ready",
    copy: "Rail-linked cargo terminal at Shivlakha.",
    image: "/assets/shivlakha/terminal-shivlakha-rake-handling-01.jpg",
    to: "/shivlakha-rail-logistics",
  },
  {
    componentId: "03",
    name: "Railway Wagon Manufacturing",
    badge: "Under Development",
    color: "blue",
    operator: "Manufacturing Division · RDSO Concept Stage",
    tagline: "Stage-I Concept Validation",
    copy: "Wagon manufacturing facility under development.",
    image: "/assets/wagons/Next-Generation Container Wagon Design.png",
    to: "/products-applications#wagons",
  },
  {
    componentId: "04",
    name: "Inland Container Terminal",
    badge: "Under Development",
    color: "amber",
    operator: "Terminal Division · Under Construction",
    tagline: "CBIC Approval Received",
    copy: "Inland Container Terminal under development at Shivlakha.",
    image: "/assets/shivlakha/Detailed Diagram of KTech Shivlakha Project.jpeg",
    to: "/shivlakha-rail-logistics",
  },
];

const statusStyles = {
  emerald: {
    dot: "bg-emerald-500",
    badge: "border-emerald-600 bg-emerald-50 text-emerald-800",
    badgeDark: "border-emerald-400 bg-emerald-500/20 text-emerald-300",
    borderHover: "hover:border-emerald-500",
  },
  blue: {
    dot: "bg-blue-500",
    badge: "border-blue-600 bg-blue-50 text-blue-800",
    badgeDark: "border-blue-400 bg-blue-500/20 text-blue-300",
    borderHover: "hover:border-blue-500",
  },
  amber: {
    dot: "bg-amber-600",
    badge: "border-amber-600 bg-amber-50 text-amber-900",
    badgeDark: "border-amber-400 bg-amber-500/20 text-amber-300",
    borderHover: "hover:border-amber-500",
  },
};

/**
 * Visual-first Shivlakha components presentation with authentic photographs,
 * approved statutory status labels, and concise 1-sentence descriptions.
 */
export function ShivlakhaStatus({ dark }: { dark?: boolean }) {
  return (
    <div className={`${dark ? "text-white" : "text-[#101820]"}`}>
      <div
        className={`flex flex-wrap items-center justify-between gap-3 border-b pb-4 ${
          dark ? "border-white/20" : "border-[#d9dfe6]"
        }`}
      >
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Shivlakha Integrated Rail &amp; Logistics Hub · Shivlakha (Gujarat)
          </span>
          <p
            className={`mt-2 font-mono text-xs uppercase tracking-wider ${
              dark ? "text-white/70" : "text-[#44505e]"
            }`}
          >
            Khasra No. 438, Village Shivlakha, Taluka Bhachau, District Kachchh, Gujarat – 370145
          </p>
        </div>
      </div>

      <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {components.map((item) => {
          const style = statusStyles[item.color];
          return (
            <li key={item.name} className="flex">
              <SiteLink
                to={item.to}
                className={`group flex h-full w-full flex-col overflow-hidden rounded-xl border transition-all duration-200 shadow-2xs hover:shadow-md ${
                  dark
                    ? `border-white/15 bg-white/5 hover:bg-white/10 ${style.borderHover}`
                    : `border-[#d9dfe6] bg-white hover:border-[#1b4b96] hover:shadow-slate-200`
                }`}
              >
                {/* 1. Large Relevant Photograph */}
                <div className="aspect-[16/10] w-full overflow-hidden bg-slate-100 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Status Badge */}
                  <span
                    className={`absolute top-2.5 right-2.5 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-bold shadow-xs ${
                      dark ? style.badgeDark : style.badge
                    }`}
                  >
                    <span
                      className={`h-1.5 w-1.5 rounded-full shrink-0 ${style.dot} ${
                        item.color === "emerald" ? "animate-pulse" : ""
                      }`}
                    />
                    <span>{item.badge}</span>
                  </span>
                  <span className="absolute bottom-2 left-2 rounded bg-black/60 px-2 py-0.5 font-mono text-xs font-bold text-white">
                    {item.componentId}
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
                  <div>
                    {/* 2. Short Component Name */}
                    <h3 className="font-display text-base font-bold leading-snug tracking-tight text-inherit group-hover:text-[#1b4b96] transition-colors">
                      {item.name}
                    </h3>

                    {/* Operational Caveat / Target */}
                    {item.tagline && (
                      <p className="mt-1 font-mono text-xs font-semibold text-[#1b4b96]">
                        {item.tagline}
                      </p>
                    )}

                    {/* 3. One Concise Supporting Sentence */}
                    <p className={`mt-1.5 text-sm leading-relaxed ${dark ? "text-white/80" : "text-[#44505e]"}`}>
                      {item.copy}
                    </p>
                  </div>

                  {/* 4. Link to further details */}
                  <div
                    className={`mt-3 pt-2.5 border-t flex items-center justify-between text-sm font-bold transition-colors ${
                      dark
                        ? "border-white/10 text-amber-300 group-hover:text-white"
                        : "border-slate-100 text-[#1b4b96] group-hover:text-[#0e2a55]"
                    }`}
                  >
                    <span>Explore Details</span>
                    <span className="transform transition-transform group-hover:translate-x-1">&rarr;</span>
                  </div>
                </div>
              </SiteLink>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
