'use client';

import Link from 'next/link';
import { Zap } from 'lucide-react';

const DISCORD_URL = 'https://discord.gg/7p3PVFq3';
const GITHUB_URL = 'https://github.com/Clawmatic';
const BUSINESS_URL = 'https://clawmatic.eu';

const footerCols = [
  {
    heading: 'Learn',
    links: [
      { label: 'Free Guides', href: '/guides', external: false },
      { label: 'Stack Bundles', href: '/packages', external: false },
      { label: 'Skill Packs', href: '/toolkit', external: false },
      { label: 'Stack Quiz', href: '/quiz', external: false },
    ],
  },
  {
    heading: 'Community',
    links: [
      { label: 'Discord', href: DISCORD_URL, external: true },
      { label: 'GitHub', href: GITHUB_URL, external: true },
      { label: 'About', href: '/about', external: false },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Privacy Policy', href: '/privacy', external: false },
      { label: 'Installer (coming soon)', href: '/installer', external: false },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background mt-auto">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-base font-bold text-foreground">
                Claw<span className="text-primary">Matic</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The unofficial OpenClaw AI hub. Free guides, curated stacks, skill packs, and a community of builders.
            </p>
            <a
              href={BUSINESS_URL}
              className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors"
            >
              ClawMatic Business →
            </a>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-muted-foreground/60">
            © 2026 ClawMatic Community. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/40">
            Not officially affiliated with the OpenClaw project.
          </p>
        </div>
      </div>
    </footer>
  );
}
