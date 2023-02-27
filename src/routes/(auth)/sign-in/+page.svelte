<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/form/Button.svelte';
	import Input from '$lib/components/form/Input.svelte';
	import { toastStore } from '$lib/components/toast/stores';
	import type { SubmitFunction } from '@sveltejs/kit';

	// variables
	let email: string = '';
	let password: string = '';
	let provider: string | null = null;
	let emailWarning: string | undefined = undefined;
	let passwordWarning: string | undefined = undefined;

	const signInWithEmail: SubmitFunction = async ({ cancel }): Promise<void> => {
		provider = 'email';

		if (email === '') {
			emailWarning = 'email cannot be empty';
			return cancel();
		}

		if (password === '') {
			passwordWarning = 'password cannot be empty';
			return cancel();
		}

		if (password.length < 6) {
			passwordWarning = 'password too short';
			return cancel();
		}
	};

	const signInWithProvider: SubmitFunction = async ({ action, cancel }): Promise<void> => {
		provider = action.searchParams.get('provider');

		if (provider === null) {
			toastStore.trigger({
				message: 'Please select a provider',
				icon: 'ph-warning-circle-bold',
				type: 'error',
				autohide: false
			});
			return cancel();
		}
	};
</script>

<div class="grid h-screen w-full grid-cols-1 divide-x lg:grid-cols-2">
	<div class="flex flex-col items-center justify-center">
		<form
			method="POST"
			class="mb-8 w-80 border-b border-dashed pb-8 dark:border-zinc-600"
			action="?/email-sign-in"
			use:enhance={signInWithEmail}
		>
			<Input id="email" label="Email" warning={emailWarning} bind:value={email} />
			<Button type="submit" label="Sign in" />
		</form>

		<form class="flex w-80 flex-col gap-2" method="POST" use:enhance={signInWithProvider}>
			<Button
				type="submit"
				label="LinkedIn"
				icon="ph-linkedin-logo-bold"
				loading={provider === 'linkedIn'}
				formaction="?/provider-sign-in&provider=linkedIn"
			/>
			<Button
				type="submit"
				label="Microsoft"
				icon="ph-windows-logo-bold"
				loading={provider === 'azure'}
				formaction="?/provider-sign-in&provider=azure"
			/>
			<Button
				type="submit"
				label="Google"
				icon="ph-google-logo"
				loading={provider === 'google'}
				formaction="?/provider-sign-in&provider=google"
			/>
		</form>
	</div>
	<div class="bg hidden flex-col items-center justify-center overflow-hidden p-4 lg:flex">
		<h1 class="font-display">Your talent is more important than your physical appearance</h1>
		<h1 class="font-display">Get hired because of your skills. Exclusively</h1>
		<h1 class="font-display">Your talent is more important than your physical appearance</h1>
		<h1 class="font-display">Get hired because of your skills. Exclusively</h1>
		<h1 class="font-display">Your talent is more important than your physical appearance</h1>
		<h1 class="font-display">Get hired because of your skills. Exclusively</h1>
		<h1 class="font-display">Your talent is more important than your physical appearance</h1>
		<h1 class="font-display">Get hired because of your skills. Exclusively</h1>
		<h1 class="font-display">Your talent is more important than your physical appearance</h1>
		<h1 class="font-display">Get hired because of your skills. Exclusively</h1>
		<h1 class="font-display">Your talent is more important than your physical appearance</h1>
		<h1 class="font-display">Get hired because of your skills. Exclusively</h1>
	</div>
</div>
