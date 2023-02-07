import { createClient } from '@supabase/auth-helpers-sveltekit';
import { env } from '$env/dynamic/public';

export const supabase = createClient(
	env.VITE_PUBLIC_SUPABASE_URL,
	env.VITE_PUBLIC_SUPABASE_ANON_KEY
);
