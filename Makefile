screenshots:
	yarn add puppeteer
	node screenshot.js https://www.testomato.com ./pages/work/testomato.png
	node screenshot.js https://www.zdrojak.cz ./pages/work/zdrojak.png
	node screenshot.js https://www.sphido.org ./pages/work/sphido.png
	yarn remove puppeteer

resume:
	rm -rf public/cv.pdf && node resume.js && open public/cv.pdf

data:

	curl --silent 'https://api.stackexchange.com/2.2/users/355316?site=stackoverflow' \
	  -H 'Connection: keep-alive' \
	  -H 'Pragma: no-cache' \
	  -H 'Cache-Control: no-cache' \
	  -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.121 Safari/537.36' \
	  -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9' \
	  --compressed -o data/stackoverflow.json

	curl --silent "https://api.github.com/users/OzzyCzech/repos?per_page=999" -o data/github.json

clean:
	rm -rf node_modules
	rm -rf yarn.lock
	rm -rf .next

.PHONY: screenshots resume data clean
