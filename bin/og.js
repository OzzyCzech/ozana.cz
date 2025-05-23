#!/usr/bin/env node
import { downloadOgImage } from "../src/lib/og-image.js";

const [, , url, fileName] = process.argv;
if (!url || !fileName) {
	console.log('Usage: node index.js <url> <soubor>');
	process.exit(1);
}
await downloadOgImage(url, fileName);