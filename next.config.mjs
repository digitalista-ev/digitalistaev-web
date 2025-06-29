/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
    basePath: isDev ? '' : '/digitalistaev-web',
    assetPrefix: isDev ? '' : '/digitalistaev-web/',
    images: {
        unoptimized: true, // нужно для next export
    },
};

export default nextConfig;
