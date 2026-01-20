import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["zod", "lucide-react"],
  },
  reactCompiler: true,
};

export default nextConfig;
