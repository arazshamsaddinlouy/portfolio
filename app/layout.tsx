import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Araz Shamsaddinlouy | Senior Front-end Engineer",
  description:
    "Senior Front-end Engineer with 11+ years of experience building scalable web applications using React, Angular, Next.js, TypeScript, and modern web technologies.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <div className="relative">
          <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.08),transparent_40%)]" />
          {children}
        </div>
      </body>
    </html>
  );
}
