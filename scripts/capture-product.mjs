import { chromium } from '/Users/ryseagency/Documents/Claude/RYSE/clients/square/lovable-source/node_modules/playwright/index.mjs';
import { writeFile, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';

const URL = 'https://udjskw-up.myshopify.com/products/yoko';
const OUTPUT = '/Users/ryseagency/Documents/Claude/RYSE/clients/square/shopify-rendered/yoko-hydrated.html';

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  userAgent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
});
const page = await context.newPage();

console.log(`Navigating to ${URL}...`);
await page.goto(URL, {
  waitUntil: 'networkidle',
  timeout: 60000,
});

console.log('Waiting for variant-selects custom element...');
await page
  .waitForFunction(
    () => {
      const vs = customElements.get('variant-selects');
      return !!vs;
    },
    { timeout: 30000 }
  )
  .catch(() => console.warn('variant-selects not hydrated within 30s'));

console.log('Waiting for product-info custom element...');
await page
  .waitForFunction(
    () => {
      const pi = customElements.get('product-info');
      return !!pi;
    },
    { timeout: 15000 }
  )
  .catch(() => console.warn('product-info not hydrated within 15s'));

// Allow extra JS settle time
await page.waitForTimeout(5000);

// Scroll to trigger lazy-loaded sections (croquis-v2, complementary products)
console.log('Scrolling to trigger lazy load...');
await page.evaluate(async () => {
  const total = document.body.scrollHeight;
  let pos = 0;
  while (pos < total) {
    pos += 800;
    window.scrollTo(0, pos);
    await new Promise((r) => setTimeout(r, 250));
  }
  window.scrollTo(0, 0);
});

await page.waitForTimeout(3000);

// Try to wait for known late sections — best effort, never throw
console.log('Waiting for late sections (croquis-v2, complementary)...');
await page
  .waitForFunction(
    () => {
      const text = document.body.innerText || '';
      return (
        text.includes('Personnaliser cet article') ||
        text.includes('architecture pensée') ||
        text.includes('L’ensemble parfait') ||
        text.includes("L'ensemble parfait")
      );
    },
    { timeout: 15000 }
  )
  .catch(() => console.warn('expected late content not detected'));

await page.waitForTimeout(2000);

const html = await page.content();
await mkdir(dirname(OUTPUT), { recursive: true });
await writeFile(OUTPUT, html, 'utf8');
console.log(`Captured ${html.length} bytes -> ${OUTPUT}`);

await browser.close();
