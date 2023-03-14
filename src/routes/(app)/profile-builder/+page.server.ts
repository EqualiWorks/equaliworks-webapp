import { supabase } from '$lib/db/supabase';
import { fail, type Actions } from '@sveltejs/kit';
import { z } from 'zod';
import type { PageServerLoad } from './$types';

const DateSchema = z.string().refine((value) => {
	const date = new Date(value);
	return !isNaN(date.getTime());
}, 'Invalid date string');

const ApplicationEducationSchema = z.object({
	title: z.string().min(3),
	degree: z.string().min(3),
	institution: z.string().min(3),
	start_date: DateSchema,
	end_date: DateSchema,
});

const EducationId = z.object({
	education_id: z.string(),
});

export const load: PageServerLoad = async ({ locals }) => {
	const education = async () => {
		const { data, error: err } = await supabase
			.from('applicant_education')
			.select('*')
			.eq('applicant_id', locals.session.user.id)
			.order('end_date', { ascending: false });
		if (err) {
			return { error: err };
		}

		return data;
	};
	const experience = async () => {
		const { data, error: err } = await supabase
			.from('applicant_experience')
			.select('*')
			.eq('applicant_id', locals.session.user.id);
		if (err) {
			return { error: err };
		}

		return data;
	};

	return {
		education: education(),
		experience: experience()
	};
};

export const actions: Actions = {
	'add-education': async ({ request, locals }) => {
		try {
			// get form items from request
			const body = Object.fromEntries(await request.formData());

			// parse request body against schema
			const result = ApplicationEducationSchema.safeParse(body);

			// return invalid user data error if parsing failed
			if (!result.success) {
				return fail(400, { error: 'Could not validate input', hint: '' });
			}

			// if parsing succeeded, query the database
			const { error: err } = await supabase
				.from('applicant_education')
				.insert({ ...body, applicant_id: locals.session.user.id });

			// if some database error occurred, return internal error
			if (err) {
				console.log(err);
				return fail(500, { error: 'Could not save education', hint: 'Please try again later' });
			}

			// if this state is reached, everything succeeded, return success 🥳
			return { success: true };

			// catch all unexpected exceptions
		} catch (err) {
			return fail(500, {
				error: 'Something went wrong while adding education',
				hint: 'Please try again later'
			});
		}
	},
	'update-education': async ({ request, locals }) => {
		try {
			// get form items from request
			const body = Object.fromEntries(await request.formData());

			// parse request body against schema
			const result = ApplicationEducationSchema.safeParse(body);

			// return invalid user data error if parsing failed
			if (!result.success) {
				return fail(400, { error: 'Could not validate input', hint: '' });
			}

			// if parsing succeeded, query the database
			const { error: err } = await supabase
				.from('applicant_education')
				.update({ ...body, applicant_id: locals.session.user.id })
				.eq('applicant_id', locals.session.user.id);

			// if some database error occurred, return internal error
			if (err) {
				console.log(err);
				return fail(500, { error: 'Could not save education', hint: 'Please try again later' });
			}

			// if this state is reached, everything succeeded, return success 🥳
			return { success: true };

			// catch all unexpected exceptions
		} catch (err) {
			return fail(500, {
				error: 'Something went wrong while adding education',
				hint: 'Please try again later'
			});
		}
	},
	'delete-education': async ({ request, locals }) => {
		try {
			const body = Object.fromEntries(await request.formData());
			
			// parse request body against schema
			const result = EducationId.safeParse(body);
			
			// return invalid user data error if parsing failed
			if (!result.success) {
				return fail(400, { error: 'Could not validate input', hint: '' });
			}
			
			const {error: err} = await supabase.from('applicant_education').delete().eq('applicant_id', locals.session.user.id).eq('id', body.education_id);

			if(err) {
				return fail(500);
			}

			return { success: true };
		} catch (error) {
			return fail(500, { error: 'not yet implemented' });
		}
	}
};
