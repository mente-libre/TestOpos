
/** @type {import('next').NextConfig} */
import withPWA from 'next-pwa';

const nextConfig = {
  // Your existing Next.js config here
};

export default withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})(nextConfig);
