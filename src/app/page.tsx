"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Package, Puzzle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmailCapture from "@/components/EmailCapture";

const DISCORD_URL = "https://discord.gg/7p3PVFq3";
const CALENDLY_URL = "https://calendly.com/clawmatic/30min";

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 hero-grid opacity-30" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wide">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            The unofficial OpenClaw AI hub
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-5 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Get the most out of OpenClaw AI.{" "}
          <span className="gradient-text">Without the setup headaches.</span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Free guides, curated AI model setups, ready-made skill packs, and a growing community of builders — all in one place.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Button variant="hero" size="lg" asChild className="text-base px-8 py-6 min-w-[200px]">
            <Link href="/guides">
              Browse the guides
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild className="text-base px-8 py-6 min-w-[200px]">
            <Link href="/packages">View packages</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2"
        >
          {["5 free guides live", "API keys included in packages", "🇧🇪 Made in Belgium"].map((item) => (
            <span
              key={item}
              className="text-xs text-muted-foreground/70 border border-border/50 rounded-full px-3 py-1"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── WHAT YOU GET ─────────────────────────────────────────────────────────────

const offerings = [
  {
    icon: BookOpen,
    title: "Free guides",
    text: "Step-by-step tutorials for installing OpenClaw, picking the right AI model, connecting OpenRouter, and building your first automation. Written for real humans, not developers.",
    linkLabel: "Browse guides",
    href: "/guides",
  },
  {
    icon: Package,
    title: "Done-for-you packages",
    text: "Buy a package and we personally set up your API key, load your credits, and configure everything within 24 hours. You just paste your key and go.",
    linkLabel: "View packages",
    href: "/packages",
  },
  {
    icon: Puzzle,
    title: "Skill packs",
    text: "Ready-made OpenClaw skills that install in one command. Email triage, calendar management, web research — drop them in and they work immediately.",
    linkLabel: "Browse skill packs",
    href: "/toolkit",
  },
];

function WhatYouGet() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            What ClawMatic gives you
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Everything you need to run OpenClaw well — whether you want to learn it yourself or have it done for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offerings.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border/60 bg-card p-7 flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">{item.text}</p>
              <Link
                href={item.href}
                className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
              >
                {item.linkLabel} <ArrowRight className="h-3.5 w-3.5" />
              </Link>
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
    n: "1",
    title: "You buy a package",
    text: "Pick the stack that fits your use case. Copywriter, Support Bot, or Research.",
  },
  {
    n: "2",
    title: "We configure everything",
    text: "Within 24 hours we set up your API key, load your credits, and prepare your personal config file.",
  },
  {
    n: "3",
    title: "Paste and go",
    text: "You receive everything by email. Paste your key into OpenClaw and you're running AI in under 15 minutes.",
  },
];

function HowItWorks() {
  return (
    <section className="py-20 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            We handle the setup. You just use it.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="w-10 h-10 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-primary font-bold text-sm mx-auto mb-4">
                {step.n}
              </div>
              {/* connector line (not on last) */}
              <h3 className="text-base font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Button variant="hero-outline" asChild>
            <Link href="/packages">
              See what&apos;s included <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// ─── COMMUNITY ────────────────────────────────────────────────────────────────

function Community() {
  return (
    <section className="py-20 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Join the ClawMatic community
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Get help, share what you&apos;ve built, and stay ahead of every OpenClaw update.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Discord tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-primary/30 bg-primary/5 p-8 flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
              <MessageSquare className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Discord server</h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
              Ask questions, get help with your setup, and share your automations with other OpenClaw users.
            </p>
            <Button variant="hero" asChild>
              <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
                Join the Discord <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Guides tile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border/60 bg-card p-8 flex flex-col"
          >
            <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5">
              <BookOpen className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">Free guides</h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
              From first install to your first automation — everything documented, always free.
            </p>
            <Button variant="hero-outline" asChild>
              <Link href="/guides">
                Browse guides <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── EMAIL CAPTURE ────────────────────────────────────────────────────────────

function EmailSection() {
  return (
    <section className="py-20 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <EmailCapture
            heading="Don't miss the one-click installer launch"
            subheading="Plus weekly OpenClaw tips, new guides, and skill pack updates straight to your inbox."
            finePrint="No spam. Unsubscribe anytime."
          />
        </motion.div>
      </div>
    </section>
  );
}

// ─── BUSINESS FOOTNOTE ────────────────────────────────────────────────────────

function BusinessFootnote() {
  return (
    <section className="py-14 border-t border-border/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto rounded-xl border border-border/40 bg-card/40 px-8 py-8 text-center"
        >
          <p className="text-xs font-semibold text-muted-foreground/50 uppercase tracking-widest mb-3">
            For businesses
          </p>
          <h3 className="text-lg font-semibold mb-3 text-foreground/80">
            Looking for a done-for-you solution?
          </h3>
          <p className="text-sm text-muted-foreground/70 leading-relaxed mb-6 max-w-lg mx-auto">
            ClawMatic also works with small and mid-sized businesses that want AI automation built and managed for them — no DIY required. Book a free 30-minute call and we&apos;ll map out exactly what can be automated in your business.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Book a free AI audit <ArrowRight className="h-3.5 w-3.5" />
          </a>
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
      <WhatYouGet />
      <HowItWorks />
      <Community />
      <EmailSection />
      <BusinessFootnote />
    </div>
  );
}
