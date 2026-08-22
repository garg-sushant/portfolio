"use client";

import SectionWrapper from "./SectionWrapper";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

const contactCards = [
  {
    id: "email",
    title: "Email Me",
    label: "Send via Outlook / Mail Client",
    value: "sgarg9031@gmail.com",
    href: "mailto:sgarg9031@gmail.com",
    icon: <Mail size={24} className="text-emerald-400" />,
    badge: "Direct Email",
    gradient: "hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
  },
  {
    id: "whatsapp",
    title: "WhatsApp & Call",
    label: "Direct Chat & Quick Inquiries",
    value: "+91 8847005306",
    href: "https://wa.me/918847005306",
    icon: <FaWhatsapp size={24} className="text-emerald-400" />,
    badge: "Instant Chat",
    gradient: "hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    label: "Professional Profile & Network",
    value: "linkedin.com/in/sushant-garg",
    href: "https://www.linkedin.com/in/sushant-garg-4b0a37284/",
    icon: <FaLinkedin size={24} className="text-blue-400" />,
    badge: "Connect",
    gradient: "hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]",
  },
  {
    id: "github",
    title: "GitHub",
    label: "Open Source Code & Repositories",
    value: "github.com/garg-sushant",
    href: "https://github.com/garg-sushant",
    icon: <FaGithub size={24} className="text-emerald-400" />,
    badge: "Repositories",
    gradient: "hover:border-emerald-400/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
  },
];


export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          Let&apos;s Connect & Build
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
          Reach out directly via email, check my resume, or connect across professional platforms.
        </p>
      </div>

      <div className="mx-auto max-w-4xl grid gap-5 sm:grid-cols-2">
        {contactCards.map((card) => (
          <a
            key={card.id}
            href={card.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group glass-card flex flex-col justify-between rounded-2xl border border-blue-500/20 bg-[#071524]/90 p-6 sm:p-7 transition-all duration-200 hover:-translate-y-1 ${card.gradient}`}
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-transform duration-200 group-hover:scale-110">
                  {card.icon}
                </div>
                <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-300">
                  {card.badge}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                {card.title}
              </h3>
              <p className="mt-1 text-xs text-slate-400">
                {card.label}
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4">
              <span className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-white transition-colors truncate max-w-[80%]">
                {card.value}
              </span>
              <ArrowUpRight
                size={18}
                className="text-slate-400 transition-all duration-200 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          </a>
        ))}
      </div>
    </SectionWrapper>
  );
}










