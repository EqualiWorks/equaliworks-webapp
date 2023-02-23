<script>
	import PrivacyItem from './PrivacyItem.svelte';
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
		<div class="divide-y rounded-xl border dark:divide-zinc-700 dark:border-zinc-700">
			<PrivacyItem checked={true} icon={'ph-gender-neuter'}>gender</PrivacyItem>
			<PrivacyItem checked={true} icon={'ph-user'}>age</PrivacyItem>
			<PrivacyItem checked={true} icon={'ph-map-trifold'}>address</PrivacyItem>
			<PrivacyItem checked={true} icon={'ph-buildings'}>workplace details</PrivacyItem>
			<PrivacyItem
				checked={true}
				icon={'ph-graduation-cap'}
				description={'This setting will hide details such as graduation year and location of institution'}
			>
				educational institution details
			</PrivacyItem>
		</div>
		<hr class="my-8" />
		<button class="btn-green btn-sm">Save changes</button>
	</div>
</div>
