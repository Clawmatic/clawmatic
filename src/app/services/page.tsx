"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, RefreshCw, MessageSquare, Plug, CheckCircle2, Target, Zap, Wrench } from "lucide-react";

const services = [
  {
    icon: RefreshCw,
    badge: "Most popular",
    title: "AI Workflow Automation",
    desc: "We map your most time-consuming manual processes and replace them with AI-powered workflows. The result: tasks that took hours now happen automatically.",
    tools: ["Gmail", "Slack", "Google Sheets", "Notion", "Airtable"],
    features: ["Email triage & auto-responses", "Lead follow-up sequences", "Automated reporting", "Data entry & processing"],
    accent: "primary",
  },
  {
    icon: MessageSquare,
    badge: null,
    title: "AI Chat & Support Automation",
    desc: "Deploy AI assistants that handle customer questions, qualify leads, and respond instantly — 24/7, without adding headcount.",
    tools: ["WhatsApp", "Gmail", "HubSpot", "Slack"],
    features: ["Customer support bot", "Lead qualification", "Appointment scheduling", "FAQ automation"],
    accent: "accent",
  },
  {
    icon: Plug,
    badge: null,
    title: "System Integrations",
    desc: "Your tools should talk to each other. We connect your apps so data flows automatically — no copy-pasting between systems, no manual syncing.",
    tools: ["HubSpot", "Notion", "Google Sheets", "Airtable", "Slack"],
    features: ["CRM auto-updates", "Cross-platform data sync", "Automated notifications", "Multi-tool pipelines"],
    accent: "primary",
  },
];

const steps = [
  { num: "01", title: "Free Audit Call", desc: "30 minutes. We learn about your business, understand your biggest time sinks, and identify the highest-impact automations." },
  { num: "02", title: "Scope & Quote", desc: "We map out exactly what we will build and give you a fixed-price quote. No surprises, no hourly billing." },
  { num: "03", title: "We Build It", desc: "Our team builds and tests the automation system. Most projects are delivered within 2-4 weeks." },
  { num: "04", title: "You Save Time", desc: "We hand over a working system and make sure everything runs smoothly. You start saving hours immediately." },
];

const whyUs = [
  { icon: Target, title: "Fixed-price quotes", desc: "You know the cost upfront. No hourly surprises or scope creep invoices." },
  { icon: Zap, title: "Fast delivery", desc: "Most systems are live within 2-4 weeks. We move quickly without cutting corners." },
  { icon: Wrench, title: "Built for you", desc: "No off-the-shelf tools. Every system is designed around your specific workflow and stack." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wide">
              Our services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-4 mb-6 max-w-3xl">
              Custom AI systems built around <span className="gradient-text">your business</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              We don&apos;t sell software. We build automation systems tailored to exactly how your business works — so the repetitive stuff disappears and you can focus on growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="https://calendly.com/clawmatic/30min" target="_blank" rel="noopener noreferrer">
                  Book a Free Audit <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#process">See how it works</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wide">
              What we build
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">Three ways we automate your business</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                className="glow-border glass-card rounded-2xl p-7 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-11 h-11 rounded-lg ${s.accent === "accent" ? "bg-accent/15" : "bg-primary/10"} flex items-center justify-center`}>
                    <s.icon className={`h-5 w-5 ${s.accent === "accent" ? "text-accent" : "text-primary"}`} />
                  </div>
                  {s.badge && (
                    <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full">{s.badge}</span>
                  )}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{s.desc}</p>

                <div className="mb-5">
                  <p className="text-xs text-muted-foreground mb-2">Works with:</p>
                  <div className="flex flex-wrap gap-2">
                    {s.tools.map((t) => (
                      <span key={t} className="text-xs bg-secondary px-2.5 py-1 rounded-md text-secondary-foreground">{t}</span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-2 mt-auto">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wide">
              How it works
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">From first call to live system — in weeks, not months</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="text-4xl font-bold gradient-text mb-4">{s.num}</div>
                <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wide">
              Why us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">Built custom. Delivered fast. Priced fairly.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whyUs.map((w, i) => (
              <motion.div
                key={i}
                className="glass-card rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <w.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            className="relative rounded-3xl overflow-hidden max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-accent/10" />
            <div className="absolute inset-0 hero-grid opacity-20" />
            <div className="relative z-10 p-10 sm:p-16 text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wide mb-4">
                Get started
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to automate your business?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
                Start with a free 30-minute audit call. We&apos;ll show you exactly what we can automate and what it would cost — no obligation.
              </p>
              <Button variant="hero" size="lg" asChild className="text-base px-10 py-6">
                <a href="https://calendly.com/clawmatic/30min" target="_blank" rel="noopener noreferrer">
                  Book Your Free Audit <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
