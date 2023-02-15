<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { sideBarOpen } from './stores';

	let breadCrumbs: string[] = [];

	const toggleSideBar = () => {
		$sideBarOpen ? sideBarOpen.set(false) : sideBarOpen.set(true);
	};

	const constructBreadCrumbs = () => {
		const urlParts = $page.url.pathname.split('/').slice(1);

		if (urlParts == null) return [];

		breadCrumbs = urlParts;
	};

	onMount(() => {
		constructBreadCrumbs();
	});
</script>

<div class="fixed flex w-full bg-white/80 backdrop-blur-sm dark:bg-zinc-900/80">
	<div
		class="flex {$sideBarOpen
			? 'min-w-[230px]'
			: 'min-w-[50px]'} items-center justify-between border-r border-b dark:border-zinc-800"
	>
		{#if $sideBarOpen}
			<a href="/dashboard" class="flex items-center px-4 dark:border-zinc-800">
				<h6 class="font-display font-light dark:text-white">EQ-WORKS</h6>
			</a>
		{/if}

		<button aria-label="toggle sidebar width" class="mt-1 px-4 py-2" on:click={toggleSideBar}>
			<i class="ph-list-bold dark:text-white" />
		</button>
	</div>

	<div class=" flex h-12 w-full items-center border-b px-4 dark:border-zinc-800">
		<a class="mr-2 font-mono text-xs text-zinc-400" href="/dashboard">home</a>
		{#each breadCrumbs as breadCrumb}
			<a href={`/${breadCrumb}`} class="mr-2 font-mono text-xs text-zinc-400">{breadCrumb}</a>
		{/each}
	</div>
</div>
