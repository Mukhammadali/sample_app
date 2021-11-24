const path = require('path');
const pak = require('/Users/muhammadali/temp/react-native-lib/package.json');

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json'],
        alias: {
          [pak.name]: path.join(
            '/Users/muhammadali/temp/react-native-lib/',
            pak.source,
          ),
        },
      },
    ],
  ],
};
