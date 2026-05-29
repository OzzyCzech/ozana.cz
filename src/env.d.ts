/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare namespace NodeJS {
	interface ProcessEnv {
		readonly GITHUB_TOKEN?: string;
	}
}