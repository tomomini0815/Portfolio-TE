import { chromium } from 'playwright';

async function verifyPdfPages() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({
    viewport: { width: 1400, height: 900 },
    deviceScaleFactor: 1.5,
  });
  const page = await context.newPage();

  console.log('Navigating to PDF preview...');
  await page.goto('http://localhost:5173/Portfolio-TE/pdf', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // 全シート取得
  const sheets = page.locator('.pdf-sheet');
  const count = await sheets.count();
  console.log(`Found ${count} PDF sheets.`);

  if (count >= 3) {
    // P.03 (Index)
    await sheets.nth(2).screenshot({ path: 'public/experiences/earth-scope/verify_index_sheet.png' });
    console.log('Captured Index sheet.');
  }

  if (count >= 16) {
    // P.15 (EarthScope Part 1)
    await sheets.nth(14).screenshot({ path: 'public/experiences/earth-scope/verify_p15_earthscope.png' });
    console.log('Captured P.15 EarthScope Part 1.');
    // P.16 (EarthScope Part 2)
    await sheets.nth(15).screenshot({ path: 'public/experiences/earth-scope/verify_p16_earthscope.png' });
    console.log('Captured P.16 EarthScope Part 2.');
  }

  await browser.close();
}

verifyPdfPages().catch(console.error);
