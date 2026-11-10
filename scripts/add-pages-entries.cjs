const fs = require('fs');
const path = require('path');

const pagesPath = path.join(__dirname, '../src/content/pages.json');
const pages = JSON.parse(fs.readFileSync(pagesPath, 'utf8'));

const newPages = [
  {
    area: 'Company',
    name: 'Our Journey',
    url: '/our-journey',
    seoTitle: 'Our Journey | Kalyani Cast Tech Limited',
    meta: 'Chronological timeline of verified milestones from 2012 Rewari Works incorporation to 2026 Shivlakha GCT terminal operations and rolling stock development.',
    h1: 'Our Journey: From Foundry to Rail-Linked Logistics',
    hero: '14+ years of verified technical breakthroughs, from specialized freight container design to public BSE SME listing and multi-modal terminal commissioning.',
    sections: [
      {
        heading: 'Chronological Development Ledger',
        body: [{ p: 'Verified corporate and operational milestones across 14+ years.' }]
      }
    ],
    links: [
      { label: 'Manufacturing', to: '/manufacturing' },
      { label: 'Shivlakha Platform', to: '/shivlakha-rail-logistics' }
    ]
  },
  {
    area: 'Manufacturing',
    name: 'Innovation',
    url: '/innovation',
    seoTitle: 'Innovation & Engineering Development | Kalyani Cast Tech Limited',
    meta: 'Application-specific hardware innovations including the Double-Stack Dwarf Container, 304-grade stainless steel salt containers, CUBOID modular logistics, and RDSO concept-approved wagons.',
    h1: 'Engineering Innovation & Custom Development',
    hero: 'Genuine engineering developments solving freight constraints across Indian Railways and multi-modal corridors.',
    sections: [
      {
        heading: 'Hardware Innovations',
        body: [{ p: 'Problem-solving engineering hardware for specialized cargo.' }]
      }
    ],
    links: [
      { label: 'Products & Applications', to: '/products-applications' },
      { label: 'Engineering & Quality', to: '/engineering-quality' }
    ]
  },
  {
    area: 'Showcase',
    name: 'Gallery',
    url: '/gallery',
    seoTitle: 'Visual Gallery: Plants, Products & Operations | Kalyani Cast Tech Limited',
    meta: 'Authentic photographic record of Kalyani Cast Tech Limited: Rewari works, container assembly, foundry castings, and the Shivlakha rail terminal in Kachchh.',
    h1: 'Visual Gallery: Plants, Products & Operations',
    hero: 'Authentic visual showcase of genuine manufacturing facilities, finished container models, and the 114-acre Shivlakha multimodal platform.',
    sections: [
      {
        heading: 'Photographic Showcase',
        body: [{ p: 'Visual documentation of genuine plants, processes, and terminal operations.' }]
      }
    ],
    links: [
      { label: 'Manufacturing Facilities', to: '/facilities' },
      { label: 'Shivlakha Rail Logistics', to: '/shivlakha-rail-logistics' }
    ]
  }
];

newPages.forEach(np => {
  if (!pages.some(p => p.url === np.url)) {
    pages.push(np);
  }
});

fs.writeFileSync(pagesPath, JSON.stringify(pages, null, 2) + '\n', 'utf8');
console.log('Successfully added our-journey, innovation, and gallery to pages.json');

