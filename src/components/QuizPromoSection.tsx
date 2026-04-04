"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const steps = ["What are you?", "What do you need?", "What's your budget?"];

const QuizPromoSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden max-w-4xl mx-auto"
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(78,204,163,0.12) 0%, rgba(94,106,210,0.10) 50%, rgba(78,204,163,0.06) 100%)",
            }}
          />
          <div className="absolute inset-0 border border-primary/20 rounded-2xl" />
          <div className="absolute inset-0 hero-grid opacity-20" />

          <div className="relative z-10 px-8 py-10 sm:px-12 sm:py-12 flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
            {/* Left */}
            <div className="flex-1 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-4">
                <Sparkles className="h-3.5 w-3.5" />
                2-minute quiz
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
                Not sure which AI stack to use?
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
                Answer 5 quick questions and we&apos;ll tell you exactly which model, which setup, and which package fits your use case.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link href="/quiz">
                  Find my AI stack
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Right — decorative step preview */}
            <div className="hidden sm:flex flex-col gap-2.5 flex-shrink-0 w-52">
              {steps.map((label, i) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-lg border border-border/60 bg-card/80 px-4 py-2.5"
                  style={{ opacity: 1 - i * 0.2 }}
                >
                  <span className="w-5 h-5 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-primary text-xs font-bold flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-xs text-muted-foreground">{label}</span>
                </div>
              ))}
              <div className="flex items-center gap-3 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2.5">
                <Sparkles className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-xs text-primary font-medium">Your recommendation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuizPromoSection;
