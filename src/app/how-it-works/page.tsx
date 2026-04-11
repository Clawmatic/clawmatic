import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'How it Works',
  description:
    'From a free 30-minute audit to a live AI automation system in 2–3 weeks. A simple, transparent process with your IT team in control and ClawMatic handling the build.',
};

const CALENDLY_URL = 'https://calendly.com/clawmatic/30min';

const steps = [
  {
    n: '01',
    title: 'Free audit call',
    duration: '30 minutes',
    body: 'We map out your business operations, identify the highest-impact automation opportunities, and give you an honest assessment of what is possible, how long it takes, and what it costs. No obligation.',
  },
  {
    n: '02',
    title: 'Proposal & agreement',
    duration: '1–2 days',
    body: 'We send a clear, plain-English proposal. What we will build, what it will do, how much it costs, and what we need from you. No hidden fees, no technical jargon.',
  },
  {
    n: '03',
    title: 'We build',
    duration: '2–3 weeks',
    body: 'We handle everything. You provide access to the systems we need to connect. We build, test, and refine the automation until it works exactly as agreed.',
  },
  {
    n: '04',
    title: 'Handover & support',
    duration: 'Ongoing',
    body: 'We hand over a working system and show your team how to use it. We remain available for questions and adjustments. If something breaks, we fix it.',
  },
];

const faqs = [
  {
    q: 'Do I need any technical knowledge?',
    a: 'Not personally, no. You explain the business problem and we handle the build. If you have an internal IT contact, we can work with them directly so your team stays in control.',
  },
  {
    q: 'How long does it take?',
    a: 'Most automations are live within 2–3 weeks of the audit call. More complex systems can take longer. We will give you an honest timeline upfront.',
  },
  {
    q: 'What do you need from us?',
    a: 'Access to the systems we are connecting (email, CRM, spreadsheets, etc.) and a point of contact who can answer operational questions during the build.',
  },
  {
    q: 'What happens if something breaks?',
    a: 'We fix it. Every system we build comes with a support period. Long-term maintenance can be arranged as a monthly retainer.',
  },
  {
    q: 'What does it cost?',
    a: 'Every project is scoped individually. The audit call is free — after that we give you a fixed quote with no surprises. See our pricing page for typical ranges.',
  },
];

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 relative border-b border-border/40">
        <div className="absolute inset-0 hero-grid opacity-15" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 70% 40%, rgba(78,204,163,0.07) 0%, transparent 60%)',
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-5">
            The process
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-5 max-w-3xl">
            From audit to automation
            <br />
            in 2–3 weeks.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            A simple, transparent process designed to get results fast — with your IT team in control and ClawMatic handling the build.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className="grid sm:grid-cols-[72px_1fr] gap-6 py-12 border-b border-border/40 first:pt-0"
              >
                <div className="flex flex-col items-start gap-1">
                  <span className="text-4xl font-bold text-primary/20 leading-none select-none">
                    {step.n}
                  </span>
                  {i < steps.length - 1 && (
                    <div className="w-px h-8 bg-border/50 ml-3 mt-2 hidden sm:block" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-xl font-bold">{step.title}</h2>
                    <span className="text-xs text-muted-foreground border border-border/60 rounded-full px-2.5 py-0.5">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10">
            Common questions
          </h2>
          <div className="space-y-8">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-border/40 pb-8 last:border-0">
                <h3 className="text-base font-semibold mb-3">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 border-t border-border/40">
        <div className="container mx-auto px-4 sm:px-6 max-w-2xl text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            Ready to start?
          </h2>
          <p className="text-muted-foreground mb-8">
            Book your free 30-minute audit and we will tell you exactly what is possible in your business.
          </p>
          <Button variant="hero" size="lg" asChild className="text-base px-8 py-6">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Book a free audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
