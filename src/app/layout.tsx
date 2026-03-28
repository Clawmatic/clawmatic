import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BASE_URL = 'https://clawmatic.eu';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'ClawMatic — OpenClaw AI Guides & Skill Packs',
    template: '%s — ClawMatic',
  },
  description:
    'The go-to resource for OpenClaw AI. Step-by-step guides, ready-to-install skill packs, and automation ideas for power users. Free guides, paid packs from €5.',
  keywords: [
    'OpenClaw',
    'OpenClaw AI',
    'OpenClaw guides',
    'OpenClaw skills',
    'AI assistant',
    'personal AI',
    'AI automation',
    'ClawMatic',
    'skill packs',
    'OpenClaw tutorial',
    'WhatsApp AI',
    'AI assistant setup',
  ],
  authors: [{ name: 'ClawMatic', url: BASE_URL }],
  creator: 'ClawMatic',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'ClawMatic',
    title: 'ClawMatic — OpenClaw AI Guides & Skill Packs',
    description:
      'Guides, skill packs, and automation ideas for OpenClaw AI. Get your agent doing more in minutes.',
    images: [
      {
        url: '/openclaw-starter-kit-cover.png',
        width: 1280,
        height: 960,
        alt: 'ClawMatic — OpenClaw AI Hub',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClawMatic — OpenClaw AI Guides & Skill Packs',
    description:
      'Guides, skill packs, and automation ideas for OpenClaw AI. Get your agent doing more in minutes.',
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
        <Script src="https://gumroad.com/js/gumroad.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
