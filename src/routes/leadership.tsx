import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/content/site";
import { SiteLink } from "@/components/site/SiteLink";
import { User, Phone, Mail, Award, ShieldCheck, ArrowRight, AlertCircle } from "lucide-react";

export const Route = createFileRoute("/leadership")({
  head: () => pageHead("/leadership"),
  component: LeadershipPage,
});

interface LeadershipMember {
  name: string;
  role: string;
  qualifications?: string;
  category: string;
  committees?: string[];
  image?: string | null;
  bio: string;
  phone?: string;
  email?: string;
  statutoryNote?: string;
}

// 1. Senior Leadership & Promoter Profiles (Sequence: 1. Naresh Kumar, 2. Javed Aslam, 3. Jai Bangani)
const seniorLeadershipMembers: LeadershipMember[] = [
  {
    name: "Mr. Naresh Kumar",
    role: "Chairman & Managing Director",
    qualifications: "B.E. Mechanical, M.Tech — IIT Madras",
    category: "Promoter & Managing Director",
    image: "/images/leadership/Naresh-Kumar.jpg",
    bio: "An M.Tech in Mechanical Engineering from IIT Madras, Naresh Kumar served Indian Railways for 17 years as a Class A officer in senior technical and operational roles, including chief executive of a railway wagon and coach manufacturing unit, and Technical Unit Head at CONCOR and Pipavav Railway Corporation Limited. He designed the Double Stack Dwarf Container, enabling double-stacked movement under electrified overhead wires. At Kalyani, he leads overall corporate management, the design and manufacturing of specialised freight containers, and the development of new-generation railway wagons to expand freight logistics capabilities.",
  },
  {
    name: "Mr. Javed Aslam",
    role: "Promoter & Strategic Advisor",
    qualifications: "B.Sc. Civil Engineering, REC / NIT Kurukshetra",
    category: "Promoter & Strategic Advisory",
    image: "/images/leadership/Javed-Aslam.jpg",
    bio: "A Civil Engineer and real estate entrepreneur with business interests in India and overseas, Javed Aslam advises the Company on strategically important matters.",
  },
  {
    name: "Mr. Jai Bangani",
    role: "Promoter Group & Strategic Advisor",
    category: "Promoter Group & Advisory",
    bio: "An entrepreneur based in Kolkata with experience in running an NBFC, Jai Bangani advises the Company on strategic planning and financial matters.",
  },
];

// 2. Other Directors (Sequence: Jayashree Kumar, Devendra Kumar)
const otherDirectors: LeadershipMember[] = [
  {
    name: "Mrs. Jayashree Kumar",
    role: "Whole-Time Director",
    qualifications: "Executive Whole-Time Director",
    category: "Executive Director",
    committees: [
      "Chairperson — Internal Complaints Committee (POSH)",
      "Member — Stakeholders Relationship Committee",
      "Member — Corporate Social Responsibility Committee",
    ],
    bio: "Executive director on the board. Chairperson of the Internal Complaints Committee (POSH) and member of the Stakeholders Relationship Committee and the Corporate Social Responsibility Committee.",
  },
  {
    name: "Mr. Devendra Kumar",
    role: "Non-Executive Director & Legal Advisor",
    qualifications: "B.A. LL.B., LL.M.",
    category: "Non-Executive Director & Legal Counsel",
    image: "/images/leadership/Devender-Kumar.jpg",
    committees: [
      "Member — Nomination & Remuneration Committee",
      "Member — Internal Complaints Committee",
    ],
    bio: "Advises the board on corporate law, regulatory compliance, commercial contracts and dispute resolution. Member of the Nomination & Remuneration Committee and the Internal Complaints Committee.",
  },
];

// 3. Independent Directors (Sequence: Kumar Sharat Chandra, Sanjeev Negi)
const independentDirectors: LeadershipMember[] = [
  {
    name: "Mr. Kumar Sharat Chandra",
    role: "Independent Director",
    qualifications: "Independent Director",
    category: "Independent Director",
    committees: [
      "Chairperson — Stakeholders Relationship Committee",
      "Member — Audit Committee",
      "Member — Nomination & Remuneration Committee",
    ],
    bio: "Chairperson of the Stakeholders Relationship Committee. Member of the Nomination & Remuneration Committee and the Audit Committee.",
  },
  {
    name: "Mr. Sanjeev Negi",
    role: "Independent Director",
    qualifications: "Independent Director",
    category: "Independent Director",
    committees: [
      "Chairperson — Audit Committee",
      "Chairperson — Nomination & Remuneration Committee",
      "Chairperson — Corporate Social Responsibility Committee",
    ],
    bio: "Chairperson of the Audit Committee, the Nomination & Remuneration Committee and the Corporate Social Responsibility Committee.",
  },
];

