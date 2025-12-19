<script>
	import Footer from '$lib/Layouts/Footer.svelte';
	import Header from '$lib/Layouts/Header.svelte';
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

<section class="story-hero">
	<p class="eyebrow">Journal</p>
	<h1>Story</h1>
	<p>
		Field notes preserving the mindset behind IISACC—hard-earned lessons about existential software,
		individual survival, and caring for the human scale.
	</p>
</section>

<section class="story-grid">
	{#each stories as story}
		<a class="story-link" href={`/Story/${story.slug}`}>
		<article class="story-card">

				<h2>{story.title}</h2>

			<time datetime={story.date}>{formatDate(story.date)}</time>
			<p>{story.description}</p>
		</article>
		</a>
	{/each}
</section>

<Footer />

<style>
	.story-hero {
		display: flex;
		flex-direction: column;
		gap: 12px;
		margin-bottom: 32px;
	}
	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.08em;
		font-size: 12px;
		color: var(--color-text-secondary);
		margin-bottom: 4px;
	}
	.story-grid {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.story-card {
		border: 1px solid rgba(255, 255, 255, 0.08);
		border-radius: 16px;
		padding: 24px;
		background: rgba(255, 255, 255, 0.02);
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.story-link {
		color: inherit;
	}
	time {
		color: var(--color-text-secondary);
		font-size: var(--text-caption);
	}
</style>
