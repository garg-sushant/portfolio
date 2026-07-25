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
      "HTML",
      "CSS",
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
      "Websockets",
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
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Jupyter Notebook",
      "Docker",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="flex items-center justify-center px-4 py-24"
    >
      <div className="mx-auto w-full max-w-900px">

        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold text-white sm:text-4xl"
        >
          Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-center text-gray-400"
        >
          A diverse technical toolkit built through academic learning,
          competitive problem-solving, and hands-on development.
        </motion.p>

        {/* Skills Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)]"
            >
              <h3 className="mb-4 text-lg font-semibold text-purple-400">
                {category.title}
              </h3>

              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}