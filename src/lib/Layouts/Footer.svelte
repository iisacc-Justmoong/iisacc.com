<script>
	import { siteMetadata } from '$lib/config/site.js';

	const currentYear = new Date().getFullYear();
</script>

<footer class="contents" aria-label="Site footer">
	<div class="vstack">
		<p class="translate-warn-text">
			Sometimes, I Use LLM for translation and i know it can causes inconsistencies.
		</p>
		<small class="copyright">© {currentYear} {siteMetadata.name}. All rights reserved.</small>
	</div>
</footer>

<style>
	.contents {
		align-items: center;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-top: 64px;
	}

	.vstack {
		display: flex;
		flex-direction: column;
	}

	.translate-warn-text {
		margin-block-end: 0;
		margin-block-start: 0;
		color: var(--color-text-secondary);
	}
	.copyright {
		margin-top: 8px;
		color: var(--color-text-secondary);
		font-size: var(--text-caption);
	}
</style>
