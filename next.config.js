
/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_AI_AVAILABLE: process.env.GOOGLE_API_KEY ? 'true' : '',
  },
  transpilePackages: ['undici'],
  compiler: {
    styledComponents: false,
  },
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
