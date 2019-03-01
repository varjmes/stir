module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/config/jest-preprocess.js`,
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/config/loadershim.js`, `<rootDir>/config/enzyme.js`],
  collectCoverage: true,
  collectCoverageFrom: [
    '!**/styles.js',
    '!**/node_modules/**',
    '!**/coverage/**',
    '!gatsby-config.js',
    '!jest.config.js',
    '!config/*.js',
    '**/*.js',
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
    './src/components/': {
      branches: 100,
      statements: 100,
    },
  },
}
