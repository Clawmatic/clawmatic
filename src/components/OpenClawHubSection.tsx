"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Package, Zap, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const tiles = [
  {
    icon: BookOpen,
    title: "Guides",
    description: "Step-by-step tutorials for every skill level.",
    href: "/guides",
  },
  {
    icon: Package,
    title: "AI Stack Packages",
    description: "Curated model + setup combos for your use case.",
    href: "/packages",
  },
  {
    icon: Zap,
    title: "Skill Packs",
    description: "Drop-in skills ready to use inside OpenClaw.",
    href: "/toolkit",
  },
  {
    icon: Sparkles,
    title: "Stack Recommender",
    description: "5 quick questions. We tell you exactly what to use.",
    href: "/quiz",
    highlight: true,
  },
];

const OpenClawHubSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-4">
            For OpenClaw users
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            The unofficial OpenClaw AI hub
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Guides, curated model packs, skill downloads, and community — all in one place.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-10">
          {tiles.map((tile, i) => {
            const Icon = tile.icon;
            return (
              <motion.div
                key={tile.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link
                  href={tile.href}
                  className={`group block rounded-xl border p-7 card-hover h-full ${
                    tile.highlight
                      ? "border-primary/30 bg-primary/5 hover:bg-primary/10"
                      : "border-border/50 bg-card"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                    tile.highlight
                      ? "bg-primary/15 group-hover:bg-primary/25"
                      : "bg-primary/10 group-hover:bg-primary/20"
                  }`}>
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className={`font-semibold mb-2 ${tile.highlight ? "text-primary" : ""}`}>
                    {tile.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{tile.description}</p>
                  {tile.highlight && (
                    <span className="inline-flex items-center gap-1 mt-3 text-xs text-primary font-medium">
                      Take the quiz <ArrowRight className="h-3 w-3" />
                    </span>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="hero-outline" asChild>
            <Link href="/toolkit">
              Explore the toolkit
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OpenClawHubSection;
