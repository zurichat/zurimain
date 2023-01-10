module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  globals: {
    process: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "important-stuff",
    "turbo",
    "prettier"
  ],
  plugins: ["react"],
  rules: {
    "react/jsx-key": "off"
  }
};
