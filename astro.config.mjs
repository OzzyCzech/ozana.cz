import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from '@tailwindcss/vite';
import vercel from "@astrojs/vercel";
import sitemap from '@astrojs/sitemap';


// https://astro.build/config
export default defineConfig({
	site: "https://ozana.cz",
	integrations: [sitemap(), tailwind()],
	output: "server",
	adapter: vercel(),
	image: {
		service: passthroughImageService(),
	},
	experimental: {
		svg: true,
	}
})