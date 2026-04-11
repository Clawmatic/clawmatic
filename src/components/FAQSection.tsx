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
    a: "For the done-for-you service — no. We handle everything. For the DIY toolkit and guides, basic comfort with a terminal is helpful but not required. Our guides are written for beginners.",
  },
  {
    q: "How long does it take?",
    a: "A typical business automation is scoped, built, and live within 2–3 weeks. For DIY users, the install guide gets most people running in under 15 minutes.",
  },
  {
    q: "Is this expensive?",
    a: "The done-for-you service is priced based on scope — book a free call to get a quote. The guides are free. Skill packs start at €19. AI stack packages start at €29.",
  },
  {
    q: "What kind of businesses do you work with?",
    a: "Small and mid-sized businesses that are drowning in repetitive manual work — typically 2–50 people. We are especially well suited to legal, healthcare, finance, and professional services teams in the EU.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold text-primary tracking-widest uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Common questions</h2>
        </motion.div>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-xl border border-border/50 bg-card px-6 border-none"
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
