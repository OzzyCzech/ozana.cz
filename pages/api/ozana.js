import VCard from 'vcard-creator';
import {readFile as readFileAsync} from 'node:fs/promises';
import {join} from 'node:path';

export default async function handler(req, res) {
  const photo = join(process.cwd(), 'public/img/roman-ozana-small.jpg')
  const vcf = new VCard();

  vcf.addName('Ožana', 'Roman')
    .addJobtitle('A freelance web developer')
    .addEmail('roman@ozana.cz')
    .addPhoneNumber('+420605783455', 'IPHONE')
    .addAddress('', '', '', 'Prague', 'Prague', '', 'Czech Republic')
    .addURL('https://ozana.cz', 'WORK')
    .addURL('https://ozzyczech.cz', 'BLOG')
    .addSocial('https://github.com/OzzyCzech', 'GitHub', 'OzzyCzech')
    .addSocial('https://stackoverflow.com/users/355316/ozzyczech/', 'StackOverflow', 'OzzyCzech')
    .addSocial('https://twitter.com/OzzyCzech', 'Twitter', 'OzzyCzech')
    .addNickname('OzzyCzech')
    .addPhoto(await readFileAsync(photo, {encoding: 'base64', flag: 'r'}), 'JPEG')

  res
    .status(200)
    .setHeader('Content-Type', 'text/vcard')
    //.setHeader('Content-Type', 'text/text') // for debug
    .send(vcf.toString())
}