<script lang="ts">
	import Button from '$lib/components/form/Button.svelte';
	import InputText from '$lib/components/form/InputText.svelte';
	import JobPost from '$lib/components/jobs/JobPost.svelte';
	import JobPostPreview from '$lib/components/jobs/JobPostPreview.svelte';
	import JobPostSearch from '$lib/components/jobs/JobPostSearch.svelte';
	import Drawer from '$lib/components/layout/drawer/Drawer.svelte';
	import { drawerStore } from '$lib/components/layout/drawer/stores';

	let selectedJobPost: null | object = null;
	let activeJobPost: null | string = null;

	const openJobPost = async (jobId: string) => {
		activeJobPost = jobId;
		selectedJobPost = await fetchJobPost();
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
	<JobPost jobPost={selectedJobPost} />
</Drawer>

<div class="">
	<JobPostSearch />
	<div class="flex items-center px-4 py-4 dark:bg-zinc-900/50">
		<p class="mr-auto text-sm dark:text-zinc-200">
			<span class="mr-2 font-semibold dark:text-white">133</span>jobs found
		</p>
		<div class="flex gap-4">
			<Button>
				<p class="truncate font-normal">
					order by
					<span class="font-semibold">Recommended</span>
				</p>
			</Button>
			<Button>
				<p class="truncate font-normal">view <span class="font-semibold">Space</span></p>
			</Button>
		</div>
	</div>
	<hr />
	<div class="container mx-auto grid grid-cols-1 gap-4 p-4 lg:grid-cols-2">
		{#await fetchJobs()}
			<p>loading...</p>
		{:then jobs}
			{#if jobs !== null}
				{#each jobs as job}
					<JobPostPreview on:click={() => openJobPost(job.id)} isActive={job.id == activeJobPost} />
					<JobPostPreview on:click={() => openJobPost(job.id)} isActive={job.id == activeJobPost} />
					<JobPostPreview on:click={() => openJobPost(job.id)} isActive={job.id == activeJobPost} />
				{/each}
			{/if}
		{/await}
	</div>
</div>
