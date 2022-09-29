/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/duypham9895/image/upload/v1664465677/personal/rcrfw0avep18b2ppuon9.jpg",
  },
};

module.exports = nextConfig;
