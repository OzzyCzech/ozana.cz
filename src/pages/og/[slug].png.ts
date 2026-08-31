import type { APIRoute } from "astro";
import { OG_PAGES, renderOgImage } from "../../lib/og";

export const getStaticPaths = () => OG_PAGES.map((page) => ({params: {slug: page.slug}, props: page}));

export const GET: APIRoute = async ({props}) => {
	const {headline, subline, byline} = props as { headline: string; subline: string; byline?: string };

	return new Response(await renderOgImage({headline, subline, byline}), {
		headers: {
			"Content-Type": "image/png",
			"Cache-Control": "public, max-age=31536000, immutable",
		},
	});
};
