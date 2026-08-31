import type { APIRoute } from "astro";
import { type OgPage, OG_PAGES, renderOgImage } from "../../lib/og";

export const getStaticPaths = () => OG_PAGES.map((page) => ({params: {slug: page.slug}, props: page}));

export const GET: APIRoute = async ({props}) => {
	const {headline, subline, footerLeft, footerRight} = props as OgPage;

	return new Response(await renderOgImage({headline, subline, footerLeft, footerRight}), {
		headers: {
			"Content-Type": "image/png",
			"Cache-Control": "public, max-age=31536000, immutable",
		},
	});
};
