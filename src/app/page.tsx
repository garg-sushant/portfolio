import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CodingProfiles from "@/components/CodingProfiles";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f14]">
      <Navbar />
      <main className="mx-auto max-w-900px">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <CodingProfiles />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
