<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { sideBarOpen } from './stores';

	let breadCrumbs: string[] = [];

	const constructBreadCrumbs = () => {
		const urlParts = $page.url.pathname.split('/').slice(1);

		if (urlParts == null) return [];

		breadCrumbs = urlParts;
	};

	onMount(() => {
		constructBreadCrumbs();
	});
</script>

<nav class="fixed z-10 flex w-full bg-zinc-900" />
