"use client";
import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="border-t border-border/50">
      {/* Final CTA */}
      <div className="py-20 text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            Stop wasting time on manual work
          </h2>
          <p className="text-muted-foreground mb-8">
            Every week you wait is another week of lost hours.
          </p>
          <Button variant="hero" size="lg" asChild className="text-base px-8 py-6">
            <a href="https://calendly.com/clawmatic/30min" target="_blank" rel="noopener noreferrer">
              Let's Talk
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/50 py-6">
        <div className="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary" />
            <span className="font-display font-bold text-foreground">
              Claw<span className="text-primary">Matic</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ClawMatic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
