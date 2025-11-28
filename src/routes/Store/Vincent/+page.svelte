<script>
	import Header from '$lib/Layouts/Header.svelte';
	import Footer from '$lib/Layouts/Footer.svelte';
</script>

<Header />

<div class="container">
	<img class="appicon" src="/images/app/Vincent.png" alt="Vincent app icon" loading="lazy" />
	<h1 class="appname">Vincent</h1>
	<div class="description">
		<p class="description">
			Vincent is designed to provide macOS users with the most fundamental, immediately
			understandable, and intuitively operable drawing tool. Unlike professional graphics software
			with extensive feature sets, it focuses on enabling the simple acts of drawing lines, filling
			colors, and composing images without unnecessary complexity. A lightweight rendering engine
			optimized for macOS input systems, texture processing, and high-resolution displays ensures
			smooth performance and clear visual feedback, thereby supporting a workflow uninterrupted by
			excessive interfaces or learning curves.
		</p>
		<p>
			Its core functionality consists of essential tools such as freehand drawing, fill, eraser, and
			adjustable brush parameters, complemented by the ability to import and export images. This
			allows the application to serve a wide range of everyday tasks including sketching,
			note-taking, and basic graphic creation. Despite its simplicity, the file-handling
			architecture has been carefully built to comply with macOS sandboxing and security
			requirements, ensuring that all saving, loading, and conversion processes adhere strictly to
			system-standard APIs. This structure is intended to guarantee both predictable behavior and
			stable operation.
		</p>
		<p>
			The application avoids subscription models and network-dependent features, relying instead on
			a fully local workflow in which all essential capabilities are available immediately upon
			launch. Users can begin working without additional configuration or onboarding, in line with
			the longstanding macOS tradition of simplicity and clarity. Its lightweight design and minimal
			resource usage also allow the application to function smoothly even on older Mac hardware.
		</p>
		<p>
			In summary, this application provides a reliable, modern implementation of the most basic
			drawing tool that macOS users often need. It offers an unobtrusive canvas for sketching ideas,
			organizing thoughts visually, or performing simple image edits. By emphasizing immediacy,
			stability, and clarity, it embodies the core productivity philosophy that has long defined the
			macOS ecosystem.
		</p>
		<a class="privacy" href="/Store/Vincent/Privacy">Privacy policy</a>
	</div>
</div>

<Footer />

<style>
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 720px;
		max-width: 100%;
		margin-left: auto;
		margin-right: auto;
	}
	.appicon {
		width: 128px;
		height: 128px;
		border-radius: 32px;
		text-align: center;
		margin-top: 32px;
	}
	p {
		margin-bottom: 16px;
	}
	.privacy {
		margin-top: 128px;
	}
</style>
