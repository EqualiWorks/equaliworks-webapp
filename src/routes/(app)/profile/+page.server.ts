import { error, redirect, type Actions } from '@sveltejs/kit';

export const actions: Actions = {
	'sign-out': async ({ locals }) => {
		const { error: err } = await locals.supabase.auth.signOut();

		if (err) {
			throw error(500, 'Something went wrong while logging you out');
		}

		throw redirect(303, '/sign-in');
	}
};
