import type { Metadata } from 'next';
import { Check } from 'lucide-react';
import EmailCapture from '@/components/EmailCapture';

export const metadata: Metadata = {
  title: 'One-Click OpenClaw Installer — Coming Soon · ClawMatic',
  description:
    'No terminal. No config files. No API setup headaches. The ClawMatic one-click installer is coming soon. Get notified when it launches.',
};

const freeTier = [
  'Bring your own API key',
  'Step-by-step guided setup',
  'Full install checklist',
  'Community support',
];

const premiumTier = [
  'Everything handled for you',
  'API provider setup included',
  'One-click, fully managed',
  'Priority support',
];

export default function InstallerPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl text-center relative z-10">
          <span className="inline-block text-xs font-semibold border border-muted-foreground/30 text-muted-foreground rounded-full px-4 py-1.5 mb-6 tracking-widest uppercase">
            Coming soon
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            One-click OpenClaw installer
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            No terminal. No config files. No API setup headaches. Just click install and you&apos;re running.
          </p>
          <p className="text-xs text-muted-foreground/60">
            The installer is already built. We&apos;re finishing the final setup flow.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-16">
            {/* Free tier */}
            <div className="rounded-xl border border-border/50 bg-card p-7">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold">Free tier</h2>
                <span className="text-xs px-2.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary font-medium">
                  Free
                </span>
              </div>
              <ul className="space-y-3">
                {freeTier.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium tier */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-7">
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-lg font-bold">Premium tier</h2>
                <span className="text-xs px-2.5 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary font-medium">
                  Paid
                </span>
              </div>
              <ul className="space-y-3">
                {premiumTier.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Email capture */}
          <div className="rounded-xl border border-border/50 bg-card p-10 max-w-2xl mx-auto">
            <EmailCapture
              heading="Get notified when it launches"
              subheading="We'll email you the moment the installer is ready to download."
              finePrint="No spam. Unsubscribe anytime."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
