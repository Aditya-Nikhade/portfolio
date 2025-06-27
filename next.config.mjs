/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ Prevents ESLint errors from failing the build
  },
};

export default nextConfig;