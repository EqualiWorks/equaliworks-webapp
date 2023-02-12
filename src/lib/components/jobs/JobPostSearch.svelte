<script>
	import Button from '../form/Button.svelte';
	import InputSearchSelect from '../form/InputSearchSelect.svelte';
</script>

<div class="grid grid-cols-3 gap-6 border-b py-8 px-4 dark:border-zinc-700 dark:bg-zinc-900">
	<InputSearchSelect label={'Area'} btnClass={'btn-ghost-red'} />
	<InputSearchSelect label={'Job role'} btnClass={'btn-ghost-yellow'} />
	<InputSearchSelect label={'Industry'} btnClass={'btn-ghost-blue'} />
</div>
<div class="border-b px-4 py-8 dark:border-zinc-700 dark:bg-zinc-900">
	<InputSearchSelect label={'Add keyword'} btnClass={'btn-ghost-green'} />
</div>
