import { getPageSeo } from '$lib/seo/pageMeta.js';

export const prerender = true;

export function load() {
	return {
		seo: getPageSeo('storyListing')
	};
}
