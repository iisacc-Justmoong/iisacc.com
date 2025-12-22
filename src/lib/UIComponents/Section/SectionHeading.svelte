<script>
		export let eyebrow;
		export let title;
		export let description;
		export let layout;
	</script>

<div class={`section-heading ${layout ?? 'stacked'}`}>
	<div class="section-heading__title">
		{#if eyebrow}
			<p class="eyebrow">{eyebrow}</p>
		{/if}
		{#if title}
			<h2>{title}</h2>
		{/if}
	</div>

	{#if description}
		<p class="section-heading__description">{description}</p>
	{/if}
</div>

<style>
	.section-heading {
		display: flex;
		flex-direction: column;
		gap: 8px;
		margin-bottom: 24px;
	}
	.section-heading.split {
		gap: 16px;
	}
	.section-heading__description {
		color: var(--color-text-secondary);
		margin: 0;
	}
	.eyebrow {
		text-transform: uppercase;
		font-size: var(--text-caption);
		letter-spacing: 0.12em;
		color: var(--color-text-secondary);
		margin: 0 0 4px;
	}
	@media (min-width: 900px) {
		.section-heading.split {
			flex-direction: row;
			align-items: flex-end;
			justify-content: space-between;
		}
		.section-heading.split .section-heading__title {
			flex: 1;
		}
		.section-heading.split .section-heading__description {
			max-width: 520px;
		}
	}
</style>
