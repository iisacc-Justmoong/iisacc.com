<script>
	import SurfaceCard from '$lib/UIComponents/Card/SurfaceCard.svelte';
</script>

<section class="highlight-list">
	<SurfaceCard tag="article" className="highlight-card">
		<h2>Time Scopes</h2>
		<p>Track remaining decades, rituals, and promises with an elegant act of measurement.</p>
		<a href="/Store/TimeScopes" class="inline-link">View app →</a>
	</SurfaceCard>
	<SurfaceCard tag="article" className="highlight-card">
		<h2>Vincent</h2>
		<p>Start drawing on macOS instantly—brushes, fills, and exports with zero onboarding.</p>
		<a href="/Store/Vincent" class="inline-link">View app →</a>
	</SurfaceCard>
	<SurfaceCard tag="article" className="highlight-card">
		<h2>Story &amp; research</h2>
		<p>Read the ongoing thesis, survival notes, and process logs that shape each release.</p>
		<a href="/Story" class="inline-link">Read more →</a>
	</SurfaceCard>
</section>

<style>
	.highlight-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	:global(.highlight-card) {
		padding: 20px;
		gap: 10px;
	}
	:global(.highlight-card h2) {
		font-size: 1.2rem;
		margin-bottom: 4px;
	}
	:global(.highlight-card p) {
		color: rgba(255, 255, 255, 0.7);
	}
	.inline-link {
		color: var(--color-text-primary);
		font-weight: 600;
		text-decoration: none;
	}
	.inline-link:hover {
		text-decoration: underline;
	}
</style>
