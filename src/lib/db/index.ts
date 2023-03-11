export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      applicant: {
        Row: {
          city: string | null
          country: string | null
          created_at: string | null
          date_of_birth: string | null
          id: string
          street: string | null
          zip: string | null
        }
        Insert: {
          city?: string | null
          country?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          id: string
          street?: string | null
          zip?: string | null
        }
        Update: {
          city?: string | null
          country?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          id?: string
          street?: string | null
          zip?: string | null
        }
      }
      applicant_certification: {
        Row: {
          applicant_id: string
          certification_id: number
          created_at: string | null
          id: number
        }
        Insert: {
          applicant_id: string
          certification_id: number
          created_at?: string | null
          id?: number
        }
        Update: {
          applicant_id?: string
          certification_id?: number
          created_at?: string | null
          id?: number
        }
      }
      "applicant_education ": {
        Row: {
          applicant_id: string
          created_at: string | null
          educational_title: string
          end_date: string | null
          graduated: boolean
          id: number
          institution: string
          start_date: string | null
        }
        Insert: {
          applicant_id: string
          created_at?: string | null
          educational_title: string
          end_date?: string | null
          graduated: boolean
          id?: number
          institution: string
          start_date?: string | null
        }
        Update: {
          applicant_id?: string
          created_at?: string | null
          educational_title?: string
          end_date?: string | null
          graduated?: boolean
          id?: number
          institution?: string
          start_date?: string | null
        }
      }
      applicant_experience: {
        Row: {
          applicant_id: string
          company: string | null
          created_at: string | null
          description: string
          end_date: string | null
          id: number
          start_date: string
          title: string
        }
        Insert: {
          applicant_id: string
          company?: string | null
          created_at?: string | null
          description: string
          end_date?: string | null
          id?: number
          start_date: string
          title: string
        }
        Update: {
          applicant_id?: string
          company?: string | null
          created_at?: string | null
          description?: string
          end_date?: string | null
          id?: number
          start_date?: string
          title?: string
        }
      }
      applicant_job_role: {
        Row: {
          applicant_id: string
          created_at: string | null
          id: number
          job_role_id: number
        }
        Insert: {
          applicant_id: string
          created_at?: string | null
          id?: number
          job_role_id: number
        }
        Update: {
          applicant_id?: string
          created_at?: string | null
          id?: number
          job_role_id?: number
        }
      }
      applicant_privacy_settings: {
        Row: {
          created_at: string | null
          hide_address: boolean
          hide_age: boolean
          hide_educational_details: boolean
          hide_gender: boolean | null
          hide_workplace_details: boolean
          id: string
        }
        Insert: {
          created_at?: string | null
          hide_address?: boolean
          hide_age?: boolean
          hide_educational_details?: boolean
          hide_gender?: boolean | null
          hide_workplace_details?: boolean
          id: string
        }
        Update: {
          created_at?: string | null
          hide_address?: boolean
          hide_age?: boolean
          hide_educational_details?: boolean
          hide_gender?: boolean | null
          hide_workplace_details?: boolean
          id?: string
        }
      }
      applicant_skill: {
        Row: {
          applicant_id: string
          created_at: string | null
          id: number
          skill_id: number
        }
        Insert: {
          applicant_id: string
          created_at?: string | null
          id?: number
          skill_id: number
        }
        Update: {
          applicant_id?: string
          created_at?: string | null
          id?: number
          skill_id?: number
        }
      }
      application: {
        Row: {
          applicant_id: string
          created_at: string
          data: string
          id: number
          job_post_id: number
          title: string | null
        }
        Insert: {
          applicant_id: string
          created_at?: string
          data: string
          id?: number
          job_post_id: number
          title?: string | null
        }
        Update: {
          applicant_id?: string
          created_at?: string
          data?: string
          id?: number
          job_post_id?: number
          title?: string | null
        }
      }
      certification: {
        Row: {
          id: number
          title: string
        }
        Insert: {
          id?: number
          title: string
        }
        Update: {
          id?: number
          title?: string
        }
      }
      company: {
        Row: {
          created_at: string
          id: string
          name: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
        }
      }
      job_post: {
        Row: {
          company_id: string
          created_at: string
          id: number
          recruiter_id: string
          summary: string
          title: string
        }
        Insert: {
          company_id: string
          created_at?: string
          id?: number
          recruiter_id: string
          summary: string
          title: string
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: number
          recruiter_id?: string
          summary?: string
          title?: string
        }
      }
      job_post_certification: {
        Row: {
          certification_id: number
          created_at: string | null
          id: number
          job_post_id: number
        }
        Insert: {
          certification_id: number
          created_at?: string | null
          id?: number
          job_post_id: number
        }
        Update: {
          certification_id?: number
          created_at?: string | null
          id?: number
          job_post_id?: number
        }
      }
      job_post_job_role: {
        Row: {
          created_at: string | null
          id: number
          job_post_id: number
          job_role_id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          job_post_id: number
          job_role_id: number
        }
        Update: {
          created_at?: string | null
          id?: number
          job_post_id?: number
          job_role_id?: number
        }
      }
      job_post_skill: {
        Row: {
          created_at: string | null
          id: number
          job_post_id: number
          skill_id: number
        }
        Insert: {
          created_at?: string | null
          id?: number
          job_post_id: number
          skill_id: number
        }
        Update: {
          created_at?: string | null
          id?: number
          job_post_id?: number
          skill_id?: number
        }
      }
      job_role: {
        Row: {
          id: number
          title: string
        }
        Insert: {
          id?: number
          title: string
        }
        Update: {
          id?: number
          title?: string
        }
      }
      portfolio: {
        Row: {
          applicant_id: string
          content: string | null
          created_at: string
          id: number
        }
        Insert: {
          applicant_id: string
          content?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          applicant_id?: string
          content?: string | null
          created_at?: string
          id?: number
        }
      }
      profile: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string | null
        }
      }
      recruiter: {
        Row: {
          company_id: string
          created_at: string
          id: string
        }
        Insert: {
          company_id: string
          created_at?: string
          id: string
        }
        Update: {
          company_id?: string
          created_at?: string
          id?: string
        }
      }
      skill: {
        Row: {
          id: number
          title: string
        }
        Insert: {
          id?: number
          title: string
        }
        Update: {
          id?: number
          title?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
