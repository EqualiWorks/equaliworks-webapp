import { supabase } from '$lib/db/supabase';
import { error, fail, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params, url }): Promise<Response> => {
	const { data, error: err } = await supabase.from('job_posts').select('*');

	if (err) throw error(500, 'Something went wrong');

	return new Response(JSON.stringify({ data }));
};
