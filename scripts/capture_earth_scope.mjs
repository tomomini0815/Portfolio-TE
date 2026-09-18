import { chromium } from 'playwright';

async function captureScreenshots() {
  const browser = await chromium.launch({ channel: 'chrome', headless: true });
  const context = await browser.newContext({
    viewport: { width: 1600, height: 1000 },
    deviceScaleFactor: 2, // 高解像度Retinaキャプチャ
  });
  const page = await context.newPage();

  console.log('Navigating to Earth-Scope...');
  await page.goto('https://tomomini0815.github.io/Earth-Scope/', { waitUntil: 'networkidle' });
  await page.waitForTimeout(3000);

  // 1. トップ画面（3D地球儀 & アメリカ基本データ）
  console.log('Capturing 01_globe_dashboard...');
  await page.screenshot({ path: 'public/experiences/earth-scope/01_globe_dashboard.png' });

  // 2. 「平面地図」切り替え
  console.log('Clicking 平面地図...');
  const flatMapBtn = page.locator('button:has-text("平面地図")');
  if (await flatMapBtn.isVisible()) {
    await flatMapBtn.click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'public/experiences/earth-scope/02_flat_map.png' });
  }

  // 3. 日本または特定国をクリック / 詳細を見る
  console.log('Clicking 日本 in 主要国...');
  const japanBtn = page.locator('button:has-text("日本")').first();
  if (await japanBtn.isVisible()) {
    await japanBtn.click();
    await page.waitForTimeout(1500);
  }

  const detailBtn = page.locator('button:has-text("詳細を見る"), a:has-text("詳細を見る")').first();
  if (await detailBtn.isVisible()) {
    console.log('Clicking 詳細を見る...');
    await detailBtn.click();
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'public/experiences/earth-scope/03_country_detail.png' });
  }

  // 4. クイズページ
  console.log('Navigating to クイズ...');
  const quizNav = page.locator('a:has-text("クイズ"), button:has-text("クイズ")').first();
  if (await quizNav.isVisible()) {
    await quizNav.click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'public/experiences/earth-scope/04_quiz_view.png' });
  }

  // 5. 比較ページ
  console.log('Navigating to 比較...');
  const compareNav = page.locator('a:has-text("比較"), button:has-text("比較")').first();
  if (await compareNav.isVisible()) {
    await compareNav.click();
    await page.waitForTimeout(2500);
    await page.screenshot({ path: 'public/experiences/earth-scope/05_compare_view.png' });
  }

  // 6. モバイル表示（スマホ対応アピール用）
  console.log('Capturing mobile view...');
  const mobilePage = await context.newPage();
  await mobilePage.setViewportSize({ width: 390, height: 844 });
  await mobilePage.goto('https://tomomini0815.github.io/Earth-Scope/', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(2500);
  await mobilePage.screenshot({ path: 'public/experiences/earth-scope/06_mobile_view.png' });

  await browser.close();
  console.log('All screenshots captured successfully!');
}

captureScreenshots().catch(console.error);
