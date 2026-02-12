export const SITE_CONFIG = {
  name: 'Mohamed Elkenany',
  title: 'Full Stack Developer',
  description: 'Professional portfolio of Mohamed Elkenany, Full Stack Developer specializing in Next.js, Node.js, and modern web technologies.',
  url: 'https://mohamed-elkenany.vercel.app',
  ogImage: '/images/og/og-image.jpg',
  links: {
    facebook: 'https://www.facebook.com/medo.tarek.7186',
    instagram: 'https://www.instagram.com/mohammed_elkenany77',
    github: 'https://github.com/mohamedtarek64',
    linkedin: 'https://www.linkedin.com/in/mohamed-elkenany-41aab6264',
  },
};

export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export const ANIMATION_VARIANTS = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  },
  slideUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' }
  },
  stagger: {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }
};

export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
} as const;
