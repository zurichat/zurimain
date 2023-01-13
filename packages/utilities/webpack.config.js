import Dotenv from "dotenv-webpack";
import { findUpSync } from "find-up";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import singleSpaDefaults from "webpack-config-single-spa";
import { merge } from "webpack-merge";

export default webpackConfigEnv => {
  const defaultConfig = singleSpaDefaults({
    orgName: "zuri",
    projectName: "utilities",
    webpackConfigEnv
  });

  const findEnv = () => findUpSync(process.env.ENV_FILE || ".env");
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    plugins: [
      new Dotenv({
        path: findEnv()
      })
    ],
    output: {
      path: path.join(__dirname, "..", "..", "dist")
    },
    resolve: {
      extensions: [".mjs", ".ts", ".tsx", ".js", ".jsx", ".wasm", ".json"]
    }
  });
};
