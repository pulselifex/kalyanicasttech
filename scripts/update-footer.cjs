const fs = require('fs');
const path = require('path');

const footerPath = path.join(__dirname, '../src/components/site/SiteFooter.tsx');
let c = fs.readFileSync(footerPath, 'utf8');

const isCRLF = c.includes('\r\n');
const norm = (s) => s.replace(/\r\n/g, '\n');
let normC = norm(c);

const oldCol2 = `            {/* Column 2 */}
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-amber-300">
                Containers &amp; Logistics
              </p>
              <ul className="mt-3 space-y-2 text-xs">
                <li>
                  <SiteLink to="/products-applications" className="text-white/75 hover:text-white">
                    All Container Models
                  </SiteLink>
                </li>
                <li>
                  <SiteLink
                    to="/products-applications#standard-iso"
                    className="text-white/75 hover:text-white"
                  >
                    Standard ISO Series
                  </SiteLink>
                </li>
                <li>
                  <SiteLink
                    to="/products-applications#dwarf"
                    className="text-white/75 hover:text-white"
                  >
                    Dwarf &amp; Coiltainers
                  </SiteLink>
                </li>
                <li>
                  <SiteLink
                    to="/products-applications#cuboid"
                    className="text-white/75 hover:text-white"
                  >
                    CUBOID Parcel Boxes
                  </SiteLink>
                </li>
                <li>
                  <SiteLink
                    to="/products-applications#castings"
                    className="text-white/75 hover:text-white"
                  >
                    Foundry &amp; Castings
                  </SiteLink>
                </li>
                <li>
                  <SiteLink
                    to="/shivlakha-rail-logistics"
                    className="text-white/75 hover:text-white"
                  >
                    Shivlakha Rail Platform
                  </SiteLink>
                </li>
                <li>
                  <SiteLink
                    to="/shivlakha-rail-logistics#status"
                    className="text-white/75 hover:text-white"
                  >
                    Component Readiness Status
                  </SiteLink>
                </li>
              </ul>
            </div>`;

const newCol2 = `            {/* Column 2 */}
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-amber-300">
                Products &amp; Shivlakha
              </p>
              <ul className="mt-3 space-y-2 text-xs">
                <li>
                  <SiteLink to="/products-applications" className="text-white/75 hover:text-white">
                    Products Portfolio
                  </SiteLink>
                </li>
                <li>
                  <SiteLink
                    to="/products-applications#containers"
                    className="text-white/75 hover:text-white"
                  >
                    Containers
                  </SiteLink>
                </li>
                <li>
                  <SiteLink
                    to="/products-applications#wagons"
                    className="text-white/75 hover:text-white"
                  >
                    Railway Wagons
                  </SiteLink>
                </li>
                <li>
                  <SiteLink
                    to="/products-applications#foundry"
                    className="text-white/75 hover:text-white"
                  >
                    Foundry &amp; Corner Castings
                  </SiteLink>
                </li>
                <li>
                  <SiteLink
                    to="/shivlakha-rail-logistics"
                    className="text-white/75 hover:text-white"
                  >
                    Shivlakha Rail Platform
                  </SiteLink>
                </li>
              </ul>
            </div>`;

if (!normC.includes(norm(oldCol2))) {
  console.error('Could not find oldCol2 in SiteFooter.tsx');
  process.exit(1);
}

normC = normC.replace(norm(oldCol2), norm(newCol2));
if (isCRLF) {
  normC = normC.replace(/\n/g, '\r\n');
}

fs.writeFileSync(footerPath, normC, 'utf8');
console.log('Successfully updated SiteFooter.tsx');

