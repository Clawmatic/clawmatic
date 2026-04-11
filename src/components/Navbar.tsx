"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/clawmatic/30min";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "For Law Firms", href: "/for-law-firms" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Cross-site banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-primary/10 border-b border-primary/20">
        <div className="container mx-auto px-4 py-1.5 flex items-center justify-center gap-4 text-xs">
          <span className="text-muted-foreground">You're on ClawMatic Business</span>
          <a 
            href="https://community.clawmatic.eu" 
            className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors"
          >
            Go to Community →
          </a>
        </div>
      </div>
      <nav className="fixed top-[32px] left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Zap className="h-5 w-5 text-primary" />
          <span className="text-lg font-bold tracking-tight text-foreground">
            Claw<span className="text-primary">Matic</span>
            <span className="text-muted-foreground font-normal text-sm ml-1.5">Business</span>
          </span>
        </Link>

        {/* Desktop — centre links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-sm transition-colors duration-200 ${
                pathname === link.href || pathname?.startsWith(link.href + "/")
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop — right side CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="hero" size="sm" asChild>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Book a free audit
            </a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-sm transition-colors py-2.5 border-b border-border/30 ${
                  pathname === link.href
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3">
              <Button variant="hero" size="sm" className="w-full" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Book a free audit
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
