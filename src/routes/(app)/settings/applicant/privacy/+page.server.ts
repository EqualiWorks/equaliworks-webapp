import { supabase } from '$lib/db/supabase';

export const actions = {
	'update-privacy': async () => {
		const { data: userPrivacySettings, error: err } = await supabase
			.from('applicant_privacy_settings')
			.select('*')
			.eq('id', '51d25109-1b5e-416d-ab76-1131303f8674');

		if (err) {
			console.log('fail');
		}

		console.log(userPrivacySettings);

		await supabase
			.from('applicant_privacy_settings')
			.update({ hide_gender: false })
			.eq('id', '51d25109-1b5e-416d-ab76-1131303f8674');
	}
};
