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
	<label for={id} class="mb-1 block font-mono text-xs capitalize text-zinc-700 dark:text-white">
		{label}
	</label>
	<input
		{id}
		{name}
		bind:value
		autocomplete="email"
		type="email"
		class="input"
		{placeholder}
		{required}
	/>
	{#if warning !== null}
		<p class="mt-1 font-mono text-xs text-red-600">{warning}</p>
	{/if}
</div>
