<script>
</script>

<article class="card" aria-label="Application Card">
	<header class="top">
		<div class="icon">
			<slot name="icon"></slot>
		</div>
		<div class="texts">
			<h2 class="title">
				<slot name="title">AppName</slot>
			</h2>
			<section class="desc">
				<slot name="description">Description</slot>
			</section>
		</div>
		<div class="price">
			<slot name="price">Price</slot>
		</div>
	</header>
</article>

<style>
	.card {
		display: grid;
		gap: 16px;
		width: 100%;
		padding: 24px;
		align-items: center;
		background-color: var(--color-background-secondary);
		border-radius: 24px;
	}
	.top {
		display: grid;
		grid-template-columns: 64px 1fr auto;
		align-items: center;
		column-gap: 12px;
	}
	.icon {
		width: 64px;
		height: 64px;
		border-radius: 0px;
	}
	.texts {
		display: flex;
		height: 100%;
		flex-direction: column;
		justify-content: space-between;
	}
	.title {
		margin: 0;
		text-align: top;
	}
	.price {
		justify-self: end;
		white-space: nowrap;
		text-align: right;
		font-weight: 600;
		align-items: center;
		color: var(--text-primary);
		background-color: var(--color-accent-blue);
		padding: 12px 32px;
		border-radius: 32px;
	}
	.desc {
		text-align: left;
		color: var(--color-text-secondary);
	}
</style>
