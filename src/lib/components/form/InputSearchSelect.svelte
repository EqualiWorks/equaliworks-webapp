<script lang="ts">
	import { onMount } from 'svelte';

	export let label: string;
	export let id: string = `${label.replace(' ', '-').toLowerCase()}-input`;
	export let btnClass: string = 'btn-zinc';
	export let items: string[] = [
		'Software Developer',
		'Backend Developer',
		'Frontend Developer',
		'scrum master',
		'Fire fighter',
		'Nurse',
		'Carpenter',
		'Cloud Architect'
	];

	export let selectedItems: string[] = [];

	let showFilterContainer: boolean = false;
	let filterContainerWidth: number | null;
	let container: any;

	const handleFocus = async () => {
		if (container) filterContainerWidth = container.getBoundingClientRect().width;
		showFilterContainer = true;
	};

	const handleBlur = () => {
		showFilterContainer = false;
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if (showFilterContainer) {
			switch (e.key) {
				case 'Escape':
					showFilterContainer = false;
					break;
			}
		}
	};

	const handleClickOutsideFilterContainer = (event: Event) => {
		if (container && !container.contains(event.target)) {
			handleBlur();
		}
	};

	const addTag = (tagName: string) => {
		selectedItems = [...selectedItems, tagName];
		handleBlur();
	};

	const removeTag = (tagName: string) => {
		selectedItems = selectedItems.filter((x) => x !== tagName);
	};
</script>

<svelte:window on:click={handleClickOutsideFilterContainer} on:keydown={handleKeyDown} />

<div bind:this={container}>
	<label for={id} class="mb-1 block font-mono text-xs capitalize text-zinc-700 dark:text-white">
		<span class="font-bold">{selectedItems.length > 0 ? selectedItems.length : ''}</span>
		{label}
	</label>
	<input
		{id}
		class="block w-full rounded border border-gray-300 bg-zinc-50 py-1 px-2.5 font-mono text-sm text-gray-900 focus:border-green-400 {showFilterContainer
			? 'border-green-400'
			: ''} focus:outline-none focus:drop-shadow-lg dark:border-zinc-700 dark:bg-zinc-800 dark:text-white dark:placeholder-zinc-400 dark:focus:border-green-500 dark:focus:ring-green-500 {showFilterContainer
			? 'rounded-b-none border-b-0'
			: ''}"
		on:focus={() => handleFocus()}
	/>
	<div
		style="width:{filterContainerWidth}px"
		class="{showFilterContainer
			? 'flex flex-col'
			: 'hidden'} absolute max-h-[150px] overflow-auto rounded-b border-b border-l border-r border-green-400 bg-zinc-50/90 drop-shadow-lg backdrop-blur-lg dark:bg-zinc-800/90 "
	>
		{#each items as item}
			<button
				on:click={() => addTag(item)}
				class="flex items-center justify-between border-b border-dashed px-2.5 py-2 text-zinc-800 hover:bg-zinc-200 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-700"
			>
				<span class="font-mono text-xs">{item}</span>
				<i class="ph-plus-bold ph-sm" />
			</button>
		{/each}
	</div>
	<div class="mt-2 flex flex-wrap gap-1">
		{#each selectedItems as item}
			<button
				on:click={() => removeTag(item)}
				class="{btnClass} flex items-center rounded px-2 py-0.5 font-mono text-sm tracking-tight"
			>
				{item}
				<i class="ph-x-bold ph-sm ml-2" />
			</button>
		{/each}
	</div>
</div>
