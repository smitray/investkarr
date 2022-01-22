// eslint-disable-next-line func-names
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['transform-remove-console'],
      },
    },
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: '.',
          alias: {
            '@modules': './src/modules',
            '@assets': './src/assets',
            '@components': './src/shared/components',
            '@ui': './src/shared/ui',
            '@store': './src/shared/store',
            '@utils': './src/shared/utils',
            '@theme': './src/shared/theme',
            '@cmSt': './src/shared/style',
            '@tp': './src/shared/types',
          },
        },
      ],
    ],
  };
};
