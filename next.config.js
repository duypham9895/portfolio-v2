/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  env: {
    NEXT_PUBLIC_SANITY_DATASET: "production",
    NEXT_PUBLIC_SANITY_PROJECT_ID: "z7s4t9k2",
    NEXT_PUBLIC_BASE_URL: "http://localhost:3000",
  },
};

module.exports = nextConfig;
