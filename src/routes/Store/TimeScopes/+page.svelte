<script>
	import Header from '$lib/Layouts/Header.svelte';
	import Footer from '$lib/Layouts/Footer.svelte';
</script>

<Header />

<section class="hero container">
	<div class="hero-copy">
		<p class="eyebrow">Longevity Intelligence Suite</p>
		<h1>Time Scopes</h1>
		<p class="lede">
			Time Scopes translates the entirety of your lifespan into a living dashboard—illuminating the
			years, months, and irreplaceable minutes still within reach. It is the calm, precise
			companion for anyone designing a life with intent.
		</p>
		<p>
			Every interaction reveals respectful prompts: how far you’ve come, how much remains, and where
			momentum could be regained. The experience is built for reflective evenings, decisive
			mornings, and every small negotiation with yourself in between.
		</p>
		<div class="cta-row">
			<a
				class="primary-cta"
				href="https://apps.apple.com/kr/app/time-scopes/id6747707757?l=en-GB"
				rel="noreferrer"
			>
				View on the App&nbsp;Store
			</a>
			<a class="secondary-cta" href="#features">Discover capabilities</a>
		</div>
		<ul class="promises">
			<li>Realtime lifetime visualisations grounded in actuarial research.</li>
			<li>Entirely private—no account, no sync, only on-device storage.</li>
			<li>Crafted UI animations that reward daily check-ins.</li>
		</ul>
	</div>

	<div class="hero-panel">
		<img class="appicon" src="/images/app/Time Scopes.png" alt="Time Scopes icon" loading="lazy" />
		<div class="hero-panel__body">
			<div>
				<p class="panel-title">Remain present, not overwhelmed.</p>
				<p class="panel-copy">
					Customise cultural calendars, biological milestones, and personal vows to view time
					through lenses that feel personal rather than generic charts.
				</p>
			</div>
			<div class="panel-meta">
				<div>
					<span class="meta-label">Availability</span>
					<span class="meta-value">iOS · iPadOS</span>
				</div>
				<div>
					<span class="meta-label">Languages</span>
					<span class="meta-value">English · 한국어</span>
				</div>
				<div>
					<span class="meta-label">Pricing</span>
					<span class="meta-value">Free</span>
				</div>
			</div>
			<a
				class="badge-link"
				href="https://apps.apple.com/kr/app/time-scopes/id6747707757?l=en-GB"
				rel="noreferrer"
				aria-label="Download Time Scopes on the App Store"
			>
				<img src="/images/app/appstore.svg" alt="App Store" loading="lazy" />
			</a>
		</div>
	</div>
</section>

<section class="metrics container">
	<div class="metric-card">
		<p class="metric-label">Precision countdowns</p>
		<p class="metric-value">Lifespan, decade, season, and micro-goal trackers.</p>
		<p class="metric-note">Every timeline updates live with calendar awareness.</p>
	</div>
	<div class="metric-card">
		<p class="metric-label">Sense-making rituals</p>
		<p class="metric-value">Weekly reflections guided by pre-written prompts.</p>
		<p class="metric-note">Recode vague anxieties into intentional time design.</p>
	</div>
	<div class="metric-card">
		<p class="metric-label">Quiet notifications</p>
		<p class="metric-value">Optional nudges that respect your focus hours.</p>
		<p class="metric-note">No ads, no gamified interruptions—just clarity.</p>
	</div>
	<p class="metric-footnote">* Time Scopes processes every calculation locally.</p>
</section>

<section id="features" class="features container">
	<article>
		<h3>Perspective layers</h3>
		<p>
			Switch effortlessly between life-to-date, decade, year, and personal mission layers. Each
			view highlights what is already behind you and the finite portion ahead, encouraging
			priorities that align with your private ambitions.
		</p>
	</article>
	<article>
		<h3>Editorial storytelling</h3>
		<p>
			The typography, motion, and palette are inspired by premium horology—measured, luminous, and
			free from clutter. You receive a story about time, not a spreadsheet.
		</p>
	</article>
	<article>
		<h3>Personal codes</h3>
		<p>
			Mark sacred dates, rites of passage, family traditions, or health targets. Time Scopes allows
			you to encode traditions so the app speaks your language.
		</p>
	</article>
	<article>
		<h3>Futureproof foundation</h3>
		<p>
			Built with SwiftUI and modern accessibility APIs, it feels native across light and dark
			appearances, includes VoiceOver landmarks, and respects Dynamic Type.
		</p>
	</article>
