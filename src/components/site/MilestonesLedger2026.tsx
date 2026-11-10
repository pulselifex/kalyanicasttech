import { CalendarCheck2, ShieldCheck, Train, CheckCircle2 } from "lucide-react";

export const MILESTONES_2026 = [
  {
    date: "19 August 2026",
    title: "Terminal Registration & Railway Integration",
    authority: "Western Railway, Ministry of Railways",
    desc: "Kalyani Cast Tech Limited secured statutory terminal registration and railway integration notification from Western Railway for the Shivlakha Gati Shakti Terminal.",
    status: "🟢 Terminal Registration Completed",
    icon: CalendarCheck2,
  },
  {
    date: "10 September 2026",
    title: "CBIC Approval Received",
    authority: "Central Board of Indirect Taxes and Customs (CBIC), Ministry of Finance",
    desc: "Central Board of Indirect Taxes and Customs (CBIC) approval received on 10 September 2026 for the Inland Container Terminal at Shivlakha. The facility is under construction and planning.",
    status: "🟡 CBIC Approval Issued · Planning Stage",
    icon: ShieldCheck,
  },
  {
    date: "15 September 2026",
    title: "Gati Shakti Terminal Infrastructure Completion",
    authority: "Hon'ble Minister of Railways Shri Ashwini Vaishnaw",
    desc: "Inaugurated on 15 September 2026. Completion and formal infrastructure inauguration of the 30-acre Gati Shakti Terminal siding at Shivlakha.",
    status: "🟢 Infrastructure Ready",
    icon: CheckCircle2,
  },
  {
    date: "October 2026",
    title: "RDSO Stage-I Approval for New Wagon Design",
    authority: "RDSO, Ministry of Railways",
    desc: "Receipt of Stage-I approval from the Research Designs and Standards Organisation (RDSO, Ministry of Railways) for the new wagon design.",
    status: "🟢 Stage-I Approved",
    icon: ShieldCheck,
  },
];

export function MilestonesLedger2026({ className = "" }: { className?: string }) {
  return (
    <section
      id="milestones-2026"
      className={`scroll-mt-28 rounded-2xl border border-[#d9dfe6] bg-white p-6 sm:p-8 shadow-sm ${className}`}
    >
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end border-b border-[#e2e8f0] pb-5">
        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
            Corporate &amp; Regulatory Ledger
          </span>
          <h2 className="mt-1 font-display text-2xl font-extrabold text-[#101820]">
            2026 Project &amp; Regulatory Milestones
          </h2>
          <p className="mt-1 text-sm text-[#44505e]">
            Key milestones achieved by Kalyani Cast Tech Limited across terminal commissioning, rolling-stock design approvals, and statutory clearances.
          </p>
        </div>
        <div className="rounded-md bg-emerald-50 border border-emerald-300 px-3 py-1 font-mono text-xs font-bold text-emerald-800 shrink-0">
          🟢 Infrastructure Ready Terminal · Approved Designs
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {MILESTONES_2026.map((m, idx) => {
          const Icon = m.icon;
          return (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-4 transition-all hover:border-[#1b4b96] hover:bg-white hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-2.5">
                  <span className="font-mono text-xs font-extrabold text-[#1b4b96]">
                    {m.date}
                  </span>
                  <Icon className="h-4 w-4 text-[#1b4b96]" />
                </div>
                <h3 className="mt-3 font-display text-base font-bold text-[#101820]">
                  {m.title}
                </h3>
                <span className="mt-1 block font-mono text-xs text-[#64748b]">
                  {m.authority}
                </span>
                <p className="mt-2.5 text-sm leading-relaxed text-[#44505e]">
                  {m.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#e2e8f0]">
                <span className="text-xs font-semibold text-[#1b4b96]">
                  {m.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
