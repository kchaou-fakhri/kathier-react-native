module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts', '.tsx', 'js', 'jsx', '.json'],
        alias: {
          '@contexts': './src/contexts',
          '@utils': './src/utils/',
          '@configNavigation': './src/navigation/',
          '@assets': './src/assets/',
          '@components': './src/components/',
          '@reduxConfig': './src/redux_configuration/',
          '@modules': './src/modules/',
          '@mainAssets': './assets/',
          '@comman': './src/comman/',
          '@services': './src/services/',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
