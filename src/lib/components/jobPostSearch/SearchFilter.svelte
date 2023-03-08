<script lang="ts">
	import InputSearchSelect from '../form/InputSearchSelect.svelte';
	import FilterButton from './FilterButton.svelte';
	import { jobPostStore } from './stores';
	import type { FilterButtonData } from './types';

	let jobTitles: string[] = [];

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
	};

	const fetchJobTitles = async (): Promise<void> => {
		console.log('fetch!');
		if (jobTitles.length > 0) {
			return;
		}

		const result = await fetch(`api/v1/job-titles`);
		const data: any = await result.json();

		jobTitles = data.data.map((item) => item.title);
	};

	const handleFilterClear = (): void => {
		jobPostStore.clear();
	};

	const removeLocation = (option: string) => {
		$jobPostStore.location = $jobPostStore.location.filter((o) => o !== option);
	};

	const removeJobRole = (option: string) => {
		$jobPostStore.jobTitles = $jobPostStore.jobTitles.filter((o) => o !== option);
	};

	const search = async () => {
		// fetch /api/v1/jobPosts/ params = JSON.stringify(filter)
	};

	jobPostStore.subscribe(async (filter) => {
		//jobPosts = await search(filter);
	});
</script>

<div class="mt-6 px-5">
	<p class="mb-2.5 text-sm dark:text-zinc-400">Job title</p>
	<InputSearchSelect
		on:click={fetchJobTitles}
		options={jobTitles}
		bind:selectedOptions={$jobPostStore.jobTitles}
	/>
	{#if $jobPostStore.jobTitles.length}
		<div
			class="mt-2 w-full divide-y rounded-lg border border-yellow-600 first:rounded-t-lg last:rounded-b-lg"
		>
			{#each $jobPostStore.jobTitles as jobTitle}
				<button
					on:click={() => removeJobRole(jobTitle)}
					class="group flex w-full items-center justify-between px-3 py-1.5 text-left text-xs hover:bg-zinc-100"
				>
					{jobTitle}
					<i class="ph-x-bold transition-all duration-150 ease-in-out group-hover:text-red-600" />
				</button>
			{/each}
		</div>
	{/if}
</div>

<div class="mt-6 px-5">
	<p class="mb-2.5 text-sm dark:text-zinc-400">Locations</p>
	<InputSearchSelect options={jobTitles} bind:selectedOptions={$jobPostStore.location} />
	{#if $jobPostStore.location.length}
		<div
			class="mt-2 w-full divide-y rounded-lg border border-teal-600 first:rounded-t-lg last:rounded-b-lg"
		>
			{#each $jobPostStore.location as location}
				<button
					on:click={() => removeLocation(location)}
					class="group flex w-full items-center justify-between px-3 py-1.5 text-left text-xs hover:bg-zinc-100"
				>
					{location}
					<i class="ph-x-bold transition-all duration-150 ease-in-out group-hover:text-red-600" />
				</button>
			{/each}
		</div>
	{/if}
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

<button class="mt-5 flex w-full items-center justify-between px-5 py-4 dark:border-zinc-700">
	<p class="dark:text-white">Advanced Filters</p>
	<i class="ph-caret-down-bold dark:text-white" />
</button>

<div class="flex items-center justify-between border-b border-t px-5 py-4 dark:border-zinc-700">
	<button class="btn-sm btn-ghost" on:click={handleFilterClear}>Add job agent</button>
	<button class="btn-sm btn-ghost-red" on:click={handleFilterClear}>Clear</button>
</div>
