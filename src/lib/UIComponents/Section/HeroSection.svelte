<script>
		export let eyebrow;
		export let title;
		export let description;
		export let notice;
		export let layout;
		export let meta;
		export let titleTag;
		export let variant;
		export let className;

	</script>

<section
	class={`hero-section ${layout ?? 'stacked'} ${variant ?? 'panel'}${className ? ` ${className}` : ''}`}
>
	<div class="hero-section__content">
		{#if eyebrow}
			<p class="eyebrow">{eyebrow}</p>
		{/if}
		{#if title}
			{#if (titleTag ?? 'h1') === 'h2'}
				<h2 class="hero-title">{title}</h2>
			{:else if (titleTag ?? 'h1') === 'h3'}
				<h3 class="hero-title">{title}</h3>
			{:else}
				<h1 class="hero-title">{title}</h1>
			{/if}
		{/if}
		{#if description}
			<p class="description">{description}</p>
		{/if}
		{#if notice}
			<p class="notice">{notice}</p>
		{/if}
	</div>

		{#if (meta ?? []).length}
			<div class="hero-section__meta">
				{#each meta ?? [] as item}
				<div>
					<span class="label">{item.label}</span>
					<p>{item.value}</p>
				</div>
			{/each}
		</div>
	{/if}
</section>

<style>
	.hero-section {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.hero-section.panel {
		padding: 32px;
		border-radius: 24px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		background: linear-gradient(120deg, rgba(255, 255, 255, 0.05), transparent);
	}
	.hero-section.plain {
		padding: 0;
	}
	.hero-section.split {
		gap: 24px;
	}
	.hero-title {
		margin: 8px 0;
		font-size: clamp(32px, 5vw, 48px);
	}
	.hero-section__content .description {
		color: var(--color-text-secondary);
		margin: 0;
	}
	.hero-section__meta {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
		gap: 16px;
	}
	.hero-section__meta .label {
		display: block;
		font-size: var(--text-caption);
		color: var(--color-text-secondary);
		text-transform: uppercase;
		letter-spacing: 0.08em;
		margin-bottom: 6px;
	}
	.notice {
		margin: 12px 0 0;
		padding: 12px 16px;
		border-radius: 12px;
		background: rgba(255, 255, 255, 0.04);
		color: var(--color-text-secondary);
	}
	:global(.hero-section .notice strong) {
		color: var(--color-text-primary);
	}
	.eyebrow {
		text-transform: uppercase;
		font-size: var(--text-caption);
		letter-spacing: 0.12em;
		color: var(--color-text-secondary);
		margin: 0;
	}
	@media (min-width: 900px) {
		.hero-section.split {
			flex-direction: row;
			justify-content: space-between;
			align-items: flex-start;
		}
		.hero-section__content {
			flex: 2;
		}
		.hero-section__meta {
			flex: 1;
			margin-left: 32px;
		}
	}
</style>
