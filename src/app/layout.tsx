import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'ClawMatic — OpenClaw AI Hub',
  description: 'Guides, Skill Packs, and community for OpenClaw AI — your personal AI assistant platform. Built for hackers and power users.',
  keywords: ['OpenClaw', 'AI assistant', 'ClawMatic', 'skill packs', 'automation'],
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
      </body>
    </html>
  );
}
