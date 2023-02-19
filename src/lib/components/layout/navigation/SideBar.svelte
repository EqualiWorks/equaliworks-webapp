<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import type { NavItem } from './NavItem';
	import SideBarItem from './SideBarItem.svelte';
	import { sideBarOpen } from './stores';

	export let navItems: NavItem[];

	let innerWidth: number = 0;

	$: innerWidth < 1280 ? sideBarOpen.set(false) : sideBarOpen.set(true);
	$: activeUrl = $page.url.pathname;
</script>

<svelte:window bind:innerWidth />

<aside
	transition:fade
	class="flex h-full flex-col border-0 bg-black {$sideBarOpen ? 'min-w-[230px]' : 'w-[60px]'}"
>
	<div class="flex items-center justify-between">
		<a href="/dashboard" class="my-3 ml-1 flex items-center p-4 dark:border-zinc-800">
			<h6 class="font-display font-light text-white">{$sideBarOpen ? 'EQ-WORKS' : 'EQ'}</h6>
		</a>
	</div>

	<ul class="pl-1 pr-1">
		{#each navItems as navItem}
			<SideBarItem {navItem} {activeUrl} />
		{/each}
	</ul>
	<div class="mt-auto {$sideBarOpen ? 'ml-1 py-4' : 'pb-2 pt-4'}">
		<a
			class="mb-2 flex items-center px-2 py-2 text-sm font-medium text-zinc-500 hover:text-black"
			href="/profile"
		>
			<div class="flex items-center">
				<img
					class="h-8 w-8 rounded-full"
					src={$page.data.session?.user.user_metadata.avatar_url}
					alt="avatar"
				/>
				{#if $sideBarOpen}
					<span class="ml-2 dark:text-white">{$page.data.session?.user.user_metadata.name}</span>
				{/if}
			</div>
		</a>
	</div>
</aside>
