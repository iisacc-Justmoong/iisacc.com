<script>
	import Header from '$lib/Layouts/Header.svelte';
	import Footer from '$lib/Layouts/Footer.svelte';
</script>

<Header />

<section class="hero container">
	<div class="hero-copy">
		<p class="eyebrow">Essential Studio Tools</p>
		<h1>Vincent for macOS</h1>
		<p class="lede">
			Vincent distills the macOS painting experience into a poised, ultra-responsive canvas. No
			accounts, no onboarding labyrinth—just the pleasure of sketching as soon as inspiration
			strikes.
		</p>
		<p>
			The app’s rendering core is tuned for Apple silicon and Intel Macs alike, meaning every stroke
			lands with analogue softness while staying digitally precise. It is for designers rehearsing a
			composition, founders mapping a product, illustrators shaping palettes, or anyone who just
			needs to think through their hands.
		</p>
		<ul class="promises">
			<li>Freehand, fill, eraser, and selection tools with pressure-aware brushes.</li>
			<li>Imports PSD, PNG, JPEG, and HEIC; exports pristine layered PNGs.</li>
			<li>Zero network calls—Vincent operates entirely on device for absolute privacy.</li>
		</ul>
		<div class="cta-row">
			<a
				class="primary-cta"
				href="/apps/Vincent-1.0.0.pkg"
				download
				aria-label="Download Vincent 1.0.0 for macOS"
			>
				Download Vincent 1.0.0
			</a>
			<a class="secondary-cta" href="#details">Review details</a>
		</div>
	</div>
	<div class="hero-panel">
		<img class="appicon" src="/images/app/Vincent.png" alt="Vincent app icon" loading="lazy" />
		<div class="hero-panel__body">
			<p class="panel-title">A modern interpretation of the macOS classic Paint experience.</p>
			<div class="panel-meta">
				<div>
					<p class="meta-label">Compatibility</p>
					<p class="meta-value">macOS 12 or later</p>
				</div>
				<div>
					<p class="meta-label">Architecture</p>
					<p class="meta-value">Universal (Intel + Apple silicon)</p>
				</div>
				<div>
					<p class="meta-label">Footprint</p>
					<p class="meta-value">&lt; 25&nbsp;MB install</p>
				</div>
			</div>
			<p class="panel-copy">
				Vincent keeps the interface lyrical: floating palettes glide, layers tuck neatly, and the
				color well echoes Studio Display glass. Everything is rendered with inertial motion so the
				tool fades behind the craft.
			</p>
		</div>
	</div>
</section>

<section id="details" class="details container">
	<article>
		<h3>Paper-smooth input</h3>
		<p>
			Optimized event handling recognises double-tap gestures, Apple Pencil via Sidecar, and
			trackpad pressure modulation. Every stroke respects macOS accessibility preferences, including
			reduced motion and increased contrast.
		</p>
	</article>
	<article>
		<h3>Studio-grade colour</h3>
		<p>
			HSL and HEX pickers sit beside curated swatch books inspired by heritage paint houses. You can
			lock palettes to stay consistent across boards or invite random inspiration with a single tap.
		</p>
	</article>
	<article>
		<h3>Quiet file system</h3>
		<p>
			The sandbox-friendly file pipeline ensures projects autosave locally with version snapshots.
			When you export to Mail, Messages, or AirDrop, Vincent respects native share sheets—no
			proprietary formats, no compression surprises.
		</p>
	</article>
	<article>
		<h3>Focus &amp; flow</h3>
		<p>
			Full-screen, split view, and Stage Manager layouts are supported. A minimalist heads-up HUD
			provides brush info without eclipsing the artwork, and gestures are intentionally minimalist
			so your mind stays on the canvas.
		</p>
	</article>
</section>

<section class="download container">
	<div class="download-card">
		<div>
			<p class="download-title">Ready for your desktop.</p>
			<p class="download-copy">
				Install the signed package, launch Vincent, and start sketching on a blank infinity board
				in under ten seconds.
			</p>
		</div>
		<a
			class="primary-cta"
			href="/apps/Vincent-1.0.0.pkg"
			download
			aria-label="Download Vincent 1.0.0 for macOS"
		>
			Download Vincent 1.0.0
		</a>
	</div>
	<a class="privacy" href="/Store/Vincent/Privacy">Privacy policy</a>
</section>

<Footer />

<style>
	.hero {
		display: flex;
		flex-direction: column;
		gap: 32px;
		align-items: flex-start;
		margin-top: 48px;
	}
	.hero-copy h1 {
		font-size: clamp(2.3rem, 5vw, 3.3rem);
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
	.promises {
		list-style: none;
		padding: 0;
		margin: 24px 0;
		display: flex;
		flex-direction: column;
		gap: 12px;
		color: rgba(255, 255, 255, 0.75);
	}
	.primary-cta {
		background: linear-gradient(120deg, #ffd89c, #ff8fb1);
		color: #201201;
		box-shadow: 0 18px 45px rgba(255, 143, 177, 0.35);
	}
	.hero-panel {
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.06);
		border-radius: 32px;
		padding: 32px;
		backdrop-filter: blur(16px);
		box-shadow: 0 30px 120px rgba(0, 0, 0, 0.35);
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.appicon {
		width: 128px;
		height: 128px;
		border-radius: 32px;
	}
	.hero-panel__body {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.panel-title {
		font-size: 1.1rem;
		font-weight: 600;
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
		color: rgba(255, 255, 255, 0.55);
	}
	.meta-value {
		font-size: 0.95rem;
		font-weight: 600;
		color: rgba(255, 255, 255, 0.9);
	}
	.panel-copy {
		color: rgba(255, 255, 255, 0.7);
	}
	.details {
		display: flex;
		flex-direction: column;
		gap: 24px;
		padding-top: 32px;
	}
	.details article {
		padding: 24px;
		border-radius: 24px;
		background: rgba(7, 8, 12, 0.85);
		border: 1px solid rgba(255, 255, 255, 0.04);
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
	}
	.details h3 {
		margin-bottom: 12px;
		font-size: 1.05rem;
	}
	.details p {
		color: rgba(255, 255, 255, 0.72);
	}
	.download {
		padding-bottom: 96px;
	}
	.download-card {
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: 32px;
		border-radius: 28px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: linear-gradient(135deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01));
		box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
	}
	.download-title {
		font-size: 1.35rem;
		font-weight: 600;
	}
	.download-copy {
		color: rgba(255, 255, 255, 0.7);
	}
	.privacy {
		display: inline-flex;
		margin-top: 32px;
		color: rgba(255, 255, 255, 0.7);
		text-decoration: underline;
	}
</style>
