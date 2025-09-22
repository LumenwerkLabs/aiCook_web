import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import CookingBackgroundAnimation from '@/components/animations/CookingBackgroundAnimation';
import IProvider from '@/context/I18nContext';
import { Inter } from 'next/font/google';

// Optimize font loading with Next.js built-in optimization
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

export const metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://ai-cook.app' : 'http://localhost:3000'),
  title: {
    default: 'ai.Cook - Your AI-Powered Culinary Assistant',
    template: '%s | ai.Cook'
  },
  description: 'Transform your cooking with AI-powered recipe recommendations, smart ingredient management, and personalized meal planning. Discover perfect recipes tailored to your preferences and available ingredients.',
  keywords: [
    'ai.Cook', 
    'AI cooking assistant', 
    'personalized recipes', 
    'smart ingredient management', 
    'meal planning', 
    'nutritional goals',
    'cooking AI',
    'recipe recommendations',
    'kitchen assistant'
  ],
  authors: [{ name: 'Lucia Schlegel', url: 'https://github.com/LuciaSchlegel' }],
  creator: 'ai.Cook',
  publisher: 'ai.Cook',
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
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    title: 'ai.Cook - Your AI-Powered Culinary Assistant',
    description: 'Transform your cooking with AI-powered recipe recommendations and smart ingredient management.',
    siteName: 'ai.Cook',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ai.Cook - AI-Powered Cooking Assistant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ai.Cook - Your AI-Powered Culinary Assistant',
    description: 'Transform your cooking with AI-powered recipe recommendations and smart ingredient management.',
    images: ['/og-image.jpg'],
    creator: '@aiCookApp',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#E8E4D9' },
    { media: '(prefers-color-scheme: dark)', color: '#284139' },
  ],
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for potential third-party resources */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Preload critical fonts - updated for better design system integration */}
        <link 
          rel="preload" 
          href="/fonts/Melodrama-Regular.otf" 
          as="font" 
          type="font/otf" 
          crossOrigin="anonymous" 
        />
        <link 
          rel="preload" 
          href="/fonts/Melodrama-Medium.otf" 
          as="font" 
          type="font/otf" 
          crossOrigin="anonymous" 
        />
        <link 
          rel="preload" 
          href="/fonts/Melodrama-Light.otf" 
          as="font" 
          type="font/otf" 
          crossOrigin="anonymous" 
        />
      </head>
      <body className="antialiased">
        {/* Performance monitoring */}
        <SpeedInsights />
        
        {/* Skip to main content for accessibility - using design system colors */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 btn-base focus:bg-[#284139] focus:text-[#E8E4D9] focus:rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8E4D9]"
        >
          Skip to main content
        </a>

        {/* Background animation with reduced motion support */}
        <div className="fixed inset-0 z-0" aria-hidden="true">
          <CookingBackgroundAnimation />
        </div>

        {/* Main application container with design system integration */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <IProvider>
            {/* Header */}
            <Header />
            
            {/* Main content with semantic HTML */}
            <main id="main-content" className="flex-1" role="main">
              {children}
            </main>
            
            {/* Footer */}
            <Footer />
          </IProvider>
        </div>

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "ai.Cook",
              "description": "AI-powered cooking assistant for personalized recipe recommendations and smart ingredient management",
              "url": "https://ai-cook.app",
              "applicationCategory": "LifestyleApplication",
              "operatingSystem": "iOS, Android, Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "creator": {
                "@type": "Person",
                "name": "Lucia Schlegel",
                "url": "https://github.com/LuciaSchlegel"
              }
            })
          }}
        />
      </body>
    </html>
  );
}