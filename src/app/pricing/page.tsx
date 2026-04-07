import type { Metadata } from 'next';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent AI automation pricing for small and mid-sized businesses. Fixed quotes, no hidden fees, and a free audit call to scope your project.',
};

const CALENDLY_URL = 'https://calendly.com/clawmatic/30min';

const tiers = [
  {
    name: 'Starter automation',
    price: '€500 – €1,500',
    period: 'one-time',
    description: 'Single-process automation — one workflow, one problem solved.',
    highlight: false,
    includes: [
      'Free audit call',
      'One custom automation built for your business',
      'Testing and refinement',
      '30-day support after delivery',
      'Plain-English documentation',
    ],
    examples: 'Email triage setup, lead follow-up sequence, automated weekly report',
  },
  {
    name: 'Business automation package',
    price: '€2,000 – €5,000',
    period: 'one-time',
    description: 'Multiple connected automations that work together across your business.',
    highlight: true,
    badge: 'Most popular',
    includes: [
      'Free audit call',
      'Up to 3 connected automations',
      'Full testing and refinement',
      '60-day support after delivery',
      'Team walkthrough session',
      'Plain-English documentation',
    ],
    examples: 'Email + CRM + reporting combined, full customer support automation system',
  },
  {
    name: 'Monthly retainer',
    price: '€300 – €800',
    period: 'per month',
    description: 'Ongoing management, maintenance, updates, and continued automation of new processes.',
    highlight: false,
    includes: [
      'Everything in the package tier',
      'Monthly check-in call',
      'Ongoing system maintenance',
      'New automation requests (within scope)',
      'Priority support',
    ],
    examples: 'Best combined with the Business automation package',
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
            Every project is quoted individually after the free audit. Below are typical ranges to help you plan.
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

                <ul className="space-y-2.5 mb-6 flex-1">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-xs text-muted-foreground/60 mb-5 leading-relaxed">
                  <span className="font-medium text-muted-foreground/80">Examples: </span>
                  {tier.examples}
                </p>

                <Button
                  variant={tier.highlight ? 'hero' : 'hero-outline'}
                  asChild
                  className="w-full"
                >
                  <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                    Book a free audit
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className="max-w-2xl mx-auto mt-10 text-center">
            <p className="text-xs text-muted-foreground/60 leading-relaxed">
              These are typical ranges — your actual quote may be higher or lower depending on complexity. The audit call is always free and always the first step.
            </p>
            <p className="text-xs text-muted-foreground/50 mt-2">
              Invoicing in EUR, VAT compliant.
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
              Founding client offer
            </span>
            <h2 className="text-2xl font-bold mb-4">Founding client offer</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              We are currently onboarding our first clients at significantly reduced rates in exchange for a case study and testimonial. If you book an audit now, you lock in founding client pricing for any work that follows.
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
