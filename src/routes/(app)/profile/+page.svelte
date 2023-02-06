<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import Button from '$lib/components/form/+Button.svelte';

	const submitLogout: SubmitFunction = async ({ cancel }) => {};
</script>

<div class="p-4">
	<form action="?/sign-out" method="POST" use:enhance={submitLogout}>
		<Button class="hover:text-red-500">sign out</Button>
	</form>
</div>
