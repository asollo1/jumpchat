import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

module.exports = {
  images: {
    remotePatterns: [new URL('https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png')],
  },
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev']
}
export default nextConfig;
