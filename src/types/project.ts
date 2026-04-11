export interface ProjectMetrics {
  highlight: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'desktop' | 'other';
  startDate: string;
  endDate?: string;
  metrics?: ProjectMetrics;
}
