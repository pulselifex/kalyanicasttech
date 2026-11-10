/**
 * Centralised corporate, domain, and statutory configuration for Kalyani Cast Tech Limited.
 * Single source of truth for base URLs, verified statutory details, and compliance metadata.
 */

export interface CorporateConfig {
  legalName: string;
  shortName: string;
  tagline: string;
  supportingLine: string;
  cin: string;
  bseCode: string;
  siteUrl: string;
  isProduction: boolean;
  registeredOffice: {
    address: string;
    telephone: string;
    telephones: string[];
    email: string;
    status: "verified" | "awaiting_approval" | "missing";
    note: string;
  };
  corporateOffice: {
    address: string;
    telephone?: string;
    telephones?: string[];
    status: "verified" | "awaiting_approval" | "missing";
    note: string;
  };
  manufacturingWorks: {
    name: string;
    location: string;
    telephone: string;
    telephones: string[];
    status: "verified";
  };
  logisticsHub: {
    name: string;
    location: string;
    emails: string[];
    status: "phased_operations";
  };
  subsidiary?: {
    legalName: string;
    shortName: string;
    relationship: string;
    location: string;
    role: string;
    spvRole: string;
  };
  investorRelations: {
    complianceOfficer: string;
    address: string;
    telephone: string;
    email: string;
    grievancePortalUrl: string;
    status: "verified" | "awaiting_approval";
  };
  registrarAndTransferAgent?: {
    name: string;
    sebiRegNo: string;
    address: string;
    telephone: string;
  };
  regionalOffices?: {
    policyNote: string;
    kolkata?: string | null;
    canadaAssociate?: string | null;
  };
  socialLinks?: {
    youtubeUrl: string | null;
    youtubeLabel: string;
    featuredVideos: string[];
    linkedinUrl: string | null;
    linkedinLabel: string;
    linkedinStatus: string;
  };
}

const isProdEnv = typeof process !== "undefined" && process.env?.NODE_ENV === "production";
const configuredSiteUrl =
  (typeof process !== "undefined" && (process.env?.VITE_SITE_URL || process.env?.URL)) ||
  (typeof import.meta !== "undefined" &&
    (import.meta as unknown as { env?: Record<string, string> }).env?.VITE_SITE_URL) ||
  (typeof window !== "undefined" && window.location?.origin
    ? window.location.origin
    : "https://kalyanicasttech.netlify.app");

export const SITE_CONFIG: CorporateConfig = {
  legalName: "Kalyani Cast Tech Limited",
  shortName: "Kalyani Cast Tech",
  tagline: "Built for what India moves.",
  supportingLine:
    "Container manufacturing, specialised cargo applications and an evolving rail and logistics platform.",
  cin: "L26990DL2012PLC242760",
  bseCode: "544023",
  siteUrl: configuredSiteUrl,
  isProduction: isProdEnv,
  registeredOffice: {
    address:
      "B-144, Second Floor, DDA Shed, Phase-1, Okhla Industrial Area Phase-1, New Delhi – 110020, India",
    telephone: "+91-9650891119 / +91-8076389093",
    telephones: ["+91-9650891119", "+91-8076389093"],
    email: "info@kalyanicasttech.com",
    status: "verified",
    note: "Verified from approved company gap register document and statutory filings (CIN: L26990DL2012PLC242760).",
  },
  corporateOffice: {
    address: "Village Mamaria Thethar, Tehsil Khol, District Rewari, Haryana – 123101, India",
    telephone: "+91-9650891119 / +91-8076389093",
    telephones: ["+91-9650891119", "+91-8076389093"],
    status: "verified",
    note: "Works & principal manufacturing office.",
  },
  manufacturingWorks: {
    name: "Rewari Manufacturing Plant",
    location: "Village Mamaria Thethar, Tehsil Khol, District Rewari, Haryana – 123101, India",
    telephone: "+91-9650891119 / +91-8076389093",
    telephones: ["+91-9650891119", "+91-8076389093"],
    status: "verified",
  },
  logisticsHub: {
    name: "Shivlakha Rail & Logistics Platform",
    location:
      "Khasra No. 438, Village Shivlakha, Taluka Bhachau, District Kachchh, Gujarat – 370145, India",
    emails: ["terminal.head@kalyanicasttech.com", "business.development@kalyanicasttech.com"],
    status: "phased_operations",
  },
  investorRelations: {
    complianceOfficer: "Mr. Pankaj Kumar (Company Secretary and Compliance Officer)",
    address: "PT – 62/9, Ground Floor, Kalkaji Extension, New Delhi – 110019, India",
    telephone: "+91-9711735302",
    email: "cs@kalyanicasttech.com",
    grievancePortalUrl: "https://scores.gov.in/",
    status: "verified",
  },
  registrarAndTransferAgent: {
    name: "Bigshare Services Pvt. Ltd.",
    sebiRegNo: "INR000001385",
    address:
      "Office No S6-2, 6th Floor, Pinnacle Business Park, Next to Ahura Centre, Mahakali Caves Road, Andheri (East), Mumbai – 400093, Maharashtra, India",
    telephone: "+91-22-6263-8200",
  },
  regionalOffices: {
    policyNote:
      "Regional and international trade enquiries are coordinated directly through our Registered Office in New Delhi.",
    kolkata: null,
    canadaAssociate: null,
  },
  socialLinks: {
    youtubeUrl: "https://www.youtube.com/watch?v=7CTzRhpazSQ",
    youtubeLabel: "Kalyani Cast Tech on YouTube",
    featuredVideos: [
      "https://www.youtube.com/watch?v=7CTzRhpazSQ",
      "https://www.youtube.com/watch?v=wnYvf_5fSiw",
      "https://www.youtube.com/watch?v=XhjUVgQlKps",
      "https://www.youtube.com/watch?v=3vDrnZM6LTs",
    ],
    linkedinUrl: null as string | null,
    linkedinLabel: "Kalyani Cast Tech on LinkedIn",
    linkedinStatus: "pending_management_url",
  },
};

export const CANONICAL_DOMAIN = "https://kalyanicasttech.com";

export function getCanonicalUrl(path: string = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (normalizedPath === "/" || normalizedPath === "") {
    return `${CANONICAL_DOMAIN}/`;
  }
  return `${CANONICAL_DOMAIN}${normalizedPath}`;
}
