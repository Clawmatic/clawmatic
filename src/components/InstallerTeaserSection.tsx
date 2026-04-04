"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

const tiers = [
  {
    label: "Free",
    points: ["Bring your own API key", "Step-by-step guided setup"],
  },
  {
    label: "Premium",
    points: ["Fully managed experience", "One-click, no setup required"],
    highlight: true,
  },
];

const InstallerTeaserSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="max-w-3xl mx-auto rounded-2xl border border-border/50 bg-card p-10 sm:p-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold border border-muted-foreground/30 text-muted-foreground rounded-full px-3 py-1 mb-6 tracking-widest uppercase">
            Coming soon
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
            One-click OpenClaw installer
          </h2>
          <p className="text-muted-foreground mb-10 max-w-md mx-auto">
            No terminal. No config files. No setup headaches. Just click install and you're running.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left mb-10 max-w-md mx-auto">
            {tiers.map((tier) => (
              <div
                key={tier.label}
                className={`rounded-xl p-5 border ${
                  tier.highlight
                    ? "border-primary/30 bg-primary/5"
                    : "border-border/50 bg-background"
                }`}
              >
                <p className={`text-xs font-semibold uppercase tracking-widest mb-3 ${tier.highlight ? "text-primary" : "text-muted-foreground"}`}>
                  {tier.label}
                </p>
                <ul className="space-y-2">
                  {tier.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Button variant="hero-outline" asChild>
            <Link href="/installer">
              Get notified
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default InstallerTeaserSection;
