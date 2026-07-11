import Image from "next/image";

interface CompanyLogoProps {
  src?: string;
  alt: string;
}

export function CompanyLogo({ src, alt }: CompanyLogoProps) {
  return (
    <div
      className="
        flex
        h-12
        w-12
        shrink-0
        items-center
        justify-center
        overflow-hidden
        rounded-xl
        border
        border-slate-700/70
        bg-white
        p-2
        shadow-sm
        transition
        duration-300
        group-hover:border-teal-300/40
      "
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={40}
          height={40}
          className="
            h-full
            w-full
            object-contain
          "
        />
      ) : (
        <span
          className="
            text-sm
            font-semibold
            text-slate-700
          "
        >
          {alt.charAt(0)}
        </span>
      )}
    </div>
  );
}
