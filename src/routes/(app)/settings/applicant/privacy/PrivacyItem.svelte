<script lang="ts">
	export let icon: string;
	export let description: string | undefined = undefined;
	export let checked: boolean;
</script>

<div class="flex items-center p-4">
	<i class="{icon} ph-lg mr-3 dark:text-white" />
	<div class="mr-auto">
		<p class="text-sm text-zinc-700 dark:text-zinc-200">
			Hide my <span class=" font-bold text-black dark:text-white"> <slot /> </span> from recruiters
		</p>
		{#if description !== undefined}
			<p class="text-sm text-zinc-400">
				{description}
			</p>
		{/if}
	</div>
	<input type="checkbox" {checked} />
</div>
