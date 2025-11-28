import { defaultKeywords, siteMetadata } from '$lib/config/site.js';
import { metadata as storyMetadata } from '$lib/Story/20250711.svx';

export const prerender = true;

const makeAbsolute = (path) => {
	if (!path) return undefined;
	if (/^https?:\/\//.test(path)) return path;
	return `${siteMetadata.url}${encodeURI(path.startsWith('/') ? path : `/${path}`)}`;
};

const buildStructuredData = (meta) => ({
	'@context': 'https://schema.org',
	'@type': 'Article',
	headline: meta.title,
	description: meta.description,
	image: makeAbsolute(meta.image),
	datePublished: meta.date,
	dateModified: meta.updated ?? meta.date,
	author: {
		'@type': 'Person',
		name: siteMetadata.name
	},
	publisher: {
		'@type': 'Organization',
		name: siteMetadata.name,
		logo: makeAbsolute('/icons/IISACC.svg')
	},
	mainEntityOfPage: {
		'@type': 'WebPage',
		'@id': makeAbsolute(`/Story/${meta.slug}`)
	}
});

export function load() {
	const meta = storyMetadata ?? {};
	return {
		seo: {
			title: `${meta.title} — Story | ${siteMetadata.name}`,
			description: meta.description,
			image: makeAbsolute(meta.image),
			imageAlt: meta.imageAlt,
			keywords: `${defaultKeywords.join(', ')}, ${meta.title}`,
			type: 'article',
			publishedTime: meta.date,
			modifiedTime: meta.updated ?? meta.date,
			breadcrumbs: [
				{ label: 'Story', path: '/Story' },
				{ label: meta.title, path: `/Story/${meta.slug}` }
			],
			structuredData: buildStructuredData(meta)
		}
	};
}
