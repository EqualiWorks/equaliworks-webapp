<script lang="ts">
	import { enhance } from '$app/forms';
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
			class="mb-8 w-80 border-b border-dashed pb-8 dark:border-zinc-600 flex flex-col gap-2"
			action="?/email-sign-in"
			use:enhance={signInWithEmail}
		>
			<div>
				<label for="email" class="label">Email</label>
				<input type="email" id="email" class="input mt-1" />
			</div>
			<div class="grid grid-cols-2 gap-2">
				<button type="submit" class="btn btn-default justify-center">Sign in</button>
				<a href="/sign-up" class="btn btn-default justify-center">Sign up</a>
			</div>
		</form>

		<form class="flex w-80 flex-col gap-2" method="POST" use:enhance={signInWithProvider}>
			<button
				type="submit"
				class="btn btn-default"
				formaction="?/provider-sign-in&provider=linkedIn"
			>
				<i class="ph-linkedin-logo-bold ph-lg" />
				LinkedIn
			</button>
			<button type="submit" class="btn btn-default" formaction="?/provider-sign-in&provider=azure">
				<i class="ph-windows-logo-bold ph-lg" />
				Microsoft
			</button>
			<button type="submit" class="btn btn-default" formaction="?/provider-sign-in&provider=google">
				<i class="ph-google-logo-bold ph-lg" />
				Google
			</button>
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
