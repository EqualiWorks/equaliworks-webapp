<script lang="ts">
	export let id: string = 'form-password';
	export let name: string = 'password';
	export let label: string = 'password';
	export let placeholder: string = '';
	export let required: boolean = true;
	export let value: string = '';
	export let warning: string | null = null;
</script>

<div class="mb-6">
	<label for={id} class="mb-1 block font-mono text-xs capitalize text-zinc-700 dark:text-white">
		{label}
	</label>
	<input
		{id}
		{name}
		bind:value
		autocomplete="password"
		type="password"
		class="block w-full rounded border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-zinc-800 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
		{placeholder}
		{required}
	/>
	{#if warning !== null}
		<p class="mt-1 font-mono text-xs text-red-600">{warning}</p>
	{/if}
</div>
