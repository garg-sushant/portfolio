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
    name: "LeetCode",
    icon: <SiLeetcode className="text-yellow-400" size={26} />,
    link: "https://leetcode.com/u/sushant123s-_/",
  },

  {
    name: "Codeforces",
    icon: <SiCodeforces className="text-blue-400" size={26} />,
    link: "https://codeforces.com/profile/garg_sushant",
  },

  {
    name: "LeetCode",
    icon: <SiLeetcode className="text-yellow-400" size={26} />,
    link: "https://leetcode.com/u/garg_sushant/",
  },
  {
    name: "CodeChef",
    icon: <SiCodechef className="text-orange-400" size={26} />,
    link: "https://www.codechef.com/users/sushant37",
  },
  {
    name: "GeeksforGeeks",
    icon: <SiGeeksforgeeks className="text-green-500" size={26} />,
    link: "https://www.geeksforgeeks.org/profile/sgargm5nk",
  },
  {
    name: "GitHub",
    icon: <SiGithub className="text-white" size={26} />,
    link: "https://github.com/garg-sushant",
  },
  {
    name: "Coding Ninjas",
    icon: <SiCodingninjas className="text-[#F58025]" size={26} />,
    link: "https://www.naukri.com/code360/profile/77c7c1d4-a805-4109-a7aa-a8b5b435f9f7",
  },
  {
    name: "HackerRank",
    icon: <SiHackerrank className="text-[#00EA64]" size={26} />,
    link: "https://www.hackerrank.com/profile/sgarg9031/"
  }
];

export default function CodingProfiles() {
  return (
    <section
      id="coding"
      className="flex items-center justify-center px-4 py-24"
    >
      <div className="mx-auto w-full max-w-900px">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Coding Profiles
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-center text-gray-400"
        >
          Competitive programming and problem-solving across multiple platforms.
        </motion.p>

        {/* Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {profiles.map((profile, index) => (
            <motion.a
              key={`${profile.name}-${index}`}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]"
            >
              <div className="flex items-center gap-4">
                {profile.icon}
                <h3 className="text-lg font-semibold text-white group-hover:text-purple-400">
                  {profile.name}
                </h3>
              </div>

              <p className="mt-4 text-sm text-gray-400">
                View profile →
              </p>
            </motion.a>
          ))}

        </div>
      </div>
    </section>
  );
}