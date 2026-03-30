"use client";
import { motion } from "framer-motion";
import { Mail, Target, BarChart3, Calendar, MessageSquare, ClipboardList } from "lucide-react";

const useCases = [
  { icon: Mail, title: "Email triage & responses", desc: "Auto-sort, label, draft replies, and follow up — without lifting a finger." },
  { icon: Target, title: "Lead follow-up", desc: "Never let a lead go cold. Automated outreach and CRM updates on autopilot." },
  { icon: BarChart3, title: "Reporting & dashboards", desc: "Pull data, generate reports, and deliver insights automatically on schedule." },
  { icon: Calendar, title: "Scheduling & booking", desc: "Let AI handle meeting coordination, reminders, and calendar management." },
  { icon: MessageSquare, title: "Customer support", desc: "Instant responses to common questions across email, chat, and WhatsApp." },
  { icon: ClipboardList, title: "Data entry & processing", desc: "Extract, transform, and move data between systems without manual work." },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <span className="section-label">Use cases</span>
          <h2 className="section-title mt-3">What we automate</h2>
        </div>
        <p className="text-center text-muted-foreground mb-16 max-w-lg mx-auto">
          If your team does it manually and repeatedly, we can probably automate it.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {useCases.map((uc, i) => (
            <motion.div
              key={i}
              className="group rounded-2xl border border-border bg-card p-6 hover:bg-secondary/50 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="w-11 h-11 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <uc.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{uc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{uc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
