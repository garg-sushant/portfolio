"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingScrollTarget, setPendingScrollTarget] =
    useState<string | null>(null);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-white/5 bg-[#0f0f14]/80 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#hero"
          className="text-lg font-semibold bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
          Sushant Garg
        </a>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-linear-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-medium text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <AnimatePresence
        onExitComplete={() => {
          if (pendingScrollTarget) {
            const target = pendingScrollTarget;
            setPendingScrollTarget(null);
            // Wait for layout/paint to settle after dropdown removal
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                const section = document.querySelector(target);
                if (!section) return;
                const isMobile = window.innerWidth < 768;
                const headerOffset = 80; // sticky header height
                if (isMobile) {
                  // Manual offset on mobile to avoid dynamic toolbar + scroll-padding issues
                  const top = Math.max(
                    0,
                    section.getBoundingClientRect().top +
                      window.scrollY -
                      headerOffset
                  );
                  window.scrollTo({ top, behavior: "auto" });
                } else {
                  section.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              });
            });
          }
        }}
      >
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="border-t border-white/5 bg-[#0f0f14]/95 md:hidden"
          >
            <div className="flex flex-col gap-6 px-6 py-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => {
                    setPendingScrollTarget(link.href);
                    setIsOpen(false);
                  }}
                  className="text-left text-sm font-medium text-gray-400 transition-colors hover:text-white"
                >
                  {link.label}
                </button>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="rounded-xl bg-linear-to-r from-purple-600 to-blue-600 px-4 py-2 text-sm font-medium text-white text-center"
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