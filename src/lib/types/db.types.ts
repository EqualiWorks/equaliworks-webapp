export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
	public: {
		Tables: {
			company: {
				Row: {
					created_at: string;
					id: string;
					name: string;
				};
				Insert: {
					created_at?: string;
					id?: string;
					name: string;
				};
				Update: {
					created_at?: string;
					id?: string;
					name?: string;
				};
			};
			job_post: {
				Row: {
					company_id: string;
					created_at: string;
					id: number;
					recruiter_id: string;
					summary: string;
					title: string;
				};
				Insert: {
					company_id: string;
					created_at?: string;
					id?: number;
					recruiter_id: string;
					summary: string;
					title: string;
				};
				Update: {
					company_id?: string;
					created_at?: string;
					id?: number;
					recruiter_id?: string;
					summary?: string;
					title?: string;
				};
			};
			profile: {
				Row: {
					avatar_url: string | null;
					full_name: string | null;
					id: string;
					updated_at: string | null;
					username: string | null;
					website: string | null;
				};
				Insert: {
					avatar_url?: string | null;
					full_name?: string | null;
					id: string;
					updated_at?: string | null;
					username?: string | null;
					website?: string | null;
				};
				Update: {
					avatar_url?: string | null;
					full_name?: string | null;
					id?: string;
					updated_at?: string | null;
					username?: string | null;
					website?: string | null;
				};
			};
			recruiter: {
				Row: {
					company_id: string;
					created_at: string;
					id: string;
				};
				Insert: {
					company_id: string;
					created_at?: string;
					id: string;
				};
				Update: {
					company_id?: string;
					created_at?: string;
					id?: string;
				};
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
