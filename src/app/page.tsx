"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Wrench,
  TrendingUp,
  Mail,
  Users,
  BarChart3,
  Calendar,
  MessageCircle,
  Database,
  CheckCircle2,
  Shield,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const CALENDLY_URL = "https://calendly.com/clawmatic/30min";

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 hero-grid opacity-20" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(78,204,163,0.08) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(94,106,210,0.06) 0%, transparent 55%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-7"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-widest uppercase">
            AI Automation for Businesses
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.08] mb-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Your team is wasting hours
          <br />
          <span className="gradient-text">on work AI can do in seconds.</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          ClawMatic builds custom AI automation systems for small and mid-sized businesses. Founder-led, hands-on, and built for teams that want less repetitive work and more operational leverage.
        </motion.p>

        <motion.p
          className="text-sm sm:text-base text-muted-foreground/75 max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Built for legal, healthcare, finance, and professional services teams in the EU.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col items-center gap-4"
        >
          <Button variant="hero" size="lg" asChild className="text-base px-10 py-6">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Book a free 30-minute audit
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground/60">
            No obligation. Fixed price. No deposit until scope is signed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── PROBLEM ──────────────────────────────────────────────────────────────────

const problems = [
  {
    title: "Manual tasks that never end",
    text: "The same emails, the same data entry, the same reports — done by hand, every day, by people who should be doing something more valuable.",
  },
  {
    title: "Slow response times",
    text: "Leads go cold. Customer questions wait hours for answers. Every delay costs you money and reputation.",
  },
  {
    title: "Hiring more just to keep up",
    text: "Scaling means more headcount, more salaries, more complexity. There is a better way.",
  },
  {
    title: "No time to grow",
    text: "When you are buried in operational work, strategy and growth opportunities pass you by.",
  },
];

function Problem() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Your business is leaking time every single day.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-xl border border-border/50 bg-card p-7"
            >
              <div className="w-1.5 h-6 rounded-full bg-primary/60 mb-4" />
              <h3 className="text-base font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── WHAT WE DO ───────────────────────────────────────────────────────────────

const pillars = [
  {
    icon: Search,
    title: "We analyse",
    text: "We dig into your operations and identify exactly where time and money are being wasted on manual processes.",
  },
  {
    icon: Wrench,
    title: "We build",
    text: "We build a custom AI system tailored to your specific workflows — not an off-the-shelf template.",
  },
  {
    icon: TrendingUp,
    title: "You save",
    text: "Your team gets hours back every week. Costs go down. Response times drop. You focus on growth.",
  },
];

function WhatWeDo() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            We build AI systems that do the work for you.
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Custom-built for your business. Fully managed by us. Your IT team stays in control — we handle the build.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center px-6 py-10 rounded-2xl border border-border/50 bg-card"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <p.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Button variant="hero-outline" asChild>
            <Link href="/services">
              See all services <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── WHAT WE AUTOMATE ─────────────────────────────────────────────────────────

const automations = [
  {
    icon: Mail,
    title: "Email triage & responses",
    text: "Auto-sort, label, draft replies, and follow up — without lifting a finger.",
  },
  {
    icon: Users,
    title: "Lead follow-up",
    text: "Never let a lead go cold. Automated outreach and CRM updates on autopilot.",
  },
  {
    icon: BarChart3,
    title: "Reporting & dashboards",
    text: "Pull data, generate reports, and deliver insights automatically on schedule.",
  },
  {
    icon: Calendar,
    title: "Scheduling & booking",
    text: "Let AI handle meeting coordination, reminders, and calendar management.",
  },
  {
    icon: MessageCircle,
    title: "Customer support",
    text: "Instant responses to common questions across email, chat, and WhatsApp.",
  },
  {
    icon: Database,
    title: "Data entry & processing",
    text: "Extract, transform, and move data between systems without manual work.",
  },
];

function WhatWeAutomate() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            If your team does it manually and repeatedly,{" "}
            <span className="text-muted-foreground font-normal">we can probably automate it.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {automations.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="flex gap-4 rounded-xl border border-border/50 bg-card p-6"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="h-4.5 w-4.5 text-primary" style={{ width: 18, height: 18 }} />
              </div>
              <div>
                <h3 className="text-sm font-semibold mb-1.5">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── WHY CLAWMATIC ────────────────────────────────────────────────────────────

const trustPoints = [
  {
    icon: CheckCircle2,
    title: "We handle everything",
    text: "You do not need to understand AI, install anything, or manage any tools. We build it, we run it, we maintain it.",
  },
  {
    icon: Shield,
    title: "Custom, not templated",
    text: "Every automation is built specifically for your business and your workflows. No generic solutions.",
  },
  {
    icon: Star,
    title: "Hands-on and personal",
    text: "Founder-led, hands-on, and personally invested in every client's results. You deal with the person building your system.",
  },
];

function WhyClawMatic() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Why ClawMatic?</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {trustPoints.map((tp, i) => (
            <motion.div
              key={tp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5">
                <tp.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-semibold mb-2">{tp.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{tp.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOUNDING CLIENTS ─────────────────────────────────────────────────────────

function FoundingClients() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-5">
            Limited spots
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Now accepting founding clients.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            ClawMatic is currently working with a small group of founding clients who get hands-on attention, priority support, and the lowest prices we will ever offer — in exchange for honest feedback and a case study.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            If you run a small or mid-sized business and want to reclaim 10+ hours per week, this is the right moment.
          </p>
          <Button variant="hero" size="lg" asChild className="text-base px-8 py-6">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Book your free audit — spots are limited
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <p className="text-sm text-muted-foreground/60 mt-5">
            30 minutes. No obligation. Fixed price. No deposit until scope is signed.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── FINAL CTA ────────────────────────────────────────────────────────────────

function FinalCTA() {
  return (
    <section className="py-20 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden relative"
          style={{
            background:
              "linear-gradient(135deg, rgba(78,204,163,0.15) 0%, rgba(94,106,210,0.10) 60%, rgba(78,204,163,0.08) 100%)",
          }}
        >
          <div className="absolute inset-0 border border-primary/20 rounded-2xl" />
          <div className="relative z-10 text-center px-8 py-16 sm:py-20">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
              Ready to stop doing work that AI can do for you?
            </h2>
            <Button variant="hero" size="lg" asChild className="text-base px-10 py-6">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Book a free audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Hero />
      <Problem />
      <WhatWeDo />
      <WhatWeAutomate />
      <WhyClawMatic />
      <FoundingClients />
      <FinalCTA />
    </div>
  );
}
