export const prerender = true;

const SITE = {
	name: 'IISACC',
	url: 'https://iisacc.com',
	tagline: 'Existential software studio',
	description:
		'IISACC builds long-lifespan software such as Vincent and Time Scopes, focusing on survival, health, and daily systems.',
	locale: 'en_US',
	sameAs: ['https://github.com/iisacc-Justmoong']
};

export function load() {
	return {
		site: SITE,
		seo: {
			title: `${SITE.name} — ${SITE.tagline}`,
			description: SITE.description,
			image: `${SITE.url}/images/Seoul.png`,
			keywords: [
				'IISACC',
				'Vincent app',
				'Time Scopes',
				'SvelteKit studio',
				'existential software',
				'macOS drawing app',
				'lifetime tracker'
			].join(', ')
		}
	};
}
