'use client';

import Link from 'next/link';
import { Zap } from 'lucide-react';

const DISCORD_URL = 'https://discord.gg/7p3PVFq3';
const CALENDLY_URL = 'https://calendly.com/clawmatic/30min';

const footerCols = [
  {
    heading: 'Agency',
    links: [
      { label: 'Services', href: '/services', external: false },
      { label: 'How it Works', href: '/how-it-works', external: false },
      { label: 'Book an Audit', href: CALENDLY_URL, external: true },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about', external: false },
      { label: 'Contact', href: '/contact', external: false },
      { label: 'Privacy Policy', href: '/privacy', external: false },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Guides', href: '/guides', external: false },
      { label: 'Skill Packs', href: '/toolkit', external: false },
      { label: 'Discord', href: DISCORD_URL, external: true },
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
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI automation for businesses.
              <br />
              <span className="mt-1 inline-block">🇧🇪 Made in Belgium</span>
            </p>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                {col.heading}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
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
            © 2026 ClawMatic. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/40">
            Not affiliated with OpenClaw Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
