<script>
	import Footer from '$lib/Layouts/Footer.svelte';
	import Header from '$lib/Layouts/Header.svelte';
	import HeroSection from '$lib/UIComponents/Section/HeroSection.svelte';
	import PlaceholderPanel from '$lib/UIComponents/Section/PlaceholderPanel.svelte';
</script>

<Header />

<HeroSection
	eyebrow="Field Operations"
	title="World"
	description="Operational updates about iisacc foundation — infrastructure, supply chains, and collaborators that enable long-lifespan software."
	variant="plain"
	className="world-hero"
/>

<PlaceholderPanel>
	<p>Studio updates, photos, and dispatches will be added shortly.</p>
</PlaceholderPanel>

<Footer />

<style>
	:global(.world-hero) {
		margin-bottom: 32px;
	}
</style>
