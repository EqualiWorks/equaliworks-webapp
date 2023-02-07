<script lang="ts">
	import { supabase } from '$lib/db/supabase';

	const fetchJobs = async () => {
		const res = await fetch('/api/v1/jobs');
		const data = await res.json();

		return data.data;
	};
</script>

<div>
	{#await fetchJobs()}
		<p>loading...</p>
	{:then jobs}
		{#if jobs !== null}
			{#each jobs as job}
				<p>{job.id}</p>
			{/each}
		{/if}
	{/await}
</div>
