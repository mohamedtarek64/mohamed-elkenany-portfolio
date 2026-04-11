import { Experience } from '@/types/experience';

export const experience: Experience[] = [
  {
    id: 'education',
    title: 'B.Sc. Information Systems',
    company: 'October 6 University',
    location: 'Giza, Egypt',
    startDate: '2022-09-01',
    current: true,
    duration: 'Sep 2022 - June 2026 (Expected)',
    jobType: 'Education',
    description: 'Studying Information Systems with focus on database management, system analysis and design, enterprise software development, and business intelligence. Maintaining strong academic performance while building a comprehensive project portfolio.',
    achievements: [
      'Focused coursework in Algorithms, Database Systems, and Software Engineering',
      'Built 6 production-ready full-stack projects outside of coursework',
      'Self-taught Laravel, Vue.js, and modern web development practices'
    ],
    teamSize: 'Class of 2026',
    technologies: ['Algorithms', 'Data Structures', 'Database Systems', 'Software Engineering', 'System Analysis']
  },
  {
    id: 'backend-intern',
    title: 'Backend Developer Intern',
    company: 'Digital Solutions Co.',
    location: 'Cairo, Egypt',
    startDate: '2024-07-01',
    endDate: '2024-09-01',
    current: false,
    duration: 'Jul 2024 - Sep 2024',
    jobType: 'Internship',
    description: 'Assisted in developing backend APIs using PHP and Laravel framework. Worked on database design and optimization for web applications. Gained hands-on experience with professional development workflows.',
    achievements: [
      'Successfully completed 3 major backend features',
      'Improved API response time by 25%',
      'Received excellent feedback from senior developers'
    ],
    teamSize: '5-8 members',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Git', 'Postman', 'Linux']
  },
  {
    id: 'portfolio-building',
    title: 'Portfolio Project Development',
    company: 'Self-Directed',
    location: 'Cairo, Egypt',
    startDate: '2024-01-01',
    current: true,
    duration: 'Jan 2024 - Present',
    jobType: 'Side Projects',
    description: 'Building production-quality full-stack projects to strengthen practical skills and demonstrate capabilities. Each project focuses on solving real-world problems with scalable architectures.',
    achievements: [
      'Built 6 complete full-stack systems from concept to deployment',
      'Achieved 85% performance optimization across projects',
      'Integrated advanced technologies: 3D rendering, real-time systems, payment processing'
    ],
    teamSize: 'Solo Developer',
    technologies: ['Laravel', 'Vue.js', 'Next.js', 'Three.js', 'MySQL', 'Stripe', 'Tailwind CSS']
  }
];

export default experience;
