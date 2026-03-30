"use client";
import { motion } from "framer-motion";
import { Search, Cog, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Analyze",
    desc: "We dig into your business and identify exactly where time and money are being wasted on manual processes.",
  },
  {
    icon: Cog,
    step: "02",
    title: "Automate",
    desc: "We build custom AI workflows tailored to your specific operations — no off-the-shelf templates.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Scale",
    desc: "With the busywork handled, you save time, reduce costs, and have the bandwidth to grow faster.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="section-label">The process</span>
          <h2 className="section-title mt-3">How it works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {steps.map((s, i) => (
            <motion.div
              key={i}
              className="text-center relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <div className="relative inline-flex mb-6">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <s.icon className="h-8 w-8 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 text-xs font-bold bg-primary text-primary-foreground rounded-full w-7 h-7 flex items-center justify-center">
                  {s.step}
                </span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
