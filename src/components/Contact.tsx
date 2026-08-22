"use client";

import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { Mail, ArrowUpRight, Check } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const contactLinks = [
  {
    id: "email",
    label: "Email",
    value: "sgarg9031@gmail.com",
    href: "mailto:sgarg9031@gmail.com",
    icon: <Mail size={20} className="text-emerald-400" />,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "in/sushant-garg-4b0a37284",
    href: "https://www.linkedin.com/in/sushant-garg-4b0a37284/",
    icon: <FaLinkedin size={20} className="text-blue-400" />,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/garg-sushant",
    href: "https://github.com/garg-sushant",
    icon: <FaGithub size={20} className="text-emerald-400" />,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:sgarg9031@gmail.com?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${formData.name || "Visitor"}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoUrl, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          Get in Touch
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
          Have a question, opportunity, or collaboration in mind? Send a direct message or connect on socials.
        </p>
      </div>

      <div className="mx-auto max-w-5xl grid gap-6 lg:grid-cols-12 items-start">

        {/* LEFT COLUMN: CONTACT FORM */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 lg:col-span-7 border border-blue-500/20 bg-[#071524]/90 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* NAME INPUT */}
            <div>
              <label
                htmlFor="name"
                className="block font-mono text-xs font-semibold text-emerald-400 mb-2"
              >
                name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your name"
                className="w-full rounded-xl border border-blue-500/20 bg-[#040c16] px-4 py-3 text-sm text-white placeholder-slate-500 transition-all duration-150 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400/30"
              />
            </div>

            {/* EMAIL INPUT */}
            <div>
              <label
                htmlFor="email"
                className="block font-mono text-xs font-semibold text-emerald-400 mb-2"
              >
                email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="you@example.com"
                className="w-full rounded-xl border border-blue-500/20 bg-[#040c16] px-4 py-3 text-sm text-white placeholder-slate-500 transition-all duration-150 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400/30"
              />
            </div>

            {/* MESSAGE INPUT */}
            <div>
              <label
                htmlFor="message"
                className="block font-mono text-xs font-semibold text-emerald-400 mb-2"
              >
                message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="What's on your mind?"
                className="w-full resize-none rounded-xl border border-blue-500/20 bg-[#040c16] px-4 py-3 text-sm text-white placeholder-slate-500 transition-all duration-150 focus:border-blue-400 focus:outline-none focus:ring-1 focus:ring-blue-400/30"
              />
            </div>

            {/* SUBMIT BUTTON (SEA GREEN & BLUE GRADIENT) */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:brightness-110 hover:scale-[1.01] active:scale-[0.99]"
            >
              {submitted ? (
                <>
                  <Check size={18} />
                  <span>Opening email client...</span>
                </>
              ) : (
                <>
                  <span>Send message</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </>
              )}
            </button>

          </form>
        </div>

        {/* RIGHT COLUMN: CONTACT CHANNELS */}
        <div className="flex flex-col gap-3.5 lg:col-span-5">
          {contactLinks.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card flex items-center justify-between rounded-2xl border border-blue-500/20 bg-[#071524]/90 p-5 transition-all duration-200 hover:border-emerald-400/40 hover:bg-emerald-500/5"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-white transition-transform duration-200 group-hover:scale-105">
                  {item.icon}
                </div>
                <div>
                  <p className="font-mono text-xs font-semibold text-blue-400">{item.label}</p>
                  <p className="mt-0.5 text-sm sm:text-base font-semibold text-white group-hover:text-emerald-300 transition-colors">
                    {item.value}
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                className="text-slate-500 transition-all duration-150 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          ))}
        </div>

      </div>
    </SectionWrapper>
  );
}







