<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import LeftNav from '$lib/components/layout/LeftNav.svelte';
	import type { NavItem } from '$lib/components/layout/NavItem';
	import { supabase } from '$lib/db/supabase';
	import { onMount } from 'svelte';
	import '../../app.css';

	const navItems: NavItem[] = [
		{
			href: 'dashboard',
			title: 'Home',
			icon: 'ph-house-bold'
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
			icon: 'ph-user-square-bold'
		},
		{
			href: 'cover-letter',
			title: 'Cover letter',
			icon: 'ph-user-focus-bold'
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

<div class="flex">
	<LeftNav {navItems} />
	<div class="w-full">
		<div class="flex h-12 items-center justify-between border-b px-4 dark:border-neutral-700">
			<div class="text-xs text-neutral-400">/dashboard</div>
		</div>
		<slot />
	</div>
</div>
