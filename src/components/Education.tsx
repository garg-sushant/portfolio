"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { educationData } from "@/data/education";
import { GraduationCap, School, MapPin } from "lucide-react";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          Education
        </h2>
        <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto">
          Academic foundation and background across university and secondary schooling.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 items-stretch">
        {educationData.map((item, index) => {
          const isCollege = item.id === "college";
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card flex flex-col justify-between rounded-2xl p-6 transition-all duration-200 hover:border-white/20"
            >
              <div>
                {/* Header Icon + Level Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl border shadow-inner ${
                    isCollege
                      ? "border-blue-500/30 bg-blue-500/10 text-blue-400"
                      : "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                  }`}>
                    {isCollege ? <GraduationCap size={22} /> : <School size={20} />}
                  </div>

                  <span className={`rounded-full border px-3 py-0.5 text-xs font-medium ${
                    isCollege
                      ? "border-blue-500/20 bg-blue-500/5 text-blue-200"
                      : "border-emerald-500/20 bg-emerald-500/5 text-emerald-200"
                  }`}>
                    {item.duration}
                  </span>
                </div>

                {/* Institution Name */}
                <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                  {item.institution}
                </h3>

                {/* Degree & Field */}
                <p className="mt-2 text-sm font-semibold bg-gradient-to-r from-emerald-300 to-blue-300 bg-clip-text text-transparent">
                  {item.degree}
                </p>

                {item.field && (
                  <p className="mt-0.5 text-xs text-slate-400 font-medium">
                    {item.field}
                  </p>
                )}

                {/* Location */}
                <div className="mt-3 flex items-center gap-1.5 text-xs text-slate-400">
                  <MapPin size={13} className="text-blue-400 shrink-0" />
                  <span>{item.location}</span>
                </div>

                {/* Details / Key points */}
                {item.details && item.details.length > 0 && (
                  <ul className="mt-5 space-y-2 border-t border-white/[0.08] pt-4 text-xs text-slate-300 leading-relaxed">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}


