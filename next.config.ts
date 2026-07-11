import type { NextConfig } from "next";
const path = require("path");

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    // Point this to the folder containing your main project files
    // and the lockfile you actually use (e.g., /Users/vidaniazi/Desktop/portfolio)
    root: path.join(__dirname),
  },
};

export default nextConfig;
