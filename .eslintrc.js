module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
    project: ['./tsconfig.json'],
  },
  env: {
    'react-native/react-native': true,
    es2021: true,
  },
  plugins: ['react', 'react-native', 'react-hooks', 'import', 'unicorn'],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended',
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      typescript: {
        project: ['tsconfig.json'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    // Include .prettierrc.js rules
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    // Disable node protocol
    'unicorn/prefer-node-protocol': 'off',
    // Disable prefer module
    'unicorn/prefer-module': 'off',
    // Disable unicorm/filename-case for App.tsx file
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
        ignore: ['App.tsx'],
      },
    ],
  },
};
