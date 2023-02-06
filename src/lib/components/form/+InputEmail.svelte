<script lang="ts">
	export let id: string = 'form-email';
	export let name: string = 'email';
	export let label: string = 'email';
	export let placeholder: string = 'you@example.com';
	export let required: boolean = true;
	export let value: string = '';
	export let warning: string | null = null;
</script>

<div class="mb-6">
	<label for={id} class="block mb-1 text-xs font-mono text-neutral-700 dark:text-white capitalize">
		{label}
	</label>
	<input
		{id}
		{name}
		bind:value
		autocomplete="email"
		type="email"
		class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-700 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		{placeholder}
		{required}
	/>
	{#if warning !== null}
		<p class="mt-1 font-mono text-xs text-red-600">{warning}</p>
	{/if}
</div>
