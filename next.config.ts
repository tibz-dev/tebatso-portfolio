import type { NextConfig } from "next";
import path from "path";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  ...(isGitHubPages && {
    output: "export",
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
    basePath: "/tebatso-portfolio",
    assetPrefix: "/tebatso-portfolio/",
  }),

  serverExternalPackages: ["pdfjs-dist"],

  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;