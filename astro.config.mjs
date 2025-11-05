import { defineConfig, passthroughImageService } from "astro/config";
import vercel from "@astrojs/vercel";
import sitemap from '@astrojs/sitemap';
import tailwind from '@tailwindcss/vite';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: "https://ozana.cz",
	prefetch: true,
	integrations: [sitemap(), tailwind()],
	output: "server",
	adapter: vercel({
			webAnalytics: {
				enabled: true,
			},
		}
	),
	image: {
		service: passthroughImageService(),
	},

	vite: {
		plugins: [tailwindcss()]
	}
})