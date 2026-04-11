export interface PersonalStats {
  experience: string;
  projects: string;
  graduation: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  roles: string[];
  description: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  github: string;
  linkedin: string;
  cvUrl: string;
  resumeUrl: string;
  profileImage: string;
  heroImage: string;
  stats: PersonalStats;
  metrics: {
    transactions: string;
    optimization: string;
    responseTime: string;
    uptime: string;
    fps: string;
  };
}

export const personalInfo: PersonalInfo = {
  name: 'Mohamed Elkenany',
  title: 'Aspiring Full-Stack Developer',
  roles: [
    'Full Stack Developer',
    'Backend Developer',
    'Laravel Specialist',
    'CS Student'
  ],
  description: 'Third-year Information Systems student at October 6 University with strong practical experience in full-stack development. Completed a 3-month backend internship at Digital Solutions Co. Building a portfolio of production-ready projects focusing on scalable web applications, real-time systems, and modern architectures.',
  email: 'mohamedelkenany001@gmail.com',
  phone: '(+20) 1068207217',
  location: 'Cairo, Egypt',
  website: 'https://mohamed-elkenany.vercel.app',
  github: 'https://github.com/mohamedtarek64',
  linkedin: 'https://www.linkedin.com/in/mohamed-elkenany-41aab6264',
  cvUrl: 'https://drive.google.com/file/d/14voFV_ddUA3bUVxmOdzay56N8Rqz1EdQ/view?usp=sharing',
  resumeUrl: 'https://drive.google.com/file/d/14voFV_ddUA3bUVxmOdzay56N8Rqz1EdQ/view?usp=sharing',
  profileImage: '/images/profile/me.jpg',
  heroImage: '/images/projects/me2.jpg',
  stats: {
    experience: '1 Internship',
    projects: '6 Systems',
    graduation: 'June 2026'
  },
  metrics: {
    transactions: '300+',
    optimization: '85%',
    responseTime: '180ms',
    uptime: '99.8%',
    fps: '60',
  }
};

export default personalInfo;
