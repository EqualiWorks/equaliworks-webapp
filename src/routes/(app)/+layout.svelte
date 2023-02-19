<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import Navbar from '$lib/components/layout/navigation/Navbar.svelte';
	import type { NavItem } from '$lib/components/layout/navigation/NavItem';
	import SideBar from '$lib/components/layout/navigation/SideBar.svelte';
	import { supabase } from '$lib/db/supabase';
	import { onMount } from 'svelte';
	import '../../app.css';

	const navItems: NavItem[] = [
		{
			href: 'dashboard',
			title: 'Home',
			icon: 'ph-house-bold',
			notifications: 42
		},
		{
			href: 'find-jobs',
			title: 'Jobs',
			icon: 'ph-briefcase-bold'
		},
		{
			href: 'applications',
			title: 'Applications',
			icon: 'ph-spinner-gap-bold'
		},
		{
			href: 'job-agent',
			title: 'Job Agent',
			icon: 'ph-gender-neuter-bold'
		},
		{
			href: 'cv',
			title: 'CV',
			icon: 'ph-user-square-bold',
			badge: 'PRO'
		},
		{
			href: 'cover-letter',
			title: 'Cover letter',
			icon: 'ph-user-focus-bold',
			badge: 'PRO',
			notifications: 42
		}
	];

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidateAll();
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<div class="flex h-screen w-full">
	<SideBar {navItems} />
	<div class="grow overflow-y-auto">
		<slot />
	</div>
</div>
