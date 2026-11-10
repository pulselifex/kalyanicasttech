const fs = require("fs");
const path = require("path");

const pagesPath = path.join("src", "content", "pages.json");
const pages = JSON.parse(fs.readFileSync(pagesPath, "utf8"));

const certPage = pages.find((p) => p.url === "/resources/quality-certifications");
if (certPage) {
  certPage.sections = [
    {
      heading: "Verified Statutory & Technical Approvals",
      body: [
        {
          p: "Kalyani Cast Tech Limited maintains verified third-party technical approvals and manufacturing competency certifications from recognized international and national classification societies:",
        },
        {
          p: "🏅 **Lloyd's Register EMEA — Approved Manufacturer of Steel Castings (Certificate No: LR2489004WA)**\n• Validity: 01 July 2024 to 30 June 2027 (Active & Current).\n• Issuing Authority: Lloyd's Register EMEA (London, UK), signed by Clive Arnold (Lead Specialist, Metallurgy).\n• Scope: Manufacture of container corner castings in accordance with LR Rules for Materials Chapter 4, Section 9. Sand casting of annealed killed carbon-manganese steel up to 18.00 kg.\n• [View Certificate Page 1 (PNG)](/documents/approvals/LR-Foundry-Approval-2024-Page-1.png) | [View Certificate Page 2 (PNG)](/documents/approvals/LR-Foundry-Approval-2024-Page-2.png) | [Download Historical Approval (PDF)](/documents/approvals/Foundry-Approval-from-LR.pdf)",
        },
        {
          p: "🏅 **Indian Register of Shipping (IRS) — Certificate of Capacity (Report No: DLH21X014)**\n• Date of Survey: 24 June 2021.\n• Issuing Authority: Indian Register of Shipping (Surveyors: Cdr K. Dhawan & Saurabh Khullar).\n• Scope: Certification of manufacturing works capacity to produce at least 1,000 containers annually (20ft High Cube End Open ISO Containers 34T as per ISO 1496:2013 and CSC 1972) based on CONCOR EOI specifications.\n• [Download Certificate of Capacity (PDF)](/documents/approvals/Certificate-of-Capacity.pdf)",
        },
        {
          p: "🏅 **Indian Register of Shipping (IRS) — Competent Manufacturer Certificate (Report No: DLH21X014)**\n• Date of Survey: 24 June 2021.\n• Issuing Authority: Indian Register of Shipping (Surveyors: Cdr K. Dhawan & Saurabh Khullar).\n• Scope: Formal competency certification for container manufacturing (20ft High Cube End Open ISO Containers 34T) as per ISO 1496:2013 and International Convention for Safe Containers (CSC 1972).\n• [Download Competent Manufacturer Certificate (PDF)](/documents/approvals/Competent-Manufacturer.pdf)",
        },
      ],
    },
    {
      heading: "Quality Management Standards (ISO 9001:2015)",
      body: [
        {
          p: "Manufacturing operations at the Rewari plant follow strict quality assurance protocols adhering to ISO 9001 standards. Physical certificate renewal copy is currently flagged for Management Review and will be published upon Company Secretary verification.",
        },
      ],
    },
    {
      heading: "Request Technical Documentation",
      body: [
        {
          p: "To request specific material test certificates (MTCs), foundry heat records, weld quality records, or container prototype test certificates, please contact our quality department via the Business Enquiry form.",
        },
      ],
    },
  ];

  fs.writeFileSync(pagesPath, JSON.stringify(pages, null, 2), "utf8");
  console.log("Successfully updated /resources/quality-certifications in src/content/pages.json");
}
