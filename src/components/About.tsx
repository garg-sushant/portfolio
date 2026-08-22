"use client";

import SectionWrapper from "./SectionWrapper";

const pillars = [
  {
    title: "Education",
    desc: "Computer Science @ Punjab Engineering College, Chandigarh",
    icon: "🎓",
  },
  {
    title: "Specialization",
    desc: "Full-Stack Development, Agentic AI, LLMs & RAG Architectures",
    icon: "⚡",
  },
  {
    title: "Problem Solving",
    desc: "Strong foundation in Data Structures, Algorithms & System Design",
    icon: "🧩",
  },
];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="glass-card rounded-2xl px-6 py-10 sm:px-10 sm:py-12 md:px-12 md:py-14">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          About Me
        </h2>

        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-sm sm:text-base leading-relaxed text-slate-300">
          <p>
            I&apos;m <span className="font-semibold text-white">Sushant Garg</span>, a Computer Science undergraduate at Punjab Engineering College (PEC), Chandigarh, focused on full-stack web engineering and AI systems development. I build production-grade applications combining intuitive architecture, high performance, and modern design.
          </p>

          <p>
            My technical focus encompasses modern AI engineering—including <span className="text-blue-300 font-medium">Large Language Models (LLMs)</span>, <span className="text-emerald-300 font-medium">Retrieval-Augmented Generation (RAG)</span>, vector indexing, and multi-agent workflows with <span className="text-teal-300 font-medium">LangGraph & MCP</span>.
          </p>

          <p>
            With a solid foundation in <span className="text-blue-300 font-medium">Data Structures and Algorithms</span>, I actively refine analytical problem-solving skills across competitive programming platforms and apply them to build reliable, high-throughput web systems.
          </p>
        </div>

        {/* Highlights Pillars */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-blue-500/20 bg-blue-500/[0.03] p-5 text-center transition-all duration-200 hover:border-emerald-400/40 hover:bg-emerald-500/[0.05]"
            >
              <div className="text-2xl mb-2">{pillar.icon}</div>
              <h3 className="text-sm sm:text-base font-semibold text-white">{pillar.title}</h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}