// 4. Key Personnel (Sequence: Amit Kumar, Pankaj Kumar, Ratnesh Mahajan)
const keyPersonnel: LeadershipMember[] = [
  {
    name: "Mr. Amit Kumar",
    role: "Chief Financial Officer",
    category: "Key Managerial Personnel",
    phone: "+91-8295850508",
    email: "cfo@kalyanicasttech.com",
    bio: "Corporate finance, accounting, audit coordination and financial reporting.",
  },
  {
    name: "Mr. Pankaj Kumar",
    role: "Company Secretary & Compliance Officer",
    category: "Key Managerial Personnel",
    phone: "+91-9711735302",
    email: "cs@kalyanicasttech.com",
    bio: "Secretarial compliance, BSE SME disclosures and investor grievance redressal.",
  },
  {
    name: "Mr. Ratnesh Mahajan",
    role: "Financial Advisor",
    qualifications: "Practising Chartered Accountant (FCA)",
    category: "Financial & Governance Advisory",
    bio: "Practising chartered accountant associated with the company since its establishment, advising on audit, direct and indirect taxation and company law.",
  },
];

function ProfileAvatar({ name, image }: { name: string; image?: string | null }) {
  if (image) {
    return (
      <img
        src={image}
        alt={name}
        className="h-full w-full object-cover object-top"
        loading="lazy"
      />
    );
  }

  const initials = name
    .replace(/^Mr\.\s*|^Mrs\.\s*/i, "")
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("");

  return (
    <div
      aria-hidden="true"
      className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-b from-[#1b4b96] to-[#0e2a55] p-4 text-white select-none"
    >
      <User className="mb-2 h-10 w-10 text-white/50" />
      <span className="font-display text-2xl font-bold tracking-wider text-white">{initials}</span>
    </div>
  );
}

function LeadershipCard({
  member,
  showContact = false,
}: {
  member: LeadershipMember;
  showContact?: boolean;
}) {
  return (
    <div className="flex flex-col overflow-hidden border border-[#d9dfe6] bg-white transition-all hover:border-[#1b4b96] hover:shadow-xs">
      {/* Header with balanced 4:5 portrait & designation */}
      <div className="flex gap-4 border-b border-[#f1f4f8] bg-gradient-to-br from-[#f8f9fa] to-white p-5">
        <div className="aspect-[4/5] w-24 shrink-0 overflow-hidden border border-[#d9dfe6] bg-[#f1f4f8] sm:w-28">
          <ProfileAvatar name={member.name} image={member.image} />
        </div>
        <div className="flex flex-1 flex-col justify-center min-w-0">
          <span className="inline-flex self-start border border-border bg-[#f1f4f8] px-2 py-0.5 font-mono text-xs font-semibold text-[#1b4b96]">
            {member.category}
          </span>
          <h3 className="mt-1.5 font-display text-lg sm:text-xl font-bold leading-snug text-[#101820]">
            {member.name}
          </h3>
          <p className="mt-1 text-sm font-semibold text-amber-700">{member.role}</p>
          {member.qualifications && (
            <p className="mt-1 font-mono text-xs text-[#44505e]">{member.qualifications}</p>
          )}
        </div>
      </div>

      {/* Bio text */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <p className="text-sm sm:text-base leading-relaxed text-[#44505e]">{member.bio}</p>

          {member.statutoryNote && (
            <div className="mt-3 flex items-start gap-2 border border-amber-200 bg-amber-50/70 p-2.5 text-xs text-amber-900">
              <AlertCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-700" />
              <p className="leading-tight">{member.statutoryNote}</p>
            </div>
          )}

          {member.committees && member.committees.length > 0 && (
            <div className="mt-4 border border-[#e2e8f0] bg-[#f8fafc] p-3 text-xs sm:text-sm">
              <span className="font-semibold text-[#101820]">Board Committees:</span>
              <ul className="mt-1.5 space-y-1 text-xs text-[#44505e]">
                {member.committees.map((c, cIdx) => (
                  <li key={cIdx} className="flex items-start gap-1.5">
                    <span className="text-[#1b4b96]">&bull;</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {showContact && (member.phone || member.email) && (
          <div className="mt-4 border-t border-[#f1f4f8] pt-3 text-sm space-y-1">
            {member.phone && (
              <p className="flex items-center gap-1.5 text-sm text-[#44505e]">
                <Phone className="h-3.5 w-3.5 text-[#1b4b96]" />
                <span>{member.phone}</span>
              </p>
            )}
            {member.email && (
              <p className="flex items-center gap-1.5 text-sm text-[#44505e]">
                <Mail className="h-3.5 w-3.5 text-[#1b4b96]" />
                <a href={`mailto:${member.email}`} className="underline hover:text-[#1b4b96]">
                  {member.email}
                </a>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function LeadershipPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-24">
      {/* Hero Banner with Approved Headline per Section 3.2 */}
      <div className="bg-[#0e2a55] px-5 py-16 text-white sm:py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <nav
            aria-label="Breadcrumb"
            className="mb-4 flex flex-wrap items-center gap-2 text-xs font-mono text-white/70"
          >
            <SiteLink to="/" className="hover:text-amber-300">
              Home
            </SiteLink>
            <span>/</span>
            <SiteLink to="/about-us" className="hover:text-amber-300">
              Company
            </SiteLink>
            <span>/</span>
            <span className="text-amber-300">Board &amp; Management</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-mono text-white/90">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            BSE SME: 544023 · Corporate Governance
          </div>
          <h1 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Engineering experience. Industrial leadership. Responsible governance.
          </h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80 sm:text-base lg:text-lg">
            Executive leadership, strategic advisors, independent directors and key personnel guiding
            rolling-stock operations, container engineering, foundry manufacturing and corporate governance.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {/* ============================================================ */}
        {/* 1. Senior Leadership & Promoter Profiles                     */}
        {/* ============================================================ */}
        <section id="senior-leadership" className="mt-14 scroll-mt-28">
          <div className="flex flex-col justify-between gap-2 border-b border-[#d9dfe6] pb-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-[#1b4b96]">Executive &amp; Strategic Leadership</p>
              <h2 className="font-display text-2xl font-bold text-[#101820] sm:text-3xl">
                Senior Leadership &amp; Promoter Profiles
              </h2>
            </div>
            <p className="text-xs text-[#44505e]">
              Executive leadership and strategic advisory
            </p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {seniorLeadershipMembers.map((member, idx) => (
              <LeadershipCard key={idx} member={member} />
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. Other Directors                                           */}
        {/* ============================================================ */}
        <section id="other-directors" className="mt-16 scroll-mt-28">
          <div className="flex flex-col justify-between gap-2 border-b border-[#d9dfe6] pb-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-[#1b4b96]">Board of Directors</p>
              <h2 className="font-display text-2xl font-bold text-[#101820] sm:text-3xl">
                Other Directors
              </h2>
            </div>
            <p className="text-xs text-[#44505e]">
              Executive and legal directors overseeing operations and compliance
            </p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2 max-w-4xl">
            {otherDirectors.map((member, idx) => (
              <LeadershipCard key={idx} member={member} />
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. Independent Directors                                     */}
        {/* ============================================================ */}
        <section id="independent-directors" className="mt-16 scroll-mt-28">
          <div className="flex flex-col justify-between gap-2 border-b border-[#d9dfe6] pb-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-[#1b4b96]">Statutory Governance</p>
              <h2 className="font-display text-2xl font-bold text-[#101820] sm:text-3xl">
                Independent Directors
              </h2>
            </div>
            <p className="text-xs text-[#44505e]">
              Independent Directors chairing core statutory committees
            </p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2 max-w-4xl">
            {independentDirectors.map((member, idx) => (
              <LeadershipCard key={idx} member={member} />
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. Key Personnel                                             */}
        {/* ============================================================ */}
        <section id="key-personnel" className="mt-16 scroll-mt-28">
          <div className="flex flex-col justify-between gap-2 border-b border-[#d9dfe6] pb-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-[#1b4b96]">Operations &amp; Compliance</p>
              <h2 className="font-display text-2xl font-bold text-[#101820] sm:text-3xl">
                Key Personnel
              </h2>
            </div>
            <p className="text-xs text-[#44505e]">Key Managerial Personnel &amp; Financial Advisory</p>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {keyPersonnel.map((member, idx) => (
              <LeadershipCard key={idx} member={member} showContact={true} />
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* Committee Composition Callout Card                            */}
        {/* ============================================================ */}
        <div className="mt-16 border border-[#b8c9e5] bg-gradient-to-r from-[#ebf3fe] to-white p-8 sm:flex sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1b4b96]">
              <Award className="h-4 w-4" />
              Statutory Committees &middot; SEBI (LODR)
            </div>
            <h3 className="mt-2 font-display text-xl font-bold text-[#101820]">
              Board Committee Charters &amp; Composition
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-[#44505e] leading-relaxed">
              Full committee rosters for Audit Committee, Stakeholders Relationship, Nomination
              &amp; Remuneration, CSR, and POSH Internal Complaints are published in the Investor
              Relations section per latest statutory filings.
            </p>
          </div>
          <div className="mt-6 sm:mt-0 sm:shrink-0">
            <SiteLink
              to="/investor-relations"
              className="inline-flex items-center justify-center bg-[#0e2a55] px-5 py-3 text-xs font-bold text-white hover:bg-[#1b4b96] transition-colors"
            >
              View Committee Tables <ArrowRight className="ml-2 h-4 w-4" />
            </SiteLink>
          </div>
        </div>
      </div>
    </div>
  );
}
