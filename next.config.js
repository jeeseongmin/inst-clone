/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com", "s3.amazonaws.com", "cdn.pixabay.com"],
  },
};

module.exports = nextConfig;
