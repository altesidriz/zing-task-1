/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**' //'**' for all hostnames
            }
        ]
    }
};

export default nextConfig;
