/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.pexels.com', 't4.ftcdn.net', 'media.istockphoto.com', 'static.vecteezy.com'],  // Add all domains you are using
      },
    env: {
        OPENAI: process.env.OPENAI, // pulls from .env file
    },
};
// next.config.mjs

export default nextConfig;
