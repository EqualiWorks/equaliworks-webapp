<script lang="ts">
	import { page } from '$app/stores';
	import { fade } from 'svelte/transition';
	import type { NavItem } from './NavItem';
	import SideBarItem from './SideBarItem.svelte';
	import { sideBarOpen } from './stores';

	export let navItems: NavItem[];

	$: activeUrl = $page.url.pathname;
</script>

<nav
	transition:fade
	class="fixed flex h-screen {$sideBarOpen
		? 'min-w-[230px]'
		: 'min-w-[50px]'} flex-col border-r pt-12 dark:border-neutral-700"
>
	<ul class="py-4 pl-2 pr-1">
		{#each navItems as navItem}
			<SideBarItem {navItem} {activeUrl} />
		{/each}
	</ul>
	<div class="mt-auto {$sideBarOpen ? 'ml-1 py-4' : 'pb-2 pt-4'}">
		<a
			class="mb-2 flex items-center px-2 py-2 text-sm font-medium text-neutral-500 hover:text-black"
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
</nav>
