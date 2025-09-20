/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_AI_AVAILABLE: process.env.GOOGLE_API_KEY ? 'true' : '',
  },
};

export default nextConfig;
