// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;


import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "example.com", // Replace with the domain of your image URLs (e.g., "images.unsplash.com")
      "another-domain.com",
      "images.remotePatterns" // Add more domains as needed
    ],
    // Optionally, specify remote patterns for more control
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Wildcard to allow all domains (use cautiously)
      },
    ],
  },
};

export default nextConfig;