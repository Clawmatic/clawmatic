import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About ClawMatic Community — The Unofficial OpenClaw AI Hub',
  description:
    'ClawMatic Community is the unofficial hub for OpenClaw AI users. Free guides, curated stacks, skill packs, and a Discord community — built for people who want to get the most out of OpenClaw.',
  openGraph: {
    title: 'About ClawMatic Community — The Unofficial OpenClaw AI Hub',
    description:
      'Free guides, curated stacks, skill packs, and a Discord community — all in one place, built for people who want to get the most out of OpenClaw without getting lost in GitHub issues.',
    images: [{ url: '/og/about.png', width: 1200, height: 630, alt: 'About ClawMatic Community' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ClawMatic Community — The Unofficial OpenClaw AI Hub',
    description:
      'Free guides, curated stacks, skill packs, and a Discord community — all in one place.',
    images: ['/og/about.png'],
  },
};
// TODO: Generate OG image at /public/og/about.png

const DISCORD_URL = 'https://discord.gg/7p3PVFq3';
const GITHUB_URL = 'https://github.com/Clawmatic';
const BUSINESS_URL = 'https://clawmatic.eu';
// TODO: Add contact email if one exists — currently linking to /contact page

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="pt-32 pb-16 relative border-b border-border/40">
        <div className="absolute inset-0 hero-grid opacity-15" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 60% 40%, rgba(78,204,163,0.07) 0%, transparent 60%)',
          }}
        />
        <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-3xl">
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-5">
            About
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6 max-w-3xl">
            About ClawMatic Community
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The unofficial hub for OpenClaw AI users. Free guides, curated stacks, skill packs, and a Discord community — all in one place, built for people who want to get the most out of OpenClaw without getting lost in GitHub issues.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 max-w-3xl py-16 space-y-16">

        {/* Why we built this */}
        <section>
          <h2 className="text-2xl font-bold mb-5">Why we built this</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              OpenClaw is one of the most powerful AI tools available today — open-source, local-first, and infinitely extensible. But the ecosystem moves fast, the documentation is scattered, and new users have to piece together setup instructions from Discord threads, GitHub comments, and half-updated wikis.
            </p>
            <p>
              ClawMatic Community exists to fix that. We curate the guides, skill packs, and stack configurations that actually work, keep them up to date, and maintain a friendly Discord where OpenClaw users can ask questions without being told to &quot;just read the source.&quot;
            </p>
            <p className="font-medium text-foreground">
              Everything on this site is free. Everything always will be.
            </p>
          </div>
        </section>

        {/* What you'll find here */}
        <section>
          <h2 className="text-2xl font-bold mb-6">What you&apos;ll find here</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                title: 'Free guides',
                description: 'Step-by-step tutorials for setting up, extending, and running OpenClaw.',
                href: '/guides',
                external: false,
              },
              {
                title: 'Stack Bundles',
                description: 'Curated AI model configurations that work out of the box.',
                href: '/packages',
                external: false,
              },
              {
                title: 'Skill Packs',
                description: 'Ready-made OpenClaw skills you can drop straight into your setup.',
                href: '/toolkit',
                external: false,
              },
              {
                title: 'Stack Quiz',
                description: 'A 2-minute quiz that recommends a stack based on your needs.',
                href: '/quiz',
                external: false,
              },
              {
                title: 'Discord',
                description: 'The community. Ask questions, share automations, get unstuck.',
                href: DISCORD_URL,
                external: true,
              },
              {
                title: 'Installer (coming soon)',
                description: 'A one-click installer for OpenClaw on any platform.',
                href: '/installer',
                external: false,
                comingSoon: true,
              },
            ].map((item) => {
              const content = (
                <div className="rounded-xl border border-border/50 bg-card p-6 hover:border-primary/30 transition-colors group">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    {'comingSoon' in item && item.comingSoon && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border/50 font-medium whitespace-nowrap">
                        Coming soon
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              );
              return item.external ? (
                <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <Link key={item.title} href={item.href}>
                  {content}
                </Link>
              );
            })}
          </div>
        </section>

        {/* Community vs Business */}
        <section className="border-t border-border/40 pt-12">
          <h2 className="text-2xl font-bold mb-5">Community and Business</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              ClawMatic Community (this site) is a free resource for OpenClaw users. It will always be free.
            </p>
            <p>
              <a href={BUSINESS_URL} className="text-primary hover:underline">ClawMatic Business</a>{' '}
              is a separate, paid service that deploys, configures, and maintains OpenClaw for small and mid-sized businesses worldwide — for companies that want the power of OpenClaw without setting it up themselves.
            </p>
            <p className="text-foreground font-medium">Same team behind both. Different audiences.</p>
          </div>
        </section>

        {/* Get in touch */}
        <section className="border-t border-border/40 pt-12">
          <h2 className="text-2xl font-bold mb-5">Get in touch</h2>
          <ul className="space-y-4">
            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="font-semibold text-foreground min-w-[80px]">Discord</span>
              <span className="text-muted-foreground text-sm">The fastest way to reach us.</span>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                Join the server <ArrowRight className="h-3 w-3" />
              </a>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="font-semibold text-foreground min-w-[80px]">GitHub</span>
              <span className="text-muted-foreground text-sm">Report issues, contribute skills, submit guides.</span>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                Clawmatic on GitHub <ArrowRight className="h-3 w-3" />
              </a>
            </li>
            <li className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
              <span className="font-semibold text-foreground min-w-[80px]">Email</span>
              <span className="text-muted-foreground text-sm">
                For press, partnerships, or anything that doesn&apos;t fit the above.
              </span>
              {/* TODO: Add contact email address here when confirmed */}
              <Link
                href="/contact"
                className="text-sm text-primary hover:underline inline-flex items-center gap-1"
              >
                Contact page <ArrowRight className="h-3 w-3" />
              </Link>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
}
