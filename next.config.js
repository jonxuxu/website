/* eslint-disable */
const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");
const optimizedImages = require("next-optimized-images");
const AntdDayjsWebpackPlugin = require("antd-dayjs-webpack-plugin");

// const optimizedImages = require("next-optimized-images");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});

// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => {};
}

module.exports = withPlugins([
  // add a plugin with specific configuration
  [
    withCSS,
    {
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
      },
      ...withLess(
        withSass({
          lessLoaderOptions: {
            javascriptEnabled: true,
          },
        })
      ),
    },
  ],
  [
    withMDX,
    {
      pageExtensions: ["js", "jsx", "mdx"],
    },
  ],
  [
    optimizedImages,
    {
      /* config for next-optimized-images */
    },
  ],
  [new AntdDayjsWebpackPlugin()],
]);

// return withLess({
//   lessLoaderOptions: {
//     javascriptEnabled: true,
//     modifyVars: themeVariables, // make your antd custom effective
//   },
// });
