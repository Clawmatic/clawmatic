import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'About ClawMatic',
  description:
    'ClawMatic is a solo-founded AI automation practice based in Belgium. We build custom AI systems for small and mid-sized businesses — fully managed, no technical knowledge required.',
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
            Built in Belgium.
            <br />
            Built for businesses.
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed mb-12">
            ClawMatic is a solo-founded AI automation practice based in Belgium. We work with small and mid-sized businesses that want to stop doing manually what AI can do automatically.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-16">
            Every automation is built hands-on by a single person who is personally invested in your results. You are not dealing with an account manager — you are dealing with the person building your system.
          </p>

          <div className="space-y-12 border-t border-border/40 pt-12">
            <div>
              <h2 className="text-xl font-bold mb-4">The approach</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not use off-the-shelf tools and call it automation. We build custom AI systems tailored to your specific business operations. That means more work on our end — and better results on yours.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are also transparent about what we use and how we work. If you want to understand the technology, we will explain it. If you just want results, that is fine too.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-4">Building in public</h2>
              <p className="text-muted-foreground leading-relaxed">
                ClawMatic is early. We are honest about that. We are currently working with our first founding clients and building a track record of real results. If you work with us now, you get hands-on attention, founding client pricing, and the satisfaction of having been here first.
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-12">
            <Button variant="hero" asChild>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Book a free audit
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
            🇧🇪 Made in Belgium · Not affiliated with OpenClaw Inc.
          </p>
        </div>
      </section>
    </div>
  );
}
