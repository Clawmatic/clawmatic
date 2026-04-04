'use client';

import Link from 'next/link';
import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

const guides = [
  {
    slug: 'how-to-install-openclaw',
    title: 'How to install OpenClaw AI — complete setup guide',
    description: 'Install OpenClaw AI in under 15 minutes on Windows, macOS, or Linux. Commands, troubleshooting, and a full onboarding walkthrough.',
    tags: ['Getting started', 'Setup'],
    readTime: '10 min',
  },
  {
    slug: 'which-ai-model-openclaw-2026',
    title: 'Which AI model should you use on OpenClaw? (2026 guide)',
    description: 'OpenClaw supports dozens of models. This guide tells you exactly which one to use for writing, research, coding, and everyday tasks — and how to switch instantly.',
    tags: ['Models', 'Getting started'],
    readTime: '8 min',
  },
  {
    slug: 'top-5-openclaw-skills-productivity',
    title: 'Top 5 OpenClaw skills for productivity',
    description: 'Most OpenClaw users only use 20% of what it can do. These are the 5 skills power users install in week one — each one saves you real time every day.',
    tags: ['Skills', 'Productivity'],
    readTime: '6 min',
  },
  {
    slug: 'connect-openclaw-to-openrouter',
    title: 'How to connect OpenClaw to OpenRouter',
    description: 'One key. Every major AI model. This guide shows you how to connect OpenRouter to OpenClaw so you can switch models instantly and set up automatic failover.',
    tags: ['Setup', 'Models'],
    readTime: '7 min',
  },
  {
    slug: 'openclaw-for-beginners-first-automation',
    title: 'OpenClaw for beginners — your first automation',
    description: "Build a real automation from scratch — no code required. By the end it runs on its own every morning while you sleep.",
    tags: ['Getting started', 'Automation'],
    readTime: '12 min',
  },
];

const allTags = ['All', 'Getting started', 'Skills', 'Automation', 'Models', 'Setup'];

export default function GuidesPage() {
  const [activeTag, setActiveTag] = React.useState('All');

  const filtered = activeTag === 'All'
    ? guides
    : guides.filter((g) => g.tags.includes(activeTag));

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-14 relative border-b border-border/50">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-4">
            Free guides
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            OpenClaw AI Guides
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Setup tutorials, skill walkthroughs, and tips for getting the most out of OpenClaw AI.
          </p>
          <div className="flex gap-6 mt-8 text-sm">
            <span><strong className="text-primary">{guides.length}</strong> <span className="text-muted-foreground">guides</span></span>
            <span><strong className="text-primary">Free</strong> <span className="text-muted-foreground">always</span></span>
            <span><strong className="text-primary">More</strong> <span className="text-muted-foreground">coming soon</span></span>
          </div>
        </div>
      </section>

      {/* Tag filter */}
      <div className="border-b border-border/50 bg-background/80 sticky top-16 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex gap-0 overflow-x-auto">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-4 py-3.5 text-xs font-medium whitespace-nowrap border-b-2 transition-colors ${
                  tag === activeTag
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Guides grid */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
            {filtered.map((guide) => (
              <article
                key={guide.slug}
                className="group rounded-xl border border-border/50 bg-card p-6 flex flex-col card-hover"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {guide.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h2 className="font-semibold text-base leading-snug mb-3 group-hover:text-primary transition-colors">
                  {guide.title}
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {guide.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    {guide.readTime} read
                  </span>
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                  >
                    Read guide
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-16">No guides in this category yet.</p>
          )}

          <div className="text-center mt-12 py-8 border border-dashed border-border/50 rounded-xl max-w-lg mx-auto">
            <p className="text-sm text-muted-foreground mb-2">More guides coming soon. Got a topic?</p>
            <a href="mailto:info@clawmatic.eu" className="text-sm text-primary hover:underline">
              Suggest a guide →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
