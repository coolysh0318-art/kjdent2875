// 사용법: node render.js  →  feed.png(1080×1350), banner.png(1920×720) 생성
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const browser = await chromium.launch();
  for (const [name, w, h] of [['feed', 1080, 1350], ['banner', 1920, 720]]) {
    const page = await browser.newPage({ viewport: { width: w, height: h } });
    await page.goto('file://' + path.join(__dirname, name + '.html'));
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: path.join(__dirname, name + '.png') });
  }
  await browser.close();
})();
