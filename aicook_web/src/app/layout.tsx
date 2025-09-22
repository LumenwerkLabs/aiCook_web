import React from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import CookingBackgroundAnimation from '@/components/animations/CookingBackgroundAnimation';
import IProvider from '@/context/I18nContext';
import { Inter } from 'next/font/google';
import Script from 'next/script';

// Optimize font loading with Next.js built-in optimization
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

export const metadata = {
  metadataBase: new URL(process.env.NODE_ENV === 'production' ? 'https://aicook.website' : 'http://localhost:3000'),
  title: {
    default: 'ai.Cook - AI-Powered Culinary Assistant & Smart Recipe Finder',
    template: '%s | ai.Cook'
  },
  description: 'Transform your cooking with AI-powered recipe recommendations, smart ingredient management, and personalized meal planning for your kitchen.',
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
  alternates: {
    canonical: '/',
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
    title: 'ai.Cook - AI-Powered Culinary Assistant & Smart Recipe Finder',
    description: 'Transform your cooking with AI-powered recipe recommendations and smart ingredient management for your kitchen.',
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
    title: 'ai.Cook - AI-Powered Culinary Assistant & Smart Recipe Finder',
    description: 'Transform your cooking with AI-powered recipe recommendations and smart ingredient management for your kitchen.',
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
        
        {/* DNS prefetch */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Preload critical fonts */}
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

        {/* Google Analytics with Next.js Script */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SKEW623NK8"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SKEW623NK8');
          `}
        </Script>
      </head>
      <body className="antialiased">
        {/* Performance monitoring */}
        <SpeedInsights />
        
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 btn-base focus:bg-[#284139] focus:text-[#E8E4D9] focus:rounded-md focus:outline-none focus:ring-2 focus:ring-[#E8E4D9]"
        >
          Skip to main content
        </a>

        {/* Background animation */}
        <div className="fixed inset-0 z-0" aria-hidden="true">
          <CookingBackgroundAnimation />
        </div>

        {/* Main app container */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <IProvider>
            <Header />
            <main id="main-content" className="flex-1" role="main">
              {children}
            </main>
            <Footer />
          </IProvider>
        </div>

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebApplication",
                "name": "ai.Cook",
                "alternateName": "AI Cook",
                "description": "AI-powered cooking assistant for personalized recipe recommendations, smart ingredient management, and meal planning",
                "url": "https://aicook.website",
                "applicationCategory": "LifestyleApplication",
                "operatingSystem": "iOS, Android, Web",
                "browserRequirements": "Requires JavaScript. Requires HTML5.",
                "softwareVersion": "1.0",
                "releaseNotes": "Initial release with AI-powered recipe recommendations",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock"
                },
                "creator": {
                  "@type": "Person",
                  "name": "Lucia Schlegel",
                  "url": "https://github.com/LuciaSchlegel"
                },
                "publisher": {
                  "@type": "Organization",
                  "name": "ai.Cook",
                  "url": "https://aicook.website"
                },
                "featureList": [
                  "AI-powered recipe recommendations",
                  "Smart ingredient management", 
                  "Personalized meal planning",
                  "Nutritional goal tracking",
                  "Recipe discovery based on available ingredients"
                ],
                "screenshot": "https://aicook.website/og-image.jpg"
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "ai.Cook",
                "url": "https://aicook.website",
                "logo": "https://aicook.website/favicon.svg",
                "foundingDate": "2024",
                "description": "AI-powered cooking assistant platform",
                "sameAs": [
                  "https://twitter.com/aiCookApp"
                ]
              }
            ])
          }}
        />
      </body>
    </html>
  );
}
