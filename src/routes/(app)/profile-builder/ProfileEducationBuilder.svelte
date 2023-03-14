<script lang="ts">
	import type { ApplicantEducation } from '$lib/db/types';
	import { createEventDispatcher } from 'svelte';
	export let data: ApplicantEducation;

	// event dispatcher
	const dispatch = createEventDispatcher();

	// handlers
	const handleDeleteClick = () => {
		return dispatch('delete-education', {
			data: data
		});
	};

	const handleUpdateClick = () => {
		return dispatch('update-education', {
			data: data
		});
	};
</script>

<div class="flex items-center justify-between p-3">
	<div>
		<p class="text-sm font-medium">{data.title}</p>
		<div class="flex items-center gap-2">
			<p class="text-xs">{data.institution}</p>
			<div class="h-1 w-1 rounded-full" />
			<p class="text-xs">
				{data.start_date.split('-')[0]} - {data.end_date.split('-')[0]}
			</p>
			<div class="h-1 w-1 rounded-full" />
			<p class="text-xs ">
				{#if new Date(data.end_date).getTime() > new Date().getTime()}
					Studying 📚
				{:else}
					graduated 🎓
				{/if}
			</p>
		</div>
	</div>
	<div class="flex items-center">
		<button on:click={handleDeleteClick} class="btn-ghost btn-sm btn">
			<i class="ph-trash ph-lg" />
		</button>
		<button on:click={handleUpdateClick} class="btn-ghost btn-sm btn">
			<i class="ph-pencil-simple-line ph-lg" />
		</button>
	</div>
</div>
