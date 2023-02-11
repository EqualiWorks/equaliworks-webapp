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

<div>
	<LeftNav {navItems} />
	<div class="fixed flex w-full bg-white/30 backdrop-blur-sm">
		<a
			href="/dashboard"
			class="flex h-12 min-w-[230px] items-center border-r border-b px-4 dark:border-neutral-700"
		>
			<h6 class="font-display font-light dark:text-white">EQ-WORKS</h6>
		</a>

		<div class=" flex h-12 w-full items-center border-b px-4 dark:border-neutral-700">
			<div class="text-xs text-neutral-400">/dashboard</div>
		</div>
	</div>

	<div class="ml-[230px] pt-12">
		<slot />
	</div>
</div>
