import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BASE_URL = 'https://clawmatic.eu';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'ClawMatic — The unofficial OpenClaw AI hub',
    template: '%s — ClawMatic',
  },
  description:
    'Free guides, curated AI model setups, ready-made skill packs, and a growing community of builders. The go-to hub for OpenClaw AI users.',
  keywords: [
    'OpenClaw AI',
    'OpenClaw guides',
    'OpenClaw skill packs',
    'AI automation',
    'ClawMatic',
    'OpenClaw setup',
    'AI model setup',
    'OpenRouter',
  ],
  authors: [{ name: 'ClawMatic', url: BASE_URL }],
  creator: 'ClawMatic',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'ClawMatic',
    title: 'ClawMatic — The unofficial OpenClaw AI hub',
    description:
      'Free guides, curated AI model setups, ready-made skill packs, and a growing community of builders. The go-to hub for OpenClaw AI users.',
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
    title: 'ClawMatic — The unofficial OpenClaw AI hub',
    description:
      'Free guides, curated AI model setups, ready-made skill packs, and a growing community of builders. The go-to hub for OpenClaw AI users.',
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
    <html lang="en">
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
