"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { RESUME_URL } from "@/data/resume";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#education", label: "Education" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#coding", label: "Profiles" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + 180;
          const sectionIds = navLinks.map((link) => link.href.substring(1));

          for (let i = sectionIds.length - 1; i >= 0; i--) {
            const section = document.getElementById(sectionIds[i]);
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(`#${sectionIds[i]}`);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 w-full border-b border-blue-500/15 bg-[#060d17]/85 backdrop-blur-2xl transition-colors duration-300"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#hero"
          className="text-lg font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent tracking-tight hover:opacity-90 transition-opacity"
        >
          Sushant Garg
        </a>

        {/* Desktop Links with Smooth Sliding Active Tab Indicator */}
        <div className="hidden items-center gap-1.5 lg:gap-2 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3 py-1.5 text-xs lg:text-sm font-medium rounded-lg transition-colors duration-150 ${
                  isActive
                    ? "text-emerald-300"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavTab"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/15 to-blue-500/15 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)] -z-10"
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}

          <a
            href="/Resume.pdf"
            download="Sushant_Garg_Resume.pdf"
            className="ml-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 px-4 py-2 text-xs font-bold text-white transition-all duration-200 hover:brightness-110 hover:scale-105 shadow-md shadow-emerald-500/20"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="p-1 text-emerald-400 hover:text-emerald-300 md:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="border-t border-blue-500/15 bg-[#060d17]/95 backdrop-blur-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-3 px-6 py-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-left px-3 py-2 rounded-lg text-base font-medium transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-emerald-500/15 to-blue-500/15 text-emerald-300 border border-emerald-500/30"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}

              <a
                href="/Resume.pdf"
                download="Sushant_Garg_Resume.pdf"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 px-5 py-2.5 text-sm font-bold text-white text-center shadow-md shadow-emerald-500/20"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>


  );
}