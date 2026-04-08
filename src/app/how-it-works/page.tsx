import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'How it Works',
  description:
    'One specialist. One system. Fully yours. From a free OpenClaw Deployment Roadmap call to a live agent on your infrastructure in 10–21 days.',
};

const CALENDLY_URL = 'https://calendly.com/clawmatic/30min';

const steps = [
  {
    n: '01',
    title: 'We scope',
    duration: 'Free call',
    body: 'A free OpenClaw Deployment Roadmap call. We map your workflows, identify what to automate first, and give you a fixed-price proposal with a clear timeline. No sales pitch.',
  },
  {
    n: '02',
    title: 'We deploy',
    duration: '10–21 days',
    body: 'We set up OpenClaw on your infrastructure, build the custom skills your workflows need, and integrate with your existing tools. Live in 10–21 days depending on scope.',
  },
  {
    n: '03',
    title: 'You own it',
    duration: 'Forever',
    body: 'The deployment is yours. The data is yours. The skills are yours. If you want to manage it yourself, you can. If you want us to maintain and extend it, our Care plan has you covered.',
  },
];

const faqs = [
  {
    q: 'Do I need any technical knowledge?',
    a: "None at all. You explain your business problem, we handle everything else. You don't need to install, manage, or understand any of the technology involved.",
  },
  {
    q: 'What infrastructure do I need?',
    a: "Any machine that can run Docker — a server, a VPS, or even a capable workstation. We'll advise on the right setup during the Deployment Roadmap call. If you don't have anything yet, we'll help you choose the right option.",
  },
  {
    q: 'How long does it take to go live?',
    a: 'The Inbox Agent goes live in 10 days. The Revenue Agent in 14 days. The Operations Agent in 21 days. Custom builds take 2–4 weeks. You get a clear timeline in the fixed-price proposal.',
  },
  {
    q: 'What do you need from us?',
    a: "Access to the systems we're connecting (email, CRM, databases, etc.) and a point of contact who can answer operational questions during the build.",
  },
  {
    q: 'What happens if something breaks?',
    a: 'Every deployment includes 60 days of support. After that, our Care plan covers ongoing maintenance, model updates, and skill updates when APIs change.',
  },
  {
    q: 'Can I extend the agent after launch?',
    a: 'Yes. The Custom Stack product is specifically for adding new skills to an existing deployment. Care and Partner clients can request new skills within scope on an ongoing basis.',
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
            One specialist. One system.
            <br />
            Fully yours.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            From a free Deployment Roadmap call to a live OpenClaw agent on your infrastructure — in 10–21 days, no technical burden on your side.
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
            Book your free OpenClaw Deployment Roadmap call and we'll tell you exactly what's possible for your business.
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
