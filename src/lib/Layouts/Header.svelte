<script>
	import { navigationLinks } from '$lib/config/site.js';

	const navItems = navigationLinks;
</script>

<header class="header">
	<div class="title">
		<a href="/" aria-label="IISACC home">
			<img class="iisacccom-1" src="/icons/IISACC.svg" alt="IISACC logo" />
		</a>
	</div>

	<nav aria-label="Primary navigation">
		<ul class="nav-list">
			{#each navItems as item}
				<li class="nav-item">
					<a href={item.href}>
						<span class="tag_span">{item.title}</span>
					</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>

<style>
	.header {
		display: flex;
		gap: 16px;
		align-items: center;
		width: 100%;
		height: 100%;
		justify-content: flex-start;
		margin-bottom: 32px;
	}
	.title a {
		display: inline-flex;
		align-items: center;
		gap: 8px;
	}
	.iisacccom-1 {
		display: flex;
		width: 36px;
		height: 36px;
		transform-origin: top left;
		border-radius: 0%;
	}
	.tag_span {
		color: white;
		font-size: 15px;
		font-weight: 600;
		line-height: 20px;
		word-wrap: break-word;
	}
	.nav-list {
		display: flex;
		list-style: none;
		padding: 0;
		margin: 0;
		gap: 12px;
	}
	.nav-item a {
		display: inline-flex;
		align-items: center;
		gap: 4px;
	}
</style>
