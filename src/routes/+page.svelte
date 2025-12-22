<script>
	import Header from '$lib/Layouts/Header.svelte';
	import Footer from '$lib/Layouts/Footer.svelte';
	import HeroLink from '$lib/UIComponents/Card/HeroLink.svelte';
	import LandingHighlights from '$lib/UIComponents/List/LandingHighlights.svelte';
</script>

<Header />

<main class="landing">
	<div class="landing__inner">
		<section class="hero">
			<div class="hero__body">
				<p class="eyebrow">Independent software atelier</p>
				<h1>Software for existential living.</h1>
				<p class="lede">
					IISACC crafts focused tools for people who record their lives with intention. macOS and
					iOS apps arrive quietly, without ads, and stay out of your way.
				</p>
			</div>
			<div class="hero-link-group">
				<HeroLink
					href="/Store/TimeScopes"
					title="Time Scopes"
					description="Lifespan dashboard for iPhone &amp; iPad"
				/>
				<HeroLink
					href="/Store/Vincent"
					title="Vincent"
					description="Minimal painter for macOS"
				/>
				<HeroLink
					href="/Contents"
					title="Contents"
					description="Research notes &amp; documentation"
				/>
			</div>
		</section>

		<LandingHighlights />

		<section class="note">
			<div>
				<h2>Building calm tools, not platforms.</h2>
				<p>
					No signup walls, trackers, or pushy loops—just useful software released when it reaches
					the right level of craft.
				</p>
			</div>
			<a class="button ghost" href="mailto:andudyun0504gmail.com">Say hello</a>
		</section>
	</div>
</main>

<Footer />

<style>
	.landing {
		width: 100%;
	}
	.landing__inner {
		display: flex;
		flex-direction: column;
		gap: 56px;
		padding: 48px 20px 80px;
		margin: 0 auto;
		width: min(760px, 100%);
	}
	.hero {
		display: flex;
		flex-direction: column;
		gap: 24px;
		align-items: flex-start;
	}
	.hero__body {
		width: 100%;
	}
	.hero__body h1 {
		font-size: clamp(2.4rem, 5vw, 3.4rem);
		margin: 12px 0;
	}
	.hero__body p {
		color: rgba(255, 255, 255, 0.75);
	}
	.lede {
		font-size: 1.1rem;
	}
	.hero-link-group {
		display: flex;
		flex-direction: column;
		gap: 12px;
		width: 100%;
	}
	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 12px 28px;
		border-radius: 999px;
		font-weight: 600;
		transition: transform 150ms ease, box-shadow 150ms ease, background 150ms ease;
	}
	.button.ghost {
		border: 1px solid rgba(255, 255, 255, 0.25);
		color: var(--color-text);
	}
	.note {
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: 24px;
		border-radius: 20px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: rgba(255, 255, 255, 0.02);
	}
	.note h2 {
		font-size: 1.6rem;
		margin-bottom: 8px;
	}
	.note p {
		color: rgba(255, 255, 255, 0.72);
		margin: 0;
	}
	.eyebrow {
		text-transform: uppercase;
		letter-spacing: 0.2em;
		font-size: 0.75rem;
		color: rgba(255, 255, 255, 0.6);
	}
</style>
