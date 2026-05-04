import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Differential } from "@/components/landing/Differential";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Operation } from "@/components/landing/Operation";
import { Modules } from "@/components/landing/Modules";
import { Plans } from "@/components/landing/Plans";
import { Modes } from "@/components/landing/Modes";
import { Benefits } from "@/components/landing/Benefits";
import { Showcase } from "@/components/landing/Showcase";
import { FAQ } from "@/components/landing/FAQ";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <Hero />
      <Problem />
      <Differential />
      <HowItWorks />
      <Operation />
      <Modules />
      <Plans />
      <Modes />
      <Benefits />
      <Showcase />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
