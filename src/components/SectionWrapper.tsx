"use client";

import { motion } from "framer-motion";

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`py-16 sm:py-20 md:py-24 ${className}`}
    >
      {children}
    </motion.section>
  );
}