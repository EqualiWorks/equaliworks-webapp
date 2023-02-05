<script lang="ts">
	import LeftNav from '$lib/components/layout/LeftNav.svelte';
	import type { NavItem } from '$lib/components/layout/NavItem';
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
</script>

<div class="flex">
	<LeftNav {navItems} />
	<div class="w-full">
		<div class="h-12 border-b flex items-center justify-between px-4">
			<div class="text-xs text-neutral-400">/dashboard</div>
			<div class="flex items-center">
				<div
					class="w-8 h-8 rounded-full border text-neutral-500 bg-neutral-200 border-neutral-300 mr-2 flex items-center justify-center text-xs font-mono"
				>
					FH
				</div>
				<span class="text-xs">user</span>
			</div>
		</div>
		<slot />
	</div>
</div>
