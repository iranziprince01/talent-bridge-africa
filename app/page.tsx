import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/Problem";
import { SolutionSection } from "@/components/sections/Solution";
import { HowItWorksSection } from "@/components/sections/HowItWorks";
import { ServicesSection } from "@/components/sections/Services";
import { ForBusinessesSection } from "@/components/sections/ForBusinesses";
import { ForStudentsSection } from "@/components/sections/ForStudents";
import { VisionSection } from "@/components/sections/Vision";
import { ContactSection } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen min-w-0 flex-col overflow-x-hidden bg-bg-soft">
      <Navbar />
      <main className="min-w-0 flex-1">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <ServicesSection />
        <ForBusinessesSection />
        <ForStudentsSection />
        <VisionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

