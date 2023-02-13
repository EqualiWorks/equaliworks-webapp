<script lang="ts">
	import { page } from '$app/stores';
	import type { NavItem } from '$lib/components/layout/navigation/NavItem';
	import Tabs from '$lib/components/tabs/Tabs.svelte';

	const tabs = [
		{
			href: 'profile',
			title: 'General'
		},
		{
			href: 'profile/privacy',
			title: 'Privacy'
		},
		{
			href: 'profile/about',
			title: 'About'
		},
		{
			href: 'profile/job-roles',
			title: 'Job roles'
		}
	] as NavItem[];

	$: activeUrl = $page.url.pathname;
</script>

<div class="grid h-full grid-cols-12 divide-x">
	<div id="profile-settings" class="col-span-5 flex flex-col bg-zinc-100">
		<div class="mb-2 mt-4">
			<Tabs {tabs} {activeUrl} />
		</div>
		<slot />
	</div>
	<div id="profile-preview" class="col-span-7 p-4">
		<h2 class="font-display">{$page.data.session?.user.user_metadata.name}</h2>
	</div>
</div>
