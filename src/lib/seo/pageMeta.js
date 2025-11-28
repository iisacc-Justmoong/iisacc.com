import { defaultKeywords, siteMetadata } from '$lib/config/site.js';

const absoluteUrl = (path) => {
	if (!path) return undefined;
	if (/^https?:\/\//.test(path)) return path;
	if (!siteMetadata.url) return path;
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return `${siteMetadata.url}${encodeURI(normalized)}`;
};

const now = new Date().toISOString();

export const pageSeo = {
	home: {
		id: 'home',
		path: '/',
		title: `${siteMetadata.name} — ${siteMetadata.tagline}`,
		description: siteMetadata.description,
		image: absoluteUrl(siteMetadata.defaultImage),
		keywords: defaultKeywords.join(', '),
		type: 'website',
		changefreq: 'monthly',
		priority: 1,
		lastmod: now,
		structuredData: {
			'@context': 'https://schema.org',
			'@type': 'WebSite',
			name: siteMetadata.name,
			url: siteMetadata.url,
			description: siteMetadata.description,
			publisher: {
				'@type': 'Organization',
				name: siteMetadata.name
			}
		}
	},
	contents: {
		id: 'contents',
		path: '/Contents',
		title: `Contents — ${siteMetadata.name}`,
		description:
			'Explore essays, documentation, and prototypes chronicling IISACC research into existential software.',
		image: absoluteUrl('/images/Seoul.png'),
		keywords: ['IISACC contents', 'existential essays', 'product documentation'].join(', '),
		type: 'website',
		changefreq: 'monthly',
		priority: 0.7,
		lastmod: now,
		breadcrumbs: [{ label: 'Contents', path: '/Contents' }],
		structuredData: {
			'@context': 'https://schema.org',
			'@type': 'WebPage',
			name: 'IISACC Contents',
			url: absoluteUrl('/Contents')
		}
	},
	world: {
		id: 'world',
		path: '/World',
		title: `World — ${siteMetadata.name}`,
		description:
			'Updates on the IISACC ecosystem: infrastructure, communities, and initiatives that support the studio.',
		image: absoluteUrl('/images/Seoul.png'),
		keywords: ['IISACC world', 'infrastructure updates', 'studio initiatives'].join(', '),
		type: 'website',
		changefreq: 'monthly',
		priority: 0.6,
		lastmod: now,
		breadcrumbs: [{ label: 'World', path: '/World' }],
		structuredData: {
			'@context': 'https://schema.org',
			'@type': 'WebPage',
			name: 'IISACC World updates',
			url: absoluteUrl('/World')
		}
	},
	storyListing: {
		id: 'story-listing',
		path: '/Story',
		title: `Story — ${siteMetadata.name}`,
		description: 'Personal essays and survival notes from IISACC documenting product thinking.',
		image: absoluteUrl('/images/story/BipolarDisorderPencil.png'),
		keywords: ['IISACC story', 'IISACC blog', 'existential story'].join(', '),
		type: 'website',
		changefreq: 'weekly',
		priority: 0.8,
		lastmod: now,
		breadcrumbs: [{ label: 'Story', path: '/Story' }],
		structuredData: {
			'@context': 'https://schema.org',
			'@type': 'CollectionPage',
			name: 'IISACC Story',
			url: absoluteUrl('/Story')
		}
	},
	store: {
		id: 'store',
		path: '/Store',
		title: `Store — ${siteMetadata.name}`,
		description:
			'Download IISACC applications Vincent and Time Scopes that focus on survival, health, and daily systems.',
		image: absoluteUrl('/images/app/Vincent.png'),
		keywords: ['IISACC store', 'Vincent app', 'Time Scopes download'].join(', '),
		type: 'website',
		changefreq: 'weekly',
		priority: 0.9,
		lastmod: now,
		breadcrumbs: [{ label: 'Store', path: '/Store' }],
		structuredData: {
			'@context': 'https://schema.org',
			'@type': 'ItemList',
			name: 'IISACC Store',
			itemListElement: [
				{
					'@type': 'ListItem',
					position: 1,
					name: 'Time Scopes',
					item: absoluteUrl('/Store/TimeScopes')
				},
				{
					'@type': 'ListItem',
					position: 2,
					name: 'Vincent',
					item: absoluteUrl('/Store/Vincent')
				}
			]
		}
	},
	timeScopes: {
		id: 'store-time-scopes',
		path: '/Store/TimeScopes',
		title: 'Time Scopes — Lifetime tracker by IISACC',
		description:
			'Time Scopes visualizes your lifetime, remaining days, and historical milestones to fight procrastination.',
		image: absoluteUrl('/images/app/Time Scopes.png'),
		keywords: ['Time Scopes app', 'lifetime tracker', 'IISACC Time Scopes'].join(', '),
		type: 'product',
		changefreq: 'weekly',
		priority: 0.85,
		lastmod: now,
		breadcrumbs: [
			{ label: 'Store', path: '/Store' },
			{ label: 'Time Scopes', path: '/Store/TimeScopes' }
		],
		structuredData: {
			'@context': 'https://schema.org',
			'@type': 'SoftwareApplication',
			name: 'Time Scopes',
			applicationCategory: 'LifestyleApplication',
			operatingSystem: 'iOS',
			image: absoluteUrl('/images/app/Time Scopes.png'),
			offers: {
				'@type': 'Offer',
				price: '0',
				priceCurrency: 'USD',
				availability: 'https://schema.org/InStock',
				url: 'https://apps.apple.com/kr/app/time-scopes/id6747707757?l=en-GB'
			}
		}
	},
	timeScopesPrivacy: {
		id: 'time-scopes-privacy',
		path: '/Store/TimeScopes/Privacy',
		title: 'Time Scopes — Privacy policy',
		description:
			'Read how IISACC handles analytics, usage data, and customer information inside the Time Scopes application.',
		image: absoluteUrl('/images/app/Time Scopes.png'),
		keywords: ['Time Scopes privacy', 'IISACC privacy policy'].join(', '),
		type: 'article',
		changefreq: 'yearly',
		priority: 0.3,
		lastmod: now,
		breadcrumbs: [
			{ label: 'Store', path: '/Store' },
			{ label: 'Time Scopes', path: '/Store/TimeScopes' },
			{ label: 'Privacy', path: '/Store/TimeScopes/Privacy' }
		],
		structuredData: {
			'@context': 'https://schema.org',
			'@type': 'WebPage',
			name: 'Time Scopes Privacy Policy',
			url: absoluteUrl('/Store/TimeScopes/Privacy'),
			dateModified: now
		}
	},
	vincent: {
		id: 'store-vincent',
		path: '/Store/Vincent',
		title: 'Vincent — Basic macOS painter by IISACC',
		description:
			'Vincent is a minimal macOS drawing app for quick sketches, color fills, and idea capture without a subscription.',
		image: absoluteUrl('/images/app/Vincent.png'),
		keywords: ['Vincent macOS app', 'mac drawing app', 'IISACC Vincent'].join(', '),
		type: 'product',
		changefreq: 'weekly',
		priority: 0.85,
		lastmod: now,
		breadcrumbs: [
			{ label: 'Store', path: '/Store' },
			{ label: 'Vincent', path: '/Store/Vincent' }
		],
		structuredData: {
			'@context': 'https://schema.org',
			'@type': 'SoftwareApplication',
			name: 'Vincent',
			applicationCategory: 'GraphicsApplication',
			operatingSystem: 'macOS',
			image: absoluteUrl('/images/app/Vincent.png'),
			offers: {
				'@type': 'Offer',
				price: '0.99',
				priceCurrency: 'USD',
				availability: 'https://schema.org/InStock',
				url: absoluteUrl('/Store/Vincent')
			}
		}
	},
	vincentPrivacy: {
		id: 'vincent-privacy',
		path: '/Store/Vincent/Privacy',
		title: 'Vincent — Privacy policy',
		description: 'Privacy practices for the Vincent macOS drawing application from IISACC.',
		image: absoluteUrl('/images/app/Vincent.png'),
		keywords: ['Vincent privacy', 'macOS app privacy policy'].join(', '),
		type: 'article',
		changefreq: 'yearly',
		priority: 0.3,
		lastmod: now,
		breadcrumbs: [
			{ label: 'Store', path: '/Store' },
			{ label: 'Vincent', path: '/Store/Vincent' },
			{ label: 'Privacy', path: '/Store/Vincent/Privacy' }
		],
		structuredData: {
			'@context': 'https://schema.org',
			'@type': 'WebPage',
			name: 'Vincent Privacy Policy',
			url: absoluteUrl('/Store/Vincent/Privacy'),
			dateModified: now
		}
	}
};

export const staticSeoEntries = Object.values(pageSeo).map((entry) => ({
	loc: absoluteUrl(entry.path),
	changefreq: entry.changefreq,
	priority: entry.priority,
	lastmod: entry.lastmod
}));

export const getPageSeo = (id) => {
	const entry = pageSeo[id];
	return entry ? { ...entry } : null;
};
