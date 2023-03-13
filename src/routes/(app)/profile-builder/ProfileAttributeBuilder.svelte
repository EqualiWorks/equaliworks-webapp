<script lang="ts">
	export let title: string;
	export let startYear: number;
	export let institution: string | null = null;
	export let endYear: number | null = null;
	export let location: string | null = null;
	export let bulletPoints: string[] = [];
</script>

<div class="flex items-center justify-between p-3">
	<div>
		<p class="text-sm font-medium dark:text-white">{title}</p>
		<div class="flex items-center gap-2">
			{#if institution !== null}
				<p class="text-xs text-zinc-400">{institution}</p>
				<div class="h-1 w-1 rounded-full bg-zinc-400" />
			{/if}
			<p class="text-xs text-zinc-400">{startYear} - {endYear === null ? 'now' : endYear}</p>
		</div>
	</div>
	<div class="flex items-center">
		<button class="btn-sm"><i class="ph-trash ph-lg dark:text-white" /></button>
		<button on:click class="btn-sm"
			><i class="ph-pencil-simple-line ph-lg dark:text-white" /></button
		>
	</div>
</div>
