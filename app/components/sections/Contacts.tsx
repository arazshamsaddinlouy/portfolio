import { siteConfig } from "@/app/config/site";
import { FiMail, FiArrowRight } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden py-16"
    >
      {/* Dot Pattern Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(45, 212, 191, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-400/5 px-4 py-2 text-sm font-medium text-teal-300 backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
          </span>
          <span>Available for work</span>
        </div>

        <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl lg:text-5xl">
          Let's build something{" "}
          <span className="text-teal-300">great together</span>
        </h2>

        <p className="mt-6 leading-relaxed text-slate-400">
          I'm always interested in discussing new opportunities, challenging
          frontend projects, and building scalable digital experiences.
        </p>

        {/* CTA Button */}
        <div className="mt-8">
          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-flex items-center gap-2 rounded-lg bg-teal-400 px-8 py-3.5 text-sm font-semibold text-slate-900 transition-all hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-400/25"
          >
            <FiMail className="h-4 w-4" />
            <span>Get in touch</span>
            <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Divider */}
        <div className="mt-10 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent" />
          <span className="text-xs text-slate-500">or connect</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-slate-700/50 to-transparent" />
        </div>

        {/* Social Links */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <a
            href="mailto:${siteConfig.email}"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-slate-400 transition-colors hover:bg-teal-400/5 hover:text-teal-300"
          >
            <FiMail className="h-4 w-4" />
            <span>Email</span>
          </a>
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-slate-400 transition-colors hover:bg-teal-400/5 hover:text-teal-300"
          >
            <FaGithub className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm text-slate-400 transition-colors hover:bg-teal-400/5 hover:text-teal-300"
          >
            <FaLinkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Email */}
        <div className="mt-4">
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-slate-500 transition-colors hover:text-teal-300"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
}
