import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Education from "@/components/Education";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CodingProfiles from "@/components/CodingProfiles";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#060d17] text-slate-100 overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Sea Green & Blue ambient lighting */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-35">
        <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[720px] h-[480px] bg-gradient-to-b from-blue-600/20 via-emerald-600/15 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-[38%] -left-32 w-[520px] h-[520px] bg-gradient-to-tr from-emerald-600/20 via-teal-600/10 to-transparent blur-[130px] rounded-full" />
        <div className="absolute top-[68%] -right-36 w-[560px] h-[560px] bg-gradient-to-bl from-blue-600/20 via-cyan-700/15 to-transparent blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-20">
          <Hero />
          <Education />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <CodingProfiles />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}





