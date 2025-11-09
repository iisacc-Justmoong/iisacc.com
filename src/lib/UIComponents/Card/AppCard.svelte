<script>

	const DEFAULT_GRADIENT = 'linear-gradient(135deg, #1E3A5F, #2E8BC0)';

	export let background = "";

  export let backgroundVar = "";

	$: resolvedBackground = backgroundVar
		? `var(${backgroundVar}, ${DEFAULT_GRADIENT})`
		: (background && background.trim().length > 0 ? background : DEFAULT_GRADIENT);

</script>

<article
  class="card"
  role="group"
  aria-label="Application Card"
>
  <header class="top">
    <div class="icon">
      <slot name="icon"></slot>
    </div>
    <div class="texts">
      <h1 class="title">
        <slot name="title">AppName</slot>
      </h1>
      <div class="price">
        <slot name="price">Price</slot>
      </div>
    </div>
  </header>
  <section class="desc">
    <slot name="description">Description</slot>
  </section>
</article>

<style>
  .card {
    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 16px;
    min-width: 320px;
    width: 100%;
    height: 600px;
    background-color: var(--color-background-secondary);
    background: var(--app-card-bg, linear-gradient(135deg, #1E3A5F, #2E8BC0));
    padding: 32px;
    border-radius: 32px;
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
    border-radius: 0%;
  }
  .texts {
    display: flex;
    flex-direction: column;
    gap: 100%;
  }
  .title {
    margin: 0;
  }
  .price {
    justify-self: end;
    white-space: nowrap;
    text-align: right;
    color: var(--color-accent-blue);
  }
  .desc {
    min-height: 96px;
    align-content: end;
    text-align: right;
  }
</style>