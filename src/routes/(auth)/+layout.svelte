<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { supabase } from '$lib/db/supabase';
	import { onMount } from 'svelte';
	import '../../app.css';

	onMount(() => {
		const {
			data: { subscription }
		} = supabase.auth.onAuthStateChange(() => {
			invalidateAll();
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<slot />
