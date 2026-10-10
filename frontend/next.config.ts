import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "api.nexl.sansadigital.com", // Add this
      },
      {
        // Cloudinary-hosted landing page images (own account only)
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dj52zkarc/**",
      },
      {
        // Local Laravel backend (uploaded images in development)
        protocol: "http",
        hostname: "localhost",
        port: "8000",
      },
    ],
  },
};

export default nextConfig;
