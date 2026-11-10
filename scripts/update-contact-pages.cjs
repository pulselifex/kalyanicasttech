const fs = require("fs");
const path = require("path");

const pagesPath = path.join("src", "content", "pages.json");
const pages = JSON.parse(fs.readFileSync(pagesPath, "utf8"));

// 1. Update /contact page
const contactPage = pages.find((p) => p.url === "/contact");
if (contactPage) {
  const contactDetailsSec = contactPage.sections.find((s) => s.heading === "Contact details");
  if (contactDetailsSec) {
    contactDetailsSec.body = [
      {
        p: "Registered Office: B-144, Second Floor, DDA Shed, Phase-1, Okhla Industrial Area Phase-1, New Delhi – 110020, India. Telephone: +91-9650891119. Email: info@kalyanicasttech.com.",
      },
      {
        p: "Principal Manufacturing Works: Village Mamaria Thethar, District Rewari, Haryana – 123101, India.",
      },
      {
        p: 'Kolkata Regional Office: 53 Syed Amir Ali Avenue, 4th Floor, Unit 4F, "Shivam Chambers", Kolkata – 700019, West Bengal, India.',
      },
      {
        p: "Shivlakha Integrated Logistics Hub: Khasra no. 438, Village Shivlakha, Taluka Bhachau, District Kachchh, Gujarat – 370145, India.",
      },
      {
        p: "Canada Business & Marketing Associates: M/S ASIX GLOBAL INC., Suite #3101 - 388 Prince of Wales Drive, Mississauga, Ontario, Canada L5B0A1. Email: kalyanicasttech@gmail.com.",
      },
      {
        p: "Investor Grievance Redressal: Mr. Pankaj Kumar (Company Secretary and Compliance Officer), PT – 62/9, Ground Floor, Kalkaji Extension, New Delhi – 110019, India. Telephone: +91-9711735302. Email: cs@kalyanicasttech.com.",
      },
      {
        p: "Registrar & Share Transfer Agent (RTA): Bigshare Services Pvt. Ltd., Office No S6-2, 6th Floor, Pinnacle Business Park, Next to Ahura Centre, Mahakali Caves Road, Andheri (East), Mumbai – 400093, Maharashtra, India. Telephone: +91-22-6263-8200.",
      },
    ];
  }
}

// 2. Update /investors/investor-grievance-contact page
const grievancePage = pages.find((p) => p.url === "/investors/investor-grievance-contact");
if (grievancePage) {
  const contactSec = grievancePage.sections.find((s) => s.heading === "Contact details");
  if (contactSec) {
    contactSec.body = [
      {
        p: "Compliance Officer: Mr. Pankaj Kumar (Company Secretary and Compliance Officer).",
      },
      {
        p: "Investor Grievance Office Address: PT – 62/9, Ground Floor, Kalkaji Extension, New Delhi – 110019, India.",
      },
      {
        p: "Direct Investor Helpline: +91-9711735302 | Dedicated Compliance Email: cs@kalyanicasttech.com.",
      },
      {
        p: "Registrar & Share Transfer Agent: Bigshare Services Pvt. Ltd. (SEBI Registration No. INR000001385), Office No S6-2, 6th Floor, Pinnacle Business Park, Next to Ahura Centre, Mahakali Caves Road, Andheri (East), Mumbai – 400093. Tel: +91-22-6263-8200.",
      },
      {
        p: "Online Grievance Redressal Portal: SEBI Complaints Redress System (SCORES) at https://scores.gov.in/.",
      },
    ];
  }
}

fs.writeFileSync(pagesPath, JSON.stringify(pages, null, 2), "utf8");
console.log(
  "Successfully updated /contact and /investors/investor-grievance-contact in src/content/pages.json",
);
