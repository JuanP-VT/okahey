/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: ["images.ctfassets.net", "images.unsplash.com"] },
    ],
  },
};

export default nextConfig;
