import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

/**
 * Articles by Roman on Zdroják, read from the author RSS feed at build time.
 * WordPress serves 10 items per feed page, so pages are fetched until one
 * comes back empty. Cached for a day like the GitHub data; without a cache
 * a failed fetch throws, so a broken feed fails the build instead of
 * silently publishing an empty section.
 */

const FEED_URL = 'https://zdrojak.cz/autori/roman-ozana/feed/';
const CACHE_PATH = '.cache/zdrojak/articles.json';
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours
const MAX_PAGES = 5;

export interface Article {
	title: string;
	url: string;
	/** ISO date */
	published: string;
}

const ENTITIES: Record<string, string> = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'" };

function decode(text: string): string {
	return text
		.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
		.replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
		.replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
		.replace(/&(amp|lt|gt|quot|apos);/g, (_, name) => ENTITIES[name] ?? '')
		.trim();
}

function tag(item: string, name: string): string {
	const match = item.match(new RegExp(`<${name}>([\\s\\S]*?)</${name}>`));
	return match ? decode(match[1] ?? '') : '';
}

/** The feed appends utm_* parameters to every link; the canonical URL is the bare path. */
function clean(url: string): string {
	const parsed = new URL(url);
	parsed.search = '';
	return parsed.toString();
}

export function parseFeed(xml: string): Article[] {
	return [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map(([, item = '']) => ({
		title: tag(item, 'title'),
		url: clean(tag(item, 'link')),
		published: new Date(tag(item, 'pubDate')).toISOString(),
	}));
}

async function fetchPage(page: number): Promise<Article[]> {
	const response = await fetch(page === 1 ? FEED_URL : `${FEED_URL}?paged=${page}`);
	// WordPress answers 404 for a page past the last one
	if (response.status === 404) return [];
	if (!response.ok) throw new Error(`Zdroják feed page ${page}: HTTP ${response.status}`);
	return parseFeed(await response.text());
}

function readCache(ignoreExpiry = false): Article[] | null {
	if (!existsSync(CACHE_PATH)) return null;
	try {
		const cached = JSON.parse(readFileSync(CACHE_PATH, 'utf-8'));
		if (ignoreExpiry || Date.now() - cached._timestamp < CACHE_TTL) return cached.data;
	} catch { /* ignore */ }
	return null;
}

function writeCache(data: Article[]): void {
	mkdirSync(dirname(CACHE_PATH), { recursive: true });
	writeFileSync(CACHE_PATH, JSON.stringify({ _timestamp: Date.now(), data }));
}

/** All articles, newest first. */
export async function fetchArticles(): Promise<Article[]> {
	const cached = readCache();
	if (cached) return cached;

	try {
		const articles: Article[] = [];
		for (let page = 1; page <= MAX_PAGES; page++) {
			const items = await fetchPage(page);
			if (items.length === 0) break;
			articles.push(...items);
		}
		if (articles.length === 0) throw new Error('Zdroják feed returned no items');
		articles.sort((a, b) => b.published.localeCompare(a.published));
		writeCache(articles);
		return articles;
	} catch (error) {
		const stale = readCache(true);
		if (stale) {
			console.warn(`[zdrojak] ${(error as Error).message}, using stale cache`);
			return stale;
		}
		throw error;
	}
}
