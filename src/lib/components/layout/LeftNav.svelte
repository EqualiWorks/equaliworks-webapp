<script lang="ts">
	import { page } from '$app/stores';
	import LefNavItem from './LefNavItem.svelte';
	import type { NavItem } from './NavItem';

	export let navItems: NavItem[];

	$: activeUrl = $page.url.pathname;
</script>

<nav class="border-r dark:border-neutral-700 w-72 h-screen flex flex-col">
	<a href="/dashboard" class="h-12 border-b dark:border-neutral-700 flex items-center px-4">
		<h6 class="font-display font-light dark:text-white">EQ-WORKS</h6>
	</a>
	<ul class="py-4 px-2">
		{#each navItems as navItem}
			<LefNavItem {navItem} {activeUrl} />
		{/each}
	</ul>
	<div class="mt-auto px-2 py-4">
		<a
			class="px-2 py-2 mb-2 text-sm flex items-center hover:text-red-500 font-medium text-neutral-500"
			href="/profile"
		>
			<i class="ph-sign-out-bold mr-2 ph-lg" />
			<span>Logout</span>
		</a>
	</div>
</nav>
