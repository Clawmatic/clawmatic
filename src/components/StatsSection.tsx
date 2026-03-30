"use client";
import { motion } from "framer-motion";

const stats = [
  {
    value: "80%",
    label: "faster response time",
    desc: "Automated lead handling reduced response time by 80% — prospects got answers instantly, around the clock.",
  },
  {
    value: "15+",
    label: "hours saved per week",
    desc: "Custom AI workflow replaced a manual reporting process, saving 15+ hours per week across the team.",
  },
];

const StatsSection = () => {
  return (
    <section id="results" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="section-label">Results</span>
          <h2 className="section-title mt-3">Results from real businesses</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="glass-card rounded-2xl p-8 text-center"
              initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <div className="text-5xl sm:text-6xl font-bold gradient-text mb-2">{s.value}</div>
              <div className="text-lg font-semibold text-foreground mb-3">{s.label}</div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
