module.exports = {
  root: true,
  extends: ["@zuri/custom"],
  parserOptions: {
    ecmaVersion: 2020,
    project: "./tsconfig.json",
    // eslint-disable-next-line no-undef
    tsconfigRootDir: __dirname
  }
};
