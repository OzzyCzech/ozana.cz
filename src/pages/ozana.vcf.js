import { VCard } from "../lib/vcard.js";
import { readFile as readFileAsync } from "node:fs/promises";
import { join } from "node:path";

export async function GET() {
	const photo = join(process.cwd(), "/public/img/roman-ozana-small.jpg")
	const vcf = new VCard();
	vcf.addName("Ožana", "Roman")
		.addJobTitle("A freelance web developer")
		.addEmail("roman@ozana.cz")
		.addPhoneNumber("+420605783455", "IPHONE")
		.addAddress("", "Prague", "Czech Republic", "14000", "Czech Republic")
		.addURL("https://ozana.cz", "WORK")
		.addURL("https://ozzyczech.cz", "BLOG")
		.addSocial("https://github.com/OzzyCzech", "GitHub", "OzzyCzech")
		.addSocial("https://stackoverflow.com/users/355316/ozzyczech/", "StackOverflow", "OzzyCzech")
		.addNickname("OzzyCzech")
		.addPhoto(await readFileAsync(photo, { encoding: "base64", flag: "r" }), "JPEG")

	return new Response(vcf.__toString(), {
		status: 200,
		headers: {
			"Content-Type": "text/vcard",
			//'Content-Type': 'text/text' // for debugging
		},
	});
}