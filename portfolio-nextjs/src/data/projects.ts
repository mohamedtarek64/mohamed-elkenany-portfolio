import { Project } from '@/types/project';

export const projects: Project[] = [
  // 1. CloudServe Pro - Next-Gen Cloud Kitchen POS (from CV)
  {
    id: 'cloud-serve-pos',
    title: 'CloudServe Pro',
    description: 'Next-gen Cloud Kitchen POS & Kitchen Management System',
    longDescription: 'A high-performance Point of Sale (POS) and Kitchen Management System designed for Cloud Kitchens. Features real-time kitchen display (KDS), Stripe integration, dynamic modifiers, and an advanced coupon system. Built with a premium glassmorphism UI.',
    image: '/images/projects/cloud-ketichen.png',
    technologies: ['Laravel 12', 'Filament 3', 'Livewire 3', 'Tailwind CSS', 'Stripe API', 'MySQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/mohamedtarek64/cloud-kitchen-pos',
    featured: true,
    category: 'web',
    startDate: '2024-12-01',
    endDate: '2025-02-01',
    metrics: {
      highlight: '300+ transactions/day',
      items: [
        '300+ daily transactions handled',
        'Real-time inventory sync reducing discrepancies by 85%',
        'Stripe integration with 99.8% success rate',
        'Multi-location support for restaurant chains'
      ]
    }
  },
  // 2. Interior Designer 3D (from CV)
  {
    id: 'interior-designer-3d',
    title: 'Interior Designer 3D',
    description: '3D visualization tool for interior design projects',
    longDescription: 'An interactive 3D design platform allowing users to visualize and plan interior spaces. Features drag-and-drop furniture placement, real-time rendering at 60 FPS, and material customization with physics simulation.',
    image: '/images/projects/interior3d.png',
    technologies: ['Three.js', 'Vue.js', 'WebGL', 'Laravel', 'MySQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/mohamedtarek64/interior-designer-3d',
    featured: true,
    category: 'web',
    startDate: '2024-07-01',
    endDate: '2024-10-01',
    metrics: {
      highlight: '60 FPS rendering',
      items: [
        '60 FPS consistent 3D rendering',
        'Drag-and-drop furniture with physics simulation',
        'Real-time material and lighting customization',
        'WebGL-powered immersive visualization'
      ]
    }
  },
  // 3. EduCloud LMS (from CV)
  {
    id: 'elearning-platform',
    title: 'EduCloud LMS',
    description: 'Modern Video-based Learning Management System',
    longDescription: 'A full-featured E-Learning platform supporting multi-role access (Admin, Instructor, Student), course curriculum builders, progress tracking, and certificate generation.',
    image: '/images/projects/elearning.png',
    technologies: ['Laravel 12', 'Filament 4', 'Livewire 3', 'Tailwind CSS', 'Stripe', 'FFmpeg'],
    liveUrl: '#',
    githubUrl: 'https://github.com/mohamedtarek64/E-Learning-platform',
    featured: true,
    category: 'web',
    startDate: '2024-09-01',
    endDate: '2024-12-01',
    metrics: {
      highlight: '45% faster load times',
      items: [
        'Multi-role access: Admin, Instructor, Student',
        'Video processing pipeline with FFmpeg',
        'Automated certificate generation',
        'Stripe-powered subscription billing'
      ]
    }
  },
  // 4. WhatsApp Clone (from CV)
  {
    id: 'whatsapp-clone',
    title: 'WhatsApp Clone',
    description: 'Real-time messaging application with end-to-end feel',
    longDescription: 'A real-time messaging clone with support for private chats, groups, and status updates. Built using a modern full-stack approach with focus on sub-100ms real-time delivery and responsive UI.',
    image: '/images/projects/whatsapp.png',
    technologies: ['Laravel', 'Vue.js', 'TypeScript', 'Pusher', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/mohamedtarek64/whatsapp-clone',
    featured: true,
    category: 'web',
    startDate: '2024-11-01',
    endDate: '2025-01-01',
    metrics: {
      highlight: 'Sub-100ms delivery',
      items: [
        'Real-time messaging with < 100ms latency',
        'Private chats, groups, and status updates',
        'WebSocket-powered live updates via Pusher',
        'Responsive UI matching native app experience'
      ]
    }
  },
  // 5. SwiftFlow Courier (from CV)
  {
    id: 'swiftflow-courier',
    title: 'SwiftFlow Courier',
    description: 'Enterprise-grade Courier & Logistics Management System',
    longDescription: 'A comprehensive logistics platform with real-time shipment tracking, barcode generation (CODE-128), digital signatures for proof of delivery, and automated corporate billing.',
    image: '/images/projects/courier.png',
    technologies: ['Laravel 11', 'Livewire', 'Tailwind CSS', 'MySQL', 'Alpine.js', 'Chart.js'],
    liveUrl: '#',
    githubUrl: 'https://github.com/mohamedtarek64/Courier-Management-System',
    featured: true,
    category: 'web',
    startDate: '2024-10-01',
    endDate: '2025-01-01',
    metrics: {
      highlight: '180ms response time',
      items: [
        'Real-time shipment tracking across multiple locations',
        'Barcode generation (CODE-128) for parcels',
        'Digital signature capture for proof of delivery',
        'API response time optimized to 180ms'
      ]
    }
  },
  // 6. FinanceFlow Dashboard (from CV)
  {
    id: 'personal-finance-dashboard',
    title: 'FinanceFlow Dashboard',
    description: 'Smart financial tracking and budgeting application',
    longDescription: 'A comprehensive personal finance management tool with expense tracking, budget planning, investment monitoring, and financial goal setting. Features data-driven insights and spending pattern analysis.',
    image: '/images/projects/finance.png',
    technologies: ['Vue.js', 'TypeScript', 'Chart.js', 'Laravel', 'MySQL'],
    liveUrl: '#',
    githubUrl: 'https://github.com/mohamedtarek64/Personal-Finance-Dashboard',
    featured: true,
    category: 'web',
    startDate: '2024-08-01',
    endDate: '2024-11-01',
    metrics: {
      highlight: '85% query optimization',
      items: [
        'Database query optimization achieving 85% improvement',
        'Interactive charts with Chart.js for financial insights',
        'Budget tracking with automated categorization',
        'Responsive dashboard with real-time data updates'
      ]
    }
  },
];

export default projects;
