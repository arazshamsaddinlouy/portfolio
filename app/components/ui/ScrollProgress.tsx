"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercentage =
        documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

      setProgress(scrollPercentage);
    };

    window.addEventListener("scroll", updateProgress);

    updateProgress();

    return () => {
      window.removeEventListener("scroll", updateProgress);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
      <div
        className="
          h-full
          bg-teal-300
          transition-[width]
          duration-150
        "
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}
