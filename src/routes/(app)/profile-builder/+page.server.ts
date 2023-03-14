import { supabase } from '$lib/db/supabase';
import { fail, type Actions } from '@sveltejs/kit';
import { z } from 'zod';
import type { PageServerLoad } from './$types';

const DateSchema = z.string().refine((value) => {
	const date = new Date(value);
	return !isNaN(date.getTime());
}, 'Invalid date string');

const AddApplicationEducationSchema = z.object({
	title: z.string().min(3).max(100),
	degree: z.string().min(3).max(100),
	institution: z.string().min(3).max(100),
	start_date: DateSchema,
	end_date: z.optional(DateSchema),
	description: z.optional(z.string().max(1000)),
	applicant_id: z.string()
});

const UpdateApplicantEducationSchema = z.object({
	title: z.string().min(3).max(100),
	degree: z.string().min(3).max(100),
	institution: z.string().min(3).max(100),
	start_date: DateSchema,
	end_date: z.optional(DateSchema),
	description: z.optional(z.string().max(1000))
});

const DeleteApplicantEducationSchema = z.object({
	education_id: z.string()
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

	// parallel load data
	return {
		education: education(),
		experience: experience()
	};
};

export const actions: Actions = {
	'add-education': async ({ request, locals }) => {
		try {
			// get form items from request
			let body = {
				...Object.fromEntries(await request.formData()), 
				applicant_id: locals.session.user.id
			};

			// parse request body against schema
			const validated = AddApplicationEducationSchema.safeParse(body);

			// return invalid user data error if parsing failed
			if (!validated.success) {
				return fail(400, { error: 'Could not validate input', hint: '' });
			}

			// if parsing succeeded, query the database
			const { error: err } = await supabase
				.from('applicant_education')
				.insert(validated.data);

			// if some database error occurred, return internal error
			if (err) {
				console.log(err);
				return fail(500, { error: 'Could not save education', hint: 'Please try again later' });
			}

			// if this state is reached, everything succeeded, return success 🥳
			return { success: true, message: 'Education added' };

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
			const validated = UpdateApplicantEducationSchema.safeParse(body);

			// return invalid user data error if parsing failed
			if (!validated.success) {
				return fail(400, { error: 'Could not validate input', hint: '' });
			}

			// if parsing succeeded, query the database
			const { error: err } = await supabase
				.from('applicant_education')
				.update(validated.data)
				.eq('applicant_id', locals.session.user.id)
				.eq('id', body.education_id);

			// if some database error occurred, return internal error
			if (err) {
				return fail(500, { error: 'Could not save education', hint: 'Please try again later' });
			}

			// if this state is reached, everything succeeded, return success 🥳
			return { success: true, message: 'Education updated' };

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
			const validated = DeleteApplicantEducationSchema.safeParse(body);
			
			// return invalid user data error if parsing failed
			if (!validated.success) {
				return fail(400, { error: 'Could not validate input', hint: '' });
			}
			
			// query database
			const {error: err} = await supabase
				.from('applicant_education')
				.delete()
				.eq('applicant_id', locals.session.user.id)
				.eq('id', validated.data.education_id);

			if(err) {
				return fail(500);
			}

			return { success: true, message: 'Education deleted' };
		} catch (error) {
			return fail(500, { error: 'not yet implemented' });
		}
	}
};
