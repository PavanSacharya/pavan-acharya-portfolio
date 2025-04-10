import dynamic from "next/dynamic";

// Import components that use client-side features with { ssr: false }
const AboutPage = dynamic(() => import("@/components/AboutPage"), {
  ssr: false,
});
const ContactPage = dynamic(() => import("@/components/ContactPage"), {
  ssr: false,
});
import { Footer } from "@/components/Footer";
import HomePage from "@/components/HomePage";
import Grapgicdesign from "@/components/Graphice-design";
import Uiuxdesign from "@/components/UIUX-Project";
import Freelance from "@/components/Freelance";
import FreelanceScroll from "@/components/Freelance-scroll";
const ProjectsPage = dynamic(() => import("@/components/ProjectsPage"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <main
        className="min-h-screen antialiased text-white dark:bg-grid-white/[0.06] bg-grid-white/[0.02]"
        id="home"
      >
        {/* home */}
        <HomePage />

        {/* graphic design*/}
        <Grapgicdesign />

        <Uiuxdesign />

        {/* projects*/}
        <ProjectsPage />
        
        {/* About */}
        <AboutPage />

        {/* freelance*/}
        <Freelance />

        {/* freelance scroll*/}
        <FreelanceScroll />



        {/* Contact Page */}
        <ContactPage />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
