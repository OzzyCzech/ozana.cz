import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://ozana.cz",
	trailingSlash: "always",
	prefetch: true,
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
