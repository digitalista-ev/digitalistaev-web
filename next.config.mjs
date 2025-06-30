/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development';

const nextConfig = {
    basePath: isDev ? '' : '/digitalistaev-web',
    assetPrefix: isDev ? '' : '/digitalistaev-web/',
    images: {
        unoptimized: true,
    },
    env: {
        NEXT_PUBLIC_BASE_PATH: isDev ? '' : '/digitalistaev-web', // src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/next.svg`}
    },
};

export default nextConfig;
