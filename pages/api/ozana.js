import VCard from 'vcard-creator';
import {readFile as readFileAsync} from 'node:fs/promises';
import {join} from 'node:path';

class MyVcard extends VCard {
	addSocial(type, url, user) {
		this.setProperty(type, `X-SOCIALPROFILE${type !== '' ? `;type=${type}` : ''}${user !== '' ? `;x-user=${user}` : ''}`, url)
		return this;
	}

	addNickname(nickname) {
		this.setProperty('nickname', `NICKNAME`, nickname)
		return this;
	}
}

export default async function handler(req, res) {
	const photo = join(process.cwd(), 'public/img/roman-ozana-small.jpg')
	const vcf = new MyVcard();

	vcf.addName('Ožana', 'Roman')
		.addJobtitle('A freelance web developer')
		.addEmail('roman@ozana.cz')
		.addPhoneNumber('+420605783455', 'IPHONE')
		.addAddress('', '', '', 'Prague', 'Prague', '', 'Czech Republic')
		.addURL('https://ozana.cz', 'WORK')
		.addSocial('Twitter', 'https://twitter.com/OzzyCzech', 'OzzyCzech')
		.addSocial('GitHub', 'https://github.com/OzzyCzech', 'OzzyCzech')
		.addNickname('OzzyCzech')
		.addPhoto(await readFileAsync(photo, {encoding: 'base64', flag: 'r'}), 'JPEG')

	res
		.status(200)
		.setHeader('Content-Type', 'text/vcard')
		.setHeader('Content-Type', 'text/text') // for debug
		.send(vcf.toString())
}