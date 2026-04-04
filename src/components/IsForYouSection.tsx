"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Wrench } from "lucide-react";
import Link from "next/link";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/clawmatic/30min";

const businessPoints = [
  "You spend hours on tasks that should be automated",
  "You want to scale without hiring more staff",
  "You're tired of manual, repetitive processes",
];

const builderPoints = [
  "You use or want to use OpenClaw AI",
  "You want the best AI model for your use case",
  "You want guides, skill packs, and community",
];

const IsForYouSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Is this for you?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            ClawMatic serves two audiences. Which one are you?
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* For businesses */}
          <motion.div
            className="rounded-xl border border-border/50 bg-card p-8 flex flex-col card-hover"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Building2 className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-xl font-bold">You run a business</h3>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {businessPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                  {point}
                </li>
              ))}
            </ul>
            <Button variant="hero" asChild className="w-full">
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Book a free audit
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* For builders */}
          <motion.div
            className="rounded-xl border border-primary/20 bg-card p-8 flex flex-col card-hover"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Wrench className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">You want to build it yourself</h3>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {builderPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="text-primary mt-0.5 flex-shrink-0">✓</span>
                  {point}
                </li>
              ))}
            </ul>
            <Button variant="hero-outline" asChild className="w-full border-primary/30 hover:border-primary">
              <Link href="/toolkit">
                Browse the toolkit
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IsForYouSection;
