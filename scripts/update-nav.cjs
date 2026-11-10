const fs = require('fs');
const path = require('path');

const sitePath = path.join(__dirname, '../src/content/site.ts');
let c = fs.readFileSync(sitePath, 'utf8');

const startIdx = c.indexOf('export const navGroups: NavGroup[] = [');
const endIdx = c.indexOf('/** Maps a CTA label');

if (startIdx === -1 || endIdx === -1) {
  console.error('Could not find navGroups bounds');
  process.exit(1);
}

const newNav = `export const navGroups: NavGroup[] = [
  {
    label: "Company",
    to: "/about-us",
    children: [
      { label: "About Kalyani Cast Tech", to: "/about-us" },
      { label: "Board & Management", to: "/leadership" },
      { label: "Facilities & Locations", to: "/facilities" },
    ],
  },
  {
    label: "Products",
    to: "/products-applications",
    children: [
      { label: "Containers", to: "/products-applications#containers" },
      { label: "Wagons", to: "/products-applications#wagons" },
      { label: "Foundry (Corner Castings)", to: "/products-applications#foundry" },
    ],
  },
  {
    label: "Shivlakha",
    to: "/shivlakha-rail-logistics",
    children: [],
  },
  {
    label: "Engineering & Quality",
    to: "/engineering-quality",
    children: [],
  },
];

export const investorGroup: NavGroup = {
  label: "Investor Relations",
  to: "/investor-relations",
  children: [
    { label: "Statutory Filings & Governance", to: "/investor-relations" },
  ],
};

`;

c = c.substring(0, startIdx) + newNav + c.substring(endIdx);
fs.writeFileSync(sitePath, c, 'utf8');
console.log('Successfully updated site.ts navigation');

