"use client";

import { motion } from "framer-motion";
import { Mail, UserCheck, BarChart2, CalendarCheck, Headphones, Database } from "lucide-react";

const automations = [
  {
    icon: Mail,
    title: "Email triage & responses",
    description: "Sort, prioritise, and draft replies automatically.",
  },
  {
    icon: UserCheck,
    title: "Lead follow-up",
    description: "Never miss a prospect with automated follow-up sequences.",
  },
  {
    icon: BarChart2,
    title: "Reporting & dashboards",
    description: "Generate weekly reports from your data without lifting a finger.",
  },
  {
    icon: CalendarCheck,
    title: "Scheduling & booking",
    description: "AI handles appointment requests and calendar management.",
  },
  {
    icon: Headphones,
    title: "Customer support",
    description: "Answer common questions 24/7 with a trained AI agent.",
  },
  {
    icon: Database,
    title: "Data entry & processing",
    description: "Extract, clean, and structure data from any source.",
  },
];

const WhatWeAutomateSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold text-accent tracking-widest uppercase mb-4">
            For businesses
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">What we automate</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From inbox chaos to customer support — we build the automations your business actually needs.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {automations.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="rounded-xl border border-border/50 bg-card p-6 card-hover"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatWeAutomateSection;
