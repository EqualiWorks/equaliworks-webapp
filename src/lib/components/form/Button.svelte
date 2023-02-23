<!-- <script lang="ts">
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
</button> -->
<script lang="ts">
	export let label: string;
	export let formaction: string | undefined = undefined;
	export let disabled: boolean = false;
	export let color:
		| 'ghost-red'
		| 'ghost-green'
		| 'ghost-default'
		| 'default'
		| 'green'
		| 'red'
		| 'yellow' = 'default';
	export let size: 'sm' | 'md' = 'md';
	export let loading: boolean = false;
	export let icon: string | undefined = undefined;

	const sizes = {
		sm: 'btn-sm',
		md: 'btn'
	};

	const iconSizes = {
		sm: 'ph-lg',
		md: 'ph-lg'
	};

	const colors = {
		'ghost-red': 'btn-ghost-red',
		'ghost-green': 'btn-ghost-green',
		'ghost-default': 'btn-ghost',
		default: 'btn-default',
		green: 'btn-green',
		red: 'btn-red',
		yellow: 'btn-yellow'
	};
</script>

<button
	on:click
	{formaction}
	{disabled}
	class="{sizes[size]} {colors[color]} inline-flex items-center"
>
	{#if loading}
		<i class="ph-spinner-bold {iconSizes[size]} mr-2 animate-spin" />
	{:else if icon}
		<i class="{icon} mr-2 {iconSizes[size]}" />
	{/if}
	{label}
</button>
