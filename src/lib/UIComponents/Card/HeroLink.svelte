<script>
	export let href = '#';
	export let title = '';
	export let description = '';
</script>

<a class="hero-link-card" href={href}>
	<span class="hero-link-title">{title}</span>
	<span class="hero-link-description">{description}</span>
</a>

<style>
	.hero-link-card {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 16px 24px;
		border-radius: 24px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: rgba(255, 255, 255, 0.01);
		transition: background 150ms ease;
	}
	.hero-link-title {
		font-weight: 600;
	}
	.hero-link-description {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.6);
	}
	.hero-link-card:hover {
		background: rgba(255, 255, 255, 0.04);
	}
</style>
