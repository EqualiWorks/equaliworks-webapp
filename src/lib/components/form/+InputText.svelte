<script lang="ts">
	export let name: string;
	export let label: string;
	export let id: string = `form-${name}`;
	export let placeholder: string = '';
	export let required: boolean = true;
	export let value: string = '';
	export let disabled: boolean = false;
</script>

<div class="mb-6">
	<label for={id} class="block mb-1 text-xs font-mono text-neutral-700 dark:text-white capitalize">
		{label}
	</label>
	<input
		{id}
		{name}
		bind:value
		type="text"
		class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-800 dark:border-neutral-700 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
		{placeholder}
		{required}
		{disabled}
	/>
</div>
