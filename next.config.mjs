/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  // Se quiser ignorar o ESLint no build (opcional de emergência):
  // eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;
