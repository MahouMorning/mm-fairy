module.exports = {
  root: true,
  extends: [
    "google",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: ["tsconfig.json"],
    sourceType: "module",
  },
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
  },
};
