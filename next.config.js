/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static.wixstatic.com'],
    remotePatterns: [
      { protocol: 'https', hostname: 'static.wixstatic.com', pathname: '/**' },
    ],
  },
};
module.exports = nextConfig;
