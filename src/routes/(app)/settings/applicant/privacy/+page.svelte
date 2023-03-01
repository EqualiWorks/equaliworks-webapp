<script lang="ts">
	import { enhance, type SubmitFunction } from '$app/forms';
	import { toastStore } from '$lib/components/toast/stores';
	import Spinner from '$lib/components/utility/Spinner.svelte';
	import type { PageData } from './$types';

	import PrivacyItem from './PrivacyItem.svelte';

	export let data: PageData;

	let loading: boolean = false;
	let userUpdatedValue: boolean = false;

	const handleSubmit: SubmitFunction = async () => {
		loading = true;
		return async ({ result }) => {
			switch (result.type) {
				case 'success':
					toastStore.trigger({
						message: 'Updated privacy settings',
						icon: 'ph-check-circle-bold',
						type: 'success'
					});
					break;
				case 'failure':
					toastStore.trigger({
						message: 'Could not update privacy settings',
						icon: 'ph-warning-circle-bold',
						type: 'error',
						autohide: false
					});
					break;
			}
			loading = false;
		};
	};
	$: loading;
</script>

<div class="grid grid-cols-8">
	<div class="col-span-6">
		<div class="mb-6">
			<p class="mb-3 dark:text-zinc-200">
				Regardless of the privacy settings for individual job posts,
				<span class="font-display text-sm uppercase">EqualiWorks</span>
				enables applicants to conceal various details about themselves.
			</p>
			<p class="text-sm dark:text-zinc-400">
				Learn more about your privacy <a href="/" class="text-blue-400 underline">here</a>
			</p>
		</div>
		<hr class="my-8" />
		<form method="POST" action="?/update-privacy" use:enhance={handleSubmit}>
			<div class="divide-y rounded-xl border dark:divide-zinc-700 dark:border-zinc-700">
				<PrivacyItem
					on:change={() => (userUpdatedValue = true)}
					bind:checked={data.privacySettings.hide_gender}
					id={'gender'}
					icon={'ph-gender-neuter'}
				>
					gender
				</PrivacyItem>
				<PrivacyItem
					on:change={() => (userUpdatedValue = true)}
					bind:checked={data.privacySettings.hide_age}
					id={'age'}
					icon={'ph-user'}>age</PrivacyItem
				>
				<PrivacyItem
					on:change={() => (userUpdatedValue = true)}
					bind:checked={data.privacySettings.hide_address}
					id={'address'}
					icon={'ph-map-trifold'}
				>
					address
				</PrivacyItem>
				<PrivacyItem
					on:change={() => (userUpdatedValue = true)}
					bind:checked={data.privacySettings.hide_workplace_details}
					id={'workplace_details'}
					icon={'ph-buildings'}
				>
					workplace details
				</PrivacyItem>
				<PrivacyItem
					on:change={() => (userUpdatedValue = true)}
					bind:checked={data.privacySettings.hide_educational_details}
					id={'educational_details'}
					icon={'ph-graduation-cap'}
					description={'This setting will hide details such as graduation year and location of institution'}
				>
					educational institution details
				</PrivacyItem>
			</div>
			<hr class="my-8" />
			<button
				disabled={!userUpdatedValue}
				class="btn {userUpdatedValue ? 'btn-green' : 'btn-default'}"
			>
				{#if loading}
					<Spinner size="ph-lg" />
				{/if}
				Save changes
			</button>
		</form>
	</div>
</div>
