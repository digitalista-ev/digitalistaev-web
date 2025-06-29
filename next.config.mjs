/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    basePath: isProd ? '/digitalistaev-web' : '',
    assetPrefix: isProd ? '/digitalistaev-web/' : '',
    images: {
        unoptimized: true, // нужно для next export
    },
};

export default nextConfig;
