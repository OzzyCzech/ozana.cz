screenshots:
	/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --headless --disable-gpu --hide-scrollbars --window-size=1920,1428 --screenshot=pages/work/testomato.png https://www.testomato.com/
	/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --headless --disable-gpu --hide-scrollbars --window-size=1920,1428 --screenshot=pages/work/zdrojak.png   https://www.zdrojak.cz/
	/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --headless --disable-gpu --hide-scrollbars --window-size=1920,1428 --screenshot=pages/work/sphido.png    https://sphido.org/

resume:
	/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --headless --disable-gpu --hide-scrollbars --no-pdf-header-footer --print-to-pdf=public/cv.pdf https://ozana.cz/resume

data:
	http --quiet https://api.stackexchange.com/2.2/users/355316?site=stackoverflow -o data/stackoverflow.json
	http --quiet https://api.github.com/users/OzzyCzech/repos?per_page=999 -o data/github.json

clean:
	rm -rf node_modules
	rm -rf yarn.lock
	rm -rf .next

.PHONY: screenshots resume data clean
