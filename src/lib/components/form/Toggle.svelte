<script lang="ts">
	export let label: string | undefined = undefined;
	export let checked: boolean = false;
	export let name: string;
	export let id: string;
</script>

<label class="relative inline-flex cursor-pointer items-center">
	<input type="checkbox" value="" class="peer sr-only" {id} {name} bind:checked />
	<div
		class="peer h-5 w-9 rounded-full bg-zinc-200 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-zinc-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-green-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-green-300 dark:border-zinc-600 dark:bg-zinc-700 dark:peer-focus:ring-green-800"
	/>

	{#if label !== undefined}
		<span class="ml-3 text-sm font-medium text-zinc-900 dark:text-zinc-300">{label}</span>
	{/if}
</label>
