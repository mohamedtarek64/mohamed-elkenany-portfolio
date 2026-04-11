import { Project } from '@/types/project';

export const projects: Project[] = [
  // 1. CloudServe Pro - Next-Gen Cloud Kitchen POS
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
  // 2. Interior Designer 3D
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
  // 3. EduCloud LMS (Live System)
  {
    id: 'elearning-platform',
    title: 'EduCloud LMS',
    description: 'Expert-led Video Learning & Course Management System',
    longDescription: 'A comprehensive educational platform built with Laravel 12 and Filament 4. Features a multi-role architecture (Admin, Instructor, Student), advanced course builder, video progress tracking, and automated certification. Optimized for high-performance video delivery.',
    image: '/images/projects/elearning-v2.png',
    technologies: ['Laravel 12', 'Filament 4', 'Livewire 3', 'Tailwind CSS', 'Stripe', 'FFmpeg'],
    liveUrl: '#',
    githubUrl: 'https://github.com/mohamedtarek64/E-Learning-platform',
    featured: true,
    category: 'web',
    startDate: '2024-09-01',
    endDate: '2024-12-01',
    metrics: {
      highlight: 'Advanced Video Pipeline',
      items: [
        'Multi-step course creation wizard for instructors',
        'Video processing pipeline with FFmpeg integration',
        'Automated PDF certificate generation upon completion',
        'Stripe-powered subscription and payout management'
      ]
    }
  },
  // 4. Elite POS System
  {
    id: 'elite-pos-system',
    title: 'Elite POS System',
    description: 'Advanced Point of Sale System with Multi-branch Support',
    longDescription: 'A comprehensive POS solution for retail and restaurants, featuring offline synchronization, inventory management, and detailed financial reporting.',
    image: '/images/projects/POS.PNG',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS', 'PWA'],
    liveUrl: '#',
    githubUrl: 'https://github.com/mohamedtarek64/POS-System',
    featured: true,
    category: 'web',
    startDate: '2024-05-01',
    endDate: '2024-08-01',
    metrics: {
      highlight: '99.9% Data Consistency',
      items: [
        'Offline mode with background synchronization',
        'Barcode scanning and label printing',
        'Multi-user role and permission system',
        'Generated over 10,000 invoices in testing'
      ]
    }
  },
  // 5. Prestige Real Estate
  {
    id: 'prestige-real-estate',
    title: 'Prestige Real Estate',
    description: 'Premium Property Listing and Management Platform',
    longDescription: 'A sophisticated real estate platform for managing property listings, agents, and client inquiries. Includes an interactive property map and advanced filtering.',
    image: '/images/projects/Real Estate.PNG',
    technologies: ['Laravel', 'Vue.js', 'Leaflet.js', 'MySQL', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/mohamedtarek64/Real-Estate-Platform',
    featured: true,
    category: 'web',
    startDate: '2024-03-01',
    endDate: '2024-06-01',
    metrics: {
      highlight: 'Interactive Maps',
      items: [
        'Interactive map view using Leaflet.js',
        'Advanced search using 15+ filter parameters',
        'Automated lead notification for agents',
        'Optimized image loading for high-res property photos'
      ]
    }
  },
  // 6. Holistic HMS
  {
    id: 'holistic-hms',
    title: 'Holistic HMS',
    description: 'Comprehensive Healthcare Management System',
    longDescription: 'An enterprise-grade hospital management system covering patient records, appointment scheduling, billing, and pharmacy inventory.',
    image: '/images/projects/hms.png',
    technologies: ['PHP', 'Laravel', 'Livewire', 'MySQL', 'FullCalendar'],
    liveUrl: '#',
    githubUrl: 'https://github.com/mohamedtarek64/HMS',
    featured: true,
    category: 'web',
    startDate: '2023-11-01',
    endDate: '2024-02-01',
    metrics: {
      highlight: 'Patient Records Security',
      items: [
        'Secure patient record management (HIPAA-inspired)',
        'Real-time appointment scheduling with conflicts detection',
        'Complex medical billing and insurance processing',
        'Pharmacy inventory with low-stock alerts'
      ]
    }
  },
  // 7. WhatsApp Clone
  {
    id: 'whatsapp-clone',
    title: 'WhatsApp Clone',
    description: 'Real-time messaging application with end-to-end feel',
    longDescription: 'A real-time messaging clone with support for private chats, groups, and status updates. Built using a modern full-stack approach.',
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
  // 8. SwiftBuy E-commerce
  {
    id: 'swiftbuy-ecommerce',
    title: 'SwiftBuy E-commerce',
    description: 'Modern Multi-vendor E-commerce Marketplace',
    longDescription: 'A complete e-commerce solution with product management, shopping cart, multi-vendor support, and integrated payment gateways.',
    image: '/images/projects/ecommerce.png',
    technologies: ['Laravel', 'Vue.js', 'Stripe', 'Redis', 'Tailwind CSS'],
    liveUrl: '#',
    githubUrl: 'https://github.com/mohamedtarek64/Ecommerce-Platform',
    featured: true,
    category: 'web',
    startDate: '2024-01-01',
    endDate: '2024-04-01',
    metrics: {
      highlight: 'High Performance',
      items: [
        'Redis-powered cart and session management',
        'Optimized product search across 1000+ items',
        'Multi-vendor dashboard and commission tracking',
        'Integrated multi-currency checkout system'
      ]
    }
  },
  // 9. SwiftFlow Courier
  {
    id: 'swiftflow-courier',
    title: 'SwiftFlow Courier',
    description: 'Enterprise-grade Courier & Logistics Management System',
    longDescription: 'A comprehensive logistics platform with real-time shipment tracking, barcode generation, and digital signatures.',
    image: '/images/projects/courier.png',
    technologies: ['Laravel 11', 'Livewire', 'Tailwind CSS', 'MySQL', 'Alpine.js'],
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
  // 10. FinanceFlow Dashboard
  {
    id: 'personal-finance-dashboard',
    title: 'FinanceFlow Dashboard',
    description: 'Smart financial tracking and budgeting application',
    longDescription: 'A comprehensive personal finance management tool with expense tracking, budget planning, and investment monitoring.',
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
  // 11. UrbanMap Real Estate
  {
    id: 'urbanmap-real-estate',
    title: 'UrbanMap Navigator',
    description: 'Advanced Geospatial Real Estate Search Platform',
    longDescription: 'A map-centric real estate application focused on proximity searches and location-based discovery.',
    image: '/images/projects/Real Estaste Map.PNG',
    technologies: ['Laravel', 'Vue.js', 'Google Maps API', 'Redis'],
    liveUrl: '#',
    githubUrl: 'https://github.com/mohamedtarek64/Real-Estate-Map',
    featured: false,
    category: 'web',
    startDate: '2024-02-01',
    endDate: '2024-05-01',
    metrics: {
      highlight: 'Geospatial Search',
      items: [
        'Proximity search and radius filtering',
        'Map-based property discovery and clustering',
        'Fast location indexing with Redis',
        'Custom interactive map markers and info windows'
      ]
    }
  },
  // 12. Culinary Recipe Hub
  {
    id: 'recipe-hub',
    title: 'Culinary Recipes',
    description: 'Social Platform for Food Enthusiasts and Chefs',
    longDescription: 'A collaborative recipe sharing platform with nutritional analysis and ingredient scaling.',
    image: '/images/projects/recipe.png',
    technologies: ['Laravel', 'Livewire', 'Tailwind CSS', 'Spoonacular API'],
    liveUrl: '#',
    githubUrl: 'https://github.com/mohamedtarek64/Recipe-Finder',
    featured: false,
    category: 'web',
    startDate: '2023-10-01',
    endDate: '2023-12-01',
    metrics: {
      highlight: 'Nutritional Insights',
      items: [
        'Automated nutritional fact calculation',
        'Ingredient quantity scaling for different portions',
        'User-generated recipe rating and review system',
        'Optimized search by dietary restrictions'
      ]
    }
  }
];

export default projects;
