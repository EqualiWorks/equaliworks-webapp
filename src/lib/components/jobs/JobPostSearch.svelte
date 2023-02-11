<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '../form/Button.svelte';

	let showFilter: boolean = false;
	let filterWidth: number | null;
	let container: any;

	let selectedTags: string[] = [];

	let testArr = [
		'Software Developer',
		'Software Developer',
		'Software Developer',
		'Software Developer',
		'Software Developer',
		'Software Developer',
		'Software Developer',
		'Software Developer',
		'Software Developer',
		'Software Developer',
		'Software Developer',
		'Software Developer',
		'Software Developer',
		'Software Developer',
		'Software Developer',
		'Software Developer',
		'Software Developer',
		'Software Developer'
	];

	const focusSearch = async (toggle: 'show' | 'hide') => {
		if (toggle === 'hide') {
			showFilter = false;
			return;
		}

		if (container) filterWidth = container.getBoundingClientRect().width;
		showFilter = true;
	};

	const test = (event: any) => {
		showFilter = false;
	};

	const addTag = (tagName: string) => {
		selectedTags = [...selectedTags, tagName];
	};

	onMount(() => {
		console.log(container.getBoundingClientRect().width);
	});
</script>

<div class="py-8">
	<div class="mb-8 grid grid-cols-3 gap-6">
		<div bind:this={container}>
			<label
				for="job-post-area"
				class="mb-1 block font-mono text-xs capitalize text-neutral-700 dark:text-white"
			>
				Area
			</label>
			<input
				id="job-post-area"
				class="block w-full rounded border border-gray-300 bg-neutral-50 py-1 px-2.5 font-mono text-sm text-gray-900 focus:border-green-400 focus:outline-none focus:drop-shadow-lg dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:placeholder-neutral-400 dark:focus:border-green-500 dark:focus:ring-green-500 {showFilter
					? 'rounded-b-none border-b-0'
					: ''}"
				on:focusin={() => focusSearch('show')}
				on:focusout={() => focusSearch('hide')}
			/>
			<div
				style="width:{filterWidth}px"
				class="{showFilter
					? 'flex flex-col'
					: 'hidden'} absolute max-h-[400px] overflow-auto rounded-b border-b border-l border-r border-green-400 bg-neutral-50/90 drop-shadow-lg backdrop-blur-lg"
			>
				{#each testArr as elem}
					<button
						on:click={() => addTag(elem)}
						class="flex items-center justify-between border-b border-dashed px-4 py-2 hover:bg-neutral-200"
					>
						<span class="font-mono text-xs">Software Developer</span>
						<i class="ph-plus-bold ph-sm" />
					</button>
				{/each}
			</div>
			<div class="mt-2 flex flex-wrap gap-1">
				{#each selectedTags as tag}
					<button
						class="flex items-center rounded border-neutral-300 bg-neutral-200 px-2 py-0.5 font-mono text-sm tracking-tight text-neutral-800 hover:bg-neutral-300"
					>
						{tag}
						<i class="ph-x-bold ph-sm ml-2" />
					</button>
				{/each}
			</div>
		</div>

		<div>
			<label
				for="job-post-area"
				class="mb-1 block font-mono text-xs capitalize text-neutral-700 dark:text-white"
			>
				Jobrole
			</label>
			<input id="job-post-area" class="input" />
		</div>
		<div>
			<label
				for="job-post-area"
				class="mb-1 block font-mono text-xs capitalize text-neutral-700 dark:text-white"
			>
				Industry
			</label>
			<input id="job-post-area" class="input" />
		</div>
	</div>
	<label
		for="job-post-search"
		class="mb-1 block font-mono text-xs capitalize text-neutral-700 dark:text-white"
	>
		Add keyword
	</label>
	<input id="job-post-search" class="input" />
</div>
