<script lang="ts">
	import Button from '$lib/components/form/Button.svelte';
	import InputText from '$lib/components/form/InputText.svelte';
	import JobPost from '$lib/components/jobs/JobPost.svelte';
	import JobPostPreview from '$lib/components/jobs/JobPostPreview.svelte';
	import Drawer from '$lib/components/layout/drawer/Drawer.svelte';
	import { drawerStore } from '$lib/components/layout/drawer/stores';

	let selectedJobPost: null | object = null;

	const openDrawer = async () => {
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

<div class="mx-auto px-4">
	<div class="py-8">
		<InputText name="search" label="search" placeholder="add keyword" />
	</div>
	<div class="flex items-center py-4">
		<p class="mr-auto text-sm"><span class="mr-2 font-semibold">133</span>jobs found</p>
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
	<div class="flex flex-col">
		{#await fetchJobs()}
			<p>loading...</p>
		{:then jobs}
			{#if jobs !== null}
				{#each jobs as job}
					<JobPostPreview on:click={openDrawer} />
					<JobPostPreview on:click={openDrawer} />
					<JobPostPreview on:click={openDrawer} />
					<JobPostPreview on:click={openDrawer} />
					<JobPostPreview on:click={openDrawer} />
					<JobPostPreview on:click={openDrawer} />
				{/each}
			{/if}
		{/await}
	</div>
</div>
