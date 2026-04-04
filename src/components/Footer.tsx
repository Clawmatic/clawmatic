'use client';

import Link from 'next/link';
import { Zap } from 'lucide-react';

const footerLinks = {
  Content: [
    { href: '/guides', label: 'Guides' },
    { href: '/toolkit', label: 'Skill Packs' },
    { href: '/packages', label: 'AI Stack Packages' },
    { href: '/quiz', label: 'Stack Recommender' },
  ],
  Product: [
    { href: '/installer', label: 'Installer' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background mt-auto">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-base font-bold text-foreground">
                Claw<span className="text-primary">Matic</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              The unofficial hub for OpenClaw AI users — and a done-for-you AI automation agency for businesses.
              <br />
              <span className="mt-1 inline-block">🇧🇪 Made in Belgium</span>
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs text-muted-foreground">Not affiliated with OpenClaw Inc.</span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest mb-4">
                {heading}
              </p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
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
          <Link href="/privacy" className="text-xs text-muted-foreground/60 hover:text-muted-foreground transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
