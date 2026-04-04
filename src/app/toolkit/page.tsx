import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Download, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'OpenClaw Skill Packs — ClawMatic',
  description:
    'Ready-made skills you can drop straight into OpenClaw. Tested, documented, and ready to use. Instant download.',
};

const packs = [
  {
    id: 'productivity',
    name: 'The Productivity Pack',
    price: '€19',
    description: 'Skills for email, scheduling, and task management. The essential toolkit for getting your day under control with AI.',
    tags: ['Email', 'Calendar', 'Tasks'],
    gumroadUrl: '/contact', // TODO: replace with Gumroad link when live
    comingSoon: false,
  },
  {
    id: 'research',
    name: 'The Research Pack',
    price: '€29',
    description: 'Skills for web research, summarisation, and analysis. Turn your AI into a research assistant that actually delivers.',
    tags: ['Research', 'Analysis', 'Web'],
    gumroadUrl: '#',
    comingSoon: true,
  },
  {
    id: 'support-bot',
    name: 'The Support Bot Pack',
    price: '€24',
    description: 'Customer support automation skills. Build an AI support agent that handles FAQs, triage, and escalation.',
    tags: ['Support', 'Automation', 'Q&A'],
    gumroadUrl: '#',
    comingSoon: true,
  },
  {
    id: 'writing',
    name: 'The Writing Pack',
    price: '€19',
    description: 'Content creation and copywriting skills. Draft emails, blog posts, social copy, and more — at speed.',
    tags: ['Copywriting', 'Content', 'Email'],
    gumroadUrl: '#',
    comingSoon: true,
  },
];

export default function ToolkitPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-14 relative border-b border-border/50">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-4">
            Skill packs
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            OpenClaw Skill Packs
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready-made skills you can drop straight into OpenClaw. Tested, documented, and ready to use.
          </p>
          <div className="flex items-center gap-3 mt-5">
            <span className="inline-flex items-center gap-1.5 text-xs text-primary border border-primary/20 bg-primary/5 rounded-full px-3 py-1.5">
              <Download className="h-3.5 w-3.5" />
              Instant download
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground border border-border/50 rounded-full px-3 py-1.5">
              <Package className="h-3.5 w-3.5" />
              Drop into OpenClaw
            </span>
          </div>
        </div>
      </section>

      {/* Packs grid */}
      <section className="py-14">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {packs.map((pack) => (
              <div
                key={pack.id}
                className="rounded-xl border border-border/50 bg-card p-6 flex flex-col card-hover relative"
              >
                {pack.comingSoon && (
                  <span className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border/50 font-medium">
                    Coming soon
                  </span>
                )}

                <div className="flex items-start justify-between gap-2 mb-4">
                  <h2 className="text-base font-bold leading-snug pr-2">{pack.name}</h2>
                  <span className="text-lg font-bold text-primary flex-shrink-0">{pack.price}</span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {pack.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {pack.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded border border-border/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant={pack.comingSoon ? 'hero-outline' : 'hero'}
                  asChild
                  className="w-full"
                  disabled={pack.comingSoon}
                >
                  {pack.comingSoon ? (
                    <span className="opacity-60 cursor-not-allowed">Coming soon</span>
                  ) : (
                    <Link href={pack.gumroadUrl}>
                      Get this pack
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
