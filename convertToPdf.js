const puppeteer = require('puppeteer');

// Helper function for delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

(async () => {
  let browser;
  try {
    // Try to use system Chrome first, fallback to Puppeteer's Chrome
    const launchOptions = {
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    };
    
    // Try to find system Chrome
    try {
      browser = await puppeteer.launch({
        ...launchOptions,
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
      });
    } catch (e) {
      // Fallback to Puppeteer's Chrome
      browser = await puppeteer.launch(launchOptions);
    }
    
    const page = await browser.newPage();
    
    // Wait for the React app to load
    await page.goto('http://localhost:3000', { 
      waitUntil: 'networkidle2',
      timeout: 30000 
    });
    
    // Wait a bit more for any dynamic content
    await delay(2000);
    
    // Generate PDF with minimal margins and smaller scale
    await page.pdf({ 
      path: 'output.pdf', 
      format: 'A4', 
      scale: 0.85,
      printBackground: true,
      margin: {
        top: '0in',
        right: '0in',
        bottom: '0in',
        left: '0in'
      }
    });
    
    console.log('PDF generated successfully as output.pdf!');
  } catch (error) {
    console.error('Error generating PDF:', error.message);
    console.log('\nTroubleshooting tips:');
    console.log('1. Make sure the React app is running: npm start');
    console.log('2. Try installing Chrome: npx puppeteer browsers install chrome');
    console.log('3. Or use system Chrome if installed');
  } finally {
    if (browser) {
      await browser.close();
    }
  }
})(); 