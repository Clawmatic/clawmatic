"use client";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const items = [
  "You run a small or mid-sized business",
  "You spend hours on repetitive tasks every week",
  "You want to scale without hiring more people",
  "You're tired of manual processes slowing you down",
];

const IsForYouSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="section-label">Is this for you?</span>
          <h2 className="section-title mt-3">This is for you if...</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className="glass-card rounded-xl p-5 flex items-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <span className="text-foreground font-medium">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IsForYouSection;
