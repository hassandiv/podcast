/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "production.listennotes.com",
        port: "",
        // pathname: '/account123/**',
      },
    ],
  },
};

module.exports = nextConfig;
