'use client';

import { useState } from 'react';
import { ArrowRight, CalendarCheck, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/clawmatic/30min';

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

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
      <section className="pt-32 pb-10 relative border-b border-border/50">
        <div className="absolute inset-0 hero-grid opacity-20" />
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl relative z-10">
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-5">
            Contact
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Let&apos;s talk
          </h1>
          <p className="text-lg text-muted-foreground">
            Two ways to get in touch — pick the one that suits you.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Book a call */}
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-8 flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <CalendarCheck className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold mb-2">Book a free AI audit</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                30-minute call, no obligation. We&apos;ll map out exactly what can be automated in your business and what it would take.
              </p>
              <Button variant="hero" asChild className="w-full">
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Book on Calendly
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Send a message */}
            <div className="rounded-xl border border-border/50 bg-card p-8 flex flex-col">
              <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center border border-border/50 mb-5">
                <MessageSquare className="h-5 w-5 text-muted-foreground" />
              </div>
              <h2 className="text-xl font-bold mb-5">Send a message</h2>

              {formStatus === 'sent' ? (
                <p className="text-primary text-sm">Thanks! We&apos;ll get back to you within 24 hours.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
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
                      Something went wrong. Email us directly at{' '}
                      <a href="mailto:info@clawmatic.eu" className="underline">info@clawmatic.eu</a>
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
