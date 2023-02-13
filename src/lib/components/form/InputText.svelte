<script lang="ts">
	export let name: string;
	export let label: string;
	export let id: string = `form-${name}`;
	export let placeholder: string = '';
	export let required: boolean = true;
	export let value: string = '';
	export let disabled: boolean = false;
	export let type: string = 'text';

	const typeAction = (node: any) => {
		node.type = type;
	};
</script>

<div class={$$props.class}>
	<label for={id} class="mb-1 block font-mono text-xs capitalize text-zinc-700 dark:text-white">
		{label}
	</label>
	<input use:typeAction {id} {name} bind:value class="input " {placeholder} {required} {disabled} />
</div>
