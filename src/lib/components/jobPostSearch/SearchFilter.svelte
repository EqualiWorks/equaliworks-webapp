<script lang="ts">
	import FilterButton from './FilterButton.svelte';
	import { jobPostStore } from './stores';
	import type { FilterButtonData } from './types';

	const WorkTimeFilters: FilterButtonData[] = [
		{
			value: 'full-time',
			title: 'full-time',
			id: 'work-time-full-time-checkbox',
			icon: 'ph-star-bold'
		},
		{
			value: 'part-time',
			title: 'part-time',
			id: 'work-time-part-time-checkbox',
			icon: 'ph-star-half-bold'
		},
		{
			value: 'contract',
			title: 'contract',
			id: 'work-time-contract-checkbox',
			icon: 'ph-handshake-bold'
		}
	];

	const workPlaceFilters: FilterButtonData[] = [
		{
			value: 'remote',
			title: 'remote',
			id: 'work-place-remote-checkbox',
			icon: 'ph-flying-saucer-bold'
		},
		{
			value: 'hybrid',
			title: 'hybrid',
			id: 'work-place-hybrid-checkbox',
			icon: 'ph-globe-hemisphere-west-bold'
		},
		{
			value: 'on-site',
			title: 'on-site',
			id: 'work-place-on-site-checkbox',
			icon: 'ph-map-pin-bold'
		}
	];

	const handleFilterToggle = (e: Event, category: string): void => {
		const event = e.target as HTMLInputElement;
		event.checked
			? jobPostStore.addFilter(category, event.value)
			: jobPostStore.removeFilter(category, event.value);

		console.log(jobPostStore);
	};

	jobPostStore.subscribe((filter) => {
		console.log(filter);
	});
</script>

<div class="flex items-center justify-between border-b px-5 py-4 dark:border-zinc-700">
	<p class="dark:text-white">Filters</p>
	<button class="btn-sm btn-ghost-green">Search</button>
</div>

<div class="mt-6 px-5">
	<p class="mb-2.5 text-sm dark:text-zinc-400">Working hours preferences</p>
	<ul class="grid grid-cols-4 gap-2">
		{#each WorkTimeFilters as filter}
			<li>
				<FilterButton
					value={filter.value}
					checked={$jobPostStore.workTime.includes(filter.value)}
					on:click={(e) => handleFilterToggle(e, 'work-time')}
					id={filter.id}
					title={filter.title}
					icon={filter.icon}
				/>
			</li>
		{/each}
	</ul>
</div>

<div class="mt-6 px-5">
	<p class="mb-2.5 text-sm dark:text-zinc-400">On-site/remote preferences</p>
	<ul class="grid grid-cols-4 gap-2">
		{#each workPlaceFilters as filter}
			<li>
				<FilterButton
					value={filter.value}
					checked={$jobPostStore.workPlace.includes(filter.value)}
					on:click={(e) => handleFilterToggle(e, 'work-place')}
					id={filter.id}
					title={filter.title}
					icon={filter.icon}
				/>
			</li>
		{/each}
	</ul>
</div>

<div class="mt-6 px-5">
	<p class="mb-2.5 text-sm dark:text-zinc-400">Locations</p>
	<input class="input" type="text" />
</div>

<div class="mt-6 px-5">
	<p class="mb-2.5 text-sm dark:text-zinc-400">Job-roles</p>
	<input class="input" type="text" />
</div>

<button class="mt-5 flex w-full items-center justify-between px-5 py-4 dark:border-zinc-700">
	<p class="dark:text-white">Advanced Filters</p>
	<i class="ph-caret-down-bold dark:text-white" />
</button>
