import { supabase } from '$lib/db/supabase';
import { fail, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	// load applicant privacy settings from server
	const { data: privacySettings, error: err } = await supabase
		.from('applicant_privacy_settings')
		.select('*')
		.eq('id', locals.session.user.id);

	// throw any errors
	if (err) {
		return fail(500, { error: 'Something went wrong while fetching privacy settings' });
	}

	if (privacySettings[0] == undefined) {
		return fail(500, { error: 'Something went wrong while fetching privacy settings' });
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
		if (err) {
			return fail(500, { error: 'Could not save changes to database' });
		}

		// if no errors, return success
		return {
			success: true
		};
	}
};
