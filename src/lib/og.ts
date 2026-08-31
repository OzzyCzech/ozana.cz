import { createRequire } from "node:module";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
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
	 * Bottom-left brand line. Defaults to the name; the home card blanks it
	 * because its headline already is the name.
	 */
	footerLeft?: string;
	/** Bottom-right line. Home drops the role, its subline already says it. */
	footerRight?: string;
}

export const OG_PAGES: OgPage[] = [
	{
		slug: "home",
		pathname: "/",
		headline: "Roman Ožana",
		subline: "Full-Stack Developer",
		footerLeft: "",
		footerRight: "Prague · Czech Republic",
	},
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
 * separate files. Both are loaded per family and exposed as one family stack
 * ("Inter, InterExt") so satori can fall back per glyph — "Ožana" needs ž from
 * latin-ext. Glyphs end up embedded as paths, so rasterising never depends on
 * fonts installed on the build machine.
 */
const FONTS = [
	{pkg: "inter", file: "inter-latin-400-normal.woff", name: "Inter", weight: 400},
	{pkg: "inter", file: "inter-latin-700-normal.woff", name: "Inter", weight: 700},
	{pkg: "inter", file: "inter-latin-ext-400-normal.woff", name: "InterExt", weight: 400},
	{pkg: "inter", file: "inter-latin-ext-700-normal.woff", name: "InterExt", weight: 700},
	{pkg: "jetbrains-mono", file: "jetbrains-mono-latin-400-normal.woff", name: "Mono", weight: 400},
	{pkg: "jetbrains-mono", file: "jetbrains-mono-latin-ext-400-normal.woff", name: "MonoExt", weight: 400},
] as const;

const SANS = "Inter, InterExt";
const MONO = "Mono, MonoExt";

/**
 * Resolved against the project root rather than import.meta.url: this module is
 * bundled into .vercel/output/server/ before it runs, so a path relative to the
 * source file no longer exists. Cards are only ever rendered by `astro build`
 * and `astro dev`, both of which run from the project root.
 */
const PORTRAIT = resolve(process.cwd(), "public/img/roman-ozana.small.jpg");

const INK = "#0f172a";
const MUTED = "#64748b";
const FAINT = "#94a3b8";
const RULE = "#e2e8f0";

type CardText = Pick<OgPage, "headline" | "subline" | "footerLeft" | "footerRight">;

const PADDING_X = 84;
const PORTRAIT_SIZE = 196;
const HEADLINE_GAP = 48;
/** Width the two headline lines have to themselves, once padding and portrait are taken. */
const TEXT_WIDTH = OG_WIDTH - 2 * PADDING_X - PORTRAIT_SIZE - HEADLINE_GAP;

const HEADLINE_MAX = 92;
const HEADLINE_MIN = 60;

const NARROW = new Set([..."ijltfrI"]);

/** Rough advance width of a string in em, for Inter at weight 700. */
function widthInEm(text: string): number {
	let em = 0;
	for (const char of text) {
		if (char === " ") em += 0.26;
		else if (char === "'" || char === "’") em += 0.22;
		else if (char === "-" || char === "·") em += 0.35;
		else if (NARROW.has(char)) em += 0.3;
		else if (char >= "0" && char <= "9") em += 0.58;
		else if (char !== char.toLowerCase()) em += 0.65;
		else em += 0.52;
	}
	return em * 1.08; // safety margin, the estimate runs ~7% low
}

/**
 * Largest size at which both lines still fit on one line each. Keeps the card
 * safe when only the texts change, which is the whole point of this template.
 */
function headlineSize(headline: string, subline: string): number {
	const fits = (text: string) => TEXT_WIDTH / Math.max(widthInEm(text), 0.001);
	const size = Math.min(HEADLINE_MAX, Math.floor(Math.min(fits(headline), fits(subline))));
	return Math.max(HEADLINE_MIN, size);
}

let assets: {fonts: Awaited<ReturnType<typeof loadFonts>>; portrait: string} | undefined;

async function loadFonts() {
	return Promise.all(
		FONTS.map(async ({pkg, file, name, weight}) => ({
			name,
			weight: weight as 400 | 700,
			style: "normal" as const,
			data: await readFile(require.resolve(`@fontsource/${pkg}/files/${file}`)),
		})),
	);
}

async function loadAssets() {
	const [fonts, portrait] = await Promise.all([
		loadFonts(),
		readFile(PORTRAIT).then((buffer) => `data:image/jpeg;base64,${buffer.toString("base64")}`),
	]);
	return {fonts, portrait};
}

const div = (style: Record<string, unknown>, children?: unknown) => ({type: "div", props: {style, children}});

function card(
	{headline, subline, footerLeft = "Roman Ožana", footerRight = "Full-Stack Developer · Prague"}: CardText,
	portrait: string,
) {
	const fontSize = headlineSize(headline, subline);

	return div(
		{
			width: OG_WIDTH,
			height: OG_HEIGHT,
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
			padding: `64px ${PADDING_X}px`,
			fontFamily: SANS,
			background: "#ffffff",
			position: "relative",
		},
		[
			// masthead rule
			div({position: "absolute", top: 0, left: 0, width: OG_WIDTH, height: 6, background: INK}),

			div(
				{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					borderBottom: `2px dashed ${RULE}`,
					paddingBottom: 26,
				},
				[
					div({fontFamily: MONO, fontSize: 24, color: "#475569", letterSpacing: 1}, "~/roman$"),
					div({fontSize: 22, color: FAINT, letterSpacing: 2}, "OZANA.CZ"),
				],
			),

			div({display: "flex", alignItems: "center", justifyContent: "space-between", gap: HEADLINE_GAP}, [
				div({display: "flex", flexDirection: "column", flex: 1}, [
					div({fontSize, fontWeight: 700, color: INK, lineHeight: 1.04, letterSpacing: -3}, headline),
					div({fontSize, fontWeight: 700, color: FAINT, lineHeight: 1.04, letterSpacing: -3}, subline),
				]),
				{
					type: "img",
					props: {
						src: portrait,
						width: PORTRAIT_SIZE,
						height: PORTRAIT_SIZE,
						style: {borderRadius: PORTRAIT_SIZE / 2, border: `3px solid ${RULE}`},
					},
				},
			]),

			div(
				{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
					borderTop: `2px dashed ${RULE}`,
					paddingTop: 26,
				},
				[
					div({fontSize: 26, fontWeight: 700, color: INK}, footerLeft),
					div({fontSize: 24, color: MUTED}, footerRight),
				],
			),
		],
	);
}

export async function renderOgImage(page: CardText): Promise<Uint8Array<ArrayBuffer>> {
	assets ??= await loadAssets();

	const svg = await satori(card(page, assets.portrait) as Parameters<typeof satori>[0], {
		width: OG_WIDTH,
		height: OG_HEIGHT,
		fonts: assets.fonts,
	});

	const png = await sharp(Buffer.from(svg)).png({compressionLevel: 9}).toBuffer();

	// Buffer is backed by ArrayBufferLike, which no longer satisfies BodyInit;
	// copying into a plain Uint8Array<ArrayBuffer> keeps the Response typed.
	const body = new Uint8Array(png.byteLength);
	body.set(png);
	return body;
}
