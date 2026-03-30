"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Do I need technical knowledge?",
    a: "Not at all. We handle everything — from analysis to implementation. You just tell us what's slowing you down, and we build the solution.",
  },
  {
    q: "How long does it take?",
    a: "Most automations are up and running within 1-2 weeks. Complex systems may take 3-4 weeks depending on scope.",
  },
  {
    q: "Is this expensive?",
    a: "Our solutions typically pay for themselves within the first month through time and cost savings. We start with a free audit so you can see the ROI before committing.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "We work with small and mid-sized businesses across all industries — from agencies and e-commerce to consulting firms and service businesses.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="section-label">FAQ</span>
          <h2 className="section-title mt-3">Common questions</h2>
        </div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card rounded-xl px-6 border-none"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
