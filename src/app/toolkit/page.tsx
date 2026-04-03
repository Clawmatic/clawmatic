"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Zap, Tag, Download, Package, Rocket, Code, DollarSign, Newspaper, Home, Dumbbell, Flag } from "lucide-react";

type Toolkit = {
  icon: React.ElementType;
  badge: string;
  badgeColor: string;
  category: string;
  title: string;
  desc: string;
  features: string[];
  moreCount: number;
  automations: number;
  version: string;
  downloads: string;
  price: string;
  oldPrice?: string;
  buyUrl?: string;
  comingSoon?: boolean;
};

const toolkits: Toolkit[] = [
  {
    icon: Rocket, badge: "NEW", badgeColor: "bg-primary/10 text-primary", category: "Starter",
    title: "Starter Kit",
    desc: "Everything you need to hit the ground running. 10 essential automations covering messaging, productivity, search, and task management — pre-configured and ready to use.",
    features: ["10 curated essential automations", "Step-by-step setup guide", "WhatsApp + Telegram basics", "Web search & summarization"],
    moreCount: 2, automations: 10, version: "v1.0.0", downloads: "0+", price: "€9",
    buyUrl: "https://clawmatic.gumroad.com/l/starter-kit",
  },
  {
    icon: Zap, badge: "BESTSELLER", badgeColor: "bg-accent/15 text-accent", category: "Productivity",
    title: "Productivity OS Pack",
    desc: "The ultimate productivity bundle. Google Calendar, Gmail, Notion, Todoist — all wired into your automation agent. Automate your whole workday.",
    features: ["Google Calendar read/write", "Gmail drafting & sending", "Notion page creation", "Todoist task management"],
    moreCount: 2, automations: 15, version: "v2.1.0", downloads: "520+", price: "€10", oldPrice: "€15",
    comingSoon: true,
  },
  {
    icon: Code, badge: "COMING SOON", badgeColor: "bg-secondary text-secondary-foreground", category: "Development",
    title: "Dev Toolkit",
    desc: "Automations for developers. Pull GitHub issues, write commit messages, explain code, generate PRs, search docs — everything a dev needs inside your AI assistant.",
    features: ["GitHub issues & PRs", "Code explanation & review", "Commit message writer", "Docs search (MDN, npm, etc)"],
    moreCount: 2, automations: 12, version: "v1.0.1", downloads: "180+", price: "€8",
    comingSoon: true,
  },
  {
    icon: DollarSign, badge: "COMING SOON", badgeColor: "bg-secondary text-secondary-foreground", category: "Finance",
    title: "Finance Tracker Pack",
    desc: "Parse bank CSV exports, categorize transactions, track budgets, and ask questions about your money — all locally, all private.",
    features: ["CSV bank import", "Auto-categorization", "Monthly spend reports", "Budget alerts"],
    moreCount: 1, automations: 6, version: "v1.1.0", downloads: "890+", price: "€0",
    comingSoon: true,
  },
  {
    icon: Newspaper, badge: "COMING SOON", badgeColor: "bg-secondary text-secondary-foreground", category: "Information",
    title: "News & Research Digest",
    desc: "Get AI-curated news digests, research summaries, and topic briefings. Connect RSS feeds, HN, Reddit, and arXiv into one smart daily brief.",
    features: ["RSS feed aggregation", "Hacker News digest", "Reddit topic summaries", "arXiv paper briefs"],
    moreCount: 1, automations: 7, version: "v1.2.0", downloads: "210+", price: "€5",
    comingSoon: true,
  },
  {
    icon: Home, badge: "COMING SOON", badgeColor: "bg-secondary text-secondary-foreground", category: "Smart Home",
    title: "Smart Home Bridge",
    desc: "Control Home Assistant, Philips Hue, and MQTT devices with natural language. \"Set study lights to focus mode\" just works.",
    features: ["Home Assistant integration", "Philips Hue scenes", "MQTT device control", "Automation triggers"],
    moreCount: 1, automations: 9, version: "v0.9.5", downloads: "95+", price: "€6",
    comingSoon: true,
  },
  {
    icon: Dumbbell, badge: "COMING SOON", badgeColor: "bg-secondary text-secondary-foreground", category: "Health",
    title: "Health & Fitness Log",
    desc: "Log workouts, track habits, analyze sleep data, and get personalized fitness summaries. Works with Apple Health CSV exports.",
    features: ["Workout logging", "Habit tracker", "Apple Health CSV import", "Weekly fitness reports"],
    moreCount: 1, automations: 5, version: "v1.0.0", downloads: "130+", price: "€5",
    comingSoon: true,
  },
  {
    icon: Flag, badge: "COMING SOON", badgeColor: "bg-secondary text-secondary-foreground", category: "Local",
    title: "Belgian Starter Pack",
    desc: "A free starter pack built with Belgian taste. Includes VAT calculator, Belgian public transit lookup, and more local integrations.",
    features: ["Belgian VAT calculator", "SNCB train lookup", "De Lijn bus schedules", "Belgian holiday checker"],
    moreCount: 1, automations: 5, version: "v1.0.0", downloads: "75+", price: "€0",
    comingSoon: true,
  },
];

