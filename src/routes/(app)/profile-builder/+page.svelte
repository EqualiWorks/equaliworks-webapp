<script lang="ts">
	import Input from '$lib/components/form/Input.svelte';

	let currentJobRole: string = '';
</script>

<div class="grid h-screen grid-cols-6">
	<div class="col-span-2 bg-zinc-800 p-4">
		<Input id="current-job-role" label="Current job title" type="text" />
		<input bind:value={currentJobRole} />
	</div>
	<div class="col-span-4 p-4">
		<div class="flex items-center gap-4">
			<div class="h-14 w-14 rounded-full bg-red-500" />
			<div>
				<h3 class="tracking-tight dark:text-white">Frederik Fink Højriis</h3>
				<p class="-mt-1 text-zinc-500">{currentJobRole}</p>
			</div>
		</div>
	</div>
</div>
