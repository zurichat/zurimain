module.exports = {
  root: true,
  extends: ["@zuri/custom"],
  parserOptions: {
    project: "./tsconfig.json",
    // eslint-disable-next-line no-undef
    tsconfigRootDir: __dirname
  }
};
