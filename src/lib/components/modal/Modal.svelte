<script lang="ts">
	export let showModal: boolean = false;

	export let title: string;

	const handleEscape = (e: KeyboardEvent) => {
		if (e.key === 'Escape') showModal = false;
	};
</script>

<svelte:window on:keydown={handleEscape} />

<div class="modal modal-bottom sm:modal-middle" class:modal-open={showModal}>
	<div class="modal-box">
		<div class="mb-4 flex items-center">
			<i class="ph-graduation-cap-bold ph-lg mr-3" />
			<h4 class="mr-auto">{title}</h4>
			<button on:click={() => (showModal = false)} class="btn-ghost btn-square btn"
				><i class="ph-x-bold ph-lg" /></button
			>
		</div>
		<slot />
	</div>
</div>
