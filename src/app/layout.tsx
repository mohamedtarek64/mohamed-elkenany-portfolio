import type { Metadata, Viewport } from 'next';
import './globals.css';
import '@/lib/fontawesome';

export const metadata: Metadata = {
  metadataBase: new URL('https://mohamed-elkenany.vercel.app'),
  title: 'Mohamed Elkenany - Full Stack Developer',
  description: 'Professional portfolio of Mohamed Elkenany, Full Stack Developer specializing in Next.js, Node.js, and modern web technologies.',
  keywords: ['portfolio', 'developer', 'nextjs', 'typescript', 'fullstack'],
  icons: {
    icon: '/vue-logo.png',
    shortcut: '/vue-logo.png',
    apple: '/vue-logo.png',
  },
  authors: [{ name: 'Mohamed Elkenany' }],
  creator: 'Mohamed Elkenany',
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mohamed-elkenany.vercel.app',
    siteName: 'Mohamed Elkenany Portfolio',
    title: 'Mohamed Elkenany - Full Stack Developer',
    description: 'Professional portfolio of Mohamed Elkenany, Full Stack Developer specializing in Next.js, Node.js, and modern web technologies.',
    images: [
      {
        url: '/images/og/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Mohamed Elkenany Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@mohamed_elkenany',
    creator: '@mohamed_elkenany',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Mohamed Portfolio',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#64748b',
    'msapplication-config': '/browserconfig.xml',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#64748b',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
