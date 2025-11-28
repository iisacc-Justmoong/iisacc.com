import { siteMetadata } from '$lib/config/site.js';

export const prerender = true;

export function GET() {
	const sitemapUrl = siteMetadata.url
		? `${siteMetadata.url.replace(/\/$/, '')}/sitemap.xml`
		: '/sitemap.xml';
	const body = `User-agent: *
Allow: /
Sitemap: ${sitemapUrl}
`;
	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain'
		}
	});
}
