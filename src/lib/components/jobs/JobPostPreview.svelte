<script lang="ts">
	import Button from '../form/Button.svelte';
	export let isActive: boolean = false;
</script>

<div
	class="cursor-pointer border-b py-10 {isActive ? 'border-l-4 border-l-green-400' : ''}"
	on:click
	on:keydown
>
	<div class="flex items-center justify-between">
		<div>
			<h5 class="font-normal">Senior Frontend Developer</h5>
			<h6 class="truncate font-light text-zinc-600">
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
				<p class="text-sm text-zinc-600">12 days ago</p>
			</div>
		</div>
	</div>
</div>
