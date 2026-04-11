'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { ArrowRight, CalendarCheck, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/clawmatic/30min';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    try {
      const res = await fetch('https://formspree.io/f/placeholder', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setFormStatus(res.ok ? 'sent' : 'error');
    } catch {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-14 relative border-b border-border/40">
        <div className="absolute inset-0 hero-grid opacity-15" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-5">
            Contact
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Let&apos;s talk about your business.
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            Pick the option that works for you.
          </p>
          <p className="text-sm text-muted-foreground/75 max-w-xl leading-relaxed mt-4">
            Built for legal, healthcare, finance, and professional services teams in the EU.
          </p>
        </div>
      </section>

      {/* Two options */}
      <section className="py-14">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-6 max-w-3xl">
            {/* Book a call — primary */}
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-8 flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                <CalendarCheck className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold mb-3">Book a free audit call</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
                30 minutes. We map out what can be automated in your business, give you an honest assessment, and tell you exactly what it would take. No obligation. Fixed price. No deposit until scope is signed.
              </p>
              <Button variant="hero" asChild className="w-full">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Book on Calendly
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Send a message */}
            <div className="rounded-2xl border border-border/50 bg-card p-8 flex flex-col">
              <div className="w-10 h-10 rounded-xl bg-card border border-border/50 flex items-center justify-center mb-6">
                <MessageSquare className="h-5 w-5 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-bold mb-2">Send a message</h2>
              <p className="text-sm text-muted-foreground mb-5">
                Prefer to start with a message? We&apos;ll respond within 24 hours.
              </p>

              {formStatus === 'sent' ? (
                <p className="text-primary text-sm flex-1 flex items-center">
                  Thanks — we&apos;ll be in touch within 24 hours.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 flex-1 flex flex-col">
                  <input
                    type="text"
                    placeholder="Your name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-border/50 bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-border/50 bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                  <input
                    type="text"
                    placeholder="Company (optional)"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full rounded-lg border border-border/50 bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
                  />
                  <textarea
                    placeholder="Your message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-border/50 bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none flex-1"
                  />
                  <Button
                    type="submit"
                    variant="hero-outline"
                    disabled={formStatus === 'sending'}
                    className="w-full"
                  >
                    {formStatus === 'sending' ? 'Sending...' : 'Send message'}
                  </Button>
                  {formStatus === 'error' && (
                    <p className="text-xs text-destructive">
                      Something went wrong. Email us at{' '}
                      <a href="mailto:info@clawmatic.eu" className="underline">
                        info@clawmatic.eu
                      </a>
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
