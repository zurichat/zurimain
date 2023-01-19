/* eslint-env node */
const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");
const webpack = require("webpack");

module.exports = webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    orgName: "zuri",
    projectName: "ui",
    webpackConfigEnv
  });

  const externals = ["react", "react-dom", "react-router-dom"];

  const config = mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: "replace"
      }
    }
  })(defaultConfig, {
    // customize the webpack config here
    externals,
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            require.resolve("style-loader", {
              paths: [require.resolve("webpack-config-single-spa")]
            }),
            require.resolve("css-loader", {
              paths: [require.resolve("webpack-config-single-spa")]
            })
          ]
        }
      ]
    },
    output: {
      path: path.join(__dirname, "..", "..", "dist")
    },
    resolve: {
      extensions: [".mjs", ".ts", ".tsx", ".js", ".jsx", ".wasm", ".json"]
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: "react"
      })
    ]
  });

  return config;
};
