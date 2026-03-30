"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Wrench, Flag, Handshake } from "lucide-react";

const values = [
  { icon: Target, title: "Results first", desc: "We measure success by time saved and costs reduced. Not by features shipped." },
  { icon: Wrench, title: "Built for your business", desc: "No templates. Every automation is designed around how you actually work." },
  { icon: Flag, title: "Belgian-made", desc: "Built in Belgium, with European values around privacy, quality, and honest pricing." },
  { icon: Handshake, title: "We handle everything", desc: "From scoping to deployment. You do not need any technical knowledge." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wide">
              About us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-4 mb-6 max-w-4xl">
              We help businesses stop wasting time on <span className="gradient-text">manual work</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              ClawMatic is a Belgian AI automation agency. We build custom AI systems that eliminate repetitive work so you and your team can focus on what actually matters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wide">
                Our story
              </span>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We started ClawMatic because we kept seeing the same problem: smart, capable businesses drowning in manual work. Emails that needed sorting, leads that needed following up, reports that needed generating — all done by hand, every single day.
                </p>
                <p>
                  AI can handle most of that. Not the generic ChatGPT kind — custom-built systems tailored to exactly how your business works. That is what we build.
                </p>
                <p>
                  We are based in Belgium and work with businesses across Europe. Every project starts with a free audit so we understand your workflow before we build anything.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="glass-card rounded-2xl p-6">
                <div className="text-3xl mb-3">🇧🇪</div>
                <h3 className="font-bold text-foreground mb-2">Based in Belgium</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Built in Belgium, serving clients across Europe. Belgian-made means built carefully, delivered honestly, and priced fairly.
                </p>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wide">
                  Our approach
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                  We do not sell off-the-shelf software. Every system we build is custom — designed around your specific processes and tools.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wide">
              What we stand for
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-3">How we work</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={i}
                className="glass-card rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
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
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Ready to stop doing things manually?</h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-lg">
                Book a free 30-minute call. We&apos;ll analyze your business and show you exactly where AI can save you time.
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
