<script lang="ts">
	import { fade, fly, scale } from 'svelte/transition';
	import { toastStore } from './stores';

	const max = 3;

	$: visibleToast = Array.from($toastStore).slice(0, max);

	const colors = {
		success: 'alert-success',
		warning: 'alert-warning',
		error: 'alert-error',
		info: 'alert-info'
	};
</script>

{#if $toastStore.length}
	<div class="toast-end toast toast-top">
		{#each visibleToast as toast, i}
			<div
				class="alert {colors[toast.type]} flex items-center gap-2 px-4 text-sm"
				in:fly={{ x: 0, y: -100, duration: 150 }}
				out:fade
			>
				<i in:scale class="{toast.icon} ph-lg " />
				<span class="font-mono">{toast.message}</span>
			</div>
		{/each}
	</div>
{/if}
