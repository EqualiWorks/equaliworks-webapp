<script lang="ts">
	import type { NavItem } from '$lib/components/layout/navigation/NavItem';
	import { sideBarOpen } from './stores';

	export let navItem: NavItem;
	export let activeUrl: string;

	const defaultClass =
		'w-full font-medium text-neutral-500 flex items-center py-3 my-1 px-2 text-sm dark:hover:bg-neutral-800 hover:bg-neutral-100 transition ease-in-out duration-100 rounded';
	const activeClass =
		'w-full dark:text-white font-medium flex items-center py-3 my-1 px-2 text-sm dark:hover:bg-neutral-800 hover:bg-neutral-100 transition ease-in-out duration-100 rounded';
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
				class="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-200 text-xs font-semibold text-red-800"
				>{navItem.notifications}</span
			>
		{/if}
	</a>
</li>
