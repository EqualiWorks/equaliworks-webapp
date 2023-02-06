<script lang="ts">
	export let formaction: string | null = null;
	export let disabled: boolean = false;
	export let type: 'reset' | 'submit' = 'submit';

	export let loading: boolean = false;
</script>

<button
	{formaction}
	{disabled}
	{type}
	class={`w-full justify-center disabled:bg-neutral-100 disabled:text-neutral-400 disabled:cursor-not-allowed cursor-pointer dark:text-white dark:border-neutral-700 border dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 focus:ring-4 focus:outline-none font-medium rounded text-sm px-5 py-3 inline-flex items-center dark:focus:ring-neutral-500 ${$$props.class}`}
>
	{#if loading}
		<i class="ph-circle-notch-bold ph-xl animate-spin" />
	{:else}
		<slot />
	{/if}
</button>
