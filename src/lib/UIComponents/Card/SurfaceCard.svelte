<script>
		export let tag;
		export let interactive;
		export let className;
	</script>

{#if tag === 'section'}
	<section class={`surface-card${interactive ? ' interactive' : ''}${className ? ` ${className}` : ''}`}>
		<slot />
	</section>
{:else if tag === 'div'}
	<div class={`surface-card${interactive ? ' interactive' : ''}${className ? ` ${className}` : ''}`}>
		<slot />
	</div>
{:else}
	<article class={`surface-card${interactive ? ' interactive' : ''}${className ? ` ${className}` : ''}`}>
		<slot />
	</article>
{/if}

<style>
	.surface-card {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 24px;
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
