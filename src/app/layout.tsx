import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BASE_URL = 'https://community.clawmatic.eu';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'ClawMatic Community — The Unofficial OpenClaw AI Hub',
    template: '%s | ClawMatic Community',
  },
  description:
    'Free guides, curated AI model setups, skill packs, and a community of builders. The unofficial OpenClaw AI hub — all in one place.',
  keywords: [
    'OpenClaw',
    'OpenClaw guides',
    'OpenClaw skill packs',
    'OpenClaw setup',
    'AI agent',
    'OpenRouter',
    'ClawMatic Community',
    'OpenClaw tutorial',
  ],
  authors: [{ name: 'ClawMatic Community', url: BASE_URL }],
  creator: 'ClawMatic',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'ClawMatic Community',
    title: 'ClawMatic Community — The Unofficial OpenClaw AI Hub',
    description:
      'Free guides, curated AI model setups, skill packs, and a community of builders. All in one place.',
    images: [
      {
        url: '/og/home.png',
        width: 1200,
        height: 630,
        alt: 'ClawMatic Community — The Unofficial OpenClaw AI Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClawMatic Community — The Unofficial OpenClaw AI Hub',
    description:
      'Free guides, curated AI model setups, skill packs, and a community of builders. All in one place.',
    images: ['/og/home.png'],
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
