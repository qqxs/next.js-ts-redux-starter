//next.config.js
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withPlugins = require("next-compose-plugins");

const isProd = process.env.NODE_ENV === "production";

module.exports = withPlugins([withBundleAnalyzer], {
  /* config options here */
  env: {
    customKey: "my-value",
  },
  // /docs/about
  // basePath: '/docs',
  reactStrictMode: true,
  // 静态资源前缀 可以使用CDN
  assetPrefix: isProd ? "" : "",
});
