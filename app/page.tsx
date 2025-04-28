import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { DomainsSection } from "@/components/domains-section";
import { ProjectsSection } from "@/components/projects-section";
import { ClientsSection } from "@/components/clients-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DomainsSection />
      <ProjectsSection />
      <ClientsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}