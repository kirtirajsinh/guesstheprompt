/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "dreamtrain.s3.us-west-2.amazonaws.com",
      "cdn.discordapp.com",
    ],
  },
};

module.exports = nextConfig;
