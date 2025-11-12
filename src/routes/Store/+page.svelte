<script>
	import Header from '$lib/Layouts/Header.svelte';
	import Footer from '$lib/Layouts/Footer.svelte';
	import AppCard from '$lib/UIComponents/Card/AppCard.svelte';

	let TimeScopesBackground = 'linear-gradient(180deg, #48FFA0 0%, #001CED 100%)';
	let VincentBackground = 'linear-gradient(180deg, #000000 0%, #000000 100%)';
</script>

<Header/>

<div class="cardBoard">
	<a href="/Store/TimeScopes">
		<AppCard background="{TimeScopesBackground}">
			<img slot="icon" src="/images/app/Time%20Scopes.png" alt="Time Scopes Icon" width="64" height="64" />
			<span slot="title">Time Scopes</span>
			<span slot="price">Free</span>
			<p slot="description">Lifetime event tracker.</p>
		</AppCard>
	</a>

	<a href="/Store/Vincent">
		<AppCard background="{VincentBackground}">
			<img slot="icon" src="/images/app/Vincent.png" alt="Vincent Icon" width="64" height="64" />
			<span slot="title">Vincent</span>
			<span slot="price">10$</span>
			<p slot="description">Your basic macOS painter.</p>
		</AppCard>
	</a>
</div>

<Footer />

<style>

	img {
			border-radius: 16px;
	}
  .cardBoard {
      display: grid;
      grid-template-columns: 1fr;
      gap: 16px;
  }
  @media (min-width: 768px) {
      .cardBoard {
          display: flex;
          flex-flow: row wrap;
          gap: 16px;
      }
      .cardBoard > a { flex: 1 1 360px; min-width: 0; }
  }
</style>