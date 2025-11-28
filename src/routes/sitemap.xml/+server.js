import { siteMetadata } from '$lib/config/site.js';
import { storiesMetadata } from '$lib/Story/manifest.js';
import { staticSeoEntries } from '$lib/seo/pageMeta.js';

export const prerender = true;

const baseUrl = siteMetadata.url?.replace(/\/$/, '') ?? '';
const absolute = (path) => {
	if (!baseUrl) return path;
	if (/^https?:\/\//.test(path)) return path;
	const normalized = path.startsWith('/') ? path : `/${path}`;
	return `${baseUrl}${encodeURI(normalized)}`;
};

const serializeUrl = ({ loc, lastmod, changefreq, priority }) => {
	const normalizedLoc = absolute(loc);
	return `<url>
	<loc>${normalizedLoc}</loc>
	${lastmod ? `<lastmod>${new Date(lastmod).toISOString()}</lastmod>` : ''}
	${changefreq ? `<changefreq>${changefreq}</changefreq>` : ''}
	${priority ? `<priority>${priority}</priority>` : ''}
</url>`;
};

export function GET() {
	const storyEntries = storiesMetadata.map((story) => ({
		loc: absolute(`/Story/${story.slug}`),
		lastmod: story.updated ?? story.date,
		changefreq: 'monthly',
		priority: 0.6
	}));

	const urls = [...staticSeoEntries, ...storyEntries]
		.filter((entry) => entry?.loc)
		.map((entry) =>
			serializeUrl({
				loc: entry.loc,
				lastmod: entry.lastmod,
				changefreq: entry.changefreq,
				priority: entry.priority
			})
		)
		.join('');

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
