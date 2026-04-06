"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const socialLinks = [
  {
    href: "https://github.com/garg-sushant",
    label: "Github",
    icon: (
      <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 
          9.504.5.092.682-.217.682-.483 
          0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343
          -.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608
          1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 
          2.91.832.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113
          -4.555-4.951 0-1.093.39-1.987 1.029-2.687
          -.103-.253-.446-1.272.098-2.65 0 0 .84-.269 
          2.75 1.026A9.564 9.564 0 0112 6.844
          c.85.004 1.705.115 2.504.337
          1.909-1.295 2.747-1.026 2.747-1.026
          .546 1.378.203 2.397.1 2.65.64.7 
          1.028 1.594 1.028 2.687
          0 3.848-2.339 4.695-4.566 4.944
          .359.309.678.92.678 1.855
          0 1.338-.012 2.419-.012 2.747
          0 .268.18.58.688.482A10.02 10.02 0 0022 12.017
          C22 6.484 17.523 2 12 2z"
        />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/sushant-garg-4b0a37284/",
    label: "LinkedIn",
    icon: (
      <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M19 0h-14C2.239 0 1 1.239 1 4v16c0 
        2.761 1.239 4 4 4h14c2.761 0 
        4-1.239 4-4V4c0-2.761-1.239-4-4-4zM8 
        19H5V9h3v10zM6.5 
        7.732A1.732 1.732 0 116.5 
        4.268a1.732 1.732 0 010 
        3.464zM20 19h-3v-5.604c0-1.337-.026-3.059-1.865-3.059
        -1.865 0-2.151 1.459-2.151 2.965V19h-3V9h2.881v1.367h.041
        c.401-.761 1.379-1.563 2.838-1.563
        3.034 0 3.596 1.996 3.596 
        4.59V19z" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center px-4 py-24 scroll-mt-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6 lg:px-12 xl:px-20">

        {/* NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Sushant Garg
        </motion.h1>

        {/* ROLE */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 text-center text-xl font-medium sm:text-2xl bg-linear-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
          Full Stack Developer
        </motion.p>

        {/* SPLIT SECTION */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 flex flex-col items-center gap-10 md:flex-row md:gap-16"
        >
          {/* LEFT */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
              I build scalable and modern web applications using React,
              Next.js, and TypeScript. Passionate about creating fast,
              responsive, and visually polished digital experiences.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex flex-1 justify-center md:justify-end">
            <div className="overflow-hidden rounded-full border border-white/10 shadow-[0_0_80px_rgba(139,92,246,0.45)]">
              <Image
                src="/picture.jpeg"
                alt="Sushant Garg"
                width={200}
                height={200}
                priority
                className="object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-xl bg-linear-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-purple-500/30 transition-all hover:scale-105"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-purple-500/50 hover:bg-white/10"
          >
            Download Resume
          </a>
        </motion.div>

        {/* SOCIAL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 flex items-center justify-center gap-6"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center
                         rounded-full border border-white/10
                         bg-white/5 text-gray-400
                         transition-all duration-300
                         hover:scale-110 hover:border-purple-500/40 hover:text-purple-400"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}