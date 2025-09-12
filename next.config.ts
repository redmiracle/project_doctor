import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'maxbess.sirv.com',
                pathname: '/**'

            }
        ]
    }

};

export default nextConfig;
