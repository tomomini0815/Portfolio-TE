import { chromium } from 'playwright';

async function captureCountryDetail() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({
    viewport: { width: 1600, height: 1000 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  console.log('Navigating to Earth-Scope...');
  await page.goto('https://tomomini0815.github.io/Earth-Scope/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);

  // 詳細を見るボタンをクリック
  console.log('Finding 詳細を見る button...');
  const detailBtn = page.locator('text=詳細を見る').first();
  if (await detailBtn.isVisible()) {
    await detailBtn.click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'public/experiences/earth-scope/03_country_modal.png' });
    console.log('Captured 03_country_modal.png');
  }

  // マイページ画面もキャプチャ
  console.log('Finding マイページ...');
  const mypageNav = page.locator('a:has-text("マイページ"), button:has-text("マイページ")').first();
  if (await mypageNav.isVisible()) {
    await mypageNav.click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'public/experiences/earth-scope/07_mypage_view.png' });
    console.log('Captured 07_mypage_view.png');
  }

  await browser.close();
}

captureCountryDetail().catch(console.error);
