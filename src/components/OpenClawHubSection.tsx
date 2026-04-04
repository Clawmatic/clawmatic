"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BookOpen, Package, Zap, ArrowRight } from "lucide-react";
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

        <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto mb-10">
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
                  className="group block rounded-xl border border-border/50 bg-card p-7 card-hover h-full"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{tile.title}</h3>
                  <p className="text-sm text-muted-foreground">{tile.description}</p>
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
