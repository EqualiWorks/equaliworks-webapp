// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			supabase: TypedSupabaseClient;
			session: Session | null;
		}
		interface PageData {
			session: import('@supabase/supabase-js').Session | null;
		}
	}
}

export {};
