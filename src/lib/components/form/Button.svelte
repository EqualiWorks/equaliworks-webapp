<script lang="ts">
	export let formaction: string | null = null;
	export let disabled: boolean = false;
	export let type: 'reset' | 'submit' = 'submit';

	export let loading: boolean = false;
</script>

<button
	on:click
	{formaction}
	{disabled}
	{type}
	class={`inline-flex w-full cursor-pointer items-center justify-center rounded border px-5 py-3 text-sm font-medium hover:bg-zinc-100 focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-zinc-100 disabled:text-zinc-400 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-900 dark:focus:ring-zinc-500 ${$$props.class}`}
>
	{#if loading}
		<i class="ph-circle-notch-bold ph-xl animate-spin" />
	{:else}
		<slot />
	{/if}
</button>
