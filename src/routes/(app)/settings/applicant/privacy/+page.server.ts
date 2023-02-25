import { supabase } from '$lib/db/supabase';
import { fail, type Actions } from '@sveltejs/kit';
import { z } from 'zod';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	// load applicant privacy settings from server
	const { data: privacySettings, error: err } = await supabase
		.from('applicant_privacy_settings')
		.select('*')
		.eq('id', locals.session.user.id);

	// throw any errors
	// TODO: build proper error handling
	if (err) {
		throw fail(500, { error: 'error' });
	}

	// TODO: build proper error handling
	if (privacySettings[0] == undefined) {
		throw fail(500, { error: 'error' });
	}

	// return object
	return { privacySettings: privacySettings[0] };
};

export const actions: Actions = {
	'update-privacy': async ({ request, locals }) => {
		// get form items from request
		const body = Object.fromEntries(await request.formData());

		// create updateObject to store which columns should be updated
		const updateObject: any = {};

		// add new column values to update Object
		updateObject.hide_gender = body?.gender !== undefined;
		updateObject.hide_age = body?.age !== undefined;
		updateObject.hide_address = body?.address !== undefined;
		updateObject.hide_workplace_details = body?.workplace_details !== undefined;
		updateObject.hide_educational_details = body?.educational_details !== undefined;

		// update the database
		const { error: err } = await supabase
			.from('applicant_privacy_settings')
			.update(updateObject)
			.eq('id', locals.session.user.id);

		// if something goes wrong, throw error
		// TODO: build proper error handling
		if (err) throw fail(500, { error: 'error' });

		// if no errors, return success
		return {
			success: true
		};
	}
};
