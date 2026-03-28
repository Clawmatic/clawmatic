import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guides',
  description:
    'Free step-by-step OpenClaw guides. Learn how to set up your agent, connect WhatsApp, automate workflows, and build custom skills. No fluff.',
  openGraph: {
    title: 'OpenClaw Guides — ClawMatic',
    description: 'Free step-by-step guides for OpenClaw AI. From first install to advanced automation.',
  },
};

export default function GuidesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
