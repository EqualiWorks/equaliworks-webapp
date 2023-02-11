<script lang="ts">
	import { page } from '$app/stores';
	import LefNavItem from './LefNavItem.svelte';
	import type { NavItem } from './NavItem';

	export let navItems: NavItem[];

	$: activeUrl = $page.url.pathname;
</script>

<nav class="fixed flex h-screen min-w-[230px] flex-col border-r pt-12 dark:border-neutral-700">
	<ul class="py-4 px-2">
		{#each navItems as navItem}
			<LefNavItem {navItem} {activeUrl} />
		{/each}
	</ul>
	<div class="mt-auto px-2 py-4">
		<a
			class="mb-2 flex items-center px-2 py-2 text-sm font-medium text-neutral-500 hover:text-black"
			href="/profile"
		>
			<div class="flex items-center">
				<img
					class="mr-2 h-8 w-8 rounded-full"
					src={$page.data.session?.user.user_metadata.avatar_url}
					alt="avatar"
				/>
				<span class="dark:text-white">{$page.data.session?.user.user_metadata.name}</span>
			</div>
		</a>
	</div>
</nav>
