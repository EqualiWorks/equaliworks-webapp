<script lang="ts">
	import Button from '$lib/components/form/Button.svelte';
	import InputSearchSelect from '$lib/components/form/InputSearchSelect.svelte';
	import JobPost from '$lib/components/jobs/JobPost.svelte';
	import JobPostPreview from '$lib/components/jobs/JobPostPreview.svelte';
	import JobPostSearch from '$lib/components/jobs/JobPostSearch.svelte';
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

	const fetchJobPost = async () => {
		// const res = await fetch('/api/v1/jobs/1313');
		// const data = await res.json();

		return null;
	};
</script>

<Drawer>
	<JobPost 
		data = {selectedJobPost}/>
</Drawer>

<!-- <JobPostSearch /> -->

<div class="grid h-full grid-cols-1 lg:grid-cols-2">
	<div class="flex flex-col overflow-auto">
		{#await fetchJobs()}
			<p>loading...</p>
		{:then jobs}
			{#if jobs !== null}
				<div class="flex items-center justify-between border-b p-4 dark:border-gray-800">
					<div class="font-mono text-xs dark:text-white">
						<span class="font-bold">122</span> jobs
					</div>
					<button class="btn-xs font-mono dark:text-white"
						>sort by <span class="font-bold">recommended</span></button
					>
				</div>
				<div class="">
					{#each jobs as data}
						<JobPostPreview
							{data}
							on:click={() => openJobPost(data)}
						/>
					{/each}
				</div>
			{:else}
				<p>Could not find any jobs</p>
			{/if}
		{/await}
	</div>

	<div class="border-l bg-white dark:border-gray-800 dark:bg-black">
		<div class="p-4">
			<div class="my-8">
				<h4 class="tracking-tight text-white">Filters</h4>
			</div>
			<h6 class="mb-2 text-zinc-300">Location</h6>
			<div class="grid grid-cols-4 gap-4">
				<button class="rounded-lg border bg-white px-4 py-3 text-sm">All</button>
				<button class="rounded-lg border bg-white text-sm">All</button>
				<button class="rounded-lg border bg-white text-sm">All</button>
				<button class="rounded-lg border bg-white text-sm">All</button>
			</div>
		</div>

		<div class="p-4">
			<h6 class="mb-2 text-zinc-300">Location</h6>
			<div class="grid grid-cols-4 gap-4">
				<button class="rounded-lg border bg-white px-4 py-3 text-sm">All</button>
				<button class="rounded-lg border bg-white text-sm">All</button>
				<button class="rounded-lg border bg-white text-sm">All</button>
				<button class="rounded-lg border bg-white text-sm">All</button>
			</div>
		</div>

		<div class="p-4">
			<h6 class="mb-2">Location</h6>
			<div class="grid grid-cols-2 gap-4">
				<InputSearchSelect label="jobrole" />
				<InputSearchSelect label="jobrole" />
			</div>
		</div>
	</div>
</div>
