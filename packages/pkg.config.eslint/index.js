module.exports = {
  // env: {
  //   "browser": true,
  //   "commonjs": true,
  //   "es6": true,
  //   "node": true
  // },
  // parser: "@typescript-eslint/parser",
  extends: ["next", "turbo", "prettier"],
  "plugins": ["react", "react-hooks"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "react-hooks/exhaustive-deps": "off",
  },
};
