import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  icon: IconDefinition | string;
  color: string;
}
