import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DISCORD_URL = 'https://discord.gg/7p3PVFq3';

export const metadata: Metadata = {
  title: 'About ClawMatic',
  description:
    'ClawMatic is a solo-founded AI automation agency from Belgium. We build custom AI workflows for businesses and run the unofficial OpenClaw AI hub.',
};

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/clawmatic/30min';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-5">
            About
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Built in Belgium. Built for everyone.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            ClawMatic is a solo-founded project from Belgium 🇧🇪 with a dual mission: help businesses automate the manual work that&apos;s slowing them down, and give OpenClaw AI users the resources they need to build it themselves.
          </p>

          <div className="space-y-8 border-t border-border/50 pt-10">
            <div>
              <h2 className="text-xl font-bold mb-3">The mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Make AI automation accessible — for businesses who need it done for them, and for builders who want to do it themselves. No complexity. No fluff. Just working automations that save real time.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">The OpenClaw connection</h2>
              <p className="text-muted-foreground leading-relaxed">
                OpenClaw is an open-source personal AI assistant. ClawMatic is the unofficial community hub — not affiliated with OpenClaw Inc., but deeply invested in helping users get the most out of it. That means free guides, curated model packs, tested skill downloads, and a growing community of builders.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-3">Building in public</h2>
              <p className="text-muted-foreground leading-relaxed">
                This is a one-person operation built openly. The one-click installer is in development. New skill packs and guides ship regularly. Feedback drives the roadmap.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <Button variant="hero" asChild>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Book a free call
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button variant="hero-outline" asChild>
              <Link href="/guides">
                Explore the guides
              </Link>
            </Button>
            <Button variant="hero-outline" asChild>
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="h-4 w-4" />
                Join the Discord
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
