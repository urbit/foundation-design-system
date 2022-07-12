const path = require("path");
const menu = require("./lib/menu.js");

module.exports = {
  reactStrictMode: false,
  // target: 'serverless',
  env: {
    layout: menu.get("pages/components/layout"),
    markdown: menu.get("pages/components/markdown"),
  },
  webpack: (config, { defaultLoaders, isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: "path-browserify",
        events: false,
      };
    }
    if (isServer) {
      config.externals.push("_http_common");
    }
    config.resolve.alias.stream = "stream-browserify";
    config.resolve.alias.zlib = "browserify-zlib";
    config.module.rules.push({
      test: /\.js?$/,
      include: [path.resolve(__dirname, "../src")],
      exclude: /node_modules/,
      use: defaultLoaders.babel,
    });
    // config.externals = {
    //   ...config.externals,
    //   canvas: "util",
    //   bufferutil: "bufferutil",
    //   "utf-8-validate": "utf-8-validate"
    // }
    return config;
  },
};
