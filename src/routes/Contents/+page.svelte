<script>
	import Footer from '$lib/Layouts/Footer.svelte';
	import Header from '$lib/Layouts/Header.svelte';
	import HeroSection from '$lib/UIComponents/Section/HeroSection.svelte';
	import SectionHeading from '$lib/UIComponents/Section/SectionHeading.svelte';
	import SurfaceCard from '$lib/UIComponents/Card/SurfaceCard.svelte';

	const pillars = [
		{
			title: 'Process-first Records',
			detail:
				'Sketches, failed tests, and research notes are layered in order so the next iteration can pick up immediately.'
		},
		{
			title: 'Original Source Delivery',
			detail:
				'Project files, textures, audio, generative code, and modular graphs are packed exactly as I use them.'
		},
		{
			title: 'Usage Guidance',
			detail:
				'Licensing, credits, and version history stay explicit so anyone can remix safely and confidently.'
		}
	];

	const works = [
		{
			title: 'Eraserfield Systems',
			subtitle: 'Volumetric Field Instruments',
			period: '2022 — present',
			status: 'Preparing Release',
			summary:
				'A series of installation instruments that measure space with volumetric beams and vapor particles, focused on hand-built generative audio-light engines.',
			mediums: ['TouchDesigner', 'Blender', 'Ableton Live'],
			tags: ['Immersive Light', 'Generative Sculpture', 'Spatial Audio'],
			accent: 'var(--color-accent-cyan)',
			resources: [
				{
					name: 'Field Kit v1',
					format: 'Blender + GLSL patch',
					size: '12 MB',
					license: 'Personal R&D',
					status: 'preparing',
					href: '/contents/eraserfield-fieldkit.txt'
				},
				{
					name: 'Directional Audio Stems',
					format: '48kHz WAV',
					size: 'Compiling',
					license: 'CC BY-NC',
					status: 'preparing'
				}
			]
		},
		{
			title: 'Orbit Sutures',
			subtitle: 'Procedural Film Series',
			period: '2020 — 2023',
			status: 'Archive Preview',
			summary:
				'An experimental film line that stitches particle orbits into cinematic prints while keeping simulation timelines and print frames in sync.',
			mediums: ['Houdini', 'After Effects', 'Python'],
			tags: ['Short Film', 'Print Export', 'Open Timeline'],
			accent: 'var(--color-accent-purple)',
			resources: [
				{
					name: 'Timeline Package',
					format: 'After Effects + PNG sequence',
					size: '8 MB',
					license: 'CC BY-NC-SA',
					status: 'preparing',
					href: '/contents/orbit-sutures-toolkit.txt'
				},
				{
					name: 'Print-ready Frames',
					format: 'TIFF 600dpi',
					size: 'Coming soon',
					license: 'Extended Release',
					status: 'preparing'
				}
			]
		},
		{
			title: 'Vincent Brush Library',
			subtitle: 'Digital Painting Utilities',
			period: '2021 — present',
			status: 'Packaging Update',
			summary:
				'A single bundle containing brushes, palettes, and UI assets that sync with Vincent. Color calibration data ships alongside to match emissive screens.',
			mediums: ['Procreate', 'Photoshop', 'Vincent'],
			tags: ['Brush Pack', 'Color Science', 'UI Assets'],
			accent: 'var(--color-accent-orange)',
			resources: [
				{
					name: 'Vincent Default Brushes',
					format: 'Procreate .brushset',
					size: '2 MB',
					license: 'CC BY 4.0',
					status: 'preparing',
					href: '/contents/vincent-brush-library.txt'
				},
				{
					name: 'Monitor Calibration LUT',
					format: '.cube',
					size: 'In production',
					license: 'CC BY-NC',
					status: 'preparing'
				}
			]
		}
	];

	const updates = [
		{
			date: '2024.05.12',
			title: 'Field Kit v1',
			detail: 'First public package including TouchDesigner notes and an auto-normalize routine.'
		},
		{
			date: '2024.04.02',
			title: 'Orbit Sutures Timeline',
			detail: 'Rebuilt the export script to ship 8K PNG sequences inside the timeline pack.'
		},
		{
			date: '2024.03.18',
			title: 'Vincent Brush Library',
			detail: 'Updated pressure curves and noise controls for the latest Vincent desktop build.'
		}
	];

	const resourceManifest = works.flatMap((work) =>
		work.resources.map((resource) => ({
			project: work.title,
			accent: work.accent,
			...resource
		}))
	);

	const heroMeta = [
		{ label: 'Release cadence', value: 'First week of every month' },
		{ label: 'Latest update', value: '2024.05.12' }
	];

	const getStatusLabel = (status) => {
		if (status === 'available') return 'Download';
		if (status === 'processing') return 'Processing';
		if (status === 'preparing') return 'Preparing';
		return 'Preparing';
	};
