<script lang="ts">
	import { sideBarOpen } from './stores';

	const toggleSideBar = () => {
		$sideBarOpen ? sideBarOpen.set(false) : sideBarOpen.set(true);
	};
</script>

<div class="fixed flex w-full bg-white/30 backdrop-blur-sm dark:bg-black/30">
	<div
		class="flex {$sideBarOpen
			? 'min-w-[230px]'
			: 'min-w-[50px]'} items-center justify-between border-r border-b dark:border-zinc-700"
	>
		{#if $sideBarOpen}
			<a href="/dashboard" class="flex items-center px-4 dark:border-zinc-700">
				<h6 class="font-display font-light dark:text-white">EQ-WORKS</h6>
			</a>
		{/if}

		<button aria-label="toggle sidebar width" class="mt-1 px-4 py-2" on:click={toggleSideBar}>
			<i class="ph-list-bold dark:text-white" />
		</button>
	</div>

	<div class=" flex h-12 w-full items-center border-b px-4 dark:border-zinc-700">
		<div class="text-xs text-zinc-400">/dashboard</div>
	</div>
</div>
