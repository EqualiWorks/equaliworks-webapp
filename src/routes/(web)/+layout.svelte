<script lang="ts">
	import { page } from '$app/stores';
	import { redirect } from '@sveltejs/kit';
	import { onMount } from 'svelte';
	import '../../app.css';

	onMount(async () => {
		setTimeout(() => {
			if ($page.data.session != null) {
				throw redirect(303, '/dashboard');
			}
		}, 1000);
	});
</script>

<nav>
	<ul>
		<li>
			<a href="/jobs">jobs</a>
			<a href="/companies">companies</a>
			<a href="/about">about</a>
		</li>
	</ul>
</nav>
<slot />