</script>

<Header />

<main class="contents-page">
	<HeroSection
		eyebrow="Archive / Contents"
		title="Everything I build plus the source files"
		description="The Contents page stores the full context around each interactive artwork or toolkit—stories, source files, install instructions, audio, and visual assets all travel together."
		layout="split"
		meta={heroMeta}
	>
		<span slot="notice">
			Resource uploads are temporarily paused. Every package below is shared as a preview and marked
			as <strong>Preparing</strong> until distribution opens again.
		</span>
	</HeroSection>

	<section class="pillar-grid">
		{#each pillars as pillar}
			<SurfaceCard tag="article" className="pillar-card" gap="8px">
				<h3>{pillar.title}</h3>
				<p>{pillar.detail}</p>
			</SurfaceCard>
		{/each}
	</section>

	<section class="collection">
		<SectionHeading
			eyebrow="Artwork Archives"
			title="Archive per project"
			description="Each project ships as a package that includes the final piece plus experiments, tools, audio, and motion presets. Check the cards below for current status and upcoming resources."
			layout="split"
		/>

		<div class="project-grid">
			{#each works as work}
				<article class="project-card" style={`--accent: ${work.accent}`}>
					<div class="project-visual">
						<span>{work.subtitle}</span>
					</div>
					<div class="project-body">
						<div class="project-meta">
							<span class="period">{work.period}</span>
							<span class="status">{work.status}</span>
						</div>
						<h3>{work.title}</h3>
						<p>{work.summary}</p>

						<div class="tag-row">
							{#each work.tags as tag}
								<span class="chip">{tag}</span>
							{/each}
						</div>

						<div class="resource-list">
							{#each work.resources as resource}
								<div class="resource-row">
									<div>
										<p class="resource-name">{resource.name}</p>
										<span class="resource-meta"
											>{resource.format} · {resource.license}</span
										>
									</div>
									<div class="resource-actions">
										<span class="size">{resource.size}</span>
										{#if resource.status === 'available' && resource.href}
											<a class="chip action" href={resource.href} download>Download</a>
										{:else}
											<span class="chip action disabled"
												>{getStatusLabel(resource.status)}</span
											>
										{/if}
									</div>
								</div>
							{/each}
						</div>

						<div class="medium-list">
							{#each work.mediums as medium}
								<span>{medium}</span>
							{/each}
						</div>
					</div>
				</article>
			{/each}
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
			{#each resourceManifest as resource}
				<div class="table-row">
					<span>{resource.name}</span>
					<span class="project" style={`color: ${resource.accent}`}>{resource.project}</span>
					<span>{resource.format}</span>
					<span>{resource.size}</span>
					<span>{resource.license}</span>
					<span>
						{#if resource.status === 'available' && resource.href}
							<a href={resource.href} download class="text-link">Download</a>
						{:else}
							<span class="text-link disabled">{getStatusLabel(resource.status)}</span>
						{/if}
					</span>
				</div>
			{/each}
		</div>
	</section>

	<section class="release-notes">
		<SectionHeading
			eyebrow="Release Notes"
			title="Changelog"
			description="Every release includes a record of which files were updated or packaged."
		/>

		<ul class="update-list">
			{#each updates as update}
				<li>
					<span class="date">{update.date}</span>
					<div>
						<p class="update-title">{update.title}</p>
						<p class="update-detail">{update.detail}</p>
					</div>
				</li>
			{/each}
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
	.pillar-card {
		text-align: left;
	}
	.pillar-card h3 {
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
	.chip.muted {
		color: var(--color-text-secondary);
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
		.page-hero {
			flex-direction: row;
			justify-content: space-between;
		}
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
