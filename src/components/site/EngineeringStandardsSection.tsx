import { ArrowRight, Cpu, Factory, ShieldCheck, FileCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteLink } from "./SiteLink";

const standardsCards = [
  {
    num: "01",
    category: "Design & Stress Analysis",
    title: "Engineering & Design",
    tag: "3D CAD & FEA Analysis",
    copy: "In-house structural engineering, 3D CAD modeling, and finite element stress analysis validating corner-post rigidity and railway kinematic clearances.",
    img: "/assets/containers/40_spl_steel_drawing_elevation.png",
    icon: Cpu,
    link: "/engineering-quality",
    actionText: "View Design Engineering",
  },
  {
    num: "02",
    category: "Precision Fabrication",
    title: "Manufacturing Processes",
    tag: "Automated Jigs & Certified MIG",
    copy: "Precision hydraulic assembly jigs, automatic seam welding lines, shot blasting to SA 2.5 cleanliness, and airless marine epoxy coating chambers.",
    img: "/assets/manufacturing/manufacturing-container-finishing-assembly-01.jpg",
    icon: Factory,
    link: "/manufacturing",
    actionText: "View Manufacturing Process",
  },
  {
    num: "03",
    category: "Testing & Structural Rig",
    title: "Inspection & Testing",
    tag: "ISO 1496 Series-1 Test Rig",
    copy: "Shopfloor structural quality inspection, calibrated NDT spectroscopy, 7,260 kg forklift floor deflection testing, and 96,012 kg corner post load testing.",
    img: "/assets/manufacturing/manufacturing-container-mig-welding-01.jpg",
    icon: ShieldCheck,
    link: "/engineering-quality",
    actionText: "View Load Testing Rig",
  },
  {
    num: "04",
    category: "Regulatory Accreditations",
    title: "Certifications & Approvals",
    tag: "IRS, LR & ISO Certifications",
    copy: "Third-party tested capacity (IRS Report DLH21X014), Lloyd's Register foundry material approval (LR2489004WA valid to 2027), and ISO 9001/14001/45001 accreditations.",
    img: "/documents/approvals/Certificate-of-Capacity-1.jpg",
    icon: FileCheck2,
    link: "/engineering-quality",
    actionText: "View Approved Certifications",
  },
];

export function EngineeringStandardsSection({ className = "" }: { className?: string }) {
  return (
    <section id="engineering-standards" className={`bg-white py-16 lg:py-20 border-b border-[#d9dfe6] ${className}`}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow text-[#1b4b96]">
              Engineering Standards &amp; Quality Assurance
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold text-[#101820] sm:text-4xl">
              Built on defined processes. Supported by technical evidence.
            </h2>
            <p className="mt-3 text-base text-[#44505e] leading-relaxed">
              Our approach to quality spans engineering, material control, manufacturing processes,
              inspection and product testing. Relevant technical documents and certifications are
              presented subject to their applicable scope and validity.
            </p>
          </div>
          <Button
            asChild
            className="h-11 shrink-0 rounded-md bg-[#1b4b96] px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-[#143a75]"
          >
            <SiteLink to="/engineering-quality">
              Explore Engineering &amp; Quality <ArrowRight className="ml-2 h-4 w-4" />
            </SiteLink>
          </Button>
        </div>

        {/* 4 Clear Visual Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {standardsCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.num}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#d9dfe6] bg-white shadow-sm transition-all hover:border-[#1b4b96] hover:shadow-md"
              >
                <div>
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 rounded bg-[#0e2a55]/90 px-2.5 py-1 font-mono text-xs font-semibold text-white backdrop-blur-sm">
                      {card.tag}
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center gap-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#ebf3fe] text-[#1b4b96]">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
                        {card.category}
                      </span>
                    </div>
                    <h3 className="mt-2.5 font-display text-lg sm:text-xl font-bold text-[#101820] group-hover:text-[#1b4b96]">
                      {card.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-[#44505e]">
                      {card.copy}
                    </p>
                  </div>
                </div>

                <div className="border-t border-[#f1f4f8] p-4 bg-[#f8fafc]">
                  <SiteLink
                    to={card.link}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1b4b96] hover:underline"
                  >
                    {card.actionText} &rarr;
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
