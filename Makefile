screenshots:
	bin/screenshot src/components/work/testomato/testomato.png https://www.testomato.com/
	bin/screenshot src/components/work/zdrojak/zdrojak.png https://www.zdrojak.cz/

resume:
	bin/pdf public/cv.pdf https://ozana.cz/resume

og:
	bin/og.js https://github.com/OzzyCzech/ozzyczech.cz src/og/ozzyczech.png
	bin/og.js https://github.com/OzzyCzech/icalparser src/og/icalparser.png
	bin/og.js https://github.com/OzzyCzech/cmd-dialog src/og/cmd-dialog.png
	bin/og.js https://github.com/OzzyCzech/potrans src/og/potrans.png
	# Nodejs modules
	bin/og.js https://github.com/OzzyCzech/namedays-cs src/og/namedays-cs.png
	bin/og.js https://github.com/OzzyCzech/easter-date src/og/easter-date.png
	bin/og.js https://github.com/OzzyCzech/international-days-cs src/og/international-days.png
data:
	http --quiet https://api.stackexchange.com/2.2/users/355316?site=stackoverflow -o src/components/resume/stackoverflow.json
	http --quiet https://api.github.com/users/OzzyCzech/repos?per_page=999 -o src/components/work/github/github.json

.PHONY: screenshots resume data


