import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Benefits } from "@/components/landing/Benefits";
import { Features } from "@/components/landing/Features";
import { Finance } from "@/components/landing/Finance";
import { QueueUseCases } from "@/components/landing/QueueUseCases";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Benefits />
      <Features />
      <Finance />
      <QueueUseCases />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
