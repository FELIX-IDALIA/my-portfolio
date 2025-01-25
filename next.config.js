/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    assetPrefix: isProd ? '/my-portfolio/' : '',
    basePath: isProd ? '/my-portfolio' : '',
}
    
module.exports = nextConfig
