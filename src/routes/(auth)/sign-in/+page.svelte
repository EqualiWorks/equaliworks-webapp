<script lang="ts">
	import type { SubmitFunction } from '@sveltejs/kit';

	const OAUTH_PROVIDERS = ['discord', 'github'];

	const signInWithProvider: SubmitFunction = async ({ action, cancel }): Promise<void> => {
		const provider = action.searchParams.get('provider');

		if (provider === null) {
			console.log('provider cannot be null');
			return cancel();
		}

		if (!OAUTH_PROVIDERS.includes(provider)) {
			console.log('provider not supported');
			return cancel();
		}
	};
</script>

<div class="grid grid-cols-2 w-full h-screen divide-x">
	<div class="flex flex-col items-center justify-center">
		<div class="mb-6">
			<label
				for="email"
				class="block mb-2 w-80 text-sm font-medium text-neutral-900 dark:text-white">Email</label
			>
			<input
				type="email"
				id="email"
				class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="name@flowbite.com"
				required
			/>
		</div>
		<div class="mb-6">
			<label
				for="password"
				class="block mb-2 w-80 text-sm font-medium text-neutral-900 dark:text-white">Password</label
			>
			<input
				type="password"
				id="password"
				class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				required
			/>
		</div>
		<div>
			<button
				type="button"
				class="text-neutral-900 bg-white border border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-neutral-800 dark:text-white dark:border-neutral-600 dark:hover:text-green-400 dark:hover:border-neutral-600 dark:focus:ring-neutral-700"
				>Login</button
			>
		</div>
		<div>
			<button
				type="button"
				class="text-neutral-900  bg-white border border-neutral-300 focus:outline-none focus:ring-4 focus:ring-neutral-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-neutral-800 dark:text-white dark:border-neutral-600 dark:hover:text-green-400 dark:hover:border-neutral-600 dark:focus:ring-neutral-700"
			>
				<i class="ph-linkedin-logo-bold" /></button
			>
		</div>
	</div>
	<div class="flex items-center justify-center">
		<p class="text-green-400">image</p>
	</div>
</div>
