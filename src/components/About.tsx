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
          I&apos;m Sushant Garg ,a Computer Science undergraduate at Punjab Engineering College, Chandigarh, and a passionate full-stack developer who cares deeply about performance, accessibility, and clean, scalable code. I enjoy building products that users genuinely love — taking ideas from concept to deployment with a focus on efficiency and thoughtful design.

          With a strong foundation in Data Structures and Algorithms, I constantly sharpen my problem-solving skills and strive to approach challenges from multiple perspectives. I’m deeply interested in the intersection of technology, business, and innovation, and I’m always exploring new tools, frameworks, and ideas to expand my capabilities. I believe in continuous learning, meaningful collaboration, and building solutions that are both creative and impactful.
        </p>
      </div>
    </SectionWrapper>
  );
}
