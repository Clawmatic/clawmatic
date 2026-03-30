import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

const BASE_URL = 'https://clawmatic.eu';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'ClawMatic — AI Automation Agency',
    template: '%s — ClawMatic',
  },
  description:
    'ClawMatic builds custom AI automation systems for businesses. Eliminate repetitive work, save 10-30 hours per week, and scale faster. Book a free AI audit.',
  keywords: [
    'AI automation',
    'business automation',
    'AI agency',
    'custom AI systems',
    'workflow automation',
    'AI consultant',
    'AI assistant',
    'ClawMatic',
  ],
  authors: [{ name: 'ClawMatic', url: BASE_URL }],
  creator: 'ClawMatic',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'ClawMatic',
    title: 'ClawMatic — AI Automation Agency',
    description:
      'ClawMatic builds custom AI automation systems for businesses. Eliminate repetitive work, save 10-30 hours per week, and scale faster.',
    images: [
      {
        url: '/openclaw-starter-kit-cover.png',
        width: 1280,
        height: 960,
        alt: 'ClawMatic — AI Automation Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClawMatic — AI Automation Agency',
    description:
      'ClawMatic builds custom AI automation systems for businesses. Eliminate repetitive work, save 10-30 hours per week, and scale faster.',
    images: ['/openclaw-starter-kit-cover.png'],
  },
  verification: {
    google: '1BrDFXRyGpSZma0ZDFkbfUtoWvsudjsU2kdbWBjfU68',
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
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-891L4C43V7" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-891L4C43V7');
        `}</Script>
        <Script src="https://gumroad.com/js/gumroad.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
