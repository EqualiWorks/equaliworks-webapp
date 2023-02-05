<script lang="ts">
	import type { NavItem } from './NavItem';

	export let navItem: NavItem;
	export let activeUrl: string;

	const defaultClass =
		'w-full font-medium text-neutral-500 flex items-center py-3 my-1 px-2 text-sm dark:hover:bg-neutral-800 hover:bg-neutral-100 transition ease-in-out duration-100 rounded';
	const activeClass =
		'w-full dark:text-white font-medium flex items-center py-3 my-1 px-2 text-sm dark:hover:bg-neutral-800 hover:bg-neutral-100 transition ease-in-out duration-100 rounded';

	console.log(navItem.href);
</script>

<li>
	<a
		class={activeUrl === `/${navItem.href}` ? activeClass : defaultClass}
		href={`/${navItem.href}`}
	>
		<i class="{navItem.icon} mr-2 ph-lg" />
		{navItem.title}
		{#if navItem.notifications !== undefined}
			<span
				class="inline-flex items-center justify-center w-5 h-5 ml-2 text-xs font-semibold text-red-800 bg-red-200 rounded-full"
				>{navItem.notifications}</span
			>
		{/if}
	</a>
</li>
