import { supabase } from '$lib/db/supabase';
import { error, fail, type Actions } from '@sveltejs/kit';
import { z, ZodError } from 'zod';

const TrueFalseSchema = z.union([z.literal('true'), z.literal('false')]);

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
	graduated: TrueFalseSchema
});

const getInvalidParsingErrMessage = (error: ZodError): string[] => {
	return error.issues.map((issue) => {
		switch (issue.code) {
			case 'invalid_type':
				return `Invalid type: ${issue.path.join(', ')}`;
			default:
				return '';
		}
	});
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
		// return new Response();
	},
	'update-education': async ({ request, locals }) => {
		return fail(500, { error: 'not yet implemented' });
	},
	'delete-education': async ({ request, locals }) => {
		return fail(500, { error: 'not yet implemented' });
	}
};
