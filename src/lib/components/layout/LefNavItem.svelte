<script lang="ts">
	import type { NavItem } from './NavItem';

	export let navItem: NavItem;
	export let activeUrl: string;

	const activeClass =
		'w-full text-neutral-600 flex justify-between py-2 px-2 text-sm hover:bg-neutral-100 transition ease-in-out duration-100 rounded';
	const defaultClass =
		'w-full font-medium flex justify-between text-purple-800 py-2 px-2 text-sm hover:bg-neutral-200 transition ease-in-out duration-100 rounded';

	console.log(navItem.href);
</script>

<li class="">
	<a
		class={activeUrl === `/${navItem.href}` ? defaultClass : activeClass}
		href={`/${navItem.href}`}
	>
		{activeUrl === `/${navItem.href}` ? '> ' : ''}{navItem.title}
		{#if navItem.notifications !== undefined}
			<span
				class="inline-flex items-center justify-center w-5 h-5 ml-2 text-xs font-semibold text-red-800 bg-red-200 rounded-full"
				>{navItem.notifications}</span
			>
		{/if}
	</a>
</li>
