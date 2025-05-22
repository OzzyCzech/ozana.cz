screenshots:
	bin/screenshot src/components/work/testomato/testomato.png https://www.testomato.com/
	bin/screenshot src/components/work/zdrojak/zdrojak.png https://www.zdrojak.cz/

resume:
	bin/pdf public/cv.pdf https://ozana.cz/resume

og:
	bin/og.js https://github.com/OzzyCzech/cmd-dialog src/components/work/github/og/cmd-dialog.png
	bin/og.js https://github.com/sphido/sphido src/components/work/github/og/sphido.png

	# Websites
	bin/og.js https://github.com/OzzyCzech/ozzyczech.cz src/components/work/github/og/ozzyczech.png

	# PHP packages
	bin/og.js https://github.com/OzzyCzech/potrans src/components/work/github/og/potrans.png
	bin/og.js https://github.com/OzzyCzech/icalparser src/components/work/github/og/icalparser.png
	bin/og.js https://github.com/OzzyCzech/fromArray src/components/work/github/og/fromArray.png

	# NPM packages
	bin/og.js https://github.com/OzzyCzech/namedays-cs src/components/work/github/og/namedays-cs.png
	bin/og.js https://github.com/OzzyCzech/easter-date src/components/work/github/og/easter-date.png
	bin/og.js https://github.com/OzzyCzech/international-days-cs src/components/work/github/og/international-days.png

data:
	http --quiet https://api.stackexchange.com/2.2/users/355316?site=stackoverflow -o src/components/resume/stackoverflow.json
	http --quiet https://api.github.com/users/OzzyCzech/repos?per_page=999 -o src/components/work/github/github.json

.PHONY: screenshots resume data


