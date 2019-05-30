module.exports = {
  testPathIgnorePatterns: [
    '/node_modules/',
    '/.cache/',
  ],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
    '^.+\\.module\\.s?css$': 'identity-obj-proxy',
  },
  moduleFileExtensions: [
    'js',
    'json',
    'jsx',
    'ts',
    'tsx',
    'scss',
    'css',
  ],
};
