import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Prevents ESLint errors from failing the build
  },
};

export default nextConfig;
