export class VCard {

  constructor() {
    this.vcf = `BEGIN:VCARD\nVERSION:3.0\nREV:${new Date().toISOString()}\n`;
  }

  addJobTitle(jobtitle) {
    this.vcf += `TITLE:${jobtitle}\n`;
    return this;
  }

  addName(last, first) {
    this.vcf += `N;CHARSET=utf-8:${last};${first};;;\n`;
    this.vcf += `FN;CHARSET=utf-8:${first} ${last}\n`;
    return this;
  }

  addEmail(email) {
    this.vcf += `EMAIL;TYPE=INTERNET:${email}\n`;
    return this;
  }

  addPhoneNumber(phone, type) {
    this.vcf += `TEL;TYPE=${type}:${phone}\n`;
    return this;
  }

  addNickname(nickname) {
    this.vcf += `NICKNAME:${nickname}\n`;
    return this;
  }

  addSocial(url, type, username) {
    this.vcf += `X-SOCIALPROFILE;TYPE=${type};x-user=${username}:${url}\n`;
    return this;
  }

  addImage(image, type) {
    this.image = `PHOTO;TYPE=${type}:${image}`;
    return this;
  }

  addURL(url, type) {
    this.vcf += `URL;${type}:${url}\n`;
    return this;
  }

  addAddress(street, city, state, postalcode, country, type = 'HOME') {
    this.vcf += `ADR;TYPE=${type}:;;${street};${city};${state};${postalcode};${country}\n`;
    return this;
  }

  addPhoto(photo, type) {
    this.vcf += `PHOTO;ENCODING=b;TYPE=JPEG:${photo}\n`
    return this;
  }

  __toString() {
    return this.vcf + 'END:VCARD\n';
  }
}
