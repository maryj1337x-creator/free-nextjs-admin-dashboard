import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/free-nextjs-admin-dashboard",
  assetPrefix: "/free-nextjs-admin-dashboard/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
