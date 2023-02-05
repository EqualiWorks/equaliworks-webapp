<script lang="ts">
	import { supabase } from '$lib/db/supabase';

	const fetchJobPosts = async () => {
		const { data, error } = await supabase.from('job_posts').select();

		return data;
	};
</script>

<div>
	{#await fetchJobPosts()}
		<p>loading...</p>
	{:then jobs}
		{#if jobs !== null}
			{#each jobs as job}
				<p>{job.id}</p>
			{/each}
		{/if}
	{/await}
</div>
