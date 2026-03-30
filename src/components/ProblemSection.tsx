"use client";
import { motion } from "framer-motion";
import { Snail, RefreshCw, Users, Construction } from "lucide-react";

const problems = [
  {
    icon: Snail,
    title: "Manual tasks slow growth",
    desc: "Every hour spent on manual work is an hour not spent on strategy or customers.",
  },
  {
    icon: RefreshCw,
    title: "Repetitive work eats your day",
    desc: "The same tasks, every day, done by hand — draining focus and energy.",
  },
  {
    icon: Users,
    title: "Hiring more just to keep up",
    desc: "Scaling means more headcount, more overhead, more complexity.",
  },
  {
    icon: Construction,
    title: "Missed opportunities",
    desc: "When you're buried in busywork, growth opportunities pass you by.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="section-label">The problem</span>
          <h2 className="section-title mt-3">
            Your business is leaking <span className="gradient-text">time and money</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              className="group rounded-2xl bg-card border border-border p-6 hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <p.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="text-center text-primary font-semibold mt-12 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          That is exactly what we fix.
        </motion.p>
      </div>
    </section>
  );
};

export default ProblemSection;
