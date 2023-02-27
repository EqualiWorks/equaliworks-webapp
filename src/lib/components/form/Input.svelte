<script lang="ts">
	export let id: string;
	export let label: string | undefined = undefined;
	export let type: 'text' | 'number' | 'email' | 'password' | 'date' = 'text';
	export let value: string = '';
	export let placeholder: string = '';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let border: 'default' | 'red' | 'green' = 'default';
	export let warning: string | undefined = undefined;

	const colors = {
		red: 'border-red-500',
		green: 'border-green-500',
		default: ''
	};

	const sizes = {
		sm: 'text-xs',
		md: 'text-sm',
		lg: 'text-md'
	};
</script>

{#if label !== undefined}
	<label for={id} class="mb-0.5 block text-sm dark:text-zinc-300">
		{label}
	</label>
{/if}
<input
	class="transition-scale w-full rounded border border-zinc-700 px-3 py-1.5 ring-0 ring-transparent duration-200 focus:outline-none focus:ring-0 active:scale-[102%] dark:bg-zinc-800 dark:text-white dark:focus:border-blue-400 {colors[
		border
	]} {sizes[size]}"
	{id}
	{type}
	{value}
	{placeholder}
/>
{#if warning !== undefined}
	<span class="text-red-500">{warning}</span>
{/if}
