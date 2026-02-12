import { Experience } from '@/types/experience';

export const experience: Experience[] = [
  {
    id: 'freelance-developer',
    title: 'Freelance Web Developer',
    company: 'Self-Employed',
    location: 'Cairo, Egypt',
    startDate: '2024-01-01',
    current: true,
    duration: 'Jan 2024 - Present',
    jobType: 'Full-time',
    description: 'Building custom web applications for small to medium businesses. Creating responsive websites using PHP, Laravel, and modern frontend frameworks. Developing e-commerce solutions and content management systems.',
    achievements: [
      'Successfully delivered 8+ web applications',
      'Achieved 100% client satisfaction rate',
      'Reduced development time by 30% through efficient coding practices'
    ],
    teamSize: '1-3 members',
    technologies: ['PHP', 'Laravel', 'Vue.js', 'Next.js', 'MySQL', 'JavaScript', 'Bootstrap', 'Tailwind CSS']
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
    description: 'Assisted in developing backend APIs using PHP and Laravel framework. Worked on database design and optimization for web applications.',
    achievements: [
      'Successfully completed 3 major backend features',
      'Improved API response time by 25%',
      'Received excellent feedback from senior developers'
    ],
    teamSize: '5-8 members',
    technologies: ['PHP', 'Laravel', 'MySQL', 'Git', 'Postman', 'Linux']
  }
];

export default experience;
