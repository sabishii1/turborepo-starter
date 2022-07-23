const merge = require('deepmerge')

const globalIgnorePaths = ['node_modules', 'dist', 'generated']

/** @type { import('@jest/types').Config.InitialOptions } */
const defaultConfig = {
  rootDir: process.cwd(),
  roots: ['<rootDir>'],
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'cts', 'mts', 'tsx', 'js', 'cjs', 'mjs', 'jsx', 'json', 'node'],

  testRegex: '\\.(e2e-)?(spec|test)\\.ts$',
  testPathIgnorePatterns: [...globalIgnorePaths],

  transform: { '^.+\\.(t|j)s$': 'ts-jest' },
  transformIgnorePatterns: [...globalIgnorePaths],

  collectCoverageFrom: ['<rootDir>/src/**/*.(t|j)s'],
  coveragePathIgnorePatterns: [...globalIgnorePaths],

  globals: {
    'ts-jest': {
      diagnostics: {
        exclude: ['!**/*.(e2e-)?(spec|test).ts'],
      },
    },
  },
}

function generate(
  /** @type { import('@jest/types').Config.InitialOptions } */
  config,
) {
  /** @type { import('@jest/types').Config.InitialOptions } */
  return config ? merge(defaultConfig, config) : defaultConfig
}

module.exports.config = defaultConfig
module.exports.generate = generate
