const { chromium } = require('playwright');
const fs = require('fs');

async function auditSite() {
  const browser = await chromium.launch({ channel: 'chrome' });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await context.newPage();

  const consoleErrors = [];
  const failedRequests = [];

  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push({ url: page.url(), text: msg.text() });
    }
  });

  page.on('requestfailed', req => {
    failedRequests.push({ url: page.url(), failedUrl: req.url(), error: req.failure()?.errorText });
  });

  const routesToTest = [
    '/',
    '/services/software-engineering/web-application-development',
    '/crm-trading',
    '/custom-software-development',
    '/mobile-apps',
    '/apis',
    '/services/ai-automation/ai-agent-development',
    '/services/blockchain/smart-contract-development',
    '/solutions/fintech',
    '/solutions/forex-brokerage',
    '/solutions/prop-trading',
    '/solutions/enterprise',
    '/industries/financial-services',
    '/products/forex-crm',
    '/company/about',
    '/company/our-approach',
    '/company/contact',
    '/portfolio',
    '/legal/terms-and-conditions',
    '/resources/blog-insights'
  ];

  const results = [];

  for (const route of routesToTest) {
    const fullUrl = `http://127.0.0.1:3207${route}`;
    try {
      const res = await page.goto(fullUrl, { waitUntil: 'networkidle', timeout: 15000 });
      const status = res?.status();
      const title = await page.title();
      
      const isPrep = await page.evaluate(() => {
        return document.body.innerText.includes('PAGE IN PREPARATION');
      });

      const hasImages = await page.evaluate(() => {
        const imgs = Array.from(document.querySelectorAll('img'));
        const broken = imgs.filter(img => !img.complete || img.naturalWidth === 0);
        return { total: imgs.length, broken: broken.map(i => i.src) };
      });

      results.push({ route, status, title, isPrep, hasImages });
    } catch (err) {
      results.push({ route, status: 'ERROR', error: err.message });
    }
  }

  // Also take screenshots of Homepage sections, Solutions page, Company page, Mobile view
  await page.goto('http://127.0.0.1:3207/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'audit_home_hero.png' });

  await page.evaluate(() => window.scrollTo(0, 1200));
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'audit_home_capabilities.png' });

  await page.evaluate(() => window.scrollTo(0, 2400));
  await page.waitForTimeout(400);
  await page.screenshot({ path: 'audit_home_casestudies.png' });

  // Solutions page
  await page.goto('http://127.0.0.1:3207/solutions/fintech', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'audit_solutions_fintech.png' });

  // Company page
  await page.goto('http://127.0.0.1:3207/company/about', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'audit_company_about.png' });

  // Contact page
  await page.goto('http://127.0.0.1:3207/company/contact', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'audit_contact.png' });

  // Mobile viewport
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('http://127.0.0.1:3207/', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'audit_mobile_home.png' });

  await page.goto('http://127.0.0.1:3207/crm-trading', { waitUntil: 'networkidle' });
  await page.screenshot({ path: 'audit_mobile_service.png' });

  fs.writeFileSync('audit_results.json', JSON.stringify({ results, consoleErrors, failedRequests }, null, 2));
  console.log('Audit completed successfully');

  await browser.close();
}

auditSite().catch(console.error);
