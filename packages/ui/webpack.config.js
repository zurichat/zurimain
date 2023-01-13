/* eslint-env node */
const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");

module.exports = webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    orgName: "zuri",
    projectName: "ui",
    webpackConfigEnv
  });

  const config = mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: "replace"
      }
    }
  })(defaultConfig, {
    // customize the webpack config here
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
    }
  });

  return config;
};
