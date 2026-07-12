import type { NextConfig } from "next";

/**
 * Next.js configuration tuned for production performance:
 * - Image optimization defaults for Vercel
 * - Strict React mode for catching side effects early
 * - Powered-by header removed (security + cleanliness)
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
