<script lang="ts">
	import type { NavItem } from '../layout/navigation/NavItem';

	export let tabs: NavItem[] = [];
	export let activeUrl: string;
</script>

<ul class="flex gap-2 border-b px-4">
	{#each tabs as item}
		{#if activeUrl === `/${item.href}`}
			<li class="-mb-0.5 rounded-t border-b-2 border-green-400 px-2 pt-2 pb-1 hover:bg-zinc-200">
				<a href={`/${item.href}`} class="rounded-t p-2 text-sm font-medium">{item.title}</a>
			</li>
		{:else}
			<li class="rounded-t px-2 pt-2 pb-1 text-zinc-600 hover:bg-zinc-200">
				<a href={`/${item.href}`} class="rounded-t p-2 text-sm font-medium hover:text-black"
					>{item.title}</a
				>
			</li>
		{/if}
	{/each}
</ul>
