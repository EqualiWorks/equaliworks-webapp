<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { page } from '$app/stores';
	import Button from '$lib/components/form/Button.svelte';

	const submitLogout: SubmitFunction = async ({ cancel }) => {};
</script>

<div class="p-4">
	<div>
		<h2 class="font-display">{$page.data.session?.user.user_metadata.name}</h2>
		<h2 class="font-mono">{$page.data.session?.user.user_metadata.email}</h2>
	</div>
	<form action="?/sign-out" method="POST" use:enhance={submitLogout}>
		<Button class="hover:text-red-500">sign out</Button>
	</form>
</div>
