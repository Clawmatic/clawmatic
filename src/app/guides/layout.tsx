import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free OpenClaw AI Guides — ClawMatic Community',
  description:
    'Free step-by-step OpenClaw guides. Learn how to install OpenClaw, connect it to OpenRouter, pick the right model, and build your first automation. No fluff.',
  openGraph: {
    title: 'Free OpenClaw AI Guides — ClawMatic Community',
    description: 'Free step-by-step guides for OpenClaw AI. From first install to advanced automation.',
    images: [{ url: '/og/guides.png', width: 1200, height: 630, alt: 'OpenClaw Guides — ClawMatic Community' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free OpenClaw AI Guides — ClawMatic Community',
    description: 'Free step-by-step guides for OpenClaw AI. From first install to advanced automation.',
    images: ['/og/guides.png'],
  },
};
// TODO: Generate OG image at /public/og/guides.png

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
