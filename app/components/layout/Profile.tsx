import Image from "next/image";

import { siteConfig } from "@/app/config/site";

export function Profile() {
  return (
    <div>
      {/* Profile Image */}
      <div className="relative mb-8 flex justify-center lg:justify-start">
        <div className="absolute -inset-3 rounded-3xl bg-teal-400/10 blur-2xl" />

        <div
          className="
            group
            relative
            h-36
            w-32
            overflow-hidden
            rounded-lg
            border
            border-slate-700/70
            bg-slate-800/40
            shadow-xl
            backdrop-blur-sm
            transition-all
            duration-500
            hover:-translate-y-1
            hover:border-teal-300/40
          "
        >
          <Image
            src="/images/profile.jpg"
            alt={siteConfig.name}
            fill
            priority
            className="
              object-cover
              transition-transform
              duration-700
              group-hover:scale-105
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-slate-950/30
              via-transparent
              to-transparent
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-2xl
              ring-1
              ring-inset
              ring-white/10
            "
          />
        </div>
      </div>

      {/* Information */}
      <h1 className="text-4xl font-bold tracking-tight text-slate-200">
        {siteConfig.name}
      </h1>

      <h2 className="mt-3 text-lg font-medium text-slate-300">
        {siteConfig.title}
      </h2>

      <p className="mt-4 max-w-xs leading-relaxed text-slate-400">
        {siteConfig.description}
      </p>
    </div>
  );
}
