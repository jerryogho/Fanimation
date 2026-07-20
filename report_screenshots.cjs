const { chromium } = require("C:\\Users\\jerry\\.cache\\codex-runtimes\\codex-primary-runtime\\dependencies\\node\\node_modules\\playwright");
(async()=>{
 const browser = await chromium.launch({headless:true});
 const page = await browser.newPage({viewport:{width:1440,height:1000}, deviceScaleFactor:1});
 await page.goto('http://127.0.0.1:5173',{waitUntil:'networkidle'});
 await page.screenshot({path:'report_assets/homepage.png',fullPage:false});
 await page.locator('#products').scrollIntoViewIfNeeded(); await page.waitForTimeout(300); await page.screenshot({path:'report_assets/products.png',fullPage:false});
 await page.getByRole('button',{name:'View Details'}).first().click(); await page.waitForTimeout(200); await page.screenshot({path:'report_assets/product-modal.png',fullPage:false});
 await page.getByRole('button',{name:'Close'}).click(); await page.locator('#gallery').scrollIntoViewIfNeeded(); await page.waitForTimeout(200); await page.screenshot({path:'report_assets/gallery.png',fullPage:false});
 await page.locator('#contact').scrollIntoViewIfNeeded(); await page.waitForTimeout(200); await page.screenshot({path:'report_assets/contact.png',fullPage:false});
 const mobile = await browser.newPage({viewport:{width:390,height:844},deviceScaleFactor:1}); await mobile.goto('http://127.0.0.1:5173',{waitUntil:'networkidle'}); await mobile.screenshot({path:'report_assets/mobile.png',fullPage:false});
 await browser.close();
})();
