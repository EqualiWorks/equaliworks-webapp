import type { Database } from './database.types';

export type ApplicantExperience = Database['public']['Tables']['applicant_experience']['Row'];
export type ApplicantEducation = Database['public']['Tables']['applicant_education']['Row'];
