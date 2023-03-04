<script lang="ts">
	export let title: string;
	export let icon: string;
	export let id: string;
	export let value: string;
	export let checked: boolean = false;
</script>

<input type="checkbox" {id} class="peer hidden" on:click bind:checked {value} />
<label
	for={id}
	class="flex cursor-pointer flex-col items-center justify-center rounded-md border py-3 px-2 text-zinc-500 transition-all duration-150 hover:bg-zinc-50 hover:text-zinc-800 active:scale-[95%] peer-checked:border-black peer-checked:text-black dark:border-zinc-700 dark:text-zinc-400"
>
	<i class={icon} />
	<p class="mt-1 truncate text-xs">
		{title}
	</p>
</label>
