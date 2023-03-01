<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { modalStore } from './stores';
	import type { ModalComponent, ModalOptions } from './types';

	export let buttonTextCancel: string = 'Cancel';
	export let buttonTextConfirm: string = 'Confirm';
	export let buttonTextSubmit: string = 'Submit';
	export let components: Record<string, ModalComponent> = {};

	let component: ModalComponent | undefined;

	const dispatch = createEventDispatcher();

	const onBackDropClick = (event: MouseEvent | TouchEvent): void => {
		if (!(event.target instanceof Element)) return;
		if (event.target.id === 'modal-backdrop') modalStore.close();
		if (event.target.id === 'modal-transition') modalStore.close();

		dispatch('backdrop', event);
	};

	const onEscapeClick = (event: KeyboardEvent): void => {
		if (event.code === 'Escape') modalStore.close();
	};

	modalStore.subscribe((modals: ModalOptions[]) => {
		if (!modals.length) return;
		// Set Prompt input value and type
		buttonTextCancel = modals[0].buttonTextCancel || buttonTextCancel;
		buttonTextConfirm = modals[0].buttonTextConfirm || buttonTextConfirm;
		buttonTextSubmit = modals[0].buttonTextSubmit || buttonTextSubmit;
		// Set Active Component
		component =
			typeof modals[0].component === 'string'
				? components[modals[0].component]
				: modals[0].component;
	});
</script>

<svelte:window on:keydown={onEscapeClick} />

{#if $modalStore.length}
	<div
		id="modal-backdrop"
		class="fixed top-0 left-0 right-0 bottom-0 z-[999] bg-black/10 "
		on:mousedown={onBackDropClick}
		on:touchstart={onBackDropClick}
		transition:fade={{ duration: 150 }}
	>
		<div
			id="modal-transition"
			class="flex h-full w-full justify-center overflow-y-auto p-4"
			transition:fly={{ duration: 100, opacity: 0, x: 0, y: 100 }}
		>
			{#if $modalStore[0].type !== 'component'}
				<div>
					{$modalStore[0].type}
				</div>
			{:else}
				<div class="w-full max-w-[640px] rounded-xl bg-white">
					{#if $modalStore[0]?.title}
						<header class="flex items-center justify-between border-b p-4">
							<h5>{@html $modalStore[0].title}</h5>
							<button class="btn"><i class="ph-x-circle ph-xl" /></button>
						</header>
					{/if}
					<svelte:component this={component?.ref} {...component?.props} {parent}>
						{@html component?.slot}
					</svelte:component>
				</div>
			{/if}
		</div>
	</div>
{/if}
