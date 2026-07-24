"use client";

import Image from "next/image";
import { useState } from "react";
import { Expand, GraduationCap } from "lucide-react";
import CertificateModal from "../ui/CertificateModal";
import { courses } from "@/app/data/course";
import { SelectedCertificate } from "@/app/types/certificate";

export default function Courses() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<SelectedCertificate | null>(null);

  return (
    <>
      <section
        id="courses"
        className="scroll-mt-24 py-16"
        aria-labelledby="courses-heading"
      >
        <div className="mb-8">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-teal-400/20 bg-teal-400/10">
              <GraduationCap
                className="h-5 w-5 text-teal-300"
                aria-hidden="true"
              />
            </div>

            <h2
              id="courses-heading"
              className="text-2xl font-bold tracking-tight text-slate-200"
            >
              Courses & Certifications
            </h2>
          </div>

          <p className="max-w-2xl text-sm leading-6 text-slate-400">
            Selected courses that helped build the foundation of my frontend,
            design, SEO, and web development experience.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {courses.map((course) => (
            <article
              key={course.title}
              className="
                group
                overflow-hidden
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/40
                transition
                duration-300
                hover:-translate-y-1
                hover:border-teal-400/30
                hover:bg-slate-900/70
              "
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-800">
                <Image
                  src={course.image}
                  alt={`${course.title} course certificate`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

                <button
                  type="button"
                  onClick={() =>
                    setSelectedCertificate({
                      image: course.image,
                      title: course.title,
                    })
                  }
                  aria-label={`View ${course.title} certificate`}
                  className="
                    absolute
                    bottom-3
                    right-3
                    flex
                    items-center
                    gap-2
                    rounded-lg
                    border
                    border-white/20
                    bg-slate-950/75
                    px-3
                    py-2
                    text-xs
                    font-medium
                    text-slate-200
                    opacity-100
                    backdrop-blur-md
                    transition
                    hover:border-teal-400/50
                    hover:text-teal-300
                    sm:opacity-0
                    sm:group-hover:opacity-100
                  "
                >
                  <Expand className="h-4 w-4" aria-hidden="true" />
                  View Certificate
                </button>
              </div>

              <div className="p-5">
                <h3 className="font-semibold text-slate-200 transition group-hover:text-teal-300">
                  {course.title}
                </h3>

                {course.provider && (
                  <p className="mt-1 text-xs text-slate-500">
                    {course.provider}
                  </p>
                )}

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {course.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {course.skills.map((skill) => (
                    <li
                      key={skill}
                      className="
                        rounded-full
                        border
                        border-teal-400/10
                        bg-teal-400/5
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-teal-300
                      "
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedCertificate && (
        <CertificateModal
          isOpen
          image={selectedCertificate.image}
          title={selectedCertificate.title}
          onClose={() => setSelectedCertificate(null)}
        />
      )}
    </>
  );
}
