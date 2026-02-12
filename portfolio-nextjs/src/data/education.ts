import { Education } from '@/types/education';

export const education: Education[] = [
  {
    id: 'bachelor-degree',
    degree: 'Bachelor of Information Systems',
    institution: 'October 6 University',
    location: 'Giza, Egypt',
    startDate: '2022-09-01',
    endDate: '2026-06-01',
    current: true,
    description: 'Studying Information Systems with a focus on database management, system analysis and design, enterprise software development, and business intelligence.',
    courses: [
      'Algorithms and Data Structures',
      'Database Management Systems',
      'Computer Networking',
      'Operating Systems',
      'Software Engineering',
      'System Analysis & Design',
      'Business Intelligence',
      'Web Development',
      'Programming Fundamentals',
      'Computer Architecture'
    ]
  }
];

export default education;
