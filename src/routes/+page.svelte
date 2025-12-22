<script>
	import Header from '$lib/Layouts/Header.svelte';
	import Footer from '$lib/Layouts/Footer.svelte';
	import SurfaceCard from '$lib/UIComponents/Card/SurfaceCard.svelte';
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
			<ul class="hero__links">
				<li>
					<a href="/Store/TimeScopes">
						Time Scopes<span>Lifespan dashboard for iPhone &amp; iPad</span>
					</a>
				</li>
				<li>
					<a href="/Store/Vincent">Vincent<span>Minimal painter for macOS</span></a>
				</li>
				<li>
					<a href="/Contents">Contents<span>Research notes &amp; documentation</span></a>
				</li>
				<li>
					<a href="/World">World<span>Field experiments and collaborations</span></a>
				</li>
			</ul>
		</section>

		<section class="list">
			<SurfaceCard tag="article" className="list-card">
				<h2>Time Scopes</h2>
				<p>Track remaining decades, rituals, and promises with an elegant act of measurement.</p>
				<a href="/Store/TimeScopes" class="inline-link">View app →</a>
			</SurfaceCard>
			<SurfaceCard tag="article" className="list-card">
				<h2>Vincent</h2>
				<p>Start drawing on macOS instantly—brushes, fills, and exports with zero onboarding.</p>
				<a href="/Store/Vincent" class="inline-link">View app →</a>
			</SurfaceCard>
			<SurfaceCard tag="article" className="list-card">
				<h2>Story &amp; research</h2>
				<p>Read the ongoing thesis, survival notes, and process logs that shape each release.</p>
				<a href="/Story" class="inline-link">Read more →</a>
			</SurfaceCard>
		</section>

		<SurfaceCard tag="section" className="note" padding="24px">
			<div>
				<h2>Building calm tools, not platforms.</h2>
				<p>
					No signup walls, trackers, or pushy loops—just useful software released when it reaches
					the right level of craft.
				</p>
			</div>
			<a class="button ghost" href="mailto:andudyun0504gmail.com">Say hello</a>
		</SurfaceCard>
	</div>
</main>

<Footer />

<style>
	.landing {
		width: 100%;
		color: inherit;
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
			width: 100%;
		}
		.hero__body,
		.hero__links {
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
	.hero__links {
		list-style: none;
		margin: 0;
		padding: 0;
		border-radius: 24px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		overflow: hidden;
	}
	.hero__links li + li {
		border-top: 1px solid rgba(255, 255, 255, 0.08);
	}
	.hero__links a {
		display: flex;
		flex-direction: column;
		gap: 4px;
		padding: 16px 24px;
		text-decoration: none;
		color: inherit;
		background: rgba(255, 255, 255, 0.01);
		transition: background 150ms ease;
	}
	.hero__links a span {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.6);
	}
	.hero__links a:hover {
		background: rgba(255, 255, 255, 0.04);
	}
	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		padding: 12px 28px;
		border-radius: 999px;
		font-weight: 600;
		text-decoration: none;
		transition: transform 150ms ease, box-shadow 150ms ease, background 150ms ease;
	}
	.button.primary {
		background: linear-gradient(125deg, #b18bff, #64b8ff);
		color: #050505;
		box-shadow: 0 20px 60px rgba(96, 140, 255, 0.35);
	}
	.button.primary:hover {
		transform: translateY(-2px);
	}
	.button.ghost {
		border: 1px solid rgba(255, 255, 255, 0.25);
		color: var(--color-text);
	}
	.list {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.list-card {
		width: 100%;
		gap: 10px;
	}
	.list h2 {
		font-size: 1.2rem;
		margin-bottom: 4px;
	}
	.list p {
		color: rgba(255, 255, 255, 0.7);
	}
	.inline-link {
		color: var(--color-text);
		font-weight: 600;
		text-decoration: none;
	}
	.inline-link:hover {
		text-decoration: underline;
	}
	.note {
		display: flex;
		flex-direction: column;
		gap: 16px;
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
		.note > * {
			width: 100%;
		}
	</style>
