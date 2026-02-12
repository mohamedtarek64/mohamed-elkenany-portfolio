import dynamic from 'next/dynamic';
import { Header, Hero, About } from '@/components/sections';
import { ScrollProgress, LoadingScreen, Particles, SmoothScroll } from '@/components/ui';

// Lazy load heavy components with loading states
const Skills = dynamic(() => import('@/components/sections/Skills'), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>
});

const Experience = dynamic(() => import('@/components/sections/Experience'), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>
});

const Projects = dynamic(() => import('@/components/sections/Projects'), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>
});

const Contact = dynamic(() => import('@/components/sections/Contact'), {
  loading: () => <div className="h-96 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>
});

const Footer = dynamic(() => import('@/components/sections/Footer'), {
  loading: () => <div className="h-32 flex items-center justify-center"><div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div></div>
});

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Particles />
      <SmoothScroll />
      <main className="relative w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
