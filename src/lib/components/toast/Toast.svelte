<script lang="ts">
	import { fade, fly, scale } from 'svelte/transition';
	import { toastStore } from './stores';

	const max = 3;

	$: console.log($toastStore.length);
	$: visibleToast = Array.from($toastStore).slice(0, max);
</script>

{#if $toastStore.length}
	<div class="fixed right-0 top-0 m-5 flex flex-col space-y-2">
		{#each visibleToast as toast, i}
			<div
				class="flex items-center gap-2 rounded-lg border bg-white px-5 py-2 text-sm shadow"
				in:fly={{ x: 0, y: -100, duration: 150 }}
				out:fade
			>
				<i in:scale class="ph-check-circle-bold ph-lg text-green-500" />
				{toast.message}
			</div>
		{/each}
	</div>
{/if}
