/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    serverComponents: true,
  },
  images: {
    domains: ['storage.mjs.local'], // For MinIO storage
  },
};

module.exports = nextConfig;
