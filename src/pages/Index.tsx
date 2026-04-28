import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Features } from "@/components/landing/Features";
import { Finance } from "@/components/landing/Finance";
import { Plans } from "@/components/landing/Plans";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Finance />
      <Plans />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
