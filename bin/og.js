#!/usr/bin/env node
import urlMetadata from 'url-metadata';
import { Buffer } from 'node:buffer';
import { mkdir, writeFile as writeFileAsync } from "node:fs/promises";
import { dirname } from "node:path";

// This script downloads the Open Graph image from a given URL and saves it to a specified file.

export async function writeFile(file, content) {
	await mkdir(dirname(file), {recursive: true});
	return writeFileAsync(file, content);
}

async function downloadOgImage(url, fileName) {
	try {
		const metadata = await urlMetadata(url);
		const ogImage = metadata['og:image'] || metadata['twitter:image'] || metadata['image'];

		if (ogImage) {
			const response = await fetch(ogImage);
			if (!response.ok) {
				throw new Error(`HTTP error! status for ${ogImage} code: ${response.status}`);
			}

			const buffer = Buffer.from(await response.arrayBuffer());
			await writeFile(fileName, buffer);
			console.log(`Image saved as ${fileName}`);
		}
	} catch (err) {
		console.log(err);
	}
}

const [, , url, fileName] = process.argv;
if (!url || !fileName) {
	console.log('Usage: node index.js <url> <soubor>');
	process.exit(1);
}
await downloadOgImage(url, fileName);