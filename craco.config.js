const CracoLessPlugin = require("craco-less");
const BabelRcPlugin = require("@jackwilsdon/craco-use-babelrc");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1890FF",
              "@font-size-base": "16px",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
    { plugin: BabelRcPlugin },
  ],
  webpack: {
    configure: (webpackConfig) => {
      const oneOfRules = webpackConfig.module.rules.find((x) => !!x.oneOf)
        .oneOf;
      oneOfRules.unshift({
        test: /\.mdx?$/,
        use: ["babel-loader", "@mdx-js/loader"],
      });
      webpackConfig.node.fs = "empty";
      return webpackConfig;
    },
  },
};
