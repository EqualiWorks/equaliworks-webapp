<script lang="ts">
	import SearchFilter from '$lib/components/jobPostSearch/SearchFilter.svelte';
	import JobPost from '$lib/components/jobs/JobPost.svelte';
	import JobPostPreview from '$lib/components/jobs/JobPostPreview.svelte';
	import Drawer from '$lib/components/layout/drawer/Drawer.svelte';
	import { drawerStore } from '$lib/components/layout/drawer/stores';

	let selectedJobPost: null | object = null;
	let activeJobPost: null | string = null;

	const openJobPost = async (data: any) => {
		activeJobPost = data.id;
		selectedJobPost = data;
		drawerStore.open();
	};

	const fetchJobs = async () => {
		const res = await fetch('/api/v1/jobs');
		const data = await res.json();
		return data.data;
	};
</script>

<Drawer>
	<JobPost data={selectedJobPost} />
</Drawer>

<div class="flex h-full overflow-auto">
	<div
		class="h-full w-[464px] max-w-[464px] overflow-auto border-r dark:border-zinc-700 dark:bg-zinc-800"
	>
		<div class="border-b py-14 px-5 dark:border-zinc-700">
			<p class="mb-1 text-xs text-zinc-500 dark:text-zinc-400">Explore new opportunities</p>
			<h3 class="font-medium dark:text-white">Browse job posts</h3>
		</div>
		<SearchFilter />
	</div>
	<div class="w-full overflow-auto bg-zinc-50 dark:bg-transparent">
		<div class="mx-auto w-[756px] max-w-[756px]">
			<div class="flex items-center justify-between py-5">
				<p class="text-sm dark:text-zinc-400">Found 39 jobs</p>
				<button class="text-sm dark:text-zinc-400">
					order by <span class="font-medium dark:text-white">Recommended</span>
				</button>
			</div>

			<div class="flex h-full flex-col gap-4 overflow-auto">
				{#await fetchJobs()}
					loading...
				{:then jobs}
					{#if jobs !== null}
						{#each jobs as data}
							<JobPostPreview {data} on:click={() => openJobPost(data)} />
							<JobPostPreview {data} on:click={() => openJobPost(data)} />
							<JobPostPreview {data} on:click={() => openJobPost(data)} />
							<JobPostPreview {data} on:click={() => openJobPost(data)} />
							<JobPostPreview {data} on:click={() => openJobPost(data)} />
							<JobPostPreview {data} on:click={() => openJobPost(data)} />
							<JobPostPreview {data} on:click={() => openJobPost(data)} />
							<JobPostPreview {data} on:click={() => openJobPost(data)} />
							<JobPostPreview {data} on:click={() => openJobPost(data)} />
							<JobPostPreview {data} on:click={() => openJobPost(data)} />
							<JobPostPreview {data} on:click={() => openJobPost(data)} />
							<JobPostPreview {data} on:click={() => openJobPost(data)} />
							<JobPostPreview {data} on:click={() => openJobPost(data)} />
							<JobPostPreview {data} on:click={() => openJobPost(data)} />
							<JobPostPreview {data} on:click={() => openJobPost(data)} />
							<JobPostPreview {data} on:click={() => openJobPost(data)} />
							<JobPostPreview {data} on:click={() => openJobPost(data)} />
							<JobPostPreview {data} on:click={() => openJobPost(data)} />
							<JobPostPreview {data} on:click={() => openJobPost(data)} />
						{/each}
					{/if}
				{/await}
			</div>
		</div>
	</div>
</div>

<!-- 
<div class="flex flex-col">
	<div
		class="{showAdvancedFilters == true
			? 'h-screen pt-28'
			: 'mx-4 rounded-b-3xl border border-t-0 pt-24 dark:border-zinc-700'} bg px-4 pb-24 transition-all dark:bg-black lg:px-8"
	>
		<div class="container mx-auto">
			<div class="flex items-center">
				<h3 class="text-black dark:text-white">Find Jobs</h3>
				<div class="ml-12 grow">
					<input
						class="w-full rounded-md border border-zinc-400 bg-transparent px-4 py-2 text-sm text-black transition-colors duration-200 ease-in-out focus:border-white focus:outline-none focus:ring-white dark:border-zinc-700 dark:text-white dark:placeholder-zinc-400"
						placeholder="Search keywords..."
					/>
				</div>
			</div>
			<hr class="mt-6 mb-4 border-zinc-400 dark:border-zinc-700" />
			<button
				on:click={handleAdvancedFiltersToggle}
				class="flex w-full items-center justify-between py-2 text-zinc-500 transition-all duration-200 ease-in-out hover:text-black dark:hover:text-white"
			>
				<p class="text-left text-sm">Advanced filters</p>
				<i
					class="ph-caret-down {showAdvancedFilters
						? 'rotate-180'
						: ''} transition-all duration-200"
				/>
			</button>
		</div>
	</div>
	{#await fetchJobs()}
		<p>loading....</p>
	{:then jobs}
		<div class="container mx-auto grid grid-cols-8 px-4">
			<div class="col-span-2 pr-4 pt-6">
				<div class="mt-4 mb-8 flex items-center justify-between">
					<h3 class="dark:text-white">Filters</h3>
					<h5 class="font-mono text-zinc-600 dark:text-zinc-400">2</h5>
				</div>
				<div class="mb-12">
					<p class="mb-2 text-sm dark:text-zinc-400">Jobroles</p>
					<button
						class="btn-ghost-red flex items-center rounded-xl px-2 py-1 text-xs transition-all duration-100 active:scale-[95%]"
						>Software Developer
						<i class="ph-x ml-2" />
					</button>
				</div>
				<div class="mb-12">
					<p class="mb-2 text-sm dark:text-zinc-400">Area</p>
					<button
						class="btn-ghost-green flex items-center rounded-xl px-2 py-1 text-xs transition-all duration-100 active:scale-[95%]"
						>Software Developer
						<i class="ph-x ml-2" />
					</button>
				</div>
			</div>
			<div class="col-span-6 flex flex-col gap-4 pt-6">
				{#if jobs !== null}
					{#each jobs as data}
						<JobPostPreview {data} on:click={() => openJobPost(data)} />
					{/each}
				{/if}
			</div>
		</div>
	{/await}
</div> -->
