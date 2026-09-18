import { chromium } from 'playwright';

async function verifyCoverPage() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({
    viewport: { width: 1400, height: 900 },
    deviceScaleFactor: 1.5,
  });
  const page = await context.newPage();

  console.log('Navigating to PDF preview...');
  await page.goto('http://localhost:5173/Portfolio-TE/pdf', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1500);

  const coverSheet = page.locator('.pdf-sheet.cover-sheet').first();
  await coverSheet.screenshot({ path: 'public/experiences/earth-scope/verify_cover_upgraded.png' });
  console.log('Captured upgraded cover sheet.');

  await browser.close();
}

verifyCoverPage().catch(console.error);
