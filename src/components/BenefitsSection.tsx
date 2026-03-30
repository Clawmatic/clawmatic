"use client";
import { motion } from "framer-motion";
import { Clock, DollarSign, Repeat, Zap, TrendingUp } from "lucide-react";

const benefits = [
  { icon: Clock, title: "Save 10-30+ hours/week", desc: "Automate the tasks that eat your day so your team can focus on work that matters." },
  { icon: DollarSign, title: "Reduce operational costs", desc: "Do more with less. Cut overhead by replacing manual processes with AI workflows." },
  { icon: Repeat, title: "Eliminate repetitive tasks", desc: "Email triage, data entry, reporting — all handled automatically." },
  { icon: Zap, title: "Faster response times", desc: "AI systems that respond instantly, 24/7, without manual intervention." },
  { icon: TrendingUp, title: "More time for growth", desc: "When the busywork disappears, you can focus on strategy, clients, and scaling." },
];

const BenefitsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="section-label">What you get</span>
          <h2 className="section-title mt-3">Real results, every time</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className={`glow-border glass-card rounded-2xl p-6 ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <b.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
