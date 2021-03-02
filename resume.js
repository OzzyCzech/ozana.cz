const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('http://localhost:3000/resume', {waitUntil: 'networkidle2'});
	await page.pdf({
		path: 'public/cv.pdf',
		format: 'letter'
	});

	await browser.close();
})();