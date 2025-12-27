<script>
	import Header from '$lib/Layouts/Header.svelte';
	import Footer from '$lib/Layouts/Footer.svelte';
</script>

<Header />

<section class="hero container">
	<div class="hero-copy">
		<p class="eyebrow">Modern Paint Basics</p>
		<h1>Vincent for macOS</h1>
		<p class="lede">
			Vincent is a modern, no-frills take on the classic MS Paint workflow—only the essentials,
			wrapped in a clean macOS interface.
		</p>
		<p>
			The toolset stays intentionally small: draw freehand, fill blocks of color, erase, and select
			areas without wading through advanced menus. It is built for quick sketches, wireframes, and
			ideas that need to land fast.
		</p>
		<p>
			Version 2.0 sharpens the interface, adds text tools for captions and notes, and introduces
			lightweight image edits like cropping, rotation, and tonal adjustments so you can refine assets
			on a single canvas.
		</p>
		<ul class="promises">
			<li>Core paint tools only: brush, fill, eraser, and selection.</li>
			<li>Text labels that sit directly on the canvas.</li>
			<li>Basic image edits for quick cleanup and polish.</li>
		</ul>
		<div class="cta-row">
			<a
				class="primary-cta"
				href="/apps/Vincent-2.0.0.pkg"
				download
				aria-label="Download Vincent 2.0.0 for macOS"
			>
				Download Vincent 2.0.0
			</a>
			<a class="secondary-cta" href="#details">Review details</a>
		</div>
	</div>
	<div class="hero-panel">
		<img class="appicon" src="/images/app/Vincent.png" alt="Vincent app icon" loading="lazy" />
		<div class="hero-panel__body">
			<p class="panel-title">A modern look for classic paint basics.</p>
			<div class="panel-meta">
				<div>
					<p class="meta-label">Platform</p>
					<p class="meta-value">macOS</p>
				</div>
				<div>
					<p class="meta-label">Toolset</p>
					<p class="meta-value">Basic drawing + text</p>
				</div>
				<div>
					<p class="meta-label">Focus</p>
					<p class="meta-value">Quick sketches</p>
				</div>
			</div>
			<p class="panel-copy">
				Vincent keeps the chrome minimal so the canvas stays front and center. The layout is clean,
				modern, and intentionally small so your focus stays on the drawing, not the controls.
			</p>
		</div>
	</div>
</section>

<section id="details" class="details container">
	<article>
		<h3>Classic paint basics</h3>
		<p>
			Vincent keeps the MS Paint playbook: freehand drawing, fill buckets, erasing, and simple
			selections that get ideas on screen fast.
		</p>
	</article>
	<article>
		<h3>Modern, minimal UI</h3>
		<p>
			The interface is pared back and spacious, so tools stay visible without crowding your canvas.
			Everything feels contemporary without adding complexity.
		</p>
	</article>
	<article>
		<h3>Text on canvas</h3>
		<p>
			Drop in notes, captions, or quick labels without leaving the sketching flow. Text lives right
			on the canvas, just like the rest of your marks.
		</p>
	</article>
	<article>
		<h3>Lightweight image edits</h3>
		<p>
			Crop, rotate, and apply simple tonal adjustments to clean up assets before you export or share.
			The edits stay intentionally basic and fast.
		</p>
	</article>
</section>

<section class="download container">
	<div class="download-card">
		<div>
			<p class="download-title">Ready for your desktop.</p>
			<p class="download-copy">
				Install the package, launch Vincent, and start sketching on a clean, minimal canvas right away.
			</p>
		</div>
		<a
			class="primary-cta"
			href="/apps/Vincent-2.0.0.pkg"
			download
			aria-label="Download Vincent 2.0.0 for macOS"
		>
			Download Vincent 2.0.0
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
