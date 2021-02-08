const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://ozana.cz/resume', {waitUntil: 'networkidle2'});
	await page.pdf({
		path: 'static/cv.pdf',
		format: 'letter'
	});

	await browser.close();
})();