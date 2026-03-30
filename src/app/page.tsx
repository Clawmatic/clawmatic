import HeroSection from "@/components/HeroSection";
import IsForYouSection from "@/components/IsForYouSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import UseCasesSection from "@/components/UseCasesSection";
import StatsSection from "@/components/StatsSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background pt-16">
      <HeroSection />
      <IsForYouSection />
      <ProblemSection />
      <HowItWorksSection />
      <BenefitsSection />
      <UseCasesSection />
      <StatsSection />
      <CTASection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
