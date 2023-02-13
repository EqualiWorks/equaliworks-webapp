<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { page } from '$app/stores';
	import InputText from '$lib/components/form/InputText.svelte';

	const submitLogout: SubmitFunction = async ({ cancel }) => {};
</script>

<div class="">
	<InputText
		class="border-b p-4"
		value={$page.data.session?.user.user_metadata.name}
		name="name"
		type="text"
		label="Name"
	/>

	<InputText
		class="border-b p-4"
		value={$page.data.session?.user.user_metadata.name}
		name="email"
		type="email"
		label="Email"
	/>

	<InputText
		class="border-b p-4"
		value={'303130761213123'}
		name="number"
		type="phone"
		label="Phone"
	/>

	<div class="grid grid-cols-2">
		<InputText
			class="border-b p-4"
			value={'303130761213123'}
			name="number"
			type="phone"
			label="Phone"
		/>
		<InputText
			class="border-b p-4"
			value={'303130761213123'}
			name="number"
			type="phone"
			label="Phone"
		/>
	</div>
</div>

<div class="mt-auto px-4 pb-6">
	<form action="?/sign-out" method="POST" use:enhance={submitLogout}>
		<button class="btn-ghost-red btn-sm" type="submit">Sign out</button>
	</form>
</div>
