<script>
	import SurfaceCard from '$lib/UIComponents/Card/SurfaceCard.svelte';
</script>

<section class="highlight-list">
	<SurfaceCard
		className="highlight-card"
		title="Time Scopes"
		description="Track remaining decades, rituals, and promises with an elegant act of measurement."
		linkHref="/Store/TimeScopes"
		linkLabel="View app →"
	/>
	<SurfaceCard
		className="highlight-card"
		title="Vincent"
		description="Start drawing on macOS instantly—brushes, fills, and exports with zero onboarding."
		linkHref="/Store/Vincent"
		linkLabel="View app →"
	/>
	<SurfaceCard
		className="highlight-card"
		title="Story &amp; research"
		description="Read the ongoing thesis, survival notes, and process logs that shape each release."
		linkHref="/Story"
		linkLabel="Read more →"
	/>
</section>

<style>
	.highlight-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
</style>
