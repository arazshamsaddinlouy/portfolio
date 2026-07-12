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

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 100,
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
            {/* Hero - Fade up with longer duration */}
            <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0">
              <Hero />
            </div>

            {/* About - Fade right */}
            <div
              data-aos="fade-right"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <About />
            </div>

            {/* Experience - Fade left */}
            <div
              data-aos="fade-left"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <Experience />
            </div>

            {/* Projects - Zoom in */}
            <div data-aos="fade-up" data-aos-duration="1200" data-aos-delay="0">
              <Projects />
            </div>

            {/* Skills - Fade up with shorter duration */}
            <div
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              <Skills />
            </div>

            {/* Education - Fade up */}
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="500"
            >
              <Education />
            </div>

            {/* Contact - Fade up with longer duration */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="600"
            >
              <Contact />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
