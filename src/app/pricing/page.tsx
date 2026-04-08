import type { Metadata } from 'next';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent OpenClaw deployment pricing. Build (one-time deployment), Care (ongoing maintenance), and Partner (full operational backbone). No hidden fees, no vendor lock-in.',
};

const CALENDLY_URL = 'https://calendly.com/clawmatic/30min';

const tiers = [
  {
    name: 'Build',
    price: '€1,500–€8,000',
    period: 'one-time',
    description: 'One of the four named products, or a custom build. Fixed price, fixed timeline.',
    highlight: false,
    includes: [
      'OpenClaw deployment on your infrastructure',
      'Custom skills built for your workflows',
      'Full testing and refinement',
      'Plain-English documentation',
      'Team walkthrough session',
      '60 days of included support',
    ],
  },
  {
    name: 'Care',
    price: '€900',
    period: 'per month',
    description: 'Ongoing maintenance of your deployed agent. Minimum 3-month commitment.',
    highlight: true,
    badge: 'Most popular',
    includes: [
      'Model updates as OpenClaw evolves',
      'Skill updates when APIs change',
      'Monthly optimization call',
      'New skill requests within scope',
      'Priority support',
    ],
  },
  {
    name: 'Partner',
    price: '€2,500',
    period: 'per month',
    description: 'For businesses treating OpenClaw as their primary operational backbone.',
    highlight: false,
    includes: [
      'Everything in Care',
      'Unlimited new skill requests',
      'Quarterly strategy reviews',
      'Dedicated Slack channel',
      'Priority access to new products',
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 relative border-b border-border/40">
        <div className="absolute inset-0 hero-grid opacity-15" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 50% 60%, rgba(78,204,163,0.07) 0%, transparent 60%)',
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-5">
            Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-5">
            Transparent pricing.
            <br />
            No surprises.
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
            Every project is quoted individually after the free Deployment Roadmap call. Below are standard rates.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  tier.highlight
                    ? 'border-primary/40 bg-primary/5'
                    : 'border-border/50 bg-card'
                }`}
              >
                {tier.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold text-primary-foreground bg-primary px-3 py-1 rounded-full whitespace-nowrap">
                    {tier.badge}
                  </span>
                )}

                <div className="mb-6">
                  <h2 className="text-base font-bold mb-2">{tier.name}</h2>
                  <div className="flex items-baseline gap-1.5 mb-2">
                    <span className="text-2xl font-bold">{tier.price}</span>
                    <span className="text-sm text-muted-foreground">/ {tier.period}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{tier.description}</p>
                </div>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.highlight ? 'hero' : 'hero-outline'}
                  asChild
                  className="w-full"
                >
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    Book a free Roadmap call
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* Invoicing note */}
          <div className="max-w-2xl mx-auto mt-10 text-center">
            <p className="text-xs text-muted-foreground/60 leading-relaxed">
              Invoicing in EUR. VAT-compliant for EU clients. Global clients invoiced in EUR or USD on request.
            </p>
          </div>
        </div>
      </section>

      {/* Founding client callout */}
      <section className="py-16 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6">
          <div
            className="max-w-2xl mx-auto rounded-2xl border border-primary/20 px-8 py-10 text-center"
            style={{
              background:
                'linear-gradient(135deg, rgba(78,204,163,0.08) 0%, rgba(94,106,210,0.05) 100%)',
            }}
          >
            <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-4">
              Founding client offer — 40% off, first 10 clients only
            </span>
            <h2 className="text-2xl font-bold mb-4">Founding client offer — 40% off, first 10 clients only</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              We're onboarding our first 10 clients at 40% off these rates in exchange for a case study. That means The Inbox Agent at €900 instead of €1,500, Care plans at €540/month instead of €900.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              This is the lowest pricing ClawMatic will ever offer. After the first 10 clients, prices return to standard.
            </p>
            <Button variant="hero" size="lg" asChild className="text-base px-8 py-5">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Claim your founding client spot
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
