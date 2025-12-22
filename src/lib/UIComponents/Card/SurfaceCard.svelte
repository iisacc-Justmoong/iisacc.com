<script>
		export let title;
		export let description;
		export let meta;
		export let metaTag;
		export let metaDatetime;
		export let linkHref;
		export let linkLabel;
		export let interactive;
		export let className;
	</script>

<article class={`surface-card${interactive ? ' interactive' : ''}${className ? ` ${className}` : ''}`}>
	{#if title}
		<h2 class="card-title">{title}</h2>
	{/if}
	{#if meta}
		{#if (metaTag ?? 'p') === 'time'}
			<time class="card-meta" datetime={metaDatetime ?? meta}>{meta}</time>
		{:else}
			<p class="card-meta">{meta}</p>
		{/if}
	{/if}
	{#if description}
		<p class="card-description">{description}</p>
	{/if}
	{#if linkHref && linkLabel}
		<a class="card-link" href={linkHref}>{linkLabel}</a>
	{/if}
</article>

<style>
	.surface-card {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 24px;
		margin: 0;
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
	.card-title {
		font-size: 1.2rem;
		margin: 0 0 4px;
	}
	.card-meta {
		color: var(--color-text-secondary);
		font-size: var(--text-caption);
		margin: 0;
	}
	.card-description {
		color: rgba(255, 255, 255, 0.7);
		margin: 0;
	}
	.card-link {
		color: var(--color-text-primary);
		font-weight: 600;
		text-decoration: none;
	}
	.card-link:hover {
		text-decoration: underline;
	}
</style>
