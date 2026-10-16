#!/usr/bin/env node
/**
 * Prints the resume page of a built site to cv.pdf.
 *
 *   node bin/cv.mjs [static-dir]     (default: .vercel/output/static)
 *
 * Serves the static output on a random local port, opens /resume/ in headless
 * Chromium with print media and writes <static-dir>/cv.pdf, so the PDF always
 * comes from the exact build that gets deployed. Exits non-zero on any failure,
 * a missing or stale PDF must never ship silently.
 */
import { createServer } from "node:http";
import { readFile, stat, writeFile } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";
import { chromium } from "playwright";

const root = resolve(process.argv[2] ?? ".vercel/output/static");

const TYPES = {
	".html": "text/html; charset=utf-8",
	".css": "text/css",
	".js": "text/javascript",
	".svg": "image/svg+xml",
	".png": "image/png",
	".jpg": "image/jpeg",
	".webp": "image/webp",
	".avif": "image/avif",
	".woff": "font/woff",
	".woff2": "font/woff2",
	".json": "application/json",
};

/** Static file server with the same trailing-slash → index.html resolution as Vercel. */
const server = createServer(async (req, res) => {
	try {
		let path = normalize(decodeURIComponent(new URL(req.url ?? "/", "http://x").pathname));
		if (path.endsWith("/")) path += "index.html";
		const file = join(root, path);
		if (!file.startsWith(root)) throw new Error("outside root");
		const info = await stat(file);
		if (!info.isFile()) throw new Error("not a file");
		res.writeHead(200, {"Content-Type": TYPES[extname(file)] ?? "application/octet-stream"});
		res.end(await readFile(file));
	} catch {
		res.writeHead(404).end();
	}
});

await new Promise((done) => server.listen(0, "127.0.0.1", done));
const {port} = /** @type {import("node:net").AddressInfo} */ (server.address());

const browser = await chromium.launch();
try {
	const page = await browser.newPage();
	// /_vercel/* only exists on Vercel (image optimisation, analytics); everything else must load
	const onVercelOnly = (url) => new URL(url).pathname.startsWith("/_vercel/");
	const failed = [];
	page.on("requestfailed", (request) => {
		if (!onVercelOnly(request.url())) failed.push(request.url());
	});
	page.on("response", (response) => {
		if (response.status() >= 400 && !onVercelOnly(response.url())) failed.push(`${response.status()} ${response.url()}`);
	});

	await page.emulateMedia({media: "print"});
	const response = await page.goto(`http://127.0.0.1:${port}/resume/`, {waitUntil: "networkidle"});
	if (!response?.ok()) throw new Error(`/resume/ answered ${response?.status()}`);
	await page.evaluate(() => document.fonts.ready);
	// icons are lazy <img>s; load them all before printing so the PDF never ships without them
	const missing = await page.evaluate(async () => {
		for (const img of document.images) img.loading = "eager";
		await Promise.all([...document.images].map((img) => img.decode().catch(() => {})));
		return [...document.images].filter((img) => !img.complete || img.naturalWidth === 0).map((img) => img.src);
	});
	failed.push(...missing.filter((src) => !onVercelOnly(src)));
	if (failed.length) throw new Error(`resources failed to load:\n  ${failed.join("\n  ")}`);

	const pdf = await page.pdf({preferCSSPageSize: true, printBackground: true});
	const out = join(root, "cv.pdf");
	await writeFile(out, pdf);
	console.log(`cv.pdf: ${(pdf.byteLength / 1024).toFixed(0)} KB → ${out}`);
} finally {
	await browser.close();
	server.close();
}
