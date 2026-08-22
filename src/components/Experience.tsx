"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import SectionWrapper from "./SectionWrapper";
import {  Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          Work Experience
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
          Hands-on software engineering and AI internship experience building production-grade platforms.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {experiences.map((exp, index) => (
          <motion.article
            key={exp.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-card rounded-2xl p-6 sm:p-8 transition-all duration-200 hover:border-white/20"
          >
            {/* Header: Role & Company */}
            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {exp.role}
                </h3>
                <p className="mt-1 text-base">
                  <span className="font-semibold text-emerald-300">
                    {exp.company}
                  </span>
                  <span className="text-slate-400 font-medium"> · {exp.employmentType}</span>
                </p>
              </div>

              {/* Badges / Meta */}
              <div className="flex flex-wrap gap-2 sm:flex-col sm:items-end">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 px-3 py-0.5 text-xs font-medium text-blue-200">
                  <Calendar size={13} className="text-blue-400" />
                  {exp.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-0.5 text-xs font-medium text-emerald-200">
                  <MapPin size={13} className="text-teal-400" />
                  {exp.location} · {exp.locationType}
                </span>
              </div>
            </div>

            {/* Achievements / Description Bullets */}
            <ul className="mt-6 space-y-2.5 list-disc list-outside ml-5 text-sm sm:text-base leading-relaxed text-slate-300">
              {exp.points.map((point, i) => (
                <li key={i} className="pl-1 marker:text-emerald-400">
                  {point}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </SectionWrapper>
  );
}



