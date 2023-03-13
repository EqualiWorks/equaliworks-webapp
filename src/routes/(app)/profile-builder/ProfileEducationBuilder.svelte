<script lang="ts">
	import type { ApplicantEducation } from '$lib/db/types';
	export let data: ApplicantEducation;
</script>

<div class="flex items-center justify-between p-3">
	<div>
		<p class="text-sm font-medium dark:text-white">{data.title}</p>
		<div class="flex items-center gap-2">
			<p class="text-xs text-zinc-400">{data.institution}</p>
			<div class="h-1 w-1 rounded-full bg-zinc-400" />
			<p class="text-xs text-zinc-400">
				{data.start_date.split('-')[0]} - {data.start_date.split('-')[0]}
			</p>
			<div class="h-1 w-1 rounded-full bg-zinc-400" />
			{#if data.graduated}
				graduated!
			{:else}
				Studying
			{/if}
		</div>
	</div>
	<div class="flex items-center">
		<button class="btn-sm"><i class="ph-trash ph-lg dark:text-white" /></button>
		<button on:click class="btn-sm"
			><i class="ph-pencil-simple-line ph-lg dark:text-white" /></button
		>
	</div>
</div>
