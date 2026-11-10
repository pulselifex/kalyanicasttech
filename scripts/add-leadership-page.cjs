const fs = require("fs");
const path = require("path");

const pagesPath = path.join("src", "content", "pages.json");
const pages = JSON.parse(fs.readFileSync(pagesPath, "utf8"));

const exists = pages.some((p) => p.url === "/company/leadership");
if (!exists) {
  const leadershipEntry = {
    area: "Company",
    name: "Leadership & Management",
    sections: [
      {
        heading: "Board & Executive Leadership",
        body: [
          {
            p: "Kalyani Cast Tech Limited is led by experienced engineering leaders, railway rolling stock specialists, and corporate governance advisors.",
          },
        ],
      },
      {
        heading: "Executive Profiles",
        body: [
          {
            p: "Mr. Naresh Kumar (Chairman & Managing Director) - Pioneer of the Double Stack Dwarf Container (DSDC) and former technical lead at CONCOR and PRCL.",
          },
          {
            p: "Mr. Devender Kumar (Director & Legal Advisor) - Providing corporate legal counsel and Board oversight.",
          },
          {
            p: "Mr. Ratnesh Mahajan (Financial Advisor) - Chartered Accountant advising on financial strategy, taxation, and statutory audit compliance.",
          },
          {
            p: "Mr. Javed Aslam (Promoter & Strategic Advisor) - Guiding strategic corporate growth, partnerships, and logistics infrastructure development.",
          },
        ],
      },
    ],
    links: [
      { label: "Company Overview", to: "/company" },
      { label: "Our Journey", to: "/company/our-journey" },
      { label: "Corporate Governance", to: "/investors/corporate-governance" },
    ],
    url: "/company/leadership",
    seoTitle: "Board of Directors & Leadership | Kalyani Cast Tech Limited",
    meta: "Meet the executive leadership and Board of Directors of Kalyani Cast Tech Limited, led by Chairman & Managing Director Mr. Naresh Kumar.",
    h1: "Board & Leadership Team",
    hero: "Decades of specialized engineering leadership across Indian Railways, intermodal container manufacturing, and corporate governance.",
    primaryCta: "View Governance Documents",
    secondaryCta: "Contact Leadership Team",
    visual:
      "Executive leadership grid featuring authentic photography and professional biographies.",
  };

  // Insert after /company/our-journey
  const idx = pages.findIndex((p) => p.url === "/company/our-journey");
  if (idx !== -1) {
    pages.splice(idx + 1, 0, leadershipEntry);
  } else {
    pages.push(leadershipEntry);
  }

  fs.writeFileSync(pagesPath, JSON.stringify(pages, null, 2), "utf8");
  console.log("Successfully added /company/leadership to src/content/pages.json");
} else {
  console.log("/company/leadership already exists in pages.json");
}
