import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'maxbess.sirv.com',
                pathname: '/**'

            },
            {
                protocol: 'https',
                hostname: 'http://www.w3.org',
                pathname: '/**'
            }
        ]
    }

};

export default nextConfig;
