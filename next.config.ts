// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Wildcard to allow all domains (use cautiously)
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '5mb', // Increase limit as needed
    },
  },
};

export default nextConfig;
