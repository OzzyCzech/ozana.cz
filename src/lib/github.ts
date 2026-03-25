import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';

const CACHE_DIR = '.cache/github';
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

export interface GitHubRepo {
	name: string;
	full_name: string;
	description: string;
	stargazers_count: number;
	forks_count: number;
	language?: string;
	languages_url?: string;
	languages?: Record<string, number>;
	owner: {
		login: string;
		avatar_url: string;
	};
	html_url: string;
}

function getCachePath(repository: string): string {
	return join(CACHE_DIR, `${repository.replace('/', '_')}.json`);
}

function readCache(repository: string, ignoreExpiry = false): GitHubRepo | null {
	const cachePath = getCachePath(repository);
	if (!existsSync(cachePath)) return null;

	try {
		const raw = readFileSync(cachePath, 'utf-8');
		const cached = JSON.parse(raw);
		if (ignoreExpiry || Date.now() - cached._timestamp < CACHE_TTL) {
			return cached.data;
		}
	} catch { /* ignore */ }
	return null;
}

function writeCache(repository: string, data: GitHubRepo): void {
	const cachePath = getCachePath(repository);
	mkdirSync(dirname(cachePath), { recursive: true });
	writeFileSync(cachePath, JSON.stringify({ _timestamp: Date.now(), data }));
}

export async function fetchRepo(repository: string): Promise<GitHubRepo> {
	// Try cache first
	const cached = readCache(repository);
	if (cached) {
		// If cache doesn't include language breakdown, fetch it (best effort)
		if (!cached.languages) {
			const headers: Record<string, string> = {
				'Accept': 'application/vnd.github.v3+json',
			};
			const token = process.env.GITHUB_TOKEN;
			if (token) headers['Authorization'] = `Bearer ${token}`;

			try {
				const languagesUrl = cached.languages_url || `https://api.github.com/repos/${repository}/languages`;
				const langRes = await fetch(languagesUrl, { headers });
				if (langRes.ok) {
					cached.languages = await langRes.json();
					writeCache(repository, cached);
				}
			} catch { /* ignore */ }
		}
		return cached;
	}

	const headers: Record<string, string> = {
		'Accept': 'application/vnd.github.v3+json',
	};

	// Use token if available (increases rate limit from 60 to 5000/hour)
	const token = process.env.GITHUB_TOKEN;
	if (token) {
		headers['Authorization'] = `Bearer ${token}`;
	}

	const response = await fetch(`https://api.github.com/repos/${repository}`, { headers });

	if (!response.ok) {
		// On rate limit, try expired cache
		const stale = readCache(repository, true);
		if (stale) return stale;

		// Return minimal fallback
		const [owner, name] = repository.split('/');
		return {
			name,
			full_name: repository,
			description: '',
			stargazers_count: 0,
			forks_count: 0,
			owner: { login: owner, avatar_url: '' },
			html_url: `https://github.com/${repository}`,
		};
	}

	const data = await response.json();

	// Fetch language breakdown (best effort). Requires an extra API call per repo.
	try {
		const languagesUrl: string | undefined = data.languages_url || `https://api.github.com/repos/${repository}/languages`;
		if (languagesUrl) {
			const langRes = await fetch(languagesUrl, { headers });
			if (langRes.ok) {
				data.languages = await langRes.json();
			}
		}
	} catch { /* ignore */ }

	writeCache(repository, data);
	return data;
}
