import { Skill } from '@/types/skill';
import { 
  faPhp, 
  faJs, 
  faVuejs, 
  faBootstrap, 
  faLaravel, 
  faDocker, 
  faGitAlt, 
  faGithub, 
  faFigma 
} from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faPaperPlane, faWind } from '@fortawesome/free-solid-svg-icons';

export type ProficiencyLevel = 'Advanced' | 'Proficient' | 'Experienced' | 'Learning';

export interface EnhancedSkill extends Skill {
  proficiency: ProficiencyLevel;
  subSkills?: string[];
}

export const skills: EnhancedSkill[] = [
  // Backend
  { name: 'PHP', level: 90, category: 'backend', icon: faPhp, color: '#777BB4', proficiency: 'Advanced', subSkills: ['OOP', 'Design Patterns', 'REST APIs'] },
  { name: 'Laravel', level: 90, category: 'backend', icon: faLaravel, color: '#FF2D20', proficiency: 'Advanced', subSkills: ['Filament', 'Livewire', 'Eloquent ORM', 'Queue Jobs'] },
  { name: 'MySQL', level: 85, category: 'backend', icon: faDatabase, color: '#4479a1', proficiency: 'Advanced', subSkills: ['Schema Design', 'Query Optimization', 'Indexing'] },

  // Frontend
  { name: 'Vue.js', level: 80, category: 'frontend', icon: faVuejs, color: '#4fc08d', proficiency: 'Advanced', subSkills: ['Vue 2 & 3', 'Composition API', 'State Management'] },
  { name: 'JavaScript', level: 85, category: 'frontend', icon: faJs, color: '#F7DF1E', proficiency: 'Advanced', subSkills: ['ES6+', 'Async/Await', 'DOM Manipulation'] },
  { name: 'TypeScript', level: 75, category: 'frontend', icon: faJs, color: '#3178c6', proficiency: 'Proficient', subSkills: ['Type Safety', 'Interfaces', 'Generics'] },
  { name: 'Tailwind CSS', level: 85, category: 'frontend', icon: faWind, color: '#06b6d4', proficiency: 'Advanced', subSkills: ['Responsive Design', 'Custom Themes'] },
  { name: 'Bootstrap', level: 85, category: 'frontend', icon: faBootstrap, color: '#7952b3', proficiency: 'Advanced', subSkills: ['Grid System', 'Components'] },

  // Tools & Infrastructure
  { name: 'Git', level: 85, category: 'tools', icon: faGitAlt, color: '#F05032', proficiency: 'Advanced', subSkills: ['Branching', 'PRs', 'Collaboration'] },
  { name: 'GitHub', level: 85, category: 'tools', icon: faGithub, color: '#181717', proficiency: 'Advanced', subSkills: ['CI/CD', 'Actions', 'Project Management'] },
  { name: 'Docker', level: 60, category: 'tools', icon: faDocker, color: '#2496ed', proficiency: 'Experienced', subSkills: ['Containerization', 'Docker Compose'] },
  { name: 'Postman', level: 80, category: 'tools', icon: faPaperPlane, color: '#FF6C37', proficiency: 'Proficient', subSkills: ['API Testing', 'Collections'] },
  { name: 'Figma', level: 65, category: 'tools', icon: faFigma, color: '#F24E1E', proficiency: 'Experienced', subSkills: ['UI Design', 'Prototyping'] },
  { name: 'VS Code', level: 90, category: 'tools', icon: faCode, color: '#007acc', proficiency: 'Advanced', subSkills: ['Extensions', 'Debugging', 'Shortcuts'] },

  // Languages
  { name: 'C++', level: 65, category: 'languages', icon: faCode, color: '#00599c', proficiency: 'Experienced', subSkills: ['OOP', 'Data Structures'] },
];

export default skills;
