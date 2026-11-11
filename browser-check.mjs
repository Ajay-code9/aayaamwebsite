import {chromium} from '@playwright/test';
import fs from 'node:fs/promises';
const browser=await chromium.launch({headless:true,args:['--enable-webgl','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
const context=await browser.newContext({viewport:{width:1440,height:1000},permissions:['clipboard-read','clipboard-write']});
const page=await context.newPage(); const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
await page.goto('http://127.0.0.1:3207',{waitUntil:'networkidle'});await page.locator('canvas').waitFor();await page.waitForTimeout(2500);
await page.getByRole('button',{name:'Pause animation',exact:true}).click();
await page.locator('.world-tab').filter({hasText:'AI & Automation'}).click();await page.waitForTimeout(1700);await page.screenshot({path:'desktop-preview.png',fullPage:true});
const canvas=await page.locator('canvas').elementHandle();
for(const title of ['Fintech & Trading','Blockchain & Web3','Digital Engineering','AI & Automation']){await page.locator('.world-tab').filter({hasText:title}).click();await page.waitForTimeout(1600);if(await page.locator('canvas').evaluate((el,old)=>el===old,canvas)!==true)throw Error('Canvas was replaced');if(!(await page.locator('.scene-caption').innerText()).toLowerCase().includes(title.toLowerCase()))throw Error('Caption did not update');console.log('PASS scene: '+title);}
await page.locator('.talk-button').click();await page.getByLabel('Your name').fill('Preview Tester');await page.getByLabel('Work email').fill('preview@example.com');await page.getByLabel('What would you like to build?').fill('An intelligent enterprise platform.');await page.getByRole('button',{name:'Copy project brief',exact:true}).click();await page.getByRole('button',{name:'Project brief ready',exact:true}).waitFor();await page.getByRole('button',{name:'Close project brief',exact:true}).click();console.log('PASS contact brief');
await page.getByRole('button',{name:'Solutions',exact:true}).click();await page.locator('.dropdown').getByRole('button',{name:'Fintech & Trading'}).click();await page.waitForTimeout(500);console.log('PASS navigation');for(const viewport of [{width:1366,height:768},{width:1280,height:600}]){await page.setViewportSize(viewport);await page.evaluate(()=>scrollTo(0,0));const bottom=await page.locator('.hero-actions').evaluate(el=>el.getBoundingClientRect().bottom);if(bottom>viewport.height)throw Error('CTA below fold at '+viewport.width+'x'+viewport.height);console.log('PASS CTAs above fold '+viewport.width+'x'+viewport.height);}await page.screenshot({path:'compact-desktop-preview.png',fullPage:false});await page.setViewportSize({width:1440,height:900});
await page.goto('http://127.0.0.1:3207',{waitUntil:'networkidle'});await page.waitForTimeout(8000);if(await page.locator('.world-tab.active').innerText().then(t=>!t.includes('Fintech')))throw Error('Autoplay failed');console.log('PASS autoplay');
await page.setViewportSize({width:390,height:844});await page.goto('http://127.0.0.1:3207',{waitUntil:'networkidle'});await page.waitForTimeout(1700);await page.getByRole('button',{name:'Open navigation',exact:true}).click();await page.locator('.navigation.open').waitFor();await page.getByRole('button',{name:'Close navigation',exact:true}).click();await page.getByRole('button',{name:'Pause animation',exact:true}).click();await page.locator('.world-tab').filter({hasText:'AI & Automation'}).click();await page.waitForTimeout(1700);await page.screenshot({path:'mobile-preview.png',fullPage:true});if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw Error('Mobile overflow');console.log('PASS mobile layout and menu');
await page.emulateMedia({reducedMotion:'reduce'});await page.reload({waitUntil:'networkidle'});await page.waitForTimeout(7500);if(await page.locator('.world-tab.active').innerText().then(t=>!t.includes('AI & Automation')))throw Error('Reduced motion autoplay');console.log('PASS reduced motion');
console.log(JSON.stringify({errors}));await fs.writeFile('browser-check-results.json',JSON.stringify({passed:errors.length===0,errors},null,2));await browser.close();if(errors.length)process.exitCode=1;







