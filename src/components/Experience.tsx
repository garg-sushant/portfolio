"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import SectionWrapper from "./SectionWrapper";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="mb-12 text-center text-2xl font-semibold text-white sm:text-3xl scroll-mb-24">
        Experience
      </h2>
      <div className="flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <motion.article
            key={exp.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="glass-card rounded-3xl px-6 py-8 sm:px-8 sm:py-10 transition-all duration-300 hover:border-[#8b5cf6]/30 hover:shadow-[0_0_60px_rgba(139,92,246,0.2)]"
          >
            {/* Role Title */}
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              {exp.role}
            </h3>

            {/* Company & Employment Type */}
            <p className="mt-1 text-base sm:text-lg">
              <span className="font-semibold text-[#2dd4bf]">
                {exp.company}
              </span>
              <span className="text-gray-400"> · {exp.employmentType}</span>
            </p>

            {/* Duration */}
            <p className="mt-1 text-sm sm:text-base text-gray-400">
              {exp.duration}
            </p>

            {/* Location & Work Type */}
            <p className="mt-1 text-sm sm:text-base text-gray-400">
              {exp.location} · {exp.locationType}
            </p>

            {/* Achievements / Description Bullets */}
            <ul className="mt-6 space-y-2.5 list-disc list-outside ml-5 text-sm sm:text-base leading-relaxed text-gray-300">
              {exp.points.map((point, i) => (
                <li key={i} className="pl-1">
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
