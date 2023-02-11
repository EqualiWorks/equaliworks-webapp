<script>
	import InputSearchSelect from '../form/InputSearchSelect.svelte';
</script>

<div class="py-8">
	<div class="mb-8 grid grid-cols-3 gap-6">
		<InputSearchSelect label={'Area'} />
		<InputSearchSelect label={'Job role'} />
		<InputSearchSelect label={'Industry'} />
	</div>
	<InputSearchSelect label={'Add keyword'} />
</div>
