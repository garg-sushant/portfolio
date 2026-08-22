"use client";
import { motion } from "framer-motion";
import {
  SiLeetcode,
  SiCodeforces,
  SiGeeksforgeeks,
  SiCodechef,
  SiGithub,
  SiCodingninjas,
  SiHackerrank
} from "react-icons/si";

const profiles = [
  {
    name: "LeetCode (Main)",
    icon: <SiLeetcode className="text-yellow-400 shrink-0" size={32} />,
    link: "https://leetcode.com/u/sushant123s-_/",
    desc: "Problem Solving & DSA",
  },
  {
    name: "Codeforces",
    icon: <SiCodeforces className="text-blue-400 shrink-0" size={32} />,
    link: "https://codeforces.com/profile/garg_sushant",
    desc: "Competitive Programming",
  },
  {
    name: "LeetCode (Secondary)",
    icon: <SiLeetcode className="text-yellow-400 shrink-0" size={32} />,
    link: "https://leetcode.com/u/garg_sushant/",
    desc: "Contest Practice & Archives",
  },
  {
    name: "CodeChef",
    icon: <SiCodechef className="text-amber-500 shrink-0" size={32} />,
    link: "https://www.codechef.com/users/sushant37",
    desc: "Contest Ratings & Challenges",
  },
  {
    name: "GeeksforGeeks",
    icon: <SiGeeksforgeeks className="text-emerald-400 shrink-0" size={32} />,
    link: "https://www.geeksforgeeks.org/profile/sgargm5nk",
    desc: "DSA Practice & Solutions",
  },
  {
    name: "GitHub",
    icon: <SiGithub className="text-white shrink-0" size={32} />,
    link: "https://github.com/garg-sushant",
    desc: "Open Source & Repositories",
  },
  {
    name: "Coding Ninjas",
    icon: <SiCodingninjas className="text-[#F58025] shrink-0" size={32} />,
    link: "https://www.naukri.com/code360/profile/77c7c1d4-a805-4109-a7aa-a8b5b435f9f7",
    desc: "Code360 Assessments",
  },
  {
    name: "HackerRank",
    icon: <SiHackerrank className="text-[#00EA64] shrink-0" size={32} />,
    link: "https://www.hackerrank.com/profile/sgarg9031/",
    desc: "Skills Certification & Badges",
  },
];

export default function CodingProfiles() {
  return (
    <section
      id="coding"
      className="flex items-center justify-center py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white"
          >
            Coding & Problem Solving
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto"
          >
            Consistent problem-solving track record and competitive programming across top global platforms.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {profiles.map((profile, index) => (
            <motion.a
              key={`${profile.name}-${index}`}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="glass-card group flex flex-col justify-between rounded-2xl p-5 transition-all duration-200 hover:border-blue-400/40 hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-2.5 transition-transform duration-200 group-hover:scale-105">
                    {profile.icon}
                  </div>
                  <span className="text-xs font-semibold text-slate-500 group-hover:text-blue-400 transition-colors">
                    ↗
                  </span>
                </div>

                <h3 className="mt-4 text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {profile.name}
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  {profile.desc}
                </p>
              </div>

              <div className="mt-5 flex items-center gap-1 text-xs font-semibold text-blue-400 group-hover:text-emerald-300 transition-colors">
                <span>View Profile</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </div>
            </motion.a>
          ))}

        </div>
      </div>
    </section>
  );
}

