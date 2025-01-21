screenshots:
	/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --headless --disable-gpu --hide-scrollbars --window-size=1920,1428 --screenshot=src/components/work/testomato/testomato.png https://www.testomato.com/
	/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --headless --disable-gpu --hide-scrollbars --window-size=1920,1428 --screenshot=src/components/work/zdrojak/zdrojak.png https://www.zdrojak.cz/
	/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --headless --disable-gpu --hide-scrollbars --window-size=1920,1428 --screenshot=src/components/work/sphido/sphido.png https://sphido.cz/

resume:
	/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --headless --disable-gpu --hide-scrollbars --no-pdf-header-footer --print-to-pdf=public/cv.pdf https://ozana.cz/resume

data:
	http --quiet https://api.stackexchange.com/2.2/users/355316?site=stackoverflow -o src/components/resume/stackoverflow.json
	http --quiet https://api.github.com/users/OzzyCzech/repos?per_page=999 -o src/components/work/github/github.json

.PHONY: screenshots resume data


