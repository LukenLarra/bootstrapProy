const puppeteer = require('puppeteer');
const fs = require('fs');

const url = 'https://addi.ehu.es/handle/10810/1650/browse?type=dateissued';

let erauzi = async () => {
    try {
        // Launch a new browser instance
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Navigate to the webpage
        await page.goto(url, { waitUntil: 'networkidle0' });

        const data = await page.evaluate(() => {
            const selector = document.body.querySelector('select');
            //
        });

        await browser.close();
    } catch (error) {
        console.error(error);
    }
}

let selector = document.getElementById('trabajos');

