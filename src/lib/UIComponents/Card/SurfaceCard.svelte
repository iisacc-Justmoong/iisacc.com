<script>
	export let tag = 'article';
	export let interactive = false;
	export let padding = '24px';
	export let gap = '12px';
	export let className = '';
</script>

<svelte:element
	this={tag}
	class={`surface-card ${interactive ? 'interactive' : ''} ${className}`}
	style={`--surface-padding: ${padding}; --surface-gap: ${gap};`}
>
	<slot />
</svelte:element>

<style>
	.surface-card {
		display: flex;
		flex-direction: column;
		gap: var(--surface-gap, 12px);
		padding: var(--surface-padding, 24px);
		border-radius: 20px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: rgba(255, 255, 255, 0.02);
		transition: transform 150ms ease, background 150ms ease, border-color 150ms ease;
	}
	.surface-card.interactive:hover {
		transform: translateY(-2px);
		background: rgba(255, 255, 255, 0.04);
		border-color: rgba(255, 255, 255, 0.2);
	}
</style>
