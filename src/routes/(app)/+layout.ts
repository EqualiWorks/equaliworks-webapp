import type { LayoutLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { supabase } from '$lib/db/supabase';

export const load: LayoutLoad = async (event) => {
	const { session } = await getSupabase(event);

	return {
		session: session
	};
};
