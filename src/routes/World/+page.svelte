<script>
	import Footer from '$lib/Layouts/Footer.svelte';
	import Header from '$lib/Layouts/Header.svelte';
</script>

<Header />

<section class="page-intro">
	<h1>World</h1>
	<p>
		Operational updates about IISACC &mdash; infrastructure, supply chains, and collaborators that
		enable long-lifespan software.
	</p>
</section>

<section class="placeholder">
	<p>Studio updates, photos, and dispatches will be added shortly.</p>
</section>

<Footer />

<style>
	.page-intro {
		display: flex;
		flex-direction: column;
		gap: 12px;
		margin-bottom: 32px;
	}
	.placeholder {
		border: 1px dashed rgba(255, 255, 255, 0.2);
		border-radius: 16px;
		padding: 24px;
		color: var(--color-text-secondary);
	}
</style>
