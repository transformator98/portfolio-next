import type { NextConfig } from 'next';
const path = require('path');

const nextConfig: NextConfig = {
  poweredByHeader: true,
  experimental: {
    optimizePackageImports: ['react'],
  },
  sassOptions: {
    prependData: `@import "public/styles/vars.scss";`,
    includePaths: [path.join(__dirname, 'styles')],
  },
  trailingSlash: true,
  reactStrictMode: true,
  typescript: {
    tsconfigPath: './tsconfig.json',
    ignoreBuildErrors: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
    ],
  },
  swcMinify: true,
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: [
  //       {
  //         loader: '@svgr/webpack',
  //         options: {
  //           icon: true,
  //         },
  //       },
  //     ],
  //   });

  //   return config;
  // },
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/robots',
      },
      {
        source: '/sitemap.xml',
        destination: '/sitemap',
      },
    ];
  },
};

export default nextConfig;
