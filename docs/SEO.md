# SEO Implementation Guide

This document summarizes how IISACC’s SvelteKit project is configured for maximum SEO impact and explains how to extend or tune the setup safely.

## 1. Canonical Site Metadata (`src/lib/config/site.js`)

- Central authority for the studio name, tagline, default description, canonical base URL, social profiles (`sameAs`), and a curated keyword list.
- `navigationLinks` is consumed by the header to keep navigation consistent for users and search engines alike.
- When updating brand text or adding networks, edit this file so every route, schema payload, and sitemap entry stays in sync.

## 2. Page-Level SEO Map (`src/lib/seo/pageMeta.js`)

- Defines reusable metadata for each major route (home, Contents, World, Story, Store, product pages, and privacy pages).
- Each entry includes: canonical `path`, human-friendly copy (`title`, `description`), preview imagery, crawl hints (`changefreq`, `priority`, `lastmod`), breadcrumbs, and Schema.org objects appropriate to the page type.
- `getPageSeo(id)` returns a shallow copy for the route load functions; `staticSeoEntries` feeds into the sitemap generator.
- To add a new route, add an object here first (ensuring `path` matches the eventual URL), then call `getPageSeo` inside that route’s `+page.js`.

## 3. Global Head & JSON-LD (`src/routes/+layout.js` & `src/routes/+layout.svelte`)

- Layout `load` injects the site metadata and default SEO data so every page inherits a sensible baseline.
- The Svelte layout component computes canonical URLs, robots instructions, OG/Twitter tags, and iterates through structured data entries (Organization, Breadcrumbs, and custom payloads).
- Helper utilities (`ensureAbsoluteUrl`, `buildBreadcrumbSchema`) guard against malformed URLs and keep Schema.org payloads valid.
- To customize per page: return `seo` from the route’s load function with overrides (e.g., `type: 'article'`, `structuredData`, `breadcrumbs`).

## 4. Story Metadata & Articles (`src/lib/Story/*.svx`, `src/lib/Story/manifest.js`)

- Markdown stories include YAML front matter (title, description, slug, dates, hero image).
- `manifest.js` eagerly imports every `.svx`, exposes sorted metadata, and powers both the Story index page and route-specific SEO loaders.
- Each story folder contains a static `+page.js` that imports its story metadata and outputs Article-schema details (publisher, timestamps, canonical slug).
- When drafting a new entry: add the `.svx` file with front matter, import it via the manifest, update `src/lib/seo/pageMeta.js` if the listing page needs new descriptors, and ensure the corresponding `/Story/<slug>/+page.js` returns tailored SEO data.

## 5. Supporting Assets

- **Sitemap (`src/routes/sitemap.xml/+server.js`)**: merges `staticSeoEntries` with every Story slug so crawlers are aware of all live documents. Update the metadata map or Story files, and the sitemap updates automatically at build time.
- **robots.txt (`src/routes/robots.txt/+server.js`)**: exposes a canonical sitemap reference and allows full crawl access.
- **Header/Footer**: use semantic `<nav>` and `<footer>` structures with consistent copy, ensuring crawler-friendly navigation and site-wide schema coherence.

## 6. Adding or Changing Routes

1. Define the route’s SEO object in `pageMeta.js`.
2. Create `+page.js` (or load function) that returns `{ seo: getPageSeo('<id>') }`.
3. Build/refine the page’s content component (`+page.svelte`) with meaningful copy to avoid thin-content penalties.
4. If the page represents a product, article, or other special entity, extend `structuredData` (e.g., `SoftwareApplication`, `Article`, `Event`).

## 7. Quality Checklist

- Run `npm run lint` to enforce formatting; the command also validates `.svelte` markup which indirectly prevents malformed `<head>` tags.
- Before deploying, use `npm run build && npm run preview` and inspect the generated HTML (especially `<head>`) for duplicate tags or blank descriptions.
- Validate structured data via Google’s Rich Results Test or Schema validator by pasting the page URL or HTML snippet.

By centralizing metadata and schema definitions, the site now delivers consistent, crawlable signals across all routes. Extend these files (rather than ad-hoc `<svelte:head>` tags) to keep SEO posture predictable and reviewer-friendly.***
