import urlMetadata from "url-metadata";
import { Buffer } from "node:buffer";
import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";
import { writeFile as writeFileAsync } from "fs/promises";

export async function writeFile(file, content) {
	await mkdir(dirname(file), {recursive: true});
	return writeFileAsync(file, content);
}

// repository metadata if needed
// `https://api.github.com/repos/${repository}.json` repository metadata

export async function downloadOgImage(url, fileName) {
	const metadata = await urlMetadata(url);
	const ogImage = metadata['og:image'] || metadata['twitter:image'] || metadata['image'];

	if (ogImage) {
		const response = await fetch(ogImage);
		if (!response.ok) {
			throw new Error(`HTTP error! status for ${ogImage} code: ${response.status}`);
		}

		const buffer = Buffer.from(await response.arrayBuffer());
		await writeFile(fileName, buffer);
	}
}