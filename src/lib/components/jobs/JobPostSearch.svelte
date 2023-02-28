<script>
	import InputSearchSelect from '../form/InputSearchSelect.svelte';
</script>

<div
	class="grid grid-cols-3 gap-6 border-b bg-white/80 py-8 px-4 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50"
>
	<InputSearchSelect label={'Area'} btnClass={'btn-ghost-red'} />
	<InputSearchSelect label={'Job role'} btnClass={'btn-ghost-yellow'} />
	<InputSearchSelect label={'Industry'} btnClass={'btn-ghost-blue'} />
</div>
<div
	class="border-b bg-white/80 px-4 py-8 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/50"
>
	<InputSearchSelect label={'Add keyword'} btnClass={'btn-ghost-green'} />
</div>
