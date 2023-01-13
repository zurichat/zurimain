/* eslint-env node */
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const path = require("path");

module.exports = webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    orgName: "zuri",
    projectName: "core",
    webpackConfigEnv
  });

  const standalonePlugin = defaultConfig.plugins.find(
    p => p.constructor.name === "StandaloneSingleSpaPlugin"
  );

  // TODO: change to zuri chat live link
  standalonePlugin.options.importMapUrl = "../root-config/src/importmap.json";
  //   standalonePlugin.options.importMapUrl = new URL("https://zuri.chat/importmap.json");

  const externals = [/^rxjs\/?.*$/];

  if (webpackConfigEnv.standalone) {
    externals.push("react", "react-dom");
  }

  return merge(defaultConfig, {
    // customizations go here
    externals,
    output: {
      path: path.join(__dirname, "..", "..", "dist")
    },
    resolve: {
      extensions: [".mjs", ".ts", ".tsx", ".js", ".jsx", ".wasm", ".json"]
    }
  });
};
