import { chromium } from 'playwright';

async function verifyUpdates() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({
    viewport: { width: 1400, height: 900 },
    deviceScaleFactor: 1.5,
  });
  const page = await context.newPage();

  console.log('Navigating to PDF preview...');
  await page.goto('http://localhost:5173/Portfolio-TE/pdf', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  const sheets = page.locator('.pdf-sheet');
  const count = await sheets.count();
  console.log(`Found ${count} sheets.`);

  // 1. Index Sheet (P.03)
  await sheets.nth(2).screenshot({ path: 'public/experiences/earth-scope/verify_index_revised.png' });
  console.log('Captured revised Index sheet.');

  // 2. EarthScope Part 1 (P.15)
  await sheets.nth(14).screenshot({ path: 'public/experiences/earth-scope/verify_p15_3dglobe.png' });
  console.log('Captured P.15 with 3D Globe image.');

  await browser.close();
}

verifyUpdates().catch(console.error);