</section>

<section class="qr container">
	<div class="qr-card">
		<img src="/images/app/TimeScopes-qr-code.png" alt="Time Scopes QR code" loading="lazy" />
		<div>
			<p class="qr-label">Scan to install</p>
			<p class="qr-copy">
				Point your camera to jump directly to the App Store listing, or share the code with a
				friend who needs a calmer relationship with time.
			</p>
		</div>
	</div>
	<a class="privacy" href="/Store/TimeScopes/Privacy">View the privacy policy</a>
</section>

<Footer />

<style>
	.hero {
		display: flex;
		flex-direction: column;
		gap: 32px;
		align-items: flex-start;
		margin-top: 32px;
	}
	.hero-copy h1 {
		font-size: clamp(2.5rem, 5vw, 3.5rem);
		margin-bottom: 16px;
	}
	.hero-copy p {
		color: var(--color-text-secondary);
	}
	.lede {
		font-size: 1.15rem;
		color: var(--color-text-primary);
		margin-bottom: 16px;
	}
	.cta-row {
		margin: 24px 0;
	}
	.primary-cta {
		background: linear-gradient(120deg, #b796ff, #6ab7ff);
		color: #050505;
		box-shadow: 0 18px 45px rgba(79, 132, 255, 0.35);
	}
	.promises {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
		color: rgba(255, 255, 255, 0.7);
	}
	.hero-panel {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 32px;
		padding: 32px;
		backdrop-filter: blur(14px);
		box-shadow: 0 30px 120px rgba(0, 0, 0, 0.35);
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.hero-panel img {
		width: 128px;
		height: 128px;
		border-radius: 32px;
		align-self: flex-start;
	}
	.hero-panel__body {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.panel-title {
		font-size: 1.1rem;
		font-weight: 600;
		margin-bottom: 8px;
	}
	.panel-copy {
		color: rgba(255, 255, 255, 0.75);
	}
	.panel-meta {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.meta-label {
		font-size: 0.75rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		color: rgba(255, 255, 255, 0.5);
	}
	.meta-value {
		font-size: 0.95rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.9);
	}
	.badge-link img {
		width: 200px;
		height: auto;
	}
	.metrics {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.metric-card {
		padding: 24px;
		border-radius: 24px;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.06);
	}
	.metric-label {
		font-weight: 600;
		font-size: 1rem;
	}
	.metric-value {
		font-size: 1.1rem;
		margin: 8px 0;
		color: rgba(255, 255, 255, 0.85);
	}
	.metric-note {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.6);
	}
	.metric-footnote {
		font-size: 0.8rem;
		color: rgba(255, 255, 255, 0.45);
		margin-top: 8px;
	}
	.features {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.features article {
		padding: 24px;
		border-radius: 24px;
		background: rgba(7, 8, 12, 0.8);
		border: 1px solid rgba(255, 255, 255, 0.04);
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
	}
	.features h3 {
		margin-bottom: 12px;
		font-size: 1.1rem;
	}
	.features p {
		color: rgba(255, 255, 255, 0.72);
	}
	.qr {
		display: flex;
		flex-direction: column;
		gap: 24px;
		padding-bottom: 64px;
	}
	.qr-card {
		display: flex;
		flex-direction: column;
		gap: 24px;
		padding: 24px;
		border-radius: 24px;
		border: 1px solid rgba(255, 255, 255, 0.06);
		background: rgba(255, 255, 255, 0.02);
	}
	.qr-card img {
		width: 200px;
		height: 200px;
		border-radius: 24px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		align-self: flex-start;
	}
	.qr-label {
		font-weight: 600;
		margin-bottom: 8px;
	}
	.qr-copy {
		color: rgba(255, 255, 255, 0.7);
	}
	.privacy {
		color: rgba(255, 255, 255, 0.7);
		text-decoration: underline;
		align-self: flex-start;
	}
</style>
