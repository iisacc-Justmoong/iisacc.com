<script>
	import Footer from '$lib/Layouts/Footer.svelte';
	import Header from '$lib/Layouts/Header.svelte';
	import HeroSection from '$lib/UIComponents/Section/HeroSection.svelte';
	import SurfaceCard from '$lib/UIComponents/Card/SurfaceCard.svelte';
	import { storiesMetadata } from '$lib/Story/manifest.js';

	const stories = storiesMetadata;
	const formatDate = (value) =>
		new Date(value).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric'
		});
</script>

<Header />

<HeroSection
	eyebrow="Journal"
	title="Story"
	description="Field notes preserving the mindset behind IISACC—hard-earned lessons about existential software, individual survival, and caring for the human scale."
	variant="plain"
	className="story-hero"
/>

<section class="story-grid">
	{#each stories as story}
		<SurfaceCard
			className="story-card"
			interactive={true}
			title={story.title}
			meta={formatDate(story.date)}
			metaTag="time"
			metaDatetime={story.date}
			description={story.description}
			linkHref={`/Story/${story.slug}`}
			linkLabel="Read story →"
		/>
	{/each}
</section>

<Footer />

<style>
	.story-grid {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	:global(.story-hero) {
		margin-bottom: 32px;
	}
</style>
