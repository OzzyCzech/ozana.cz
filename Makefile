screenshots:
	bin/screenshot src/components/work/testomato/testomato.png https://www.testomato.com/
	bin/screenshot src/components/work/zdrojak/zdrojak.png https://www.zdrojak.cz/

resume:
	bin/pdf public/cv.pdf https://ozana.cz/resume

data:
	http --quiet https://api.stackexchange.com/2.2/users/355316?site=stackoverflow -o src/components/resume/stackoverflow.json
	http --quiet https://api.github.com/users/OzzyCzech/repos?per_page=999 -o src/components/work/github/github.json

.PHONY: screenshots resume data


