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
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
