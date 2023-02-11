<script>
	import Button from '../form/Button.svelte';
	import InputSearchSelect from '../form/InputSearchSelect.svelte';
</script>

<div class="py-8">
	<Button>Add JobAgent <span class="ml-2 font-mono text-xs">(4 filters)</span></Button>
	<div class="mb-8 grid grid-cols-3 gap-6">
		<InputSearchSelect label={'Area'} btnClass={'btn-ghost-red'} />
		<InputSearchSelect label={'Job role'} btnClass={'btn-ghost-yellow'} />
		<InputSearchSelect label={'Industry'} btnClass={'btn-ghost-blue'} />
	</div>
	<InputSearchSelect label={'Add keyword'} btnClass={'btn-ghost-green'} />
</div>
