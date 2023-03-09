<script lang="ts">
	export let data: any;
</script>

<div
	on:click
	on:keydown
	class="group flex cursor-pointer flex-col justify-between rounded-xl border bg-white px-5 py-4 transition-all duration-200 hover:border-purple-500 hover:px-6 hover:shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
>
	<div class="">
		<div class="flex items-center justify-between">
			<h4 class="mr-auto dark:text-white">{data.title}</h4>
			<div
				class="btn-ghost-green mr-2 flex items-center gap-1 rounded-full py-0.5 px-2 font-mono text-xs font-semibold"
			>
				<i class="ph-hand-fist-bold ph-lg" />70%
			</div>
			<i
				class="ph-arrow-up-right-bold text-zinc-400 transition-all duration-200 group-hover:-mr-1 group-hover:text-purple-500"
			/>
		</div>
		<p class="mt-1.5 truncate text-sm text-zinc-600 dark:text-zinc-300">
			{data.summary}
		</p>
	</div>
	<div class="mt-4 flex items-center justify-between">
		<div class="flex items-center">
			<div class="h-12 w-12 rounded border bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900" />
			<div class="ml-2">
				<p class="text-sm font-medium dark:text-zinc-300">Company</p>
				<p class="text-sm dark:text-zinc-400">Copenhagen</p>
			</div>
		</div>

		<div class="flex flex-col items-end">
			<div class="flex items-center gap-1.5">
				<i class="ph-calendar-blank-bold text-zinc-500" />
				<p class="text-sm text-zinc-500 ">12 days ago</p>
			</div>
		</div>
	</div>
</div>
