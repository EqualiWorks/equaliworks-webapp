<script lang="ts">
	import { page } from '$app/stores';
	import type { NavItem } from '$lib/components/layout/navigation/NavItem';

	const settingsNavItems = [
		{
			href: '/settings',
			title: 'General',
			icon: 'ph-gear-six'
		},
		{
			href: '/settings/security',
			title: 'Security',
			icon: 'ph-lock-key'
		},
		{
			href: '/settings/notifications',
			title: 'Notifications',
			icon: 'ph-bell'
		},
		{
			href: '/settings/appearance',
			title: 'Appearance',
			icon: 'ph-eye'
		},
		{
			href: '/settings/accessability',
			title: 'Accessability',
			icon: 'ph-person-simple'
		},
		{
			href: '/settings/account-type',
			title: 'Account Type',
			icon: 'ph-users'
		}
	] as NavItem[];

	const applicantSettingsNavItems = [
		{
			href: '/settings/applicant/privacy',
			title: 'Privacy',
			icon: 'ph-detective'
		}
	] as NavItem[];

	const recruiterSettingsNavItems = [] as NavItem[];
</script>

<div class="flex h-full">
	<div class="min-w-[280px] border-r px-4 dark:border-0 dark:bg-zinc-800">
		<div class="flex h-[150px] items-center">
			<div>
				<h3 class="dark:text-white">Settings</h3>
			</div>
		</div>
		<hr class="mb-8" />

		<p class="mb-3 mt-8 ml-2 text-sm font-medium dark:text-zinc-500">Settings</p>
		<ul>
			{#each settingsNavItems as navItem}
				<li class="mb-1.5 w-full">
					<a
						href={`${navItem.href}`}
						class="{$page.url.pathname == navItem.href
							? 'bg-zinc-100 text-black dark:bg-zinc-700 dark:text-white'
							: 'dark:text-zinc-400'} flex items-center rounded px-2 py-1.5 text-sm text-zinc-700 transition-colors duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-700"
					>
						<i class="{navItem.icon} ph-lg mr-1.5" />
						{navItem.title}
					</a>
				</li>
			{/each}
		</ul>

		<p class="mb-3 mt-8 ml-2 text-sm font-medium dark:text-zinc-500">Applicant settings</p>
		<ul>
			{#each applicantSettingsNavItems as navItem}
				<li class="mb-1.5 w-full">
					<a
						href={`${navItem.href}`}
						class="{$page.url.pathname == navItem.href
							? 'bg-zinc-100 text-black dark:bg-zinc-700 dark:text-white'
							: 'dark:text-zinc-400'} flex items-center rounded px-2 py-1.5 text-sm text-zinc-700 transition-colors duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-700"
					>
						<i class="{navItem.icon} ph-lg mr-1.5" />
						{navItem.title}
					</a>
				</li>
			{/each}
		</ul>

		<p class="mb-3 mt-8 ml-2 text-sm font-medium dark:text-zinc-500">Recruiter settings</p>
		<ul>
			{#each recruiterSettingsNavItems as navItem}
				<li class="mb-1.5 w-full">
					<a
						href={`${navItem.href}`}
						class="{$page.url.pathname == navItem.href
							? 'bg-zinc-100 text-black dark:bg-zinc-700 dark:text-white'
							: 'dark:text-zinc-400'} flex items-center rounded px-2 py-1.5 text-sm text-zinc-700 transition-colors duration-200 hover:bg-zinc-100 dark:hover:bg-zinc-700"
					>
						<i class="{navItem.icon} ph-lg mr-1.5" />
						{navItem.title}
					</a>
				</li>
			{/each}
		</ul>
	</div>

	<div class="grow px-4">
		<div class="flex h-[150px] items-center gap-4">
			<div class="bg h-16 w-16 rounded-full border dark:border-zinc-700" />
			<h3 class="tracking-tight dark:text-white">
				{$page.data.session?.user.user_metadata.full_name}
			</h3>
		</div>
		<hr class="mb-8" />
		<div class="mt-4">
			<slot />
		</div>
	</div>
</div>
