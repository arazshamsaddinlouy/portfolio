"use client";

import Image from "next/image";
import { useEffect } from "react";
import { X } from "lucide-react";

type CertificateModalProps = {
  isOpen: boolean;
  image: string;
  title: string;
  onClose: () => void;
};

export default function CertificateModal({
  isOpen,
  image,
  title,
  onClose,
}: CertificateModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-slate-950/90
        p-4
        backdrop-blur-sm
      "
      role="dialog"
      aria-modal="true"
      aria-label={`${title} certificate preview`}
      onMouseDown={onClose}
    >
      <div
        className="
          relative
          flex
          max-h-[92vh]
          w-full
          max-w-6xl
          items-center
          justify-center
          overflow-hidden
          rounded-2xl
          border
          border-slate-700
          bg-slate-900
          p-3
          shadow-2xl
        "
        onMouseDown={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close certificate preview"
          className="
            absolute
            right-4
            top-4
            z-10
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            border-slate-600
            bg-slate-950/80
            text-slate-300
            transition
            hover:border-teal-400/50
            hover:bg-slate-800
            hover:text-teal-300
          "
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative h-[85vh] w-full">
          <Image
            src={image}
            alt={`${title} certificate`}
            fill
            priority
            sizes="100vw"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
