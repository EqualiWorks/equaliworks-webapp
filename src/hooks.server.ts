import '$lib/db/supabase';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const { session, supabaseClient } = await getSupabase(event);

	event.locals.supabase = supabaseClient;
	event.locals.session = session;

	if (event.locals.session == null) {
		if (!event.url.pathname.startsWith('/sign-in') && !event.url.pathname.startsWith('/sign-up')) {
			throw redirect(303, '/sign-in');
		}
	} else {
		if (event.url.pathname.startsWith('/sign-in') || event.url.pathname.startsWith('/sign-up')) {
			throw redirect(303, '/dashboard');
		}
	}

	return resolve(event);
};
