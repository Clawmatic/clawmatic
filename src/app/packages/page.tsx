import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Curated AI Stack Packages — ClawMatic',
  description:
    'Stop guessing which AI model to use. We\'ve done the research — these packages tell you exactly which model to use on OpenClaw and how to get the best results.',
};

const packages = [
  {
    id: 'copywriter',
    name: 'The Copywriter Stack',
    price: '€29',
    bestFor: 'Marketers, content creators, freelance writers',
    description:
      'The perfect model setup for anyone who writes for a living. Get the ideal model for tone, creativity, and speed — plus templates that actually work.',
    includes: [
      'Recommended model on OpenRouter',
      'Prompt templates for copywriting',
      'OpenClaw skill suggestions',
      'Setup guide PDF',
    ],
    gumroadUrl: '/contact', // TODO: replace with Gumroad link when live
    highlight: false,
  },
  {
    id: 'support-bot',
    name: 'The Support Bot Stack',
    price: '€39',
    bestFor: 'Small businesses, e-commerce, service businesses',
    description:
      'Build a support bot that actually helps customers. Includes the right model for Q&A, example conversation flows, and a full OpenClaw setup guide.',
    includes: [
      'Recommended model for Q&A + support',
      'Example conversation flows',
      'OpenClaw setup guide',
      '30-min onboarding call',
    ],
    gumroadUrl: '/contact', // TODO: replace with Gumroad link when live
    highlight: true,
  },
  {
    id: 'research',
    name: 'The Research Stack',
    price: '€34',
    bestFor: 'Consultants, analysts, researchers, students',
    description:
      'Deep research, faster. The right model for multi-step reasoning and analysis, paired with workflows that turn your AI into a proper research assistant.',
    includes: [
      'Recommended model for deep reasoning',
      'Research workflow guide',
      'Prompt templates for analysis',
      'OpenClaw skill suggestions',
    ],
    gumroadUrl: '/contact', // TODO: replace with Gumroad link when live
    highlight: false,
  },
];

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-14 relative border-b border-border/50">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-4">
            Curated packages
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
            Stop guessing. Use the right model.
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            OpenRouter gives you access to dozens of AI models. The problem? Choosing the right one is overwhelming. We&apos;ve done the research — these packages tell you exactly which model to use, how to set it up in OpenClaw, and how to get the best results.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-xl border p-7 flex flex-col card-hover ${
                  pkg.highlight
                    ? 'border-primary/30 bg-primary/5 relative'
                    : 'border-border/50 bg-card'
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                    Most popular
                  </span>
                )}

                <div className="mb-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h2 className="text-lg font-bold">{pkg.name}</h2>
                    <span className={`text-xl font-bold flex-shrink-0 ${pkg.highlight ? 'text-primary' : 'text-foreground'}`}>
                      {pkg.price}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    <strong className="text-foreground/70">Best for:</strong> {pkg.bestFor}
                  </p>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <div className="mb-7 flex-1">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-3">
                    What&apos;s included
                  </p>
                  <ul className="space-y-2">
                    {pkg.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  variant={pkg.highlight ? 'hero' : 'hero-outline'}
                  asChild
                  className="w-full"
                >
                  <Link href={pkg.gumroadUrl}>
                    Get this stack
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Quiz CTA */}
          <div className="mt-12 max-w-2xl mx-auto rounded-2xl border border-primary/20 bg-primary/5 px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-1">Not sure which one fits?</p>
              <p className="font-bold text-lg leading-snug">Take the 2-minute quiz</p>
              <p className="text-sm text-muted-foreground mt-1">
                Answer 5 quick questions and get a personalised recommendation.
              </p>
            </div>
            <Button variant="hero" asChild className="flex-shrink-0">
              <Link href="/quiz">
                Find my stack
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
