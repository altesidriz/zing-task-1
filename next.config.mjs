/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com' //'**' for all hostnames
            }
        ]
    }
};

export default nextConfig;
