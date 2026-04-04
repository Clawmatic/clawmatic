"use client";

import { motion } from "framer-motion";
import EmailCapture from "@/components/EmailCapture";

const EmailCaptureSection = () => {
  return (
    <section className="py-24 border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <EmailCapture />
        </motion.div>
      </div>
    </section>
  );
};

export default EmailCaptureSection;
