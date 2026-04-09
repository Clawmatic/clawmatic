import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OpenClaw Skill Packs — ClawMatic Community',
  description:
    'Ready-made OpenClaw skills you can drop straight into your setup. Tested, documented, and ready to use. Instant download.',
  openGraph: {
    title: 'OpenClaw Skill Packs — ClawMatic Community',
    description: 'Ready-made skills you can drop straight into OpenClaw. Instant download.',
    images: [{ url: '/og/toolkit.png', width: 1200, height: 630, alt: 'Skill Packs — ClawMatic Community' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OpenClaw Skill Packs — ClawMatic Community',
    description: 'Ready-made skills you can drop straight into OpenClaw. Instant download.',
    images: ['/og/toolkit.png'],
  },
};
// TODO: Generate OG image at /public/og/toolkit.png

export default function ToolkitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
