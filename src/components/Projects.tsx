"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import SectionWrapper from "./SectionWrapper";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          Featured Projects
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
          Full-stack web applications, AI multi-agent workflows, and intelligent software engineering tools.
        </p>
      </div>

      {/* ALL PROJECTS EQUAL SIZE IN A CONSISTENT 2-COLUMN GRID */}
      <div className="grid gap-8 md:grid-cols-2 items-stretch">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="glass-card group flex flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-7 transition-all duration-200 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
          >
            <div>
              {/* PREVIEW PHOTO AT TOP OF PROJECT */}
              <div className="relative mb-6 overflow-hidden rounded-xl border border-blue-500/20 bg-[#071524] shadow-xl transition-all duration-200">
                {/* Browser top decorative bar */}
                <div className="flex items-center justify-between border-b border-white/[0.08] bg-white/[0.02] px-4 py-2.5 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <span className="truncate max-w-[220px] text-[11px] text-blue-300 font-mono">
                    {project.liveUrl || project.githubUrl}
                  </span>
                  <div className="w-10" />
                </div>

                {/* Natural full aspect image without edge cropping */}
                <div className="relative w-full overflow-hidden bg-[#071524]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={`${project.title} live screenshot`}
                    className="w-full h-auto block object-contain transition-transform duration-300 group-hover:scale-[1.01]"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Title & Action Links Row */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {project.title}
                </h3>

                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`GitHub repo for ${project.title}`}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-blue-500/20 bg-blue-500/5 px-3 py-1.5 text-xs font-semibold text-slate-200 transition-all duration-150 hover:bg-blue-500/15 hover:border-blue-400/40 hover:text-white"
                  >
                    <FaGithub size={14} />
                    <span>GitHub</span>
                  </a>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Live demo for ${project.title}`}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 px-3 py-1.5 text-xs font-bold text-white shadow-md shadow-emerald-500/20 transition-all duration-150 hover:brightness-110 hover:scale-105"
                    >
                      <ExternalLink size={13} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-6 flex flex-wrap gap-2 pt-4 border-t border-white/[0.06]">
              {project.techStack.map((tech, idx) => (
                <span
                  key={tech}
                  className={`rounded-md border px-2.5 py-1 text-xs font-medium ${
                    idx % 2 === 0
                      ? "border-emerald-500/20 bg-emerald-500/5 text-emerald-200"
                      : "border-blue-500/20 bg-blue-500/5 text-blue-200"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}






