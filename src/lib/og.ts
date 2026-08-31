import { createRequire } from "node:module";
import { readFile } from "node:fs/promises";
import satori from "satori";
import sharp from "sharp";

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

/**
 * One entry per page that needs a social card. The slug is the file name under
 * /og/, the pathname is what Layout.astro matches against to pick the card.
 * Only the texts change between cards — the artwork is identical.
 */
export interface OgPage {
	slug: string;
	pathname: string;
	headline: string;
	subline: string;
	/**
	 * Small line next to the badge. Carries the name on every card except the
	 * home one, whose headline already is the name — set it to "" there to
	 * avoid printing "Roman Ožana" twice.
	 */
	byline?: string;
}

const BYLINE = "by Roman Ožana";

export const OG_PAGES: OgPage[] = [
	{slug: "home", pathname: "/", headline: "Roman Ožana", subline: "Full-Stack Developer", byline: ""},
	{slug: "projects", pathname: "/projects/", headline: "Projects", subline: "& open source"},
	{slug: "resume", pathname: "/resume/", headline: "Resume", subline: "building since 2009"},
	{slug: "contact", pathname: "/contact/", headline: "Contact", subline: "let's get in touch"},
];

export const ogImagePath = (pathname: string): string => {
	const page = OG_PAGES.find((candidate) => candidate.pathname === pathname);
	return `/og/${page?.slug ?? "home"}.png`;
};

const require = createRequire(import.meta.url);

/**
 * Fontsource ships disjoint unicode subsets, so basic latin and latin-ext are
 * separate files. Both are loaded and exposed as one family stack ("Inter,
 * InterExt") so satori can fall back per glyph — "Ožana" needs ž from latin-ext.
 */
const FONTS = [
	{name: "Inter", file: "inter-latin-400-normal.woff", weight: 400},
	{name: "Inter", file: "inter-latin-700-normal.woff", weight: 700},
	{name: "InterExt", file: "inter-latin-ext-400-normal.woff", weight: 400},
	{name: "InterExt", file: "inter-latin-ext-700-normal.woff", weight: 700},
] as const;

let fontCache: Awaited<ReturnType<typeof loadFonts>> | undefined;

async function loadFonts() {
	return Promise.all(
		FONTS.map(async ({name, file, weight}) => ({
			name,
			weight: weight as 400 | 700,
			style: "normal" as const,
			data: await readFile(require.resolve(`@fontsource/inter/files/${file}`)),
		})),
	);
}

const FAMILY = "Inter, InterExt";

type CardText = Pick<OgPage, "headline" | "subline" | "byline">;

const INK = "#f1f5f9";
const MUTED = "#64748b";
const LINE = "rgba(148, 163, 184, 0.10)";

/** Faint blueprint grid, drawn as absolutely positioned hairlines. */
function grid() {
	const step = 60;
	const lines = [];

	for (let x = step; x < OG_WIDTH; x += step) {
		lines.push({
			type: "div",
			props: {style: {position: "absolute", top: 0, left: x, width: 1, height: OG_HEIGHT, background: LINE}},
		});
	}
	for (let y = step; y < OG_HEIGHT; y += step) {
		lines.push({
			type: "div",
			props: {style: {position: "absolute", left: 0, top: y, width: OG_WIDTH, height: 1, background: LINE}},
		});
	}
	return lines;
}

function card({headline, subline, byline = BYLINE}: CardText) {
	return {
		type: "div",
		props: {
			style: {
				width: OG_WIDTH,
				height: OG_HEIGHT,
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				padding: "0 84px",
				fontFamily: FAMILY,
				background: "#0a1224",
				position: "relative",
			},
			children: [
				...grid(),

				// soft glow behind the headline
				{
					type: "div",
					props: {
						style: {
							position: "absolute",
							top: -200,
							left: -160,
							width: 980,
							height: 760,
							background: "radial-gradient(circle, rgba(56,110,190,0.30) 0%, rgba(10,18,36,0) 70%)",
						},
					},
				},

				// blueprint arc bleeding off the right edge, echoes the reference artwork
				{
					type: "div",
					props: {
						style: {
							position: "absolute",
							top: -120,
							right: -260,
							width: 720,
							height: 720,
							borderRadius: 360,
							border: "1px solid rgba(148,163,184,0.14)",
						},
					},
				},
				{
					type: "div",
					props: {
						style: {
							position: "absolute",
							bottom: -300,
							right: -180,
							width: 520,
							height: 520,
							borderRadius: 260,
							border: "1px solid rgba(148,163,184,0.10)",
						},
					},
				},

				{
					type: "div",
					props: {
						style: {display: "flex", flexDirection: "column", marginBottom: 40},
						children: [
							{
								type: "div",
								props: {
									style: {
										fontSize: 104,
										fontWeight: 700,
										color: INK,
										lineHeight: 1.06,
										letterSpacing: -4,
									},
									children: headline,
								},
							},
							{
								type: "div",
								props: {
									style: {
										fontSize: 104,
										fontWeight: 700,
										color: MUTED,
										lineHeight: 1.06,
										letterSpacing: -4,
									},
									children: subline,
								},
							},
						],
					},
				},

				{
					type: "div",
					props: {
						style: {
							position: "absolute",
							left: 84,
							right: 84,
							bottom: 72,
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						},
						children: [
							{
								type: "div",
								props: {
									style: {display: "flex", alignItems: "center", gap: 16},
									children: [
										{
											type: "div",
											props: {
												style: {
													display: "flex",
													border: "1px solid rgba(148,163,184,0.32)",
													borderRadius: 6,
													padding: "7px 13px",
													fontSize: 22,
													fontWeight: 700,
													letterSpacing: 1.5,
													color: "#cbd5e1",
												},
												children: "OZANA.CZ",
											},
										},
										...(byline
											? [{
												type: "div",
												props: {style: {fontSize: 24, color: MUTED}, children: byline},
											}]
											: []),
									],
								},
							},
							{
								type: "div",
								props: {
									style: {fontSize: 24, color: MUTED},
									children: "Prague · Czech Republic",
								},
							},
						],
					},
				},
			],
		},
	};
}

export async function renderOgImage(page: CardText): Promise<Uint8Array<ArrayBuffer>> {
	fontCache ??= await loadFonts();

	const svg = await satori(card(page) as Parameters<typeof satori>[0], {
		width: OG_WIDTH,
		height: OG_HEIGHT,
		fonts: fontCache,
	});

	const png = await sharp(Buffer.from(svg)).png({compressionLevel: 9}).toBuffer();

	// Buffer is backed by ArrayBufferLike, which no longer satisfies BodyInit;
	// copying into a plain Uint8Array<ArrayBuffer> keeps the Response typed.
	const body = new Uint8Array(png.byteLength);
	body.set(png);
	return body;
}
