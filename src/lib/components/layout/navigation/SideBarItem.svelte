<script lang="ts">
	import type { NavItem } from '$lib/components/layout/navigation/NavItem';
	import { sideBarOpen } from './stores';

	export let navItem: NavItem;
	export let activeUrl: string;
</script>

<li>
	<a
		class="my-1 flex items-center rounded py-3 px-4 text-sm transition duration-100 ease-in-out hover:bg-zinc-800 
			{activeUrl === `/${navItem.href}`
			? 'bg-zinc-800 font-semibold text-white'
			: 'font-medium text-zinc-300'}"
		href={`/${navItem.href}`}
	>
		<i class="{navItem.icon} ph-lg" />
		{#if $sideBarOpen}
			<span class="ml-3">{navItem.title}</span>
		{/if}
		{#if navItem.notifications !== undefined}
			<span
				class="absolute mb-5 ml-4 inline-flex h-2 w-2 items-center justify-center rounded-full bg-red-500 text-xs font-semibold text-red-800 dark:bg-red-600 dark:text-white"
			/>
		{/if}
		{#if navItem.badge !== undefined && $sideBarOpen}
			<span class="btn-ghost-blue ml-auto rounded-full py-0.5 px-2 text-xs tracking-tight"
				>{navItem.badge}</span
			>
		{/if}
	</a>
</li>
