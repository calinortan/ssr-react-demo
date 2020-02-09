module.exports = {
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  rules: {
    "react/prop-types": 0
  },
  globals: {
    M: "readonly"
  }
};
