"use client";

import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Languages",
    skills: [
      "C",
      "C++",
      "Python",
      "JavaScript",
      "TypeScript",
    ],
  },
  {
    title: "AI & LLM",
    skills: [
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "LangChain",
      "LangGraph",
      "LangSmith",
      "MCP (Model Context Protocol)",
      "Vector Databases",
    ],
  },
  {
    title: "Full-Stack Development",
    skills: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "FastAPI",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Zustand",
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "Redis",
      "AWS",
      "Kafka",
      "WebSockets",
      "Nginx",
    ],
  },
  {
    title: "Core Computer Science",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "Computer Networks",
      "DBMS",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "VS Code",
      "Postman",
      "Jupyter Notebook",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex items-center justify-center py-16 sm:py-20"
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white"
          >
            Technical Skills
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-3 text-sm sm:text-base text-zinc-400 max-w-xl mx-auto"
          >
            A comprehensive toolkit across modern web architectures, intelligent AI systems, and robust core fundamentals.
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-6 transition-all duration-200 hover:border-blue-400/40"
            >
              <h3 className="mb-4 text-base font-bold bg-gradient-to-r from-emerald-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg border border-blue-500/15 bg-blue-500/5 px-3 py-1 text-xs sm:text-sm font-medium text-slate-200 transition-all duration-150 hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:text-emerald-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

