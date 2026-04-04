"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/clawmatic/30min";

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="rounded-2xl border border-primary/20 bg-primary/5 p-10 sm:p-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Not sure where to start?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
            Book a free 30-minute AI audit. We&apos;ll tell you exactly what to automate and how.
          </p>
          <Button variant="hero" size="lg" asChild className="text-base px-8">
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Book a free call
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
