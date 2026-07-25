"use client";

import SectionWrapper from "./SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="glass-card rounded-3xl px-8 py-12 sm:px-12 sm:py-16">
        <h2 className="text-center text-2xl font-semibold text-white sm:text-3xl">
          About
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-gray-400 sm:text-lg">
          I&apos;m Sushant Garg, a Computer Science undergraduate at Punjab Engineering College, Chandigarh, and a passionate full-stack developer with a growing focus on AI-powered applications. I enjoy building scalable, user-centric products that combine clean design, high performance, and thoughtful engineering—from concept to deployment.

          Alongside full-stack development, I&apos;ve been working with modern AI technologies, including Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), vector databases, and agentic AI workflows to build intelligent, real-world applications. With a strong foundation in Data Structures and Algorithms, I constantly sharpen my problem-solving skills and enjoy tackling complex challenges from multiple perspectives. I&apos;m deeply interested in the intersection of software engineering, artificial intelligence, and innovation, and I&apos;m always exploring new technologies to create impactful solutions while continuously learning and growing as a developer.
        </p>
      </div>
    </SectionWrapper>
  );
}
