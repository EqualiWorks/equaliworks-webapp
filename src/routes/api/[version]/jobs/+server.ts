import { supabase } from '$lib/db/supabase';
import { error, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params, url }): Promise<Response> => {
	// fetch data from database -> select * from job_posts
	const { data, error: err } = await supabase.from('job_post').select('*');

	// throw error if some error occur
	if (err) throw error(500, 'Something went wrong');

	// return response as a string
	return new Response(JSON.stringify({ data }));
};
