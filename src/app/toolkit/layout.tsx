import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Toolkit',
  description:
    'Ready-made automation toolkits for individuals. Download and start automating your work today — no technical knowledge needed.',
};

export default function ToolkitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
