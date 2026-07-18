import Image from "next/image";
import { siteConfig } from "@/app/config/site";
import { FiMail, FiMapPin } from "react-icons/fi";

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
            <FiMapPin className="h-3.5 w-3.5 shrink-0 text-teal-400/70" />
            {siteConfig.location}
          </span>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 transition-colors hover:text-teal-300"
          >
            <FiMail className="h-3.5 w-3.5 shrink-0 text-teal-400/70" />
            {siteConfig.email}
          </a>
        </div>
      </div>
    </header>
  );
}
