import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/tebatso-portfolio" : "",
  assetPrefix: isProd ? "/tebatso-portfolio/" : "",
};

export default nextConfig;