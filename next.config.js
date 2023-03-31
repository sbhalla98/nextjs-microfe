/** @type {import('next').NextConfig} */

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const nextConfig = {
  reactStrictMode: false,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'next1',
        filename : "nextjs.js",
        remotes: {
          remote: "remote@https://react-mf-remote-n5wq9jj42-sbhalla98.vercel.app/app.js",
        },
      })
    );

    return config;
  },
}

module.exports = nextConfig
