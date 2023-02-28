<script lang="ts">
	import Input from '$lib/components/form/Input.svelte';

	let loading = false;
</script>

<div class="grid grid-cols-8">
	<div class="col-span-6">
		<div class="mb-6">
			<Input id={'name-input'} label={'Full name'} value={''} />
		</div>
		<div class="mb-6">
			<Input id={'phone-input'} label={'Phone'} value={''} />
		</div>
		<div class="mb-6">
			<Input id={'email-input'} label={'Email'} value={''} />
		</div>

		<hr class="my-8" />
	</div>
</div>
