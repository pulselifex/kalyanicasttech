import { SiteLink } from "./SiteLink";
import { ArrowRight, Factory, Box, Lightbulb, CheckCircle2 } from "lucide-react";

export type MegaMenuItem = {
  label: string;
  to: string;
  tag: string;
  description: string;
  icon: typeof Factory;
};

export const MANUFACTURING_DESTINATIONS: MegaMenuItem[] = [
  {
    label: "Manufacturing Facilities",
    to: "/facilities",
    tag: "Rewari & Shivlakha",
    description:
      "Rewari works in Haryana and Shivlakha Integrated Rail & Logistics platform in Kachchh.",
    icon: Factory,
  },
  {
    label: "Capabilities & Products",
    to: "/products-applications",
    tag: "16 Models & Castings",
    description:
      "16 container models: ISO dry, dwarf, coiltainer, tank, hopper & CUBOID, plus railway castings.",
    icon: Box,
  },
  {
    label: "Innovation & Concepts",
    to: "/innovation",
    tag: "Custom Hardware",
    description:
      "Application-specific hardware: Double-Stack Dwarf, 304-grade salt containers & modular logistics.",
    icon: Lightbulb,
  },
  {
    label: "Engineering & Quality",
    to: "/engineering-quality",
    tag: "ISO 1496 Testing",
    description:
      "In-house ISO 1496 testing facility, 40-tonne UTM, minus 45°C sub-zero impact testing, USFD and MPI.",
    icon: CheckCircle2,
  },
];

interface ManufacturingMegaMenuProps {
  currentPath?: string;
  onItemClick?: () => void;
}

export function ManufacturingMegaMenu({
  currentPath = "",
  onItemClick,
}: ManufacturingMegaMenuProps) {
  return (
    <div
      id="manufacturing-mega-menu"
      role="region"
      aria-label="Manufacturing & Engineering Menu"
      className="w-[720px] rounded-lg border border-structural-border bg-white p-5 shadow-2xl dark:bg-[#101820]"
    >
      {/* ── Top Overview Banner ── */}
      <div className="mb-4 rounded-md border border-structural-border bg-foundry-surface p-3.5 transition-colors hover:border-steel-cobalt/40 dark:bg-white/5">
        <SiteLink
          to="/manufacturing"
          onClick={onItemClick}
          className="flex items-center justify-between group outline-none focus-visible:outline-2 focus-visible:outline-industrial-navy rounded"
        >
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-sm font-bold text-industrial-navy group-hover:text-steel-cobalt dark:text-white">
                Manufacturing Overview & Technical Capabilities
              </span>
              <span className="rounded bg-steel-cobalt/10 px-2 py-0.5 font-mono text-[11px] font-semibold text-steel-cobalt dark:bg-steel-cobalt/20 dark:text-blue-300">
                Rewari Works
              </span>
            </div>
            <p className="mt-1 font-sans text-xs text-machined-slate dark:text-white/70">
              Container fabrication lines, Class A ferrous foundry to IS 12117:1996 and ISO 1496 test
              rig.
            </p>
          </div>
          <div className="ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-steel-cobalt/10 text-steel-cobalt transition-transform group-hover:translate-x-1 group-hover:bg-steel-cobalt group-hover:text-white">
            <ArrowRight className="h-4 w-4" />
          </div>
        </SiteLink>
      </div>

      {/* ── 2x2 Industrial Grid of Approved Destinations ── */}
      <div className="grid grid-cols-2 gap-3">
        {MANUFACTURING_DESTINATIONS.map((item) => {
          const Icon = item.icon;
          const isActive = currentPath === item.to;

          return (
            <SiteLink
              key={item.to}
              to={item.to}
              onClick={onItemClick}
              className={`group flex flex-col justify-between rounded-md border p-3.5 transition-all outline-none focus-visible:outline-2 focus-visible:outline-industrial-navy ${
                isActive
                  ? "border-steel-cobalt bg-foundry-surface ring-1 ring-steel-cobalt dark:bg-white/10"
                  : "border-structural-border bg-white hover:border-steel-cobalt/50 hover:bg-foundry-surface/70 dark:bg-[#101820] dark:hover:bg-white/5"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="flex h-7 w-7 items-center justify-center rounded bg-steel-cobalt/10 text-steel-cobalt dark:bg-steel-cobalt/20 dark:text-blue-300">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="font-display text-sm font-semibold text-industrial-navy group-hover:text-steel-cobalt dark:text-white">
                      {item.label}
                    </span>
                  </div>
                </div>

                <p className="mt-2 font-sans text-xs leading-relaxed text-machined-slate line-clamp-2 dark:text-white/70">
                  {item.description}
                </p>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-structural-border/60 pt-2 text-[11px] font-mono text-machined-slate dark:text-white/50">
                <span className="rounded bg-structural-border/60 px-1.5 py-0.5 text-steel-cobalt font-medium dark:bg-white/10 dark:text-blue-200">
                  {item.tag}
                </span>
                <span className="flex items-center gap-1 font-sans text-steel-cobalt font-medium group-hover:underline">
                  View Specs &rarr;
                </span>
              </div>
            </SiteLink>
          );
        })}
      </div>

      {/* ── Bottom Operational Note ── */}
      <div className="mt-4 flex items-center justify-between border-t border-structural-border pt-3 text-[11px] font-mono text-machined-slate dark:text-white/60">
        <span>Engineering Under One Roof: Design &rarr; Fabrication &rarr; ISO Testing</span>
        <SiteLink
          to="/manufacturing"
          onClick={onItemClick}
          className="text-steel-cobalt hover:underline font-semibold"
        >
          All Technical Specifications &rarr;
        </SiteLink>
      </div>
    </div>
  );
}
