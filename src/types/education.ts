export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string;
  courses: string[];
}
