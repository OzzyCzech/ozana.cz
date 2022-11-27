screenshots:
	yarn add puppeteer
	node screenshot.js https://www.testomato.com ./pages/work/testomato.png
	node screenshot.js https://www.zdrojak.cz ./pages/work/zdrojak.png
	node screenshot.js https://www.sphido.org ./pages/work/sphido.png
	yarn remove puppeteer

resume:
	yarn add puppeteer
	rm -rf public/cv.pdf && node resume.js && open public/cv.pdf
	yarn remove puppeteer

data:

	http --quiet https://api.stackexchange.com/2.2/users/355316?site=stackoverflow -o data/stackoverflow.json
	http --quiet https://api.github.com/users/OzzyCzech/repos?per_page=999 -o data/github.json

clean:
	rm -rf node_modules
	rm -rf yarn.lock
	rm -rf .next

.PHONY: screenshots resume data clean
