import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "scontent.fceb6-4.fna.fbcdn.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "hawk.live",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "th.bing.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
