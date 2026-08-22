"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESUME_URL } from "@/data/resume";

const dynamicWords = [
  "Open Source",
  "Web Dev",
  "DevOps",
  "AI Agents",
];

const socialLinks = [
  {
    href: "https://github.com/garg-sushant",
    label: "GitHub",
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
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % dynamicWords.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="flex min-h-[88vh] items-center justify-center py-16 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-12">

          {/* LEFT COLUMN: HERO DETAILS */}
          <div className="text-center lg:text-left lg:col-span-7">

            {/* DYNAMIC WORDS STATUS BADGE */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-emerald-300 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.12)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
              </span>

              <span className="text-slate-300">Passionate about</span>

              <div className="relative inline-block h-5 min-w-[95px] overflow-hidden text-left font-semibold">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={dynamicWords[wordIndex]}
                    initial={{ y: 16, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -16, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent font-bold"
                  >
                    {dynamicWords[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* NAME */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Sushant Garg
            </motion.h1>

            {/* ROLE */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-3 text-xl font-semibold sm:text-2xl bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent"
            >
              Full Stack Developer & AI Engineer
            </motion.p>

            {/* INTRO BIO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 space-y-3.5 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base font-normal"
            >
              <p>
                Computer Science undergraduate at{" "}
                <span className="font-semibold text-white">Punjab Engineering College (PEC)</span> specializing in building scalable full-stack applications and production-ready AI systems.
              </p>
              <p>
                Core engineering with{" "}
                <span className="text-blue-300 font-medium">Next.js</span>,{" "}
                <span className="text-emerald-300 font-medium">TypeScript</span>, and{" "}
                <span className="text-teal-300 font-medium">FastAPI</span>, with hands-on expertise in{" "}
                <span className="text-emerald-300 font-medium">Agentic AI workflows</span>,{" "}
                <span className="text-blue-300 font-medium">LangGraph</span>, and{" "}
                <span className="text-cyan-300 font-medium">LLMs & RAG</span>.
              </p>
              <p className="text-xs sm:text-sm text-slate-400">
                Driven by continuous problem solving across competitive programming platforms and hands-on industrial internship experience.
              </p>
            </motion.div>

            {/* ACTION BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 px-6 py-3 text-sm sm:text-base font-bold text-white shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:brightness-110 hover:scale-105"
              >
                <span>Explore Projects</span>
                <svg
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-6 py-3 text-sm sm:text-base font-semibold text-blue-200 backdrop-blur-md transition-all duration-200 hover:bg-blue-500/20 hover:border-blue-400 hover:scale-105"
              >
                <svg className="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>View Resume</span>
              </a>
            </motion.div>

            {/* SOCIAL LINKS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex items-center justify-center lg:justify-start gap-4"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/5 text-slate-300 transition-all duration-200 hover:scale-110 hover:border-blue-400/50 hover:bg-blue-500/15 hover:text-blue-300 shadow-sm"
                >
                  {link.icon}
                </a>
              ))}
            </motion.div>

          </div>

          {/* RIGHT COLUMN: WHOAMI TERMINAL CARD (SEA GREEN & BLUE PALETTE) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-lg rounded-2xl border border-blue-500/25 bg-[#071524]/95 shadow-2xl backdrop-blur-xl transition-all duration-200 hover:border-blue-400/40 hover:shadow-[0_0_35px_rgba(59,130,246,0.18)]">

              {/* Window Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.02] px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
                  <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
                  <div className="h-3 w-3 rounded-full bg-[#27c93f]" />
                </div>
                <div className="font-mono text-xs text-blue-400/80 tracking-wide">
                  sushant — whoami
                </div>
                <div className="w-8" />
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-emerald-400 font-semibold">sushant@portfolio:~$</span>
                  <span className="text-slate-100">whoami</span>
                </div>

                <div className="space-y-1.5 text-slate-300">
                  <p className="text-blue-400/60">&#123;</p>
                  <p className="pl-4">
                    <span className="text-blue-300">name</span>: <span className="text-emerald-300">&quot;Sushant Garg&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-blue-300">role</span>: <span className="text-emerald-300">&quot;Full Stack & AI Engineer&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-blue-300">focus</span>: [<span className="text-cyan-300">&quot;full-stack&quot;</span>, <span className="text-cyan-300">&quot;AI agents&quot;</span>, <span className="text-cyan-300">&quot;LLMs & RAG&quot;</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-blue-300">likes</span>: [<span className="text-cyan-300">&quot;open source&quot;</span>, <span className="text-cyan-300">&quot;problem solving&quot;</span>],
                  </p>
                  <p className="pl-4">
                    <span className="text-blue-300">edu</span>:   <span className="text-emerald-300">&quot;CSE @ PEC, &apos;27&quot;</span>
                  </p>
                  <p className="text-blue-400/60">&#125;</p>
                </div>

                <div className="mt-5 flex items-center gap-2">
                  <span className="text-emerald-400 font-semibold">sushant@portfolio:~$</span>
                  <span className="inline-block h-4 w-2.5 bg-emerald-400 animate-pulse align-middle" />
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}