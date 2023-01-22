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
    "plugin:react/jsx-runtime",
    "important-stuff",
    "turbo",
    "prettier"
  ],
  plugins: ["react"],
  rules: {
    "react/jsx-key": "off"
  },
  settings: {
    react: {
      version: "detect"
    }
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.tsx"],
      extends: [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
      ],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"]
    }
  ]
};
