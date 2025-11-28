<script>
	import Footer from '$lib/Layouts/Footer.svelte';
	import Header from '$lib/Layouts/Header.svelte';
</script>

<Header />

<section class="page-intro">
	<h1>Contents</h1>
	<p>
		Long-form research, references, and systems documentation that inform IISACC’s products. These
		notes make future engineering, art, and survival experiments reproducible.
	</p>
</section>

<section class="placeholder">
	<p>Curated essays and documentation will be published here soon.</p>
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
