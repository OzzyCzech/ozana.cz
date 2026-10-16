import type { APIRoute } from "astro";
import { type OgPage, OG_PAGES, renderOgImage } from "../../lib/og";

export const getStaticPaths = () => OG_PAGES.map((page) => ({params: {slug: page.slug}, props: page}));

export const GET: APIRoute = async ({props}) => {
	const {headline, subline, footer} = props as OgPage;

	return new Response(await renderOgImage({headline, subline, footer}), {
		headers: {
			"Content-Type": "image/png",
			"Cache-Control": "public, max-age=31536000, immutable",
		},
	});
};
