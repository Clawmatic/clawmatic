"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Target, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wide">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-4 mb-6 max-w-3xl">
              Let&apos;s talk about <span className="gradient-text">your business</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Book a free audit call, send us an email, or use the calendar below. No obligation — just a conversation about what we can automate for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left - Get in touch */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wide">
                Get in touch
              </span>

              <a
                href="mailto:info@clawmatic.eu"
                className="glass-card rounded-2xl p-6 block hover:border-primary/30 transition-colors group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs font-semibold tracking-wide uppercase text-primary">Email us</span>
                </div>
                <p className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">info@clawmatic.eu</p>
                <p className="text-sm text-muted-foreground">Questions, project enquiries, or just want to chat about automation.</p>
              </a>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/15 flex items-center justify-center">
                    <Target className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="font-bold text-foreground">Free AI Audit</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  Not sure where to start? We&apos;ll analyze your business processes and show you exactly where AI can save you time and money — completely free, no obligation.
                </p>
                <Button variant="hero" size="sm" asChild>
                  <a href="https://calendly.com/clawmatic/30min" target="_blank" rel="noopener noreferrer">
                    Book your free audit →
                  </a>
                </Button>
              </div>

              <div className="glass-card rounded-xl px-5 py-3 flex items-center gap-3">
                <Clock className="h-4 w-4 text-muted-foreground shrink-0" />
                <p className="text-sm text-muted-foreground">We typically respond within 24 hours on weekdays.</p>
              </div>
            </motion.div>

            {/* Right - Book a call */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wide">
                Book a call
              </span>

              <div className="glass-card rounded-2xl p-8 mt-6">
                <h3 className="text-xl font-bold text-foreground mb-6">30-minute free audit call</h3>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    Free of charge
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    We analyze your workflow
                  </li>
                  <li className="flex items-center gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                    No obligation
                  </li>
                </ul>

                <Button variant="hero" size="lg" asChild className="w-full text-base py-6">
                  <a href="https://calendly.com/clawmatic/30min" target="_blank" rel="noopener noreferrer">
                    Schedule Your Call
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  You&apos;ll be redirected to our Calendly to pick a time that works for you.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
