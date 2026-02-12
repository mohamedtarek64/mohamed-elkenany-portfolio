// Site constants
export const SITE_CONFIG = {
  name: 'Mohamed Elkenany',
  title: 'Full Stack Developer',
  description: 'Professional portfolio of Mohamed Elkenany, Full Stack Developer specializing in Next.js, Node.js, and modern web technologies.',
  url: 'https://mohamed-elkenany.vercel.app',
  author: 'Mohamed Elkenany',
  keywords: ['portfolio', 'developer', 'nextjs', 'typescript', 'fullstack'],
  social: {
    github: 'https://github.com/mohamedtarek64',
    linkedin: 'https://linkedin.com/in/mohamed-elkenany-41aab6264',
    facebook: 'https://www.facebook.com/medo.tarek.7186',
    instagram: 'https://www.instagram.com/mohammed_elkenany77',
    email: 'mohamed20220632@gmail.com',
    phone: '(+20) 1068207217',
    location: 'Cairo, Egypt'
  }
};

// Navigation items
export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

// Skill categories
export const SKILL_CATEGORIES = [
  { id: 'all', name: 'All Skills', icon: '🔧' },
  { id: 'frontend', name: 'Frontend', icon: '🎨' },
  { id: 'backend', name: 'Backend', icon: '⚙️' },
  { id: 'tools', name: 'Tools', icon: '🛠️' },
  { id: 'languages', name: 'Languages', icon: '💻' }
];

// Project categories
export const PROJECT_CATEGORIES = [
  { id: 'all', name: 'All Projects', icon: '📁' },
  { id: 'web', name: 'Web Applications', icon: '🌐' },
  { id: 'mobile', name: 'Mobile Apps', icon: '📱' },
  { id: 'desktop', name: 'Desktop Apps', icon: '💻' },
  { id: 'other', name: 'Other', icon: '🔧' }
];

// Animation delays
export const ANIMATION_DELAYS = {
  stagger: 0.1,
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8
};

// Breakpoints
export const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
};

// Z-index layers
export const Z_INDEX = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060,
  toast: 1070
};

// API endpoints
export const API_ENDPOINTS = {
  contact: '/api/contact',
  health: '/api/health',
  newsletter: '/api/newsletter'
};

// Form validation rules
export const VALIDATION_RULES = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z\s]+$/
  },
  email: {
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  subject: {
    required: true,
    minLength: 5,
    maxLength: 100
  },
  message: {
    required: true,
    minLength: 10,
    maxLength: 1000
  }
};

// Error messages
export const ERROR_MESSAGES = {
  required: 'This field is required',
  minLength: 'Minimum length not met',
  maxLength: 'Maximum length exceeded',
  pattern: 'Invalid format',
  email: 'Invalid email address',
  network: 'Network error. Please try again.',
  server: 'Server error. Please try again later.'
};

// Success messages
export const SUCCESS_MESSAGES = {
  contact: 'Message sent successfully! I\'ll get back to you soon.',
  newsletter: 'Successfully subscribed to newsletter!',
  email: 'Email sent successfully!'
};

// Loading states
export const LOADING_STATES = {
  idle: 'idle',
  loading: 'loading',
  success: 'success',
  error: 'error'
};

// Theme modes
export const THEME_MODES = {
  light: 'light',
  dark: 'dark',
  system: 'system'
};

// Languages
export const LANGUAGES = {
  en: 'English',
  ar: 'العربية'
};

// Local storage keys
export const STORAGE_KEYS = {
  theme: 'portfolio-theme',
  language: 'portfolio-language',
  preferences: 'portfolio-preferences'
};

// External links
export const EXTERNAL_LINKS = {
  github: 'https://github.com/mohamedtarek64',
  linkedin: 'https://linkedin.com/in/mohamed-elkenany-41aab6264',
  email: 'mailto:mohamed20220632@gmail.com',
  phone: 'tel:+201068207217',
  cv: 'https://drive.google.com/file/d/1gnnTJNSV21J1uMt-UCS149etX9qntcf_/view?usp=sharing'
};

// Feature flags
export const FEATURE_FLAGS = {
  darkMode: process.env.NEXT_PUBLIC_DARK_MODE_ENABLED === 'true',
  animations: process.env.NEXT_PUBLIC_ANIMATIONS_ENABLED === 'true',
  analytics: process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === 'true',
  pwa: process.env.NEXT_PUBLIC_PWA_ENABLED === 'true'
};
