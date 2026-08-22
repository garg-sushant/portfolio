"use client";

import { useState, useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import { Mail, ArrowUpRight, Check, Paperclip, X, Loader2, AlertCircle } from "lucide-react";
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
  const [attachment, setAttachment] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // Max 10MB limit
      if (file.size > 10 * 1024 * 1024) {
        setErrorMsg("File size must be under 10MB.");
        return;
      }
      setErrorMsg(null);
      setAttachment(file);
    }
  };

  const removeAttachment = () => {
    setAttachment(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg(null);

    try {
      const payload = new FormData();
      payload.append("name", formData.name);
      payload.append("email", formData.email);
      payload.append("message", formData.message);
      if (attachment) {
        payload.append("file", attachment);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: payload,
      });

      const data = await res.json();

      if (!res.ok && data.error) {
        throw new Error(data.error);
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setAttachment(null);
      if (fileInputRef.current) fileInputRef.current.value = "";

      setTimeout(() => {
        setSubmitted(false);
      }, 6000);
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again.";
      setErrorMsg(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
          Get in Touch
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
          Send a direct message with optional attachments. Delivered straight to{" "}
          <span className="text-emerald-300 font-medium">sgarg9031@gmail.com</span>.
        </p>
      </div>

      <div className="mx-auto max-w-5xl grid gap-6 lg:grid-cols-12 items-start">

        {/* LEFT COLUMN: DIRECT IN-PAGE CONTACT FORM */}
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

            {/* ATTACHMENT SECTION */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block font-mono text-xs font-semibold text-blue-400">
                  attachment (optional)
                </label>
                <span className="text-[11px] text-slate-500">PDF, DOCX, ZIP, PNG, JPG (up to 10MB)</span>
              </div>

              {!attachment ? (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-blue-500/30 bg-[#040c16]/70 px-4 py-3 text-xs text-slate-300 transition-all duration-150 hover:border-emerald-400/50 hover:bg-blue-500/5 hover:text-white"
                >
                  <Paperclip size={15} className="text-emerald-400" />
                  <span>Click to attach a file</span>
                </div>
              ) : (
                <div className="flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-xs text-emerald-200">
                  <div className="flex items-center gap-2 truncate max-w-[85%]">
                    <Paperclip size={14} className="text-emerald-400 shrink-0" />
                    <span className="truncate font-medium">{attachment.name}</span>
                    <span className="text-[11px] text-emerald-400/80">
                      ({Math.round(attachment.size / 1024)} KB)
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={removeAttachment}
                    className="p-1 text-slate-400 hover:text-white transition-colors"
                    aria-label="Remove attachment"
                  >
                    <X size={14} />
                  </button>
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.doc,.docx,.txt,.zip,.png,.jpg,.jpeg"
              />
            </div>

            {/* ERROR ALERT */}
            {errorMsg && (
              <div className="flex items-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-300">
                <AlertCircle size={15} className="shrink-0 text-red-400" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* SUCCESS ALERT */}
            {submitted && (
              <div className="flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/15 p-3 text-xs font-medium text-emerald-200">
                <Check size={16} className="shrink-0 text-emerald-400" />
                <span>Message sent directly to sgarg9031@gmail.com!</span>
              </div>
            )}

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 px-6 py-3.5 text-sm sm:text-base font-bold text-white shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:brightness-110 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin text-white" />
                  <span>Sending message...</span>
                </>
              ) : submitted ? (
                <>
                  <Check size={18} />
                  <span>Sent successfully!</span>
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








