import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://ozana.cz",
	trailingSlash: "always",
	prefetch: true,
	security: {
		// Astro hashes every <script> and <style> it renders and emits the policy as a
		// <meta> tag per page. frame-ancestors can't live in a meta tag, see vercel.json.
		csp: {
			directives: [
				"default-src 'self'",
				"img-src 'self' data: https://avatars.githubusercontent.com",
				"font-src 'self'",
				"connect-src 'self'",
				"object-src 'none'",
				"base-uri 'self'",
				"form-action 'self'",
			],
			scriptDirective: {
				resources: ["'self'"],
			},
			styleDirective: {
				// inline SVG icons carry style="" attributes; allow those, keep <style> hashed
				resources: ["'self'", {resource: "'unsafe-inline'", kind: "attribute"}],
			},
		},
	},
	integrations: [sitemap()],
	output: "static",
	adapter: vercel({
		imageService: true,
		// Vercel's "sharp" dev service hardcodes a slash-less "/_image" URL, which 404s
		// under trailingSlash: "always". Astro's native sharp service builds the URL with
		// the trailing slash, so dev image optimization works. Production is unaffected
		// (it uses Vercel's /_vercel/image via the build image service).
		devImageService: "astro/assets/services/sharp",
		webAnalytics: {
			enabled: true,
		},
	}),
	vite: {
		plugins: [tailwindcss()],
	},
});
