import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://ozana.cz",
	prefetch: true,
	integrations: [sitemap()],
	output: "server",
	adapter: vercel({
		imageService: true,
		devImageService: "sharp",
		webAnalytics: {
			enabled: true,
		},
	}),
	vite: {
		plugins: [tailwindcss()],
	},
});
