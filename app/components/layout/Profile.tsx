import Image from "next/image";
import { siteConfig } from "@/app/config/site";
import { MapPin, Mail } from "lucide-react";

export function Profile() {
  return (
    <div className="space-y-6">
      {/* Profile Image */}
      <div className="relative mb-8 flex justify-center lg:justify-start">
        <div className="absolute -inset-3 rounded-3xl bg-teal-400/10 blur-2xl transition-opacity duration-700 group-hover:opacity-70" />

        <div className="group relative h-40 w-36 overflow-hidden rounded-xl border border-slate-700/70 bg-slate-800/40 shadow-xl backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-teal-300/40 hover:shadow-teal-500/10">
          <Image
            src="/images/profile.jpg"
            alt={siteConfig.name}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
          <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />

          {/* Tech stack badge overlay */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full bg-gradient-to-t from-slate-950/90 to-transparent p-3 transition-transform duration-500 group-hover:translate-y-0">
            <div className="flex flex-wrap gap-1.5">
              {["React", "Next.js", "Angular"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-teal-400/20 px-2 py-0.5 text-[10px] font-medium text-teal-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Name with gradient */}
      <h1 className="text-4xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-teal-300 via-slate-200 to-teal-300 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
          {siteConfig.name}
        </span>
      </h1>

      {/* Role with icon */}
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-medium text-slate-300">
          {siteConfig.title}
        </h2>
        <span className="rounded-full bg-teal-400/10 px-2 py-0.5 text-xs font-medium text-teal-300">
          13+ yrs
        </span>
      </div>

      {/* Description - keep this as the width reference */}
      <p className="max-w-xs leading-relaxed text-slate-400">
        {siteConfig.description}
      </p>

      {/* Quick stats - NOW SAME WIDTH as description */}
      <div className="max-w-xs">
        <div className="grid grid-cols-2 gap-3 pt-2">
          <div className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-3 text-center backdrop-blur-sm">
            <div className="text-sm font-medium text-teal-300">13+</div>
            <div className="text-xs text-slate-400">Years Experience</div>
          </div>
          <div className="rounded-lg border border-slate-700/50 bg-slate-800/30 p-3 text-center backdrop-blur-sm">
            <div className="text-sm font-medium text-teal-300">5+</div>
            <div className="text-xs text-slate-400">Enterprise Projects</div>
          </div>
        </div>
      </div>

      {/* Location & contact - NOW SAME WIDTH */}
      <div className="max-w-xs space-y-1.5 pt-1 text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <MapPin className="h-3.5 w-3.5 text-teal-300/70" />
          <span>Antalya, Turkey</span>
        </div>
        <a
          href="mailto:your.email@example.com"
          className="flex items-center gap-2 transition-colors hover:text-teal-300"
        >
          <Mail className="h-3.5 w-3.5 text-teal-300/70" />
          <span>Contact me</span>
        </a>
      </div>
    </div>
  );
}
