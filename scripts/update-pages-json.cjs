const fs = require('fs');
const path = require('path');

const pagesPath = path.join(__dirname, '../src/content/pages.json');
const pages = JSON.parse(fs.readFileSync(pagesPath, 'utf8'));

const updates = {
  '/': {
    h1: 'Built for what India moves.',
    seoTitle: 'Kalyani Cast Tech Limited | Built for what India moves.',
  },
  '/about-us': {
    h1: 'One company. Two plants. A rail-linked cargo story still being written.',
    seoTitle: 'About Us | Kalyani Cast Tech Limited',
  },
  '/leadership': {
    h1: 'Engineering experience. Industrial leadership. Responsible governance.',
    seoTitle: 'Board & Management | Kalyani Cast Tech Limited',
  },
  '/products-applications': {
    h1: 'The cargo picks the container. We engineer it.',
    seoTitle: 'Products & Applications | Kalyani Cast Tech Limited',
  },
  '/facilities': {
    h1: 'Two plants. One engineering standard.',
    seoTitle: 'Facilities & Locations | Kalyani Cast Tech Limited',
  },
  '/engineering-quality': {
    h1: 'From design to testing — engineering under one roof.',
    seoTitle: 'Engineering & Quality | Kalyani Cast Tech Limited',
  },
  '/shivlakha-rail-logistics': {
    h1: 'Manufacturing meets rail-linked logistics.',
    seoTitle: 'Shivlakha Rail Logistics Platform | Kalyani Cast Tech Limited',
  },
  '/investor-relations': {
    h1: 'Listed. Disclosed. Audited.',
    seoTitle: 'Investor Relations | Kalyani Cast Tech Limited (BSE SME: 544023)',
  },
  '/contact': {
    h1: "Tell us what you are moving. We'll route it to the right desk.",
    seoTitle: 'Contact & Commercial Enquiry | Kalyani Cast Tech Limited',
  },
};

pages.forEach((p) => {
  if (updates[p.url]) {
    p.h1 = updates[p.url].h1;
    p.seoTitle = updates[p.url].seoTitle;
  }
});

fs.writeFileSync(pagesPath, JSON.stringify(pages, null, 2) + '\n', 'utf8');
console.log('Successfully updated pages.json');

