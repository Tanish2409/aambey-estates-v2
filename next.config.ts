import type { NextConfig } from "next";
import "@/env";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "picsum.photos" }],
  },
};
export default nextConfig;
