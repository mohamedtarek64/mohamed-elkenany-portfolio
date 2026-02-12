import { Skill } from '@/types/skill';
import { 
  faPhp, 
  faJs, 
  faReact, 
  faVuejs, 
  faBootstrap, 
  faLaravel, 
  faNodeJs, 
  faDocker, 
  faGitAlt, 
  faGithub, 
  faFigma 
} from '@fortawesome/free-brands-svg-icons';
import { faCode, faDatabase, faPaperPlane, faWind } from '@fortawesome/free-solid-svg-icons';

export const skills: Skill[] = [
  // Programming Languages
  { name: 'PHP', level: 90, category: 'languages', icon: faPhp, color: '#777BB4' },
  { name: 'JavaScript', level: 90, category: 'languages', icon: faJs, color: '#64748b' },
  { name: 'TypeScript', level: 80, category: 'languages', icon: faJs, color: '#3178c6' },
  { name: 'C++', level: 70, category: 'languages', icon: faCode, color: '#00599c' },
  { name: 'Laravel', level: 90, category: 'backend', icon: faLaravel, color: '#64748b' },
  { name: 'Vue.js', level: 80, category: 'frontend', icon: faVuejs, color: '#4fc08d' },
  { name: 'Next.js', level: 85, category: 'frontend', icon: faReact, color: '#000000' },
  { name: 'Docker', level: 70, category: 'tools', icon: faDocker, color: '#2496ed' },

  // Frontend Technologies
  { name: 'Bootstrap', level: 90, category: 'frontend', icon: faBootstrap, color: '#7952b3' },
  { name: 'Tailwind CSS', level: 85, category: 'frontend', icon: faWind, color: '#06b6d4' },
  { name: 'jQuery', level: 80, category: 'frontend', icon: faJs, color: '#0769ad' },

  // Backend Technologies
  { name: 'Node.js', level: 80, category: 'backend', icon: faNodeJs, color: '#339933' },

  // Database & Cloud
  { name: 'MySQL', level: 90, category: 'tools', icon: faDatabase, color: '#4479a1' },

  // Development Tools
  { name: 'Git', level: 90, category: 'tools', icon: faGitAlt, color: '#64748b' },
  { name: 'GitHub', level: 90, category: 'tools', icon: faGithub, color: '#181717' },
  { name: 'Postman', level: 80, category: 'tools', icon: faPaperPlane, color: '#64748b' },
  { name: 'Figma', level: 75, category: 'tools', icon: faFigma, color: '#64748b' },
  { name: 'VS Code', level: 95, category: 'tools', icon: faCode, color: '#007acc' },
];

export default skills;
