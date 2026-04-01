"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="relative rounded-3xl overflow-hidden max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-card to-accent/10" />
          <div className="absolute inset-0 hero-grid opacity-20" />

          <div className="relative z-10 p-10 sm:p-16 text-center">
            <span className="section-label mb-4 block">Installer coming soon</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Get ready for the <span className="gradient-text">one-click installer</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6 text-lg">
              The installer page is already laid out. The free path will still ask the user to bring their own API key and follow a guide, while premium will do the provider side and onboarding for them.
            </p>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 text-sm">
              That means: free is honest and practical, premium is the fully managed one-click experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button variant="hero" size="lg" asChild className="text-base px-10 py-6">
                <a href="/installer">
                  Open Installer Page
                  <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild className="text-base px-10 py-6">
                <a href="https://calendly.com/clawmatic/30min" target="_blank" rel="noopener noreferrer">
                  Book a Call
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
