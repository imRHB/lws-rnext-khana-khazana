/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "source.unsplash.com",
            },
        ],
    },
    publicRuntimeConfig: {
        APP_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    },
};

export default nextConfig;
