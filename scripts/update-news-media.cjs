const fs = require("fs");
const path = require("path");

const pagesPath = path.join("src", "content", "pages.json");
const pages = JSON.parse(fs.readFileSync(pagesPath, "utf8"));

const newsPage = pages.find((p) => p.url === "/resources/news-media");
if (newsPage) {
  newsPage.sections = [
    {
      heading: "Railway Innovation & Video Demonstrations",
      body: [
        {
          p: "Kalyani Cast Tech has pioneered multi-stack container train technology in India. Watch authentic operational demonstrations and trial runs below:",
        },
        {
          p: "▶️ [Double Stack Dwarf Container Train Operations (YouTube)](https://www.youtube.com/watch?v=7CTzRhpazSQ) — Demonstration of commercial container train transit under electrified overhead equipment.",
        },
        {
          p: "▶️ [Dwarf Container Rake Run Demonstration (YouTube)](https://www.youtube.com/watch?v=wnYvf_5fSiw) — Operational rake transit across Indian Railway freight corridors.",
        },
        {
          p: "▶️ [Inaugural Trial Video Link (YouTube)](https://www.youtube.com/watch?v=XhjUVgQlKps) — Trial run sequence of indigenous container designs.",
        },
        {
          p: "▶️ [High Capacity Container Engineering (YouTube)](https://www.youtube.com/watch?v=3vDrnZM6LTs) — Technical showcase of specialized cargo container applications.",
        },
      ],
    },
    {
      heading: "Historical Press Clippings & Railway Trials",
      body: [
        {
          p: "Archival media coverage and railway notifications documenting the development and commercial adoption of the Double Stack Dwarf Container (DSDC):",
        },
        {
          p: "📰 [2nd March 2017: First Trial Run for Double Stack Dwarf Container Trains Inaugurated by Hon. Minister for Railways (View Full Image)](/images/media/2nd-March-2017-First-Trial-Run-for-Double-Stack-Dwarf-Container-Trains-Inaugurated-by-Hon-MR-Through-Video-Link.jpg)",
        },
        {
          p: "📰 [2016 Press Coverage: Indian Railways Plan to Introduce Dwarf Containers Designed and Developed by Shri Naresh Kumar (View Full Image)](/images/media/2016-Indian-Railways-Plan-to-Introduce-Dwarf-ContainersDesigned-and-Developed-by-Shri-Naresh-Kumar-Director-Kalyani-Cast-Tech.jpg)",
        },
        {
          p: "📰 [18th January 2014: Commencement of Trial Run for Special Container Rakes (View Full Image)](/images/media/18th-Jan-2014-Commencement-of-Trail-Run.jpg)",
        },
        {
          p: "📰 [March 2014: Commercial Operations Commencement Record (View Full Image)](/images/media/Start-of-Commercial-Operations-M-arch-2014.jpg)",
        },
        {
          p: "📰 [December 2019: Presentation of Advanced Container Concepts at Vigyan Bhawan, New Delhi (View Full Image)](/images/media/Dec-2019-presentation-of-new-ideas-in-Vighyan-Bhawan-New-Delhi.png)",
        },
        {
          p: "National Press Gallery: [Clipping 1](/images/media/3.1.jpg) | [Clipping 2](/images/media/4.1.jpg) | [Clipping 3](/images/media/5.1.jpg) | [Clipping 4](/images/media/6.1.jpg) | [Clipping 5](/images/media/7.1.jpg) | [Clipping 6](/images/media/8.1.jpg) | [Clipping 7](/images/media/9.1.jpg) | [Clipping 8](/images/media/12.1.png) | [Clipping 9](/images/media/13.1.png) | [Clipping 10](/images/media/14.1.png) | [Clipping 11](/images/media/15.1.png) | [Clipping 12](/images/media/16.1.png) | [Clipping 13](/images/media/17.1.jpg)",
        },
      ],
    },
    {
      heading: "Company announcements and disclosures",
      body: [
        {
          p: "Statutory investor disclosures, quarterly announcements, and stock exchange intimations are regularly published in the dedicated Investor Relations portal.",
        },
      ],
    },
    {
      heading: "Media enquiries",
      body: [
        {
          p: "For media or corporate communication enquiries, contact the Corporate Communications team at info@kalyanicasttech.com.",
        },
      ],
    },
  ];

  fs.writeFileSync(pagesPath, JSON.stringify(pages, null, 2), "utf8");
  console.log("Successfully updated /resources/news-media in src/content/pages.json");
}
