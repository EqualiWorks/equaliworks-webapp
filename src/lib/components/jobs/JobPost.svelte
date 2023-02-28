<script lang="ts">
	export let data: any;
</script>

<div
	class="flex items-center justify-between border-b border-dashed py-8 px-6 text-sm dark:border-zinc-800 dark:bg-zinc-900"
>
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
		<div class="flex items-center gap-2">
			<i class="ph-hand-eye-bold text-green-400" />
			<p class="text-sm text-green-400 ">100%</p>
		</div>
	</div>
	<div class="flex items-center gap-2">
		<button class="btn btn-ghost"><i class="ph-bookmark-simple-bold" />Bookmark</button>
		<button class="btn btn-ghost"><i class="ph-paper-plane-tilt-bold" />Apply</button>
	</div>
</div>

<div class="px-6 py-8">
	<div class="mb-8">
		<h3 class="font-light dark:text-white">{data.title}</h3>
		<h6 class="truncate font-light text-zinc-600 dark:text-zinc-100">
			{data.summary}
		</h6>
	</div>
	<p class="mb-4 text-zinc-700 dark:text-zinc-200">
		Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
		laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
		beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
		odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
		Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
	</p>
	<p class="mb-4 text-zinc-700 dark:text-zinc-200">
		Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
		laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
		beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
		odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
		Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
	</p>
	<div>
		<h4 class="font-light dark:text-white">Skills required</h4>
	</div>
	...
</div>
