import SectionHeadingProps from "@/app/types/section-heading-props";

export function SectionHeading({ title, subtitle, icon }: SectionHeadingProps) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3">
        <span className="h-6 w-1 rounded-full bg-teal-400" />

        {icon && <span className="text-xl text-teal-300">{icon}</span>}

        <h2
          className="
            text-2xl
            font-bold
            tracking-tight
            text-slate-100
          "
        >
          {title}
        </h2>
      </div>

      {subtitle && (
        <p
          className="
            mt-3
            ml-4
            max-w-2xl
            text-sm
            leading-relaxed
            text-slate-400
          "
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
