"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-[#0f0f14] py-10 ">

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 h-px w-full bg-linear-to-r from-purple-500 via-blue-500 to-purple-500 opacity-40"></div>

      <div className="mx-auto max-w-6xl px-6 text-center">

        {/* Social Icons */}
        <div className="mb-6 flex justify-center gap-6">
          <a
            href="https://github.com/garg-sushant"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex h-10 w-10 items-center justify-center
                       rounded-full border border-white/10
                       bg-white/5 text-gray-400
                       transition-all duration-300
                       hover:scale-110 hover:border-purple-500/40 hover:text-purple-500"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/sushant-garg-4b0a37284/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Linkedin Profile"
            className="flex h-10 w-10 items-center justify-center
                       rounded-full border border-white/10
                       bg-white/5 text-gray-400
                       transition-all duration-300
                       hover:scale-110 hover:border-purple-500/40 hover:text-purple-500"
          >
            <FaLinkedin size={18} />
          </a>
        </div>

        {/* Text */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Sushant Garg
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Designed & Built with Next.js ,& Tailwind CSS
        </p>

      </div>
    </footer>
  );
}