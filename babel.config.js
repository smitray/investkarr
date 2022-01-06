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
      [
        'module-resolver',
        {
          root: '.',
          alias: {
            '@assets': './src/assets',
            '@components': './src/shared/components',
            '@store': './src/shared/store',
            '@utils': './src/shared/utils',
            '@theme': './src/shared/theme',
          },
        },
      ],
    ],
  };
};
