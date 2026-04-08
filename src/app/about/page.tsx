import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About ClawMatic',
  description:
    'ClawMatic is an OpenClaw deployment specialist. We deploy custom OpenClaw AI agents for small and mid-sized businesses — on their own infrastructure, fully under their control.',
};

const CALENDLY_URL = 'https://calendly.com/clawmatic/30min';
const DISCORD_URL = 'https://discord.gg/7p3PVFq3';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 relative border-b border-border/40">
        <div className="absolute inset-0 hero-grid opacity-15" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 60% 40%, rgba(78,204,163,0.07) 0%, transparent 60%)',
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-5">
            About
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-5 max-w-3xl">
            OpenClaw specialists.
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="text-xl font-bold mb-6">
            We're OpenClaw specialists. That's it. That's the whole pitch.
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            ClawMatic was founded on a simple idea: businesses shouldn't have to send their data to third-party clouds to benefit from AI.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            OpenClaw is the open-source AI agent framework that makes that possible — but deploying it, configuring it, and maintaining it is still a technical project most businesses can't tackle alone. That's where we come in.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We run the unofficial OpenClaw community hub at{' '}
            <a
              href="https://community.clawmatic.eu"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              community.clawmatic.eu
            </a>
            , we publish skill packs for the OpenClaw ecosystem, and we deploy OpenClaw agents as a done-for-you service for small and mid-sized businesses anywhere in the world.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-16">
            We'd rather be the best in one thing than average at many.
          </p>

          <div className="border-t border-border/40 pt-10">
            <p className="text-sm text-muted-foreground/70 leading-relaxed">
              Remote-first. Working with clients worldwide.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-10">
            <Button variant="hero" asChild>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Get your free Deployment Roadmap
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <Button variant="hero-outline" asChild>
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                Join the Discord
              </a>
            </Button>
          </div>

          <p className="text-xs text-muted-foreground/40 mt-8">
            Not officially affiliated with the OpenClaw project.
          </p>
        </div>
      </section>
    </div>
  );
}
