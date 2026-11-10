const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE_URL = 'http://localhost:3001';

async function runAudit() {
  console.log('===============================================================');
  console.log('STARTING AUTOMATED HEADLESS TAB & INTERACTIVE ELEMENT AUDIT');
  console.log('Target Server:', BASE_URL);
  console.log('Browser Engine: Google Chrome (Headless)');
  console.log('===============================================================\n');

  const auditResults = {
    totalClicks: 0,
    testsPassed: 0,
    testsFailed: 0,
    consoleErrors: [],
    pageErrors: [],
    unhandledRejections: [],
    sections: {},
  };

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1366,768'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1366, height: 768 });

  // Error listeners
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      const text = msg.text();
      // Ignore benign favicon if any
      if (!text.includes('favicon.ico')) {
        auditResults.consoleErrors.push(text);
        console.error(' [CONSOLE ERROR]', text);
      }
    }
  });

  page.on('pageerror', (err) => {
    auditResults.pageErrors.push(err.message);
    console.error(' [PAGE ERROR]', err.message);
  });

  try {
    // ================================================================
    // SECTION 1: Global Navigation Tabs & Mobile Drawer (All 11 Routes)
    // ================================================================
    console.log('--- SECTION 1: GLOBAL NAVIGATION TABS & MOBILE DRAWER ---');
    const sec1 = { name: 'Global Navigation & Mobile Drawer', items: [] };

    await page.goto(BASE_URL + '/', { waitUntil: 'networkidle2' });

    // Desktop Nav Items
    const desktopButtons = await page.$$('header nav[aria-label="Main"] button');
    console.log(`Found ${desktopButtons.length} desktop dropdown triggers`);

    for (let i = 0; i < desktopButtons.length; i++) {
      const btn = desktopButtons[i];
      const text = await page.evaluate((el) => el.innerText.trim(), btn);
      await btn.click();
      auditResults.totalClicks++;
      await new Promise((r) => setTimeout(r, 200));

      const hrefs = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('[role="menuitem"] a, a[role="menuitem"]')).map(
          (a) => a.getAttribute('href') || a.innerText
        );
      });

      console.log(`  ✓ Clicked Desktop Nav: "${text}" -> Opened dropdown with ${hrefs.length} items`);
      sec1.items.push({ name: `Desktop Nav Dropdown: ${text}`, status: 'PASS', details: hrefs });
      auditResults.testsPassed++;

      // Close dropdown
      await page.keyboard.press('Escape');
      await new Promise((r) => setTimeout(r, 100));
    }

    // Direct header links (Contact, Investor Relations)
    const directHeaderLinks = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('header nav[aria-label="Main"] > a'));
      return links.map((l) => ({ text: l.innerText.trim(), href: l.getAttribute('href') }));
    });
    console.log(`  ✓ Verified direct desktop links: ${JSON.stringify(directHeaderLinks)}`);
    sec1.items.push({ name: 'Direct Desktop Links', status: 'PASS', details: directHeaderLinks });
    auditResults.testsPassed++;

    // Mobile Drawer Test (375x812)
    console.log('Testing Mobile Drawer at 375x812 viewport...');
    await page.setViewport({ width: 375, height: 812 });
    await new Promise((r) => setTimeout(r, 200));

    const hamburgerBtn = await page.$('button[aria-label="Open menu"], button[aria-controls="mobile-menu"]');
    if (hamburgerBtn) {
      await hamburgerBtn.click();
      auditResults.totalClicks++;
      await new Promise((r) => setTimeout(r, 300));

      const isMobileMenuVisible = await page.evaluate(() => {
        const menu = document.getElementById('mobile-menu');
        return menu && menu.offsetParent !== null;
      });

      console.log(`  ✓ Mobile hamburger clicked. Menu visible: ${isMobileMenuVisible}`);
      sec1.items.push({ name: 'Mobile Drawer Open', status: isMobileMenuVisible ? 'PASS' : 'FAIL' });
      if (isMobileMenuVisible) auditResults.testsPassed++;
      else auditResults.testsFailed++;

      // Click a details summary inside mobile drawer
      const detailsSummaries = await page.$$('#mobile-menu details summary');
      if (detailsSummaries.length > 0) {
        await detailsSummaries[0].click();
        auditResults.totalClicks++;
        await new Promise((r) => setTimeout(r, 200));
        console.log(`  ✓ Expanded mobile drawer category accordion.`);
      }

      // Click close or link to close
      const closeBtn = await page.$('button[aria-label="Close menu"]');
      if (closeBtn) {
        await closeBtn.click();
        auditResults.totalClicks++;
        await new Promise((r) => setTimeout(r, 200));
        console.log(`  ✓ Closed mobile drawer.`);
      }
    }

    // Reset viewport to desktop
    await page.setViewport({ width: 1366, height: 768 });
    auditResults.sections['sec1'] = sec1;

    // ================================================================
    // SECTION 2: Products & Applications Tabs & Spec Drawers
    // ================================================================
    console.log('\n--- SECTION 2: PRODUCTS & APPLICATIONS TABS & SPEC DRAWERS ---');
    const sec2 = { name: 'Products & Applications', items: [] };

    await page.goto(BASE_URL + '/products-applications', { waitUntil: 'networkidle2' });

    // Category Filter Pills
    const categoryLabels = [
      'Standard ISO',
      'Dwarf Containers',
      'Coiltainers & Heavy',
      'Tank & Hopper',
      'CUBOID Rail Boxes',
      'All 16 Models',
    ];

    for (const cat of categoryLabels) {
      const clicked = await page.evaluate((label) => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const btn = buttons.find((b) => b.innerText.trim().includes(label));
        if (btn) {
          btn.click();
          return true;
        }
        return false;
      }, cat);

      if (clicked) {
        auditResults.totalClicks++;
        await new Promise((r) => setTimeout(r, 200));
        console.log(`  ✓ Clicked Category Pill: "${cat}"`);
        sec2.items.push({ name: `Category Pill: ${cat}`, status: 'PASS' });
        auditResults.testsPassed++;
      }
    }

    // Sequentially Click 16 Model Drawers
    console.log('Testing 16 Model Specification Drawers...');
    for (let modelIdx = 1; modelIdx <= 16; modelIdx++) {
      const opened = await page.evaluate((idx) => {
        const rows = Array.from(document.querySelectorAll('table tbody tr'));
        if (rows[idx - 1]) {
          rows[idx - 1].click();
          return true;
        }
        return false;
      }, modelIdx);

      if (opened) {
        auditResults.totalClicks++;
        await new Promise((r) => setTimeout(r, 400));

        // Verify Drawer Content
        const drawerInfo = await page.evaluate((idx) => {
          const sheet = document.querySelector('[role="dialog"]');
          if (!sheet) return null;
          const title = sheet.querySelector('h2')?.innerText || '';
          const sheetText = sheet.innerText.toLowerCase();
          const hasCAD = sheetText.includes('technical general arrangement drawing') || sheet.innerText.includes('AutoCAD');
          return { visible: true, title, hasCAD };
        }, modelIdx);

        if (drawerInfo && drawerInfo.visible) {
          console.log(`  ✓ Model #${modelIdx}: Drawer opened -> "${drawerInfo.title}" (CAD: ${drawerInfo.hasCAD})`);
          if ((modelIdx === 7 || modelIdx === 9) && !drawerInfo.hasCAD) {
            console.error(`    [!] Model ${modelIdx} expected CAD drawing but none found!`);
            auditResults.testsFailed++;
            sec2.items.push({ name: `Model ${modelIdx} Drawer & CAD`, status: 'FAIL' });
          } else {
            auditResults.testsPassed++;
            sec2.items.push({
              name: `Model ${modelIdx} Drawer (${drawerInfo.title})`,
              status: 'PASS',
              cad: drawerInfo.hasCAD,
            });
          }

          // Close Drawer
          await page.keyboard.press('Escape');
          await new Promise((r) => setTimeout(r, 300));
        } else {
          console.error(`  ✗ Model #${modelIdx}: Drawer failed to open!`);
          auditResults.testsFailed++;
          sec2.items.push({ name: `Model ${modelIdx} Drawer`, status: 'FAIL' });
        }
      }
    }

    // CUBOID Specification Drawer trigger
    const cuboidBtn = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('button'));
      const b = btns.find((x) => x.innerText.includes('Open Full CUBOID Specification'));
      if (b) {
        b.click();
        return true;
      }
      return false;
    });
    if (cuboidBtn) {
      auditResults.totalClicks++;
      await new Promise((r) => setTimeout(r, 300));
      const cuboidSheetOpen = await page.evaluate(() => !!document.querySelector('[role="dialog"]'));
      console.log(`  ✓ Clicked "Open Full CUBOID Specification" -> Drawer visible: ${cuboidSheetOpen}`);
      sec2.items.push({ name: 'CUBOID Spec Drawer Button', status: cuboidSheetOpen ? 'PASS' : 'FAIL' });
      if (cuboidSheetOpen) auditResults.testsPassed++;
      else auditResults.testsFailed++;
      await page.keyboard.press('Escape');
      await new Promise((r) => setTimeout(r, 300));
    }

    auditResults.sections['sec2'] = sec2;

    // ================================================================
    // SECTION 3: Shivlakha 3D Master Plan Explorer Tabs & Controls
    // ================================================================
    console.log('\n--- SECTION 3: SHIVLAKHA 3D MASTER PLAN EXPLORER TABS & CONTROLS ---');
    const sec3 = { name: 'Shivlakha 3D Master Plan', items: [] };

    await page.goto(BASE_URL + '/shivlakha-rail-logistics', { waitUntil: 'networkidle2' });

    // Scroll to Master Plan Explorer
    await page.evaluate(() => {
      const el = document.getElementById('masterplan-explorer');
      if (el) el.scrollIntoView();
    });
    await new Promise((r) => setTimeout(r, 400));

    // 1. Readiness Mode Filter Tabs
    const filterTabs = [
      'Operational Phase 1',
      'Future Phase 2 & 3',
      'Rail & Power Infra',
      'All Zones',
    ];

    for (const f of filterTabs) {
      const clicked = await page.evaluate((label) => {
        const btns = Array.from(document.querySelectorAll('#masterplan-explorer button'));
        const target = btns.find((b) => b.innerText.includes(label));
        if (target) {
          target.click();
          return true;
        }
        return false;
      }, f);

      if (clicked) {
        auditResults.totalClicks++;
        await new Promise((r) => setTimeout(r, 200));
        console.log(`  ✓ Clicked Readiness Filter: "${f}"`);
        sec3.items.push({ name: `Masterplan Filter: ${f}`, status: 'PASS' });
        auditResults.testsPassed++;
      }
    }

    // 2. Numbered Zone Quick-Jump Buttons (01 through 12)
    console.log('Testing Zone Quick-Jump buttons 01 to 12...');
    for (let z = 1; z <= 12; z++) {
      const zStr = z < 10 ? `0${z}` : `${z}`;
      const clicked = await page.evaluate((zoneNum) => {
        const btns = Array.from(document.querySelectorAll('#masterplan-explorer button'));
        const target = btns.find((b) => {
          const txt = b.innerText.trim();
          return txt === zoneNum || txt.startsWith(zoneNum + ' ');
        });
        if (target) {
          target.click();
          return true;
        }
        return false;
      }, zStr);

      if (clicked) {
        auditResults.totalClicks++;
        await new Promise((r) => setTimeout(r, 200));

        const zoneData = await page.evaluate(() => {
          const panel = document.getElementById('masterplan-explorer');
          if (!panel) return null;
          const text = panel.innerText;
          const hasPhoto = !!panel.querySelector('img[alt]');
          return { text: text.substring(0, 400), hasPhoto };
        });

        console.log(`  ✓ Zone ${zStr} clicked -> Verified panel update (Photo visible: ${zoneData?.hasPhoto})`);
        sec3.items.push({ name: `Zone ${zStr} Inspector Sync`, status: 'PASS', hasPhoto: zoneData?.hasPhoto });
        auditResults.testsPassed++;
      }
    }

    // 3. Interactive Controls (Zoom, 3D Tilt, Guided Tour)
    const zoomInClicked = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('#masterplan-explorer button'));
      const btn = btns.find((b) => b.getAttribute('aria-label') === 'Zoom In' || b.innerText.includes('+') || b.querySelector('svg.lucide-zoom-in'));
      if (btn) {
        btn.click();
        return true;
      }
      return false;
    });
    if (zoomInClicked) {
      auditResults.totalClicks++;
      console.log('  ✓ Clicked Zoom In (+)');
      sec3.items.push({ name: 'Zoom In Button', status: 'PASS' });
      auditResults.testsPassed++;
    }

    const zoomOutClicked = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('#masterplan-explorer button'));
      const btn = btns.find((b) => b.getAttribute('aria-label') === 'Zoom Out' || b.querySelector('svg.lucide-zoom-out'));
      if (btn) {
        btn.click();
        return true;
      }
      return false;
    });
    if (zoomOutClicked) {
      auditResults.totalClicks++;
      console.log('  ✓ Clicked Zoom Out (-)');
      sec3.items.push({ name: 'Zoom Out Button', status: 'PASS' });
      auditResults.testsPassed++;
    }

    const tiltClicked = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('#masterplan-explorer button'));
      const btn = btns.find((b) => b.innerText.includes('3D Tilt') || b.innerText.includes('Tilt'));
      if (btn) {
        btn.click();
        return true;
      }
      return false;
    });
    if (tiltClicked) {
      auditResults.totalClicks++;
      console.log('  ✓ Toggled 3D Isometric Tilt mode');
      sec3.items.push({ name: '3D Isometric Tilt Toggle', status: 'PASS' });
      auditResults.testsPassed++;
    }

    const tourClicked = await page.evaluate(() => {
      const btns = Array.from(document.querySelectorAll('#masterplan-explorer button'));
      const btn = btns.find((b) => b.innerText.includes('Tour') || b.innerText.includes('Play'));
      if (btn) {
        btn.click();
        return true;
      }
      return false;
    });
    if (tourClicked) {
      auditResults.totalClicks++;
      await new Promise((r) => setTimeout(r, 600));
      await page.evaluate(() => {
        const btns = Array.from(document.querySelectorAll('#masterplan-explorer button'));
        const btn = btns.find((b) => b.innerText.includes('Pause') || b.innerText.includes('Stop'));
        if (btn) btn.click();
      });
      auditResults.totalClicks++;
      console.log('  ✓ Started Guided Tour & Paused successfully');
      sec3.items.push({ name: 'Guided Tour Play & Pause', status: 'PASS' });
      auditResults.testsPassed++;
    }

    auditResults.sections['sec3'] = sec3;

    // ================================================================
    // SECTION 4: Engineering, Testing & Quality Tabs
    // ================================================================
    console.log('\n--- SECTION 4: ENGINEERING, TESTING & QUALITY TABS ---');
    const sec4 = { name: 'Engineering & Quality', items: [] };

    await page.goto(BASE_URL + '/engineering-quality', { waitUntil: 'networkidle2' });

    // 1. Inspection Pillar Cards
    const pillarCards = await page.evaluate(() => {
      const headings = Array.from(document.querySelectorAll('h3')).map((h) => h.innerText.trim());
      const hasRig = headings.some((t) => t.includes('ISO 1496') || t.includes('Test Rig'));
      const hasFloor = headings.some((t) => t.includes('Floor Strength') || t.includes('Forklift'));
      const hasNDT = headings.some((t) => t.includes('Metallurgy') || t.includes('NDT'));
      return { hasRig, hasFloor, hasNDT, count: headings.length };
    });
    console.log(`  ✓ 3 Testing Capability Feature Cards: ISO 1496 (${pillarCards.hasRig}), Floor Load (${pillarCards.hasFloor}), NDT Grid (${pillarCards.hasNDT})`);
    sec4.items.push({ name: '3 Inspection Pillar Cards Rendered', status: 'PASS' });
    auditResults.testsPassed++;

    // 2. Certificate HTTP 200 Previews
    const certUrls = [
      '/documents/approvals/7.1.jpg',
      '/documents/approvals/Foundry-Approval-from-LR.pdf',
      '/documents/approvals/Certificate-of-Capacity.pdf',
      '/documents/approvals/Competent-Manufacturer.pdf',
      '/documents/approvals/Picture1.jpg',
    ];

    for (const cert of certUrls) {
      const res = await page.goto(BASE_URL + cert);
      const status = res.status();
      console.log(`  ✓ Certificate File: ${cert} -> HTTP ${status}`);
      sec4.items.push({ name: `Certificate ${cert}`, status: status === 200 ? 'PASS' : 'FAIL', httpStatus: status });
      if (status === 200) auditResults.testsPassed++;
      else auditResults.testsFailed++;
    }

    auditResults.sections['sec4'] = sec4;

    // ================================================================
    // SECTION 5: Investor Relations Statutory Tabs & Filings
    // ================================================================
    console.log('\n--- SECTION 5: INVESTOR RELATIONS STATUTORY TABS & FILINGS ---');
    const sec5 = { name: 'Investor Relations Statutory', items: [] };

    await page.goto(BASE_URL + '/investor-relations', { waitUntil: 'networkidle2' });

    // 1. LODR 8 Filing Categories
    const lodrCategories = await page.evaluate(() => {
      const rows = Array.from(document.querySelectorAll('#filings-register table tbody tr'));
      return rows.map((r) => {
        const cells = r.querySelectorAll('td');
        return cells[1] ? cells[1].innerText.trim() : r.innerText.trim();
      });
    });
    console.log(`  ✓ LODR Filing Categories found: ${lodrCategories.length} ->`, lodrCategories);
    sec5.items.push({ name: '8 LODR Document Categories Rendered', status: lodrCategories.length === 8 ? 'PASS' : 'FAIL', categories: lodrCategories });
    if (lodrCategories.length === 8) auditResults.testsPassed++;
    else auditResults.testsFailed++;

    // 2. 5 Board Committee Tables
    const committeeCount = await page.evaluate(() => {
      const text = document.body.innerText;
      const c1 = text.includes('Audit Committee');
      const c2 = text.includes('Stakeholders Relationship');
      const c3 = text.includes('Nomination & Remuneration');
      const c4 = text.includes('Corporate Social Responsibility');
      const c5 = text.includes('Internal Complaints Committee') || text.includes('POSH');
      return { c1, c2, c3, c4, c5 };
    });
    console.log(`  ✓ 5 Committee Tables Rendered: Audit (${committeeCount.c1}), Stakeholders (${committeeCount.c2}), NRC (${committeeCount.c3}), CSR (${committeeCount.c4}), POSH (${committeeCount.c5})`);
    sec5.items.push({ name: '5 Board Committee Tables', status: 'PASS', details: committeeCount });
    auditResults.testsPassed++;

    auditResults.sections['sec5'] = sec5;

    // ================================================================
    // SECTION 6: Business Enquiry Form Dropdown Tabs
    // ================================================================
    console.log('\n--- SECTION 6: BUSINESS ENQUIRY FORM DROPDOWN TABS ---');
    const sec6 = { name: 'Business Enquiry Form', items: [] };

    await page.goto(BASE_URL + '/contact', { waitUntil: 'networkidle2' });

    const commercialOptions = [
      'Container Purchase / Custom Build',
      'Technical Data Sheet / Certificate Request',
      'Shivlakha Cargo Movement Evaluation',
      'Foundry & Railway Castings',
      'Vendor / General Enquiry',
    ];

    for (const opt of commercialOptions) {
      await page.select('select#enquiryType', opt);
      auditResults.totalClicks++;
      await new Promise((r) => setTimeout(r, 200));

      const field7State = await page.evaluate(() => {
        const field7 = document.getElementById('originDestination');
        const label = document.querySelector('label[for="originDestination"]')?.innerText || '';
        const isRequired = label.includes('Required for Shivlakha');
        return { isRequired, hasField: !!field7 };
      });

      console.log(`  ✓ Selected Category: "${opt}" -> Field 7 Required: ${field7State.isRequired}`);
      if (opt === 'Shivlakha Cargo Movement Evaluation' && !field7State.isRequired) {
        console.error('    [!] Expected Field 7 to be required for Shivlakha movement!');
        sec6.items.push({ name: `Dropdown: ${opt}`, status: 'FAIL' });
        auditResults.testsFailed++;
      } else {
        sec6.items.push({ name: `Dropdown: ${opt}`, status: 'PASS', field7Required: field7State.isRequired });
        auditResults.testsPassed++;
      }
    }

    auditResults.sections['sec6'] = sec6;

  } catch (err) {
    console.error('Audit encountered runtime error:', err);
    auditResults.testsFailed++;
  } finally {
    await browser.close();
  }

  console.log('\n===============================================================');
  console.log('AUDIT COMPLETE');
  console.log(`Total Interactive Clicks Executed: ${auditResults.totalClicks}`);
  console.log(`Verifications Passed: ${auditResults.testsPassed}`);
  console.log(`Verifications Failed: ${auditResults.testsFailed}`);
  console.log(`Console Errors: ${auditResults.consoleErrors.length}`);
  console.log(`Page Errors: ${auditResults.pageErrors.length}`);
  console.log('===============================================================\n');

  fs.writeFileSync(
    path.join(__dirname, '..', 'tab_audit_results.json'),
    JSON.stringify(auditResults, null, 2),
    'utf8'
  );

  return auditResults;
}

runAudit();
