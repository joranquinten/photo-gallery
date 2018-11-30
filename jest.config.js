module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/enzyme-adapter.js',
  collectCoverageFrom: [
    'common/**/*.{js,jsx,mjs}',
    'components/**/*.{js,jsx,mjs}',
    'layouts/**/*.{js,jsx,mjs}',
    'pages/**/*.{js,jsx,mjs}',
  ],
  testMatch: [
    '<rootDir>/**/__tests__/**/*.{js,jsx,mjs}',
    '<rootDir>/**/?(*.)(spec|test).{js,jsx,mjs}',
  ],
  coverageReporters: ['cobertura', 'text'],
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel7-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|mjs|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '^react-native$': 'react-native-web',
  },
  moduleFileExtensions: ['web.js', 'js', 'json', 'web.jsx', 'jsx', 'node', 'mjs'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
