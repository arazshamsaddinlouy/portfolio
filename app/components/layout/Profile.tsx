import Image from "next/image";
import { siteConfig } from "@/app/config/site";
import { FiMail, FiMapPin } from "react-icons/fi";
import {
  FaGithub,
  FaLinkedin,
  FaUpwork,
  FaStackOverflow,
} from "react-icons/fa6";

export function Profile() {
  return (
    <header className="space-y-6">
      <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50">
        <Image
          src="/images/profile.jpg"
          alt={siteConfig.name}
          fill
          priority
          sizes="80px"
          className="object-cover"
        />
      </div>

      <div className="space-y-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-100 lg:text-3xl">
            {siteConfig.name}
          </h1>

          <p className="mt-1.5 text-sm text-slate-400">{siteConfig.title}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-slate-500">
          <span className="flex items-center gap-2">
            <FiMapPin className="h-3.5 w-3.5 text-teal-400/70" />
            {siteConfig.location}
          </span>

          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 transition-colors hover:text-teal-300"
          >
            <FiMail className="h-3.5 w-3.5 text-teal-400/70" />
            {siteConfig.email}
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-3 pt-1">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-teal-500/40 hover:bg-slate-800 hover:text-white"
          >
            <FaGithub className="h-5 w-5" />
          </a>

          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:bg-slate-800 hover:text-sky-400"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>

          <a
            href={siteConfig.links.upwork}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Upwork"
            className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-slate-800 hover:text-emerald-400"
          >
            <FaUpwork className="h-5 w-5" />
          </a>
          <a
            href={siteConfig.links.stackoverflow}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Stack Overflow"
            className="group flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/40 hover:bg-slate-800 hover:text-orange-400"
          >
            <FaStackOverflow className="h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