export default function ToolkitPage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium tracking-wide">
              Toolkit
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-4 mb-6 max-w-3xl">
              Automate your work — <span className="gradient-text">yourself</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-6">
              Ready-made automation toolkits for individuals. No agency needed, no technical knowledge required. Download, install, and start saving time today.
            </p>
            <p className="text-sm text-muted-foreground">
              Looking for a custom build for your business?{" "}
              <a href="/services" className="text-primary hover:underline">→ /services</a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Info banner */}
      <section className="pb-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="glass-card rounded-xl px-5 py-3 flex items-center gap-3 max-w-4xl">
            <Package className="h-5 w-5 text-primary shrink-0" />
            <p className="text-sm text-muted-foreground">
              All toolkits are delivered as instant downloads via <span className="text-foreground font-medium">Gumroad</span>. One-time payment, lifetime updates.
            </p>
          </div>
        </div>
      </section>

      {/* Toolkit Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolkits.map((tk, i) => (
              <motion.div
                key={i}
                className="glow-border glass-card rounded-2xl p-6 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <tk.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex gap-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tk.badgeColor}`}>{tk.badge}</span>
                    <span className="text-[10px] font-medium bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full">{tk.category}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2">{tk.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{tk.desc}</p>

                <ul className="space-y-1.5 mb-2">
                  {tk.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground mb-4">+{tk.moreCount} more</p>

                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4 mt-auto">
                  <span className="flex items-center gap-1"><Zap className="h-3 w-3" />{tk.automations} automations</span>
                  <span className="flex items-center gap-1"><Tag className="h-3 w-3" />{tk.version}</span>
                  <span className="flex items-center gap-1"><Download className="h-3 w-3" />{tk.downloads}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-foreground">{tk.price}</span>
                    {tk.oldPrice && <span className="text-sm text-muted-foreground line-through">{tk.oldPrice}</span>}
                  </div>
                  {tk.comingSoon ? (
                    <span className="text-sm text-muted-foreground">Coming soon →</span>
                  ) : (
                    <Button variant="hero" size="sm" asChild>
                      <a href={tk.buyUrl} target="_blank" rel="noopener noreferrer">Buy now →</a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <motion.div
              className="glass-card rounded-2xl p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-foreground mb-2">Need something custom?</h3>
              <p className="text-sm text-muted-foreground mb-4">Want an automation tailored to exactly how you work? We build custom systems for individuals and businesses alike.</p>
              <a href="mailto:info@clawmatic.eu" className="text-primary text-sm hover:underline font-medium">Get in touch →</a>
            </motion.div>
            <motion.div
              className="glass-card rounded-2xl p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-foreground mb-2">Running a business?</h3>
              <p className="text-sm text-muted-foreground mb-4">Our agency service handles everything — scoping, building, and deploying custom AI automation for your team.</p>
              <a href="/services" className="text-primary text-sm hover:underline font-medium">Explore services →</a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
