<script lang="ts">
	export let options: string[] = [];
	export let selectedOptions: string[] = [];
	let filteredOptions: string[] = [];
	let searchTerm: string = '';

	let container: any;
	let showOptions: boolean = false;

	const handleInputFocus = () => {
		showOptions = true;
	};

	const handleOptionSelect = (option: string) => {
		if (selectedOptions.includes(option)) {
			return;
		}

		selectedOptions = [...selectedOptions, option];
		showOptions = false;
	};

	const handleSearchUpdate = (e: KeyboardEvent) => {
		if (e.key == 'Escape') {
			showOptions = false;
			return;
		}

		if (!showOptions) {
			showOptions = true;
			return;
		}

		if (searchTerm == '') {
			filteredOptions = [];
			return;
		}

		filteredOptions = options.filter((o) => o.toLowerCase().includes(searchTerm.toLowerCase()));
		return;
	};

	const handleClick = (event: Event) => {
		if (!container.contains(event.target)) {
			showOptions = false;
			return;
		}
	};

	const handleKeyPress = (e: KeyboardEvent) => {
		switch (e.key) {
			case 'Escape':
				showOptions = false;
				break;
		}
	};

	const wrapSearchTerm = (option: string, searchTerm: string) => {
		const index = option.toLowerCase().indexOf(searchTerm.toLowerCase());

		if (index === -1) {
			return option;
		}

		return `${option.slice(0, index)}<span class='font-bold'>${searchTerm}</span>${option.slice(
			index + searchTerm.length
		)}`;
	};
</script>

<svelte:window on:mousedown={handleClick} on:keydown={handleKeyPress} />

<input
	type="text"
	class="input-icon"
	bind:value={searchTerm}
	on:click={handleInputFocus}
	on:click
	on:keyup={handleSearchUpdate}
/>
<div class="relative">
	<div class="pointer-events-none absolute -top-6 left-0 flex items-center pl-3">
		<i class="ph-magnifying-glass" />
	</div>

	<div
		bind:this={container}
		class="{showOptions
			? 'fixed'
			: 'hidden'} z-50 mt-2 flex max-h-[200px] w-[400px] flex-col overflow-y-auto rounded-lg border bg-white py-1 drop-shadow-md"
	>
		{#if filteredOptions.length}
			{#each filteredOptions as option}
				<button
					on:click={() => handleOptionSelect(option)}
					class="flex items-center justify-between py-2 px-4 text-left text-sm hover:bg-zinc-100"
				>
					<span class="truncate">{@html wrapSearchTerm(option, searchTerm)}</span>
					<i class="ph-plus" />
				</button>
			{/each}
		{:else}
			<p class="py-2 px-4 text-xs text-zinc-400">Start typing to search...</p>
		{/if}
	</div>
</div>
