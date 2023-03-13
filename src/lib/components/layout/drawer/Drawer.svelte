<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { drawerStore } from './stores';

	let windowWidth: number = 1920;
	let backdrop: HTMLElement;
	const duration: number = 150;

	const percentage = (percent: number, amount: number): number => {
		return (amount / 100) * percent;
	};

	drawerStore.subscribe(() => {
		if (!drawerStore.open) return;
	});

	const onBackdropClicked = (event: any): void => {
		if (event.target === backdrop) drawerStore.close();
	};

	const onEscapeClicked = (event: any): void => {
		if (event.code === 'Escape') drawerStore.close();
	};

	const onKeydownWindow = (event: any): void => {
		if (!$drawerStore) return;
		if (event.code === 'Escape') drawerStore.close();
	};

	onMount(() => {
		windowWidth = window.innerWidth;
	});
</script>

<svelte:window on:keydown={onKeydownWindow} />

{#if $drawerStore.open}
	<div
		bind:this={backdrop}
		class="fixed top-0 left-0 right-0 bottom-0 z-40 flex w-full justify-end bg-black/50 dark:bg-black/80"
		transition:fade|local={{ duration }}
		on:mousedown={onBackdropClicked}
		on:keypress
	>
		<div
			class="min-w-[500px] max-w-[900px] bg-white dark:border-zinc-800 dark:bg-black"
			in:fly|local={{ x: percentage(90, windowWidth), y: 0, duration }}
			out:fade
		>
			<slot />
		</div>
	</div>
{/if}
