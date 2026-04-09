import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Package, Puzzle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import EmailCapture from "@/components/EmailCapture";

export const metadata: Metadata = {
  title: "ClawMatic Community — Everything You Need to Get the Most Out of OpenClaw AI",
  description:
    "Free guides, curated AI model setups, skill packs, and a community of builders. The unofficial OpenClaw AI hub — all in one place.",
  openGraph: {
    title: "ClawMatic Community — The Unofficial OpenClaw AI Hub",
    description:
      "Free guides, curated AI model setups, skill packs, and a community of builders. All in one place.",
    images: [{ url: "/og/home.png", width: 1200, height: 630, alt: "ClawMatic Community" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClawMatic Community — The Unofficial OpenClaw AI Hub",
    description:
      "Free guides, curated AI model setups, skill packs, and a community of builders. All in one place.",
    images: ["/og/home.png"],
  },
};
// TODO: Generate OG image at /public/og/home.png

const DISCORD_URL = "https://discord.gg/7p3PVFq3";
const BUSINESS_URL = "https://clawmatic.eu";

// ─── HERO ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 hero-grid opacity-20" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(78,204,163,0.08) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(94,106,210,0.06) 0%, transparent 55%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.08] mb-5 max-w-3xl mx-auto">
          Everything you need to get the most out of{" "}
          <span className="gradient-text">OpenClaw AI.</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Free guides, curated AI model setups, skill packs, and a community of builders. All in one place.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <Button variant="hero" size="lg" asChild className="text-base px-8 py-5">
            <Link href="/guides">
              Browse free guides
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="hero-outline" size="lg" asChild className="text-base px-8 py-5">
            <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer">
              Join the Discord
            </a>
          </Button>
        </div>

        <Link
          href="/quiz"
          className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1"
        >
          Not sure where to start? Take the 2-minute stack quiz →
        </Link>
      </div>
    </section>
  );
}

// ─── QUIZ PROMO ───────────────────────────────────────────────────────────────

function QuizPromo() {
  return (
    <section className="py-16 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className="rounded-2xl p-10 sm:p-12 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(78,204,163,0.10) 0%, rgba(94,106,210,0.07) 60%, rgba(78,204,163,0.06) 100%)",
          }}
        >
          <div className="absolute inset-0 border border-primary/15 rounded-2xl" />
          <div className="relative z-10">
            <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-4">
              2-minute quiz
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Not sure which AI model to use with OpenClaw?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Take our 2-minute quiz and get a personalised stack recommendation based on your use case, budget, and privacy needs.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link href="/quiz">
                Start the quiz
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CONTENT CARDS ────────────────────────────────────────────────────────────

const cards = [
  {
    icon: BookOpen,
    label: "Free guides",
    description: "Step-by-step tutorials for setting up, extending, and running OpenClaw.",
    href: "/guides",
    external: false,
    cta: "Browse guides",
  },
  {
    icon: Package,
    label: "Stack Bundles",
    description: "Curated AI model configurations for OpenRouter that work out of the box.",
    href: "/packages",
    external: false,
    cta: "Browse bundles",
  },
  {
    icon: Puzzle,
    label: "Skill Packs",
    description: "Ready-made OpenClaw skills you can drop straight into your setup.",
    href: "/toolkit",
    external: false,
    cta: "Browse skill packs",
  },
  {
    icon: MessageSquare,
    label: "Join the community",
    description: "Ask questions, share automations, and get unstuck with other OpenClaw users.",
    href: DISCORD_URL,
    external: true,
    cta: "Join Discord",
  },
];

function ContentCards() {
  return (
    <section className="py-16 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card) => {
            const Icon = card.icon;
            const inner = (
              <div className="rounded-xl border border-border/50 bg-card p-7 flex flex-col h-full card-hover group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                  {card.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-5">
                  {card.description}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-primary">
                  {card.cta} <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            );
            return card.external ? (
              <a key={card.label} href={card.href} target="_blank" rel="noopener noreferrer">
                {inner}
              </a>
            ) : (
              <Link key={card.label} href={card.href}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── HOW IT WORKS ─────────────────────────────────────────────────────────────

const steps = [
  {
    number: "1",
    title: "Learn",
    description:
      "Browse free guides and the Discord community. Everything is free and always will be.",
  },
  {
    number: "2",
    title: "Configure",
    description:
      "Use the quiz to find your ideal stack. Download pre-built skill packs from the toolkit.",
  },
  {
    number: "3",
    title: "Deploy yourself",
    description:
      "Follow the setup guides and run OpenClaw on your own machine. Our stack bundles make it easy.",
  },
  {
    number: "4",
    title: "Or hire us",
    description: (
      <>
        If you&apos;d rather skip the setup, ClawMatic Business deploys OpenClaw for SMBs worldwide
        as a done-for-you service.{" "}
        <a
          href={BUSINESS_URL}
          className="text-primary hover:underline"
        >
          Learn more →
        </a>
      </>
    ),
  },
];

function HowItWorks() {
  return (
    <section className="py-20 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            How ClawMatic works
          </h2>
          <p className="text-muted-foreground">Start free. Level up when you&apos;re ready.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                <span className="text-sm font-bold text-primary">{step.number}</span>
              </div>
              <h3 className="font-semibold text-base mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── BUSINESS CROSS-LINK ──────────────────────────────────────────────────────

function BusinessCTA() {
  return (
    <section className="py-16 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div
          className="rounded-2xl p-10 sm:p-14 relative overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse at 70% 50%, rgba(94,106,210,0.10) 0%, transparent 60%), rgba(20,20,20,0.6)",
          }}
        >
          <div className="absolute inset-0 border border-border/60 rounded-2xl" />
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block text-xs font-semibold text-muted-foreground tracking-widest uppercase mb-4">
              ClawMatic Business
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Need OpenClaw deployed for your business?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              ClawMatic also deploys, configures, and maintains OpenClaw for SMBs worldwide — so your team gets the full power of OpenClaw without ever touching the CLI. Fixed prices, fast delivery, no vendor lock-in.
            </p>
            <Button variant="hero-outline" size="lg" asChild>
              <a href={BUSINESS_URL} target="_blank" rel="noopener noreferrer">
                Learn about ClawMatic Business
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── NEWSLETTER ───────────────────────────────────────────────────────────────

function Newsletter() {
  return (
    <section className="py-16 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-xl mx-auto">
          <EmailCapture />
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <Hero />
      <QuizPromo />
      <ContentCards />
      <HowItWorks />
      <BusinessCTA />
      <Newsletter />
    </div>
  );
}
