"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "./components/layout/Sidebar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contacts";
import Education from "./components/sections/Education";
import Experience from "./components/sections/Experience";
import Hero from "./components/sections/Hero";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import ScrollProgress from "./components/ui/ScrollProgress";
import OpenSource from "./components/sections/OpenSoucePackages";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 400, // Fast transition
      easing: "ease-out-cubic",
      once: true,
      offset: 30,
      delay: 0,
      disable: window.innerWidth < 768,
    });

    window.addEventListener("resize", () => {
      AOS.refresh();
    });

    return () => {
      window.removeEventListener("resize", () => {
        AOS.refresh();
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <ScrollProgress />

      {/* Dot Grid Background */}
      <div
        className="
          pointer-events-none
          fixed
          inset-0
          -z-20
          bg-[radial-gradient(#94a3b8_1px,transparent_1px)]
          bg-[size:40px_40px]
          opacity-[0.08]
        "
      />

      {/* Ambient Glow Background */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            -top-40
            right-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-teal-400/10
            blur-[120px]
          "
        />
        <div
          className="
            absolute
            bottom-0
            left-0
            h-[400px]
            w-[400px]
            rounded-full
            bg-blue-400/10
            blur-[120px]
          "
        />
      </div>

      {/* Main Layout */}
      <div
        className="
          mx-auto
          min-h-screen
          max-w-screen-xl
          px-6
          py-12
          lg:px-8
          lg:py-0
        "
      >
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Sidebar />

          <main
            className="
              pt-24
              pb-[50vh]
              lg:w-1/2
              lg:py-24
              lg:pb-[20vh]
            "
          >
            {/* Hero - No animation to keep it instant */}
            <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="0">
              <Hero />
            </div>

            {/* About */}
            <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="50">
              <About />
            </div>

            {/* Experience */}
            <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="50">
              <Experience />
            </div>

            {/* Projects */}
            <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="50">
              <Projects />
            </div>

            {/* Open Source Projects */}
            <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="50">
              <OpenSource />
            </div>

            {/* Skills */}
            <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="50">
              <Skills />
            </div>

            {/* Education */}
            <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="50">
              <Education />
            </div>

            {/* Contact */}
            <div data-aos="fade-up" data-aos-duration="400" data-aos-delay="50">
              <Contact />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
