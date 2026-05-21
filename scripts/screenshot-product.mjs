import { chromium } from '/Users/ryseagency/Documents/Claude/RYSE/clients/square/lovable-source/node_modules/playwright/index.mjs';

const URL = 'https://udjskw-up.myshopify.com/products/yoko';
const OUTPUT = '/Users/ryseagency/Documents/Claude/RYSE/clients/square/shopify-rendered/yoko-fullpage.png';

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
});
const page = await context.newPage();

await page.goto(URL, { waitUntil: 'networkidle', timeout: 60000 });
await page.waitForTimeout(3000);
// Slow scroll to trigger lazy
await page.evaluate(async () => {
  const total = document.body.scrollHeight;
  let pos = 0;
  while (pos < total) {
    pos += 600;
    window.scrollTo(0, pos);
    await new Promise((r) => setTimeout(r, 300));
  }
  window.scrollTo(0, 0);
});
await page.waitForTimeout(2000);

await page.screenshot({ path: OUTPUT, fullPage: true });
console.log(`Screenshot saved -> ${OUTPUT}`);
await browser.close();
