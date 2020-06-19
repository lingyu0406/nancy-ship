module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "import/extensions": [1, "never", { "web.js": "always", "json": "always" }],
    "import/no-extraneous-dependencies": [2, { "devDependencies": true }],
    "import/no-unresolved": [0, { "ignore": ["antd-mobile"] }],
    "react/jsx-filename-extension": [0],
    "eqeqeq": 2
  },
};
