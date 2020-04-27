module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  parserOptions: {
    lib: 'dom',
    ecmaVersion: 2020,
    sourceType: 'module',
    project: 'tsconfig.json',
    tsconfigRootDir: '.',
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  settings: {
    react: {
      version: 'detect'
    },
  },
  rules: {
    'react/jsx-filename-extension': 'off',
  },
};
