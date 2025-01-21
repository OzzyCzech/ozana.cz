import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
	site: "https://ozana.cz",
	output: "static",
	integrations: [tailwind({ nesting: true })],
	adapter: vercel(),
	image: {
		service: passthroughImageService(),
	},
	experimental: {
		svg: true,
	}
})