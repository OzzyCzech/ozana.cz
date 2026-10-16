import QRCode from "qrcode";

/** Compact vCard for QR codes; the full one with photo (/ozana.vcf) is far too big to encode. */
const VCARD = [
	"BEGIN:VCARD",
	"VERSION:3.0",
	"N:Ožana;Roman;;Ing.;",
	"FN:Ing. Roman Ožana",
	"TITLE:Full-Stack Developer",
	"TEL;TYPE=CELL:+420605783455",
	"EMAIL:roman@ozana.cz",
	"URL:https://ozana.cz",
	"END:VCARD",
].join("\n");

/** Contact QR code as an SVG string, with the standard 4-module quiet zone. */
export const contactQr = () =>
	QRCode.toString(VCARD, {type: "svg", errorCorrectionLevel: "M", margin: 4, color: {dark: "#0f172a", light: "#0000"}});
