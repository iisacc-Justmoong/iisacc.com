const modules = import.meta.glob('./*.svx', { eager: true });

export const storiesMetadata = Object.values(modules)
	.map((module) => module?.metadata)
	.filter(Boolean)
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getStoryMetaBySlug = (slug) => storiesMetadata.find((story) => story.slug === slug);
