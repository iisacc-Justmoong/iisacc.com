<script>
	import Footer from '$lib/Layouts/Footer.svelte';
	import Header from '$lib/Layouts/Header.svelte';
	import HeroSection from '$lib/UIComponents/Section/HeroSection.svelte';
	import SectionHeading from '$lib/UIComponents/Section/SectionHeading.svelte';
	import SurfaceCard from '$lib/UIComponents/Card/SurfaceCard.svelte';
</script>

<Header />

<main class="contents-page">
		<HeroSection
			eyebrow="Archive / Contents"
			title="Everything I build plus the source files"
			description="The Contents page stores the full context around each interactive artwork or toolkit—stories, source files, install instructions, audio, and visual assets all travel together."
			layout="split"
			meta={[
				{ label: 'Release cadence', value: 'First week of every month' },
				{ label: 'Latest update', value: '2024.05.12' }
			]}
			notice="Resource uploads are temporarily paused. Every package below is shared as a preview and marked as Preparing until distribution opens again."
		/>

	<section class="pillar-grid">
		<SurfaceCard
			className="pillar-card"
			title="Process-first Records"
			description="Sketches, failed tests, and research notes are layered in order so the next iteration can pick up immediately."
		/>
		<SurfaceCard
			className="pillar-card"
			title="Original Source Delivery"
			description="Project files, textures, audio, generative code, and modular graphs are packed exactly as I use them."
		/>
		<SurfaceCard
			className="pillar-card"
			title="Usage Guidance"
			description="Licensing, credits, and version history stay explicit so anyone can remix safely and confidently."
		/>
	</section>

	<section class="collection">
	<SectionHeading
		eyebrow="Artwork Archives"
		title="Archive per project"
		description="Each project ships as a package that includes the final piece plus experiments, tools, audio, and motion presets. Check the cards below for current status and upcoming resources."
		layout="split"
	/>

		<div class="project-grid">
			<article class="project-card" style="--accent: var(--color-accent-cyan)">
				<div class="project-visual">
					<span>Volumetric Field Instruments</span>
				</div>
				<div class="project-body">
					<div class="project-meta">
						<span class="period">2022 — present</span>
						<span class="status">Preparing Release</span>
					</div>
					<h3>Eraserfield Systems</h3>
					<p>
						A series of installation instruments that measure space with volumetric beams and vapor particles,
						focused on hand-built generative audio-light engines.
					</p>

					<div class="tag-row">
						<span class="chip">Immersive Light</span>
						<span class="chip">Generative Sculpture</span>
						<span class="chip">Spatial Audio</span>
					</div>

					<div class="resource-list">
						<div class="resource-row">
							<div>
								<p class="resource-name">Field Kit v1</p>
								<span class="resource-meta">Blender + GLSL patch · Personal R&amp;D</span>
							</div>
							<div class="resource-actions">
								<span class="size">12 MB</span>
								<span class="chip action disabled">Preparing</span>
							</div>
						</div>
						<div class="resource-row">
							<div>
								<p class="resource-name">Directional Audio Stems</p>
								<span class="resource-meta">48kHz WAV · CC BY-NC</span>
							</div>
							<div class="resource-actions">
								<span class="size">Compiling</span>
								<span class="chip action disabled">Preparing</span>
							</div>
						</div>
					</div>

					<div class="medium-list">
						<span>TouchDesigner</span>
						<span>Blender</span>
						<span>Ableton Live</span>
					</div>
				</div>
			</article>

			<article class="project-card" style="--accent: var(--color-accent-purple)">
				<div class="project-visual">
					<span>Procedural Film Series</span>
				</div>
				<div class="project-body">
					<div class="project-meta">
						<span class="period">2020 — 2023</span>
						<span class="status">Archive Preview</span>
					</div>
					<h3>Orbit Sutures</h3>
					<p>
						An experimental film line that stitches particle orbits into cinematic prints while keeping simulation
						timelines and print frames in sync.
					</p>

					<div class="tag-row">
						<span class="chip">Short Film</span>
						<span class="chip">Print Export</span>
						<span class="chip">Open Timeline</span>
					</div>

					<div class="resource-list">
						<div class="resource-row">
							<div>
								<p class="resource-name">Timeline Package</p>
								<span class="resource-meta">After Effects + PNG sequence · CC BY-NC-SA</span>
							</div>
							<div class="resource-actions">
								<span class="size">8 MB</span>
								<span class="chip action disabled">Preparing</span>
							</div>
						</div>
						<div class="resource-row">
							<div>
								<p class="resource-name">Print-ready Frames</p>
								<span class="resource-meta">TIFF 600dpi · Extended Release</span>
							</div>
							<div class="resource-actions">
								<span class="size">Coming soon</span>
								<span class="chip action disabled">Preparing</span>
							</div>
						</div>
					</div>

					<div class="medium-list">
						<span>Houdini</span>
						<span>After Effects</span>
						<span>Python</span>
					</div>
				</div>
			</article>

			<article class="project-card" style="--accent: var(--color-accent-orange)">
				<div class="project-visual">
					<span>Digital Painting Utilities</span>
				</div>
				<div class="project-body">
					<div class="project-meta">
						<span class="period">2021 — present</span>
						<span class="status">Packaging Update</span>
					</div>
					<h3>Vincent Brush Library</h3>
					<p>
						A single bundle containing brushes, palettes, and UI assets that sync with Vincent. Color calibration
						data ships alongside to match emissive screens.
					</p>

					<div class="tag-row">
						<span class="chip">Brush Pack</span>
						<span class="chip">Color Science</span>
						<span class="chip">UI Assets</span>
					</div>

					<div class="resource-list">
						<div class="resource-row">
							<div>
								<p class="resource-name">Vincent Default Brushes</p>
								<span class="resource-meta">Procreate .brushset · CC BY 4.0</span>
							</div>
							<div class="resource-actions">
								<span class="size">2 MB</span>
								<span class="chip action disabled">Preparing</span>
							</div>
						</div>
						<div class="resource-row">
							<div>
								<p class="resource-name">Monitor Calibration LUT</p>
								<span class="resource-meta">.cube · CC BY-NC</span>
							</div>
							<div class="resource-actions">
								<span class="size">In production</span>
								<span class="chip action disabled">Preparing</span>
							</div>
						</div>
					</div>

					<div class="medium-list">
						<span>Procreate</span>
						<span>Photoshop</span>
						<span>Vincent</span>
					</div>
				</div>
			</article>
		</div>
	</section>

	<section class="resource-manifest">
		<SectionHeading
			eyebrow="Original Resources"
			title="Download manifest"
			description="This table lists size, licensing, and delivery status at a glance."
			layout="split"
		/>

		<div class="manifest-table">
			<div class="table-head">
				<span>Resource</span>
				<span>Project</span>
				<span>Format</span>
				<span>Size</span>
				<span>License</span>
				<span>Status</span>
			</div>
			<div class="table-row">
				<span>Field Kit v1</span>
				<span class="project" style="color: var(--color-accent-cyan)">Eraserfield Systems</span>
				<span>Blender + GLSL patch</span>
				<span>12 MB</span>
				<span>Personal R&amp;D</span>
				<span><span class="text-link disabled">Preparing</span></span>
			</div>
			<div class="table-row">
				<span>Directional Audio Stems</span>
				<span class="project" style="color: var(--color-accent-cyan)">Eraserfield Systems</span>
				<span>48kHz WAV</span>
				<span>Compiling</span>
				<span>CC BY-NC</span>
				<span><span class="text-link disabled">Preparing</span></span>
			</div>
			<div class="table-row">
				<span>Timeline Package</span>
				<span class="project" style="color: var(--color-accent-purple)">Orbit Sutures</span>
				<span>After Effects + PNG sequence</span>
				<span>8 MB</span>
				<span>CC BY-NC-SA</span>
				<span><span class="text-link disabled">Preparing</span></span>
			</div>
			<div class="table-row">
				<span>Print-ready Frames</span>
				<span class="project" style="color: var(--color-accent-purple)">Orbit Sutures</span>
				<span>TIFF 600dpi</span>
				<span>Coming soon</span>
				<span>Extended Release</span>
				<span><span class="text-link disabled">Preparing</span></span>
			</div>
			<div class="table-row">
				<span>Vincent Default Brushes</span>
				<span class="project" style="color: var(--color-accent-orange)">Vincent Brush Library</span>
				<span>Procreate .brushset</span>
				<span>2 MB</span>
				<span>CC BY 4.0</span>
				<span><span class="text-link disabled">Preparing</span></span>
			</div>
			<div class="table-row">
				<span>Monitor Calibration LUT</span>
				<span class="project" style="color: var(--color-accent-orange)">Vincent Brush Library</span>
				<span>.cube</span>
				<span>In production</span>
				<span>CC BY-NC</span>
				<span><span class="text-link disabled">Preparing</span></span>
			</div>
		</div>
	</section>

	<section class="release-notes">
		<SectionHeading
			eyebrow="Release Notes"
			title="Changelog"
			description="Every release includes a record of which files were updated or packaged."
		/>

		<ul class="update-list">
			<li>
				<span class="date">2024.05.12</span>
				<div>
					<p class="update-title">Field Kit v1</p>
					<p class="update-detail">First public package including TouchDesigner notes and an auto-normalize routine.</p>
				</div>
			</li>
			<li>
				<span class="date">2024.04.02</span>
				<div>
					<p class="update-title">Orbit Sutures Timeline</p>
					<p class="update-detail">Rebuilt the export script to ship 8K PNG sequences inside the timeline pack.</p>
				</div>
			</li>
			<li>
				<span class="date">2024.03.18</span>
				<div>
					<p class="update-title">Vincent Brush Library</p>
					<p class="update-detail">Updated pressure curves and noise controls for the latest Vincent desktop build.</p>
				</div>
			</li>
		</ul>
	</section>
