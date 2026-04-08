"use client";

import { useState, useRef, useEffect, Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, ChevronDown, BookOpen, Puzzle, MessageSquare } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/clawmatic/30min";
const DISCORD_URL = "https://discord.gg/7p3PVFq3";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "How it Works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Guides", href: "/guides", icon: BookOpen, external: false },
  { label: "Skill Packs", href: "/toolkit", icon: Puzzle, external: false },
  { label: "Discord", href: DISCORD_URL, icon: MessageSquare, external: true },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResourcesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Cross-site banner */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-primary/10 border-b border-primary/20">
        <div className="container mx-auto px-4 py-1.5 flex items-center justify-center gap-4 text-xs">
          <span className="text-muted-foreground">We also run the OpenClaw community hub</span>
          <a
            href="https://community.clawmatic.eu"
            className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors"
          >
            community.clawmatic.eu →
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

        {/* Desktop — right side: Resources dropdown + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setResourcesOpen(true)}
            onMouseLeave={() => setResourcesOpen(false)}
          >
            <button
              onClick={() => setResourcesOpen(!resourcesOpen)}
              className={`flex items-center gap-1 text-sm transition-colors duration-200 ${
                resourcesOpen ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Resources
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {resourcesOpen && (
              <div className="absolute right-0 top-full pt-1 w-48 z-50">
                <div className="rounded-xl border border-border/60 bg-popover shadow-lg py-1.5">
                  {resourceLinks.map((item) => {
                    const inner = (
                      <div className="flex items-center gap-2.5 px-4 py-2.5 hover:bg-card transition-colors">
                        <item.icon className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{item.label}</span>
                      </div>
                    );
                    return item.external ? (
                      <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" onClick={() => setResourcesOpen(false)}>
                        {inner}
                      </a>
                    ) : (
                      <Link key={item.label} href={item.href} onClick={() => setResourcesOpen(false)}>
                        {inner}
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <Button variant="hero" size="sm" asChild>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Get your free Roadmap
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
            <p className="text-xs font-semibold text-muted-foreground/50 uppercase tracking-widest mt-4 mb-1">
              Resources
            </p>
            {resourceLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2.5 border-b border-border/30"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2.5 border-b border-border/30"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <div className="pt-3">
              <Button variant="hero" size="sm" className="w-full" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Get your free Roadmap
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
