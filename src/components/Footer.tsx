"use client";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-blue-500/15 bg-[#060d17] py-12">

      {/* Top Subtle Line */}
      <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>

      <div className="mx-auto max-w-6xl px-6 text-center">

        {/* Social Icons */}
        <div className="mb-6 flex justify-center gap-4">
          <a
            href="https://wa.me/918847005306"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp Contact"
            className="flex h-11 w-11 items-center justify-center
                       rounded-xl border border-blue-500/20
                       bg-blue-500/5 text-slate-300
                       transition-all duration-200
                       hover:scale-105 hover:border-emerald-400/50 hover:bg-emerald-500/15 hover:text-emerald-300"
          >
            <FaWhatsapp size={18} />
          </a>

          <a
            href="https://github.com/garg-sushant"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-11 w-11 items-center justify-center
                       rounded-xl border border-blue-500/20
                       bg-blue-500/5 text-slate-300
                       transition-all duration-200
                       hover:scale-105 hover:border-emerald-400/50 hover:bg-emerald-500/15 hover:text-emerald-300"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/sushant-garg-4b0a37284/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="flex h-11 w-11 items-center justify-center
                       rounded-xl border border-blue-500/20
                       bg-blue-500/5 text-slate-300
                       transition-all duration-200
                       hover:scale-105 hover:border-blue-400/50 hover:bg-blue-500/15 hover:text-blue-300"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        {/* Text */}
        <p className="text-sm text-slate-300 font-medium">
          © {new Date().getFullYear()} Sushant Garg. All rights reserved.
        </p>

        <p className="mt-1.5 text-xs text-slate-500">
          Built with Next.js, React, TypeScript & Tailwind CSS
        </p>

      </div>
    </footer>
  );
}