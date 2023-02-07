import { fail, redirect, type Actions } from '@sveltejs/kit';
import { AuthApiError, type Provider, type Session } from '@supabase/supabase-js';

const OAUTH_PROVIDERS = ['google', 'linkedIn', 'azure'];

export const actions: Actions = {
	'provider-sign-in': async ({ url, locals }) => {
		const provider: Provider | null = url.searchParams.get('provider') as Provider | null;

		if (provider === null) {
			throw fail(400, { error: 'provider cannot be null' });
		}

		if (!OAUTH_PROVIDERS.includes(provider)) {
			return fail(400, { error: `Provider not supported` });
		}

		const { error: err, data } = await locals.supabase.auth.signInWithOAuth({
			provider: provider
		});

		if (err) {
			return fail(400, { error: 'Something went wrong.' });
		}

		throw redirect(303, data.url);
	},
	'email-sign-in': async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData());

		const { error: err } = await locals.supabase.auth.signInWithPassword({
			email: body.email as string,
			password: body.password as string
		});

		if (err) {
			if (err instanceof AuthApiError && err.status == 400) {
				return fail(400, { error: 'invalid credentials' });
			}

			return fail(500, {
				error: 'Server error, Try again later'
			});
		}

		throw redirect(303, '/');
	}
};
