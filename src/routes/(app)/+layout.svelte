<script lang="ts">
	import LeftNav from '$lib/components/layout/LeftNav.svelte';
	import type { NavItem } from '$lib/components/layout/NavItem';
	import '../../app.css';

	const navItems: NavItem[] = [
		{
			href: 'find-jobs',
			title: 'Jobs'
		},
		{
			href: 'applications',
			title: 'Applications'
		},
		{
			href: 'job-agent',
			title: 'Job Agent',
			notifications: 4
		},
		{
			href: 'cv',
			title: 'CV'
		},
		{
			href: 'cover-letter',
			title: 'Cover letter'
		}
	];
</script>

<LeftNav {navItems} />
<slot />
