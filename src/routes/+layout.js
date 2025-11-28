import { defaultKeywords, siteMetadata } from '$lib/config/site.js';

export const prerender = true;
export const trailingSlash = 'ignore';

export function load() {
	return {
		site: siteMetadata,
		seo: {
			title: `${siteMetadata.name} — ${siteMetadata.tagline}`,
			description: siteMetadata.description,
			image: `${siteMetadata.url}${siteMetadata.defaultImage}`,
			keywords: defaultKeywords.join(', '),
			type: 'website'
		}
	};
}
