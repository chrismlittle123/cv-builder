import puppeteer from 'puppeteer';
import path from 'path';

let browser;

(async () => {
  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
    await page.pdf({ path: 'output.pdf', format: 'A4', scale: 0.9 });
    console.log('PDF generated successfully!');
  } catch (error) {
    console.error('Error generating PDF:', error);
  } finally {
    await browser.close();
  }
})(); 