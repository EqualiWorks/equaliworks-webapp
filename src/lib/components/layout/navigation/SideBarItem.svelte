<script lang="ts">
	import type { NavItem } from '$lib/components/layout/navigation/NavItem';
	import { sideBarOpen } from './stores';

	export let navItem: NavItem;
	export let activeUrl: string;

	const defaultClass =
		'w-full font-medium text-zinc-500 flex items-center py-3 my-1 px-2 text-sm dark:hover:bg-zinc-800 hover:bg-zinc-100 transition ease-in-out duration-100 rounded';
	const activeClass =
		'w-full dark:text-white font-medium flex items-center py-3 my-1 px-2 text-sm dark:hover:bg-zinc-800 hover:bg-zinc-100 transition ease-in-out duration-100 rounded';
</script>

<li>
	<a
		class={activeUrl === `/${navItem.href}` ? activeClass : defaultClass}
		href={`/${navItem.href}`}
	>
		<i class="{navItem.icon} ph-lg" />
		{#if $sideBarOpen}
			<span class="ml-3">{navItem.title}</span>
		{/if}
		{#if navItem.notifications !== undefined}
			<span
				class="absolute mb-5 ml-4 inline-flex h-2 w-2 items-center justify-center rounded-full bg-red-200 text-xs font-semibold text-red-800 dark:bg-red-600 dark:text-white"
			/>
		{/if}
		{#if navItem.badge !== undefined && $sideBarOpen}
			<span class="btn-ghost-blue ml-auto rounded-full py-0.5 px-2 text-xs tracking-tight"
				>{navItem.badge}</span
			>
		{/if}
	</a>
</li>
