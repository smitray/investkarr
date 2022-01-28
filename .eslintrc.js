module.exports = {
  root: true,
  env: {
    'react-native/react-native': true,
    es2021: true,
  },
  overrides: [
    {
      files: '*.js',
      extends: ['airbnb', 'prettier'],
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2021,
        sourceType: 'module',
        project: ['./tsconfig.json'],
      },
      plugins: ['react', 'import', '@typescript-eslint', 'prettier'],
      extends: [
        'airbnb-typescript',
        'airbnb/hooks',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        '@react-native-community',
        'plugin:import/typescript',
        'plugin:promise/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:unicorn/recommended',
      ],
      settings: {
        react: {
          version: 'detect',
        },
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: 'packages/*/tsconfig.json',
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
        // Disable App.tsx filename error
        'unicorn/filename-case': [
          'error',
          { case: 'kebabCase', ignore: ['App.tsx'] },
        ],
        // Disable nested ternary
        'unicorn/no-nested-ternary': 'off',
        // Disable function scope
        'unicorn/consistent-function-scoping': [
          1,
          {
            checkArrowFunctions: false,
          },
        ],
        // Disable inline style
        'react-native/no-inline-styles': 'off',
      },
    },
  ],
};
