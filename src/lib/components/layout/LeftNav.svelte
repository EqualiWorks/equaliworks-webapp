<script lang="ts">
	import { page } from '$app/stores';
	import LefNavItem from './LefNavItem.svelte';
	import type { NavItem } from './NavItem';

	export let navItems: NavItem[];

	$: activeUrl = $page.url.pathname;
</script>

<nav class="border-r w-52 h-screen flex flex-col">
	<a href="/dashboard">
		<h5 class="font-display font-light border-b py-2 px-4">
			<span class="font-normal">E</span>ORKS
		</h5>
	</a>
	<ul class="py-4 px-2">
		{#each navItems as navItem}
			<LefNavItem {navItem} {activeUrl} />
		{/each}
	</ul>
	<a class="mt-auto px-2 py-2 mb-2 text-sm text-neutral-600" href="/profile"> Logout </a>
</nav>
