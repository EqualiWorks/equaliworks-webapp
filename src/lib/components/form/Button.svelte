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
	export let type: 'button' | 'submit' = 'button';
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
	{type}
	class="{sizes[size]} {colors[color]} inline-flex items-center"
>
	{#if loading}
		<i class="ph-spinner-bold {iconSizes[size]} mr-2 animate-spin" />
	{:else if icon}
		<i class="{icon} mr-2 {iconSizes[size]}" />
	{/if}
	{label}
</button>