</main>

<Footer />

<style>
	.contents-page {
		display: flex;
		flex-direction: column;
		gap: 48px;
		margin-bottom: 80px;
	}
	.pillar-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
		gap: 16px;
	}
	:global(.pillar-card) {
		text-align: left;
		gap: 8px;
	}
	:global(.pillar-card h3) {
		margin-bottom: 8px;
	}
	.project-grid {
		display: flex;
		flex-direction: column;
		gap: 24px;
	}
	.project-card {
		display: grid;
		gap: 24px;
		padding: 24px;
		border-radius: 24px;
		border: 1px solid rgba(255, 255, 255, 0.08);
		background: radial-gradient(circle at top left, rgba(255, 255, 255, 0.05), transparent);
	}
	.project-visual {
		min-height: 160px;
		border-radius: 16px;
		padding: 16px;
		background: linear-gradient(135deg, var(--accent), rgba(255, 255, 255, 0.04));
		display: flex;
		align-items: flex-end;
		justify-content: flex-start;
		font-size: var(--text-subheader);
		font-weight: 600;
		color: #050505;
	}
	.project-body {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.project-meta {
		display: flex;
		flex-wrap: wrap;
		gap: 8px 16px;
		align-items: center;
		font-size: var(--text-caption);
		color: var(--color-text-secondary);
	}
	.project-meta .status {
		padding: 4px 10px;
		border-radius: 999px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		color: var(--color-text-primary);
	}
	.tag-row {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}
	.chip {
		padding: 6px 12px;
		border-radius: 999px;
		background: rgba(255, 255, 255, 0.06);
		font-size: var(--text-caption);
	}
	.chip.action {
		background: rgba(255, 255, 255, 0.12);
		border: 1px solid rgba(255, 255, 255, 0.2);
		color: var(--color-text-primary);
	}
	.chip.action.disabled {
		opacity: 0.5;
		border-style: dashed;
		cursor: not-allowed;
		pointer-events: none;
	}
	.resource-list {
		display: flex;
		flex-direction: column;
		gap: 12px;
		padding: 16px;
		border-radius: 16px;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.06);
	}
	.resource-row {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.resource-name {
		font-weight: 600;
	}
	.resource-meta {
		color: var(--color-text-secondary);
		font-size: var(--text-caption);
	}
	.resource-actions {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.resource-actions .size {
		color: var(--color-text-secondary);
		font-size: var(--text-caption);
	}
	.medium-list {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		font-size: var(--text-caption);
		color: var(--color-text-secondary);
	}
	.resource-manifest .manifest-table {
		border-radius: 16px;
		overflow: hidden;
		border: 1px solid rgba(255, 255, 255, 0.08);
		overflow-x: auto;
	}
	.manifest-table .table-head,
	.manifest-table .table-row {
		display: grid;
		grid-template-columns: repeat(6, minmax(0, 1fr));
		gap: 12px;
		padding: 16px;
		font-size: var(--text-caption);
		min-width: 720px;
	}
	.manifest-table .table-head {
		background: rgba(255, 255, 255, 0.04);
		text-transform: uppercase;
		letter-spacing: 0.08em;
	}
	.manifest-table .table-row:nth-child(even) {
		background: rgba(255, 255, 255, 0.02);
	}
	.manifest-table .project {
		font-weight: 600;
	}
	.text-link {
		color: var(--color-accent-cyan);
		text-decoration: underline;
		font-weight: 600;
	}
	.text-link.disabled {
		color: var(--color-text-secondary);
		text-decoration: none;
		cursor: not-allowed;
		pointer-events: none;
		font-weight: 500;
	}
	.release-notes .update-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	.release-notes li {
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: 16px;
		border-radius: 16px;
		border: 1px solid rgba(255, 255, 255, 0.06);
	}
	.release-notes .date {
		font-size: var(--text-caption);
		color: var(--color-text-secondary);
	}
	.update-title {
		font-weight: 600;
		margin: 0 0 4px;
	}
	.update-detail {
		margin: 0;
		color: var(--color-text-secondary);
	}
	@media (min-width: 900px) {
		.project-card {
			grid-template-columns: minmax(200px, 1fr) 2fr;
		}
		.resource-row {
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
		}
		.release-notes li {
			flex-direction: row;
			align-items: center;
			gap: 24px;
		}
	}
</style>
