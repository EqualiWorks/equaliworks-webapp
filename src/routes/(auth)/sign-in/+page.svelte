<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '$lib/components/form/+Button.svelte';
	import InputEmail from '$lib/components/form/+InputEmail.svelte';
	import InputPassword from '$lib/components/form/+InputPassword.svelte';
	import type { SubmitFunction } from '@sveltejs/kit';

	// variables
	let email: string = '';
	let password: string = '';
	let provider: string | null = null;
	let emailWarning: string | null = null;
	let passwordWarning: string | null = null;

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
			return cancel();
		}
	};
</script>

<div class="grid grid-cols-2 w-full h-screen divide-x">
	<div class="flex flex-col items-center justify-center">
		<form
			method="POST"
			class="w-80 border-b border-dashed mb-8 pb-8"
			action="?/email-sign-in"
			use:enhance={signInWithEmail}
		>
			<InputEmail warning={emailWarning} bind:value={email} />
			<InputPassword warning={passwordWarning} bind:value={password} />
			<Button>Sign in</Button>
		</form>

		<form class="w-80 flex flex-col gap-2" method="POST" use:enhance={signInWithProvider}>
			<Button loading={provider === 'linkedIn'} formaction="?/provider-sign-in&provider=linkedIn">
				<i class="ph-linkedin-logo ph-xl" />
				<span class="ml-1">LinkedIn</span>
			</Button>
			<Button loading={provider === 'azure'} formaction="?/provider-sign-in&provider=azure">
				<i class="ph-windows-logo ph-xl" />
				<span class="ml-1">Microsoft</span>
			</Button>
			<Button loading={provider === 'google'} formaction="?/provider-sign-in&provider=google">
				<i class="ph-google-logo ph-xl" />
				<span class="ml-1">Google</span>
			</Button>
		</form>
	</div>
	<div class="flex flex-col items-center justify-center">
		<div>
			<h1 class="font-display">Equality Matters</h1>
			<h2 class="font-display text-green-400">You matter</h2>
		</div>

		<div>
			<h1 class="font-display">Your talent is more important than your physical appearance</h1>
		</div>
		<div>
			<h1 class="font-display">Get hired because of your skills. Exclusively</h1>
		</div>
	</div>
</div>
