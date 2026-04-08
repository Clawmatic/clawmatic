"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Star,
  CheckCircle2,
  Lock,
  Zap,
  Clock,
  Server,
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
            OpenClaw Deployment Specialists
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.08] mb-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Your own AI agent, running
          <br />
          <span className="gradient-text">on your own infrastructure.</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          ClawMatic deploys custom OpenClaw AI agents for businesses that want AI power without the cloud trade-offs — so you get the power of a full-time AI employee, with zero cloud dependency, zero data leaving your infrastructure, and zero technical knowledge required on your end.
        </motion.p>

        <motion.p
          className="text-sm text-muted-foreground/70 max-w-lg mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          Live in 14 days. Fully under your control. Fully yours — no vendor lock-in, ever.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button variant="hero" size="lg" asChild className="text-base px-10 py-6">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Get your free OpenClaw Deployment Roadmap
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild className="text-base px-8 py-6">
            <Link href="#how-it-works">
              See how it works →
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── WHY OPENCLAW ─────────────────────────────────────────────────────────────

function WhyOpenClaw() {
  return (
    <section className="py-24 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
            Why we chose OpenClaw
          </h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Most AI automation agencies build on Zapier, Make, or n8n. Those are fine tools — but your data runs through third-party cloud servers, your automations break every time a SaaS vendor changes their API, and you're locked into paying per-task fees forever.
            </p>
            <p>
              OpenClaw is different. It's open-source, runs on your own hardware, and connects to the tools you already use. When we build you an agent, it's yours. If you fire us tomorrow, it keeps running. Your data never leaves your infrastructure. And your costs don't scale with usage — they stay flat.
            </p>
            <p>
              OpenClaw has 150,000+ GitHub stars and thousands of community-built skills. We know this ecosystem inside out because we also run one of the largest community hubs for it.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="https://community.clawmatic.eu"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
            >
              Visit the OpenClaw community hub → community.clawmatic.eu
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── PROBLEM ──────────────────────────────────────────────────────────────────

const problems = [
  {
    title: "Your data can't leave your infrastructure",
    text: "Client contracts, data protection laws, and industry regulations make sending data to third-party cloud AI tools legally fraught.",
  },
  {
    title: "Your tools lock you in",
    text: "Every Zapier, Make, or ChatGPT workflow you build is one more vendor holding the keys to your operations.",
  },
  {
    title: "Your team wastes hours on repeatable work",
    text: "Email triage, lead follow-up, reporting, document processing — all done by hand because "safe" AI felt impossible.",
  },
  {
    title: "Enterprise AI consultancies want €50,000 and six months",
    text: "You need something live in weeks, not a discovery phase.",
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
            You want AI. Your compliance team doesn't.
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

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────

const steps = [
  {
    n: "01",
    title: "We scope",
    icon: Clock,
    body: "A free OpenClaw Deployment Roadmap call. We map your workflows, identify what to automate first, and give you a fixed-price proposal with a clear timeline. No sales pitch.",
  },
  {
    n: "02",
    title: "We deploy",
    icon: Server,
    body: "We set up OpenClaw on your infrastructure, build the custom skills your workflows need, and integrate with your existing tools. Live in 10–21 days depending on scope.",
  },
  {
    n: "03",
    title: "You own it",
    icon: Shield,
    body: "The deployment is yours. The data is yours. The skills are yours. If you want to manage it yourself, you can. If you want us to maintain and extend it, our Care plan has you covered.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            One specialist. One system. Fully yours.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border/50 bg-card p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-primary/25 leading-none select-none">
                  {step.n}
                </span>
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <step.icon className="h-4.5 w-4.5 text-primary" style={{ width: 18, height: 18 }} />
                </div>
              </div>
              <h3 className="text-lg font-bold mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10"
        >
          <Button variant="hero-outline" asChild>
            <Link href="/how-it-works">
              See the full process <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── WHY CLAWMATIC ────────────────────────────────────────────────────────────

const trustPoints = [
  {
    icon: CheckCircle2,
    title: "OpenClaw specialists",
    text: "We don't dabble. OpenClaw is the only framework we deploy. We know the ecosystem inside out — including the edge cases that catch generalist agencies off guard.",
  },
  {
    icon: Lock,
    title: "Your data stays yours",
    text: "Every deployment runs on your own infrastructure. No data leaves your servers. No third-party processors. Compliant by design.",
  },
  {
    icon: Star,
    title: "Hands-on and personal",
    text: "Solo-founded, hands-on, and personally invested in every client's results. You deal with the person building your system — not an account manager.",
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
            Founding client offer — first 10 only
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            40% off. First 10 clients only.
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We're onboarding our first 10 clients at 40% off these rates in exchange for a case study. That means The Inbox Agent at €900 instead of €1,500, Care plans at €540/month instead of €900.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-10">
            This is the lowest pricing ClawMatic will ever offer. After the first 10 clients, prices return to standard.
          </p>
          <Button variant="hero" size="lg" asChild className="text-base px-8 py-6">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Claim your founding client spot
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
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
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Ready to run AI on your own infrastructure?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Book a free OpenClaw Deployment Roadmap call. We'll map your workflows and give you a fixed-price proposal — no obligation.
            </p>
            <Button variant="hero" size="lg" asChild className="text-base px-10 py-6">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Get your free Deployment Roadmap
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
      <WhyOpenClaw />
      <Problem />
      <HowItWorks />
      <WhyClawMatic />
      <FoundingClients />
      <FinalCTA />
    </div>
  );
}
