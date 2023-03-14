<script lang="ts">
	import { fade, fly, scale } from 'svelte/transition';
	import { toastStore } from './stores';

	const max = 3;

	$: visibleToast = Array.from($toastStore).slice(0, max);

	const colors = {
		success: 'text-green-500',
		warning: 'text-yellow-500',
		error: 'text-red-500',
		info: 'text-zinc-400'
	};
</script>

{#if $toastStore.length}
	<div class="toast-end toast toast-top">
		{#each visibleToast as toast, i}
			<div
				class="alert alert-success flex items-center gap-2 px-4 text-sm"
				in:fly={{ x: 0, y: -100, duration: 150 }}
				out:fade
			>
				<i in:scale class="{toast.icon} ph-lg " />
				<span>{toast.message}</span>
			</div>
		{/each}
	</div>
{/if}
