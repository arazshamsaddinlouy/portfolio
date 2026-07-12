"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiHome, FiArrowLeft, FiSearch } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function NotFound() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<
    Array<{
      width: string;
      height: string;
      left: string;
      top: string;
      duration: string;
      delay: string;
    }>
  >([]);

  useEffect(() => {
    setMounted(true);
    // Generate particles only on client
    const newParticles = Array.from({ length: 20 }, () => ({
      width: Math.random() * 6 + 2 + "px",
      height: Math.random() * 6 + 2 + "px",
      left: Math.random() * 100 + "%",
      top: Math.random() * 100 + "%",
      duration: Math.random() * 10 + 10 + "s",
      delay: Math.random() * 5 + "s",
    }));
    setParticles(newParticles);
  }, []);

  // Don't render animations during SSR
  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
        <div className="max-w-md w-full text-center relative">
          <div className="relative">
            <h1 className="text-9xl font-bold tracking-tight text-slate-200 select-none">
              404
            </h1>
          </div>
          <div className="my-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-teal-400/50 to-transparent" />
          <h2 className="text-2xl font-semibold text-slate-200">
            Page not found
          </h2>
          <p className="mt-3 text-slate-400">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-900 transition-all hover:bg-teal-300"
            >
              <FiHome className="h-4 w-4" />
              <span>Go Home</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Dot Pattern Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 2px 2px, rgba(45, 212, 191, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Animated Gradient Orbs */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-teal-400/5 blur-3xl animate-pulse" />
      <div
        className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-400/5 blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-purple-400/5 blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      {/* Floating Particles - Fixed hydration issue */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-teal-400/10 animate-float"
            style={{
              width: particle.width,
              height: particle.height,
              left: particle.left,
              top: particle.top,
              animationDuration: particle.duration,
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Decorative SVG Elements */}
      <div className="absolute top-10 left-10 opacity-20 animate-spin-slow">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <circle
            cx="20"
            cy="20"
            r="18"
            stroke="#2DD4BF"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <circle cx="20" cy="20" r="12" stroke="#2DD4BF" strokeWidth="0.5" />
        </svg>
      </div>
      <div
        className="absolute bottom-10 right-10 opacity-20 animate-spin-slow"
        style={{ animationDirection: "reverse" }}
      >
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <circle
            cx="15"
            cy="15"
            r="13"
            stroke="#60A5FA"
            strokeWidth="1"
            strokeDasharray="3 3"
          />
          <circle cx="15" cy="15" r="8" stroke="#60A5FA" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-md w-full text-center relative">
        {/* Animated 404 with Glitch Effect */}
        <div className="relative group">
          <h1 className="text-9xl font-bold tracking-tight text-slate-200 select-none">
            404
          </h1>

          {/* Glitch Effect */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <h1 className="text-9xl font-bold tracking-tight text-teal-400/20 select-none blur-sm">
              404
            </h1>
          </div>

          {/* Decorative orbs */}
          <div className="absolute -top-6 -right-6 h-20 w-20 rounded-full bg-teal-400/10 blur-xl animate-pulse" />
          <div
            className="absolute -bottom-6 -left-6 h-16 w-16 rounded-full bg-blue-400/10 blur-xl animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        {/* Animated Divider */}
        <div className="my-6 h-px w-24 mx-auto bg-gradient-to-r from-transparent via-teal-400/50 to-transparent animate-pulse" />

        {/* Icon with Search */}
        <div className="flex justify-center mb-4">
          <div className="rounded-full bg-teal-400/10 p-4 animate-bounce-slow">
            <FiSearch className="h-8 w-8 text-teal-300" />
          </div>
        </div>

        {/* Message */}
        <h2 className="text-2xl font-semibold text-slate-200">
          Page not found
        </h2>
        <p className="mt-3 text-slate-400">
          Oops! The page you're looking for seems to have wandered off into the
          digital wilderness.
        </p>

        {/* Navigation Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 rounded-lg bg-teal-400 px-6 py-3 text-sm font-semibold text-slate-900 transition-all hover:bg-teal-300 hover:shadow-lg hover:shadow-teal-400/25 hover:scale-105"
          >
            <FiHome className="h-4 w-4 transition-transform group-hover:scale-110" />
            <span>Go Home</span>
          </Link>
          <button
            onClick={() => router.back()}
            className="group inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-medium text-slate-300 transition-all hover:border-teal-400/30 hover:bg-teal-400/5 hover:text-teal-300 hover:scale-105"
          >
            <FiArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Decorative Dots with Animation */}
        <div className="mt-8 flex justify-center gap-3">
          <span className="h-2 w-2 rounded-full bg-teal-400/20 animate-pulse" />
          <span
            className="h-2 w-2 rounded-full bg-teal-400/40 animate-pulse"
            style={{ animationDelay: "0.2s" }}
          />
          <span
            className="h-2 w-2 rounded-full bg-teal-400/20 animate-pulse"
            style={{ animationDelay: "0.4s" }}
          />
          <span
            className="h-2 w-2 rounded-full bg-teal-400/40 animate-pulse"
            style={{ animationDelay: "0.6s" }}
          />
          <span
            className="h-2 w-2 rounded-full bg-teal-400/20 animate-pulse"
            style={{ animationDelay: "0.8s" }}
          />
        </div>

        {/* Funny Message */}
        <p className="mt-6 text-xs text-slate-500">
          Error 404 • Even the best developers get lost sometimes
        </p>
      </div>
    </div>
  );
}
