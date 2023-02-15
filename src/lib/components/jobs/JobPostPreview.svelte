<script lang="ts">
	import Button from '../form/Button.svelte';
	export let isActive: boolean = false;
</script>

<!-- 
<div class="cursor-pointer border-b px-4 py-10 dark:border-zinc-800" on:click on:keydown>
	<div class="flex items-center justify-between">
		<div>
			<h5 class="font-normal dark:text-white">Senior Frontend Developer</h5>
			<h6 class="truncate font-light text-zinc-600 dark:text-zinc-300">
				Senior Frontend Software developer for container management
			</h6>
		</div>
		<div class="flex items-center gap-2">
			<Button><i class="ph-bookmark-simple-bold ph-lg" /><span class="ml-1">Bookmark</span></Button>
			<Button><i class="ph-paper-plane-tilt-bold" /><span class="ml-1">Apply</span></Button>
		</div>
	</div>
	<div class="mt-10 flex items-center justify-between">
		<div class="flex gap-6">
			<div class="flex items-center gap-2">
				<i class="ph-buildings-bold text-zinc-500" />
				<p class="text-sm font-light text-zinc-500 ">Maersk</p>
			</div>
			<div class="flex items-center gap-2">
				<i class="ph-map-pin-bold text-zinc-500" />
				<p class="text-sm font-light text-zinc-500 ">DK | Copenhagen</p>
			</div>
			<div class="flex items-center gap-2">
				<i class="ph-clock-bold text-zinc-500" />
				<p class="text-sm font-light text-zinc-500 ">Full time</p>
			</div>
		</div>
		<div class="flex gap-6">
			<div class="flex items-center gap-2">
				<i class="ph-hand-eye-bold text-green-400" />
				<p class="text-sm text-green-400 ">100%</p>
			</div>
			<div class="flex items-center gap-2">
				<i class="ph-calendar-blank-bold text-zinc-500" />
				<p class="text-sm text-zinc-500">12 days ago</p>
			</div>
		</div>
	</div>
</div> -->

<div
	on:click
	on:keydown
	class="group flex h-[260px] cursor-pointer flex-col justify-between rounded-lg border bg-white pt-4 transition-colors duration-200 hover:border-black dark:border-zinc-800 dark:bg-black dark:hover:border-zinc-700 dark:hover:bg-zinc-900/90"
>
	<div class="px-4">
		<div class="flex items-center justify-between">
			<h5 class="mr-auto font-normal dark:text-white">Senior Frontend Developer</h5>
			<div
				class="btn-ghost-green mr-2 flex items-center gap-1 rounded-full py-0.5 px-2 font-mono text-xs font-semibold"
			>
				<i class="ph-hand-fist-bold ph-lg" />70%
			</div>
			<i
				class="ph-arrow-up-right-bold transition-all duration-200 group-hover:-mt-2 group-hover:-mr-1 group-hover:text-green-400 dark:text-zinc-100"
			/>
		</div>
		<p class="mt-1 truncate text-zinc-600 dark:text-zinc-300">
			Senior Frontend Software developer for container management
		</p>
	</div>
	<div class="p-4">
		<p class="text-sm text-zinc-500 line-clamp-3">
			Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit atque rerum aut delectus qui,
			vitae doloremque dolore voluptatem corporis. Lorem ipsum dolor sit, amet consectetur
			adipisicing elit. Sit atque rerum aut delectus qui,...
		</p>
	</div>
	<div class="mt-auto flex items-center justify-between px-4 pb-4">
		<div class="flex items-center">
			<div class="h-12 w-12 rounded border bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900" />
			<div class="ml-2">
				<p class="text-sm font-medium dark:text-zinc-300">Maersk</p>
				<p class="text-sm dark:text-zinc-400">Copenhagen</p>
			</div>
		</div>

		<div class="flex flex-col items-end">
			<div class="mb-1 flex items-center justify-center gap-1.5">
				<i class="ph-clock-bold text-zinc-500" />
				<p class="truncate text-sm text-zinc-500">Full time</p>
			</div>
			<div class="flex items-center gap-1.5">
				<i class="ph-calendar-blank-bold text-zinc-500" />
				<p class="text-sm text-zinc-500 ">12 days ago</p>
			</div>
		</div>
	</div>
</div>
