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
	class={`inline-flex w-full cursor-pointer items-center justify-center rounded border px-5 py-3 text-sm font-medium hover:bg-neutral-100 focus:outline-none focus:ring-4 disabled:cursor-not-allowed disabled:bg-neutral-100 disabled:text-neutral-400 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-900 dark:focus:ring-neutral-500 ${$$props.class}`}
>
	{#if loading}
		<i class="ph-circle-notch-bold ph-xl animate-spin" />
	{:else}
		<slot />
	{/if}
</button>
