<script>
	import { page } from '$app/stores';

	export let data;

	const buildCanonical = (pageUrl, siteUrl) => {
		const safeSearch = (() => {
			try {
				return pageUrl.search ?? '';
			} catch {
				return '';
			}
		})();
		if (!siteUrl) return `${pageUrl.pathname}${safeSearch}`;
		const normalizedBase = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
		return `${normalizedBase}${pageUrl.pathname}${safeSearch}`;
	};
	const toJsonLd = (schema) => JSON.stringify(schema).replace(/</g, '\\u003c');
	const scriptTag = 'script';

	$: canonical = buildCanonical($page.url, data?.site?.url);
	$: metaTitle = data?.seo?.title ?? data?.site?.name ?? 'IISACC';
	$: metaDescription =
		data?.seo?.description ??
		data?.site?.description ??
		'Existential software studio crafting Vincent, Time Scopes, and human-scale tools.';
	$: metaImage =
		data?.seo?.image ??
		(data?.site?.url ? `${data.site.url}/images/Seoul.png` : '/images/Seoul.png');
	$: metaKeywords = data?.seo?.keywords;
	$: structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		url: data?.site?.url,
		name: data?.site?.name,
		description: metaDescription,
		logo: data?.site?.url ? `${data.site.url}/icons/IISACC.svg` : undefined,
		sameAs: data?.site?.sameAs ?? [],
		brand: data?.site?.tagline
	};
	$: jsonLd = toJsonLd(structuredData);
</script>

<svelte:head>
	<title>{metaTitle}</title>
	<meta name="description" content={metaDescription} />
	{#if metaKeywords}
		<meta name="keywords" content={metaKeywords} />
	{/if}
	<meta
		name="robots"
		content="index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"
	/>
	<link rel="canonical" href={canonical} />
	<meta property="og:site_name" content={data?.site?.name} />
	<meta property="og:type" content="website" />
	<meta property="og:locale" content={data?.site?.locale ?? 'en_US'} />
	<meta property="og:url" content={canonical} />
	<meta property="og:title" content={metaTitle} />
	<meta property="og:description" content={metaDescription} />
	<meta property="og:image" content={metaImage} />
	<meta property="og:image:alt" content={`${data?.site?.name ?? 'IISACC'} preview`} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={metaTitle} />
	<meta name="twitter:description" content={metaDescription} />
	<meta name="twitter:image" content={metaImage} />
	<meta name="theme-color" content="#040b18" />
</svelte:head>

<svelte:element this={scriptTag} type="application/ld+json">
	{jsonLd}
</svelte:element>

<slot />
