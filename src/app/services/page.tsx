import type { Metadata } from 'next';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Four named OpenClaw deployment products for small and mid-sized businesses. The Inbox Agent, Revenue Agent, Operations Agent, and Custom Stack — built and deployed on your infrastructure.',
};

const CALENDLY_URL = 'https://calendly.com/clawmatic/30min';

const products = [
  {
    id: '01',
    title: 'The Inbox Agent',
    price: '€1,500',
    period: 'one-time',
    timeline: 'Live in 10 days',
    intro:
      'A fully configured OpenClaw agent that reads, triages, drafts, and schedules your email — running locally on your hardware. Connects to Gmail, Outlook, or IMAP.',
    includes: [
      'Three custom skills built for your workflow',
      'Gmail, Outlook, or IMAP integration',
      'Full testing and refinement',
      'Plain-English documentation',
      '60 days of included support',
    ],
  },
  {
    id: '02',
    title: 'The Revenue Agent',
    price: '€3,500',
    period: 'one-time',
    timeline: 'Live in 14 days',
    highlight: true,
    intro:
      'An OpenClaw agent that follows up with every inbound lead within minutes, updates your CRM automatically, and escalates qualified leads to you on WhatsApp or Slack.',
    includes: [
      'Works with HubSpot, Pipedrive, Airtable, or your own database',
      'Custom CRM integration',
      'Lead scoring logic',
      'Escalation rules to WhatsApp or Slack',
      '60 days of included support',
    ],
  },
  {
    id: '03',
    title: 'The Operations Agent',
    price: '€5,000',
    period: 'one-time',
    timeline: 'Live in 21 days',
    intro:
      'A multi-skill OpenClaw agent that handles reporting, scheduling, document processing, and internal data flows across your business. Replaces 10+ hours of weekly busywork.',
    includes: [
      'Up to 5 custom skills',
      'Full integration with your existing stack',
      'Reporting, scheduling, and document processing',
      'Team walkthrough session',
      '60 days of included support',
    ],
  },
  {
    id: '04',
    title: 'The Custom Stack',
    price: '€2,000–€8,000+',
    period: 'one-time',
    timeline: 'Shipped in 2–4 weeks',
    intro:
      "Your business has a workflow no one else has. We'll build custom OpenClaw skills for exactly that. Starts with a free scoping call to lock in a fixed price.",
    includes: [
      'Free scoping call to define scope and fixed price',
      'Custom OpenClaw skill development',
      'Integration with your existing tools',
      'Full testing and documentation',
      '60 days of included support',
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 relative border-b border-border/40">
        <div className="absolute inset-0 hero-grid opacity-15" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 60%, rgba(78,204,163,0.07) 0%, transparent 60%)',
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-5">
            What we deploy
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-5 max-w-3xl">
            Four OpenClaw agents.
            <br />
            All running on your infrastructure.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Every deployment is purpose-built for your operations. Your data never leaves your servers.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-0 max-w-3xl">
            {products.map((p) => (
              <div
                key={p.id}
                className="grid sm:grid-cols-[72px_1fr] gap-6 py-12 border-b border-border/40 first:pt-0"
              >
                <div className="text-4xl font-bold text-primary/20 leading-none pt-1 select-none">
                  {p.id}
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h2 className="text-xl font-bold">{p.title}</h2>
                    {p.highlight && (
                      <span className="text-xs font-semibold text-primary-foreground bg-primary px-2.5 py-0.5 rounded-full">
                        Most popular
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-lg font-bold">{p.price}</span>
                    <span className="text-sm text-muted-foreground">/ {p.period}</span>
                    <span className="text-xs text-muted-foreground border border-border/60 rounded-full px-2.5 py-0.5">
                      {p.timeline}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-5 text-sm">{p.intro}</p>
                  <ul className="space-y-2">
                    {p.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulated industry callout */}
      <section className="py-8 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div
            className="rounded-xl border border-primary/20 px-8 py-7"
            style={{
              background: 'linear-gradient(135deg, rgba(78,204,163,0.06) 0%, rgba(94,106,210,0.04) 100%)',
            }}
          >
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Regulated industry?</span> We have starter bundles for law firms, accounting firms, and medical practices — pre-built with the skills your sector actually needs, shipped with a compliance summary for your DPO or legal team. Ask about our vertical packages.
            </p>
            <div className="mt-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
              >
                Ask about vertical packages <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Not sure which agent to start with?
          </h2>
          <p className="text-muted-foreground mb-8">
            That's what the free OpenClaw Deployment Roadmap call is for. We'll map your workflows and tell you exactly where to start.
          </p>
          <Button variant="hero" size="lg" asChild className="text-base px-8 py-6">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Get your free Deployment Roadmap
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
