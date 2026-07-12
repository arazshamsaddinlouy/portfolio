"use client";

import { navigation } from "@/app/config/navigation";
import { useScrollSpy } from "@/app/hooks/useScrollSpy";

export function Navigation() {
  const sectionIds = navigation.map((item) => item.href.replace("#", ""));

  const activeSection = useScrollSpy(sectionIds);

  return (
    <nav className="mt-4 hidden lg:block">
      <ul className="space-y-4">
        {navigation.map((item) => {
          const sectionId = item.href.replace("#", "");
          const isActive = activeSection === sectionId;

          return (
            <li key={item.name}>
              <a
                href={item.href}
                className={`group flex items-center text-sm font-medium transition ${
                  isActive
                    ? "text-slate-200"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <span
                  className={`mr-4 h-px transition-all duration-300 ${
                    isActive
                      ? "w-16 bg-slate-200"
                      : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                  }`}
                />

                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
