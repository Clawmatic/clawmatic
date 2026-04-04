import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import IsForYouSection from "@/components/IsForYouSection";
import WhatWeAutomateSection from "@/components/WhatWeAutomateSection";
import StatsSection from "@/components/StatsSection";
import OpenClawHubSection from "@/components/OpenClawHubSection";
import CTASection from "@/components/CTASection";
import EmailCaptureSection from "@/components/EmailCaptureSection";

export const metadata: Metadata = {
  title: "ClawMatic — AI Automation Agency & OpenClaw Hub",
  description:
    "ClawMatic builds custom AI workflows for businesses — and is the go-to hub for OpenClaw AI users. Guides, skill packs, curated AI stacks, and more.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <HeroSection />
      <IsForYouSection />
      <WhatWeAutomateSection />
      <StatsSection />
      <OpenClawHubSection />
      <EmailCaptureSection />
      <CTASection />
    </div>
  );
}
