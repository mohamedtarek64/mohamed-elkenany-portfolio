export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  duration: string;
  jobType: string;
  description: string;
  achievements?: string[];
  teamSize?: string;
  technologies: string[];
}
