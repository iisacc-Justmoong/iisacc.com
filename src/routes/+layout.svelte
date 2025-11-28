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
	const ensureAbsoluteUrl = (value, siteUrl) => {
		if (!value) return undefined;
		if (/^https?:\/\//.test(value)) return value;
		if (!siteUrl) return value;
		const sanitizedValue = value.startsWith('/') ? value : `/${value}`;
		const normalizedBase = siteUrl.endsWith('/') ? siteUrl.slice(0, -1) : siteUrl;
		return `${normalizedBase}${sanitizedValue}`;
	};
	const buildBreadcrumbSchema = (breadcrumbs, siteUrl) => {
		if (!breadcrumbs?.length) return null;
		return {
			'@context': 'https://schema.org',
			'@type': 'BreadcrumbList',
			itemListElement: breadcrumbs.map((crumb, index) => ({
				'@type': 'ListItem',
				position: index + 1,
				name: crumb.label ?? crumb.title,
				item: ensureAbsoluteUrl(crumb.href ?? crumb.path ?? crumb.url, siteUrl)
			}))
		};
	};
	const scriptTag = 'script';

	$: canonical = buildCanonical($page.url, data?.site?.url);
	$: metaTitle = data?.seo?.title ?? data?.site?.name ?? 'IISACC';
	$: metaDescription =
		data?.seo?.description ??
		data?.site?.description ??
		'Existential software studio crafting Vincent, Time Scopes, and human-scale tools.';
	$: metaImage = ensureAbsoluteUrl(
		data?.seo?.image ?? data?.site?.defaultImage ?? '/images/Seoul.png',
		data?.site?.url
	);
	$: metaKeywords = data?.seo?.keywords;
	$: metaType = data?.seo?.type ?? 'website';
	$: authorName = data?.seo?.author ?? data?.site?.name ?? 'IISACC';
	$: robotsPolicy = data?.seo?.robots
		? data.seo.robots
		: data?.seo?.noindex
			? 'noindex,nofollow'
			: 'index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1';
	$: imageAlt = data?.seo?.imageAlt ?? `${data?.site?.name ?? 'IISACC'} preview`;
	$: sitemapHref = data?.site?.url ? `${data.site.url}/sitemap.xml` : '/sitemap.xml';
	$: organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		url: data?.site?.url,
		name: data?.site?.name,
		description: metaDescription,
		logo: data?.site?.url ? `${data.site.url}/icons/IISACC.svg` : undefined,
		sameAs: data?.site?.sameAs ?? [],
		brand: data?.site?.tagline
	};
	$: breadcrumbSchema = buildBreadcrumbSchema(data?.seo?.breadcrumbs, data?.site?.url);
	$: resolvedStructuredData = (() => {
		const entry = data?.seo?.structuredData;
		if (!entry) return [];
		return Array.isArray(entry) ? entry : [entry];
	})();
	$: structuredDataEntries = [
		organizationSchema,
		breadcrumbSchema,
		...resolvedStructuredData
	].filter(Boolean);
	$: jsonLdEntries = structuredDataEntries.map(toJsonLd);
</script>

<svelte:head>
	<title>{metaTitle}</title>
	<meta name="description" content={metaDescription} />
	{#if metaKeywords}
		<meta name="keywords" content={metaKeywords} />
	{/if}
	<meta name="robots" content={robotsPolicy} />
	<link rel="canonical" href={canonical} />
	<link rel="alternate" href={canonical} hreflang={(data?.site?.locale ?? 'en_US').slice(0, 2)} />
	<link rel="sitemap" type="application/xml" href={sitemapHref} />
	<meta property="og:site_name" content={data?.site?.name} />
	<meta property="og:type" content={metaType} />
	<meta property="og:locale" content={data?.site?.locale ?? 'en_US'} />
	<meta property="og:url" content={canonical} />
	<meta property="og:title" content={metaTitle} />
	<meta property="og:description" content={metaDescription} />
	<meta property="og:image" content={metaImage} />
	<meta property="og:image:secure_url" content={metaImage} />
	<meta property="og:image:alt" content={imageAlt} />
	{#if data?.seo?.imageWidth}
		<meta property="og:image:width" content={data.seo.imageWidth} />
	{/if}
	{#if data?.seo?.imageHeight}
		<meta property="og:image:height" content={data.seo.imageHeight} />
	{/if}
	{#if data?.seo?.publishedTime}
		<meta property="article:published_time" content={data.seo.publishedTime} />
	{/if}
	{#if data?.seo?.modifiedTime}
		<meta property="article:modified_time" content={data.seo.modifiedTime} />
	{/if}
	<meta name="author" content={authorName} />
	<meta name="twitter:card" content={data?.seo?.twitterCard ?? 'summary_large_image'} />
	<meta name="twitter:title" content={metaTitle} />
	<meta name="twitter:description" content={metaDescription} />
	<meta name="twitter:image" content={metaImage} />
	{#if data?.seo?.twitterHandle}
		<meta name="twitter:creator" content={data.seo.twitterHandle} />
	{/if}
	<meta name="twitter:image:alt" content={imageAlt} />
	<meta name="theme-color" content="#040b18" />
</svelte:head>

{#each jsonLdEntries as entry, index (index)}
	<svelte:element this={scriptTag} type="application/ld+json">
		{entry}
	</svelte:element>
{/each}

<slot />
